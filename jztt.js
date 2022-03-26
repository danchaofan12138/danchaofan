
const $ = new Env('九章头条坤坤修改版');
let signi = "X2dk9sdnwoifPv7L";
let dlurl = "https://api.st615.com/v2/user/info?token=";
let videoNum = 3;
let articleNum = 3;

!(async () => {
    const jzreadTokenArr = [''];
    console.log(`共${jzreadTokenArr.length}个cookie`);
    for (let k = 0; k < jzreadTokenArr.length; k++) {
        jzToken = jzreadTokenArr[k];
        await DoAllTask();
    }
}
)()

//执行所有任务
async function DoAllTask() {
    await GetSignCK()
    await ExecuteTask(`get`, dlurl + jzToken, headerss)
    if (result.code == 0) {
        let myMoney = result.data.money;
        console.log(`--------账号:${result.data.name}--------\n现金余额：${result.data.money}元\n金币余额：${result.data.integral}个`);
        await ExecuteTask(`get`, 'https://api.st615.com/v2/user/task?token=', headerss), taskList = result;
        console.log(`已经连续签到：${taskList.data.series}天\n\n`);
        await GetBenefit();

        for (let j = 0; j < taskList.data.daily_task.length; j++) {
            daily_task = taskList.data.daily_task[j];
            if (daily_task.name == "签到奖励" && daily_task.is_finish != 1) {
                //签到奖励任务没有完成，就执行这块签到
                await GetSignCK();
                await ExecuteTask(`post`, 'https://api.st615.com/v2/task/clock', headerss, `is_double=0&token=${jzToken}`);
                data = result;
                console.log(data.data);
                await $.wait(3000);
                await GetSignCK();
                await ExecuteTask(`post`, 'https://api.st615.com/v2/task/continue', headerss, `token=${jzToken}`);
                data = result;
                console.log(data.data);
                await $.wait(3000);
                await GetSignCK();
                await ExecuteTask(`post`, 'https://api.st615.com/v2/sign/sign', headerss, `token=${jzToken}`);
                data = result;
                console.log(data.data);
                await $.wait(3000);
                await GetSignCK();
                await ExecuteTask(`post`, 'https://api.st615.com/v2/task/ads', headerss, `id=94&token=${jzToken}`);
                data = result;
                console.log(data.data);
                await $.wait(3000);
            }
        }
        //看视频
        await WatchVideo(videoNum, VideoType());

        //看任务里面的广告
        for (let i = 0; i < taskList.data.ads_task.length; i++) {
            if (typeof taskList.data.ads_task[i].seconds == 'undefined') {
                console.log(`看广告ing...`)
                await GetSignCK();
                id = taskList.data.ads_task[i].id;
                await ExecuteTask(`post`, `https://api.st615.com/v2/task/ads`, headerss, `id=${id}&token=${jzToken}`);
                datas = result;
                if (datas.code == 0) {
                    console.log(JSON.stringify(datas));
                }
                await $.wait(RT(30000, 36000));
            }
        }


        if (myMoney > 0.3) {
            //提现模块,要钱包大于0.3才会去执行
            await GetSignCK()
            await ExecuteTask(`get`, `https://api.st615.com/v2/log/balance?type=2&page=1&limit=20`, headerss);
            txdata = result;
            if (txdata.code == 0) {
                function getCurrentDate() {
                    var date = new Date();
                    var seperator1 = "-";
                    var seperator2 = ":";
                    var month = date.getMonth() + 1;
                    var strDate = date.getDate();
                    if (month >= 1 && month <= 9) {
                        month = "0" + month;
                    }
                    if (strDate >= 0 && strDate <= 9) {
                        strDate = "0" + strDate;
                    }
                    var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate +
                        " " + date.getHours() + seperator2 + date.getMinutes() +
                        seperator2 + date.getSeconds();
                    return currentdate;
                }
                firstTxLog = txdata.data.list[0];
                //循环查看通宝列表
                txDate = (firstTxLog.add_time).split(` `)[0];
                nowDate = getCurrentDate().split(` `)[0];
                if (firstTxLog.use_type == 1 && txDate != nowDate) {
                    for (let i = 0; i < 3; i++) {
                        //做分享是为了更好的提现！
                        await GetSignCK();
                        console.log(`为了提💰，分享第${i}次...`);
                        await ExecuteTask(`get`, `https://api.st615.com/v2/article/share`, headerss, `device=iPhone%207&id=&os=15.2&source=cash&token=${jzToken}`);
                    }
                    await GetSignCK();
                    await ExecuteTask(`get`, `https://api.st615.com/v2/cash/withdraw-new`, headerss, `token=${jzToken}&type=1&money=0.3`);
                    txResult = result;
                    if (txResult.code == 0) {
                        console.log(`提0.3元 : 成功`);
                    }
                }
            }
        }
        await GetBenefit();
    }
    $.done();
}

