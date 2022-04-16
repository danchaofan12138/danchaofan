;
const $ = new Env("酷狗大字版");
let status;
status = (status = $["getval"]("kugoustatus") || "1") > 1 ? "" + status : "";
let kugouurlArr = [],
    kugoucount = "";
let kugouurl = ($["isNode"]() ? process["env"]["kugouurl"] : $["getdata"]("kugouurl")) || "";
let uuid = "",
    clientver = "",
    dfid = "",
    token = "",
    userid = "",
    taskid = "",
    mid = "",
    kugousign = "",
    kgfb = "3600";
let invitecode='';
//let invitecode='D6477F';
let rwid = ["1", "3", "4", "9", "12", "14", "15", "21", "29", "30", "33", "34", "35", "36", "37", "41", "43", "44", "46", "48", "49", "50", "56", "57", "58", "59", "60", "61", "62", "68", "69", "70", "71", "72", "74", "75"];
!(async () => {
  var _0x1725f7 = {};

  if (typeof $request !== "undefined") {
    await kugouck();
  } else {
    kugouurlArr = kugouurl["split"]("@");
    console["log"]("------------- 共" + kugouurlArr["length"] + "个账号-------------\n");

    for (let _0x1cede6 = 0; _0x1cede6 < kugouurlArr["length"]; _0x1cede6++) {
      kugouurl = kugouurlArr[_0x1cede6];
      $["index"] = _0x1cede6 + 1;
      console["log"]("\n开始【酷狗大字版" + $["index"] + "】");
      token = kugouurl["match"](/token=(\w+)/)[1];
      userid = kugouurl["match"](/userid=(\w+)/)[1];
      await kugoudl();
      await kugouxx();
      await kugoutg();
      await kugouyq();
      await $["wait"](1000);
      await kugousp();

      for (let _0x141284 = 0; _0x141284 < rwid["length"]; _0x141284++) {
        console["log"]("\n酷狗大字版执行任务ID:" + rwid[_0x141284]);
        taskid = rwid[_0x141284];
        await $["wait"](500);
        await kugourw();
      }
    }
  }
})()["catch"](_0x38a3b7 => $["logErr"](_0x38a3b7))["finally"](() => $["done"]());

function kugouck() {
  var _0x4722ab = {};

  if ($request["url"]["indexOf"]("article/list") > -1) {
    const _0x39b711 = JSON["stringify"]($request["body"]);

    if (_0x39b711) $["setdata"](_0x39b711, "kugouurl" + status);
    $["log"](_0x39b711);
    $["msg"]($["name"], "", "" + ("" + status) + "token获取成功！");
  }
}

function kugoudl(_0x4c62c6 = 0) {
  var _0x2d6a38 = {};
  return new Promise(_0x4070f7 => {
    var _0x339466 = {};

    let _0x483784 = Math["round"](new Date()["getTime"]() / 1000)["toString"]();

    kugousign = md5("OdwECfmgDSiXVrkR3JURLNDhvhZF4w6fappid=3166channel=47clienttime=" + _0x483784 + "clientver=21806dfid=" + dfid + "from=clientmid=" + mid + "token=" + token + "userid=" + userid + "uuid=" + uuid + "OdwECfmgDSiXVrkR3JURLNDhvhZF4w6f");
    let _0x1efaca = {
      "url": "https://gateway.kugou.com/v1/incentive/profile?signature=" + kugousign + "&userid=" + userid + "&clienttime=" + _0x483784 + "&mid=" + mid + "&token=" + token + "&uuid=" + uuid + "&channel=47&dfid=" + dfid + "&clientver=21806&appid=3166&from=client",
      "headers": {
        "KG-THash": "64f74cd",
        "TmeAb-Olexp": "1,31",
        "Accept-Encoding": "gzip, deflate",
        "x-router": " elder.kugou.com",
        "User-Agent": "Android10-1080-21806-47-0-kugou-wifi",
        "KG-RC": "1",
        "Host": "gateway.kugou.com",
        "Connection": "Keep-Alive"
      }
    };
    $["get"](_0x1efaca, async (_0x5d62e2, _0x2dfc6f, _0x32ccfc) => {
      var _0x73b7dd = {
        "ejBDV": function (_0x4b697f) {
          return _0x4b697f();
        }
      };

      try {
        const _0x51bbfd = JSON["parse"](_0x32ccfc);

        if (_0x51bbfd["errcode"] == 0) {
          $["log"]("\n酷狗大字版登录成功");
        } else {
          $["log"]("\n酷狗大字版登录失败");
        }
      } catch (_0x5b24b0) {} finally {
        _0x4070f7();
      }
    }, _0x4c62c6);
  });
}

