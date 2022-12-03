const jsname = '洋葱免费小说提现'
const $ = new Env(jsname);
let logDebug = 0
LBJSNAMED = $.isNode() ? require("path").basename(__filename) : `ycmfxs.js`
NAME = LBJSNAMED.split('.')[0]
let status;
status = (status = ($.getval(NAME + "status") || "1")) > 1 ? `${status}` : ""; // 账号扩展字符
let userCookie = []
//填数字，25是1元，26是5元，27是10元，28是30元，29是50元，30是100元
let itemId = 28
let userList = []
let userIdx = 0
let parallel = 1
let cxdata = {
    headers: ["cookie","x-client"],
    //body: ["openid"],
    //url: ["vendor"]
}
let cxurl = 'task_api/task/v1/withdraw/valid'
let host = 'https://increase.ibreader.com/'

class USER_LB {
    constructor() {
        this.index = ++userIdx
    }
    async setValueForKey(name, value) {
        this[name] = value
    }
    async LB_GET(url) {
        this.populateUrlObject(url, '')
        await httpRequest('get', this.urlObject)
        let result = httpResult;
        return result
    }
    
    async LB_POST(url, bodys = '') {
        this.populateUrlObject(url, bodys)
        await httpRequest('post', this.urlObject)
        let result = httpResult;
        return result
    }
    async populateUrlObject(url, body = '') {
        let headerHost = host.replace('//', '/').split('/')[1]
        let urlObject = {
            url: host + url,
            headers: {
                "Host": headerHost,
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; Redmi Note 7 Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/83.0.4103.101 Mobile Safari/537.36",
                "Content-Type": "application/x-www-form-urlencoded",
   "Content-Length": 77,
   "Content-Type": "application/x-www-form-urlencoded",
   "Conection": "keep-alive",
   "Sec-Fetch-Site": "same-origin",
   "Sec-Fetch-Mode": "cors",
   "Sec-Fetch-Dest": "empty",
  "X-Requested-With": "com.bikann.mfxssk",
            }
        }
        //自动填写ck变量
        if (cxdata['url']) {
            for (let ur of cxdata['url']) {
                if (urlObject.url.indexOf('?') == -1) {
                    urlObject.url = urlObject.url + `?${ur}=${this[ur]}`
                } else {
                    urlObject.url = urlObject.url + `&${ur}=${this[ur]}`
                }
            }
        }
        if (cxdata['headers']) {
            for (let hd of cxdata['headers']) {
                urlObject.headers[hd] = this[hd]
            }
        }
        if (cxdata['body']) {
            for (let bd of cxdata['body']) {
                if (body.indexOf('{') > -1) {
                    body = JSON.parse(body)
                    body[bd] = this[bd]
                    body = JSON.stringify(body)
                    urlObject.headers['Content-Type'] = 'application/json'
                } else {
                    if (body == '') {
                        body = body + `${bd}=${this[bd]}`
                    } else {
                        body = body + `&${bd}=${this[bd]}`
                    }
                    urlObject.headers['Content-Type'] = 'application/x-www-form-urlencoded'
                }
            }
        }
        if (body) {
            urlObject.body = body
            urlObject.headers['Content-Length'] = body ? body.length : 0
        }
        this.urlObject = urlObject;
    }
}