//获取加密请求头
async function GetSignCK() {
    ts = Math.round(new Date().getTime() / 1000).toString();
    guid = randomString(16);
    sign = MD5_Encrypt(`${signi}${guid}${ts}`);
    headerss = {
        "Host": "api.st615.com",
        "timestamp": `${ts}`,
        "noncestr": `${guid}`,
        "User-Agent": "ChapterNine/1.2.8 (com.ass.jiuzhang; build:1137; iOS 14.3.0) Alamofire/5.4.4",
        "sign": `${sign}`,
        "token": `${jzToken}`
    };
}

//收益查询接口
async function GetBenefit() {
    await GetSignCK();
    await ExecuteTask(`get`, `https://api.st615.com/v2/index/benefit?token=${jzToken}`, headerss);
    data = result;
    await $.wait(3000);
    if (data.code != 0) {
        console.log(JSON.stringify(data));
    }
}



//调试用LOG 
function showLog(data) {
    if (log) {
        console.log(JSON.stringify(data));
    }
}

//获取文章类别
function GetArticleType() {
    var CIdArray = [{
        "id": -1, "name": "关注"
    }, {
        "id": 0, "name": "推荐"
    }, {
        "id": -2, "name": "热榜"
    }, {
        "id": "100", "name": "中国梦"
    }, {
        "id": "11", "name": "大健康"
    }, {
        "id": "57", "name": "美文能量"
    }, {
        "id": "101", "name": "梵音佛心"
    }, {
        "id": "3", "name": "军事"
    }, {
        "id": "6", "name": "全民抗疫"
    }, {
        "id": "8", "name": "汽车"
    }, {
        "id": "9", "name": "数码"
    }, {
        "id": "10", "name": "体育"
    }, {
        "id": "12", "name": "育儿"
    }, {
        "id": "13", "name": "情感"
    }, {
        "id": "14", "name": "美食"
    }, {
        "id": "15", "name": "萌宠"
    }, {
        "id": "16", "name": "时尚"
    }, {
        "id": "18", "name": "动漫游戏"
    }, {
        "id": "19", "name": "励志"
    }, {
        "id": "20", "name": "养生"
    }, {
        "id": "21", "name": "生活"
    }, {
        "id": "22", "name": "旅行"
    }, {
        "id": "23", "name": "星座"
    }, {
        "id": "24", "name": "历史"
    }, {
        "id": "25", "name": "阅读"
    }, {
        "id": "26", "name": "故事"
    }, {
        "id": "27", "name": "收藏"
    }, {
        "id": "29", "name": "房产"
    }, {
        "id": "30", "name": "家居"
    }, {
        "id": "31", "name": "教育"
    }, {
        "id": "32", "name": "公益"
    }, {
        "id": "33", "name": "新时代"
    }, {
        "id": "34", "name": "党媒推荐"
    }];
    return CIdArray[Math.floor((Math.random() * CIdArray.length))];
}