function kugouxx(_0x27d677 = 0) {
  var _0x3d6f35 = {};
  return new Promise(_0x53f523 => {
    var _0x38f15f = {};

    let _0x4619a9 = Math["round"](new Date()["getTime"]() / 1000)["toString"]();

    kugousign = md5("OdwECfmgDSiXVrkR3JURLNDhvhZF4w6fappid=3166channel=47clienttime=" + _0x4619a9 + "clientver=21806dfid=" + dfid + "from=clientmid=" + mid + "token=" + token + "userid=" + userid + "uuid=" + uuid + "OdwECfmgDSiXVrkR3JURLNDhvhZF4w6f");
    let _0x2ef94e = {
      "url": "https://gateway.kugou.com/v1/incentive/user_info?signature=" + kugousign + "&userid=" + userid + "&clienttime=" + _0x4619a9 + "&mid=" + mid + "&token=" + token + "&uuid=" + uuid + "&channel=47&dfid=" + dfid + "&clientver=21806&appid=3166&from=client",
      "headers": {
        "KG-THash": "64f74cd",
        "TmeAb-Olexp": "1,31",
        "Accept-Encoding": "gzip, deflate",
        "x-router": " elder.kugou.com",
        "User-Agent": "Android10-1080-21806-47-0-kugou-wifi",
        "KG-RC": "1",
        "Host": "gateway.kugou.com",
        "Connection": "Keep-Alive"
      }
    };
    $["get"](_0x2ef94e, async (_0x53eb10, _0x32047c, _0x475cf7) => {
      var _0x3b897c = {
        "mCGKV": function (_0xcc6666) {
          return _0xcc6666();
        }
      };

      try {
        const _0x3ff0b3 = JSON["parse"](_0x475cf7);

        if (_0x3ff0b3["errcode"] == 0) {
          $["log"]("\n酷狗大字版用户：【" + _0x3ff0b3["data"]["nickname"] + "】已登录：" + _0x3ff0b3["data"]["spare_login_count"] + "天，余额:【" + _0x3ff0b3["data"]["coins"] + "】金币");
        } else {
          $["log"]("\n酷狗大字版用户:" + _0x3ff0b3["error"]);
        }
      } catch (_0x1e3dc5) {} finally {
        _0x53f523();
      }
    }, _0x27d677);
  });
}

function kugourw(_0x3a541b = 0) {
  var _0x136811 = {};
  return new Promise(_0x53b614 => {
    let _0x4d8dbf = Math["round"](new Date()["getTime"]() / 1000)["toString"]();

    kugousign = md5("OdwECfmgDSiXVrkR3JURLNDhvhZF4w6fappid=3166channel=47clienttime=" + _0x4d8dbf + "clientver=21806code=dfid=" + dfid + "from=clientis_hit_new_coins_logic=0mid=" + mid + "source=clienttaskid=" + taskid + "time_length=0token=" + token + "userid=" + userid + "uuid=" + uuid + "OdwECfmgDSiXVrkR3JURLNDhvhZF4w6f");
    let _0x556631 = {
      "url": "https://gateway.kugou.com/v1/incentive/task_submit?source=client&uuid=" + uuid + "&code=&signature=" + kugousign + "&clientver=21806&dfid=" + dfid + "&clienttime=" + _0x4d8dbf + "&token=" + token + "&is_hit_new_coins_logic=0&userid=" + userid + "&taskid=" + taskid + "&time_length=0&channel=47&from=client&appid=3166&mid=" + mid,
      "headers": {
        "KG-THash": "64f74cd",
        "TmeAb-Olexp": "1,31",
        "Accept-Encoding": "gzip, deflate",
        "x-router": " elder.kugou.com",
        "User-Agent": "Android10-1080-21806-47-0-kugou-wifi",
        "KG-RC": "1",
        "Host": "gateway.kugou.com",
        "Connection": "Keep-Alive"
      }
    };
    $["get"](_0x556631, async (_0x109141, _0x29d34d, _0x3f6d80) => {
      try {
        const _0xaeff9f = JSON["parse"](_0x3f6d80);

        if (_0xaeff9f["errcode"] == 0) {
          $["log"]("\n酷狗大字版【任务ID" + taskid + "】获得:" + _0xaeff9f["data"]["awards"]["coins"] + "金币");
          await $["wait"](10000);
          await kugourw();
        } else {
          $["log"]("\n酷狗大字版【任务ID" + taskid + "】:" + _0xaeff9f["error"]);
        }
      } catch (_0xa2afb5) {} finally {
        _0x53b614();
      }
    }, _0x3a541b);
  });
}

function kugoutg(_0x40a44e = 0) {
  var _0xa7fdd0 = {};
  return new Promise(_0x41d5e3 => {
    var _0x5dbda2 = {};

    let _0x24a69b = Math["round"](new Date()["getTime"]() / 1000)["toString"]();

    kugousign = md5("OdwECfmgDSiXVrkR3JURLNDhvhZF4w6fappid=3166clienttime=" + _0x24a69b + "clientver=21806code=dfid=" + dfid + "from=clientmid=" + mid + "taskid=8time_length=" + kgfb + "token=" + token + "userid=" + userid + "uuid=" + uuid + "OdwECfmgDSiXVrkR3JURLNDhvhZF4w6f");
    let _0x254393 = {
      "url": "https://elder.kugou.com/v1/incentive/task_submit?uuid=" + uuid + "&code=&signature=" + kugousign + "&clientver=21806&dfid=" + dfid + "&clienttime=" + _0x24a69b + "&token=" + token + "&userid=" + userid + "&taskid=8&time_length=3600&from=client&appid=3166&mid=" + mid,
      "headers": {
        "KG-THash": "64f74cd",
        "TmeAb-Olexp": "1,31",
        "Accept-Encoding": "gzip, deflate",
        "x-router": " elder.kugou.com",
        "User-Agent": "Android10-1080-21806-47-0-kugou-wifi",
        "KG-RC": "1",
        "Host": "gateway.kugou.com",
        "Connection": "Keep-Alive"
      }
    };
    $["get"](_0x254393, async (_0x58cf3b, _0xfbfda7, _0x3859a1) => {
      try {
        const _0x11f2e3 = JSON["parse"](_0x3859a1);

        if (_0x11f2e3["errcode"] == 0) {
          $["log"]("\n酷狗大字版听歌获得:" + _0x11f2e3["data"]["awards"]["coins"] + "金币");
          await $["wait"](10000);
          await kugoutg();
        } else {
          $["log"]("\n酷狗大字版听歌:" + _0x11f2e3["error"]);
        }
      } catch (_0x5d3b71) {} finally {
        _0x41d5e3();
      }
    }, _0x40a44e);
  });
}

