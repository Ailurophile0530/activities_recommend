var btn = document.querySelector('button');
btn.onclick = function () {
    var pobj = JSON.parse(localStorage.getItem('Pick' + localStorage.getItem('Now')));
    pobj.splice(pobj.length - 1, 1);
    localStorage.setItem('Pick' + localStorage.getItem('Now'), JSON.stringify(pobj));
    location.reload(true);
}

var TX = document.querySelector('.Text');
TX.onclick = function () {
    window.location.href = "choose.html";
}
var UL = new Array();
var UL1 = document.querySelector('.Jan ul');
var UL2 = document.querySelector('.Feb ul');
var UL3 = document.querySelector('.Mar ul');
var UL4 = document.querySelector('.Apr ul');
var UL5 = document.querySelector('.May ul');
var UL6 = document.querySelector('.June ul');
var UL7 = document.querySelector('.July ul');
var UL8 = document.querySelector('.Aug ul');
var UL9 = document.querySelector('.Sept ul');
var UL10 = document.querySelector('.Oct ul');
var UL11 = document.querySelector('.Nov ul');
var UL12 = document.querySelector('.Dec ul');
UL.push(UL1);
UL.push(UL2);
UL.push(UL3);
UL.push(UL4);
UL.push(UL5);
UL.push(UL6);
UL.push(UL7);
UL.push(UL8);
UL.push(UL9);
UL.push(UL10);
UL.push(UL11);
UL.push(UL12);
var Pobj = JSON.parse(localStorage.getItem('Pick' + localStorage.getItem('Now')));
if (Pobj != null) {
    for (var i = 0; i < Pobj.length; i++) {
        k = parseInt(Pobj[i].substring(5, 7));
        console.log(k);
        var Li = document.createElement('li');
        Li.innerText = Pobj[i].substring(0, 10) + ' ' + Pobj[i].substring(10, Pobj[i].length - 2)
        UL[k - 1].appendChild(Li);
    }
}