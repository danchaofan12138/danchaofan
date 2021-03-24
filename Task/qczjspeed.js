/* ziye 

github地址 https://github.com/6Svip120apk69
TG频道地址  https://t.me/ziyescript
TG交流群   https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接  https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/ziye.boxjs.json

转载请备注个名字，谢谢
⚠️汽车之家极速版

下载地址 http://athm.cn/rUcSMrc 邀请码 99558995


谢谢支持

12.20 优化重写说明,优化时段重写
12.21 修复boxjs配置错误，钱包ck易掉，故去除
12.23 去除14天任务显示，增加惊喜福利，视频，福利视频，福利 4个任务
1.5 取消助力任务显示，可从活动入口进入，然后分享自己的助力，再助力自己获取助力ck
1.9 优化，可固定ck，整合通知为1个，可boxjs或者Secrets 设置提现金额
1.12  修复判定错误
1.13 4个任务失效，故去除,精简ck,只需要5个，无需重新获取，调整提现时间为20点到21点
1.15 修复ck报错问题
1.17 修复任务模块报错导致的 助力问题
1.20 增加提现时间变量
1.21 去除助力任务 名爵5
1.25 修复任务消失后的显示错误
3.8 替换为循环获取ck

⚠️一共3个位置 5个ck  👉 6条 Secrets 
多账号换行

第一步 添加  hostname=mobile.app.autohome.com.cn,

第二步 添加header重写 

点击 我 获取用户名header
GetUserInfoheaderVal 👉QCZJ_GetUserInfoHEADER

第三步 注释header重写，添加body重写 添加时段body重写  获取完后注释
点击 活动 日常任务 body

taskbodyVal          👉  QCZJ_taskBODY
activitybodyVal      👉  QCZJ_activityBODY

点击 首页>>右上角 获取时段body
addCoinbodyVal       👉  QCZJ_addCoinBODY

断代理 点击>>首页>>右上角>>时段>>点击时段翻倍后  待广告最后几秒时 开代理  获取时段翻倍body
addCoin2bodyVal      👉  QCZJ_addCoin2BODY


设置提现变量 可设置 0.5 2  5 10 20 
CASH  👉  QCZJ_CASH

设置提现时间变量 可设置 0.5 2  5 10 20 
CASHTIME  👉  QCZJ_CASHTIME

⚠️主机名以及重写👇

hostname=mobile.app.autohome.com.cn,
############## 圈x
#汽车之家极速版获取header
https:\/\/(mobile\.app\.autohome\.com\.cn\/*||openapi\.autohome\.com\.cn\/*) url script-request-header https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/qczjspeed.js

#汽车之家极速版获取body
https:\/\/(mobile\.app\.autohome\.com\.cn\/*||openapi\.autohome\.com\.cn\/*) url script-request-body https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/qczjspeed.js

#汽车之家极速版获取时段body
http:\/\/mobile\.app\.autohome\.com\.cn\/* url script-request-body https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/qczjspeed.js



############## loon

#汽车之家极速版获取header
http-request (mobile\.app\.autohome\.com\.cn\/*||openapi\.autohome\.com\.cn\/*) script-path=https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/qczjspeed.js, requires-header=true, tag=汽车之家极速版获取header

#汽车之家极速版获取body
http-request (mobile\.app\.autohome\.com\.cn\/*||openapi\.autohome\.com\.cn\/*) script-path=https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/qczjspeed.js,requires-body=true, tag=汽车之家极速版获取body

#汽车之家极速版获取时段body
http-request http:\/\/mobile\.app\.autohome\.com\.cn\/* script-path=https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/qczjspeed.js, requires-body=true, tag=汽车之家极速版获取时段body

############## surge

#汽车之家极速版获取body
汽车之家极速版获取body = type=http-request,pattern=(mobile\.app\.autohome\.com\.cn\/*||openapi\.autohome\.com\.cn\/*),requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/qczjspeed.js, script-update-interval=0

#汽车之家极速版获取header
汽车之家极速版获取header = type=http-request,pattern=(mobile\.app\.autohome\.com\.cn\/*||openapi\.autohome\.com\.cn\/*),script-path=https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/qczjspeed.js, 

#汽车之家极速版获取时段body
汽车之家极速版获取时段body = type=http-request,pattern=http:\/\/mobile\.app\.autohome\.com\.cn\/*,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/qczjspeed.js, script-update-interval=0



*/


