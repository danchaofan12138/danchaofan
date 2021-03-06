/* ziye  导出githubACck专用    务必下载或者复制到本地使用

github地址 https://github.com/ziye11
TG频道地址  https://t.me/ziyescript
TG交流群   https://t.me/joinchat/AAAAAE7XHm-q1-7Np-tF3g
boxjs链接  https://raw.githubusercontent.com/ziye11/JavaScript/main/Task/ziye.boxjs.json


转载请备注个名字，谢谢



*/

//请先确定boxjs已经存在ck，想要导出哪个值，就设置为1

const githubACname = 1
const githubACurl = 1
const githubACheader = 1
const githubACbody = 1

const HHA=0  
const HHB=0  
const HHC=0  
const HHD=0  
const HHE=0  
const HHF=0  
const HHG=0  
const HHH=0  
const HHI=0  
const HHJ=0  
const HHK=0  
const HHL=0 

const MMA=0  
const MMB=0  
const MMC=0  
const MMD=0  
const MME=0  
const MMF=0  
const MMG=0  
const MMH=0  
const MMI=0  
const MMJ=0  
const MMK=0  
const MML=0 


const GG=''//默认为换行，也可以将需要隔开的符号填写在''内


let K = 1;//从哪个账号开始

let Z = 1;//到哪个账号结束



const $ = Env("githubAC");
$.idx = ($.idx = ($.getval('githubACSuffix') || '1') - 1) > 0 ? ($.idx + 1 + '') : ''; // 账号扩展字符
const notify = $.isNode() ? require("./sendNotify") : "";

let R=K
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



 console.log(
    `============ 共${githubACurlArr.length}个${$.name}账号  =============\n`
  );
  console.log(
    `============ 脚本执行-北京时间(UTC+8)：${new Date(
      new Date().getTime() + 8 * 60 * 60 * 1000
    ).toLocaleString()}  =============\n`
  );




if (Z<K){
    $.msg('⚠️提示：请不要调皮🐶')
   $.done();
}
all();
function all() {
if (!githubACurlArr[K-1]) {
if (K>R)
    $.msg($.name+R+'到'+(K-1)+'打印成功'+K+'到'+Z+'打印失败', '⚠️提示：请先获取'+K+'到'+Z+'的ck','并在boxjs里设置好账号数')

if (K==R&&Z>R)
    $.msg($.name+K+'到'+Z+'打印失败', '⚠️提示：请先获取'+K+'到'+Z+'的ck','并在boxjs里设置好账号数')


if (Z==R)
    $.msg($.name+K+'打印失败', '⚠️提示：请先获取'+K+'的ck','并在boxjs里设置好账号数')

   $.done();
  }

  githubACnameVal = githubACnameArr[K-1];  
  githubACurlVal = githubACurlArr[K-1];  
  githubACheaderVal = githubACheaderArr[K-1];  
  githubACbodyVal = githubACbodyArr[K-1];
  
  HHAVal = HHAArr[K-1];  
  HHBVal = HHBArr[K-1];  
  HHCVal = HHCArr[K-1];  
  HHDVal = HHDArr[K-1];  
  HHEVal = HHEArr[K-1];  
  HHFVal = HHFArr[K-1];  
  HHGVal = HHGArr[K-1];  
  HHHVal = HHHArr[K-1];  
  HHIVal = HHIArr[K-1];  
  HHJVal = HHJArr[K-1];  
  HHKVal = HHKArr[K-1];  
  HHLVal = HHLArr[K-1]; 
  
  MMAVal = MMAArr[K-1];  
  MMBVal = MMBArr[K-1];  
  MMCVal = MMCArr[K-1];  
  MMDVal = MMDArr[K-1];  
  MMEVal = MMEArr[K-1];  
  MMFVal = MMFArr[K-1];  
  MMGVal = MMGArr[K-1];  
  MMHVal = MMHArr[K-1];  
  MMIVal = MMIArr[K-1];  
  MMJVal = MMJArr[K-1];  
  MMKVal = MMKArr[K-1];  
  MMLVal = MMLArr[K-1]; 

if(githubACname==1)console.log(githubACnameVal+GG)  
if(githubACurl==1)console.log(githubACurlVal+GG)
if(githubACheader==1)console.log(githubACheaderVal+GG)
if(githubACbody==1)console.log(githubACbodyVal+GG)

if(HHA==1)console.log(HHAVal+GG)
if(HHB==1)console.log(HHBVal+GG)
if(HHC==1)console.log(HHCVal+GG)
if(HHD==1)console.log(HHDVal+GG)
if(HHE==1)console.log(HHEVal+GG)
if(HHF==1)console.log(HHFVal+GG)
if(HHG==1)console.log(HHGVal+GG)
if(HHH==1)console.log(HHHVal+GG)
if(HHI==1)console.log(HHIVal+GG)
if(HHJ==1)console.log(HHJVal+GG)
if(HHK==1)console.log(HHKVal+GG)
if(HHL==1)console.log(HHLVal+GG)

if(MMA==1)console.log(MMAVal+GG)
if(MMB==1)console.log(MMBVal+GG)
if(MMC==1)console.log(MMCVal+GG)
if(MMD==1)console.log(MMDVal+GG)
if(MME==1)console.log(MMEVal+GG)
if(MMF==1)console.log(MMFVal+GG)
if(MMG==1)console.log(MMGVal+GG)
if(MMH==1)console.log(MMHVal+GG)
if(MMI==1)console.log(MMIVal+GG)
if(MMJ==1)console.log(MMJVal+GG)
if(MMK==1)console.log(MMKVal+GG)
if(MML==1)console.log(MMLVal+GG)

  for (let i = 0; i < 1; i++) {
    (function (i) {
      setTimeout(
        function () {
          
      if (i == 0){  
       if ( K < Z ) {
              K += 1;
              all();
}    else if (K == Z ) {
          let F=Z-R+1
              $.msg($.name+R+'到'+Z+',ck打印成功','✅已打印'+F+'个ck',)

              $.done();


  }
 }
},

        (i + 1) * 10
      );
    })(i);
  }
}