!(async () => {
    if (typeof $request !== "undefined") {
        await get_data()
    } else {
        if (!await handleCK()) return;
        console.log(`------------- 共${userList.length}个账号-------------\n`)

        if (parallel) {
            for (let i = 0; i < userList.length; i++) {
                let ret,sign
                let index = i + 1
                let user = userList[i]
                timestamp = new Date().getTime()

       ts = Math.round(new Date().getTime()/1000).toString();



// 格式化日对象
const getNowDate = () => {
  var date = new Date();
  var year = date.getFullYear() // 年
  var month = date.getMonth() + 1; // 月
  var day = date.getDate(); // 日
  // 给一位数的数据前面加 “0”
  if (month >= 1 && month <= 9) {
    month = "0" + month;
  }
  if (day >= 0 && day <= 9) {
    day = "0" + day;
  }
return year + "" +month + "" + day ;
}
let nyr = getNowDate()












                
let ax = '7b7fpld4roey0e6e'+'&itemId='+itemId+'&platform=0'+'&time='+timestamp
sign = MD5Encrypt(ax).toUpperCase()


let token = 'BzRaaAU8AmtWNlxkW2cEK1Y-AT8LZANpVGhXbgYwVDVRZVRm'
//sign2 = MD5Encrypt(`{"app_imei":"fd136eb2e37c615848b3622055fecb33","app_type":"1","app_version":"3.0.1","brand":"xiaomi","id":"1","is_adv":"2","model":"Redmi Note 7","os_version":"Android10","time_str":"${ts}","token":"${token}"}willgoapi_beijing_api_key`)

console.log(`${nyr}`)


//提现
let cs = 100
for (let ii = 1; ii <= cs; ii++) {
ret = await userList[i].LB_POST(`task_api/task/v1/withdraw/valid`, `itemId=${itemId}&platform=0&sign=${sign}&time=${timestamp}`)

if (ret.code == 100) {
console.log(`账号【${index}】提现成功，快去看看吧`);
                } else {
                    //e = 0
                    console.log(`账号【${index}】提现失败！${ret.msg}`);
                }
     }

            }
        } else {


            let together = []
            for (let user of userList) {
                let go = async function () {

                    let ret
                    ret = await user.LB_GET(`iplist`, `{"schV":"1","appID":[10,2000],"setV":"234_422_0_2000:10","vID":"1E306818-F65C-4017-A964-B55584C54D28","sysV":"14.2","sdkV":"5.2.7","net":"1"}`)
                    console.log(JSON.stringify(ret))


                }
                together.push(go())
            }
            await Promise.all(together)
        }
    }


}
)()
    .catch((e) => $.logErr(e))
    .finally(() => $.done())


function get_data() {
    if ($request.url.indexOf(cxurl) > -1) {
        //header
        if (cxdata['headers']) {
            for (let hd of cxdata['headers']) {
                let ck = $request.headers[hd]
                let hdck = ($.isNode() ? process.env[NAME + hd] : $.getdata(NAME + hd)) || ''
                if (hdck.indexOf(ck) == -1) {
                    if (hdck) {
                        hdck = hdck + '@' + ck
                    } else {
                        hdck = ck
                    }
                    $.setdata(hdck, NAME + hd);
                    ckList = hdck.split('@')
                    $.msg(`${jsname}:获取第${ckList.length}个${hd}成功: ${ck}`)
                } else {
                    $.msg(`${jsname}:${NAME + hd}变量已存在: ${ck}`)
                }
            }
        }
        //body
        if (cxdata['body']) {
            for (let bd of cxdata['body']) {
                let ck = $request.body
                if (ck.indexOf('{') == -1) {
                    if (ck.indexOf('&') == -1) {
                        var pattern = `${bd}=(.*)`;
                        var reg = new RegExp(pattern);
                        ck = ck.match(reg)[1]
                    } else {
                        let nck = ck.split(bd)
                        if (nck.indexOf('&') == -1) {
                            var pattern = `${bd}=(.*)`;
                            var reg = new RegExp(pattern);
                            ck = ck.match(reg)[1]
                        } else {
                            var pattern = `${bd}=(.*)&`;
                            var reg = new RegExp(pattern);
                            ck = ck.match(reg)[1]
                        }
                    }
                } else {
                    ck = JSON.parse(ck)
                    ck = ck[bd]
                }
                let bdck = ($.isNode() ? process.env[NAME + bd] : $.getdata(NAME + bd)) || ''
                if (bdck.indexOf(ck) == -1) {
                    if (bdck) {
                        bdck = bdck + '@' + ck
                    } else {
                        bdck = ck
                    }
                    $.setdata(bdck, NAME + bd);
                    ckList = bdck.split('@')
                    $.msg(`${jsname}:获取第${ckList.length}个${bd}成功: ${ck}`)
                } else {
                    $.msg(`${jsname}:${NAME + bd}变量已存在: ${ck}`)
                }
            }
        }
        //url
        if (cxdata['url']) {
            for (let ur of cxdata['url']) {
                let ck = $request.url
                let urlck = ($.isNode() ? process.env[NAME + ur] : $.getdata(NAME + ur)) || ''
                let nck = ck.split(ur)
                if (nck.indexOf('&') == -1) {
                    var pattern = `${ur}=(.*)`;
                    var reg = new RegExp(pattern);
                    ck = ck.match(reg)[1]
                } else {
                    var pattern = `${ur}=(.*)&`;
                    var reg = new RegExp(pattern);
                    ck = ck.match(reg)[1]
                }
                if (urlck.indexOf(ck) == -1) {
                    if (urlck) {
                        urlck = urlck + '@' + ck
                    } else {
                        urlck = ck
                    }
                    $.setdata(urlck, NAME + ur);
                    ckList = urlck.split('@')
                    $.msg(`${jsname}:获取第${ckList.length}个${ur}成功: ${ck}`)
                } else {
                    $.msg(`${jsname}:${NAME + ur}变量已存在: ${ck}`)
                }
            }
        }

    }
}