//读取文章
async function ReadArticle(num, type) {
    await GetSignCK();
    await ExecuteTask(`get`, `https://api.st615.com/v2/article/list?cid=${type.id}&page=1&limit=20&terminal=Apple&version=1.2.8`, headerss);
    articleData = result;
    await $.wait(3000)
    console.log(`开始读文章：`);
    if (articleData.code == 0) {
        for (let i = 0; i < num; i++) {
            await GetSignCK()
            spids = articleData.data.list[i].id;
            console.log(`开始读${type.name}类的《${articleData.data.list[i].title}》...预计花30秒`);
            //先等待30秒之后
            await $.wait(RT(30000, 36000));
            //再提交阅读完成信号
            await ExecuteTask(`post`, `https://api.st615.com/v2/article/finish`, headerss, `id=${spids}&token=${jzToken}`);
            data = result;
            if (data.code == 0) {
                console.log(`${data.msg},获得金币${data.data.coin}`);
            } else {
                console.log(JSON.stringify(data));
            }
        }
    }
}

//视频类别
function VideoType() {
    var CIdArray = [{ "id": -1, "name": "关注" }, { "id": 0, "name": "推荐" }, { "id": -3, "name": "小视频" }, { "id": "35", "name": "影视" }, { "id": "36", "name": "游戏" }, { "id": "37", "name": "音乐" }, { "id": "38", "name": "VLOG" }, { "id": "39", "name": "美食" }, { "id": "40", "name": "农人" }, { "id": "41", "name": "搞笑" }, { "id": "42", "name": "旅游" }, { "id": "43", "name": "综艺" }, { "id": "44", "name": "宠物" }, { "id": "45", "name": "娱乐" }, { "id": "46", "name": "科技" }, { "id": "47", "name": "军事" }, { "id": "48", "name": "懂车帝" }, { "id": "49", "name": "体育" }, { "id": "50", "name": "NBA" }, { "id": "51", "name": "文化" }, { "id": "52", "name": "手工" }, { "id": "53", "name": "经济" }];
    return CIdArray[Math.floor((Math.random() * CIdArray.length))];
}

//看视频
async function WatchVideo(num, type) {

    await GetSignCK();
    await ExecuteTask(`get`, `https://api.st615.com/v2/article/list?type=2&cid=${type.id}&page=1&terminal=Apple&version=1.2.8`, headerss);
    videoData = result;
    await $.wait(3000);
    console.log(`开始看视频：`);
    if (videoData.code == 0) {
        for (let i = 0; i < num; i++) {
            await GetSignCK();
            spids = videoData.data.list[i].id;
            console.log(`开始看${type.name}类的《${videoData.data.list[i].title}》...预计花31秒`);
            //先等待31秒之后
            await $.wait(RT(31000, 33000));
            //再提交阅读完成信号
            await ExecuteTask(`post`, `https://api.st615.com/v2/article/finish`, headerss, `id=${spids}&token=${jzToken}`);
            data = result;
            if (data.code == 0) {
                console.log(`${data.msg},获得金币${data.data.coin}`);
            } else {
                console.log(JSON.stringify(data));
            }
        }
    }
}


function ExecuteTask(method, taskurl, taskheader, taskbody) {
    return new Promise(async resolve => {
        let url = {
            url: taskurl,
            headers: taskheader,
            body: taskbody,
        }
        $[method](url, (err, resp, data) => {
            try {
                if (err) {
                    console.log(`${JSON.stringify(err)}`)

                } else {
                    if (data) {
                        if (data.indexOf(`<body>`) >= 0) {
                            result = data
                        } else {
                            result = JSON.parse(data);
                        }
                    } else {
                        console.log(`服务器返回数据为空`)
                    }
                }
            } catch (e) {
                $.logErr(e, resp)
            } finally {
                resolve();
            }
        })
    })
}
function randomString(e) {
    e = e || 32;
    var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
        a = t.length,
        n = "";
    for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n
}

