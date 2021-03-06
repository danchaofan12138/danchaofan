/* ziye 
github地址 https://github.com/ziye11
TG频道地址  https://t.me/ziyescript
TG交流群   https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接  https://raw.githubusercontent.com/ziye11/JavaScript/main/Task/ziye.boxjs.json

转载请备注个名字，谢谢
⚠️多看点APP
请点击前往下载  http://dkd-api.dysdk.com/share.html?uid=13209201
或者自行下载    邀请码13209201 谢谢支持

2.9 制作
2.10 增加看视频，基本完善
2.11 完善判定
2.11-2  修复视频和广告以及提现判定问题
2.12 增加碎片显示以及兑换
2.14 修复宝箱问题
2.16 修复报错
2.19 修复碎片兑换问题

⚠️一共1个位置 1个ck  👉 2条 Secrets
多账号换行

第一步 添加  hostname=dkd-api.dysdk.com,

第二步 添加body重写 

登录多看点APP  点击  我的  获取ck
刷视频获取body，一个body一天可以只领取两次奖励

duokandianbodyVal 👉DKD_duokandianBODY
duokandianvideobodyVal 👉DKD_duokandianvideoBODY

提现标准 可设置 0 1 3 5 15 50
duokandianCASH 👉DKD_duokandianCASH

⚠️主机名以及重写👇
hostname=dkd-api.dysdk.com,

############## 圈x
#多看点APP获取body
http:\/\/dkd-api\.dysdk\.com\/* url script-request-body https://raw.githubusercontent.com/ziye11/JavaScript/main/Task/duokandian.js   

############## loon
http-request http:\/\/dkd-api\.dysdk\.com\/* script-path=https://raw.githubusercontent.com/ziye11/JavaScript/main/Task/duokandian.js,requires-body=1,max-size=0, tag=多看点APP获取body

############## surge
多看点APP获取body = type=http-request,pattern=http:\/\/dkd-api\.dysdk\.com\/*,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/ziye11/JavaScript/main/Task/duokandian.js 
*/