function kugousp(_0x1a0881 = 0) {
  var _0x342ce8 = {};
  return new Promise(_0x574899 => {
    var _0x55fceb = {};

    let _0x115ad2 = Math["round"](new Date()["getTime"]() / 1000)["toString"]();

    kugousign = md5("OdwECfmgDSiXVrkR3JURLNDhvhZF4w6fappid=3166clienttime=" + _0x115ad2 + "clientver=21806code=dfid=" + dfid + "from=clientmid=" + mid + "taskid=7time_length=3600token=" + token + "userid=" + userid + "uuid=" + uuid + "OdwECfmgDSiXVrkR3JURLNDhvhZF4w6f");
    let _0x3e269c = {
      "url": "https://elder.kugou.com/v1/incentive/task_submit?uuid=" + uuid + "&code=&signature=" + kugousign + "&clientver=21806&dfid=" + dfid + "&clienttime=" + _0x115ad2 + "&token=" + token + "&userid=" + userid + "&taskid=7&time_length=3600&from=client&appid=3166&mid=" + mid,
      "headers": {
        "KG-THash": "64f74cd",
        "TmeAb-Olexp": "1,31",
        "Accept-Encoding": "gzip, deflate",
        "x-router": " elder.kugou.com",
        "User-Agent": "Android10-1080-21806-47-0-kugou-wifi",
        "KG-RC": "1",
        "Host": "gateway.kugou.com",
        "Connection": "Keep-Alive"
      }
    };
    $["get"](_0x3e269c, async (_0x212f0f, _0x309c25, _0xad227b) => {
      try {
        const _0x6d12c9 = JSON["parse"](_0xad227b);

        if (_0x6d12c9["errcode"] == 0) {
          $["log"]("\n酷狗大字版看视频获得:" + _0x6d12c9["data"]["awards"]["coins"] + "金币");
        } else {
          $["log"]("\n酷狗大字版看视频:" + _0x6d12c9["error"]);
        }
      } catch (_0x416984) {} finally {
        _0x574899();
      }
    }, _0x1a0881);
  });
}

function kugouyq(_0x3c0218 = 0) {
  var _0x52174c = {};
  return new Promise(_0x1d647b => {
    let _0x5ab7fe = Math["round"](new Date()["getTime"]() / 1000)["toString"]();

    kugousign = md5("OdwECfmgDSiXVrkR3JURLNDhvhZF4w6fappid=3166channel=47clienttime=" + _0x5ab7fe + `clientver=21806code=${invitecode}dfid=` + dfid + "from=clientis_hit_new_coins_logic=0mid=" + mid + "source=clienttaskid=5time_length=0token=" + token + "userid=" + userid + "uuid=" + uuid + "OdwECfmgDSiXVrkR3JURLNDhvhZF4w6f");
    let _0x32d86f = {
      "url": "https://gateway.kugou.com/v1/incentive/task_submit?source=client&uuid=" + uuid + `&code=${invitecode}&signature=` + kugousign + "&clientver=21806&dfid=" + dfid + "&clienttime=" + _0x5ab7fe + "&token=" + token + "&is_hit_new_coins_logic=0&userid=" + userid + "&taskid=5&time_length=0&channel=47&from=client&appid=3166&mid=" + mid,
      "headers": {
        "KG-THash": "64f74cd",
        "TmeAb-Olexp": "1,31",
        "Accept-Encoding": "gzip, deflate",
        "x-router": " elder.kugou.com",
        "User-Agent": "Android10-1080-21806-47-0-kugou-wifi",
        "KG-RC": "1",
        "Host": "gateway.kugou.com",
        "Connection": "Keep-Alive"
      }
    };
    $["get"](_0x32d86f, async (_0x362e43, _0xfd1dd6, _0x59cea6) => {
      try {} catch (_0x493b1e) {} finally {
        _0x1d647b();
      }
    }, _0x3c0218);
  });
}

function md5(_0x3efbbc) {
  var _0x2a1e73 = {};

  function _0x16d43a(_0x3efbbc, _0x16d43a) {
    return _0x3efbbc << _0x16d43a | _0x3efbbc >>> 32 - _0x16d43a;
  }

  function _0x373e45(_0x3efbbc, _0x16d43a) {
    var _0x373e45, _0x61561e, _0x5769cb, _0xb19fa4, _0x1051fb;

    return _0x5769cb = 2147483648 & _0x3efbbc, _0xb19fa4 = 2147483648 & _0x16d43a, _0x373e45 = 1073741824 & _0x3efbbc, _0x61561e = 1073741824 & _0x16d43a, _0x1051fb = (1073741823 & _0x3efbbc) + (1073741823 & _0x16d43a), _0x373e45 & _0x61561e ? 2147483648 ^ _0x1051fb ^ _0x5769cb ^ _0xb19fa4 : _0x373e45 | _0x61561e ? 1073741824 & _0x1051fb ? 3221225472 ^ _0x1051fb ^ _0x5769cb ^ _0xb19fa4 : 1073741824 ^ _0x1051fb ^ _0x5769cb ^ _0xb19fa4 : _0x1051fb ^ _0x5769cb ^ _0xb19fa4;
  }

  function _0x201b5a(_0x3efbbc, _0x16d43a, _0x373e45) {
    return _0x3efbbc & _0x16d43a | ~_0x3efbbc & _0x373e45;
  }

  function _0x5b037e(_0x3efbbc, _0x16d43a, _0x373e45) {
    return _0x3efbbc & _0x373e45 | _0x16d43a & ~_0x373e45;
  }

  function _0x55f58c(_0x3efbbc, _0x16d43a, _0x373e45) {
    return _0x3efbbc ^ _0x16d43a ^ _0x373e45;
  }

  function _0xaf20c4(_0x3efbbc, _0x16d43a, _0x373e45) {
    return _0x16d43a ^ (_0x3efbbc | ~_0x373e45);
  }

  function _0x346278(_0x3efbbc, _0x5b037e, _0x55f58c, _0xaf20c4, _0x346278, _0x40c16b, _0x5a4c11) {
    return _0x3efbbc = _0x373e45(_0x3efbbc, _0x373e45(_0x373e45(_0x201b5a(_0x5b037e, _0x55f58c, _0xaf20c4), _0x346278), _0x5a4c11)), _0x373e45(_0x16d43a(_0x3efbbc, _0x40c16b), _0x5b037e);
  }

  function _0x262df5(_0x3efbbc, _0x201b5a, _0x55f58c, _0xaf20c4, _0x346278, _0x262df5, _0x196bba) {
    return _0x3efbbc = _0x373e45(_0x3efbbc, _0x373e45(_0x373e45(_0x5b037e(_0x201b5a, _0x55f58c, _0xaf20c4), _0x346278), _0x196bba)), _0x373e45(_0x16d43a(_0x3efbbc, _0x262df5), _0x201b5a);
  }

  function _0x297c9a(_0x3efbbc, _0x201b5a, _0x5b037e, _0xaf20c4, _0x346278, _0x262df5, _0x297c9a) {
    return _0x3efbbc = _0x373e45(_0x3efbbc, _0x373e45(_0x373e45(_0x55f58c(_0x201b5a, _0x5b037e, _0xaf20c4), _0x346278), _0x297c9a)), _0x373e45(_0x16d43a(_0x3efbbc, _0x262df5), _0x201b5a);
  }

  function _0x41bb02(_0x3efbbc, _0x201b5a, _0x5b037e, _0x55f58c, _0x346278, _0x262df5, _0x297c9a) {
    return _0x3efbbc = _0x373e45(_0x3efbbc, _0x373e45(_0x373e45(_0xaf20c4(_0x201b5a, _0x5b037e, _0x55f58c), _0x346278), _0x297c9a)), _0x373e45(_0x16d43a(_0x3efbbc, _0x262df5), _0x201b5a);
  }

  function _0x4f6fac(_0x3efbbc) {
    var _0x5224a3 = {
      "KNjvg": function (_0x556fb5, _0x38b16e) {
        return _0x556fb5 < _0x38b16e;
      },
      "BdvGV": function (_0x1751f5, _0x2e8a68) {
        return _0x1751f5 > _0x2e8a68;
      },
      "iMDVg": function (_0x569332, _0x1966f1) {
        return _0x569332 > _0x1966f1;
      },
      "BesRD": function (_0x1a24e0, _0x438c68) {
        return _0x1a24e0 >> _0x438c68;
      },
      "NmpWU": function (_0x30559b, _0xfd49a7) {
        return _0x30559b & _0xfd49a7;
      },
      "OIgRK": function (_0x556134, _0x544262) {
        return _0x556134 | _0x544262;
      },
      "wAtCF": function (_0x4127e8, _0x55febe) {
        return _0x4127e8 >> _0x55febe;
      },
      "yBHfD": function (_0x8e3b19, _0x394602) {
        return _0x8e3b19 | _0x394602;
      }
    };

    for (var _0x16d43a, _0x373e45 = _0x3efbbc["length"], _0x201b5a = _0x373e45 + 8, _0x5b037e = (_0x201b5a - _0x201b5a % 64) / 64, _0x55f58c = 16 * (_0x5b037e + 1), _0xaf20c4 = new Array(_0x55f58c - 1), _0x346278 = 0, _0x262df5 = 0; _0x373e45 > _0x262df5;) _0x16d43a = (_0x262df5 - _0x262df5 % 4) / 4, _0x346278 = _0x262df5 % 4 * 8, _0xaf20c4[_0x16d43a] = _0xaf20c4[_0x16d43a] | _0x3efbbc["charCodeAt"](_0x262df5) << _0x346278, _0x262df5++;

    return _0x16d43a = (_0x262df5 - _0x262df5 % 4) / 4, _0x346278 = _0x262df5 % 4 * 8, _0xaf20c4[_0x16d43a] = _0xaf20c4[_0x16d43a] | 128 << _0x346278, _0xaf20c4[_0x55f58c - 2] = _0x373e45 << 3, _0xaf20c4[_0x55f58c - 1] = _0x373e45 >>> 29, _0xaf20c4;
  }

  function _0x10997f(_0x3efbbc) {
    var _0x78e2f2 = {
      "MTvQV": function (_0x28a236, _0x8885b7, _0x463864) {
        return _0x28a236(_0x8885b7, _0x463864);
      },
      "bzMSw": function (_0x3ef67c, _0x1069e9, _0x251af1) {
        return _0x3ef67c(_0x1069e9, _0x251af1);
      },
      "wqhXo": function (_0xf6e6bb, _0x2d6a59, _0x33dbc6) {
        return _0xf6e6bb(_0x2d6a59, _0x33dbc6);
      },
      "ljDzg": function (_0x5754d9, _0x2e2877, _0x654c51) {
        return _0x5754d9(_0x2e2877, _0x654c51);
      }
    };

    var _0x16d43a,
        _0x373e45,
        _0x201b5a = "",
        _0x5b037e = "";

    for (_0x373e45 = 0; 3 >= _0x373e45; _0x373e45++) _0x16d43a = _0x3efbbc >>> 8 * _0x373e45 & 255, _0x5b037e = "0" + _0x16d43a["toString"](16), _0x201b5a += _0x5b037e["substr"](_0x5b037e["length"] - 2, 2);

    return _0x201b5a;
  }

  function _0x32b776(_0x3efbbc) {
    var _0x8f7e73 = {
      "mkKDR": function (_0x401959, _0x1a3215) {
        return _0x401959 + _0x1a3215;
      },
      "xsJCE": function (_0x241394, _0x4694ad) {
        return _0x241394 / _0x4694ad;
      },
      "kqOJM": function (_0x302e9f, _0x1ad9a0) {
        return _0x302e9f - _0x1ad9a0;
      },
      "MUrTs": function (_0x33ea83, _0xaf713c) {
        return _0x33ea83 * _0xaf713c;
      },
      "YGhOk": function (_0x3288ea, _0x26a89c) {
        return _0x3288ea + _0x26a89c;
      },
      "zrLZa": function (_0x29e754, _0x5583ca) {
        return _0x29e754 > _0x5583ca;
      },
      "EEZVB": function (_0x852cd9, _0x390a93) {
        return _0x852cd9 / _0x390a93;
      },
      "aFvpm": function (_0xf41fb7, _0x4051c1) {
        return _0xf41fb7 % _0x4051c1;
      },
      "jKloZ": function (_0xa92e31, _0x1fc1a1) {
        return _0xa92e31 | _0x1fc1a1;
      },
      "efVda": function (_0x146adb, _0x1e9ecc) {
        return _0x146adb << _0x1e9ecc;
      },
      "ZMiFe": function (_0x1fc6c2, _0x5e4d17) {
        return _0x1fc6c2 % _0x5e4d17;
      },
      "snnpG": function (_0x97b088, _0x47ddaf) {
        return _0x97b088 | _0x47ddaf;
      },
      "CXHyC": function (_0x53b83b, _0x47029f) {
        return _0x53b83b - _0x47029f;
      },
      "uAIZW": function (_0x393e32, _0x2c5277) {
        return _0x393e32 >>> _0x2c5277;
      }
    };
    _0x3efbbc = _0x3efbbc["replace"](/\r\n/g, "\n");

    for (var _0x16d43a = "", _0x373e45 = 0; _0x373e45 < _0x3efbbc["length"]; _0x373e45++) {
      var _0x201b5a = _0x3efbbc["charCodeAt"](_0x373e45);

      128 > _0x201b5a ? _0x16d43a += String["fromCharCode"](_0x201b5a) : _0x201b5a > 127 && 2048 > _0x201b5a ? (_0x16d43a += String["fromCharCode"](_0x201b5a >> 6 | 192), _0x16d43a += String["fromCharCode"](63 & _0x201b5a | 128)) : (_0x16d43a += String["fromCharCode"](_0x201b5a >> 12 | 224), _0x16d43a += String["fromCharCode"](_0x201b5a >> 6 & 63 | 128), _0x16d43a += String["fromCharCode"](63 & _0x201b5a | 128));
    }

    return _0x16d43a;
  }

  var _0x4eea21,
      _0x33d7cc,
      _0x39db6f,
      _0x49797b,
      _0x1c15e1,
      _0x340409,
      _0x2e0b69,
      _0xb76f31,
      _0xe3168a,
      _0x4a28ee = [],
      _0x2b8f40 = 7,
      _0x123999 = 12,
      _0x403498 = 17,
      _0x42123b = 22,
      _0x3d9308 = 5,
      _0x5c2515 = 9,
      _0x10616d = 14,
      _0x3a8e95 = 20,
      _0x3628f8 = 4,
      _0x341ea5 = 11,
      _0x194c89 = 16,
      _0x41d273 = 23,
      _0x3b26a3 = 6,
      _0x2ead20 = 10,
      _0x2e6dd4 = 15,
      _0x369a0a = 21;

  for (_0x3efbbc = _0x32b776(_0x3efbbc), _0x4a28ee = _0x4f6fac(_0x3efbbc), _0x340409 = 1732584193, _0x2e0b69 = 4023233417, _0xb76f31 = 2562383102, _0xe3168a = 271733878, _0x4eea21 = 0; _0x4eea21 < _0x4a28ee["length"]; _0x4eea21 += 16) _0x33d7cc = _0x340409, _0x39db6f = _0x2e0b69, _0x49797b = _0xb76f31, _0x1c15e1 = _0xe3168a, _0x340409 = _0x346278(_0x340409, _0x2e0b69, _0xb76f31, _0xe3168a, _0x4a28ee[_0x4eea21 + 0], _0x2b8f40, 3614090360), _0xe3168a = _0x346278(_0xe3168a, _0x340409, _0x2e0b69, _0xb76f31, _0x4a28ee[_0x4eea21 + 1], _0x123999, 3905402710), _0xb76f31 = _0x346278(_0xb76f31, _0xe3168a, _0x340409, _0x2e0b69, _0x4a28ee[_0x4eea21 + 2], _0x403498, 606105819), _0x2e0b69 = _0x346278(_0x2e0b69, _0xb76f31, _0xe3168a, _0x340409, _0x4a28ee[_0x4eea21 + 3], _0x42123b, 3250441966), _0x340409 = _0x346278(_0x340409, _0x2e0b69, _0xb76f31, _0xe3168a, _0x4a28ee[_0x4eea21 + 4], _0x2b8f40, 4118548399), _0xe3168a = _0x346278(_0xe3168a, _0x340409, _0x2e0b69, _0xb76f31, _0x4a28ee[_0x4eea21 + 5], _0x123999, 1200080426), _0xb76f31 = _0x346278(_0xb76f31, _0xe3168a, _0x340409, _0x2e0b69, _0x4a28ee[_0x4eea21 + 6], _0x403498, 2821735955), _0x2e0b69 = _0x346278(_0x2e0b69, _0xb76f31, _0xe3168a, _0x340409, _0x4a28ee[_0x4eea21 + 7], _0x42123b, 4249261313), _0x340409 = _0x346278(_0x340409, _0x2e0b69, _0xb76f31, _0xe3168a, _0x4a28ee[_0x4eea21 + 8], _0x2b8f40, 1770035416), _0xe3168a = _0x346278(_0xe3168a, _0x340409, _0x2e0b69, _0xb76f31, _0x4a28ee[_0x4eea21 + 9], _0x123999, 2336552879), _0xb76f31 = _0x346278(_0xb76f31, _0xe3168a, _0x340409, _0x2e0b69, _0x4a28ee[_0x4eea21 + 10], _0x403498, 4294925233), _0x2e0b69 = _0x346278(_0x2e0b69, _0xb76f31, _0xe3168a, _0x340409, _0x4a28ee[_0x4eea21 + 11], _0x42123b, 2304563134), _0x340409 = _0x346278(_0x340409, _0x2e0b69, _0xb76f31, _0xe3168a, _0x4a28ee[_0x4eea21 + 12], _0x2b8f40, 1804603682), _0xe3168a = _0x346278(_0xe3168a, _0x340409, _0x2e0b69, _0xb76f31, _0x4a28ee[_0x4eea21 + 13], _0x123999, 4254626195), _0xb76f31 = _0x346278(_0xb76f31, _0xe3168a, _0x340409, _0x2e0b69, _0x4a28ee[_0x4eea21 + 14], _0x403498, 2792965006), _0x2e0b69 = _0x346278(_0x2e0b69, _0xb76f31, _0xe3168a, _0x340409, _0x4a28ee[_0x4eea21 + 15], _0x42123b, 1236535329), _0x340409 = _0x262df5(_0x340409, _0x2e0b69, _0xb76f31, _0xe3168a, _0x4a28ee[_0x4eea21 + 1], _0x3d9308, 4129170786), _0xe3168a = _0x262df5(_0xe3168a, _0x340409, _0x2e0b69, _0xb76f31, _0x4a28ee[_0x4eea21 + 6], _0x5c2515, 3225465664), _0xb76f31 = _0x262df5(_0xb76f31, _0xe3168a, _0x340409, _0x2e0b69, _0x4a28ee[_0x4eea21 + 11], _0x10616d, 643717713), _0x2e0b69 = _0x262df5(_0x2e0b69, _0xb76f31, _0xe3168a, _0x340409, _0x4a28ee[_0x4eea21 + 0], _0x3a8e95, 3921069994), _0x340409 = _0x262df5(_0x340409, _0x2e0b69, _0xb76f31, _0xe3168a, _0x4a28ee[_0x4eea21 + 5], _0x3d9308, 3593408605), _0xe3168a = _0x262df5(_0xe3168a, _0x340409, _0x2e0b69, _0xb76f31, _0x4a28ee[_0x4eea21 + 10], _0x5c2515, 38016083), _0xb76f31 = _0x262df5(_0xb76f31, _0xe3168a, _0x340409, _0x2e0b69, _0x4a28ee[_0x4eea21 + 15], _0x10616d, 3634488961), _0x2e0b69 = _0x262df5(_0x2e0b69, _0xb76f31, _0xe3168a, _0x340409, _0x4a28ee[_0x4eea21 + 4], _0x3a8e95, 3889429448), _0x340409 = _0x262df5(_0x340409, _0x2e0b69, _0xb76f31, _0xe3168a, _0x4a28ee[_0x4eea21 + 9], _0x3d9308, 568446438), _0xe3168a = _0x262df5(_0xe3168a, _0x340409, _0x2e0b69, _0xb76f31, _0x4a28ee[_0x4eea21 + 14], _0x5c2515, 3275163606), _0xb76f31 = _0x262df5(_0xb76f31, _0xe3168a, _0x340409, _0x2e0b69, _0x4a28ee[_0x4eea21 + 3], _0x10616d, 4107603335), _0x2e0b69 = _0x262df5(_0x2e0b69, _0xb76f31, _0xe3168a, _0x340409, _0x4a28ee[_0x4eea21 + 8], _0x3a8e95, 1163531501), _0x340409 = _0x262df5(_0x340409, _0x2e0b69, _0xb76f31, _0xe3168a, _0x4a28ee[_0x4eea21 + 13], _0x3d9308, 2850285829), _0xe3168a = _0x262df5(_0xe3168a, _0x340409, _0x2e0b69, _0xb76f31, _0x4a28ee[_0x4eea21 + 2], _0x5c2515, 4243563512), _0xb76f31 = _0x262df5(_0xb76f31, _0xe3168a, _0x340409, _0x2e0b69, _0x4a28ee[_0x4eea21 + 7], _0x10616d, 1735328473), _0x2e0b69 = _0x262df5(_0x2e0b69, _0xb76f31, _0xe3168a, _0x340409, _0x4a28ee[_0x4eea21 + 12], _0x3a8e95, 2368359562), _0x340409 = _0x297c9a(_0x340409, _0x2e0b69, _0xb76f31, _0xe3168a, _0x4a28ee[_0x4eea21 + 5], _0x3628f8, 4294588738), _0xe3168a = _0x297c9a(_0xe3168a, _0x340409, _0x2e0b69, _0xb76f31, _0x4a28ee[_0x4eea21 + 8], _0x341ea5, 2272392833), _0xb76f31 = _0x297c9a(_0xb76f31, _0xe3168a, _0x340409, _0x2e0b69, _0x4a28ee[_0x4eea21 + 11], _0x194c89, 1839030562), _0x2e0b69 = _0x297c9a(_0x2e0b69, _0xb76f31, _0xe3168a, _0x340409, _0x4a28ee[_0x4eea21 + 14], _0x41d273, 4259657740), _0x340409 = _0x297c9a(_0x340409, _0x2e0b69, _0xb76f31, _0xe3168a, _0x4a28ee[_0x4eea21 + 1], _0x3628f8, 2763975236), _0xe3168a = _0x297c9a(_0xe3168a, _0x340409, _0x2e0b69, _0xb76f31, _0x4a28ee[_0x4eea21 + 4], _0x341ea5, 1272893353), _0xb76f31 = _0x297c9a(_0xb76f31, _0xe3168a, _0x340409, _0x2e0b69, _0x4a28ee[_0x4eea21 + 7], _0x194c89, 4139469664), _0x2e0b69 = _0x297c9a(_0x2e0b69, _0xb76f31, _0xe3168a, _0x340409, _0x4a28ee[_0x4eea21 + 10], _0x41d273, 3200236656), _0x340409 = _0x297c9a(_0x340409, _0x2e0b69, _0xb76f31, _0xe3168a, _0x4a28ee[_0x4eea21 + 13], _0x3628f8, 681279174), _0xe3168a = _0x297c9a(_0xe3168a, _0x340409, _0x2e0b69, _0xb76f31, _0x4a28ee[_0x4eea21 + 0], _0x341ea5, 3936430074), _0xb76f31 = _0x297c9a(_0xb76f31, _0xe3168a, _0x340409, _0x2e0b69, _0x4a28ee[_0x4eea21 + 3], _0x194c89, 3572445317), _0x2e0b69 = _0x297c9a(_0x2e0b69, _0xb76f31, _0xe3168a, _0x340409, _0x4a28ee[_0x4eea21 + 6], _0x41d273, 76029189), _0x340409 = _0x297c9a(_0x340409, _0x2e0b69, _0xb76f31, _0xe3168a, _0x4a28ee[_0x4eea21 + 9], _0x3628f8, 3654602809), _0xe3168a = _0x297c9a(_0xe3168a, _0x340409, _0x2e0b69, _0xb76f31, _0x4a28ee[_0x4eea21 + 12], _0x341ea5, 3873151461), _0xb76f31 = _0x297c9a(_0xb76f31, _0xe3168a, _0x340409, _0x2e0b69, _0x4a28ee[_0x4eea21 + 15], _0x194c89, 530742520), _0x2e0b69 = _0x297c9a(_0x2e0b69, _0xb76f31, _0xe3168a, _0x340409, _0x4a28ee[_0x4eea21 + 2], _0x41d273, 3299628645), _0x340409 = _0x41bb02(_0x340409, _0x2e0b69, _0xb76f31, _0xe3168a, _0x4a28ee[_0x4eea21 + 0], _0x3b26a3, 4096336452), _0xe3168a = _0x41bb02(_0xe3168a, _0x340409, _0x2e0b69, _0xb76f31, _0x4a28ee[_0x4eea21 + 7], _0x2ead20, 1126891415), _0xb76f31 = _0x41bb02(_0xb76f31, _0xe3168a, _0x340409, _0x2e0b69, _0x4a28ee[_0x4eea21 + 14], _0x2e6dd4, 2878612391), _0x2e0b69 = _0x41bb02(_0x2e0b69, _0xb76f31, _0xe3168a, _0x340409, _0x4a28ee[_0x4eea21 + 5], _0x369a0a, 4237533241), _0x340409 = _0x41bb02(_0x340409, _0x2e0b69, _0xb76f31, _0xe3168a, _0x4a28ee[_0x4eea21 + 12], _0x3b26a3, 1700485571), _0xe3168a = _0x41bb02(_0xe3168a, _0x340409, _0x2e0b69, _0xb76f31, _0x4a28ee[_0x4eea21 + 3], _0x2ead20, 2399980690), _0xb76f31 = _0x41bb02(_0xb76f31, _0xe3168a, _0x340409, _0x2e0b69, _0x4a28ee[_0x4eea21 + 10], _0x2e6dd4, 4293915773), _0x2e0b69 = _0x41bb02(_0x2e0b69, _0xb76f31, _0xe3168a, _0x340409, _0x4a28ee[_0x4eea21 + 1], _0x369a0a, 2240044497), _0x340409 = _0x41bb02(_0x340409, _0x2e0b69, _0xb76f31, _0xe3168a, _0x4a28ee[_0x4eea21 + 8], _0x3b26a3, 1873313359), _0xe3168a = _0x41bb02(_0xe3168a, _0x340409, _0x2e0b69, _0xb76f31, _0x4a28ee[_0x4eea21 + 15], _0x2ead20, 4264355552), _0xb76f31 = _0x41bb02(_0xb76f31, _0xe3168a, _0x340409, _0x2e0b69, _0x4a28ee[_0x4eea21 + 6], _0x2e6dd4, 2734768916), _0x2e0b69 = _0x41bb02(_0x2e0b69, _0xb76f31, _0xe3168a, _0x340409, _0x4a28ee[_0x4eea21 + 13], _0x369a0a, 1309151649), _0x340409 = _0x41bb02(_0x340409, _0x2e0b69, _0xb76f31, _0xe3168a, _0x4a28ee[_0x4eea21 + 4], _0x3b26a3, 4149444226), _0xe3168a = _0x41bb02(_0xe3168a, _0x340409, _0x2e0b69, _0xb76f31, _0x4a28ee[_0x4eea21 + 11], _0x2ead20, 3174756917), _0xb76f31 = _0x41bb02(_0xb76f31, _0xe3168a, _0x340409, _0x2e0b69, _0x4a28ee[_0x4eea21 + 2], _0x2e6dd4, 718787259), _0x2e0b69 = _0x41bb02(_0x2e0b69, _0xb76f31, _0xe3168a, _0x340409, _0x4a28ee[_0x4eea21 + 9], _0x369a0a, 3951481745), _0x340409 = _0x373e45(_0x340409, _0x33d7cc), _0x2e0b69 = _0x373e45(_0x2e0b69, _0x39db6f), _0xb76f31 = _0x373e45(_0xb76f31, _0x49797b), _0xe3168a = _0x373e45(_0xe3168a, _0x1c15e1);

  var _0xe9752c = _0x10997f(_0x340409) + _0x10997f(_0x2e0b69) + _0x10997f(_0xb76f31) + _0x10997f(_0xe3168a);

  return _0xe9752c["toLowerCase"]();
}