function RT(X, Y) {
    do rt = Math.floor(Math.random() * Y);
    while (rt < X)
    return rt;
}

function MD5_Encrypt(a) {
    function b(a, b) {
        return a << b | a >>> 32 - b
    }

    function c(a, b) {
        var c, d, e, f, g;
        return e = 2147483648 & a,
            f = 2147483648 & b,
            c = 1073741824 & a,
            d = 1073741824 & b,
            g = (1073741823 & a) + (1073741823 & b),
            c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f :
                g ^ e ^ f
    }

    function d(a, b, c) {
        return a & b | ~a & c
    }

    function e(a, b, c) {
        return a & c | b & ~c
    }

    function f(a, b, c) {
        return a ^ b ^ c
    }

    function g(a, b, c) {
        return b ^ (a | ~c)
    }

    function h(a, e, f, g, h, i, j) {
        return a = c(a, c(c(d(e, f, g), h), j)),
            c(b(a, i), e)
    }

    function i(a, d, f, g, h, i, j) {
        return a = c(a, c(c(e(d, f, g), h), j)),
            c(b(a, i), d)
    }

    function j(a, d, e, g, h, i, j) {
        return a = c(a, c(c(f(d, e, g), h), j)),
            c(b(a, i), d)
    }

    function k(a, d, e, f, h, i, j) {
        return a = c(a, c(c(g(d, e, f), h), j)),
            c(b(a, i), d)
    }

    function l(a) {
        for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i =
            0; c > i;)
            b = (i - i % 4) / 4,
                h = i % 4 * 8,
                g[b] = g[b] | a.charCodeAt(i) << h,
                i++;
        return b = (i - i % 4) / 4,
            h = i % 4 * 8,
            g[b] = g[b] | 128 << h,
            g[f - 2] = c << 3,
            g[f - 1] = c >>> 29,
            g
    }

    function m(a) {
        var b, c, d = "",
            e = "";
        for (c = 0; 3 >= c; c++)
            b = a >>> 8 * c & 255,
                e = "0" + b.toString(16),
                d += e.substr(e.length - 2, 2);
        return d
    }

    function n(a) {
        a = a.replace(/\r\n/g, "\n");
        for (var b = "", c = 0; c < a.length; c++) {
            var d = a.charCodeAt(c);
            128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192),
                b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224),
                    b += String.fromCharCode(d >> 6 & 63 | 128),
                    b += String.fromCharCode(63 & d | 128))
        }
        return b
    }

    var o, p, q, r, s, t, u, v, w, x = [],
        y = 7,
        z = 12,
        A = 17,
        B = 22,
        C = 5,
        D = 9,
        E = 14,
        F = 20,
        G = 4,
        H = 11,
        I = 16,
        J = 23,
        K = 6,
        L = 10,
        M = 15,
        N = 21;
    for (a = n(a),
        x = l(a),
        t = 1732584193,
        u = 4023233417,
        v = 2562383102,
        w = 271733878,
        o = 0; o < x.length; o += 16)
        p = t,
            q = u,
            r = v,
            s = w,
            t = h(t, u, v, w, x[o + 0], y, 3614090360),
            w = h(w, t, u, v, x[o + 1], z, 3905402710),
            v = h(v, w, t, u, x[o + 2], A, 606105819),
            u = h(u, v, w, t, x[o + 3], B, 3250441966),
            t = h(t, u, v, w, x[o + 4], y, 4118548399),
            w = h(w, t, u, v, x[o + 5], z, 1200080426),
            v = h(v, w, t, u, x[o + 6], A, 2821735955),
            u = h(u, v, w, t, x[o + 7], B, 4249261313),
            t = h(t, u, v, w, x[o + 8], y, 1770035416),
            w = h(w, t, u, v, x[o + 9], z, 2336552879),
            v = h(v, w, t, u, x[o + 10], A, 4294925233),
            u = h(u, v, w, t, x[o + 11], B, 2304563134),
            t = h(t, u, v, w, x[o + 12], y, 1804603682),
            w = h(w, t, u, v, x[o + 13], z, 4254626195),
            v = h(v, w, t, u, x[o + 14], A, 2792965006),
            u = h(u, v, w, t, x[o + 15], B, 1236535329),
            t = i(t, u, v, w, x[o + 1], C, 4129170786),
            w = i(w, t, u, v, x[o + 6], D, 3225465664),
            v = i(v, w, t, u, x[o + 11], E, 643717713),
            u = i(u, v, w, t, x[o + 0], F, 3921069994),
            t = i(t, u, v, w, x[o + 5], C, 3593408605),
            w = i(w, t, u, v, x[o + 10], D, 38016083),
            v = i(v, w, t, u, x[o + 15], E, 3634488961),
            u = i(u, v, w, t, x[o + 4], F, 3889429448),
            t = i(t, u, v, w, x[o + 9], C, 568446438),
            w = i(w, t, u, v, x[o + 14], D, 3275163606),
            v = i(v, w, t, u, x[o + 3], E, 4107603335),
            u = i(u, v, w, t, x[o + 8], F, 1163531501),
            t = i(t, u, v, w, x[o + 13], C, 2850285829),
            w = i(w, t, u, v, x[o + 2], D, 4243563512),
            v = i(v, w, t, u, x[o + 7], E, 1735328473),
            u = i(u, v, w, t, x[o + 12], F, 2368359562),
            t = j(t, u, v, w, x[o + 5], G, 4294588738),
            w = j(w, t, u, v, x[o + 8], H, 2272392833),
            v = j(v, w, t, u, x[o + 11], I, 1839030562),
            u = j(u, v, w, t, x[o + 14], J, 4259657740),
            t = j(t, u, v, w, x[o + 1], G, 2763975236),
            w = j(w, t, u, v, x[o + 4], H, 1272893353),
            v = j(v, w, t, u, x[o + 7], I, 4139469664),
            u = j(u, v, w, t, x[o + 10], J, 3200236656),
            t = j(t, u, v, w, x[o + 13], G, 681279174),
            w = j(w, t, u, v, x[o + 0], H, 3936430074),
            v = j(v, w, t, u, x[o + 3], I, 3572445317),
            u = j(u, v, w, t, x[o + 6], J, 76029189),
            t = j(t, u, v, w, x[o + 9], G, 3654602809),
            w = j(w, t, u, v, x[o + 12], H, 3873151461),
            v = j(v, w, t, u, x[o + 15], I, 530742520),
            u = j(u, v, w, t, x[o + 2], J, 3299628645),
            t = k(t, u, v, w, x[o + 0], K, 4096336452),
            w = k(w, t, u, v, x[o + 7], L, 1126891415),
            v = k(v, w, t, u, x[o + 14], M, 2878612391),
            u = k(u, v, w, t, x[o + 5], N, 4237533241),
            t = k(t, u, v, w, x[o + 12], K, 1700485571),
            w = k(w, t, u, v, x[o + 3], L, 2399980690),
            v = k(v, w, t, u, x[o + 10], M, 4293915773),
            u = k(u, v, w, t, x[o + 1], N, 2240044497),
            t = k(t, u, v, w, x[o + 8], K, 1873313359),
            w = k(w, t, u, v, x[o + 15], L, 4264355552),
            v = k(v, w, t, u, x[o + 6], M, 2734768916),
            u = k(u, v, w, t, x[o + 13], N, 1309151649),
            t = k(t, u, v, w, x[o + 4], K, 4149444226),
            w = k(w, t, u, v, x[o + 11], L, 3174756917),
            v = k(v, w, t, u, x[o + 2], M, 718787259),
            u = k(u, v, w, t, x[o + 9], N, 3951481745),
            t = c(t, p),
            u = c(u, q),
            v = c(v, r),
            w = c(w, s);
    var O = m(t) + m(u) + m(v) + m(w);
    return O.toLowerCase()
}

function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
