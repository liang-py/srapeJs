
var _0x2259a2 = {
    'UNqod': function (_0x12a85f, _0x55a976) {
        return _0x12a85f < _0x55a976;
    },
    'lhWhT': function (_0x4f14f9, _0x35ac83) {
        return _0x4f14f9 !== _0x35ac83;
    },
    'qIagG': function (_0x2dccc8, _0x490839) {
        return _0x2dccc8 + _0x490839;
    },
    'ykTCE': function (_0x71c6d9, _0x589b40) {
        return _0x71c6d9 + _0x589b40;
    },
    'GKvnA': function(_0x2eedda, _0x597690) {
        return _0x2eedda - _0x597690;
    }
};

// 第一次cookie


function Cookie(_0x490278){
    function _0x263fd0(_0x22567d, _0x2b11e4) {
        var _0x51179f = _0x490278['chars']['length'];
        for (var _0x128bcc = 0; _0x128bcc < _0x51179f; _0x128bcc++) {
            for (var _0xd26570 = 0; _0x2259a2['UNqod'](_0xd26570, _0x51179f); _0xd26570++) {
                var _0x2f35a9 = _0x2259a2['qIagG'](_0x2259a2['ykTCE'](_0x2b11e4[0x0], _0x490278['chars']['substr'](_0x128bcc, 0x1)) + _0x490278['chars'
                    ]['substr'](_0xd26570, 0x1), _0x2b11e4[0x1]);
                if (hash(_0x2f35a9) == _0x22567d) {
                return [_0x2f35a9, _0x2259a2['GKvnA'](new Date(), new Date())];
                }
            }
        }
    }
    var _0x56ebfa = _0x263fd0(_0x490278['ct'], _0x490278['bts'])
    return {'__jsl_clearance_s': _0x56ebfa[0]}
}

module.exports = {
    Cookie
};