const $ = Env("多看点APP");
$.idx = ($.idx = ($.getval('duokandianSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const notify = $.isNode() ? require("./sendNotify") : ``;
const COOKIE = $.isNode() ? require("./duokandianCOOKIE") : ``;
const logs = 0; // 0为关闭日志，1为开启
const notifyttt = 1 // 0为关闭外部推送，1为12 23 点外部推送
const notifyInterval = 2; // 0为关闭通知，1为所有通知，2为12 23 点通知  ， 3为 6 12 18 23 点通知 
$.message = '', gg = '', sp = '', yi = '', er = '', txtx = '', COOKIES_SPLIT = '', CASH = '', ddtime = '';

const duokandianbodyArr = [];
let duokandianbodyVal = ``;
let middleduokandianBODY = [];
const duokandianvideobodyArr = [];
let duokandianvideobodyVal = ``;
let middleduokandianvideoBODY = [];

duokandianheaderVal = {
    'Accept': `*/*`,
    'Accept-Encoding': `br;q=1.0, gzip;q=0.9, deflate;q=0.8`,
    'Connection': `close`,
    'Content-Type': `application/x-www-form-urlencoded; charset=utf-8`,
    'Host': `dkd-api.dysdk.com`,
    'User-Agent': `duokandian/3.0.2 (com.duoyou.duokandian1; build:0; iOS 14.2.0) Alamofire/5.4.0`,
    'Accept-Language': `zh-Hans-CN;q=1.0`
};

duokandianspdhheaderVal = {
    "Accept": "application/json, text/plain, */*",
    "Accept-Encoding": "gzip, deflate",
    "Accept-Language": "zh-cn",
    "Connection": "close",
    "Content-Length": "8",
    "Content-Type": "application/json;charset=utf-8",
    "Host": "dkd-api.dysdk.com",
    "Origin": "http://dkd-api.dysdk.com",
    "Referer": "http://dkd-api.dysdk.com/index.html",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148"
};


if ($.isNode()) {
    // 没有设置 DKD_duokandianCASH 则默认为 0 不提现
    CASH = process.env.DKD_duokandianCASH || 0;
}
if ($.isNode() && process.env.DKD_duokandianBODY) {
    COOKIES_SPLIT = process.env.COOKIES_SPLIT || "\n";
    console.log(
        `============ cookies分隔符为：${JSON.stringify(
      COOKIES_SPLIT
    )} =============\n`
    );
    if (
        process.env.DKD_duokandianBODY &&
        process.env.DKD_duokandianBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleduokandianBODY = process.env.DKD_duokandianBODY.split(COOKIES_SPLIT);
    } else {
        middleduokandianBODY = process.env.DKD_duokandianBODY.split();
    }
    if (
        process.env.DKD_duokandianvideoBODY &&
        process.env.DKD_duokandianvideoBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleduokandianvideoBODY = process.env.DKD_duokandianvideoBODY.split(COOKIES_SPLIT);
    } else {
        middleduokandianvideoBODY = process.env.DKD_duokandianvideoBODY.split();
    }
}
if (COOKIE.duokandianbodyVal) {
    DKD_COOKIES = {
        "duokandianbodyVal": COOKIE.duokandianbodyVal.split('\n'),
        "duokandianvideobodyVal": COOKIE.duokandianvideobodyVal.split('\n'),
    }
    Length = DKD_COOKIES.duokandianbodyVal.length;
}
if (!COOKIE.duokandianbodyVal) {
    if ($.isNode()) {
        Object.keys(middleduokandianBODY).forEach((item) => {
            if (middleduokandianBODY[item]) {
                duokandianbodyArr.push(middleduokandianBODY[item]);
            }
        });
        Object.keys(middleduokandianvideoBODY).forEach((item) => {
            if (middleduokandianvideoBODY[item]) {
                duokandianvideobodyArr.push(middleduokandianvideoBODY[item]);
            }
        });
    } else {
        duokandianbodyArr.push($.getdata("duokandianbody"));
        duokandianvideobodyArr.push($.getdata("duokandianvideobody"));
        // 根据boxjs中设置的额外账号数，添加存在的账号数据进行任务处理
        if ("duokandianCASH") {
            CASH = $.getval("duokandianCASH") || '0';
        }
        let duokandianCount = ($.getval('duokandianCount') || '1') - 0;
        for (let i = 2; i <= duokandianCount; i++) {
            if ($.getdata(`duokandianbody${i}`)) {
                duokandianbodyArr.push($.getdata(`duokandianbody${i}`));
                duokandianvideobodyArr.push($.getdata(`duokandianvideobody${i}`));
            }
        }
    }
    if (duokandianbodyArr == '') {
        Length = 0
    } else Length = duokandianbodyArr.length
}

function GetCookie() {
    if ($request && $request.url.indexOf("user") >= 0 && $request.url.indexOf("index") >= 0) {
        const duokandianbodyVal = $request.body;
        if (duokandianbodyVal) $.setdata(duokandianbodyVal, "duokandianbody" + $.idx);
        $.log(
            `[${$.name + $.idx}] 获取duokandianbodyVal✅: 成功,duokandianbodyVal: ${duokandianbodyVal}`
        );
        $.msg($.name + $.idx, `获取duokandianbodyVal: 成功🎉`, ``);
    }
    if ($request && $request.url.indexOf("android_video") >= 0 && $request.url.indexOf("getaward") >= 0) {
        const duokandianvideobodyVal = $request.body
        if (duokandianvideobodyVal) {
            let bodys = $.getdata('duokandianvideobody' + $.idx);
            if (bodys) {
                if (bodys.indexOf(duokandianvideobodyVal) >= 0) {
                    $.msg('body重复跳过');
                    $.done();
                }
                duokandianBody = bodys.split('&');
                bodys = duokandianvideobodyVal + '&' + bodys;
            } else {
                bodys = duokandianvideobodyVal;
            }
            $.setdata(bodys, "duokandianvideobody" + $.idx);
            $.log(
                `[${$.name + $.idx}] 获取duokandianvideobody${duokandianBody.length+1}✅: 成功,duokandianvideobody${duokandianBody.length+1}: ${duokandianvideobodyVal}`
            );
            $.msg($.name + $.idx, `获取duokandianvideobody${duokandianBody.length+1}✅: 成功🎉`)
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
console.log(`============ 提现标准为：${CASH} =============\n`);
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
            '提示：⚠️请点击前往获取CK  http://dkd-api.dysdk.com/share.html?uid=13209201\n',
            'http://dkd-api.dysdk.com/share.html?uid=13209201', {
                "open-url": "http://dkd-api.dysdk.com/share.html?uid=13209201"
            }
        );
        $.done();
    }
    for (let i = 0; i < Length; i++) {
        if (COOKIE.duokandianbodyVal) {
            duokandianbodyVal = DKD_COOKIES.duokandianbodyVal[i];
            duokandianvideobodyVal = DKD_COOKIES.duokandianvideobodyVal[i];
        }
        if (!COOKIE.duokandianbodyVal) {
            duokandianbodyVal = duokandianbodyArr[i];
            duokandianvideobodyVal = duokandianvideobodyArr[i];
        }



        O = (`${$.name + (i + 1)}🔔`);
        await console.log(`-------------------------\n\n🔔开始运行${$.name+(i+1)}【${$.name+(i+1)}】`)
        videoBODY = duokandianvideobodyVal.split('&');

        if (duokandianvideobodyVal == '') {
            videoBODY.length = 0
            tt = 0
        } else tt = videoBODY.length * 30 - 29




        await user(); //用户信息
        await signindex(); //签到
        if ($.user.data && $.user.data.today_gold >= 2000 && $.signindex.data.sign_status == 0) {
            await sign(); //签到
        }
        await days(); //任务列表
        await lottoindex(); //转盘查询
        if ($.lottoindex.data && $.lottoindex.data.times >= 1) {
            await lotto(); //转盘抽奖
        }
        if ($.lottoindex.data && $.lottoindex.data.chip >= 4) {
            await chip(); //碎片兑换
        }

        if (gg && gg.status != 2) {
            await advideo(); //广告视频
            await extratime(); //时段刷新
            if ($.extratime.data && $.extratime.data.status == 1) {
                await timeaward(); //时段奖励
                await timeawardsss(); //时段翻倍
            }
            await extrabox(); //宝箱刷新
            await boxaward(); //宝箱奖励
            await boxbox(); //宝箱翻倍
        }
        if (gg && gg.status == 2) {
            console.log(`【时段奖励】：已完成\n`);
            $.message += `【时段奖励】：已完成\n`
            console.log(`【宝箱奖励】：已完成\n`);
            $.message += `【宝箱奖励】：已完成\n`
        }

        if (sp && sp.status == 1) {
            await spaward(); //视频达成
        }
        if (yi && yi.status == 1) {
            await rw1(); //日常任务1
        }
        if (er && er.status == 1) {
            await rw2(); //日常任务2
        }
        await txcx(); //提现查询
        if (CASH == 1 && $.user.data && $.user.data.cash >= 1 && txtx >= 5) {
            await tx(); //提现
        }
        if (CASH == 3 && $.user.data && $.user.data.cash >= 3 && txtx >= 10) {
            await tx(); //提现
        }
        if (CASH == 5 && $.user.data && $.user.data.cash >= 5 && txtx >= 15) {
            await tx(); //提现
        }
        if (CASH == 15 && $.user.data && $.user.data.cash >= 15 && txtx >= 30) {
            await tx(); //提现
        }



        if (videoBODY.length != 0 && sp && sp.status != 2) {
            console.log(`【视频统计】：共有${videoBODY.length}个body,预计运行${tt}秒\n`);
            $.message += `【视频统计】：共有${videoBODY.length}个body,预计运行${tt}秒\n`

            await video(); //刷视频
            await $.wait(tt * 1000)
        }


        if (videoBODY.length != 0 && sp && sp.status == 2) {
            console.log(`【视频统计】：共有${videoBODY.length}个body,已完成\n`);
            $.message += `【视频统计】：共有${videoBODY.length}个body,已完成\n`

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
                url: `http://dkd-api.dysdk.com/user/index`,
                headers: duokandianheaderVal,
                body: duokandianbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 用户信息🚩: ${data}`);
                    $.user = JSON.parse(data);
                    if ($.user.data && $.user.status_code == 200) {
                        console.log(`\n${O}\n========== 【${$.user.data.nickname}】 ==========\n`);
                        $.message += `\n${O}\n========== 【${$.user.data.nickname}】 ==========\n`;
                        $.message += `【账户信息】：账户余额${$.user.data.cash}元,今日获得${$.user.data.today_gold / 10000}元\n`;
                    }
                    if ($.user.status_code == 10020) {
                        console.log(`账户信息：${$.user.message}\n`);
                        $.message += `账户信息：${$.user.message}\n`;
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
                url: `http://dkd-api.dysdk.com/task/index_days`,
                headers: duokandianheaderVal,
                body: duokandianbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 任务列表🚩: ${data}`);
                    $.days = JSON.parse(data);
                    if ($.days) {
                        sp = $.days.data.list.find(item => item.pathurl === "duokandian://video");
                        gg = $.days.data.list.find(item => item.pathurl === "duokandian://xxx");
                        yi = $.days.data.Task_comp.data.find(item => item.pro === 20);
                        er = $.days.data.Task_comp.data.find(item => item.pro === 50);


                        if ($.days.data && $.days.status_code == 200) {

                            console.log(`【${sp.title}】：${sp.task_go}， ${sp.award}金币\n【${gg.title}】 ：${gg.task_go}， ${gg.award}金币\n`);
                            $.message += `【${sp.title}】：${sp.task_go}， ${sp.award}金币\n【${gg.title}】：${gg.task_go}， ${gg.award}金币\n`;
                            if (yi.status == 2) {
                                console.log(`【日常任务1】：任务完成 ${yi.award}金币\n`);
                                $.message += `【日常任务1】：任务完成 ${yi.award}金币\n`;
                            }
                            if (er.status == 2) {
                                console.log(`【日常任务2】：任务完成 ${er.award}金币\n`);
                                $.message += `【日常任务2】：任务完成 ${er.award}金币\n`;
                            }
                        }
                        if ($.days.status_code == 10020) {
                            console.log(`任务列表：${$.days.message}\n`);
                            $.message += `任务列表：${$.days.message}\n`;
                        }

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
                url: `http://dkd-api.dysdk.com/task/index_sign`,
                headers: duokandianheaderVal,
                body: duokandianbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 签到查询🚩: ${data}`);
                    $.signindex = JSON.parse(data);
                    if ($.signindex.data && $.signindex.status_code == 200 && $.signindex.data.sign_status == 1) {
                        console.log(`【签到查询】： 今日已签到\n`);
                        $.message += `【签到查询】： 今日已签到\n`;
                    }
                    if ($.signindex.status_code == 10020) {
                        console.log(`【签到查询】：${$.signindex.message}\n`);
                        $.message += `【签到查询】：${$.signindex.message}\n`;
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
                url: `http://dkd-api.dysdk.com/task/sign`,
                headers: duokandianheaderVal,
                body: duokandianbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 今日签到🚩: ${data}`);
                    $.sign = JSON.parse(data);
                    if ($.sign.data && $.sign.status_code == 200) {
                        console.log(`【今日签到】： ${$.sign.data.sign_award}金币\n`);
                        $.message += `【今日签到】： ${$.sign.data.sign_award}金币\n`;
                    }
                    if ($.sign.status_code == 10020) {
                        console.log(`【今日签到】：${$.sign.message}\n`);
                        $.message += `【今日签到】：${$.sign.message}\n`;
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
//视频达成
function spaward(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `http://dkd-api.dysdk.com/task/get_ad_award`,
                headers: duokandianheaderVal,
                body: `adType=2&${duokandianbodyVal}&type=1&overLimit`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 视频达成🚩: ${data}`);
                    $.spaward = JSON.parse(data);
                    if ($.spaward.data && $.spaward.status_code == 200) {
                        console.log(`【视频达成】：${$.spaward.data.award}金币\n`);
                        $.message += `【视频达成】：${$.spaward.data.award}金币\n`;
                    }
                    if ($.spaward.status_code == 10020) {
                        console.log(`【视频达成】：${$.spaward.message}\n`);
                        $.message += `【视频达成】：${$.spaward.message}\n`;
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
//抽奖次数
function lottoindex(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `http://dkd-api.dysdk.com/lotto/index?${duokandianbodyVal}`,
                headers: duokandianheaderVal,
                //body: duokandianbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 抽奖次数🚩: ${data}`);
                    $.lottoindex = JSON.parse(data);
                    if ($.lottoindex.data && $.lottoindex.status_code == 200) {
                        console.log(`【抽奖次数】：剩余${$.lottoindex.data.times}次\n`);
                        $.message += `【抽奖次数】：剩余${$.lottoindex.data.times}次\n`;
                        console.log(`【碎片信息】：剩余${$.lottoindex.data.chip}个\n`);
                        $.message += `【碎片信息】：剩余${$.lottoindex.data.chip}个\n`;
                    }
                    if ($.lottoindex.status_code == 10020) {
                        console.log(`【抽奖次数】：${$.lottoindex.message}\n`);
                        $.message += `【抽奖次数】：${$.lottoindex.message}\n`;
                        console.log(`【碎片信息】：${$.lottoindex.message}\n`);
                        $.message += `【碎片信息】：${$.lottoindex.message}\n`;
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
//转盘抽奖
function lotto(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `http://dkd-api.dysdk.com/lotto/start`,
                headers: duokandianheaderVal,
                body: duokandianbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 转盘抽奖🚩: ${data}`);
                    $.lotto = JSON.parse(data);
                    A = 1
                    if ($.lotto.data && $.lotto.status_code == 200) {
                        console.log(`【转盘抽奖】：奖励 ${$.lotto.data.award}金币\n`);
                        $.message += `【转盘抽奖】：奖励 ${$.lotto.data.award}金币\n`;
                    }
                    if ($.lotto.status_code == 10020) {
                        console.log(`【转盘抽奖】：${$.lotto.message}\n`);
                        $.message += `【转盘抽奖】：${$.lotto.message}\n`;
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
//碎片兑换
function chip(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {

            let url = {
                url: `http://dkd-api.dysdk.com/lotto/convert?${duokandianbodyVal}`,
                headers: duokandianspdhheaderVal,
                body: `{"id":4}`,

            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 碎片兑换🚩: ${data}`);
                    $.chip = JSON.parse(data);
                    A = 1
                    if ($.chip.data && $.chip.status_code == 200) {
                        console.log(`【碎片兑换】：奖励 ${$.chip.data.award}金币\n`);
                        $.message += `【碎片兑换】：奖励 ${$.chip.data.award}金币\n`;
                    }
                    if ($.chip.status_code == 10020) {
                        console.log(`【碎片兑换】：${$.chip.message}\n`);
                        $.message += `【碎片兑换】：${$.chip.message}\n`;
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

//广告视频
function advideo(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `http://dkd-api.dysdk.com/task/get_ad_award`,
                headers: duokandianheaderVal,
                body: `adType=2&${duokandianbodyVal}&type=2&overLimit`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 广告视频🚩: ${data}`);
                    $.advideo = JSON.parse(data);
                    if ($.advideo.data && $.advideo.status_code == 200) {
                        console.log(`【广告视频】：奖励 ${$.advideo.data.award}金币\n`);
                        $.message += `【广告视频】：奖励 ${$.advideo.data.award}金币\n`;
                    }
                    if ($.advideo.status_code == 10020) {
                        console.log(`【广告视频】：${$.advideo.message}\n`);
                        $.message += `【广告视频】：${$.advideo.message}\n`;
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
//时段刷新
function extratime(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `http://dkd-api.dysdk.com/video/extra_time`,
                headers: duokandianheaderVal,
                body: duokandianbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 时段刷新🚩: ${data}`);
                    $.extratime = JSON.parse(data);
                    if ($.extratime.status_code == 200 && $.extratime.data.status == 1) {
                        console.log(`【时段刷新】：刷新成功\n`);
                        $.message += `【时段刷新】：刷新成功\n`;
                    }
                    if ($.extratime.status_code == 10020) {
                        console.log(`【时段刷新】：${$.extratime.message}\n`);
                        $.message += `【时段刷新】：${$.extratime.message}\n`;
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
//时段奖励
function timeaward(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `http://dkd-api.dysdk.com/video/extra_get`,
                headers: duokandianheaderVal,
                body: duokandianbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 时段奖励🚩: ${data}`);
                    $.timeaward = JSON.parse(data);
                    if ($.timeaward.data && $.timeaward.status_code == 200 && !$.timeaward.data.status) {
                        console.log(`【时段奖励】：奖励 ${$.timeaward.data.award}金币\n`);
                        $.message += `【时段奖励】：奖励 ${$.timeaward.data.award}金币\n`;
                    }
                    if ($.timeaward.status_code == 10020) {
                        console.log(`【时段奖励】：${$.timeaward.message}\n`);
                        $.message += `【时段奖励】：${$.timeaward.message}\n`;
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
//时段翻倍
function timeawardsss(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `http://dkd-api.dysdk.com/video/extra_again`,
                headers: duokandianheaderVal,
                body: duokandianbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 时段翻倍🚩: ${data}`);
                    $.timeawardsss = JSON.parse(data);
                    if ($.timeawardsss.data && $.timeawardsss.status_code == 200 && !$.timeaward.data.status) {
                        console.log(`【时段翻倍】：奖励 ${$.timeawardsss.data.award}金币\n`);
                        $.message += `【时段翻倍】：奖励 ${$.timeawardsss.data.award}金币\n`;
                    }
                    if ($.timeawardsss.status_code == 10020 && !$.timeaward.data.status) {
                        console.log(`【时段翻倍】：${$.timeawardsss.message}\n`);
                        $.message += `【时段翻倍】：${$.timeawardsss.message}\n`;
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

//宝箱刷新
function extrabox(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `http://dkd-api.dysdk.com/red/box_init`,
                headers: duokandianheaderVal,
                body: duokandianbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 时段刷新🚩: ${data}`);
                    $.extrabox = JSON.parse(data);
                    if ($.extrabox.status_code == 200) {
                        console.log(`【宝箱刷新】：刷新成功,剩余${$.extrabox.data.diff}秒\n`);
                        $.message += `【宝箱刷新】：刷新成功,剩余${$.extrabox.data.diff}秒\n`;
                    }
                    if ($.extrabox.status_code == 10020) {
                        console.log(`【宝箱刷新】：${$.extrabox.message}\n`);
                        $.message += `【宝箱刷新】：${$.extrabox.message}\n`;
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
                url: `http://dkd-api.dysdk.com/red/box_award`,
                headers: duokandianheaderVal,
                body: duokandianbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 宝箱奖励🚩: ${data}`);
                    $.boxaward = JSON.parse(data);
                    if ($.boxaward.data && $.boxaward.status_code == 200) {
                        console.log(`【宝箱奖励】：奖励 ${$.boxaward.data.award}金币\n`);
                        $.message += `【宝箱奖励】：奖励 ${$.boxaward.data.award}金币\n`;
                    }
                    if ($.boxaward.status_code == 10020) {
                        console.log(`【宝箱奖励】：${$.boxaward.message}\n`);
                        $.message += `【宝箱奖励】：${$.boxaward.message}\n`;
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
//宝箱翻倍
function boxbox(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `http://dkd-api.dysdk.com/red/box_extra`,
                headers: duokandianheaderVal,
                body: duokandianbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 宝箱翻倍🚩: ${data}`);
                    $.boxbox = JSON.parse(data);
                    if ($.boxbox.data && $.boxbox.status_code == 200) {
                        console.log(`【宝箱翻倍】：奖励 ${$.boxbox.data.award}金币\n`);
                        $.message += `【宝箱翻倍】：奖励 ${$.boxbox.data.award}金币\n`;
                    }
                    if ($.boxbox.status_code == 10020) {
                        console.log(`【宝箱翻倍】：${$.boxbox.message}\n`);
                        $.message += `【宝箱翻倍】：${$.boxbox.message}\n`;
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
//日常任务1
function rw1(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `http://dkd-api.dysdk.com/task/get_award_pro`,
                headers: duokandianheaderVal,
                body: `step=1&${duokandianbodyVal}`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 日常任务1🚩: ${data}`);
                    $.rw1 = JSON.parse(data);
                    if ($.rw1.data && $.rw1.status_code == 200) {
                        console.log(`【日常任务1】：领取 ${$.rw1.data.award}金币\n`);
                        $.message += `【日常任务1】：领取 ${$.rw1.data.award}金币\n`;
                    }
                    if ($.rw1.status_code == 10020) {
                        console.log(`【日常任务1】：${$.rw1.message}\n`);
                        $.message += `【日常任务1】：${$.rw1.message}\n`;
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
//日常任务2
function rw2(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `http://dkd-api.dysdk.com/task/get_award_pro`,
                headers: duokandianheaderVal,
                body: `step=2&${duokandianbodyVal}`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 日常任务2🚩: ${data}`);
                    $.rw2 = JSON.parse(data);
                    if ($.rw2.data && $.rw2.status_code == 200) {
                        console.log(`【日常任务2】：领取 ${$.rw2.data.award}金币\n`);
                        $.message += `【日常任务2】：领取 ${$.rw2.data.award}金币\n`;
                    }
                    if ($.rw2.status_code == 10020) {
                        console.log(`【日常任务2】：${$.rw2.message}\n`);
                        $.message += `【日常任务2】：${$.rw2.message}\n`;
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
//刷视频
function video(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            var inss = 0;
            var ins = 0;
            ADD = 0;
            ABB = 0;
            for (let i = 0; i < videoBODY.length; i++) {
                setTimeout(() => {
                    let url = {
                        url: `http://dkd-api.dysdk.com/android_video/getaward`,
                        headers: duokandianheaderVal,
                        body: `${videoBODY[i]}`,
                    }
                    $.post(url, async (err, resp, data) => {
                        try {
                            if (logs) $.log(`${O}, 刷视频🚩: ${data}`);
                            $.video = JSON.parse(data);
                            if ($.video.data && $.video.status_code == 200) {
                                console.log(`【刷视频】：开始领取第${i+1}次视频奖励,获得${$.video.data.award}金币,等待30秒继续\n`);
                                inss += $.video.data.award;
                                ins += 1;
                            }
                            if ($.video.status_code == 10020) {
                                console.log(`【刷视频】：开始领取第${i+1}次视频奖励,${$.video.message},等待30秒继续\n`);
                            }
                            await videoyz()
                            if ($.videoyz.data.status == 3) {
                                await awardpost()
                            }
                        } catch (e) {
                            $.logErr(e, resp);
                        } finally {
                            resolve()
                        }
                    })
                }, i * 30000);
            }
            setTimeout(() => {
                if ($.video && $.video.status_code) {
                    console.log(`【刷视频】：共领取${ins}次视频奖励,共${inss}金币\n`);
                    $.message += `【刷视频】：共领取${ins}次视频奖励,共${inss}金币\n`
                }
                if ($.awardpost && $.awardpost.status_code) {
                    console.log(`【红包奖励】：共领取${ABB}次红包奖励,共${ADD}金币\n`);
                    $.message += `【红包奖励】：共领取${ABB}次红包奖励,共${ADD}金币\n`
                }
                if ($.videoyz && $.videoyz.data.status == 4) {
                    console.log(`【红包奖励】：已完成\n`);
                    $.message += `【红包奖励】：已完成\n`
                }
            }, videoBODY.length * 30000 - 29000)
        }, timeout)
    })
}
//验证视频
function videoyz(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `http://dkd-api.dysdk.com/video/red_countdown`,
                headers: duokandianheaderVal,
                body: `step=2&${duokandianbodyVal}`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 验证视频🚩: ${data}`);
                    $.videoyz = JSON.parse(data);
                    if ($.videoyz.data && $.videoyz.status_code == 200 && $.videoyz.data.status == 2) {
                        console.log(`【验证视频】：剩余 ${$.videoyz.data.red_time}圈\n`);
                    }
                    if ($.videoyz.data && $.videoyz.status_code == 200 && $.videoyz.data.status == 3) {
                        console.log(`【验证视频】：验证通过\n`);
                    }
                    if ($.videoyz.status_code == 10020) {
                        console.log(`【验证视频】：${$.videoyz.message}\n`);
                        $.message += `【验证视频】：${$.videoyz.message}\n`;
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
//红包奖励
function awardpost(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `http://dkd-api.dysdk.com/video/red_getaward`,
                headers: duokandianheaderVal,
                body: `${duokandianbodyVal}`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 红包奖励🚩: ${data}`);
                    $.awardpost = JSON.parse(data);
                    if ($.awardpost.data && $.awardpost.status_code == 200) {
                        console.log(`【红包奖励】：开始领取第${ABB+1}次奖励，获得 ${$.awardpost.data.award}金币\n`);
                        ADD += $.awardpost.data.award;
                        ABB += 1;
                    }
                    if ($.awardpost.status_code == 10020) {
                        console.log(`【红包奖励】：${$.awardpost.message}\n`);
                        $.message += `【红包奖励】：${$.awardpost.message}\n`;
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
function tx(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `http://dkd-api.dysdk.com/money/withdraw_do?${duokandianbodyVal}`,
                headers: {
                    "Accept": "application/json, text/plain, */*",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-cn",
                    "Connection": "close",
                    "Content-Length": "68",
                    "Content-Type": "application/json;charset=utf-8",
                    "Host": "dkd-api.dysdk.com",
                    "Origin": "http://dkd-api.dysdk.com",
                    "Referer": "http://dkd-api.dysdk.com/index.html",
                    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
                },
                body: `{"money":${CASH},"type":2,"withdraw_card":null,"program":8,"is_special":2}`,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 提现🚩: ${data}`);
                    $.tx = JSON.parse(data);
                    if ($.tx.status_code == 200) {
                        console.log(`【提现】：成功提现 ${CASH}元\n`);
                        $.message += `【提现】：成功提现 ${CASH}元\n`;
                    }
                    if ($.tx.status_code == 10020) {
                        console.log(`【提现】：${$.tx.message}\n`);
                        $.message += `【提现】：${$.tx.message}\n`;
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
//提现查询
function txcx(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `http://dkd-api.dysdk.com/money/withdraw_index?${duokandianbodyVal}`,
                headers: {
                    "Accept": "application/json, text/plain, */*",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-cn",
                    "Connection": "close",
                    "Content-Length": "68",
                    "Content-Type": "application/json;charset=utf-8",
                    "Host": "dkd-api.dysdk.com",
                    "Origin": "http://dkd-api.dysdk.com",
                    "Referer": "http://dkd-api.dysdk.com/index.html",
                    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 14_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
                },
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 提现查询🚩: ${data}`);
                    $.txcx = JSON.parse(data);
                    if ($.txcx.data && $.txcx.status_code == 200) {

                        txtxid = $.txcx.data.with_list.find(item => item.money === 3);


                        txtx = txtxid.msg3.substr(txtxid.msg3.indexOf('已签到') + 3, 3).split('天')[0];
                        console.log(`【提现查询】：已连续签到${txtx}天\n`);
                        $.message += `【提现查询】：已连续签到${txtx}天\n`;
                    }
                    if ($.txcx.status_code == 10020) {
                        console.log(`【提现查询】：${$.txcx.message}\n`);
                        $.message += `【提现查询】：${$.txcx.message}\n`;
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
