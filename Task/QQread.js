/* ziye 
github地址 https://github.com/6Svip120apk69
TG频道地址  https://t.me/ziyescript
TG交流群   https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接  https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/ziye.boxjs.json

转载请备注个名字，谢谢

⚠️QQ阅读APP
请点击前往下载  https://apps.apple.com/cn/app/qq%E9%98%85%E8%AF%BB-%E7%9C%8B%E5%B0%8F%E8%AF%B4%E5%A4%A7%E5%85%A8%E7%9A%84%E7%94%B5%E5%AD%90%E4%B9%A6%E9%98%85%E8%AF%BB%E7%A5%9E%E5%99%A8/id487608658
或者自行下载  

2.19 制作
2.20 调整ck获取方式
2.20-2 满15提现，请先绑定好手机号
3.8 替换为循环获取ck

⚠️一共1个位置 1个ck  👉 1条 Secrets
多账号换行

第一步 添加  hostname=iostgw6.reader.qq.com,newios.reader.qq.com,

第二步 添加url重写 
登录QQ阅读APP   获取url

QQreadurlVal 👉QQ_QQreadURL

⚠️主机名以及重写👇
hostname=iostgw6.reader.qq.com,newios.reader.qq.com,

############## 圈x
#QQ阅读APP获取url
https:\/\/(iostgw6\.reader\.qq\.com\/*||newios\.reader\.qq\.com\/*) url script-request-header https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/QQread.js   

############## loon
#QQ阅读APP获取url
http-request https:\/\/(iostgw6\.reader\.qq\.com\/*||newios\.reader\.qq\.com\/*) script-path=https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/QQread.js, requires-header=true, tag=QQ阅读APP获取url

############## surge
#QQ阅读APP获取url
QQ阅读APP获取url = type=http-request,pattern=https:\/\/(iostgw6\.reader\.qq\.com\/*||newios\.reader\.qq\.com\/*),script-path=https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/QQread.js

*/
const $ = Env("QQ阅读APP");
$.idx = ($.idx = ($.getval('QQreadSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const notify = $.isNode() ? require("./sendNotify") : ``;
const COOKIE = $.isNode() ? require("./QQreadCOOKIE") : ``;
const logs = 0; // 0为关闭日志，1为开启
const notifyttt = 1 // 0为关闭外部推送，1为12 23 点外部推送
const notifyInterval = 2; // 0为关闭通知，1为所有通知，2为12 23 点通知  ， 3为 6 12 18 23 点通知 
$.message = '', COOKIES_SPLIT = '', CASH = '', ddtime = '';

const QQreadurlArr = [];
let QQreadurlVal = ``;
let middleQQreadURL = [];


if ($.isNode() && process.env.QQ_QQreadURL) {
    COOKIES_SPLIT = process.env.COOKIES_SPLIT || "\n";
    console.log(
        `============ cookies分隔符为：${JSON.stringify(
      COOKIES_SPLIT
    )} =============\n`
    );
    if (
        process.env.QQ_QQreadURL &&
        process.env.QQ_QQreadURL.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleQQreadURL = process.env.QQ_QQreadURL.split(COOKIES_SPLIT);
    } else {
        middleQQreadURL = process.env.QQ_QQreadURL.split();
    }
}
if (COOKIE.QQreadurlVal) {
    QQ_COOKIES = {
        "QQreadurlVal": COOKIE.QQreadurlVal.split('\n'),
    }
    Length = QQ_COOKIES.QQreadurlVal.length;
}
if (!COOKIE.QQreadurlVal) {
    if ($.isNode()) {
        Object.keys(middleQQreadURL).forEach((item) => {
            if (middleQQreadURL[item]) {
                QQreadurlArr.push(middleQQreadURL[item]);
            }
        });
    } else {
        QQreadurlArr.push($.getdata("QQreadurl"));
        // 根据boxjs中设置的额外账号数，添加存在的账号数据进行任务处理
        let QQreadCount = ($.getval('QQreadCount') || '1') - 0;
        for (let i = 2; i <= QQreadCount; i++) {
            if ($.getdata(`QQreadurl${i}`)) {
                QQreadurlArr.push($.getdata(`QQreadurl${i}`));
            }
        }
    }
    if (QQreadurlArr == '') {
        Length = 0
    } else Length = QQreadurlArr.length
}

function GetCookie() {
    if ($request && $request.url.indexOf("userinfo") >= 0) {


        const QQreadurlVal = $request.url
        if (QQreadurlVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('QQreadurl' + $.idx);
                 if (bodys) {
                    if (bodys.indexOf(QQreadurlVal) >= 0) {
                        $.log(
                            `[${$.name + $.idx}] QQreadurlVal已存在✅: QQreadurlVal: ${QQreadurlVal}`
                        );
                        $.msg($.name + $.idx, `QQreadurlVal已存在: 🎉`, ``);
                        $.done();
                    } else if ($.idx == '') {
                        $.idx = 2
                        cookie()
                    } else {
                        $.idx = $.idx + 1
                        cookie()
                    }
                } else {
                    {
                        $.setdata(QQreadurlVal, "QQreadurl" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取QQreadurlVal✅: 成功,QQreadurlVal: ${QQreadurlVal}`
                        );
                        $.msg($.name + $.idx, `获取QQreadurlVal: 成功🎉`, ``);

                        $.done();
                    }
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


let isGetCookie = typeof $request !== 'undefined'
if (isGetCookie) {
    GetCookie()
    $.done();
} else {
    !(async () => {
        await all();
        //await $.wait(1000);
        await msgShow();
    })()
    .catch((e) => {
            $.log('', `❌ ${$.name}, 失败! 原因: ${e}!`, '')
        })
        .finally(() => {
            $.done();
        })
}
async function all() {
    if (!Length) {
        $.msg(
            $.name,
            '提示：⚠️请点击前往获取CK  https://apps.apple.com/cn/app/qq%E9%98%85%E8%AF%BB-%E7%9C%8B%E5%B0%8F%E8%AF%B4%E5%A4%A7%E5%85%A8%E7%9A%84%E7%94%B5%E5%AD%90%E4%B9%A6%E9%98%85%E8%AF%BB%E7%A5%9E%E5%99%A8/id487608658\n',
            'https://apps.apple.com/cn/app/qq%E9%98%85%E8%AF%BB-%E7%9C%8B%E5%B0%8F%E8%AF%B4%E5%A4%A7%E5%85%A8%E7%9A%84%E7%94%B5%E5%AD%90%E4%B9%A6%E9%98%85%E8%AF%BB%E7%A5%9E%E5%99%A8/id487608658', {
                "open-url": "https://apps.apple.com/cn/app/qq%E9%98%85%E8%AF%BB-%E7%9C%8B%E5%B0%8F%E8%AF%B4%E5%A4%A7%E5%85%A8%E7%9A%84%E7%94%B5%E5%AD%90%E4%B9%A6%E9%98%85%E8%AF%BB%E7%A5%9E%E5%99%A8/id487608658"
            }
        );
        $.done();
    }
    for (let i = 0; i < Length; i++) {
        if (COOKIE.QQreadurlVal) {
            QQreadurlVal = QQ_COOKIES.QQreadurlVal[i];
        }
        if (!COOKIE.QQreadurlVal) {
            QQreadurlVal = QQreadurlArr[i];
        }

        ywkey = QQreadurlVal.split('&')[0].split('=')[1]
        ywguid = QQreadurlVal.split('&')[1].split('=')[1]

        QQreadheaderVal = {
            "Accept": "*/*",
            "qrem": "0",
            "qrtm": `${ts()}`,
            "ua": "",
            "rcmd": "1",
            "Accept-Encoding": "gzip",
            "net_type": "1",
            "platform": "ioswp",
            "youngerMode": "0",
            "loginType": "2",
            "text_type": "1",
            "version": "qqreader_7.5.70.0354_iphone",
            "Accept-Language": "zh-cn",
            "User-Agent": "QQReaderUI/2558 CFNetwork/1206 Darwin/20.1.0",
            "ywkey": `${ywkey}`,
            "qimei": "",
            "auditStatus": "0",
            "Host": "commontgw6.reader.qq.com",
            "ywguid": `${ywguid}`,
            "Cache-Control": "no-cache",
            "server_sex": "1",
            "themeid": "2000",
            "Connection": "keep-alive",
            "IDFA": "",
            "nosid": "1",
            "gselect": "-1",
        }

        QQreadheaderVal.IDFA = udid()
        QQreadheaderVal.qimei = udid2()
        O = (`${$.name + (i + 1)}🔔`);
        await console.log(`-------------------------\n\n🔔开始运行【${$.name+(i+1)}】`)
        await user(); //用户信息
        QQreadheaderVal.Host = 'eventv36.reader.qq.com'
        await signindex(); //签到列表
        await days(); //任务列表
        if ($.signindex && $.signindex.data.finished == false) {
            await sign(); //签到
        }
        await extrabox(); //宝箱查询
        if ($.extrabox && $.extrabox.data.openNum >= 1 && $.extrabox && $.extrabox.data.status == 0) {
            await boxaward(); //宝箱奖励
        }
        if ($.days && $.days.data.watchVideo.videoCount < $.days.data.watchVideo.limit) {
            await video(); //观看视频
        }

        if ($.days && $.days.data.userBalance.cash >= 15) {

            await cash(); //提现
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
        if (notifyttt == 1 && $.isNode() && (nowTimes.getHours() === 12 || nowTimes.getHours() === 23) && (nowTimes.getMinutes() >= 0 && nowTimes.getMinutes() <= 10))
            await notify.sendNotify($.name, $.message);
        resolve()
    })
}
//用户信息
function user(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://commontgw6.reader.qq.com/v7_5_7/nativepage/getAcctInfo`,
                headers: QQreadheaderVal,

            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 用户信息🚩: ${data}`);
                    $.user = JSON.parse(data);
                    if ($.user.code == 0) {
                        console.log(`\n${O}\n========== 【${$.user.nick}】 ==========\n`);
                        $.message += `\n${O}\n========== 【${$.user.nick}】 ==========\n`;
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
//任务列表
function days(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://eventv36.reader.qq.com/activity/pkg11955/initV4`,
                headers: QQreadheaderVal,
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 任务列表🚩: ${data}`);
                    $.days = JSON.parse(data);
                    if ($.days.code == 0) {
                        console.log(`【今日金币】：${$.days.data.userBalance.coin}\n【现金余额】：${$.days.data.userBalance.cash}\n【视频任务】：${$.days.data.watchVideo.videoCount}/${$.days.data.watchVideo.limit}\n`);
                        $.message += `【今日金币】：${$.days.data.userBalance.coin}\n【现金余额】：${$.days.data.userBalance.cash}\n【视频任务】：${$.days.data.watchVideo.videoCount}/${$.days.data.watchVideo.limit}\n`
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
//签到查询
function signindex(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://eventv36.reader.qq.com/activity/pkg11955/queryPunchCardStatus`,
                headers: QQreadheaderVal,
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 签到查询🚩: ${data}`);
                    $.signindex = JSON.parse(data);
                    if ($.signindex.code == 0 && $.signindex.data.finished == true) {
                        console.log(`【签到查询】：已签到,已连续签到${$.signindex.data.continuousDays.length}天\n`);
                        $.message += `【签到查询】：已签到,已连续签到${$.signindex.data.continuousDays.length}天\n`;
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
//今日签到
function sign(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://eventv36.reader.qq.com/activity/pkg11955/punchCard_v2`,
                headers: QQreadheaderVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 今日签到🚩: ${data}`);
                    $.sign = JSON.parse(data);
                    if ($.sign.code == 0) {
                        console.log(`【今日签到】： 获得${$.sign.data.coinNum}金币\n`);
                        $.message += `【今日签到】： 获得${$.sign.data.coinNum}金币\n`;
                    }
                    if ($.sign.code == -6) {
                        console.log(`【今日签到】：${$.sign.msg}\n`);
                        $.message += `【今日签到】：${$.sign.msg}\n`;
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
//观看视频
function video(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://eventv36.reader.qq.com/activity/pkg11955/watchVideo`,
                headers: QQreadheaderVal,
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 观看视频🚩: ${data}`);
                    $.video = JSON.parse(data);
                    if ($.video.code == 0) {
                        console.log(`【观看视频】：奖励 ${$.video.data.watchVideoCoin}金币\n`);
                        $.message += `【观看视频】：奖励 ${$.video.data.watchVideoCoin}金币\n`;
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
//宝箱查询
function extrabox(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://eventv36.reader.qq.com/activity/pkg11955/queryOpenBoxInfo`,
                headers: QQreadheaderVal,
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 🚩: ${data}`);
                    $.extrabox = JSON.parse(data);
                    if ($.extrabox.code == 0) {
                        console.log(`【宝箱查询】：剩余${$.extrabox.data.openNum}次\n`);
                        $.message += `【宝箱查询】：剩余${$.extrabox.data.openNum}次\n`;
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
//宝箱奖励
function boxaward(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://eventv36.reader.qq.com/activity/pkg11955/openBox`,
                headers: QQreadheaderVal,
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 宝箱奖励🚩: ${data}`);
                    $.boxaward = JSON.parse(data);
                    if ($.boxaward.code == 0) {
                        console.log(`【宝箱奖励】：奖励 ${$.boxaward.data.coin}金币\n`);
                        $.message += `【宝箱奖励】：奖励 ${$.boxaward.data.coin}金币\n`;
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

//提现
function cash(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://eventv36.reader.qq.com/activity/pkg11955/withdraw?type=1`,
                headers: QQreadheaderVal,
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 提现🚩: ${data}`);
                    $.cash = JSON.parse(data);
                    if ($.cash.code == 0) {
                        console.log(`【提现】：已成功提现15元\n`);
                        $.message += `【提现】：已成功提现15元\n`;
                    }
                    if ($.cash.code != 0) {
                        console.log(`【提现】： ${$.cash.msg}\n`);
                        $.message += `【提现】： ${$.cash.msg}\n`;
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