function handleCK() {
    let envSplitor = ['\n', '@', '&']
    for (let Value in cxdata) {
        for (let p of cxdata[Value]) {
            userCookie[p] = ($.isNode() ? process.env[NAME + p] : $.getdata(NAME + p)) || '';
            if (userCookie[p]) {
                let splitor = envSplitor[0];
                for (let sp of envSplitor) {
                    if (userCookie[p].indexOf(sp) > -1) {
                        splitor = sp;
                        break;
                    }
                }
                if (userList.length > 0) {
                    let userCookiesArr = userCookie[p].split(splitor)
                    if (userCookiesArr.length != userList.length) {
                        console.log(`CK变量长度不对应`);
                        return;
                    }
                    for (let i = 0; i < userList.length; i++) {
                        userList[i].setValueForKey(p, userCookiesArr[i])
                    }
                } else {
                    for (let userCookies of userCookie[p].split(splitor)) {
                        const newUser = new USER_LB();
                        newUser.setValueForKey(p, userCookies)
                        if (userCookies) userList.push(newUser)
                    }
                }
            } else {
                console.log(`\n未找到CK，变量名为：${NAME + p}`)
                return;
            }
        }
    }
    console.log(`共找到${userList.length}个账号`)
    return true
}

async function httpRequest(method, url) {
    httpResult = null
    if (method == 'get') delete url.body
    return new Promise((resolve) => {
        $[method](url, async (err, resp, data) => {
            try {
                // console.log(JSON.stringify(url));
                if (err) {
                    console.log(`${method}请求失败`);
                    console.log(JSON.stringify(err));
                    $.logErr(err);
                } else {
                    if (safeGet(data)) {
                        httpResult = JSON.parse(data);
                        if (logDebug) console.log(JSON.stringify(httpResult));
                    }else{
                        httpResult = data;
                    }
                }
            } catch (e) {
                $.logErr(e, resp);
            } finally {
                resolve();
            }
        });
    });
}

function safeGet(data) {
    try {
        if (typeof JSON.parse(data) == "object") {
            return true;
        } else {
            // console.log(data)
        }
    } catch (e) {
        console.log(JSON.stringify(e));
        console.log(`服务器访问数据为空，请检查自身设备网络情况`);
        return false;
    }
}
function timestampToTime(timestamp) {
    return new Date(parseInt(timestamp)).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
}


function stringToBase64(str) {
    var base64Str = Buffer.from(str).toString('base64');
    return base64Str;
}

function sleep(timeout) {
    return new Promise((resolve) => setTimeout(resolve, timeout));
}

