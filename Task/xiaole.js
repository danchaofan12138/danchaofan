/* ziye 

github地址 https://github.com/6Svip120apk69
TG频道地址  https://t.me/ziyescript
TG交流群   https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接  https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/ziye.boxjs.json

转载请备注个名字，谢谢


1.18 修复兑换错误
1.20 调整为打卡满10次且大于等于0.3进行兑换
1.25 调整签到时间为12到13点之间
2.23 调整随机延时时长
3.5 增加ck失效提醒，注意，微信一段时间不在登陆状态，ck就会失效
3.8 替换为循环获取ck

⚠️小乐
可以签到 10次 共0.3
打卡  符合规则可以打卡


一共1个位置 1个ck  2条 Secrets 
多账号换行


第一步 微信扫码 https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/xiaole.png  获取授权

第二步 
开代理软件，添加主机名 重写 ，然后点 我的 获取url header


变量对应关系👇
xiaoleurlVal     👉  XL_URL
xiaoleheaderVal  👉  XL_HEADER



⚠️主机名以及重写👇

hostname=minapp.xqrobot.net,

############## 圈x
#小乐获取ck
https:\/\/minapp\.xqrobot\.net\/* url script-request-header https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/xiaole.js

############## loon

#小乐获取ck
http-request https:\/\/minapp\.xqrobot\.net\/* script-path=https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/xiaole.js, requires-header=true, tag=小乐获取ck

############## surge

#小乐获取ck
小乐获取ck = type=http-request,pattern=https:\/\/minapp\.xqrobot\.net\/*,script-path=https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/xiaole.js, 

*/
const $ = Env("小乐");
$.idx = ($.idx = ($.getval('xlSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const notify = $.isNode() ? require("./sendNotify") : ``;
const COOKIE = $.isNode() ? require("./xiaoleCOOKIE") : ``;
const logs = 0; // 0为关闭日志，1为开启
const notifyttt = 1 // 0为关闭外部推送，1为12 23 点外部推送
const notifyInterval = 2; // 0为关闭通知，1为所有通知，2为12 23 点通知  ， 3为 6 12 18 23 点通知 

let money;
$.message = '', $.messagesss = '', $.index = '', $.clocklog = '', COOKIES_SPLIT = '';

const xiaoleurlArr = [];
let xiaoleurlVal = ``;
const xiaoleheaderArr = [];
let xiaoleheaderVal = ``;
let middlexiaoleURL = [];
let middlexiaoleHEADER = [];


if ($.isNode() && process.env.XL_URL) {
    COOKIES_SPLIT = process.env.COOKIES_SPLIT || "\n";
    console.log(
        `============ cookies分隔符为：${JSON.stringify(
      COOKIES_SPLIT
    )} =============\n`
    );
    if (
        process.env.XL_URL &&
        process.env.XL_URL.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlexiaoleURL = process.env.XL_URL.split(COOKIES_SPLIT);
    } else {
        middlexiaoleURL = process.env.XL_URL.split();
    }
    if (
        process.env.XL_HEADER &&
        process.env.XL_HEADER.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlexiaoleHEADER = process.env.XL_HEADER.split(COOKIES_SPLIT);
    } else {
        middlexiaoleHEADER = process.env.XL_HEADER.split();
    }
}
if (COOKIE.xiaoleurlVal) {
    XL_COOKIES = {
        "xiaoleurlVal": COOKIE.xiaoleurlVal.split('\n'),
        "xiaoleheaderVal": COOKIE.xiaoleheaderVal.split('\n'),
    }
    Length = XL_COOKIES.xiaoleurlVal.length;
}
if (!COOKIE.xiaoleurlVal) {
    if ($.isNode()) {
        Object.keys(middlexiaoleURL).forEach((item) => {
            if (middlexiaoleURL[item]) {
                xiaoleurlArr.push(middlexiaoleURL[item]);
            }
        });
        Object.keys(middlexiaoleHEADER).forEach((item) => {
            if (middlexiaoleHEADER[item]) {
                xiaoleheaderArr.push(middlexiaoleHEADER[item]);
            }
        });
    } else {
        xiaoleurlArr.push($.getdata("xiaoleurl"));
        xiaoleheaderArr.push($.getdata("xiaolehd"));
        // 根据boxjs中设置的额外账号数，添加存在的账号数据进行任务处理
        let xlCount = ($.getval('xlCount') || '1') - 0;
        for (let i = 2; i <= xlCount; i++) {
            if ($.getdata(`xiaoleurl${i}`)) {
                xiaoleurlArr.push($.getdata(`xiaoleurl${i}`));
                xiaoleheaderArr.push($.getdata(`xiaolehd${i}`));
            }
        }
    }
    if (xiaoleurlArr == '') {
        Length = 0
    } else Length = xiaoleurlArr.length

}

function GetCookie() {
    //签到
    if ($request && $request.url.indexOf("/user.php?mod=index&") >= 0) {
        const xiaoleurlVal = $request.url;
        const xiaoleheaderVal = JSON.stringify($request.headers);
        if (xiaoleheaderVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('xiaoleurl' + $.idx);
                 if (bodys) {
                    if (bodys.indexOf(xiaoleheaderVal) >= 0) {
                        $.log(
                            `[${$.name + $.idx}] xiaoleurlVal已存在✅: xiaoleurlVal: ${xiaoleurlVal}`
                        );
                        $.msg($.name + $.idx, `xiaoleurlVal已存在: 🎉`, ``);
                        $.done();
                    } else if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    
                        $.setdata(xiaoleurlVal, "xiaoleurl" + $.idx);
                        $.setdata(xiaoleheaderVal, "xiaolehd" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取url✅: 成功,xiaoleurlVal: ${xiaoleurlVal}`
                        );
                        $.msg($.name + $.idx, `获取url: 成功🎉`, ``);
                        $.log(
                            `[${$.name + $.idx}] 获取header✅: 成功,xiaoleheaderVal: ${xiaoleheaderVal}`
                        );
                        $.msg($.name + $.idx, `获取header: 成功🎉`, ``);
                        $.done();
                };

            }

        }

    }
}
console.log(
    `================== 脚本执行 - 北京时间(UTC+8)：${new Date(
    new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000
  ).toLocaleString()} =====================\n`
);
console.log(
    `============ 共 ${Length} 个${$.name}账号=============\n`
);
//时间
nowTimes = new Date(
    new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000
);
//今天
Y = nowTimes.getFullYear() + '-';
M = (nowTimes.getMonth() + 1 < 10 ? '0' + (nowTimes.getMonth() + 1) : nowTimes.getMonth() + 1) + '-';
D = (nowTimes.getDate() < 10 ? '0' + (nowTimes.getDate()) : nowTimes.getDate());
ddtime = Y + M + D;
console.log(ddtime)
//当前时间戳
function tts(inputTime) {
    if ($.isNode()) {
        TTS = Math.round(new Date().getTime() +
            new Date().getTimezoneOffset() * 60 * 1000).toString();
    } else TTS = Math.round(new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 + 8 * 60 * 60 * 1000).toString();
    return TTS;
};
//当前10位时间戳
function ts(inputTime) {
    if ($.isNode()) {
        TS = Math.round((new Date().getTime() +
            new Date().getTimezoneOffset() * 60 * 1000) / 1000).toString();
    } else TS = Math.round((new Date().getTime() +
        new Date().getTimezoneOffset() * 60 * 1000 +
        8 * 60 * 60 * 1000) / 1000).toString();
    return TS;
};
//今天0点时间戳时间戳
function daytime(inputTime) {
    if ($.isNode()) {
        DAYTIME =
            new Date(new Date().toLocaleDateString()).getTime() - 8 * 60 * 60 * 1000;
    } else DAYTIME = new Date(new Date().toLocaleDateString()).getTime();
    return DAYTIME;
};
//时间戳格式化日期
function time(inputTime) {
    if ($.isNode()) {
        var date = new Date(inputTime + 8 * 60 * 60 * 1000);
    } else var date = new Date(inputTime);
    Y = date.getFullYear() + '-';
    M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
    D = date.getDate() + ' ';
    h = date.getHours() + ':';
    m = date.getMinutes() + ':';
    s = date.getSeconds();
    return Y + M + D + h + m + s;
};
//日期格式化时间戳
function timecs() {
    if ($.isNode()) {
        var date = new Date(newtime).getTime() - 8 * 60 * 60 * 1000
    } else var date = new Date(newtime).getTime()

    return date;
};
//随机udid 大写
function udid() {
    var s = [];
    var hexDigits = "0123456789ABCDEF";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
}
//随机udid 小写
function udid2() {
    function S4() {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    }
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}
//编码
function encodeUnicode(str) {
    var res = [];
    for (var i = 0; i < str.length; i++) {
        res[i] = ("00" + str.charCodeAt(i).toString(16)).slice(-4);
    }
    return "\\u" + res.join("\\u");
}
//解码
function decodeUnicode(str) {
    str = str.replace(/\\/g, "%");
    return unescape(str);
}
let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
    GetCookie()
    $.done();

} else {
    !(async () => {
        await all();
        await msgShow();
    })()
    .catch((e) => {
            $.log('', `❌ ${O}, 失败! 原因: ${e}!`, '')
        })
        .finally(() => {
            $.done();
        })
}
async function all() {
    if (!Length) {
        $.msg(
            $.name,
            '提示：⚠️请点击前往获取cookie\n',
            'https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/xiaole.png', {
                "open-url": "https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/xiaole.png"
            }
        );
        return;
    }
    for (let i = 0; i < Length; i++) {
        if (COOKIE.xiaoleurlVal) {
            xiaoleurlVal = XL_COOKIES.xiaoleurlVal[i];
            xiaoleheaderVal = XL_COOKIES.xiaoleheaderVal[i];
        }
        if (!COOKIE.xiaoleurlVal) {
            xiaoleurlVal = xiaoleurlArr[i];
            xiaoleheaderVal = xiaoleheaderArr[i];
        }
        //随机时间
        do out = Math.floor(Math.random() * 50);
        while (out < 25)
        O = (`${$.name + (i + 1)}🔔`);
        await console.log(`-------------------------\n\n🔔开始运行【${$.name+(i+1)}】`)

        let cookie_is_live = await coin(); //账户信息
        if (!cookie_is_live) {
            continue;
        }

        if (nowTimes.getHours() >= 12 && nowTimes.getHours() <= 13 && $.coin.info && $.coin.info.task_list[0].state == 0) {
            await Sign(); //签到   
        }

        await integral(); //兑换信息
        await clocklog(); //打卡记录 
        if (nowTimes.getHours() >= 8 && $.clocklog.info && !$.clocklog.info.log.length) {
            await clock()
        }; //首次打卡
        if (nowTimes.getHours() >= 8 && $.clocklog.info.log.length && $.clocklog.info.log.length <= 9) {
            console.log('随机延迟' + out + '秒')
            await clock(); //打卡
        }

        await index(); //打卡信息  
        if (nowTimes.getHours() >= 8 && $.integral.info && $.clocklog.info.log.length == 10 && money >= 0.3) {
            await $.wait(out * 500);
            await exchange(); //兑换
        }
    }
}
//通知
function msgShow() {
    return new Promise(async resolve => {
        if (notifyInterval != 1) {
            console.log($.name + '\n' + $.message);
        }
        if (notifyInterval == 1) {
            $.msg($.name, ``, $.message);
        }
        if (notifyInterval == 2 && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10)) {
            $.msg($.name, ``, $.message);
        }
        if (notifyInterval == 3 && (nowTimes.getHours() === 6 || nowTimes.getHours() === 12 || nowTimes.getHours() === 18 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10)) {
            $.msg($.name, ``, $.message);
        }
        if (notifyttt == 1 && $.isNode() && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 59))
            await notify.sendNotify($.name, $.messagesss);
        resolve()
    })
}
//账户信息  
function coin(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: xiaoleurlVal,
                headers: JSON.parse(xiaoleheaderVal),
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 账户信息🚩: ${data}`);
                    $.coin = JSON.parse(data);
                    if ($.coin && $.coin.info && $.coin.info.user_money) {
                        $.message += `\n${O}`;
                        $.message += `\n========== 【${$.coin.info.user_name}】 ==========\n` +
                            '【现金余额】：' + $.coin.info.user_money + '元' + '\n' +
                            '【今日收益】：' + $.coin.info.jiang_day1 + '元' + '\n' +
                            '【本月收益】：' + $.coin.info.jiang_month1 + '元' + '\n' +
                            '【签到信息】：' + $.coin.info.task_list[0].name + '\n' +
                            '【签到奖励】：' + $.coin.info.task_list[0].money + '\n' +
                            '【签到收益】：' + $.coin.info.task_list[0].desc + '\n' +
                            '【签到任务】：' + $.coin.info.task_list[0].btn + '\n' +
                            '【邀请信息】：' + $.coin.info.task_list[1].name + '\n' +
                            '【邀请奖励】：' + $.coin.info.task_list[1].money + '\n' +
                            '【邀请收益】：' + $.coin.info.task_list[1].desc + '\n'

                        $.messagesss += `\n========== 【${$.coin.info.user_name}】 ==========\n` +
                            '【现金余额】：' + $.coin.info.user_money + '元' + '\n' +
                            '【签到任务】：' + $.coin.info.task_list[0].btn + '\n'

                        resolve(true);
                    } else {
                        $.msg(O, time(Number(tts())) + "❌❌❌COOKIE失效");
                        if ($.isNode()) {
                            notify.sendNotify(O, time(Number(tts())) + "❌❌❌COOKIE失效");
                        }
                        resolve(false);
                    }

                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//签到
function Sign(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let body = `pesubmit=`;
            xiaolesignheader = xiaoleheaderVal.replace(/json/g, `x-www-form-urlencoded`);
            let url = {
                url: xiaoleurlVal.replace(/mod=index/g, `mod=sign`),
                headers: JSON.parse(xiaolesignheader),
                body: body,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 签到🚩: ${data}`);
                    $.Sign = JSON.parse(data);
                    if ($.Sign.result == true) {
                        $.message += '【签到成功】:' + $.Sign.show + '\n'
                        $.messagesss += '【签到成功】:' + $.Sign.show + '\n'
                    }
                    if ($.Sign.result == false) {
                        $.message += '【签到失败】:' + $.Sign.show + '\n'
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}

//兑换信息
function integral(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: xiaoleurlVal.replace(`user.php?mod=index`, `daka.php?mod=my&act=integral`),
                headers: JSON.parse(xiaoleheaderVal),
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 兑换中心🚩: ${data}`);
                    $.integral = JSON.parse(data);
                    if ($.integral.result == true) {
                        $.mibi = $.integral.info.mibi
                        $.money = $.integral.info.config.currency_money
                        money = $.mibi * $.money

                        $.message +=
                            '【米币价值】：' + $.money + '元' + '\n' +
                            '【米币余额】：' + ($.mibi * $.money).toFixed(2) + '元' + '\n'
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}

//打卡记录
function clocklog(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: xiaoleurlVal.replace(`user.php?mod=index`, `daka.php?mod=clock&act=log&level=1&p=1&today=1`),
                headers: JSON.parse(xiaoleheaderVal),
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 签到🚩: ${data}`);
                    $.clocklog = JSON.parse(data);
                    if ($.clocklog.result == true && $.clocklog.info.log.length) {
                        let v = $.clocklog.info.log.length - 1
                        let dktime = $.clocklog.info.log[v].created
                        $.message += '【上次打卡】:' + dktime + '\n';
                    }
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}

//打卡
function clock(timeout = out * 1000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: xiaoleurlVal.replace(`user.php?mod=index`, `daka.php?mod=clock&act=sign`),
                headers: JSON.parse(xiaoleheaderVal),
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 打卡🚩: ${data}`);
                    $.message += '【打卡成功】:打卡次数+1\n'
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}

//打卡信息  
function index(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: xiaoleurlVal.replace(`user.php?mod=index`, `daka.php?mod=index&act=today`),
                headers: JSON.parse(xiaoleheaderVal),
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 打卡信息🚩: ${data}`);
                    $.index = JSON.parse(data);
                    $.jrdk = $.index.info.today.clock
                    $.jrcurrency = $.index.info.today.currency
                    $.message +=
                        '【今日打卡】：' + $.jrdk + '次' + '\n' +
                        '【今日收益】：' + ($.jrcurrency * $.money).toFixed(2) + '元' + '\n'
                    $.messagesss +=
                        '【今日打卡】：' + $.jrdk + '次' + '\n' +
                        '【今日收益】：' + ($.jrcurrency * $.money).toFixed(2) + '元' + '\n'

                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}




//兑换
function exchange(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: xiaoleurlVal.replace(`user.php?mod=index`, `daka.php?mod=shop&act=exchange&money=${money}&currency=${$.mibi}`),
                headers: JSON.parse(xiaoleheaderVal),
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 兑换🚩: ${data}`);
                    $.message += '【兑换成功】:' + money + '元\n'
                    $.messagesss += '【兑换成功】:' + money + '元\n'
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}





// prettier-ignore
function Env(t, e) {
    class s {
        constructor(t) {
            this.env = t
        }
        send(t, e = "GET") {
            t = "string" == typeof t ? {
                url: t
            } : t;
            let s = this.get;
            return "POST" === e && (s = this.post), new Promise((e, i) => {
                s.call(this, t, (t, s, r) => {
                    t ? i(t) : e(s)
                })
            })
        }
        get(t) {
            return this.send.call(this.env, t)
        }
        post(t) {
            return this.send.call(this.env, t, "POST")
        }
    }
    return new class {
        constructor(t, e) {
            this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log(``, `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
        }
        isNode() {
            return "undefined" != typeof module && !!module.exports
        }
        isQuanX() {
            return "undefined" != typeof $task
        }
        isSurge() {
            return "undefined" != typeof $httpClient && "undefined" == typeof $loon
        }
        isLoon() {
            return "undefined" != typeof $loon
        }
        toObj(t, e = null) {
            try {
                return JSON.parse(t)
            } catch {
                return e
            }
        }
        toStr(t, e = null) {
            try {
                return JSON.stringify(t)
            } catch {
                return e
            }
        }
        getjson(t, e) {
            let s = e;
            const i = this.getdata(t);
            if (i) try {
                s = JSON.parse(this.getdata(t))
            } catch {}
            return s
        }
        setjson(t, e) {
            try {
                return this.setdata(JSON.stringify(t), e)
            } catch {
                return !1
            }
        }
        getScript(t) {
            return new Promise(e => {
                this.get({
                    url: t
                }, (t, s, i) => e(i))
            })
        }
        runScript(t, e) {
            return new Promise(s => {
                let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
                i = i ? i.replace(/\n/g, ``).trim() : i;
                let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
                r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
                const [o, h] = i.split("@"), a = {
                    url: `http://${h}/v1/scripting/evaluate`,
                    body: {
                        script_text: t,
                        mock_type: "cron",
                        timeout: r
                    },
                    headers: {
                        "X-Key": o,
                        Accept: "*/*"
                    }
                };
                this.post(a, (t, e, i) => s(i))
            }).catch(t => this.logErr(t))
        }
        loaddata() {
            if (!this.isNode()) return {}; {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e);
                if (!s && !i) return {}; {
                    const i = s ? t : e;
                    try {
                        return JSON.parse(this.fs.readFileSync(i))
                    } catch (t) {
                        return {}
                    }
                }
            }
        }
        writedata() {
            if (this.isNode()) {
                this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
                const t = this.path.resolve(this.dataFile),
                    e = this.path.resolve(process.cwd(), this.dataFile),
                    s = this.fs.existsSync(t),
                    i = !s && this.fs.existsSync(e),
                    r = JSON.stringify(this.data);
                s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r)
            }
        }
        lodash_get(t, e, s) {
            const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
            let r = t;
            for (const t of i)
                if (r = Object(r)[t], void 0 === r) return s;
            return r
        }
        lodash_set(t, e, s) {
            return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t)
        }
        getdata(t) {
            let e = this.getval(t);
            if (/^@/.test(t)) {
                const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ``;
                if (r) try {
                    const t = JSON.parse(r);
                    e = t ? this.lodash_get(t, i, ``) : e
                } catch (t) {
                    e = ``
                }
            }
            return e
        }
        setdata(t, e) {
            let s = !1;
            if (/^@/.test(e)) {
                const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}";
                try {
                    const e = JSON.parse(h);
                    this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i)
                } catch (e) {
                    const o = {};
                    this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i)
                }
            } else s = this.setval(t, e);
            return s
        }
        getval(t) {
            return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null
        }
        setval(t, e) {
            return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null
        }
        initGotEnv(t) {
            this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar))
        }
        get(t, e = (() => {})) {
            t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.get(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
                try {
                    if (t.headers["set-cookie"]) {
                        const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                        this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar
                    }
                } catch (t) {
                    this.logErr(t)
                }
            }).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => {
                const {
                    message: s,
                    response: i
                } = t;
                e(s, i, i && i.body)
            }))
        }
        post(t, e = (() => {})) {
            if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
                "X-Surge-Skip-Scripting": !1
            })), $httpClient.post(t, (t, s, i) => {
                !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i)
            });
            else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
                hints: !1
            })), $task.fetch(t).then(t => {
                const {
                    statusCode: s,
                    statusCode: i,
                    headers: r,
                    body: o
                } = t;
                e(null, {
                    status: s,
                    statusCode: i,
                    headers: r,
                    body: o
                }, o)
            }, t => e(t));
            else if (this.isNode()) {
                this.initGotEnv(t);
                const {
                    url: s,
                    ...i
                } = t;
                this.got.post(s, i).then(t => {
                    const {
                        statusCode: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    } = t;
                    e(null, {
                        status: s,
                        statusCode: i,
                        headers: r,
                        body: o
                    }, o)
                }, t => {
                    const {
                        message: s,
                        response: i
                    } = t;
                    e(s, i, i && i.body)
                })
            }
        }
        time(t) {
            let e = {
                "M+": (new Date).getMonth() + 1,
                "d+": (new Date).getDate(),
                "H+": (new Date).getHours(),
                "m+": (new Date).getMinutes(),
                "s+": (new Date).getSeconds(),
                "q+": Math.floor(((new Date).getMonth() + 3) / 3),
                S: (new Date).getMilliseconds()
            };
            /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + ``).substr(4 - RegExp.$1.length)));
            for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr((`` + e[s]).length)));
            return t
        }
        msg(e = t, s = ``, i = ``, r) {
            const o = t => {
                if (!t) return t;
                if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? {
                    "open-url": t
                } : this.isSurge() ? {
                    url: t
                } : void 0;
                if ("object" == typeof t) {
                    if (this.isLoon()) {
                        let e = t.openUrl || t.url || t["open-url"],
                            s = t.mediaUrl || t["media-url"];
                        return {
                            openUrl: e,
                            mediaUrl: s
                        }
                    }
                    if (this.isQuanX()) {
                        let e = t["open-url"] || t.url || t.openUrl,
                            s = t["media-url"] || t.mediaUrl;
                        return {
                            "open-url": e,
                            "media-url": s
                        }
                    }
                    if (this.isSurge()) {
                        let e = t.url || t.openUrl || t["open-url"];
                        return {
                            url: e
                        }
                    }
                }
            };
            this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
            let h = [``, "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
            h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
        }
        log(...t) {
            t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
        }
        logErr(t, e) {
            const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
            s ? this.log(``, `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log(``, `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
        }
        wait(t) {
            return new Promise(e => setTimeout(e, t))
        }
        done(t = {}) {
            const e = (new Date).getTime(),
                s = (e - this.startTime) / 1e3;
            this.log(``, `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
        }
    }(t, e)
}