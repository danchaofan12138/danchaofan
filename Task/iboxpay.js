/* ziye 
github地址 https://github.com/6Svip120apk69
TG频道地址  https://t.me/ziyescript
TG交流群   https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接  https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/ziye.boxjs.json
转载请备注个名字，谢谢

⚠️笑谱
脚本运行一次   
则运行6次视频 1次金蛋 1次直播（直播默认关闭，且在8点到23点有效）

1.15 调整金蛋延迟为60秒
1.17 增加ck失效提醒，以及金币满额停止
1.27 笑谱恢复，活动id284
1.27-2 增加看直播功能，默认关闭，设置LIVE来开启  如 设置LIVE 为 60 则开启直播，并且次数达到60次停止
1.27-3 调整直播运行次数，运行一次脚本，执行6次直播
1.27-4 调整策略，6次视频1次金蛋1次直播
1.28 修复收益列表问题
1.29 活动id302
1.30 修复活动id频繁变动问题，修复金蛋视频id
1.30 解决ck失效问题
1.30-3 增加提现
1.31 增加180秒任务,优先直播，修改直播金币显示
1.31-2 调整判定
2.1 增加CK获取时间
2.2 优化
2.3 修复直播问题，采用真实直播id
2.3 设置LIVE 为61 时  单跑直播
2.3 修复错误，修复直播收益显示
2.4 修复金蛋问题，增加视频收益统计，增加上限判定，达到上限以及19点后不执行视频，
2.4 直播限制为30  设置LIVE为0 不跑直播，1跑直播和视频，2单跑直播
2.5 增加首次视频验证，灰号直接停止视频
2.6 修复判定错误,增加surge获取token重写
2.7 增加红包雨，设置LIVE等于3 开启
2.7-2 调整红包雨运行机制
2.8 修复无人直播出现的错误
2.8-2 修复红包雨结束报错
2.8-3 增加通过验证码获取token功能，并且内置header，新人设置LIVE为888
2.8-4 修复错误
2.10 修复红包雨问题，LIVE设置3  启动红包雨活动，修复版本问题
2.10-2 移除红包雨模块
2.11 移除视频时间限制，LIVE设置666做新人180秒任务
2.26 适配直播上限20次
3.5 设置888由上至下循环提现
3.8 替换为循环获取ck
3.9 因视频功能无效，故取消视频，默认开启直播
3.17 修复视频功能， 暂时设置ck上限为10
3.18 修复视频错误，修复小错误，新增COOKIE方式一 boxjs复制会话
3.19 修复ac运行报错
3.20 视频ck有效期目前未知，增加失效判定，直播上限为5000，已适配



⚠️一共1个位置 3个ck  👉 7条 Secrets 
多账号换行


⚠️方法一

第一步 进入笑谱 选择手机号登陆，输入手机号，点击获取验证码

第二步 ⚠️进入boxjs（其他平台则输入对应环境变量）  输入当前账号序号   输入手机号  和  验证码

第三步 运行js  手机则自动获取token（其他平台则复制token，填写环境变量）  然后回到boxjs 修改验证码为0


已全部操作完成


⚠️方法二

第一步 添加  hostname=veishop.iboxpay.com,

第二步 ⚠️添加笑谱获取更新TOKEN重写  

登录笑谱(在登录状态就退出，重新登录)  获取更新TOKEN



refreshtokenVal 👉XP_refreshTOKEN
iboxpayvideoheaderVal👉 XP_iboxpayvideoHEADER
iboxpayvideobodyVal👉 XP_iboxpayvideoBODY


⚠️视频ck
添加视频ck重写  圈满获取header和body，若遇到网络问题，请切换到4G



设置任务 可设置 0 1 2    0开视频关直播 1开视频开直播 2关视频开直播
 LIVE  👉  XP_live

设置提现金额 可设置 0 1 15 30 50 100 888 默认0关闭  设置888由上至下循环提现
CASH  👉  XP_CASH 

设置手机号 
 phone  👉  XP_phone

设置验证码   默认0关闭获取token功能
sms  👉  XP_sms

⚠️主机名以及重写👇

（手机可以获取refreshTOKEN     其他开启抓包，然后登录笑谱，找到 https://veishop.iboxpay.com/nf_gateway/nf-user-auth-web/ignore_tk/veishop/v1/ 里的响应体 refreshTOKEN）

hostname=veishop.iboxpay.com

############## 圈x

#笑谱获取更新TOKEN
https:\/\/veishop\.iboxpay\.com\/nf_gateway\/nf-user-auth-web\/ignore_tk\/veishop\/v1\/* url script-response-body https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/iboxpay.js

#笑谱获取视频ck
https:\/\/veishop\.iboxpay\.com\/nf_gateway\/nf_customer_activity\/day_cash\/v1\/give_gold_coin_by_video.json url script-request-body https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/iboxpay.js

############## loon
http-response https:\/\/veishop\.iboxpay\.com\/nf_gateway\/nf-user-auth-web\/ignore_tk\/veishop\/v1\/* script-path=https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/iboxpay.js, requires-body=1,max-size=0, tag=笑普token

http-requires https:\/\/veishop\.iboxpay\.com\/nf_gateway\/nf_customer_activity\/day_cash\/v1\/give_gold_coin_by_video.json script-path=https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/iboxpay.js, requires-body=1,max-size=0, tag=笑谱获取视频ck
############## surge

#笑谱获取更新TOKEN
笑谱获取更新TOKEN = type=http-response,pattern=https:\/\/veishop\.iboxpay\.com\/nf_gateway\/nf-user-auth-web\/ignore_tk\/veishop\/v1\/*,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/iboxpay.js

#笑谱获取视频ck
笑谱获取视频ck = type=http-requires,pattern=https:\/\/veishop\.iboxpay\.com\/nf_gateway\/nf_customer_activity\/day_cash\/v1\/give_gold_coin_by_video.json,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/iboxpay.js



*/
GXRZ = '3.20 视频ck有效期目前未知，增加失效判定，直播上限为5000，已适配'
const $ = Env("笑谱");
$.idx = ($.idx = ($.getval('iboxpaySuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const notify = $.isNode() ? require("./sendNotify") : ``;
const COOKIE = $.isNode() ? require("./iboxpayCOOKIE") : ``;
const logs = 0; // 0为关闭日志，1为开启
const notifyttt = 1 // 0为关闭外部推送，1为12 23 点外部推送
const notifyInterval = 2; // 0为关闭通知，1为所有通知，2为12 23 点通知  ， 3为 6 12 18 23 点通知 
const CS = 5
$.message = '', COOKIES_SPLIT = '', CASH = '', Length = 0, LIVE = '', phone = '', sms = '', ddtime = '', spid = '', TOKEN = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', zbid = '', cashcs = '', newcashcs = '', liveId = '';
let livecs = 0,
    videoscs = 0,
    LIVES = 0,
    HBY = 0,
    liveIdcd = 0;
RT = 30000;
let refreshtokenArr = [];
let refreshtokenVal = ``;
let middlerefreshTOKEN = [];
let iboxpayvideoheaderArr = [];
let iboxpayvideoheaderVal = ``;
let middleiboxpayvideoHEADER = [];
let iboxpayvideobodyArr = [];
let iboxpayvideobodyVal = ``;
let middleiboxpayvideoBODY = [];
if ($.isNode() && COOKIE.datas && COOKIE.datas[0].val != '') {
    console.log(
        `============ cookie方式为：方式一 boxjs复制会话 =============\n`
    );
}
if ($.isNode() && COOKIE.refreshtokenVal && COOKIE.refreshtokenVal != '') {
    console.log(
        `============ cookie方式为：方式三 直接填写 =============\n`
    );
}

if ($.isNode()) {
    // 没有设置 XP_CASH 则默认为 0 不提现
    CASH = process.env.XP_CASH || 0;
    // 没有设置 XP_live 则默认0
    LIVE = process.env.XP_live || 1;
    // 没有设置 XP_phone 则默认为 0 
    phone = process.env.XP_phone || 0;
    // 没有设置 XP_sms 则默认0  不获取TOKEN
    sms = process.env.XP_sms || 0

}
if ($.isNode() && process.env.XP_refreshTOKEN) {
    COOKIES_SPLIT = process.env.COOKIES_SPLIT || "\n";
    console.log(
        `============ cookies分隔符为：${JSON.stringify(
      COOKIES_SPLIT
    )} =============\n`
    );
    if (
        process.env.XP_refreshTOKEN &&
        process.env.XP_refreshTOKEN.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlerefreshTOKEN = process.env.XP_refreshTOKEN.split(COOKIES_SPLIT);
    } else {
        middlerefreshTOKEN = process.env.XP_refreshTOKEN.split();
    }
    if (process.env.XP_iboxpayvideoHEADER) {
        if (
            process.env.XP_iboxpayvideoHEADER &&
            process.env.XP_iboxpayvideoHEADER.indexOf(COOKIES_SPLIT) > -1
        ) {
            middleiboxpayvideoHEADER = process.env.XP_iboxpayvideoHEADER.split(COOKIES_SPLIT);
        } else {
            middleiboxpayvideoHEADER = process.env.XP_iboxpayvideoHEADER.split();
        }
        if (
            process.env.XP_iboxpayvideoBODY &&
            process.env.XP_iboxpayvideoBODY.indexOf(COOKIES_SPLIT) > -1
        ) {
            middleiboxpayvideoBODY = process.env.XP_iboxpayvideoBODY.split(COOKIES_SPLIT);
        } else {
            middleiboxpayvideoBODY = process.env.XP_iboxpayvideoBODY.split();
        }
    }
}
if (COOKIE.refreshtokenVal) {
    XP_COOKIES = {

        "refreshtokenVal": COOKIE.refreshtokenVal.split('\n'),
        "iboxpayvideoheaderVal": COOKIE.iboxpayvideoheaderVal.split('\n'),
        "iboxpayvideobodyVal": COOKIE.iboxpayvideobodyVal.split('\n'),
    }
    Length = XP_COOKIES.refreshtokenVal.length;
}
if (COOKIE.datas && COOKIE.datas[0].val != '') {

    iboxpayCount = COOKIE.settings.find(item => item.id === `iboxpayCount`);
    iboxpayLIVE = COOKIE.settings.find(item => item.id === `iboxpayLIVE`);
    iboxpayCASH = COOKIE.settings.find(item => item.id === `iboxpayCASH`);
    iboxpayphone = COOKIE.settings.find(item => item.id === `iboxpayphone`);
    iboxpaysms = COOKIE.settings.find(item => item.id === `iboxpaysms`);

    Length = iboxpayCount.val
    LIVE = iboxpayLIVE.val
    CASH = iboxpayCASH.val
    phone = iboxpayphone.val
    sms = iboxpaysms.val

}

if (!COOKIE.datas && !COOKIE.refreshtokenVal) {
    if ($.isNode()) {
        Object.keys(middlerefreshTOKEN).forEach((item) => {
            if (middlerefreshTOKEN[item]) {
                refreshtokenArr.push(middlerefreshTOKEN[item]);
            }
        });
        Object.keys(middleiboxpayvideoHEADER).forEach((item) => {
            if (middleiboxpayvideoHEADER[item]) {
                iboxpayvideoheaderArr.push(middleiboxpayvideoHEADER[item]);
            }
        });
        Object.keys(middleiboxpayvideoBODY).forEach((item) => {
            if (middleiboxpayvideoBODY[item]) {
                iboxpayvideobodyArr.push(middleiboxpayvideoBODY[item]);
            }
        });
    } else {
        iboxpayvideoheaderArr.push($.getdata("iboxpayvideoheader"));
        iboxpayvideobodyArr.push($.getdata("iboxpayvideobody"));

        refreshtokenArr.push($.getdata("refreshtoken"));

        // 根据boxjs中设置的额外账号数，添加存在的账号数据进行任务处理
        if ("iboxpayCASH") {
            CASH = $.getval("iboxpayCASH") || '0';
        }
        if ("iboxpayLIVE") {
            LIVE = $.getval("iboxpayLIVE") || '1';
        }
        if ("iboxpayphone") {
            phone = $.getval("iboxpayphone") || '0';
        }
        if ("iboxpaysms") {
            sms = $.getval("iboxpaysms") || '0';
        }
        let iboxpayCount = ($.getval('iboxpayCount') || '1') - 0;
        for (let i = 2; i <= iboxpayCount; i++) {
            if ($.getdata(`refreshtoken${i}`)) {


                iboxpayvideoheaderArr.push($.getdata(`iboxpayvideoheader${i}`));
                iboxpayvideobodyArr.push($.getdata(`iboxpayvideobody${i}`));
                refreshtokenArr.push($.getdata(`refreshtoken${i}`));
            }
        }
    }
    Length = refreshtokenArr.length
}


function GetCookie() {
    if ($request && $request.url.indexOf("nf-user-auth-web") >= 0) {
        const refreshtokenVal = JSON.parse($response.body).data.refreshToken

        if (refreshtokenVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('refreshtoken' + $.idx);
                if (bodys) {
                    if (bodys.indexOf(refreshtokenVal) >= 0) {
                        $.log(
                            `[${$.name + $.idx}] refreshtokenVal已存在✅: refreshtokenVal: ${refreshtokenVal}`
                        );
                        $.msg($.name + $.idx, `refreshtokenVal已存在: 🎉`, ``);
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
                        $.setdata(refreshtokenVal, "refreshtoken" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取refreshtokenVal✅: 成功,refreshtokenVal: ${refreshtokenVal}`
                        );
                        $.msg($.name + $.idx, `获取refreshtokenVal: 成功🎉`, ``);

                        $.done();
                    }
                };
            }
        }
    }


    if ($request && $request.url.indexOf("give_gold_coin_by_video") >= 0) {

        const iboxpayvideoheaderVal = JSON.stringify($request.headers);
        const iboxpayvideobodyVal = $request.body;

        if (iboxpayvideobodyVal) {
            cookie()

            function cookie() {

                headeres = $.getdata('iboxpayvideoheader' + $.idx);
                bodys = $.getdata('iboxpayvideobody' + $.idx);

                if (bodys && headeres) {

                    iboxpayvideoHeader = headeres.split('&');
                    iboxpayvideoBody = bodys.split('&');

                    if (iboxpayvideoHeader.length >= 10) {

                        if ($.idx == '') {
                            $.idx = 2
                            cookie()
                        } else {
                            $.idx = $.idx + 1
                            cookie()
                        }
                    } else if (headeres.indexOf(iboxpayvideoheaderVal) >= 0) {
                        $.msg('重复跳过');
                        $.done();
                    } else {

                        headeres = iboxpayvideoheaderVal + '&' + headeres;
                        $.setdata(headeres, "iboxpayvideoheader" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取iboxpayvideoheader${iboxpayvideoHeader.length+1}✅: 成功,iboxpayvideoheader${iboxpayvideoHeader.length+1}: ${iboxpayvideoheaderVal}`
                        );
                        $.msg($.name + $.idx, `获取iboxpayvideoheader${iboxpayvideoHeader.length+1}✅: 成功🎉`)

                        bodys = iboxpayvideobodyVal + '&' + bodys;
                        $.setdata(bodys, "iboxpayvideobody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取iboxpayvideobody${iboxpayvideoBody.length+1}✅: 成功,iboxpayvideobody${iboxpayvideoBody.length+1}: ${iboxpayvideobodyVal}`
                        );
                        $.msg($.name + $.idx, `获取iboxpayvideobody${iboxpayvideoBody.length+1}✅: 成功🎉`)

                        $.done();
                    }
                } else {
                    headeres = iboxpayvideoheaderVal;
                    $.setdata(headeres, "iboxpayvideoheader" + $.idx);
                    $.log(
                        `[${$.name + $.idx}] 获取iboxpayvideoheader✅: 成功,iboxpayvideoheader: ${iboxpayvideoheaderVal}`
                    );
                    $.msg($.name + $.idx, `获取iboxpayvideoheader✅: 成功🎉`)

                    bodys = iboxpayvideobodyVal;
                    $.setdata(bodys, "iboxpayvideobody" + $.idx);
                    $.log(
                        `[${$.name + $.idx}] 获取iboxpayvideobody✅: 成功,iboxpayvideobody: ${iboxpayvideobodyVal}`);
                    $.msg($.name + $.idx, `获取iboxpayvideobody✅: 成功🎉`)

                    $.done();

                }
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
console.log(`============ 提现标准为：${CASH} =============\n`);
//if (LIVE == 0) {
// console.log(`============ 看直播关闭，看视频开启 =============\n`);
//}
if (LIVE == 1) {
    console.log(`============ 看直播开启，看视频开启 =============\n`);
}
if (LIVE == 2) {
    console.log(`============ 看直播开启，看视频关闭 =============\n`);
}
if (sms >= 1) {
    console.log(`============ TOKEN获取开启 =============\n`);
}
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
        if (sms >= 1) {
            await getTOKEN();
        } else await all();
        if (HBY == 1) {
            await $.wait(500)
        }

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
            '提示：⚠️请点击前往获取https://apps.apple.com/cn/app/%E7%AC%91%E8%B0%B1/id1487075970\n',
            'https://apps.apple.com/cn/app/%E7%AC%91%E8%B0%B1/id1487075970', {
                "open-url": "https://apps.apple.com/cn/app/%E7%AC%91%E8%B0%B1/id1487075970"
            }
        );
        return;
    }
    for (let i = 0; i < Length; i++) {
        if (COOKIE.datas && COOKIE.datas[0].val != '') {


            if (i == 0) {
                op = ``
            } else {
                op = i + 1
            }

            refreshtokens = COOKIE.datas.find(item => item.key === `refreshtoken${op}`);
            iboxpayvideoheader = COOKIE.datas.find(item => item.key === `iboxpayvideoheader${op}`);
            iboxpayvideobody = COOKIE.datas.find(item => item.key === `iboxpayvideobody${op}`);

            refreshtokenVal = refreshtokens.val;
            iboxpayvideoheaderVal = iboxpayvideoheader.val;
            iboxpayvideobodyVal = iboxpayvideobody.val;

        }

        if (COOKIE.refreshtokenVal) {

            refreshtokenVal = XP_COOKIES.refreshtokenVal[i];
            iboxpayvideoheaderVal = XP_COOKIES.iboxpayvideoheaderVal[i];
            iboxpayvideobodyVal = XP_COOKIES.iboxpayvideobodyVal[i];
        }
        if (!COOKIE.datas && !COOKIE.refreshtokenVal) {

            refreshtokenVal = refreshtokenArr[i];
            iboxpayvideoheaderVal = iboxpayvideoheaderArr[i];
            iboxpayvideobodyVal = iboxpayvideobodyArr[i];
        }

        do RT = Math.floor(Math.random() * 35000);
        while (RT < 30000)

        do VT = Math.floor(Math.random() * 35000);
        while (VT < 30000)
        O = (`${$.name + (i + 1)}🔔`);
        await console.log(`-------------------------\n\n🔔开始运行【${$.name+(i+1)}】`)



        await refreshtoken(); //更新TOKEN       
        let cookie_is_live = await user(i + 1); //用户名
        if (!cookie_is_live) {
            continue;
        }
        await hdid(); //活动id
        await goldcoin(); //金币信息
        await coin(); //账户信息
        await sylist(); //收益列表
        await splimit(); //视频上限
        await newcashlist(); //提现查询
        await cashlist(); //今日提现查询
        if (!cashcs.amount && CASH >= 1 && CASH <= 100 && $.coin.data.balance / 100 >= CASH) {
            await withdraw(); //提现
        }

        if (!cashcs.amount && CASH == 888) {

            if ($.coin.data.balance / 100 >= 100) {
                CASH = 100
            } else if ($.coin.data.balance / 100 >= 50) {
                CASH = 50
            } else if ($.coin.data.balance / 100 >= 30) {
                CASH = 30
            } else if ($.coin.data.balance / 100 >= 15) {
                CASH = 15
            } else if ($.coin.data.balance / 100 >= 1) {
                CASH = 1
            }

            if (CASH != 888) {
                await withdraw(); //提现
            }
        }

        if (LIVE >= 1 && nowTimes.getHours() >= 8 && nowTimes.getHours() <= 23 && $.sylist.resultCode && livecs < 10) {
            await liveslist(); //直播节目表
            if (liveIdcd >= 1) {
                dd = liveIdcd * 35 - 34
                console.log(`📍本次直播运行需要${dd}秒` + '\n')

                await lives(); //看直播
                await $.wait(dd * 1000)
            }
        }

        if (iboxpayvideoheaderVal && iboxpayvideobodyVal && iboxpayvideoheaderVal != '' && iboxpayvideobodyVal != '' && LIVE != 2 && ($.splimit.data.isUperLimit == false || LIVE == 888)) {

            videoHEADER = iboxpayvideoheaderVal.split('&');
            videoBODY = iboxpayvideobodyVal.split('&');
            console.log(`📍此账号共有${videoHEADER.length}个body` + '\n')

            await videoo(); //视频o

            if (LIVES != 2 && videoHEADER.length >= 2) {
                await $.wait(VT)
                tt = videoHEADER.length * 35 - 34
                console.log(`📍本次视频运行需要${tt}秒` + '\n')

                await video(); //视频
                await $.wait(tt * 1000)

            }

        } else if (!iboxpayvideoheaderVal || !iboxpayvideobodyVal || iboxpayvideoheaderVal == '' || iboxpayvideobodyVal == '') {
            console.log('视频奖励：未获取视频ck\n');
            $.message += '【视频奖励】：未获取视频ck\n'
        } else if (LIVE == 2) {
            console.log('视频奖励：视频已设置关闭\n');
            $.message += '【视频奖励】：视频已设置关闭\n'
        } else if ($.splimit.data.isUperLimit != false) {
            console.log('视频奖励：视频奖励达到上限\n');
            $.message += '【视频奖励】：视频奖励达到上限\n'
        }
        console.log(`${GXRZ}\n`);
        $.message += `${GXRZ}\n`
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


//TOKEN获取  
function getTOKEN(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {

            getTOKENbodyVal = `{"userPhone":"${phone}","smsCode":"${sms}","source":"VEISHOP_APP_IOS"}`
            let url = {
                url: `https://veishop.iboxpay.com/nf_gateway/nf-user-auth-web/ignore_tk/veishop/v1/app_register_by_phone.json`,
                headers: {
                    "Connection": "keep-alive",
                    "Accept-Encoding": "gzip, deflate, br",
                    "version": "1.5.0",
                    "mchtNo": "100529600058887",
                    "Content-Type": "application/json; charset=utf-8",
                    "source": "VEISHOP_APP_IOS",
                    "User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "X-User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "traceid": "30000000000000000000" + tts() + "000000000000",
                    "Host": "veishop.iboxpay.com",
                    "Accept-Language": "zh-Hans-CN;q=1",
                    "Accept": "*/*"
                },
                body: getTOKENbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, TOKEN获取🚩: ${decodeUnicode(data)}`);
                    $.getTOKEN = JSON.parse(data);
                    if ($.getTOKEN.resultCode == 1) {
                        const refreshtokenVal = $.getTOKEN.data.refreshToken
                        $.setdata(refreshtokenVal, "refreshtoken" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取refreshtoken✅: 成功,refreshtokenVal: ${refreshtokenVal}`
                        );
                        $.msg($.name + $.idx, `获取refreshtoken: 成功🎉`, ``);
                        $.message += '【TOKEN获取】：成功' + $.getTOKEN.data.refreshToken + '\n';
                    }
                    if ($.getTOKEN.resultCode == 0) {
                        console.log(`TOKEN获取：${$.getTOKEN.errorCode}\n`);
                        $.message += `【TOKEN获取】：${$.getTOKEN.errorCode}\n`;
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
//TOKEN更新  
function refreshtoken(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {

            refreshtokenbodyVal = `{"refreshToken":"${refreshtokenVal}","source":"VEISHOP_APP_IOS"}`
            let url = {
                url: `https://veishop.iboxpay.com/nf_gateway/nf_user_auth_web/uc/ignore_tk/v1/refresh_access_token_to_c.json`,
                headers: {
                    "Connection": "keep-alive",
                    "Accept-Encoding": "gzip, deflate, br",
                    "version": "1.5.0",
                    "mchtNo": "100529600058887",
                    "Content-Type": "application/json; charset=utf-8",
                    "source": "VEISHOP_APP_IOS",
                    "shopkeeperId": "1148855820752977920",
                    "User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "token": `${TOKEN}`,
                    "X-User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "traceid": "30000000000000000000" + tts() + "000000000000",
                    "Host": "veishop.iboxpay.com",
                    "Accept-Language": "zh-Hans-CN;q=1",
                    "Accept": "*/*"
                },
                body: refreshtokenbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, TOKEN更新🚩: ${decodeUnicode(data)}`);
                    $.refreshtoken = JSON.parse(data);
                    if ($.refreshtoken.resultCode == 1) {
                        TOKEN = $.refreshtoken.data.accessToken
                        console.log('更新TOKEN成功:' + TOKEN + '\n');
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
//用户名
function user(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {

            let url = {
                url: `https://veishop.iboxpay.com/nf_gateway/nf_user_center_web/shopkeeper/v1/get_context_info.json`,
                headers: {
                    "Connection": "keep-alive",
                    "Accept-Encoding": "gzip, deflate, br",
                    "version": "1.5.0",
                    "mchtNo": "100529600058887",
                    "Content-Type": "application/json; charset=utf-8",
                    "source": "VEISHOP_APP_IOS",
                    "shopkeeperId": "1148855820752977920",
                    "User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "token": `${TOKEN}`,
                    "X-User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "traceid": "30000000000000000000" + tts() + "000000000000",
                    "Host": "veishop.iboxpay.com",
                    "Accept-Language": "zh-Hans-CN;q=1",
                    "Accept": "*/*"
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 用户名🚩: ${decodeUnicode(data)}`);
                    $.user = JSON.parse(data);
                    if ($.user.resultCode == 1) {
                        $.message += `\n${O}`;
                        $.message += `\n========== 【${$.user.data.customerInfo.nickname}】 ==========\n`;
                        resolve(true);
                    }

                    if ($.user.resultCode == 0) {
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
//金币信息  
function goldcoin(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {

            let url = {
                url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/balance.json?source=WX_APP_KA_HTZP`,
                headers: {
                    "Connection": "keep-alive",
                    "Accept-Encoding": "gzip, deflate, br",
                    "version": "1.5.0",
                    "mchtNo": "100529600058887",
                    "Content-Type": "application/json; charset=utf-8",
                    "source": "VEISHOP_APP_IOS",
                    "shopkeeperId": "1148855820752977920",
                    "User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "token": `${TOKEN}`,
                    "X-User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "traceid": "30000000000000000000" + tts() + "000000000000",
                    "Host": "veishop.iboxpay.com",
                    "Accept-Language": "zh-Hans-CN;q=1",
                    "Accept": "*/*"
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 金币信息🚩: ${decodeUnicode(data)}`);
                    $.goldcoin = JSON.parse(data);
                    $.message += '【金币信息】：今日金币' + $.goldcoin.data.coinSum + ',预估金额' + $.goldcoin.data.balanceSum / 100 + '元\n';
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}
//活动id 
function hdid(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {

            let url = {
                url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/ignore_tk/v1/query_act_list.json?source=WX_APP_KA_HTZP`,
                headers: {
                    "Connection": "keep-alive",
                    "Accept-Encoding": "gzip, deflate, br",
                    "version": "1.5.0",
                    "mchtNo": "100529600058887",
                    "Content-Type": "application/json; charset=utf-8",
                    "source": "VEISHOP_APP_IOS",
                    "shopkeeperId": "1148855820752977920",
                    "User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "token": `${TOKEN}`,
                    "X-User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "traceid": "30000000000000000000" + tts() + "000000000000",
                    "Host": "veishop.iboxpay.com",
                    "Accept-Language": "zh-Hans-CN;q=1",
                    "Accept": "*/*"
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 活动id🚩: ${decodeUnicode(data)}`);
                    $.hdid = JSON.parse(data);
                    if ($.hdid.resultCode == 1) {
                        spid = $.hdid.data.everyDayActivityList.find(item => item.actTypeId === 9)
                        zbid = $.hdid.data.everyDayActivityList.find(item => item.actTypeId === 10)
                        console.log(spid.actName + 'ID：' + spid.actId + '\n');
                        $.message += '【' + spid.actName + 'ID】：' + spid.actId + '\n';
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

//账户信息  
function coin(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {

            let url = {
                url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/withdraw_detail.json?source=WX_APP_KA_HTZP`,
                headers: {
                    "Connection": "keep-alive",
                    "Accept-Encoding": "gzip, deflate, br",
                    "version": "1.5.0",
                    "mchtNo": "100529600058887",
                    "Content-Type": "application/json; charset=utf-8",
                    "source": "VEISHOP_APP_IOS",
                    "shopkeeperId": "1148855820752977920",
                    "User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "token": `${TOKEN}`,
                    "X-User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "traceid": "30000000000000000000" + tts() + "000000000000",
                    "Host": "veishop.iboxpay.com",
                    "Accept-Language": "zh-Hans-CN;q=1",
                    "Accept": "*/*"
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 账户信息🚩: ${decodeUnicode(data)}`);
                    $.coin = JSON.parse(data);
                    $.message += '【账户信息】：明日入账' + $.coin.data.tomorrowAmt / 100 + '元,可提余额' + $.coin.data.balance / 100 + '元\n';
                } catch (e) {
                    $.logErr(e, resp);
                } finally {
                    resolve()
                }
            })
        }, timeout)
    })
}

//视频o
function videoo(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            token = videoHEADER[0].split(`"token":"`)[1].split(`",`)[0]
            videoHEADER1 = videoHEADER[0].replace(`${token}`, `${TOKEN}`)

            SPID = videoBODY[0].split(`"actId":"`)[1].split(`"}`)[0]
           
            let url = {
                url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/give_gold_coin_by_video.json`,
                headers: JSON.parse(videoHEADER1),
                body: videoBODY[0],
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 视频🚩: ${decodeUnicode(data)}`);
                    $.videoo = JSON.parse(data);
                    if ($.videoo.resultCode == 0) {
                        LIVES = 2
                        if (SPID != spid.actId) {

                            console.log('视频奖励：⚠️视频CK已过期，请重新获取\n');
                            $.message += '【视频奖励】：⚠️视频CK已过期，请重新获取\n'

                        }else if ($.videoo.errorCode == "GATEWAY-ERROR-002") {
                            console.log('视频奖励：⚠️进入冷却中......\n');
                            $.message += '【视频奖励】：⚠️进入冷却中......\n'
                        } else if ($.videoo.errorCode == "GATEWAY-ERROR-003") {
                            console.log('视频奖励：⚠️TOKEN失效\n');
                            $.message += '【视频奖励】：⚠️TOKEN失效\n'
                        } else {
                            console.log(`视频奖励：⚠️${$.videoo.errorCode}\n`);
                            $.message += `【视频奖励】：⚠️${$.videoo.errorCode}\n`
                        }

                    }
                    if ($.videoo.data && $.videoo.data.goldCoinNumber == 0) {
                        LIVES = 2
                        console.log(`视频奖励：恭喜您的账号已灰，已无法获取视频奖励\n`);
                        $.message += `【视频奖励】：恭喜您的账号已灰，已无法获取视频奖励\n`
                    }
                    if ($.videoo.data && $.videoo.data.goldCoinNumber != 0) {
                        LIVES = 0
                        console.log(`开始领取第1次视频奖励，获得${$.videoo.data.goldCoinNumber}金币,等待${VT/1000}秒继续\n`);
                        console.log(`视频奖励：共领取1次视频奖励，共${$.videoo.data.goldCoinNumber}金币,等待${VT/1000}秒继续\n`);
                        $.message += `【视频奖励】：共领取1次视频奖励，共${$.videoo.data.goldCoinNumber}金币,等待${VT/1000}秒继续\n`
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

//视频
function video(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            var inss = 0;
            for (let i = 1; i < videoBODY.length; i++) {
                setTimeout(() => {
                    token = videoHEADER[i].split(`"token":"`)[1].split(`",`)[0]
                    videoHEADER2 = videoHEADER[i].replace(`${token}`, `${TOKEN}`)
                    //SPID = videoBODY[i].split(`"actId":"`)[1].split(`"}`)[0]
                    let url = {
                        url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/give_gold_coin_by_video.json`,
                        headers: JSON.parse(videoHEADER2),
                        body: videoBODY[i],
                    }
                    $.post(url, async (err, resp, data) => {
                        try {
                            if (logs) $.log(`${O}, 视频🚩: ${decodeUnicode(data)}`);
                            $.video = JSON.parse(data);

                            if ($.video.data && $.video.data.goldCoinNumber != 0) {
                                console.log(`开始领取第${i+1}次视频奖励，获得${$.video.data.goldCoinNumber}金币,等待${VT/1000}秒继续\n`);
                                inss += $.video.data.goldCoinNumber;
                            }
                        } catch (e) {
                            $.logErr(e, resp);
                        } finally {
                            resolve()
                        }
                    })
                }, i * VT);
            }
            setTimeout(() => {
                if ($.videoo.resultCode == 0) {

                    if ($.videoo.errorCode == "GATEWAY-ERROR-002") {
                        console.log('视频奖励：⚠️进入冷却中......\n');
                        $.message += '【视频奖励】：⚠️进入冷却中......\n'
                    }

                    if ($.videoo.errorCode == "GATEWAY-ERROR-003") {
                        console.log('视频奖励：⚠️TOKEN失效\n');
                        $.message += '【视频奖励】：⚠️TOKEN失效\n'
                    }

                }
                if ($.video.data && $.video.data.goldCoinNumber == 0) {
                    console.log(`视频奖励：恭喜您的账号已灰，已无法获取视频奖励\n`);
                    $.message += `【视频奖励】：恭喜您的账号已灰，已无法获取视频奖励\n`
                }
                if ($.video.data && $.video.data.goldCoinNumber != 0) {
                    console.log(`视频奖励：共领取${videoBODY.length-1}次视频奖励，共${inss}金币\n`);
                    $.message += `【视频奖励】：共领取${videoBODY.length-1}次视频奖励，共${inss}金币\n`
                }
            }, videoBODY.length * 35000 - 34000)

        }, timeout)
    })
}


//直播节目表
function liveslist(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {



            let url = {
                url: `https://veishop.iboxpay.com/nf_gateway/nf_content_service/live/ignore_tk/v1/query_living_list_id.json`,
                headers: {
                    "Connection": "keep-alive",
                    "Accept-Encoding": "gzip, deflate, br",
                    "version": "1.5.0",
                    "mchtNo": "100529600058887",
                    "Content-Type": "application/json; charset=utf-8",
                    "source": "VEISHOP_APP_IOS",
                    "shopkeeperId": "1148855820752977920",
                    "User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "token": `${TOKEN}`,
                    "X-User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "traceid": "30000000000000000000" + tts() + "000000000000",
                    "Host": "veishop.iboxpay.com",
                    "Accept-Language": "zh-Hans-CN;q=1",
                    "Accept": "*/*"
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 直播节目表🚩: ${decodeUnicode(data)}`);
                    $.liveslist = JSON.parse(data);
                    if ($.liveslist.resultCode == 1 && $.liveslist.data.liveIdList.length) {
                        liveId = $.liveslist.data.liveIdList
                        liveIdcd = liveId.length
                    }
                    console.log(`直播节目表，当前${liveIdcd}个直播\n`);
                    $.message += `【直播节目表】：当前${liveIdcd}个直播\n`

                    if ($.liveslist.resultCode == 0) {
                        console.log($.liveslist.errorDesc + '\n');
                        $.message += '【直播节目表】：' + $.liveslist.errorDesc + '\n';
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
//直播
function lives(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            var ins = 0;
            for (let i = 0; i < liveIdcd; i++) {
                $.index = i + 1

                setTimeout(() => {

                    livesbodyVal = `{
 "actId": "${zbid.actId}",
 "liveId": "${liveId[i]}"
}`
                    let url = {
                        url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/give_redbag_by_live.json`,
                        headers: {
                            "Connection": "keep-alive",
                            "Accept-Encoding": "gzip, deflate, br",
                            "version": "1.5.0",
                            "mchtNo": "100529600058887",
                            "Content-Type": "application/json; charset=utf-8",
                            "source": "VEISHOP_APP_IOS",
                            "shopkeeperId": "1148855820752977920",
                            "User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                            "token": `${TOKEN}`,
                            "X-User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                            "traceid": "30000000000000000000" + tts() + "000000000000",
                            "Host": "veishop.iboxpay.com",
                            "Accept-Language": "zh-Hans-CN;q=1",
                            "Accept": "*/*"
                        },
                        body: livesbodyVal,
                    }
                    $.post(url, async (err, resp, data) => {
                        try {
                            if (logs) $.log(`${O}, 直播🚩: ${decodeUnicode(data)}`);
                            $.lives = JSON.parse(data);

                            if ($.lives.resultCode == 1) {
                                ins += $.lives.data.goldCoinAmt;
                                console.log(`开始领取第${i+1}次直播奖励，获得${$.lives.data.goldCoinAmt}金币,等待${RT/1000}秒继续\n`);

                            }
                            if ($.lives.resultCode == 0) {
                                console.log(`开始领取第${i+1}次直播奖励，${$.lives.errorDesc},等待${RT/1000}秒继续\n`);
                            }
                        } catch (e) {
                            $.logErr(e, resp);
                        } finally {
                            resolve()
                        }
                    })

                }, i * RT);

            }
            setTimeout(() => {
                console.log(`直播奖励：共领取${ins/500}次直播奖励，共${ins}金币\n`);
                $.message += `【直播奖励】：共领取${ins/500}次直播奖励，共${ins}金币\n`
            }, liveIdcd * 35000 - 34000)
        }, timeout)
    })
}
//收益列表
function sylist(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {

            let url = {
                url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/list_gold_coin.json?source=WX_APP_KA_HTZP&date=${ddtime}&actTypeId=0&size=800`,
                headers: {
                    "Connection": "keep-alive",
                    "Accept-Encoding": "gzip, deflate, br",
                    "version": "1.5.0",
                    "mchtNo": "100529600058887",
                    "Content-Type": "application/json; charset=utf-8",
                    "source": "VEISHOP_APP_IOS",
                    "shopkeeperId": "1148855820752977920",
                    "User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "token": `${TOKEN}`,
                    "X-User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "traceid": "30000000000000000000" + tts() + "000000000000",
                    "Host": "veishop.iboxpay.com",
                    "Accept-Language": "zh-Hans-CN;q=1",
                    "Accept": "*/*"
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 收益列表🚩: ${decodeUnicode(data)}`);
                    $.sylist = JSON.parse(data);

                    if ($.sylist.resultCode == 1 && data.match(/"actTypeId":11,/g)) {
                        hby = data.match(/"actTypeId":11,/g);
                        hbycs = hby.length;
                    } else hbycs = 0

                    if ($.sylist.resultCode == 1 && data.match(/"actTypeId":10,/g)) {
                        live = data.match(/"actTypeId":10,/g);
                        livecs = live.length;
                    } else livecs = 0

                    if ($.sylist.resultCode == 1 && data.match(/"actTypeId":9,/g)) {

                        videos = data.match(/"actTypeId":9,/g);
                        videoscs = videos.length;
                    } else videoscs = 0;

                    spsy = $.goldcoin.data.coinSum - livecs * 500
                    //console.log('已获得红包雨奖励 ' + hbycs + ' 次\n')
                    //$.message +=
                    //'【红包雨收益】：已获得红包雨奖励 ' + hbycs + ' 次\n'
                    console.log('已获得直播奖励 ' + livecs + ' 次，共' + livecs * 500 + '金币\n')
                    $.message +=
                        '【直播收益】：已获得直播奖励 ' + livecs + ' 次，共' + livecs * 500 + '金币\n'
                    console.log('已获得视频奖励 ' + videoscs + ' 次，共' + spsy + '金币\n')
                    $.message +=
                        '【视频收益】：已获得视频奖励 ' + videoscs + ' 次，共' + spsy + '金币\n'

                    if ($.sylist.resultCode == 0) {
                        console.log($.sylist.errorDesc + '\n');
                        $.message +=
                            '【收益列表】：' + $.sylist.errorDesc + '\n';
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
//视频上限  
function splimit(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {

            let url = {
                url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/ignore_tk/v1/get_video_act.json`,
                headers: {
                    "Connection": "keep-alive",
                    "Accept-Encoding": "gzip, deflate, br",
                    "version": "1.5.0",
                    "mchtNo": "100529600058887",
                    "Content-Type": "application/json; charset=utf-8",
                    "source": "VEISHOP_APP_IOS",
                    "shopkeeperId": "1148855820752977920",
                    "User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "token": `${TOKEN}`,
                    "X-User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "traceid": "30000000000000000000" + tts() + "000000000000",
                    "Host": "veishop.iboxpay.com",
                    "Accept-Language": "zh-Hans-CN;q=1",
                    "Accept": "*/*"
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 视频上限🚩: ${decodeUnicode(data)}`);
                    $.splimit = JSON.parse(data);
                    if ($.splimit.resultCode == 1) {
                        console.log('视频上限：今日上限' + $.splimit.data.goldCoinDayLimit + '金币,今日未得' + ($.splimit.data.goldCoinDayLimit - spsy) + '金币\n');
                        $.message += '【视频上限】：今日上限' + $.splimit.data.goldCoinDayLimit + '金币,今日未得' + ($.splimit.data.goldCoinDayLimit - spsy) + '金币\n';
                    }
                    if ($.splimit.data.isUperLimit == true) {
                        console.log('视频上限：今日达到上限\n');
                        $.message += '【视频上限】：今日达到上限\n';
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
//提现记录
function newcashlist(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {

            let url = {
                url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/in_out.json?source=WX_APP_KA_HTZP&date=&tradeType=0&current=1&size=40`,
                headers: {
                    "Connection": "keep-alive",
                    "Accept-Encoding": "gzip, deflate, br",
                    "version": "1.5.0",
                    "mchtNo": "100529600058887",
                    "Content-Type": "application/json; charset=utf-8",
                    "source": "VEISHOP_APP_IOS",
                    "shopkeeperId": "1148855820752977920",
                    "User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "token": `${TOKEN}`,
                    "X-User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "traceid": "30000000000000000000" + tts() + "000000000000",
                    "Host": "veishop.iboxpay.com",
                    "Accept-Language": "zh-Hans-CN;q=1",
                    "Accept": "*/*"
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 提现记录🚩: ${decodeUnicode(data)}`);
                    $.newcashlist = JSON.parse(data);
                    if ($.newcashlist.resultCode == 1 && data.match(/新人福利/g)) {
                        newcashcs = $.newcashlist.data.records.find(item => item.tradeTypeName === "新人福利")
                    }
                    if ($.newcashlist.resultCode == 0) {
                        console.log($.newcashlist.errorDesc + '\n');
                        $.message +=
                            '【新人福利】：' + $.newcashlist.errorDesc + '\n';
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
//今日提现记录
function cashlist(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {

            let url = {
                url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/day_cash/v1/in_out.json?source=WX_APP_KA_HTZP&date=${ddtime}&tradeType=0&current=1&size=40`,
                headers: {
                    "Connection": "keep-alive",
                    "Accept-Encoding": "gzip, deflate, br",
                    "version": "1.5.0",
                    "mchtNo": "100529600058887",
                    "Content-Type": "application/json; charset=utf-8",
                    "source": "VEISHOP_APP_IOS",
                    "shopkeeperId": "1148855820752977920",
                    "User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "token": `${TOKEN}`,
                    "X-User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "traceid": "30000000000000000000" + tts() + "000000000000",
                    "Host": "veishop.iboxpay.com",
                    "Accept-Language": "zh-Hans-CN;q=1",
                    "Accept": "*/*"
                },
            }
            $.get(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 今日提现记录🚩: ${decodeUnicode(data)}`);
                    $.cashlist = JSON.parse(data);
                    if ($.cashlist.resultCode == 1 && data.match(/提现/g)) {

                        cashcs = $.cashlist.data.records.find(item => item.tradeTypeName === "提现")
                        console.log('今日已提现' + cashcs.amount / 100 + '元\n')
                        $.message +=
                            '【提现查询】：今日已提现' + cashcs.amount / 100 + '元\n'
                    }
                    if ($.cashlist.resultCode == 0) {
                        console.log($.cashlist.errorDesc + '\n');
                        $.message +=
                            '【提现查询】：' + $.cashlist.errorDesc + '\n';
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
function withdraw(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {

            withdrawbodyVal = `{
 "source": "WX_APP_KA_HTZP",
 "bizType": 2,
 "amount": ${CASH*100}
}`
            let url = {
                url: `https://veishop.iboxpay.com/nf_gateway/nf_customer_activity/activity/v1/withdraw.json`,
                headers: {
                    "Connection": "keep-alive",
                    "Accept-Encoding": "gzip, deflate, br",
                    "version": "1.5.0",
                    "mchtNo": "100529600058887",
                    "Content-Type": "application/json; charset=utf-8",
                    "source": "VEISHOP_APP_IOS",
                    "shopkeeperId": "1148855820752977920",
                    "User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "token": `${TOKEN}`,
                    "X-User-Agent": "VeiShop, 1.5.0 (iOS, 14.2, zh_CN, Apple, iPhone, )",
                    "traceid": "30000000000000000000" + tts() + "000000000000",
                    "Host": "veishop.iboxpay.com",
                    "Accept-Language": "zh-Hans-CN;q=1",
                    "Accept": "*/*"
                },
                body: withdrawbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 提现🚩: ${decodeUnicode(data)}`);
                    $.withdraw = JSON.parse(data);
                    if ($.withdraw.resultCode == 1 && $.withdraw.data.withdrawRes == 1) {
                        console.log('成功提现 ' + CASH + ' 元\n')
                        $.message +=
                            '【余额提现】：成功提现 ' + CASH + ' 元\n'
                    }
                    if ($.withdraw.resultCode == 0) {
                        console.log($.withdraw.errorDesc + '\n');
                        $.message +=
                            '【余额提现】：' + $.withdraw.errorDesc + '\n';
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