// prettier-ignore
function Env(t,e){class s{constructor(t){this.env=t}send(t,e="GET"){t="string"==typeof t?{url:t}:t;let s=this.get;return"POST"===e&&(s=this.post),new Promise((e,i)=>{s.call(this,t,(t,s,r)=>{t?i(t):e(s)})})}get(t){return this.send.call(this.env,t)}post(t){return this.send.call(this.env,t,"POST")}}return new class{constructor(t,e){this.name=t,this.http=new s(this),this.data=null,this.dataFile="box.dat",this.logs=[],this.isMute=!1,this.isNeedRewrite=!1,this.logSeparator="\n",this.startTime=(new Date).getTime(),Object.assign(this,e),this.log("",`\ud83d\udd14${this.name}, \u5f00\u59cb!`)}isNode(){return"undefined"!=typeof module&&!!module.exports}isQuanX(){return"undefined"!=typeof $task}isSurge(){return"undefined"!=typeof $httpClient&&"undefined"==typeof $loon}isLoon(){return"undefined"!=typeof $loon}toObj(t,e=null){try{return JSON.parse(t)}catch{return e}}toStr(t,e=null){try{return JSON.stringify(t)}catch{return e}}getjson(t,e){let s=e;const i=this.getdata(t);if(i)try{s=JSON.parse(this.getdata(t))}catch{}return s}setjson(t,e){try{return this.setdata(JSON.stringify(t),e)}catch{return!1}}getScript(t){return new Promise(e=>{this.get({url:t},(t,s,i)=>e(i))})}runScript(t,e){return new Promise(s=>{let i=this.getdata("@chavy_boxjs_userCfgs.httpapi");i=i?i.replace(/\n/g,"").trim():i;let r=this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");r=r?1*r:20,r=e&&e.timeout?e.timeout:r;const[o,h]=i.split("@"),a={url:`http://${h}/v1/scripting/evaluate`,body:{script_text:t,mock_type:"cron",timeout:r},headers:{"X-Key":o,Accept:"*/*"}};this.post(a,(t,e,i)=>s(i))}).catch(t=>this.logErr(t))}loaddata(){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e);if(!s&&!i)return{};{const i=s?t:e;try{return JSON.parse(this.fs.readFileSync(i))}catch(t){return{}}}}}writedata(){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(this.dataFile),e=this.path.resolve(process.cwd(),this.dataFile),s=this.fs.existsSync(t),i=!s&&this.fs.existsSync(e),r=JSON.stringify(this.data);s?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(e,r):this.fs.writeFileSync(t,r)}}lodash_get(t,e,s){const i=e.replace(/\[(\d+)\]/g,".$1").split(".");let r=t;for(const t of i)if(r=Object(r)[t],void 0===r)return s;return r}lodash_set(t,e,s){return Object(t)!==t?t:(Array.isArray(e)||(e=e.toString().match(/[^.[\]]+/g)||[]),e.slice(0,-1).reduce((t,s,i)=>Object(t[s])===t[s]?t[s]:t[s]=Math.abs(e[i+1])>>0==+e[i+1]?[]:{},t)[e[e.length-1]]=s,t)}getdata(t){let e=this.getval(t);if(/^@/.test(t)){const[,s,i]=/^@(.*?)\.(.*?)$/.exec(t),r=s?this.getval(s):"";if(r)try{const t=JSON.parse(r);e=t?this.lodash_get(t,i,""):e}catch(t){e=""}}return e}setdata(t,e){let s=!1;if(/^@/.test(e)){const[,i,r]=/^@(.*?)\.(.*?)$/.exec(e),o=this.getval(i),h=i?"null"===o?null:o||"{}":"{}";try{const e=JSON.parse(h);this.lodash_set(e,r,t),s=this.setval(JSON.stringify(e),i)}catch(e){const o={};this.lodash_set(o,r,t),s=this.setval(JSON.stringify(o),i)}}else s=this.setval(t,e);return s}getval(t){return this.isSurge()||this.isLoon()?$persistentStore.read(t):this.isQuanX()?$prefs.valueForKey(t):this.isNode()?(this.data=this.loaddata(),this.data[t]):this.data&&this.data[t]||null}setval(t,e){return this.isSurge()||this.isLoon()?$persistentStore.write(t,e):this.isQuanX()?$prefs.setValueForKey(t,e):this.isNode()?(this.data=this.loaddata(),this.data[e]=t,this.writedata(),!0):this.data&&this.data[e]||null}initGotEnv(t){this.got=this.got?this.got:require("got"),this.cktough=this.cktough?this.cktough:require("tough-cookie"),this.ckjar=this.ckjar?this.ckjar:new this.cktough.CookieJar,t&&(t.headers=t.headers?t.headers:{},void 0===t.headers.Cookie&&void 0===t.cookieJar&&(t.cookieJar=this.ckjar))}get(t,e=(()=>{})){t.headers&&(delete t.headers["Content-Type"],delete t.headers["Content-Length"]),this.isSurge()||this.isLoon()?(this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.get(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)})):this.isQuanX()?(this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t))):this.isNode()&&(this.initGotEnv(t),this.got(t).on("redirect",(t,e)=>{try{if(t.headers["set-cookie"]){const s=t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();this.ckjar.setCookieSync(s,null),e.cookieJar=this.ckjar}}catch(t){this.logErr(t)}}).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)}))}post(t,e=(()=>{})){if(t.body&&t.headers&&!t.headers["Content-Type"]&&(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.headers&&delete t.headers["Content-Length"],this.isSurge()||this.isLoon())this.isSurge()&&this.isNeedRewrite&&(t.headers=t.headers||{},Object.assign(t.headers,{"X-Surge-Skip-Scripting":!1})),$httpClient.post(t,(t,s,i)=>{!t&&s&&(s.body=i,s.statusCode=s.status),e(t,s,i)});else if(this.isQuanX())t.method="POST",this.isNeedRewrite&&(t.opts=t.opts||{},Object.assign(t.opts,{hints:!1})),$task.fetch(t).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>e(t));else if(this.isNode()){this.initGotEnv(t);const{url:s,...i}=t;this.got.post(s,i).then(t=>{const{statusCode:s,statusCode:i,headers:r,body:o}=t;e(null,{status:s,statusCode:i,headers:r,body:o},o)},t=>{const{message:s,response:i}=t;e(s,i,i&&i.body)})}}time(t){let e={"M+":(new Date).getMonth()+1,"d+":(new Date).getDate(),"H+":(new Date).getHours(),"m+":(new Date).getMinutes(),"s+":(new Date).getSeconds(),"q+":Math.floor(((new Date).getMonth()+3)/3),S:(new Date).getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,((new Date).getFullYear()+"").substr(4-RegExp.$1.length)));for(let s in e)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[s]:("00"+e[s]).substr((""+e[s]).length)));return t}msg(e=t,s="",i="",r){const o=t=>{if(!t)return t;if("string"==typeof t)return this.isLoon()?t:this.isQuanX()?{"open-url":t}:this.isSurge()?{url:t}:void 0;if("object"==typeof t){if(this.isLoon()){let e=t.openUrl||t.url||t["open-url"],s=t.mediaUrl||t["media-url"];return{openUrl:e,mediaUrl:s}}if(this.isQuanX()){let e=t["open-url"]||t.url||t.openUrl,s=t["media-url"]||t.mediaUrl;return{"open-url":e,"media-url":s}}if(this.isSurge()){let e=t.url||t.openUrl||t["open-url"];return{url:e}}}};this.isMute||(this.isSurge()||this.isLoon()?$notification.post(e,s,i,o(r)):this.isQuanX()&&$notify(e,s,i,o(r)));let h=["","==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];h.push(e),s&&h.push(s),i&&h.push(i),console.log(h.join("\n")),this.logs=this.logs.concat(h)}log(...t){t.length>0&&(this.logs=[...this.logs,...t]),console.log(t.join(this.logSeparator))}logErr(t,e){const s=!this.isSurge()&&!this.isQuanX()&&!this.isLoon();s?this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t.stack):this.log("",`\u2757\ufe0f${this.name}, \u9519\u8bef!`,t)}wait(t){return new Promise(e=>setTimeout(e,t))}done(t={}){const e=(new Date).getTime(),s=(e-this.startTime)/1e3;this.log("",`\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`),this.log(),(this.isSurge()||this.isQuanX()||this.isLoon())&&$done(t)}}(t,e)}