function reconvert(str) {
    str = str.replace(/(\\u)(\w{1,4})/gi, function ($0) {
        return (String.fromCharCode(parseInt((escape($0).replace(/(%5Cu)(\w{1,4})/g, "$2")), 16)));
    });
    str = str.replace(/(&#x)(\w{1,4});/gi, function ($0) {
        return String.fromCharCode(parseInt(escape($0).replace(/(%26%23x)(\w{1,4})(%3B)/g, "$2"), 16));
    });
    str = str.replace(/(&#)(\d{1,6});/gi, function ($0) {
        return String.fromCharCode(parseInt(escape($0).replace(/(%26%23)(\d{1,6})(%3B)/g, "$2")));
    });

    return str;
}


function encodeUTF8(str) {
    let utf8Str = ''
    for (let i = 0; i < str.length; i++) {
        let t = str[i]
        let text = ''
        if (encodeURIComponent(t).length < 4) {
            text = t.charCodeAt(0).toString(16);
        } else {
            text = encodeURIComponent(t)
            text = text.replaceAll('%', '')
        }
        console.log("每个字符", i, t, text)
        utf8Str += text
    }
    console.log("转换后", utf8Str)
    return utf8Str
}

 





function MD5Encrypt(a){function b(a,b){return a<<b|a>>>32-b}function c(a,b){var c,d,e,f,g;return e=2147483648&a,f=2147483648&b,c=1073741824&a,d=1073741824&b,g=(1073741823&a)+(1073741823&b),c&d?2147483648^g^e^f:c|d?1073741824&g?3221225472^g^e^f:1073741824^g^e^f:g^e^f}function d(a,b,c){return a&b|~a&c}function e(a,b,c){return a&c|b&~c}function f(a,b,c){return a^b^c}function g(a,b,c){return b^(a|~c)}function h(a,e,f,g,h,i,j){return a=c(a,c(c(d(e,f,g),h),j)),c(b(a,i),e)}function i(a,d,f,g,h,i,j){return a=c(a,c(c(e(d,f,g),h),j)),c(b(a,i),d)}function j(a,d,e,g,h,i,j){return a=c(a,c(c(f(d,e,g),h),j)),c(b(a,i),d)}function k(a,d,e,f,h,i,j){return a=c(a,c(c(g(d,e,f),h),j)),c(b(a,i),d)}function l(a){for(var b,c=a.length,d=c+8,e=(d-d%64)/64,f=16*(e+1),g=new Array(f-1),h=0,i=0;c>i;)b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|a.charCodeAt(i)<<h,i++;return b=(i-i%4)/4,h=i%4*8,g[b]=g[b]|128<<h,g[f-2]=c<<3,g[f-1]=c>>>29,g}function m(a){var b,c,d="",e="";for(c=0;3>=c;c++)b=a>>>8*c&255,e="0"+b.toString(16),d+=e.substr(e.length-2,2);return d}function n(a){a=a.replace(/\r\n/g,"\n");for(var b="",c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b+=String.fromCharCode(d):d>127&&2048>d?(b+=String.fromCharCode(d>>6|192),b+=String.fromCharCode(63&d|128)):(b+=String.fromCharCode(d>>12|224),b+=String.fromCharCode(d>>6&63|128),b+=String.fromCharCode(63&d|128))}return b}var o,p,q,r,s,t,u,v,w,x=[],y=7,z=12,A=17,B=22,C=5,D=9,E=14,F=20,G=4,H=11,I=16,J=23,K=6,L=10,M=15,N=21;for(a=n(a),x=l(a),t=1732584193,u=4023233417,v=2562383102,w=271733878,o=0;o<x.length;o+=16)p=t,q=u,r=v,s=w,t=h(t,u,v,w,x[o+0],y,3614090360),w=h(w,t,u,v,x[o+1],z,3905402710),v=h(v,w,t,u,x[o+2],A,606105819),u=h(u,v,w,t,x[o+3],B,3250441966),t=h(t,u,v,w,x[o+4],y,4118548399),w=h(w,t,u,v,x[o+5],z,1200080426),v=h(v,w,t,u,x[o+6],A,2821735955),u=h(u,v,w,t,x[o+7],B,4249261313),t=h(t,u,v,w,x[o+8],y,1770035416),w=h(w,t,u,v,x[o+9],z,2336552879),v=h(v,w,t,u,x[o+10],A,4294925233),u=h(u,v,w,t,x[o+11],B,2304563134),t=h(t,u,v,w,x[o+12],y,1804603682),w=h(w,t,u,v,x[o+13],z,4254626195),v=h(v,w,t,u,x[o+14],A,2792965006),u=h(u,v,w,t,x[o+15],B,1236535329),t=i(t,u,v,w,x[o+1],C,4129170786),w=i(w,t,u,v,x[o+6],D,3225465664),v=i(v,w,t,u,x[o+11],E,643717713),u=i(u,v,w,t,x[o+0],F,3921069994),t=i(t,u,v,w,x[o+5],C,3593408605),w=i(w,t,u,v,x[o+10],D,38016083),v=i(v,w,t,u,x[o+15],E,3634488961),u=i(u,v,w,t,x[o+4],F,3889429448),t=i(t,u,v,w,x[o+9],C,568446438),w=i(w,t,u,v,x[o+14],D,3275163606),v=i(v,w,t,u,x[o+3],E,4107603335),u=i(u,v,w,t,x[o+8],F,1163531501),t=i(t,u,v,w,x[o+13],C,2850285829),w=i(w,t,u,v,x[o+2],D,4243563512),v=i(v,w,t,u,x[o+7],E,1735328473),u=i(u,v,w,t,x[o+12],F,2368359562),t=j(t,u,v,w,x[o+5],G,4294588738),w=j(w,t,u,v,x[o+8],H,2272392833),v=j(v,w,t,u,x[o+11],I,1839030562),u=j(u,v,w,t,x[o+14],J,4259657740),t=j(t,u,v,w,x[o+1],G,2763975236),w=j(w,t,u,v,x[o+4],H,1272893353),v=j(v,w,t,u,x[o+7],I,4139469664),u=j(u,v,w,t,x[o+10],J,3200236656),t=j(t,u,v,w,x[o+13],G,681279174),w=j(w,t,u,v,x[o+0],H,3936430074),v=j(v,w,t,u,x[o+3],I,3572445317),u=j(u,v,w,t,x[o+6],J,76029189),t=j(t,u,v,w,x[o+9],G,3654602809),w=j(w,t,u,v,x[o+12],H,3873151461),v=j(v,w,t,u,x[o+15],I,530742520),u=j(u,v,w,t,x[o+2],J,3299628645),t=k(t,u,v,w,x[o+0],K,4096336452),w=k(w,t,u,v,x[o+7],L,1126891415),v=k(v,w,t,u,x[o+14],M,2878612391),u=k(u,v,w,t,x[o+5],N,4237533241),t=k(t,u,v,w,x[o+12],K,1700485571),w=k(w,t,u,v,x[o+3],L,2399980690),v=k(v,w,t,u,x[o+10],M,4293915773),u=k(u,v,w,t,x[o+1],N,2240044497),t=k(t,u,v,w,x[o+8],K,1873313359),w=k(w,t,u,v,x[o+15],L,4264355552),v=k(v,w,t,u,x[o+6],M,2734768916),u=k(u,v,w,t,x[o+13],N,1309151649),t=k(t,u,v,w,x[o+4],K,4149444226),w=k(w,t,u,v,x[o+11],L,3174756917),v=k(v,w,t,u,x[o+2],M,718787259),u=k(u,v,w,t,x[o+9],N,3951481745),t=c(t,p),u=c(u,q),v=c(v,r),w=c(w,s);var O=m(t)+m(u)+m(v)+m(w);return O.toLowerCase()}

 var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9+/=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/rn/g,"n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}




function Env(t, e) { class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }
