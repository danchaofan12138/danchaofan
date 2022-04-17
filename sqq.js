/*

软件名称:省钱钱

项目注册地址:https://gitee.com/soy-tool/app-script/raw/master/picture/sqq.png

邀请码:131022

一天好像0.3左右,提现10元起,需要实名,提示是手机号和实名信息姓名,身份证一致(不需要的可以不用上)
除了每日广告外还有一个据说没有的某宝号给人刷单(赚钱\小钱包\提交某宝号)

必要变量:

变量名 soy_sqq_data
变量值 xxx
注释:抓包带有 https://api.youlaizhuan.com/ 的链接 把请求里面的提交内容全部复制填到变量

多个号用 # 或 @ 换行 隔开

cron 25 10,13,19 * * *

脚本地址:https://gitee.com/soy-tool/app-script/raw/master/app_sqq.js

*/


const $ = new Env('【省钱钱】版本:22/03/10_0');
const notify = $.isNode() ? require('./sendNotify') : '';



var _0xodS='jsjiami.com.v6',_0xodS_=['_0xodS'],_0x1e35=[_0xodS,'\x63\x72\x79\x70\x74\x6f\x2d\x6a\x73','\x6c\x6f\x67','\x0a\u3010\x73\x6f\x79\u811a\u672c\u6587\u4ef6\u514d\u8d23\u58f0\u660e\u3011\uff1a\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u53ea\u7528\u4e8e\u5174\u8da3\u4ea4\u6d41\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4efb\u4f55\u4eba\u4e0d\u5f97\u7528\u4e8e\u5546\u4e1a\u4ee5\u53ca\u975e\u6cd5\u7528\u9014\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u4e0b\u8f7d\u8bd5\u7528\u540e\x32\x34\u5c0f\u65f6\u5185\u81ea\u884c\u5220\u9664\x0a\x2d\x2d\x2d\u56e0\u4f7f\u7528\u811a\u672c\u6587\u4ef6\u9020\u6210\u4f7f\u7528\u8005\u4ee5\u53ca\u4efb\u4f55\u7f51\u7ad9\u5e73\u53f0\u7684\u4e00\u5207\u635f\u5931\u7686\u7531\u4f7f\u7528\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u811a\u672c\u6587\u4ef6\u5982\u6709\u4e0d\u614e\u88ab\u7834\u89e3\u6216\u4fee\u6539\u7686\u6709\u7834\u89e3\u6216\u4fee\u6539\u8005\u627f\u62c5\x0a\x2d\x2d\x2d\u5982\u4e0d\u63a5\u53d7\u6b64\u6761\u6b3e\u8bf7\u7acb\u5373\u5220\u9664\u811a\u672c\u6587\u4ef6','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x69\x73\x4e\x6f\x64\x65','\x65\x6e\x76','\x73\x6f\x79\x5f\x73\x71\x71\x5f\x64\x61\x74\x61','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\u3011\uff1a\u672a\u586b\u5199\u76f8\u5e94\u53d8\u91cf\x20\x73\x6f\x79\x5f\x73\x71\x71\x5f\x64\x61\x74\x61','\x69\x6e\x64\x65\x78\x4f\x66','\x73\x70\x6c\x69\x74','\x0a\x3d\x3d\x3d\x20\u811a\u672c\u6267\u884c\x20\x2d\x20\u5317\u4eac\u65f6\u95f4\uff1a','\x67\x65\x74\x54\x69\x6d\x65','\x67\x65\x74\x54\x69\x6d\x65\x7a\x6f\x6e\x65\x4f\x66\x66\x73\x65\x74','\x74\x6f\x4c\x6f\x63\x61\x6c\x65\x53\x74\x72\x69\x6e\x67','\x20\x3d\x3d\x3d\x0a','\x3d\x3d\x3d\u3010\u5171\x20','\x6c\x65\x6e\x67\x74\x68','\x20\u4e2a\u8d26\u53f7\u3011\x3d\x3d\x3d\x0a','\x6d\x61\x74\x63\x68','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x38\x2e\x31\x3b\x20\x50\x41\x52\x2d\x41\x4c\x30\x30\x20\x42\x75\x69\x6c\x64\x2f\x48\x55\x41\x57\x45\x49\x50\x41\x52\x2d\x41\x4c\x30\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x35\x37\x2e\x30\x2e\x32\x39\x38\x37\x2e\x31\x33\x32\x20\x4d\x51\x51\x42\x72\x6f\x77\x73\x65\x72\x2f\x36\x2e\x32\x20\x54\x42\x53\x2f\x30\x34\x34\x33\x30\x34\x20\x6e\x61\x6d\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x4d\x69\x63\x72\x6f\x4d\x65\x73\x73\x65\x6e\x67\x65\x72\x2f\x36\x2e\x37\x2e\x33\x2e\x31\x33\x36\x30\x28\x30\x78\x32\x36\x30\x37\x30\x33\x33\x33\x29','\x69\x6e\x64\x65\x78','\x73\x65\x6e\x64\x4e\x6f\x74\x69\x66\x79','\x6e\x61\x6d\x65','\x63\x61\x74\x63\x68','\x6c\x6f\x67\x45\x72\x72','\x66\x69\x6e\x61\x6c\x6c\x79','\x64\x6f\x6e\x65','\u5f00\u59cb\u3010\u7b2c\x20','\x20\u4e2a\u8d26\u53f7\u4efb\u52a1\u3011','\x56\x69\x64\x65\x6f\x41\x70\x69','\x63\x3d\x47\x65\x74\x55\x6e\x69\x61\x64\x56\x69\x64\x65\x6f\x4c\x69\x73\x74\x26\x64\x3d','\x26\x73\x3d','\x26\x74\x73\x3d','\x26\x61\x3d','\x26\x74\x3d','\x26\x76\x3d\x31\x2e\x38\x2e\x30\x26\x64\x65\x76\x69\x63\x65\x69\x64\x3d','\x70\x6f\x73\x74','\x0a\u3010\x73\x6f\x79\u811a\u672c\u63d0\u793a\x2d\x2d\x2d\u8d26\u53f7\x20','\x20\u4efb\u52a1\u5217\u8868\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x70\x61\x72\x73\x65','\x63\x6f\x6d\x70\x6c\x65\x74\x65','\x74\x69\x74\x6c\x65','\x20\u4efb\u52a1\u5217\u8868\u3011\x3a\x20','\x63\x3d\x57\x72\x69\x74\x65\x55\x6e\x69\x61\x64\x56\x69\x64\x65\x6f\x43\x6f\x6d\x70\x6c\x65\x74\x65\x26\x64\x3d\x25\x37\x42\x25\x32\x32\x69\x64\x25\x32\x32\x25\x33\x41\x25\x32\x32','\x25\x32\x32\x25\x37\x44\x26\x73\x3d','\x26\x76\x3d\x31\x2e\x38\x2e\x39\x26\x64\x65\x76\x69\x63\x65\x69\x64\x3d','\u3011\x3a\x20\u7f51\u7edc\u8bf7\u6c42\u5931\u8d25\x2c\u4f60\u7684\x69\x70\u65e0\u6cd5\u8bbf\u95ee\u5e73\u53f0\u670d\u52a1\u5668','\x61\x6d\x6f\x75\x6e\x74','\u3011\x3a\x20','\x63\x6f\x6e\x74\x65\x6e\x74','\x77\x61\x69\x74','\x66\x6c\x6f\x6f\x72','\x72\x61\x6e\x64\x6f\x6d','\x2c\u83b7\u5f97\x20','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x61\x70\x69\x2e\x79\x6f\x75\x6c\x61\x69\x7a\x68\x75\x61\x6e\x2e\x63\x6f\x6d\x2f','\x4d\x6f\x7a\x69\x6c\x6c\x61\x2f\x35\x2e\x30\x20\x28\x4c\x69\x6e\x75\x78\x3b\x20\x41\x6e\x64\x72\x6f\x69\x64\x20\x31\x31\x3b\x20\x53\x4b\x57\x2d\x41\x30\x20\x42\x75\x69\x6c\x64\x2f\x53\x4b\x59\x57\x32\x31\x31\x30\x31\x35\x31\x43\x4e\x30\x30\x4d\x52\x30\x3b\x20\x77\x76\x29\x20\x41\x70\x70\x6c\x65\x57\x65\x62\x4b\x69\x74\x2f\x35\x33\x37\x2e\x33\x36\x20\x28\x4b\x48\x54\x4d\x4c\x2c\x20\x6c\x69\x6b\x65\x20\x47\x65\x63\x6b\x6f\x29\x20\x56\x65\x72\x73\x69\x6f\x6e\x2f\x34\x2e\x30\x20\x43\x68\x72\x6f\x6d\x65\x2f\x38\x33\x2e\x30\x2e\x34\x31\x30\x33\x2e\x31\x30\x36\x20\x4d\x6f\x62\x69\x6c\x65\x20\x53\x61\x66\x61\x72\x69\x2f\x35\x33\x37\x2e\x33\x36\x20\x75\x6e\x69\x2d\x61\x70\x70\x20\x48\x74\x6d\x6c\x35\x50\x6c\x75\x73\x2f\x31\x2e\x30\x20\x28\x49\x6d\x6d\x65\x72\x73\x65\x64\x2f\x32\x39\x2e\x30\x39\x30\x39\x31\x29','\x61\x70\x70\x6c\x69\x63\x61\x74\x69\x6f\x6e\x2f\x78\x2d\x77\x77\x77\x2d\x66\x6f\x72\x6d\x2d\x75\x72\x6c\x65\x6e\x63\x6f\x64\x65\x64','\x61\x70\x69\x2e\x79\x6f\x75\x6c\x61\x69\x7a\x68\x75\x61\x6e\x2e\x63\x6f\x6d','\x4b\x65\x65\x70\x2d\x41\x6c\x69\x76\x65','\x67\x7a\x69\x70','\x61\x70\x69\x2e\x73\x71\x71\x2e\x63\x68\x6f\x6e\x67\x65\x73\x68\x65\x6e\x67\x2e\x63\x6f\x6d','\x6f\x6b\x68\x74\x74\x70\x2f\x33\x2e\x31\x30\x2e\x30','\x67\x65\x74\x46\x75\x6c\x6c\x59\x65\x61\x72','\x67\x65\x74\x4d\x6f\x6e\x74\x68','\x67\x65\x74\x44\x61\x74\x65','\x67\x65\x74\x44\x61\x79','\x20\u661f\u671f','\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d','\x63\x68\x61\x72\x41\x74','\x67\x65\x74\x48\x6f\x75\x72\x73','\x67\x65\x74\x4d\x69\x6e\x75\x74\x65\x73','\x67\x65\x74\x53\x65\x63\x6f\x6e\x64\x73','\x67\x65\x74\x4d\x69\x6c\x6c\x69\x73\x65\x63\x6f\x6e\x64\x73','\x63\x68\x61\x72\x43\x6f\x64\x65\x41\x74','\x74\x6f\x53\x74\x72\x69\x6e\x67','\x73\x75\x62\x73\x74\x72','\x72\x65\x70\x6c\x61\x63\x65','\x66\x72\x6f\x6d\x43\x68\x61\x72\x43\x6f\x64\x65','\x74\x6f\x4c\x6f\x77\x65\x72\x43\x61\x73\x65','\x70\x71\x6a\x73\x66\x53\x6e\x49\x6a\x69\x68\x71\x57\x53\x61\x41\x6d\x69\x4e\x2e\x63\x66\x45\x7a\x6f\x6d\x2e\x76\x36\x3d\x3d'];function _0x5a05(_0x14351f,_0x38b9b8){_0x14351f=~~'0x'['concat'](_0x14351f['slice'](0x0));var _0x2fefda=_0x1e35[_0x14351f];return _0x2fefda;};(function(_0x460f90,_0x531b23){var _0x559a0c=0x0;for(_0x531b23=_0x460f90['shift'](_0x559a0c>>0x2);_0x531b23&&_0x531b23!==(_0x460f90['pop'](_0x559a0c>>0x3)+'')['replace'](/[pqfSnIhqWSANfEz=]/g,'');_0x559a0c++){_0x559a0c=_0x559a0c^0xd6745;}}(_0x1e35,_0x5a05));const crypto=require(_0x5a05('0'));let app_soy_sqq_data=[],soy_sqq_UA='';console[_0x5a05('1')](_0x5a05('2'));!(async()=>{if(typeof $request!==_0x5a05('3')){await get_appdata();}if($[_0x5a05('4')]()){if(!process[_0x5a05('5')][_0x5a05('6')]){console[_0x5a05('1')](_0x5a05('7'));return;}if(process[_0x5a05('5')][_0x5a05('6')]&&process[_0x5a05('5')][_0x5a05('6')][_0x5a05('8')]('\x0a')>-0x1){app_soy_sqq_data=process[_0x5a05('5')][_0x5a05('6')][_0x5a05('9')]('\x0a');}else if(process[_0x5a05('5')][_0x5a05('6')]&&process[_0x5a05('5')][_0x5a05('6')][_0x5a05('8')]('\x23')>-0x1){app_soy_sqq_data=process[_0x5a05('5')][_0x5a05('6')][_0x5a05('9')]('\x23');}else if(process[_0x5a05('5')][_0x5a05('6')]&&process[_0x5a05('5')][_0x5a05('6')][_0x5a05('8')]('\x40')>-0x1){app_soy_sqq_data=process[_0x5a05('5')][_0x5a05('6')][_0x5a05('9')]('\x40');}else{app_soy_sqq_data=process[_0x5a05('5')][_0x5a05('6')][_0x5a05('9')]();};}console[_0x5a05('1')](_0x5a05('a')+new Date(new Date()[_0x5a05('b')]()+new Date()[_0x5a05('c')]()*0x3c*0x3e8+0x8*0x3c*0x3c*0x3e8)[_0x5a05('d')]()+_0x5a05('e'));console[_0x5a05('1')](_0x5a05('f')+app_soy_sqq_data[_0x5a05('10')]+_0x5a05('11'));subTitle='';for(i=0x0;i<app_soy_sqq_data[_0x5a05('10')];i++){let _0x385f00=app_soy_sqq_data[i][_0x5a05('9')]('\x26');s=_0x385f00[0x2][_0x5a05('12')](/s=(\S*)/)[0x1];d=_0x385f00[0x1][_0x5a05('12')](/d=(\S*)/)[0x1];ts=_0x385f00[0x3][_0x5a05('12')](/ts=(\S*)/)[0x1];a=_0x385f00[0x4][_0x5a05('12')](/a=(\S*)/)[0x1];t=_0x385f00[0x5][_0x5a05('12')](/t=(\S*)/)[0x1];deviceid=_0x385f00[0x7][_0x5a05('12')](/deviceid=(\S*)/)[0x1];if(!soy_sqq_UA){soy_sqq_UA=_0x5a05('13');}$[_0x5a05('14')]=i+0x1;await implement();};if(notify){if(subTitle){await notify[_0x5a05('15')]($[_0x5a05('16')],subTitle);}}})()[_0x5a05('17')](_0x41cbf0=>$[_0x5a05('18')](_0x41cbf0))[_0x5a05('19')](()=>$[_0x5a05('1a')]());async function implement(){console[_0x5a05('1')](_0x5a05('1b')+$[_0x5a05('14')]+_0x5a05('1c'));await VideoApi();}function VideoApi(){let _0x1e1415=Post_request(_0x5a05('1d'),_0x5a05('1e')+d+_0x5a05('1f')+s+_0x5a05('20')+ts+_0x5a05('21')+a+_0x5a05('22')+t+_0x5a05('23')+deviceid);return new Promise((_0x3d463e,_0x4cbe10)=>{$[_0x5a05('24')](_0x1e1415,async(_0x51f276,_0x4b1a8e,_0x3e4c54)=>{try{if(_0x51f276){console[_0x5a05('1')](_0x5a05('25')+$[_0x5a05('14')]+_0x5a05('26'));subTitle+=_0x5a05('25')+$[_0x5a05('14')]+_0x5a05('26');}else{let _0x46ee4b=JSON[_0x5a05('27')](_0x3e4c54);if(_0x46ee4b['\x53']==0x1){if(_0x46ee4b['\x44'][0x0][_0x5a05('28')]==0x0){await get_VideoApi(_0x46ee4b['\x44'][0x0]['\x69\x64'],_0x46ee4b['\x44'][0x0][_0x5a05('29')]);}if(_0x46ee4b['\x44'][0x1][_0x5a05('28')]!=0x3&&_0x46ee4b['\x44'][0x0][_0x5a05('28')]==0x1){await get_VideoApi(_0x46ee4b['\x44'][0x1]['\x69\x64'],_0x46ee4b['\x44'][0x1][_0x5a05('29')]);}if(_0x46ee4b['\x44'][0x2][_0x5a05('28')]!=0x3&&_0x46ee4b['\x44'][0x1][_0x5a05('28')]==0x3){await get_VideoApi(_0x46ee4b['\x44'][0x2]['\x69\x64'],_0x46ee4b['\x44'][0x2][_0x5a05('29')]);}if(_0x46ee4b['\x44'][0x3][_0x5a05('28')]!=0x3&&_0x46ee4b['\x44'][0x2][_0x5a05('28')]==0x3){await get_VideoApi(_0x46ee4b['\x44'][0x3]['\x69\x64'],_0x46ee4b['\x44'][0x3][_0x5a05('29')]);}if(_0x46ee4b['\x44'][0x4][_0x5a05('28')]!=0x3&&_0x46ee4b['\x44'][0x3][_0x5a05('28')]){await get_VideoApi(_0x46ee4b['\x44'][0x4]['\x69\x64'],_0x46ee4b['\x44'][0x4][_0x5a05('29')]);}if(_0x46ee4b['\x44'][0x5][_0x5a05('28')]!=0x3&&_0x46ee4b['\x44'][0x4][_0x5a05('28')]){await get_VideoApi(_0x46ee4b['\x44'][0x5]['\x69\x64'],_0x46ee4b['\x44'][0x5][_0x5a05('29')]);}}else{console[_0x5a05('1')](_0x5a05('25')+$[_0x5a05('14')]+_0x5a05('2a')+_0x46ee4b['\x4d']);}}}catch(_0x9b2a15){console[_0x5a05('1')](_0x9b2a15,_0x4b1a8e);}finally{_0x3d463e();}});});}function get_VideoApi(_0x456a28,_0x3250e0){let _0x4253e5=Post_request(_0x5a05('1d'),_0x5a05('2b')+_0x456a28+_0x5a05('2c')+s+_0x5a05('20')+ts+_0x5a05('21')+a+_0x5a05('22')+t+_0x5a05('2d')+deviceid);return new Promise((_0x2e3493,_0x1ca460)=>{$[_0x5a05('24')](_0x4253e5,async(_0x481c74,_0xfa8f15,_0x5524af)=>{try{if(_0x481c74){console[_0x5a05('1')](_0x5a05('25')+$[_0x5a05('14')]+'\x20'+_0x3250e0+_0x5a05('2e'));subTitle+=_0x5a05('25')+$[_0x5a05('14')]+'\x20'+_0x3250e0+_0x5a05('2e');}else{let _0x33e24e=JSON[_0x5a05('27')](_0x5524af);if(_0x33e24e['\x53']==0x1){if(_0x33e24e['\x44'][_0x5a05('2f')]=='\x30'){console[_0x5a05('1')](_0x5a05('25')+$[_0x5a05('14')]+'\x20'+_0x3250e0+_0x5a05('30')+_0x33e24e['\x44'][_0x5a05('31')]);await $[_0x5a05('32')](Math[_0x5a05('33')](Math[_0x5a05('34')]()*(0x1388-0xbb8+0x3e8)+0xbb8));await VideoApi();}else if(_0x33e24e['\x53']==0xf4240){console[_0x5a05('1')](_0x5a05('25')+$[_0x5a05('14')]+'\x20'+_0x3250e0+_0x5a05('30')+_0x33e24e['\x44'][_0x5a05('31')]+_0x5a05('35')+_0x33e24e['\x44'][_0x5a05('2f')]+'\x20\u5143');}}else{console[_0x5a05('1')](_0x5a05('25')+$[_0x5a05('14')]+'\x20'+_0x3250e0+_0x5a05('30')+_0x33e24e['\x4d']);}}}catch(_0x2b772f){console[_0x5a05('1')](_0x2b772f,_0xfa8f15);}finally{_0x2e3493();}});});}function Post_request(_0x1e3dbf,_0x53002a){return{'\x75\x72\x6c':_0x5a05('36')+_0x1e3dbf,'\x68\x65\x61\x64\x65\x72\x73':{'user-agent':_0x5a05('37'),'Content-Type':_0x5a05('38'),'Content-Length':_0x53002a[_0x5a05('10')],'Host':_0x5a05('39'),'Connection':_0x5a05('3a'),'Accept-Encoding':_0x5a05('3b')},'\x62\x6f\x64\x79':_0x53002a};};function Get_request(_0x3eb04f){return{'\x75\x72\x6c':''+host+_0x3eb04f,'\x68\x65\x61\x64\x65\x72\x73':{'Host':_0x5a05('3c'),'content-type':_0x5a05('38'),'content-length':0x0,'accept-encoding':_0x5a05('3b'),'user-agent':_0x5a05('3d')}};};function getCurrentTime(){let _0x183a68=new Date();let _0x3be298=_0x183a68[_0x5a05('3e')]();let _0x2ea47f=_0x183a68[_0x5a05('3f')]()+0x1;let _0x298fc2=_0x183a68[_0x5a05('40')]();let _0x270c0e=_0x183a68[_0x5a05('41')]();let _0x447981=_0x5a05('42')+_0x5a05('43')[_0x5a05('44')](_0x183a68[_0x5a05('41')]());let _0x50a98e=_0x183a68[_0x5a05('45')]();let _0x7325e8=_0x183a68[_0x5a05('46')]();let _0x4b0855=_0x183a68[_0x5a05('47')]();let _0x4a9fef=_0x183a68[_0x5a05('48')]();if(_0x2ea47f<0xa){_0x2ea47f='\x30'+_0x2ea47f;}if(_0x298fc2<0xa){_0x298fc2='\x30'+_0x298fc2;}if(_0x50a98e<0xa){_0x50a98e='\x30'+_0x50a98e;}if(_0x7325e8<0xa){_0x7325e8='\x30'+_0x7325e8;}if(_0x4b0855<0xa){_0x4b0855='\x30'+_0x4b0855;}if(_0x4a9fef<0xa){_0x4a9fef='\x30\x30'+_0x4a9fef;}else if(_0x4a9fef<0x64){_0x4a9fef='\x30'+_0x4a9fef;}return _0x3be298+'\x2d'+_0x2ea47f+'\x2d'+_0x298fc2+'\x20'+_0x50a98e+'\x3a'+_0x7325e8+'\x3a'+_0x4b0855;}function MD5_Encrypt(_0x23da6b){function _0x36e28b(_0x23da6b,_0x36e28b){return _0x23da6b<<_0x36e28b|_0x23da6b>>>0x20-_0x36e28b;}function _0x46ac4f(_0x23da6b,_0x36e28b){var _0x46ac4f,_0x493066,_0x39c5b8,_0x403f54,_0xc04e5;return _0x39c5b8=0x80000000&_0x23da6b,_0x403f54=0x80000000&_0x36e28b,_0x46ac4f=0x40000000&_0x23da6b,_0x493066=0x40000000&_0x36e28b,_0xc04e5=(0x3fffffff&_0x23da6b)+(0x3fffffff&_0x36e28b),_0x46ac4f&_0x493066?0x80000000^_0xc04e5^_0x39c5b8^_0x403f54:_0x46ac4f|_0x493066?0x40000000&_0xc04e5?0xc0000000^_0xc04e5^_0x39c5b8^_0x403f54:0x40000000^_0xc04e5^_0x39c5b8^_0x403f54:_0xc04e5^_0x39c5b8^_0x403f54;}function _0x3f1c35(_0x23da6b,_0x36e28b,_0x46ac4f){return _0x23da6b&_0x36e28b|~_0x23da6b&_0x46ac4f;}function _0x31b347(_0x23da6b,_0x36e28b,_0x46ac4f){return _0x23da6b&_0x46ac4f|_0x36e28b&~_0x46ac4f;}function _0x1c37c6(_0x23da6b,_0x36e28b,_0x46ac4f){return _0x23da6b^_0x36e28b^_0x46ac4f;}function _0x2f435e(_0x23da6b,_0x36e28b,_0x46ac4f){return _0x36e28b^(_0x23da6b|~_0x46ac4f);}function _0x4d9245(_0x23da6b,_0x31b347,_0x1c37c6,_0x2f435e,_0x4d9245,_0x2458cb,_0x3e787d){return _0x23da6b=_0x46ac4f(_0x23da6b,_0x46ac4f(_0x46ac4f(_0x3f1c35(_0x31b347,_0x1c37c6,_0x2f435e),_0x4d9245),_0x3e787d)),_0x46ac4f(_0x36e28b(_0x23da6b,_0x2458cb),_0x31b347);}function _0x237270(_0x23da6b,_0x3f1c35,_0x1c37c6,_0x2f435e,_0x4d9245,_0x237270,_0x51934b){return _0x23da6b=_0x46ac4f(_0x23da6b,_0x46ac4f(_0x46ac4f(_0x31b347(_0x3f1c35,_0x1c37c6,_0x2f435e),_0x4d9245),_0x51934b)),_0x46ac4f(_0x36e28b(_0x23da6b,_0x237270),_0x3f1c35);}function _0x1a5cec(_0x23da6b,_0x3f1c35,_0x31b347,_0x2f435e,_0x4d9245,_0x237270,_0x1a5cec){return _0x23da6b=_0x46ac4f(_0x23da6b,_0x46ac4f(_0x46ac4f(_0x1c37c6(_0x3f1c35,_0x31b347,_0x2f435e),_0x4d9245),_0x1a5cec)),_0x46ac4f(_0x36e28b(_0x23da6b,_0x237270),_0x3f1c35);}function _0x30e220(_0x23da6b,_0x3f1c35,_0x31b347,_0x1c37c6,_0x4d9245,_0x237270,_0x1a5cec){return _0x23da6b=_0x46ac4f(_0x23da6b,_0x46ac4f(_0x46ac4f(_0x2f435e(_0x3f1c35,_0x31b347,_0x1c37c6),_0x4d9245),_0x1a5cec)),_0x46ac4f(_0x36e28b(_0x23da6b,_0x237270),_0x3f1c35);}function _0x4ffc8a(_0x23da6b){for(var _0x36e28b,_0x46ac4f=_0x23da6b[_0x5a05('10')],_0x3f1c35=_0x46ac4f+0x8,_0x31b347=(_0x3f1c35-_0x3f1c35%0x40)/0x40,_0x1c37c6=0x10*(_0x31b347+0x1),_0x2f435e=new Array(_0x1c37c6-0x1),_0x4d9245=0x0,_0x237270=0x0;_0x46ac4f>_0x237270;)_0x36e28b=(_0x237270-_0x237270%0x4)/0x4,_0x4d9245=_0x237270%0x4*0x8,_0x2f435e[_0x36e28b]=_0x2f435e[_0x36e28b]|_0x23da6b[_0x5a05('49')](_0x237270)<<_0x4d9245,_0x237270++;return _0x36e28b=(_0x237270-_0x237270%0x4)/0x4,_0x4d9245=_0x237270%0x4*0x8,_0x2f435e[_0x36e28b]=_0x2f435e[_0x36e28b]|0x80<<_0x4d9245,_0x2f435e[_0x1c37c6-0x2]=_0x46ac4f<<0x3,_0x2f435e[_0x1c37c6-0x1]=_0x46ac4f>>>0x1d,_0x2f435e;}function _0x31f27c(_0x23da6b){var _0x36e28b,_0x46ac4f,_0x3f1c35='',_0x31b347='';for(_0x46ac4f=0x0;0x3>=_0x46ac4f;_0x46ac4f++)_0x36e28b=_0x23da6b>>>0x8*_0x46ac4f&0xff,_0x31b347='\x30'+_0x36e28b[_0x5a05('4a')](0x10),_0x3f1c35+=_0x31b347[_0x5a05('4b')](_0x31b347[_0x5a05('10')]-0x2,0x2);return _0x3f1c35;}function _0x50c7b5(_0x23da6b){_0x23da6b=_0x23da6b[_0x5a05('4c')](/\r\n/g,'\x0a');for(var _0x36e28b='',_0x46ac4f=0x0;_0x46ac4f<_0x23da6b[_0x5a05('10')];_0x46ac4f++){var _0x3f1c35=_0x23da6b[_0x5a05('49')](_0x46ac4f);0x80>_0x3f1c35?_0x36e28b+=String[_0x5a05('4d')](_0x3f1c35):_0x3f1c35>0x7f&&0x800>_0x3f1c35?(_0x36e28b+=String[_0x5a05('4d')](_0x3f1c35>>0x6|0xc0),_0x36e28b+=String[_0x5a05('4d')](0x3f&_0x3f1c35|0x80)):(_0x36e28b+=String[_0x5a05('4d')](_0x3f1c35>>0xc|0xe0),_0x36e28b+=String[_0x5a05('4d')](_0x3f1c35>>0x6&0x3f|0x80),_0x36e28b+=String[_0x5a05('4d')](0x3f&_0x3f1c35|0x80));}return _0x36e28b;}var _0xa7af8c,_0x133c63,_0x3da72b,_0x35bea3,_0x1ea1dc,_0x416133,_0x447a2b,_0x223e08,_0x45e86e,_0x50b7c2=[],_0x56a374=0x7,_0x630737=0xc,_0x3b8a54=0x11,_0x32c0d3=0x16,_0x5d160d=0x5,_0x53125a=0x9,_0x402fa0=0xe,_0x197b52=0x14,_0x5b9467=0x4,_0x332a85=0xb,_0x51c50b=0x10,_0x13cd7b=0x17,_0x74ff38=0x6,_0xef5044=0xa,_0x33c49c=0xf,_0x502d43=0x15;for(_0x23da6b=_0x50c7b5(_0x23da6b),_0x50b7c2=_0x4ffc8a(_0x23da6b),_0x416133=0x67452301,_0x447a2b=0xefcdab89,_0x223e08=0x98badcfe,_0x45e86e=0x10325476,_0xa7af8c=0x0;_0xa7af8c<_0x50b7c2[_0x5a05('10')];_0xa7af8c+=0x10)_0x133c63=_0x416133,_0x3da72b=_0x447a2b,_0x35bea3=_0x223e08,_0x1ea1dc=_0x45e86e,_0x416133=_0x4d9245(_0x416133,_0x447a2b,_0x223e08,_0x45e86e,_0x50b7c2[_0xa7af8c+0x0],_0x56a374,0xd76aa478),_0x45e86e=_0x4d9245(_0x45e86e,_0x416133,_0x447a2b,_0x223e08,_0x50b7c2[_0xa7af8c+0x1],_0x630737,0xe8c7b756),_0x223e08=_0x4d9245(_0x223e08,_0x45e86e,_0x416133,_0x447a2b,_0x50b7c2[_0xa7af8c+0x2],_0x3b8a54,0x242070db),_0x447a2b=_0x4d9245(_0x447a2b,_0x223e08,_0x45e86e,_0x416133,_0x50b7c2[_0xa7af8c+0x3],_0x32c0d3,0xc1bdceee),_0x416133=_0x4d9245(_0x416133,_0x447a2b,_0x223e08,_0x45e86e,_0x50b7c2[_0xa7af8c+0x4],_0x56a374,0xf57c0faf),_0x45e86e=_0x4d9245(_0x45e86e,_0x416133,_0x447a2b,_0x223e08,_0x50b7c2[_0xa7af8c+0x5],_0x630737,0x4787c62a),_0x223e08=_0x4d9245(_0x223e08,_0x45e86e,_0x416133,_0x447a2b,_0x50b7c2[_0xa7af8c+0x6],_0x3b8a54,0xa8304613),_0x447a2b=_0x4d9245(_0x447a2b,_0x223e08,_0x45e86e,_0x416133,_0x50b7c2[_0xa7af8c+0x7],_0x32c0d3,0xfd469501),_0x416133=_0x4d9245(_0x416133,_0x447a2b,_0x223e08,_0x45e86e,_0x50b7c2[_0xa7af8c+0x8],_0x56a374,0x698098d8),_0x45e86e=_0x4d9245(_0x45e86e,_0x416133,_0x447a2b,_0x223e08,_0x50b7c2[_0xa7af8c+0x9],_0x630737,0x8b44f7af),_0x223e08=_0x4d9245(_0x223e08,_0x45e86e,_0x416133,_0x447a2b,_0x50b7c2[_0xa7af8c+0xa],_0x3b8a54,0xffff5bb1),_0x447a2b=_0x4d9245(_0x447a2b,_0x223e08,_0x45e86e,_0x416133,_0x50b7c2[_0xa7af8c+0xb],_0x32c0d3,0x895cd7be),_0x416133=_0x4d9245(_0x416133,_0x447a2b,_0x223e08,_0x45e86e,_0x50b7c2[_0xa7af8c+0xc],_0x56a374,0x6b901122),_0x45e86e=_0x4d9245(_0x45e86e,_0x416133,_0x447a2b,_0x223e08,_0x50b7c2[_0xa7af8c+0xd],_0x630737,0xfd987193),_0x223e08=_0x4d9245(_0x223e08,_0x45e86e,_0x416133,_0x447a2b,_0x50b7c2[_0xa7af8c+0xe],_0x3b8a54,0xa679438e),_0x447a2b=_0x4d9245(_0x447a2b,_0x223e08,_0x45e86e,_0x416133,_0x50b7c2[_0xa7af8c+0xf],_0x32c0d3,0x49b40821),_0x416133=_0x237270(_0x416133,_0x447a2b,_0x223e08,_0x45e86e,_0x50b7c2[_0xa7af8c+0x1],_0x5d160d,0xf61e2562),_0x45e86e=_0x237270(_0x45e86e,_0x416133,_0x447a2b,_0x223e08,_0x50b7c2[_0xa7af8c+0x6],_0x53125a,0xc040b340),_0x223e08=_0x237270(_0x223e08,_0x45e86e,_0x416133,_0x447a2b,_0x50b7c2[_0xa7af8c+0xb],_0x402fa0,0x265e5a51),_0x447a2b=_0x237270(_0x447a2b,_0x223e08,_0x45e86e,_0x416133,_0x50b7c2[_0xa7af8c+0x0],_0x197b52,0xe9b6c7aa),_0x416133=_0x237270(_0x416133,_0x447a2b,_0x223e08,_0x45e86e,_0x50b7c2[_0xa7af8c+0x5],_0x5d160d,0xd62f105d),_0x45e86e=_0x237270(_0x45e86e,_0x416133,_0x447a2b,_0x223e08,_0x50b7c2[_0xa7af8c+0xa],_0x53125a,0x2441453),_0x223e08=_0x237270(_0x223e08,_0x45e86e,_0x416133,_0x447a2b,_0x50b7c2[_0xa7af8c+0xf],_0x402fa0,0xd8a1e681),_0x447a2b=_0x237270(_0x447a2b,_0x223e08,_0x45e86e,_0x416133,_0x50b7c2[_0xa7af8c+0x4],_0x197b52,0xe7d3fbc8),_0x416133=_0x237270(_0x416133,_0x447a2b,_0x223e08,_0x45e86e,_0x50b7c2[_0xa7af8c+0x9],_0x5d160d,0x21e1cde6),_0x45e86e=_0x237270(_0x45e86e,_0x416133,_0x447a2b,_0x223e08,_0x50b7c2[_0xa7af8c+0xe],_0x53125a,0xc33707d6),_0x223e08=_0x237270(_0x223e08,_0x45e86e,_0x416133,_0x447a2b,_0x50b7c2[_0xa7af8c+0x3],_0x402fa0,0xf4d50d87),_0x447a2b=_0x237270(_0x447a2b,_0x223e08,_0x45e86e,_0x416133,_0x50b7c2[_0xa7af8c+0x8],_0x197b52,0x455a14ed),_0x416133=_0x237270(_0x416133,_0x447a2b,_0x223e08,_0x45e86e,_0x50b7c2[_0xa7af8c+0xd],_0x5d160d,0xa9e3e905),_0x45e86e=_0x237270(_0x45e86e,_0x416133,_0x447a2b,_0x223e08,_0x50b7c2[_0xa7af8c+0x2],_0x53125a,0xfcefa3f8),_0x223e08=_0x237270(_0x223e08,_0x45e86e,_0x416133,_0x447a2b,_0x50b7c2[_0xa7af8c+0x7],_0x402fa0,0x676f02d9),_0x447a2b=_0x237270(_0x447a2b,_0x223e08,_0x45e86e,_0x416133,_0x50b7c2[_0xa7af8c+0xc],_0x197b52,0x8d2a4c8a),_0x416133=_0x1a5cec(_0x416133,_0x447a2b,_0x223e08,_0x45e86e,_0x50b7c2[_0xa7af8c+0x5],_0x5b9467,0xfffa3942),_0x45e86e=_0x1a5cec(_0x45e86e,_0x416133,_0x447a2b,_0x223e08,_0x50b7c2[_0xa7af8c+0x8],_0x332a85,0x8771f681),_0x223e08=_0x1a5cec(_0x223e08,_0x45e86e,_0x416133,_0x447a2b,_0x50b7c2[_0xa7af8c+0xb],_0x51c50b,0x6d9d6122),_0x447a2b=_0x1a5cec(_0x447a2b,_0x223e08,_0x45e86e,_0x416133,_0x50b7c2[_0xa7af8c+0xe],_0x13cd7b,0xfde5380c),_0x416133=_0x1a5cec(_0x416133,_0x447a2b,_0x223e08,_0x45e86e,_0x50b7c2[_0xa7af8c+0x1],_0x5b9467,0xa4beea44),_0x45e86e=_0x1a5cec(_0x45e86e,_0x416133,_0x447a2b,_0x223e08,_0x50b7c2[_0xa7af8c+0x4],_0x332a85,0x4bdecfa9),_0x223e08=_0x1a5cec(_0x223e08,_0x45e86e,_0x416133,_0x447a2b,_0x50b7c2[_0xa7af8c+0x7],_0x51c50b,0xf6bb4b60),_0x447a2b=_0x1a5cec(_0x447a2b,_0x223e08,_0x45e86e,_0x416133,_0x50b7c2[_0xa7af8c+0xa],_0x13cd7b,0xbebfbc70),_0x416133=_0x1a5cec(_0x416133,_0x447a2b,_0x223e08,_0x45e86e,_0x50b7c2[_0xa7af8c+0xd],_0x5b9467,0x289b7ec6),_0x45e86e=_0x1a5cec(_0x45e86e,_0x416133,_0x447a2b,_0x223e08,_0x50b7c2[_0xa7af8c+0x0],_0x332a85,0xeaa127fa),_0x223e08=_0x1a5cec(_0x223e08,_0x45e86e,_0x416133,_0x447a2b,_0x50b7c2[_0xa7af8c+0x3],_0x51c50b,0xd4ef3085),_0x447a2b=_0x1a5cec(_0x447a2b,_0x223e08,_0x45e86e,_0x416133,_0x50b7c2[_0xa7af8c+0x6],_0x13cd7b,0x4881d05),_0x416133=_0x1a5cec(_0x416133,_0x447a2b,_0x223e08,_0x45e86e,_0x50b7c2[_0xa7af8c+0x9],_0x5b9467,0xd9d4d039),_0x45e86e=_0x1a5cec(_0x45e86e,_0x416133,_0x447a2b,_0x223e08,_0x50b7c2[_0xa7af8c+0xc],_0x332a85,0xe6db99e5),_0x223e08=_0x1a5cec(_0x223e08,_0x45e86e,_0x416133,_0x447a2b,_0x50b7c2[_0xa7af8c+0xf],_0x51c50b,0x1fa27cf8),_0x447a2b=_0x1a5cec(_0x447a2b,_0x223e08,_0x45e86e,_0x416133,_0x50b7c2[_0xa7af8c+0x2],_0x13cd7b,0xc4ac5665),_0x416133=_0x30e220(_0x416133,_0x447a2b,_0x223e08,_0x45e86e,_0x50b7c2[_0xa7af8c+0x0],_0x74ff38,0xf4292244),_0x45e86e=_0x30e220(_0x45e86e,_0x416133,_0x447a2b,_0x223e08,_0x50b7c2[_0xa7af8c+0x7],_0xef5044,0x432aff97),_0x223e08=_0x30e220(_0x223e08,_0x45e86e,_0x416133,_0x447a2b,_0x50b7c2[_0xa7af8c+0xe],_0x33c49c,0xab9423a7),_0x447a2b=_0x30e220(_0x447a2b,_0x223e08,_0x45e86e,_0x416133,_0x50b7c2[_0xa7af8c+0x5],_0x502d43,0xfc93a039),_0x416133=_0x30e220(_0x416133,_0x447a2b,_0x223e08,_0x45e86e,_0x50b7c2[_0xa7af8c+0xc],_0x74ff38,0x655b59c3),_0x45e86e=_0x30e220(_0x45e86e,_0x416133,_0x447a2b,_0x223e08,_0x50b7c2[_0xa7af8c+0x3],_0xef5044,0x8f0ccc92),_0x223e08=_0x30e220(_0x223e08,_0x45e86e,_0x416133,_0x447a2b,_0x50b7c2[_0xa7af8c+0xa],_0x33c49c,0xffeff47d),_0x447a2b=_0x30e220(_0x447a2b,_0x223e08,_0x45e86e,_0x416133,_0x50b7c2[_0xa7af8c+0x1],_0x502d43,0x85845dd1),_0x416133=_0x30e220(_0x416133,_0x447a2b,_0x223e08,_0x45e86e,_0x50b7c2[_0xa7af8c+0x8],_0x74ff38,0x6fa87e4f),_0x45e86e=_0x30e220(_0x45e86e,_0x416133,_0x447a2b,_0x223e08,_0x50b7c2[_0xa7af8c+0xf],_0xef5044,0xfe2ce6e0),_0x223e08=_0x30e220(_0x223e08,_0x45e86e,_0x416133,_0x447a2b,_0x50b7c2[_0xa7af8c+0x6],_0x33c49c,0xa3014314),_0x447a2b=_0x30e220(_0x447a2b,_0x223e08,_0x45e86e,_0x416133,_0x50b7c2[_0xa7af8c+0xd],_0x502d43,0x4e0811a1),_0x416133=_0x30e220(_0x416133,_0x447a2b,_0x223e08,_0x45e86e,_0x50b7c2[_0xa7af8c+0x4],_0x74ff38,0xf7537e82),_0x45e86e=_0x30e220(_0x45e86e,_0x416133,_0x447a2b,_0x223e08,_0x50b7c2[_0xa7af8c+0xb],_0xef5044,0xbd3af235),_0x223e08=_0x30e220(_0x223e08,_0x45e86e,_0x416133,_0x447a2b,_0x50b7c2[_0xa7af8c+0x2],_0x33c49c,0x2ad7d2bb),_0x447a2b=_0x30e220(_0x447a2b,_0x223e08,_0x45e86e,_0x416133,_0x50b7c2[_0xa7af8c+0x9],_0x502d43,0xeb86d391),_0x416133=_0x46ac4f(_0x416133,_0x133c63),_0x447a2b=_0x46ac4f(_0x447a2b,_0x3da72b),_0x223e08=_0x46ac4f(_0x223e08,_0x35bea3),_0x45e86e=_0x46ac4f(_0x45e86e,_0x1ea1dc);var _0x40e5fc=_0x31f27c(_0x416133)+_0x31f27c(_0x447a2b)+_0x31f27c(_0x223e08)+_0x31f27c(_0x45e86e);return _0x40e5fc[_0x5a05('4e')]();};_0xodS='jsjiami.com.v6';




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
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = (new Date).getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`)
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
        i = i ? i.replace(/\n/g, "").trim() : i;
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
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t), r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e
        } catch (t) {
          e = ""
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
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, ((new Date).getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));
      return t
    }
    msg(e = t, s = "", i = "", r) {
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
      let h = ["", "==============\ud83d\udce3\u7cfb\u7edf\u901a\u77e5\ud83d\udce3=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h)
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator))
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t)
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t))
    }
    done(t = {}) {
      const e = (new Date).getTime(),
        s = (e - this.startTime) / 1e3;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t)
    }
  }(t, e)
}