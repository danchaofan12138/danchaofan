var CryptoJS = require('crypto-js')
/*
岚图汽车签到
重写：https://clientapi.dsmp.voyah.com.cn/

变量：ltCookie 
变量：ltdevicesn 

*/

const jsname = '岚图汽车'
const $ = new Env(jsname);
let logDebug = 0
LBJSNAMED = $.isNode() ? require("path").basename(__filename) : `ltqc.js`
NAME = LBJSNAMED.split('.')[0]
let status;
status = (status = ($.getval(NAME + "status") || "1")) > 1 ? `${status}` : ""; // 账号扩展字符
let userCookie = []
let userList = []
let userIdx = 0
//选择运行模式，单账号运行：1 为模式一 ，多账号并行 0 为模式二
let parallel = 1
let cxdata = {
    headers: ["Cookie", "devicesn"],
    // body: ["appV", "carrior", "boundID"],
    // url: ["vendor"]
}
let cxurl = 'task/check/qd'
let host = 'https://clientapi.dsmp.voyah.com.cn/'

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
                "Connection": "keep-alive",
                "User-Agent": "ProductName/0 CFNetwork/1206 Darwin/20.1.0",
                "Content-Type": "application/json",
                "osversion": "Android10",
                "platform": "android",
                "sign_encrypt": "PlIg3N07NBMyW4YM43kGnzJXr2GAa0YJ1uUoiBWQW/N/7kx+gGYV+Qkc3Rm6rpInVs5nEK3lvZF2Q2NRPZbPJDXMh3mKtK1Ev9W6Ls0oS4bZLMB0yYgKLuMmf0t3XKNaGHWhWI7yn8BoDIsJLTbn5tb2q3WIYnEyfGEz5CRMGRhh3tUSo3OBDCvRkWlE17WbGocSRpJTQa1n/vdVTIjDalZ3q7zTI/838FJd9ZhcNBGUFZkv2+Sr1rsPTE4nHoM/bwwB1d/n0eu2BIOPHzkkzSfD0JityJOcpCLTSqBxt/JTzzJYEEdgJqPwrKyzFj1agKAKGPfalw0b8ord+9FFPQ== "
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
            urlObject.headers['Content-Length'] = url.body ? url.body.length : 0
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
        //模式一
        if (parallel) {
            for (let i = 0; i < userList.length; i++) {
                let ret
                let index = i + 1

                //签到
                ret = await userList[i].LB_POST(`v1/app/vip/account/task/finish/qd`)
                let aes = JSON.parse(aesDecrypt(ret.resp))
                console.log(`账号【${index}】签到：${aes.msg}`);

                //抽奖
                let time = new Date().getTime()
                let userId = userList[i]['Cookie'].match(/userid=(.+?);/)[1]
                let req = aesEncrypt(`{"phoneNumber":"18888888888","userId":"${userId}","userName":"岚图用户${time}"}&${time}`)
                ret = await userList[i].LB_POST(`v1/rewardService/drawingCard`, `{"req":"${req}"}`)
                aes = JSON.parse(aesDecrypt(ret.resp))
                if (aes.code == 0) {
                    console.log(`账号【${index}】抽卡${aes.msg}：卡片【${ret.data.cardName}】`);
                } else {
                    console.log(`账号【${index}】抽卡: ${aes.msg}`);
                }

            }
        } else {
            //模式二 并发
            let together = []
            //签到
            for (let user of userList) {
                let go = async function () {
                    let ret, index = user.index
                    ret = await user.LB_POST(`v1/app/vip/account/task/finish/qd`)
                    let aes = JSON.parse(aesDecrypt(ret.resp))
                    console.log(`账号【${index}】签到：${aes.msg}`);
                }
                together.push(go())
            }
            await Promise.all(together)
            //抽卡
            for (let user of userList) {
                let go = async function () {
                    let ret, index = user.index
                    let time = new Date().getTime()
                    let userId = user['Cookie'].match(/userid=(.+?);/)[1]
                    let req = aesEncrypt(`{"phoneNumber":"18888888888","userId":"${userId}","userName":"岚图用户${time}"}&${time}`)
                    ret = await user.LB_POST(`v1/rewardService/drawingCard`, `{"req":"${req}"}`)
                    if (aes.code == 0) {
                        console.log(`账号【${index}】抽卡${aes.msg}：卡片【${ret.data.cardName}】`);
                    } else {
                        console.log(`账号【${index}】抽卡: ${aes.msg}`);
                    }
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

//数据获取
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
            console.log(data)
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

function aesDecrypt(encrypt) {

    var decrypt = CryptoJS.AES.decrypt(encrypt, CryptoJS.enc.Utf8.parse('djm89023j10d89j1'), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    });
    return decrypt.toString(CryptoJS.enc.Utf8)

}

function aesEncrypt(data) {
    var encrypt = CryptoJS.AES.encrypt(data, CryptoJS.enc.Utf8.parse('djm89023j10d89j1'), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
    }).toString();
    return encrypt;
}


function Env(t, e) { "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0); class s { constructor(t) { this.env = t } send(t, e = "GET") { t = "string" == typeof t ? { url: t } : t; let s = this.get; return "POST" === e && (s = this.post), "PUT" === e && (s = this.put), new Promise((e, i) => { s.call(this, t, (t, s, r) => { t ? i(t) : e(s) }) }) } get(t) { return this.send.call(this.env, t) } post(t) { return this.send.call(this.env, t, "POST") } put(t) { return this.send.call(this.env, t, "PUT") } } return new class { constructor(t, e) { this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`) } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } toObj(t, e = null) { try { return JSON.parse(t) } catch { return e } } toStr(t, e = null) { try { return JSON.stringify(t) } catch { return e } } getjson(t, e) { let s = e; const i = this.getdata(t); if (i) try { s = JSON.parse(this.getdata(t)) } catch { } return s } setjson(t, e) { try { return this.setdata(JSON.stringify(t), e) } catch { return !1 } } getScript(t) { return new Promise(e => { this.get({ url: t }, (t, s, i) => e(i)) }) } runScript(t, e) { return new Promise(s => { let i = this.getdata("@chavy_boxjs_userCfgs.httpapi"); i = i ? i.replace(/\n/g, "").trim() : i; let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout"); r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r; const [o, h] = i.split("@"), a = { url: `http://${h}/v1/scripting/evaluate`, body: { script_text: t, mock_type: "cron", timeout: r }, headers: { "X-Key": o, Accept: "*/*" } }; this.post(a, (t, e, i) => s(i)) }).catch(t => this.logErr(t)) } loaddata() { if (!this.isNode()) return {}; { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e); if (!s && !i) return {}; { const i = s ? t : e; try { return JSON.parse(this.fs.readFileSync(i)) } catch (t) { return {} } } } } writedata() { if (this.isNode()) { this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path"); const t = this.path.resolve(this.dataFile), e = this.path.resolve(process.cwd(), this.dataFile), s = this.fs.existsSync(t), i = !s && this.fs.existsSync(e), r = JSON.stringify(this.data); s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r) } } lodash_get(t, e, s) { const i = e.replace(/\[(\d+)\]/g, ".$1").split("."); let r = t; for (const t of i) if (r = Object(r)[t], void 0 === r) return s; return r } lodash_set(t, e, s) { return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t) } getdata(t) { let e = this.getval(t); if (/^@/.test(t)) { const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : ""; if (r) try { const t = JSON.parse(r); e = t ? this.lodash_get(t, i, "") : e } catch (t) { e = "" } } return e } setdata(t, e) { let s = !1; if (/^@/.test(e)) { const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e), o = this.getval(i), h = i ? "null" === o ? null : o || "{}" : "{}"; try { const e = JSON.parse(h); this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i) } catch (e) { const o = {}; this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i) } } else s = this.setval(t, e); return s } getval(t) { return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null } setval(t, e) { return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null } initGotEnv(t) { this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)) } get(t, e = (() => { })) { t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.get(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => { try { if (t.headers["set-cookie"]) { const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString(); this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar } } catch (t) { this.logErr(t) } }).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) })) } post(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.post(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.post(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } put(t, e = (() => { })) { if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, { "X-Surge-Skip-Scripting": !1 })), $httpClient.put(t, (t, s, i) => { !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i) }); else if (this.isQuanX()) t.method = "PUT", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, { hints: !1 })), $task.fetch(t).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => e(t)); else if (this.isNode()) { this.initGotEnv(t); const { url: s, ...i } = t; this.got.put(s, i).then(t => { const { statusCode: s, statusCode: i, headers: r, body: o } = t; e(null, { status: s, statusCode: i, headers: r, body: o }, o) }, t => { const { message: s, response: i } = t; e(s, i, i && i.body) }) } } time(t) { let e = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "H+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))); for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length))); return t } msg(e = t, s = "", i = "", r) { const o = t => { if (!t) return t; if ("string" == typeof t) return this.isLoon() ? t : this.isQuanX() ? { "open-url": t } : this.isSurge() ? { url: t } : void 0; if ("object" == typeof t) { if (this.isLoon()) { let e = t.openUrl || t.url || t["open-url"], s = t.mediaUrl || t["media-url"]; return { openUrl: e, mediaUrl: s } } if (this.isQuanX()) { let e = t["open-url"] || t.url || t.openUrl, s = t["media-url"] || t.mediaUrl; return { "open-url": e, "media-url": s } } if (this.isSurge()) { let e = t.url || t.openUrl || t["open-url"]; return { url: e } } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))); let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="]; h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h) } log(...t) { t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator)) } logErr(t, e) { const s = !this.isSurge() && !this.isQuanX() && !this.isLoon(); s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t) } wait(t) { return new Promise(e => setTimeout(e, t)) } done(t = {}) { const e = (new Date).getTime(), s = (e - this.startTime) / 1e3; this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t) } }(t, e) }