const $ = Env("汽车之家极速版");
$.idx = ($.idx = ($.getval('qczjSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const notify = $.isNode() ? require("./sendNotify") : ``;
const COOKIE = $.isNode() ? require("./qczjspeedCOOKIE") : ``;
const logs = 0; // 0为关闭日志，1为开启
const notifyttt = 1 // 0为关闭外部推送，1为12 23 点外部推送
const notifyInterval = 2; // 0为关闭通知，1为所有通知，2为12 23 点通知  ， 3为 6 12 18 23 点通知 

let tz, fx;
$.message = '', COOKIES_SPLIT = '', CASHTIME = '', CASH = '';


const GetUserInfoheaderArr = [];
let GetUserInfoheaderVal = ``;
let middleGetUserInfoHEADER = [];
const taskbodyArr = [];
let taskbodyVal = ``;
let middletaskBODY = [];
const activitybodyArr = [];
let activitybodyVal = ``;
let middleactivityBODY = [];
const addCoinbodyArr = [];
let addCoinbodyVal = ``;
let middleaddCoinBODY = [];
const addCoin2bodyArr = [];
let addCoin2bodyVal = ``;
let middleaddCoin2BODY = [];


//时间
const nowTimes = new Date(
    new Date().getTime() +
    new Date().getTimezoneOffset() * 60 * 1000 +
    8 * 60 * 60 * 1000
);
// 没有设置 QCZJ_CASH 则默认为 0 不提现
if ($.isNode()) {
    CASH = process.env.QCZJ_CASH || 0;
    // 没有设置 QCZJ_CASHTIME 则默认为 0点后提现
    CASHTIME = process.env.QCZJ_CASHTIME || 0;
}
if ($.isNode() && process.env.QCZJ_GetUserInfoHEADER) {
    COOKIES_SPLIT = process.env.COOKIES_SPLIT || "\n";
    console.log(
        `============ cookies分隔符为：${JSON.stringify(
      COOKIES_SPLIT
    )} =============\n`
    );
    if (
        process.env.QCZJ_GetUserInfoHEADER &&
        process.env.QCZJ_GetUserInfoHEADER.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleGetUserInfoHEADER = process.env.QCZJ_GetUserInfoHEADER.split(COOKIES_SPLIT);
    } else {
        middleGetUserInfoHEADER = process.env.QCZJ_GetUserInfoHEADER.split();
    }
    if (
        process.env.QCZJ_taskBODY &&
        process.env.QCZJ_taskBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middletaskBODY = process.env.QCZJ_taskBODY.split(COOKIES_SPLIT);
    } else {
        middletaskBODY = process.env.QCZJ_taskBODY.split();
    }
    if (
        process.env.QCZJ_activityBODY &&
        process.env.QCZJ_activityBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleactivityBODY = process.env.QCZJ_activityBODY.split(COOKIES_SPLIT);
    } else {
        middleactivityBODY = process.env.QCZJ_activityBODY.split();
    }
    if (
        process.env.QCZJ_addCoinBODY &&
        process.env.QCZJ_addCoinBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleaddCoinBODY = process.env.QCZJ_addCoinBODY.split(COOKIES_SPLIT);
    } else {
        middleaddCoinBODY = process.env.QCZJ_addCoinBODY.split();
    }
    if (
        process.env.QCZJ_addCoin2BODY &&
        process.env.QCZJ_addCoin2BODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleaddCoin2BODY = process.env.QCZJ_addCoin2BODY.split(COOKIES_SPLIT);
    } else {
        middleaddCoin2BODY = process.env.QCZJ_addCoin2BODY.split();
    }
}
if (COOKIE.GetUserInfoheaderVal) {
    QCZJ_COOKIES = {
        "GetUserInfoheaderVal": COOKIE.GetUserInfoheaderVal.split('\n'),
        "taskbodyVal": COOKIE.taskbodyVal.split('\n'),
        "activitybodyVal": COOKIE.activitybodyVal.split('\n'),
        "addCoinbodyVal": COOKIE.addCoinbodyVal.split('\n'),
        "addCoin2bodyVal": COOKIE.addCoin2bodyVal.split('\n'),
    }
    Length = QCZJ_COOKIES.GetUserInfoheaderVal.length;
}
if (!COOKIE.GetUserInfoheaderVal) {
    if ($.isNode()) {
        Object.keys(middleGetUserInfoHEADER).forEach((item) => {
            if (middleGetUserInfoHEADER[item]) {
                GetUserInfoheaderArr.push(middleGetUserInfoHEADER[item]);
            }
        });
        Object.keys(middletaskBODY).forEach((item) => {
            if (middletaskBODY[item]) {
                taskbodyArr.push(middletaskBODY[item]);
            }
        });
        Object.keys(middleactivityBODY).forEach((item) => {
            if (middleactivityBODY[item]) {
                activitybodyArr.push(middleactivityBODY[item]);
            }
        });
        Object.keys(middleaddCoinBODY).forEach((item) => {
            if (middleaddCoinBODY[item]) {
                addCoinbodyArr.push(middleaddCoinBODY[item]);
            }
        });
        Object.keys(middleaddCoin2BODY).forEach((item) => {
            if (middleaddCoin2BODY[item]) {
                addCoin2bodyArr.push(middleaddCoin2BODY[item]);
            }
        });
    } else {
        GetUserInfoheaderArr.push($.getdata("GetUserInfoheader"));
        taskbodyArr.push($.getdata("taskbody"));
        activitybodyArr.push($.getdata("activitybody"));
        addCoinbodyArr.push($.getdata("addCoinbody"));
        addCoin2bodyArr.push($.getdata("addCoin2body"));
        // 根据boxjs中设置的额外账号数，添加存在的账号数据进行任务处理
        if ("qczjCASH") {
            CASH = $.getval("qczjCASH") || '0';
        }
        if ("qczjCASHTIME") {
            CASHTIME = $.getval("qczjCASHTIME") || '10';
        }
        let qczjCount = ($.getval('qczjCount') || '1') - 0;
        for (let i = 2; i <= qczjCount; i++) {
            if ($.getdata(`GetUserInfoheader${i}`)) {
                GetUserInfoheaderArr.push($.getdata(`GetUserInfoheader${i}`));
                taskbodyArr.push($.getdata(`taskbody${i}`));
                activitybodyArr.push($.getdata(`activitybody${i}`));
                addCoinbodyArr.push($.getdata(`addCoinbody${i}`));
                addCoin2bodyArr.push($.getdata(`addCoin2body${i}`));
            }
        }
    }
    Length = GetUserInfoheaderArr.length
}

function GetCookie() {
    //用户名
    if ($request && $request.url.indexOf("GetUserInfo.ashx") >= 0) {
        const GetUserInfoheaderVal = JSON.stringify($request.headers);

        if (GetUserInfoheaderVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('GetUserInfoheader' + $.idx);
                 if (bodys) {
                    if (bodys.indexOf(GetUserInfoheaderVal) >= 0) {
                        $.log(
                            `[${$.name + $.idx}] GetUserInfoheaderVal已存在✅: GetUserInfoheaderVal: ${GetUserInfoheaderVal}`
                        );
                        $.msg($.name + $.idx, `GetUserInfoheaderVal已存在: 🎉`, ``);
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
                        $.setdata(GetUserInfoheaderVal, "GetUserInfoheader" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取GetUserInfoheaderVal✅: 成功,GetUserInfoheaderVal: ${GetUserInfoheaderVal}`
                        );
                        $.msg($.name + $.idx, `获取GetUserInfoheaderVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
    //日常任务
    if ($request && $request.url.indexOf("init") >= 0 && $request.url.indexOf("task") >= 0 && $request.body.indexOf("model=1") >= 0) {

        const taskbodyVal = $request.body;

        if (taskbodyVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('taskbody' + $.idx);
                 if (bodys) {
                    if (bodys.indexOf(taskbodyVal) >= 0) {
                        $.log(
                            `[${$.name + $.idx}] taskbodyVal已存在✅: taskbodyVal: ${taskbodyVal}`
                        );
                        $.msg($.name + $.idx, `taskbodyVal已存在: 🎉`, ``);
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
                        $.setdata(taskbodyVal, "taskbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取taskbodyVal✅: 成功,taskbodyVal: ${taskbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取taskbodyVal: 成功🎉`, ``);

                        $.done();
                    }
                };

            }

        }

    }
    //活动
    if ($request && $request.url.indexOf("activity") >= 0 && $request.body.indexOf("pm=1") >= 0) {
        const activitybodyVal = $request.body;

        if (activitybodyVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('activitybody' + $.idx);
                 if (bodys) {
                    if (bodys.indexOf(activitybodyVal) >= 0) {
                        $.log(
                            `[${$.name + $.idx}] activitybodyVal已存在✅: activitybodyVal: ${activitybodyVal}`
                        );
                        $.msg($.name + $.idx, `activitybodyVal已存在: 🎉`, ``);
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
                        $.setdata(activitybodyVal, "activitybody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取activitybodyVal✅: 成功,activitybodyVal: ${activitybodyVal}`
                        );
                        $.msg($.name + $.idx, `获取activitybodyVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
    //时段任务
    if ($request && $request.body.indexOf("moreflag=0") >= 0) {
        const addCoinbodyVal = $request.body;

        if (addCoinbodyVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('addCoinbody' + $.idx);
                 if (bodys) {
                    if (bodys.indexOf(addCoinbodyVal) >= 0) {
                        $.log(
                            `[${$.name + $.idx}] addCoinbodyVal已存在✅: addCoinbodyVal: ${addCoinbodyVal}`
                        );
                        $.msg($.name + $.idx, `addCoinbodyVal已存在: 🎉`, ``);
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
                        $.setdata(addCoinbodyVal, "addCoinbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取addCoinbodyVal✅: 成功,addCoinbodyVal: ${addCoinbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取addCoinbodyVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }
    //时段翻倍
    if ($request && $request.body.indexOf("moreflag=1") >= 0) {
        const addCoin2bodyVal = $request.body;

        if (addCoin2bodyVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('addCoin2body' + $.idx);
                 if (bodys) {
                    if (bodys.indexOf(addCoin2bodyVal) >= 0) {
                        $.log(
                            `[${$.name + $.idx}] addCoin2bodyVal已存在✅: addCoin2bodyVal: ${addCoin2bodyVal}`
                        );
                        $.msg($.name + $.idx, `addCoin2bodyVal已存在: 🎉`, ``);
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
                        $.setdata(addCoin2bodyVal, "addCoin2body" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取addCoin2bodyVal✅: 成功,addCoin2bodyVal: ${addCoin2bodyVal}`
                        );
                        $.msg($.name + $.idx, `获取addCoin2bodyVal: 成功🎉`, ``);

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
console.log(`============ 提现标准为：${CASH}元 =============\n`);
console.log(`============ 提现时间为：${CASHTIME}点后 =============\n`);
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
            'http://athm.cn/rUcSMrc', {
                "open-url": "http://athm.cn/rUcSMrc"
            }
        );
        return;
    }
    for (let i = 0; i < Length; i++) {
        if (COOKIE.GetUserInfoheaderVal) {
            GetUserInfoheaderVal = QCZJ_COOKIES.GetUserInfoheaderVal[i];
            taskbodyVal = QCZJ_COOKIES.taskbodyVal[i];
            activitybodyVal = QCZJ_COOKIES.activitybodyVal[i];
            addCoinbodyVal = QCZJ_COOKIES.addCoinbodyVal[i];
            addCoin2bodyVal = QCZJ_COOKIES.addCoin2bodyVal[i];
        }
        if (!COOKIE.GetUserInfoheaderVal) {
            GetUserInfoheaderVal = GetUserInfoheaderArr[i];
            taskbodyVal = taskbodyArr[i];
            activitybodyVal = activitybodyArr[i];
            addCoinbodyVal = addCoinbodyArr[i];
            addCoin2bodyVal = addCoin2bodyArr[i];
        }
        cookie = JSON.parse(GetUserInfoheaderVal)["Cookie"];

        let arr = cookie.split(';');
        app_userid = arr.find(item => {
            return item.indexOf('app_userid') > -1
        }).trim().split('=')[1]
        pcpopclub = arr.find(item => {
            return item.indexOf('pcpopclub') > -1
        }).trim().split('=')[1]
        app_sign = arr.find(item => {
            return item.indexOf('app_sign') > -1
        }).trim().split('=')[1]
        app_deviceid = arr.find(item => {
            return item.indexOf('app_deviceid') > -1
        }).trim().split('=')[1]
        sessionid = arr.find(item => {
            return item.indexOf('sessionid') > -1
        })
        if (sessionid) {
            sessionid = sessionid.trim().split('=')[1]
        }
        ts = Math.round((new Date().getTime() +
            new Date().getTimezoneOffset() * 60 * 1000 +
            8 * 60 * 60 * 1000) / 1000).toString();
        tts = Math.round(new Date().getTime() +
            new Date().getTimezoneOffset() * 60 * 1000 +
            8 * 60 * 60 * 1000).toString();
        O = (`${$.name + (i + 1)}🔔`);
        await console.log(`-------------------------\n\n🔔开始运行【${$.name+(i+1)}】`)
        await GetUserInfo(); //用户名   
        await coin(); //账户信息    
        await task(); //日常任务
        await activity(); //活动
        await reportAss(); //助力任务	  
        await addCoin(); //时段任务
        await addCoin2(); //时段翻倍
        if (nowTimes.getHours() >= CASHTIME && CASH >= 0.5 && $.coin.result && $.coin.result.nowmoney >= CASH) {
            await cointowallet(); //提现
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
//用户名
function GetUserInfo(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://mobile.app.autohome.com.cn/speeduser_v1.0.0/user/v2/GetUserInfo.ashx?au=${pcpopclub}&tid=0&p=1&_timestamp=${ts}&u=0&fc=0&v=1.7.0&pm=1&topauid=0&s=4&_sign=${app_sign}&a=18`,
                headers: JSON.parse(GetUserInfoheaderVal),
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 用户名🚩: ${data}`);
                    $.GetUserInfo = JSON.parse(data);
                    $.message += `\n${O}`;
                    $.message += `\n========== 【${$.GetUserInfo.result.name}】 ==========\n`;
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//账户信息  
function coin(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://mobile.app.autohome.com.cn/speedgrow_v1.0.0/taskcenter/init/coin`,
                headers: JSON.parse(GetUserInfoheaderVal),
                body: activitybodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 账户信息🚩: ${data}`);
                    $.coin = JSON.parse(data);
                    $.message += '【账户信息】：今日金币' + $.coin.result.nowcoin + ',账户余额' + $.coin.result.nowmoney + '元' + '\n';
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//日常任务
function task(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://mobile.app.autohome.com.cn/speedgrow_v1.0.0/taskcenter/init/task`,
                headers: JSON.parse(GetUserInfoheaderVal),
                body: taskbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 日常任务🚩: ${data}`);
                    $.task = JSON.parse(data);
                    if ($.task.result) {
                        fx = $.task.result.list[1].tasklist.find(item => item.title === '分享赚现金');
                        if (fx) {
                            $.message +=
                                '【' + fx.title + '】：奖励' + fx.tiptxt + '，进度' + fx.step + '\n'
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
//活动
function activity(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `https://mobile.app.autohome.com.cn/speedgrow_v1.0.0/taskcenter/init/activity`,
                headers: JSON.parse(GetUserInfoheaderVal),
                body: activitybodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 活动🚩: ${data}`);
                    $.activity = JSON.parse(data);
                    let activitydex = $.activity.result.list
                    if (activitydex[0].data.userstate == 1) {
                        $.message += '【' + $.activity.result.title + '】：今日已签到,已连续签到' + activitydex[0].data.signdaycount + '天，今日签到奖励' + activitydex[0].data.signlist[activitydex[0].data.signdaycount - 1].prize + '金币' + '\n'
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
//时段任务
function addCoin(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `http://mobile.app.autohome.com.cn/fasthome/mainpagecoin/addCoin`,
                headers: JSON.parse(GetUserInfoheaderVal),
                body: addCoinbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 时段任务🚩: ${data}`);
                    $.addCoin = JSON.parse(data);
                    if ($.addCoin.returncode == 0)
                        $.message += '【时段奖励】：成功领取' + $.addCoin.result.getcoinnum + '金币\n';
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
function addCoin2(timeout = 1000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: `http://mobile.app.autohome.com.cn/fasthome/mainpagecoin/addCoin`,
                headers: JSON.parse(GetUserInfoheaderVal),
                body: addCoin2bodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 时段翻倍🚩: ${data}`);
                    $.addCoin2 = JSON.parse(data);
                    if ($.addCoin2.returncode == 0)
                        $.message += '【时段翻倍】：成功领取' + $.addCoin2.result.getcoinnum + '金币\n';
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//助力任务
function reportAss(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            do out = Math.floor(Math.random() * 10000000);
            while (out < 10000)
            let body = `_appid=car&taskId=qczjjsb_lb_mglh&userId=${app_userid}&userAssistanceId=${out}&_v=qauto_wxapp1.0&_timestamp=${ts}&_sign=${app_sign}`
            header = GetUserInfoheaderVal.replace(/q=1/g, `q=1","Referer":"https://servicewechat.com/wx8ebc8f3586c7321f/160/page-frame.html","Content-Type":"application/x-www-form-urlencoded;charset=utf-8","Host":"openapi.autohome.com.cn`)
            let url = {
                url: `https://openapi.autohome.com.cn/autohome/uc-news-quickappservice/msapi/dealers/reportAss`,
                headers: JSON.parse(header),
                body: body,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 助力任务🚩: ${data}`);
                    $.reportAss = JSON.parse(data);
                    if ($.reportAss.data == 0)
                        $.message += '【助力任务】：助力成功\n';
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
function cointowallet(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let body = `auth=${pcpopclub}&userid=${app_userid}&cashtype=3&coin_amount=${CASH*10000}&validatecode=&faceno=&a=18&pm=1&v=1.7.0&device_id=${app_deviceid}&sessionid=${sessionid}&_timestamp=${tts}`
            let url = {
                url: `https://mobile.app.autohome.com.cn/fasthome/coin/cointowallet`,
                headers: JSON.parse(GetUserInfoheaderVal),
                body: body,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 提现🚩: ${data}`);
                    $.cointowallet = JSON.parse(data);
                    if ($.cointowallet.returncode == 0)
                        $.message += `【现金提现】:成功提现${CASH}元\n`;
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