/* ziye 
github地址 https://github.com/6Svip120apk69
TG频道地址  https://t.me/ziyescript
TG交流群   https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接  https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/ziye.boxjs.json
转载请备注个名字，谢谢

⚠️github运行AC任务


2.6 制作
2.7 增加时间控制，多js换行，boxjs手动保存会话，填写，再应用，其他填写环境变量或者githubACCOOKIE.js
2.7-2 修正判定
2.7-3 时间精确到5分
1.12 修复
3.8 替换为循环获取ck
3.15 增加即时触发功能，可让js随githubAC运行而即时启动

⚠️一共1个位置 3个ck  👉 18条 Secrets(14个时间变量) 
多账号换行

第一步 添加  hostname=github.com,

第二步 添加body重写 

登录github   点Action   All allflows 选择js 

点击 Run workflow    Run workflow   运行获取githubACbodyVal  githubACheaderVal

⚠️设置的时间是从 HHA 点到 HHB 点的  MMA  MMB MMC   MMD    MME    MMF   分运行      理解这句话就行

githubACnameVal 👉GIT_githubACNAME
githubACurlVal 👉GIT_githubACURL
githubACheaderVal 👉GIT_githubACHEADER
githubACbodyVal 👉GIT_githubACBODY
HHA 👉GIT_HHA   
HHB 👉GIT_HHB    
MMA 👉GIT_MMA
MMB 👉GIT_MMB
MMC 👉GIT_MMC
MMD 👉GIT_MMD
MME 👉GIT_MME
MMF 👉GIT_MMF
HHG 👉GIT_HHG   
HHH 👉GIT_HHH    
MMI 👉GIT_MMI
MMJ 👉GIT_MMJ
MMK 👉GIT_MMK
MML 👉GIT_MML
MMM 👉GIT_MMM
MMN 👉GIT_MMN


XXX👉 GIT_XXX  //可设置0 不启动、js序号数 指定哪个js任务随githubAC运行而启动、 888 全部js启动

⚠️主机名以及重写👇


hostname=github.com,



############## 圈x

#githubAC获取body
https:\/\/github\.com\/* url script-request-body https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/githubAC.js   

############## loon
#githubAC获取body
http-request https:\/\/github\.com\/* script-path=https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/githubAC.js,requires-body=true, tag=githubAC获取body

############## surge

#githubAC获取body
githubACbody = type=http-request,pattern=https:\/\/github\.com\/*,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/6Svip120apk69/gitee_q8qsTAUA_cThxc1RBVUE/main/Task/githubAC.js 



  



*/
const $ = Env("githubAC");
$.idx = ($.idx = ($.getval('githubACSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const notify = $.isNode() ? require("./sendNotify") : ``;
const COOKIE = $.isNode() ? require("./githubACCOOKIE") : ``;
const logs = 0; // 0为关闭日志，1为开启
const notifyttt = 1 // 0为关闭外部推送，1为12 23 点外部推送
const notifyInterval = 2; // 0为关闭通知，1为所有通知，2为12 23 点通知  ， 3为 6 12 18 23 点通知 
$.message = '', COOKIES_SPLIT = '', ddtime = '';



const githubACnameArr = [];
let githubACnameVal = ``;
let middlegithubACNAME = [];
const githubACurlArr = [];
let githubACurlVal = ``;
let middlegithubACURL = [];
const githubACheaderArr = [];
let githubACheaderVal = ``;
let middlegithubACHEADER = [];
const githubACbodyArr = [];
let githubACbodyVal = ``;
let middlegithubACBODY = [];


const HHAArr = [];
let HHAVal = ``;
let middleHHA = [];
const HHBArr = [];
let HHBVal = ``;
let middleHHB = [];
const HHCArr = [];
let HHCVal = ``;
let middleHHC = [];
const HHDArr = [];
let HHDVal = ``;
let middleHHD = [];
const HHEArr = [];
let HHEVal = ``;
let middleHHE = [];
const HHFArr = [];
let HHFVal = ``;
let middleHHF = [];
const HHGArr = [];
let HHGVal = ``;
let middleHHG = [];
const HHHArr = [];
let HHHVal = ``;
let middleHHH = [];
const HHIArr = [];
let HHIVal = ``;
let middleHHI = [];
const HHJArr = [];
let HHJVal = ``;
let middleHHJ = [];
const HHKArr = [];
let HHKVal = ``;
let middleHHK = [];
const HHLArr = [];
let HHLVal = ``;
let middleHHL = [];


const MMAArr = [];
let MMAVal = ``;
let middleMMA = [];
const MMBArr = [];
let MMBVal = ``;
let middleMMB = [];
const MMCArr = [];
let MMCVal = ``;
let middleMMC = [];
const MMDArr = [];
let MMDVal = ``;
let middleMMD = [];
const MMEArr = [];
let MMEVal = ``;
let middleMME = [];
const MMFArr = [];
let MMFVal = ``;
let middleMMF = [];
const MMGArr = [];
let MMGVal = ``;
let middleMMG = [];
const MMHArr = [];
let MMHVal = ``;
let middleMMH = [];
const MMIArr = [];
let MMIVal = ``;
let middleMMI = [];
const MMJArr = [];
let MMJVal = ``;
let middleMMJ = [];
const MMKArr = [];
let MMKVal = ``;
let middleMMK = [];
const MMLArr = [];
let MMLVal = ``;
let middleMML = [];














if ($.isNode()) {
    // 没有设置 GIT_XXX 则默认为 0 不即时触发
    XXX = process.env.GIT_XXX || 0;
}



if ($.isNode() && process.env.GIT_githubACHEADER) {
    COOKIES_SPLIT = process.env.COOKIES_SPLIT || "\n";
    console.log(
        `============ cookies分隔符为：${JSON.stringify(
      COOKIES_SPLIT
    )} =============\n`
    );
    if (
        process.env.GIT_githubACNAME &&
        process.env.GIT_githubACNAME.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlegithubACNAME = process.env.GIT_githubACNAME.split(COOKIES_SPLIT);
    } else {
        middlegithubACNAME = process.env.GIT_githubACNAME.split();
    }
    if (
        process.env.GIT_githubACURL &&
        process.env.GIT_githubACURL.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlegithubACURL = process.env.GIT_githubACURL.split(COOKIES_SPLIT);
    } else {
        middlegithubACURL = process.env.GIT_githubACURL.split();
    }
    if (
        process.env.GIT_githubACHEADER &&
        process.env.GIT_githubACHEADER.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlegithubACHEADER = process.env.GIT_githubACHEADER.split(COOKIES_SPLIT);
    } else {
        middlegithubACHEADER = process.env.GIT_githubACHEADER.split();
    }
    if (
        process.env.GIT_githubACBODY &&
        process.env.GIT_githubACBODY.indexOf(COOKIES_SPLIT) > -1
    ) {
        middlegithubACBODY = process.env.GIT_githubACBODY.split(COOKIES_SPLIT);
    } else {
        middlegithubACBODY = process.env.GIT_githubACBODY.split();
    }






    if (
        process.env.GIT_HHA &&
        process.env.GIT_HHA.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleHHA = process.env.GIT_HHA.split(COOKIES_SPLIT);
    } else {
        middleHHA = process.env.GIT_HHA.split();
    }



    if (
        process.env.GIT_HHB &&
        process.env.GIT_HHB.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleHHB = process.env.GIT_HHB.split(COOKIES_SPLIT);
    } else {
        middleHHB = process.env.GIT_HHB.split();
    }



    if (
        process.env.GIT_HHC &&
        process.env.GIT_HHC.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleHHC = process.env.GIT_HHC.split(COOKIES_SPLIT);
    } else {
        middleHHC = process.env.GIT_HHC.split();
    }





    if (
        process.env.GIT_HHD &&
        process.env.GIT_HHD.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleHHD = process.env.GIT_HHD.split(COOKIES_SPLIT);
    } else {
        middleHHD = process.env.GIT_HHD.split();
    }



    if (
        process.env.GIT_HHE &&
        process.env.GIT_HHE.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleHHE = process.env.GIT_HHE.split(COOKIES_SPLIT);
    } else {
        middleHHE = process.env.GIT_HHE.split();
    }



    if (
        process.env.GIT_HHF &&
        process.env.GIT_HHF.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleHHF = process.env.GIT_HHF.split(COOKIES_SPLIT);
    } else {
        middleHHF = process.env.GIT_HHF.split();
    }

    if (
        process.env.GIT_HHG &&
        process.env.GIT_HHG.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleHHG = process.env.GIT_HHG.split(COOKIES_SPLIT);
    } else {
        middleHHG = process.env.GIT_HHG.split();
    }



    if (
        process.env.GIT_HHH &&
        process.env.GIT_HHH.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleHHH = process.env.GIT_HHH.split(COOKIES_SPLIT);
    } else {
        middleHHH = process.env.GIT_HHH.split();
    }



    if (
        process.env.GIT_HHI &&
        process.env.GIT_HHI.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleHHI = process.env.GIT_HHI.split(COOKIES_SPLIT);
    } else {
        middleHHI = process.env.GIT_HHI.split();
    }





    if (
        process.env.GIT_HHJ &&
        process.env.GIT_HHJ.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleHHJ = process.env.GIT_HHJ.split(COOKIES_SPLIT);
    } else {
        middleHHJ = process.env.GIT_HHJ.split();
    }



    if (
        process.env.GIT_HHK &&
        process.env.GIT_HHK.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleHHK = process.env.GIT_HHK.split(COOKIES_SPLIT);
    } else {
        middleHHK = process.env.GIT_HHK.split();
    }



    if (
        process.env.GIT_HHL &&
        process.env.GIT_HHL.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleHHL = process.env.GIT_HHL.split(COOKIES_SPLIT);
    } else {
        middleHHL = process.env.GIT_HHL.split();
    }




    if (
        process.env.GIT_MMA &&
        process.env.GIT_MMA.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleMMA = process.env.GIT_MMA.split(COOKIES_SPLIT);
    } else {
        middleMMA = process.env.GIT_MMA.split();
    }



    if (
        process.env.GIT_MMB &&
        process.env.GIT_MMB.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleMMB = process.env.GIT_MMB.split(COOKIES_SPLIT);
    } else {
        middleMMB = process.env.GIT_MMB.split();
    }



    if (
        process.env.GIT_MMC &&
        process.env.GIT_MMC.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleMMC = process.env.GIT_MMC.split(COOKIES_SPLIT);
    } else {
        middleMMC = process.env.GIT_MMC.split();
    }





    if (
        process.env.GIT_MMD &&
        process.env.GIT_MMD.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleMMD = process.env.GIT_MMD.split(COOKIES_SPLIT);
    } else {
        middleMMD = process.env.GIT_MMD.split();
    }



    if (
        process.env.GIT_MME &&
        process.env.GIT_MME.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleMME = process.env.GIT_MME.split(COOKIES_SPLIT);
    } else {
        middleMME = process.env.GIT_MME.split();
    }



    if (
        process.env.GIT_MMF &&
        process.env.GIT_MMF.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleMMF = process.env.GIT_MMF.split(COOKIES_SPLIT);
    } else {
        middleMMF = process.env.GIT_MMF.split();
    }

    if (
        process.env.GIT_MMG &&
        process.env.GIT_MMG.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleMMG = process.env.GIT_MMG.split(COOKIES_SPLIT);
    } else {
        middleMMG = process.env.GIT_MMG.split();
    }



    if (
        process.env.GIT_MMH &&
        process.env.GIT_MMH.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleMMH = process.env.GIT_MMH.split(COOKIES_SPLIT);
    } else {
        middleMMH = process.env.GIT_MMH.split();
    }



    if (
        process.env.GIT_MMI &&
        process.env.GIT_MMI.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleMMI = process.env.GIT_MMI.split(COOKIES_SPLIT);
    } else {
        middleMMI = process.env.GIT_MMI.split();
    }





    if (
        process.env.GIT_MMJ &&
        process.env.GIT_MMJ.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleMMJ = process.env.GIT_MMJ.split(COOKIES_SPLIT);
    } else {
        middleMMJ = process.env.GIT_MMJ.split();
    }



    if (
        process.env.GIT_MMK &&
        process.env.GIT_MMK.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleMMK = process.env.GIT_MMK.split(COOKIES_SPLIT);
    } else {
        middleMMK = process.env.GIT_MMK.split();
    }



    if (
        process.env.GIT_MML &&
        process.env.GIT_MML.indexOf(COOKIES_SPLIT) > -1
    ) {
        middleMML = process.env.GIT_MML.split(COOKIES_SPLIT);
    } else {
        middleMML = process.env.GIT_MML.split();
    }




}
if (COOKIE.githubACurlVal) {
    GIT_COOKIES = {
        "githubACnameVal": COOKIE.githubACnameVal.split('\n'),
        "githubACurlVal": COOKIE.githubACurlVal.split('\n'),
        "githubACheaderVal": COOKIE.githubACheaderVal.split('\n'),
        "githubACbodyVal": COOKIE.githubACbodyVal.split('\n'),

        "HHAVal": COOKIE.HHAVal.split('\n'),
        "HHBVal": COOKIE.HHBVal.split('\n'),
        "HHCVal": COOKIE.HHCVal.split('\n'),
        "HHDVal": COOKIE.HHDVal.split('\n'),
        "HHEVal": COOKIE.HHEVal.split('\n'),
        "HHFVal": COOKIE.HHFVal.split('\n'),
        "HHGVal": COOKIE.HHGVal.split('\n'),
        "HHHVal": COOKIE.HHHVal.split('\n'),
        "HHIVal": COOKIE.HHIVal.split('\n'),
        "HHJVal": COOKIE.HHJVal.split('\n'),
        "HHKVal": COOKIE.HHKVal.split('\n'),
        "HHLVal": COOKIE.HHLVal.split('\n'),

        "MMAVal": COOKIE.MMAVal.split('\n'),
        "MMBVal": COOKIE.MMBVal.split('\n'),
        "MMCVal": COOKIE.MMCVal.split('\n'),
        "MMDVal": COOKIE.MMDVal.split('\n'),
        "MMEVal": COOKIE.MMEVal.split('\n'),
        "MMFVal": COOKIE.MMFVal.split('\n'),
        "MMGVal": COOKIE.MMGVal.split('\n'),
        "MMHVal": COOKIE.MMHVal.split('\n'),
        "MMIVal": COOKIE.MMIVal.split('\n'),
        "MMJVal": COOKIE.MMJVal.split('\n'),
        "MMKVal": COOKIE.MMKVal.split('\n'),
        "MMLVal": COOKIE.MMLVal.split('\n'),




    }
    Length = GIT_COOKIES.githubACheaderVal.length;
}
if (!COOKIE.githubACheaderVal) {
    if ($.isNode()) {
        Object.keys(middlegithubACNAME).forEach((item) => {
            if (middlegithubACNAME[item]) {
                githubACheaderArr.push(middlegithubACNAME[item]);
            }
        });
        Object.keys(middlegithubACURL).forEach((item) => {
            if (middlegithubACURL[item]) {
                githubACheaderArr.push(middlegithubACURL[item]);
            }
        });
        Object.keys(middlegithubACHEADER).forEach((item) => {
            if (middlegithubACHEADER[item]) {
                githubACheaderArr.push(middlegithubACHEADER[item]);
            }
        });
        Object.keys(middlegithubACBODY).forEach((item) => {
            if (middlegithubACBODY[item]) {
                githubACbodyArr.push(middlegithubACBODY[item]);
            }
        });


        Object.keys(middleHHA).forEach((item) => {
            if (middleHHA[item]) {
                HHAArr.push(middleHHA[item]);
            }
        });

        Object.keys(middleHHB).forEach((item) => {
            if (middleHHB[item]) {
                HHBArr.push(middleHHB[item]);
            }
        });
        Object.keys(middleHHC).forEach((item) => {
            if (middleHHC[item]) {
                HHCArr.push(middleHHC[item]);
            }
        });
        Object.keys(middleHHD).forEach((item) => {
            if (middleHHD[item]) {
                HHDArr.push(middleHHD[item]);
            }
        });

        Object.keys(middleHHE).forEach((item) => {
            if (middleHHE[item]) {
                HHEArr.push(middleHHE[item]);
            }
        });
        Object.keys(middleHHF).forEach((item) => {
            if (middleHHF[item]) {
                HHFArr.push(middleHHF[item]);
            }
        });

        Object.keys(middleHHG).forEach((item) => {
            if (middleHHG[item]) {
                HHGArr.push(middleHHG[item]);
            }
        });

        Object.keys(middleHHH).forEach((item) => {
            if (middleHHH[item]) {
                HHHArr.push(middleHHH[item]);
            }
        });
        Object.keys(middleHHI).forEach((item) => {
            if (middleHHI[item]) {
                HHIArr.push(middleHHI[item]);
            }
        });
        Object.keys(middleHHJ).forEach((item) => {
            if (middleHHJ[item]) {
                HHJArr.push(middleHHJ[item]);
            }
        });

        Object.keys(middleHHK).forEach((item) => {
            if (middleHHK[item]) {
                HHKArr.push(middleHHK[item]);
            }
        });
        Object.keys(middleHHL).forEach((item) => {
            if (middleHHL[item]) {
                HHLArr.push(middleHHL[item]);
            }
        });


        Object.keys(middleMMA).forEach((item) => {
            if (middleMMA[item]) {
                MMAArr.push(middleMMA[item]);
            }
        });

        Object.keys(middleMMB).forEach((item) => {
            if (middleMMB[item]) {
                MMBArr.push(middleMMB[item]);
            }
        });
        Object.keys(middleMMC).forEach((item) => {
            if (middleMMC[item]) {
                MMCArr.push(middleMMC[item]);
            }
        });
        Object.keys(middleMMD).forEach((item) => {
            if (middleMMD[item]) {
                MMDArr.push(middleMMD[item]);
            }
        });

        Object.keys(middleMME).forEach((item) => {
            if (middleMME[item]) {
                MMEArr.push(middleMME[item]);
            }
        });
        Object.keys(middleMMF).forEach((item) => {
            if (middleMMF[item]) {
                MMFArr.push(middleMMF[item]);
            }
        });

        Object.keys(middleMMG).forEach((item) => {
            if (middleMMG[item]) {
                MMGArr.push(middleMMG[item]);
            }
        });

        Object.keys(middleMMH).forEach((item) => {
            if (middleMMH[item]) {
                MMHArr.push(middleMMH[item]);
            }
        });
        Object.keys(middleMMI).forEach((item) => {
            if (middleMMI[item]) {
                MMIArr.push(middleMMI[item]);
            }
        });
        Object.keys(middleMMJ).forEach((item) => {
            if (middleMMJ[item]) {
                MMJArr.push(middleMMJ[item]);
            }
        });

        Object.keys(middleMMK).forEach((item) => {
            if (middleMMK[item]) {
                MMKArr.push(middleMMK[item]);
            }
        });
        Object.keys(middleMML).forEach((item) => {
            if (middleMML[item]) {
                MMLArr.push(middleMML[item]);
            }
        });
    } else {
        githubACnameArr.push($.getdata("githubACname"));
        githubACurlArr.push($.getdata("githubACurl"));
        githubACheaderArr.push($.getdata("githubACheader"));
        githubACbodyArr.push($.getdata("githubACbody"));
        HHAArr.push($.getdata("HHA"));
        HHBArr.push($.getdata("HHB"));
        HHCArr.push($.getdata("HHC"));
        HHDArr.push($.getdata("HHD"));
        HHEArr.push($.getdata("HHE"));
        HHFArr.push($.getdata("HHF"));
        HHGArr.push($.getdata("HHG"));
        HHHArr.push($.getdata("HHH"));
        HHIArr.push($.getdata("HHI"));
        HHJArr.push($.getdata("HHJ"));
        HHKArr.push($.getdata("HHK"));
        HHLArr.push($.getdata("HHL"));
        MMAArr.push($.getdata("MMA"));
        MMBArr.push($.getdata("MMB"));
        MMCArr.push($.getdata("MMC"));
        MMDArr.push($.getdata("MMD"));
        MMEArr.push($.getdata("MME"));
        MMFArr.push($.getdata("MMF"));
        MMGArr.push($.getdata("MMG"));
        MMHArr.push($.getdata("MMH"));
        MMIArr.push($.getdata("MMI"));
        MMJArr.push($.getdata("MMJ"));
        MMKArr.push($.getdata("MMK"));
        MMLArr.push($.getdata("MML"));
        // 根据boxjs中设置的额外账号数，添加存在的账号数据进行任务处理
        if ("githubACXXX") {
            XXX = $.getval("githubACXXX") || '0';
        }

        let githubACCount = ($.getval('githubACCount') || '1') - 0;
        for (let i = 2; i <= githubACCount; i++) {
            if ($.getdata(`githubACheader${i}`)) {
                githubACnameArr.push($.getdata(`githubACname${i}`));
                githubACurlArr.push($.getdata(`githubACurl${i}`));
                githubACheaderArr.push($.getdata(`githubACheader${i}`));
                githubACbodyArr.push($.getdata(`githubACbody${i}`));
                HHAArr.push($.getdata(`HHA${i}`));
                HHBArr.push($.getdata(`HHB${i}`));
                HHCArr.push($.getdata(`HHC${i}`));
                HHDArr.push($.getdata(`HHD${i}`));
                HHEArr.push($.getdata(`HHE${i}`));
                HHFArr.push($.getdata(`HHF${i}`));
                HHGArr.push($.getdata(`HHG${i}`));
                HHHArr.push($.getdata(`HHH${i}`));
                HHIArr.push($.getdata(`HHI${i}`));
                HHJArr.push($.getdata(`HHJ${i}`));
                HHKArr.push($.getdata(`HHK${i}`));
                HHLArr.push($.getdata(`HHL${i}`));
                MMAArr.push($.getdata(`MMA${i}`));
                MMBArr.push($.getdata(`MMB${i}`));
                MMCArr.push($.getdata(`MMC${i}`));
                MMDArr.push($.getdata(`MMD${i}`));
                MMEArr.push($.getdata(`MME${i}`));
                MMFArr.push($.getdata(`MMF${i}`));
                MMGArr.push($.getdata(`MMG${i}`));
                MMHArr.push($.getdata(`MMH${i}`));
                MMIArr.push($.getdata(`MMI${i}`));
                MMJArr.push($.getdata(`MMJ${i}`));
                MMKArr.push($.getdata(`MMK${i}`));
                MMLArr.push($.getdata(`MML${i}`));



            }
        }
    }
    Length = githubACheaderArr.length
}




function GetCookie() {
    if ($request && $request.url.indexOf("actions") >= 0 && $request.url.indexOf("manual") >= 0 && $request.body.indexOf("authenticity_token=") >= 0 && $request.body.indexOf("workflow=") >= 0 && $request.body.indexOf("branch=") >= 0) {

        const githubACurlVal = $request.url
        const githubACheaderVal = JSON.stringify($request.headers);
        const githubACnameVal = decodeURIComponent($request.headers.Referer).split('workflow:')[1];
        const githubACbodyVal = $request.body;

        if (githubACurlVal) {
            cookie()

            function cookie() {
                bodys = $.getdata('githubACurl' + $.idx);
                if (bodys) {
                    if (bodys.indexOf(githubACurlVal) >= 0) {
                        $.log(
                            `[${$.name + $.idx}] githubACurlVal已存在✅: githubACurlVal: ${githubACurlVal}`
                        );
                        $.msg($.name + $.idx, `githubACurlVal已存在: 🎉`, ``);
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
                        $.setdata(githubACurlVal, "githubACurl" + $.idx);
                        $.setdata(githubACheaderVal, "githubACheader" + $.idx);
                        $.setdata(githubACnameVal, "githubACname" + $.idx);
                        $.setdata(githubACbodyVal, "githubACbody" + $.idx);
                        $.log(
                            `[${$.name + $.idx}] 获取githubACurlVal✅: 成功,githubACurlVal: ${githubACurlVal}`
                        );
                        $.msg($.name + $.idx, `获取githubACurlVal: 成功🎉`, ``);
                        $.log(
                            `[${$.name + $.idx}] 获取githubACheaderVal✅: 成功,githubACheaderVal: ${githubACheaderVal}`
                        );
                        $.msg($.name + $.idx, `获取githubACheaderVal: 成功🎉`, ``);

                        $.log(
                            `[${$.name + $.idx}] 获取githubACnameVal✅: 成功,githubACnameVal: ${githubACnameVal}`
                        );
                        $.msg($.name + $.idx, `获取githubACnameVal: 成功🎉`, ``);
                        $.log(
                            `[${$.name + $.idx}] 获取githubACbodyVal✅: 成功,githubACbodyVal: ${githubACbodyVal}`
                        );
                        $.msg($.name + $.idx, `获取githubACbodyVal: 成功🎉`, ``);

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
        await $.wait(1000);
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
            '提示：⚠️请点击前往获取CK  https://github.com\n',
            'https://github.com', {
                "open-url": "https://github.com"
            }
        );
        return;
    }
    for (let i = 0; i < Length; i++) {

        if (COOKIE.githubACheaderVal) {
            githubACnameVal = GIT_COOKIES.githubACnameVal[i];
            githubACurlVal = GIT_COOKIES.githubACurlVal[i];
            githubACheaderVal = GIT_COOKIES.githubACheaderVal[i];
            githubACbodyVal = GIT_COOKIES.githubACbodyVal[i];
            HHAVal = GIT_COOKIES.HHAVal[i];
            HHBVal = GIT_COOKIES.HHBVal[i];
            HHCVal = GIT_COOKIES.HHCVal[i];
            HHDVal = GIT_COOKIES.HHDVal[i];
            HHEVal = GIT_COOKIES.HHEVal[i];
            HHFVal = GIT_COOKIES.HHFVal[i];
            HHGVal = GIT_COOKIES.HHGVal[i];
            HHHVal = GIT_COOKIES.HHHVal[i];
            HHIVal = GIT_COOKIES.HHIVal[i];
            HHJVal = GIT_COOKIES.HHJVal[i];
            HHKVal = GIT_COOKIES.HHKVal[i];
            HHLVal = GIT_COOKIES.HHLVal[i];
            MMAVal = GIT_COOKIES.MMAVal[i];
            MMBVal = GIT_COOKIES.MMBVal[i];
            MMCVal = GIT_COOKIES.MMCVal[i];
            MMDVal = GIT_COOKIES.MMDVal[i];
            MMEVal = GIT_COOKIES.MMEVal[i];
            MMFVal = GIT_COOKIES.MMFVal[i];
            MMGVal = GIT_COOKIES.MMGVal[i];
            MMHVal = GIT_COOKIES.MMHVal[i];
            MMIVal = GIT_COOKIES.MMIVal[i];
            MMJVal = GIT_COOKIES.MMJVal[i];
            MMKVal = GIT_COOKIES.MMKVal[i];
            MMLVal = GIT_COOKIES.MMLVal[i];







        }
        if (!COOKIE.githubACheaderVal) {
            githubACnameVal = githubACnameArr[i];
            githubACurlVal = githubACurlArr[i];
            githubACheaderVal = githubACheaderArr[i];
            githubACbodyVal = githubACbodyArr[i];

            HHAVal = HHAArr[i];
            HHBVal = HHBArr[i];
            HHCVal = HHCArr[i];
            HHDVal = HHDArr[i];
            HHEVal = HHEArr[i];
            HHFVal = HHFArr[i];
            HHGVal = HHGArr[i];
            HHHVal = HHHArr[i];
            HHIVal = HHIArr[i];
            HHJVal = HHJArr[i];
            HHKVal = HHKArr[i];
            HHLVal = HHLArr[i];
            MMAVal = MMAArr[i];
            MMBVal = MMBArr[i];
            MMCVal = MMCArr[i];
            MMDVal = MMDArr[i];
            MMEVal = MMEArr[i];
            MMFVal = MMFArr[i];
            MMGVal = MMGArr[i];
            MMHVal = MMHArr[i];
            MMIVal = MMIArr[i];
            MMJVal = MMJArr[i];
            MMKVal = MMKArr[i];
            MMLVal = MMLArr[i];




        }


        O = (`${$.name + (i + 1)}🔔`);
        await console.log(`-------------------------\n\n🔔开始运行${$.name+(i+1)}【${githubACnameVal}】`)

        $.message += `【${githubACnameVal}】${HHAVal}-${HHBVal} ${HHCVal}-${HHDVal} ${HHEVal}-${HHFVal} ${HHGVal}-${HHHVal} ${HHIVal}-${HHJVal} ${HHKVal}-${HHLVal} 的 ${MMAVal} ${MMBVal} ${MMCVal} ${MMDVal} ${MMEVal} ${MMFVal} ${MMGVal} ${MMHVal} ${MMIVal} ${MMJVal} ${MMKVal} ${MMLVal} 分运行\n`

        if (((nowTimes.getHours() >= HHAVal && nowTimes.getHours() <= HHBVal) || (nowTimes.getHours() >= HHCVal && nowTimes.getHours() <= HHDVal) || (nowTimes.getHours() >= HHEVal && nowTimes.getHours() <= HHFVal) || (nowTimes.getHours() >= HHGVal && nowTimes.getHours() <= HHHVal) || (nowTimes.getHours() >= HHIVal && nowTimes.getHours() <= HHJVal) || (nowTimes.getHours() >= HHKVal && nowTimes.getHours() <= HHLVal)) && (nowTimes.getMinutes() == MMAVal || nowTimes.getMinutes() == MMBVal || nowTimes.getMinutes() == MMCVal || nowTimes.getMinutes() == MMDVal || nowTimes.getMinutes() == MMEVal || nowTimes.getMinutes() == MMFVal || nowTimes.getMinutes() == MMGVal || nowTimes.getMinutes() == MMHVal || nowTimes.getMinutes() == MMIVal || nowTimes.getMinutes() == MMJVal || nowTimes.getMinutes() == MMKVal || nowTimes.getMinutes() == MMLVal)) {

            await githubAC(); //运行

        } else if (i + 1 == XXX || XXX == 888) {
            if (XXX == 888) {
                console.log(`即时触发已开启，您选择的是【全部启动】\n`)
                $.message += `即时触发已开启，您选择的是【全部启动】\n`

            } else {
                console.log(`即时触发已开启，您选择的是【${XXX}号JS启动】\n`)
                $.message += `即时触发已开启，您选择的是【${XXX}号JS启动】\n`

            }
            await githubAC(); //运行

        } else {
            console.log(`${githubACnameVal}:时间未到\n\n`)
            $.message += `${githubACnameVal}:时间未到\n\n`

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


//githubAC
function githubAC(timeout = 0) {
    return new Promise((resolve) => {
        setTimeout(() => {
            let url = {
                url: githubACurlVal,
                headers: JSON.parse(githubACheaderVal),
                body: githubACbodyVal,
            }
            $.post(url, async (err, resp, data) => {
                try {
                    if (logs) $.log(`${O}, 运行🚩: ${data}`);
                    if (data.match(/github.com/g)) {

                        console.log(githubACnameVal + `${time(Number(tts()))}运行成功\n\n`)
                        $.message += githubACnameVal + `${time(Number(tts()))}运行成功\n\n`
                    } else {
                        console.log(githubACnameVal + `请检查github的Action是否开启\n\n`)
                        $.message += githubACnameVal + `请检查github的Action是否开启\n\n`
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