;

function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }

    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      return "POST" === e && (s = this.post), new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }

    get(t) {
      return this.send.call(this.env, t);
    }

    post(t) {
      return this.send.call(this.env, t, "POST");
    }

  }

  return new class {
    constructor(t, e) {
      this.name = t, this.http = new s(this), this.data = null, this.dataFile = "box.dat", this.logs = [], this.isMute = !1, this.isNeedRewrite = !1, this.logSeparator = "\n", this.startTime = new Date().getTime(), Object.assign(this, e), this.log("", `\ud83d\udd14${this.name}, \u5f00\u59cb!`);
    }

    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }

    isQuanX() {
      return "undefined" != typeof $task;
    }

    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }

    isLoon() {
      return "undefined" != typeof $loon;
    }

    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }

    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }

    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) try {
        s = JSON.parse(this.getdata(t));
      } catch {}
      return s;
    }

    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }

    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }

    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20, r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
              a = {
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
        this.post(a, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }

    loaddata() {
      if (!this.isNode()) return {};
      this.fs = this.fs ? this.fs : require("fs"), this.path = this.path ? this.path : require("path");
      const t = this.path.resolve(this.dataFile),
            e = this.path.resolve(process.cwd(), this.dataFile),
            s = this.fs.existsSync(t),
            i = !s && this.fs.existsSync(e);
      if (!s && !i) return {};
      {
        const i = s ? t : e;

        try {
          return JSON.parse(this.fs.readFileSync(i));
        } catch (t) {
          return {};
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
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }

    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;

      for (const t of i) if (r = Object(r)[t], void 0 === r) return s;

      return r;
    }

    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }

    getdata(t) {
      let e = this.getval(t);

      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
              r = s ? this.getval(s) : "";
        if (r) try {
          const t = JSON.parse(r);
          e = t ? this.lodash_get(t, i, "") : e;
        } catch (t) {
          e = "";
        }
      }

      return e;
    }

    setdata(t, e) {
      let s = !1;

      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
              o = this.getval(i),
              h = i ? "null" === o ? null : o || "{}" : "{}";

        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t), s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t), s = this.setval(JSON.stringify(o), i);
        }
      } else s = this.setval(t, e);

      return s;
    }

    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }

    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }

    initGotEnv(t) {
      this.got = this.got ? this.got : require("got"), this.cktough = this.cktough ? this.cktough : require("tough-cookie"), this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar(), t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }

    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]), this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
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
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(s, null), e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
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
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }

    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status), e(t, s, i);
      });else if (this.isQuanX()) t.method = "POST", this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
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
        }, o);
      }, t => e(t));else if (this.isNode()) {
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
          }, o);
        }, t => {
          const {
            message: s,
            response: i
          } = t;
          e(s, i, i && i.body);
        });
      }
    }

    time(t) {
      let e = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "H+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));

      for (let s in e) new RegExp("(" + s + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[s] : ("00" + e[s]).substr(("" + e[s]).length)));

      return t;
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
            };
          }

          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
                s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }

          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };

      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r)));
      let h = ["", "==============📣系统通知📣=============="];
      h.push(e), s && h.push(s), i && h.push(i), console.log(h.join("\n")), this.logs = this.logs.concat(h);
    }

    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(t.join(this.logSeparator));
    }

    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t.stack) : this.log("", `\u2757\ufe0f${this.name}, \u9519\u8bef!`, t);
    }

    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }

    done(t = {}) {
      const e = new Date().getTime(),
            s = (e - this.startTime) / 1000;
      this.log("", `\ud83d\udd14${this.name}, \u7ed3\u675f! \ud83d\udd5b ${s} \u79d2`), this.log(), (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }

  }(t, e);
}