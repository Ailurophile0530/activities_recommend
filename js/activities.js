function Creat(N, H, P, Warray, S, E) {
    var obj = {
        name: N,
        hobby: H,
        place: P,
        weather: Warray,
        start: S,
        end: E,
        key: [0, 0, 0, 0]
    };
    return obj;
}

function Insert(array, k) {
    var l = array.length;
    array[l] = k;
}
function Delete(array, k) {
    var l = array.length;
    for (var i = 0; i < l; i++) {
        if (array[i] == k)
            break;
    }
    if (i != l) {
        for (var j = i; j < l - 1; j++) {
            array[j] = array[j + 1];
        }
        array.pop();
    }
}

var events = [];
var A = Creat("上海迪士尼", 5, 2, [1, 2], 9, 22);
Insert(events, A);
var B = Creat("顾村公园", 6, 2, [1, 2], 8, 17);
Insert(events, B);
var C = Creat("上海当代艺术博物馆", 1, 1, [1, 2, 3, 4], 9, 17);
Insert(events, C);
var D = Creat("辰山植物园", 6, 2, [1, 2], 9, 17);
Insert(events, D);
var E = Creat("蛋糕DIY", 3, 1, [1, 2, 3, 4], 10, 22);
Insert(events, E);
var F = Creat("电影院", 7, 1, [1, 2, 3, 4], 0, 24);
Insert(events, F);
var G = Creat("欢乐谷", 5, 2, [1, 2], 10, 18);
Insert(events, G);
var H = Creat("Omakase", 4, 1, [1, 2, 3, 4], 10, 22);
Insert(events, H);
var I = Creat("上海天文馆", 10, 1, [1, 2, 3, 4], 9, 17);
Insert(events, I);
var J = Creat("美甲", 9, 1, [1, 2, 3, 4], 10, 22);
Insert(events, J);
var K = Creat("剧本杀", 8, 1, [1, 2, 3, 4], 10, 22);
Insert(events, K);
var L = Creat("校园跑", 2, 2, [1, 2], 6, 20);
Insert(events, L);
var M = Creat("上海博物馆", 10, 1, [1, 2, 3, 4], 9, 17);
Insert(events, M);
var N = Creat("室内游乐场", 5, 1, [1, 2, 3, 4], 10, 20);
Insert(events, N);
var O = Creat("草坪音乐节", 1, 2, [1, 2], 16, 20);
Insert(events, O);
var Q = Creat("音乐剧", 1, 1, [1, 2, 3, 4], 19, 22);
Insert(events, Q);
var R = Creat("演唱会", 1, 1, [1, 2, 3, 4], 19, 21);
Insert(events, R);
var S = Creat("音乐节", 1, 2, [1, 2], 13, 21);
Insert(events, S);
var T = Creat("网吧", 2, 1, [1, 2, 3, 4], 0, 23);
Insert(events, T);
var U = Creat("羽毛球馆", 2, 1, [1, 2, 3, 4], 7, 22);
Insert(events, U); 
var V = Creat("健身房", 2, 1, [1, 2, 3, 4], 10, 22);
Insert(events, V);
var W = Creat("乐土陶艺", 3, 1, [1, 2, 3, 4], 10, 18);
Insert(events, W);
var X = Creat("木作DIY", 3, 1, [1, 2, 3, 4], 11, 20);
Insert(events, X);
var Y = Creat("银饰DIY", 3, 1, [1, 2, 3, 4], 10, 22);
Insert(events, Y);
var Z = Creat("茶餐厅", 4, 1, [1, 2, 3, 4], 10, 21);
Insert(events, Z);
var AA = Creat("大排档", 4, 1, [1, 2, 3, 4], 11, 24);
Insert(events, AA);
var AB = Creat("贵州菜", 4, 1, [1, 2, 3, 4], 11, 21);
Insert(events, AB);
var AC = Creat("玻璃宫艺术局", 5, 1, [1, 2, 3, 4], 10, 17);
Insert(events, AC);
var AD  = Creat("武康大楼", 5, 2, [1, 2], 0, 23);
Insert(events, AD );
var AE = Creat("安福路", 5, 2, [1, 2], 0, 23);
Insert(events, AE);
var AF = Creat("愚园路", 5, 2, [1, 2], 0, 23);
Insert(events, AF);
var AG = Creat("共青国家森林公园", 6, 2, [1, 2], 5, 18);
Insert(events, AG);
var AH = Creat("上海滨江森林公园", 6, 2, [1, 2], 8, 17);
Insert(events, AH);
var AI = Creat("光影片场", 7, 2, [1, 2], 10, 21);
Insert(events, AI);
var AJ = Creat("兰心大戏院", 7, 1, [1, 2, 3, 4], 19, 22);
Insert(events, AJ);
var AK = Creat("私人影院", 7, 1, [1, 2, 3, 4], 10, 22);
Insert(events, AK);
var AL = Creat("棋牌室", 8, 1, [1, 2, 3, 4], 19, 22);
Insert(events, AL);
var AM = Creat("桌游室", 8, 1, [1, 2, 3, 4], 0, 23);
Insert(events, AM);
var AN = Creat("SPA按摩", 9, 1, [1, 2, 3, 4], 11, 22);
Insert(events, AN);
var AO = Creat("美发", 9, 1, [1, 2, 3, 4], 10, 22);
Insert(events, AO);
var AP = Creat("纹眉纹绣", 9, 1, [1, 2, 3, 4], 10, 22);
Insert(events, AP);
var AQ = Creat("医学美容", 9, 1, [1, 2, 3, 4], 10, 22);
Insert(events, AQ);
var AR = Creat("遇见博物馆", 10, 1, [1, 2, 3, 4], 10, 18);
Insert(events, AR);
var AS = Creat("永福庵", 10, 2, [1, 2], 13, 17);
Insert(events, AS);
var AT = Creat("鲁迅故居", 10, 2, [1, 2], 9, 16);
Insert(events, AT);
var AU = Creat("徐家汇天主堂", 10, 1, [1, 2, 3, 4], 9, 16);
Insert(events, AU);

function Which(name) {
    for (var i = 0; i < events.length; i++) {
        if (name == events[i].name) {
            var num = String(i);
            if (num.length == 1)
                num = '0' + num;
            return num;
        }
    }
}