/*
@ jzack

必看or洋葱 无限刷
cookie的值填入 变量BKxs里面 多账户 @ 或者 回车分割 只测试了V2P

示例
vId=b07362b7101c40de92fed570xxxx;sessionid=52aaeb1ddaaa49b381905d81xxxxxx
*/
const $ = new Env("必看or洋葱");
let envSplitor = ['@', '\n']
let httpResult, httpReq, httpResp, userIdx = 0, userCount = 0,lw=60, qq = [1, 15], _1=[...Array(lw)].map((a,_)=>_+1), ckName = 'BKxs' 
let userCookie = ($.isNode() ? process.env[ckName] : $.getdata(ckName)) || '';
let userList = []
///////////////////////////////////////////////////////////////////
class UserInfo {
    constructor(str) {this.index = ++userIdx, this.ck = str}
    async rew() {
            let url = `https://increase.ibreader.com/api/task/v1/wallet/user/info`
            let body = ``
            await httpRequest('post', populateUrlObject(url, this.ck, body))
            let result = httpResult;
            this.cash = result.data.cash
            this.today = result.data.today * 0.0001
            this.xx = this.today.toFixed(2)
            console.log(`账号[${this.index}]今日收益 ` + this.xx + ` 余额 ` + this.cash)
    }
    async check() {
            let url = `https://increase.ibreader.com/api/task/v1/wallet/user/info`
            let body = ``
            let ck = `${this.ck}`
            await httpRequest('post', populateUrlObject(url, this.ck, body))
            let result = httpResult;
            this.todayx = result.data.today, this.xxx = (this.todayx * 0.0001).toFixed(2)
    }
    async finish(id) {
            let url = `http://fluency.ibreader.com/task_api/task/finish`
            let timestamp = Math.round(new Date().getTime())
            let p = `7b7fpld4roey0e6e&taskId=${id}&time=${timestamp}`
            let sign = MD5Encrypt(p)
            let body = `sign=${sign}&taskId=${id}&time=${timestamp}`
             await httpRequest('post', populateUrlObject(url, this.ck, body))
            let result = httpResult;
            }
            async task() {
                await this.rew()
                for (let a of _1){
                await this.sh()
                if (this.vb == 1){
                    console.log(`账号[${this.index}] 今日收益 ${this.xxx} 达标不刷了`)
                    break
                }
                }}
            async sh() {
                await this.check()
                if (this.xxx >= 15) {
                    this.vb = 1
                } else if (this.xxx <= 15) {
                    console.log(`账号[${this.index}] 今日收益 ${this.xxx} 未达标 开始疯狂刷奖励`)
                    for (let id of qq) {
                        await this.finish(id)
                    }}}
}!(async () => {
        if (!(await checkEnv())) return;
            console.log('\n-------------- 任务 --------------\n')
            let taskallx=[]
            for(let user of userList){
                taskallx.push(user.task())
            }
            await Promise.all(taskallx)
})()
    .catch((e) => console.log(e))
    .finally(() => $.done())
