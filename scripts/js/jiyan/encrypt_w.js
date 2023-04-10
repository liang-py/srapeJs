function $_EHW (e, o) {
    var $_GGFb = cKFnp.$_Cd
        , $_GGEM = ['$_GGID'].concat($_GGFb)
        , $_GGGa = $_GGEM[1];
    $_GGEM.shift();
    var $_GGHz = $_GGEM[0];
    var i = this;
    o || (o = i);
    for (var t = function(e, t) {
        var $_GHAk = cKFnp.$_Cd
            , $_GGJo = ['$_GHDY'].concat($_GHAk)
            , $_GHB_ = $_GGJo[1];
        $_GGJo.shift();
        var $_GHCs = $_GGJo[0];
        for (var n = 0, r = o[$_GHAk(375)] - 1; 0 <= r; r -= 1)
            1 === i[$_GHB_(357)](t, r) && (n = (n << 1) + i[$_GHB_(357)](e, r));
        return n;
    }, n = $_GGGa(279), r = $_GGFb(279), s = e[$_GGFb(258)], a = 0; a < s; a += 3) {
        var c;
        if (a + 2 < s)
            c = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2],
                n += i[$_GGFb(326)](t(c, o[$_GGGa(365)])) + i[$_GGFb(326)](t(c, o[$_GGFb(336)])) + i[$_GGGa(326)](t(c, o[$_GGGa(312)])) + i[$_GGFb(326)](t(c, o[$_GGFb(364)]));
        else {
            var _ = s % 3;
            2 == _ ? (c = (e[a] << 16) + (e[a + 1] << 8),
                n += i[$_GGFb(326)](t(c, o[$_GGGa(365)])) + i[$_GGGa(326)](t(c, o[$_GGGa(336)])) + i[$_GGGa(326)](t(c, o[$_GGFb(312)])),
                r = o[$_GGGa(363)]) : 1 == _ && (c = e[a] << 16,
                n += i[$_GGFb(326)](t(c, o[$_GGGa(365)])) + i[$_GGFb(326)](t(c, o[$_GGGa(336)])),
                r = o[$_GGFb(363)] + o[$_GGFb(363)]);
        }
    }
    return {
        "\u0072\u0065\u0073": n,
        "\u0065\u006e\u0064": r
    };
}

var $_BGFFu = cKFnp.$_Cd
    , $_BGFEk = ['$_BGFIk'].concat($_BGFFu)
    , $_BGFGn = $_BGFEk[1];
$_BGFEk.shift();
var $_BGFHc = $_BGFEk[0];
function e() {
    var $_DECFD = cKFnp.$_Dt()[8][14];
    for (; $_DECFD !== cKFnp.$_Dt()[8][13]; ) {
        switch ($_DECFD) {
            case cKFnp.$_Dt()[8][14]:
                return (65536 * (1 + Math["random"]()) | 0)['toString'](16)['substring'](1);
                break;
        }
    }
}
function ae() {
    return e() + e() + e() + e();
}

o = $_BEZ()['encrypt1'](ge['stringify'](t[$_CFAAK(275)]), t[$_CFAAK(1381)]())
i = m(o)
