# -*- coding:utf-8 -*-
ts_str = """
_$Iv._$Dd = _$c6;
    _$Iv._$bJ = _$fs;
    _$Iv._$zr = _$BJ;
    _$Iv._$Sf = _$Do;
    _$Iv._$B0 = _$3K;
    _$Iv._$pV = _$JU;
    _$Iv._$Ns = _$B8;
    _$Iv._$Lm = _$dR;
    _$Iv._$Ub = _$I_;
    _$Iv._$pn = _$m6;
    _$Iv._$Yz = _$cJ;
    _$Iv._$7b = _$G4;
    _$Iv._$U6 = _$mx;
    _$Iv._$BW = _$Tk;
    _$Iv._$mw = _$AW;
    _$Iv._$ry = _$vD;
    _$Iv._$LZ = _$rS;
    _$Iv._$ZE = _$K$;
    _$Iv._$9j = _$DL;
    _$Iv._$25 = _$Q0;
"""
index_func = []
print(ts_str.replace('\n','').replace(' ','').split(';'))
for t in ts_str.replace('\n','').replace(' ','').split(';'):
    if t:
        index_func.append(t.split('=')[-1])
print(index_func)