///////////////////////////////////////////////////////////////////
async function checkEnv() { if (userCookie) { let e = envSplitor[0]; for (let o of envSplitor) if (userCookie.indexOf(o) > -1) { e = o; break } for (let n of userCookie.split(e)) n && userList.push(new UserInfo(n)); userCount = userList.length } else { console.log("未找到CK"); return } return console.log(`共找到${userCount}个账号`), !0 } function populateUrlObject(e, o, n = "") { let t = e.replace("//", "/").split("/")[1], i = { url: e, headers: { Host: t, "Content-Type": "application/x-www-form-urlencoded", Cookie: o, "X-Client": "sv=7.1.2;pm=Reno4;ss=1080*2196;version=5.1.89.22.140500001;vId=51f78faf8b104a948a6f7fa5310ee98f;signVersion=2;webVersion=new;oaid=null;pkv=1;ddid=DUsNIgCRRG-3wUcaq6foAEG5tENImHpK7V5aRFVzTklnQ1JSRy0zd1VjYXE2Zm9BRUc1dEVOSW1IcEs3VjVhc2h1;androidosv=25;os=0;muk=%2F8l7OEwX%2BnRlCA8kTVDwbw%3D%3D;firm=OPPO;duk=dQxA5Nu3wSZ211soO0dtFdmy3HkuaEV3rddq%2BNQUq%2Bs%3D;" }, timeout: 5e3 }; return n && (i.body = n), i } async function httpRequest(e, o) { return httpResult = null, httpReq = null, httpResp = null, new Promise(n => { $.send(e, o, async (e, o, t) => { try { if (httpReq = o, httpResp = t, e); else if (t.body) { if ("object" == typeof t.body) httpResult = t.body; else try { httpResult = JSON.parse(t.body) } catch (i) { httpResult = t.body } } } catch (l) { console.log(l) } finally { n() } }) }) }
////////////////////////////////////////////////////////////////////
//MD5
function MD5Encrypt(a) { function b(a, b) { return a << b | a >>> 32 - b } function c(a, b) { var c, d, e, f, g; return e = 2147483648 & a, f = 2147483648 & b, c = 1073741824 & a, d = 1073741824 & b, g = (1073741823 & a) + (1073741823 & b), c & d ? 2147483648 ^ g ^ e ^ f : c | d ? 1073741824 & g ? 3221225472 ^ g ^ e ^ f : 1073741824 ^ g ^ e ^ f : g ^ e ^ f } function d(a, b, c) { return a & b | ~a & c } function e(a, b, c) { return a & c | b & ~c } function f(a, b, c) { return a ^ b ^ c } function g(a, b, c) { return b ^ (a | ~c) } function h(a, e, f, g, h, i, j) { return a = c(a, c(c(d(e, f, g), h), j)), c(b(a, i), e) } function i(a, d, f, g, h, i, j) { return a = c(a, c(c(e(d, f, g), h), j)), c(b(a, i), d) } function j(a, d, e, g, h, i, j) { return a = c(a, c(c(f(d, e, g), h), j)), c(b(a, i), d) } function k(a, d, e, f, h, i, j) { return a = c(a, c(c(g(d, e, f), h), j)), c(b(a, i), d) } function l(a) { for (var b, c = a.length, d = c + 8, e = (d - d % 64) / 64, f = 16 * (e + 1), g = new Array(f - 1), h = 0, i = 0; c > i;)b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | a.charCodeAt(i) << h, i++; return b = (i - i % 4) / 4, h = i % 4 * 8, g[b] = g[b] | 128 << h, g[f - 2] = c << 3, g[f - 1] = c >>> 29, g } function m(a) { var b, c, d = "", e = ""; for (c = 0; 3 >= c; c++)b = a >>> 8 * c & 255, e = "0" + b.toString(16), d += e.substr(e.length - 2, 2); return d } function n(a) { a = a.replace(/\r\n/g, "\n"); for (var b = "", c = 0; c < a.length; c++) { var d = a.charCodeAt(c); 128 > d ? b += String.fromCharCode(d) : d > 127 && 2048 > d ? (b += String.fromCharCode(d >> 6 | 192), b += String.fromCharCode(63 & d | 128)) : (b += String.fromCharCode(d >> 12 | 224), b += String.fromCharCode(d >> 6 & 63 | 128), b += String.fromCharCode(63 & d | 128)) } return b } var o, p, q, r, s, t, u, v, w, x = [], y = 7, z = 12, A = 17, B = 22, C = 5, D = 9, E = 14, F = 20, G = 4, H = 11, I = 16, J = 23, K = 6, L = 10, M = 15, N = 21; for (a = n(a), x = l(a), t = 1732584193, u = 4023233417, v = 2562383102, w = 271733878, o = 0; o < x.length; o += 16)p = t, q = u, r = v, s = w, t = h(t, u, v, w, x[o + 0], y, 3614090360), w = h(w, t, u, v, x[o + 1], z, 3905402710), v = h(v, w, t, u, x[o + 2], A, 606105819), u = h(u, v, w, t, x[o + 3], B, 3250441966), t = h(t, u, v, w, x[o + 4], y, 4118548399), w = h(w, t, u, v, x[o + 5], z, 1200080426), v = h(v, w, t, u, x[o + 6], A, 2821735955), u = h(u, v, w, t, x[o + 7], B, 4249261313), t = h(t, u, v, w, x[o + 8], y, 1770035416), w = h(w, t, u, v, x[o + 9], z, 2336552879), v = h(v, w, t, u, x[o + 10], A, 4294925233), u = h(u, v, w, t, x[o + 11], B, 2304563134), t = h(t, u, v, w, x[o + 12], y, 1804603682), w = h(w, t, u, v, x[o + 13], z, 4254626195), v = h(v, w, t, u, x[o + 14], A, 2792965006), u = h(u, v, w, t, x[o + 15], B, 1236535329), t = i(t, u, v, w, x[o + 1], C, 4129170786), w = i(w, t, u, v, x[o + 6], D, 3225465664), v = i(v, w, t, u, x[o + 11], E, 643717713), u = i(u, v, w, t, x[o + 0], F, 3921069994), t = i(t, u, v, w, x[o + 5], C, 3593408605), w = i(w, t, u, v, x[o + 10], D, 38016083), v = i(v, w, t, u, x[o + 15], E, 3634488961), u = i(u, v, w, t, x[o + 4], F, 3889429448), t = i(t, u, v, w, x[o + 9], C, 568446438), w = i(w, t, u, v, x[o + 14], D, 3275163606), v = i(v, w, t, u, x[o + 3], E, 4107603335), u = i(u, v, w, t, x[o + 8], F, 1163531501), t = i(t, u, v, w, x[o + 13], C, 2850285829), w = i(w, t, u, v, x[o + 2], D, 4243563512), v = i(v, w, t, u, x[o + 7], E, 1735328473), u = i(u, v, w, t, x[o + 12], F, 2368359562), t = j(t, u, v, w, x[o + 5], G, 4294588738), w = j(w, t, u, v, x[o + 8], H, 2272392833), v = j(v, w, t, u, x[o + 11], I, 1839030562), u = j(u, v, w, t, x[o + 14], J, 4259657740), t = j(t, u, v, w, x[o + 1], G, 2763975236), w = j(w, t, u, v, x[o + 4], H, 1272893353), v = j(v, w, t, u, x[o + 7], I, 4139469664), u = j(u, v, w, t, x[o + 10], J, 3200236656), t = j(t, u, v, w, x[o + 13], G, 681279174), w = j(w, t, u, v, x[o + 0], H, 3936430074), v = j(v, w, t, u, x[o + 3], I, 3572445317), u = j(u, v, w, t, x[o + 6], J, 76029189), t = j(t, u, v, w, x[o + 9], G, 3654602809), w = j(w, t, u, v, x[o + 12], H, 3873151461), v = j(v, w, t, u, x[o + 15], I, 530742520), u = j(u, v, w, t, x[o + 2], J, 3299628645), t = k(t, u, v, w, x[o + 0], K, 4096336452), w = k(w, t, u, v, x[o + 7], L, 1126891415), v = k(v, w, t, u, x[o + 14], M, 2878612391), u = k(u, v, w, t, x[o + 5], N, 4237533241), t = k(t, u, v, w, x[o + 12], K, 1700485571), w = k(w, t, u, v, x[o + 3], L, 2399980690), v = k(v, w, t, u, x[o + 10], M, 4293915773), u = k(u, v, w, t, x[o + 1], N, 2240044497), t = k(t, u, v, w, x[o + 8], K, 1873313359), w = k(w, t, u, v, x[o + 15], L, 4264355552), v = k(v, w, t, u, x[o + 6], M, 2734768916), u = k(u, v, w, t, x[o + 13], N, 1309151649), t = k(t, u, v, w, x[o + 4], K, 4149444226), w = k(w, t, u, v, x[o + 11], L, 3174756917), v = k(v, w, t, u, x[o + 2], M, 718787259), u = k(u, v, w, t, x[o + 9], N, 3951481745), t = c(t, p), u = c(u, q), v = c(v, r), w = c(w, s); var O = m(t) + m(u) + m(v) + m(w); return O.toLowerCase() }
function Env(e, s) {
    return "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0), new class {
        constructor(e, s) {
            this.name = e, this.notifyStr = "", this.startTime = (new Date).getTime(), Object.assign(this, s), console.log(`${this.name} 开始运行：
`)
        } isNode() { return "undefined" != typeof module && !!module.exports } isQuanX() { return "undefined" != typeof $task } isSurge() { return "undefined" != typeof $httpClient && "undefined" == typeof $loon } isLoon() { return "undefined" != typeof $loon } getdata(e) { let s = this.getval(e); if (/^@/.test(e)) { let [, i, n] = /^@(.*?)\.(.*?)$/.exec(e), r = i ? this.getval(i) : ""; if (r) try { let o = JSON.parse(r); s = o ? this.lodash_get(o, n, "") : s } catch (a) { s = "" } } return s } setdata(e, s) { let i = !1; if (/^@/.test(s)) { let [, n, r] = /^@(.*?)\.(.*?)$/.exec(s), o = this.getval(n); try { let a = JSON.parse(n ? "null" === o ? null : o || "{}" : "{}"); this.lodash_set(a, r, e), i = this.setval(JSON.stringify(a), n) } catch (l) { let h = {}; this.lodash_set(h, r, e), i = this.setval(JSON.stringify(h), n) } } else i = this.setval(e, s); return i } getval(e) { return this.isSurge() || this.isLoon() ? $persistentStore.read(e) : this.isQuanX() ? $prefs.valueForKey(e) : this.isNode() ? (this.data = this.loaddata(), this.data[e]) : this.data && this.data[e] || null } setval(e, s) { return this.isSurge() || this.isLoon() ? $persistentStore.write(e, s) : this.isQuanX() ? $prefs.setValueForKey(e, s) : this.isNode() ? (this.data = this.loaddata(), this.data[s] = e, this.writedata(), !0) : this.data && this.data[s] || null } send(e, s, i = () => { }) { if ("get" != e && "post" != e && "put" != e && "delete" != e) { console.log(`无效的http方法：${e}`); return } if ("get" == e && s.headers ? (delete s.headers["Content-Type"], delete s.headers["Content-Length"]) : s.body && s.headers && !s.headers["Content-Type"] && (s.headers["Content-Type"] = "application/x-www-form-urlencoded"), this.isSurge() || this.isLoon()) { this.isSurge() && this.isNeedRewrite && (s.headers = s.headers || {}, Object.assign(s.headers, { "X-Surge-Skip-Scripting": !1 })); let n = { method: e, url: s.url, headers: s.headers, timeout: s.timeout, data: s.body }; "get" == e && delete n.data, $axios(n).then(e => { let { status: s, request: n, headers: r, data: o } = e; i(null, n, { statusCode: s, headers: r, body: o }) }).catch(e => console.log(e)) } else if (this.isQuanX()) s.method = e.toUpperCase(), this.isNeedRewrite && (s.opts = s.opts || {}, Object.assign(s.opts, { hints: !1 })), $task.fetch(s).then(e => { let { statusCode: s, request: n, headers: r, body: o } = e; i(null, n, { statusCode: s, headers: r, body: o }) }, e => i(e)); else if (this.isNode()) { this.got = this.got ? this.got : require("got"); let { url: r, ...o } = s; this.instance = this.got.extend({ followRedirect: !1 }), this.instance[e](r, o).then(e => { let { statusCode: s, request: n, headers: r, body: o } = e; i(null, n, { statusCode: s, headers: r, body: o }) }, e => { let { message: s, response: n } = e; i(s, n, n && n.body) }) } } time(e) { let s = { "M+": (new Date).getMonth() + 1, "d+": (new Date).getDate(), "h+": (new Date).getHours(), "m+": (new Date).getMinutes(), "s+": (new Date).getSeconds(), "q+": Math.floor(((new Date).getMonth() + 3) / 3), S: (new Date).getMilliseconds() }; for (let i in /(y+)/.test(e) && (e = e.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length))), s) RegExp("(" + i + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? s[i] : ("00" + s[i]).substr(("" + s[i]).length))); return e } async showmsg() { if (!this.notifyStr) return; let e = this.name + " 运行通知\n\n" + this.notifyStr; if ($.isNode()) { var s = require("./sendNotify"); console.log("\n============== 推送 =============="), await s.sendNotify(this.name, e) } else this.msg(e) } logAndNotify(e) { console.log(e), this.notifyStr += e, this.notifyStr += "\n" } msg(e = t, s = "", i = "", n) { let r = e => { if (!e) return e; if ("string" == typeof e) return this.isLoon() ? e : this.isQuanX() ? { "open-url": e } : this.isSurge() ? { url: e } : void 0; if ("object" == typeof e) { if (this.isLoon()) {  return { openUrl: e.openUrl || e.url || e["open-url"], mediaUrl: e.mediaUrl || e["media-url"] } } if (this.isQuanX()) {  return { "open-url": e["open-url"] || e.url || e.openUrl, "media-url": e["media-url"] || e.mediaUrl } } if (this.isSurge()) return { url: e.url || e.openUrl || e["open-url"] } } }; this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, r(n)) : this.isQuanX() && $notify(e, s, i, r(n))); let o = ["", "============== 系统通知 =============="]; o.push(e), s && o.push(s), i && o.push(i), console.log(o.join("\n")) } getMin(e, s) { return e < s ? e : s } getMax(e, s) { return e < s ? s : e } padStr(e, s, i = "0") { let n = String(e), r = s > n.length ? s - n.length : 0, o = ""; for (let a = 0; a < r; a++)o += i; return o + n } json2str(e, s, i = !1) { let n = []; for (let r of Object.keys(e).sort()) { let o = e[r]; o && i && (o = encodeURIComponent(o)), n.push(r + "=" + o) } return n.join(s) } str2json(e, s = !1) { let i = {}; for (let n of e.split("&")) { if (!n) continue; let r = n.indexOf("="); if (-1 == r) continue; let o = n.substr(0, r), a = n.substr(r + 1); s && (a = decodeURIComponent(a)), i[o] = a } return i } randomString(e, s = "abcdef0123456789") { let i = ""; for (let n = 0; n < e; n++)i += s.charAt(Math.floor(Math.random() * s.length)); return i } randomList(e) { return e[Math.floor(Math.random() * e.length)] } wait(e) { return new Promise(s => setTimeout(s, e)) } done(e = {}) {
            let s = (new Date).getTime(), i = (s - this.startTime) / 1e3; console.log(`
${this.name} 运行结束，共运行了 ${i} 秒！`), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(e)
        }
    }(e, s)
}
