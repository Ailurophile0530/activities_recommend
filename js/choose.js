// localStorage.removeItem('Pick111');
var hobby = [];
var place = [];
var weather = [];
function Charge(obj, array, k) {
    if (obj.getAttribute('flag') == 'no') {
        obj.style.backgroundColor = '#ffebcd';
        obj.style.color = '#666';
        obj.setAttribute('flag', k);
        Insert(array, k);
    }
    else {
        obj.style.backgroundColor = '#6495ed';
        obj.style.color = '#ececec';
        Delete(array, k);
        obj.setAttribute('flag', 'no');
    }
    // console.log(array);
}
function Exclusive() {
    for (var i = 0; i < arguments.length; i++) {
        arguments[i].style.backgroundColor = '#6495ed';
        arguments[i].style.color = '#ececec';
        Delete(weather, arguments[i].getAttribute('flag'));
        arguments[i].setAttribute('flag', 'no');
    }
}

var art = document.querySelector('.art');
var pe = document.querySelector('.pe');
var diy = document.querySelector('.diy');
var food = document.querySelector('.food');
var hang = document.querySelector('.hang');
var nature = document.querySelector('.nature');
var film = document.querySelector('.film');
var game = document.querySelector('.game');
var beauty = document.querySelector('.beauty');
var culture = document.querySelector('.culture');
art.onclick = function () {
    Charge(this, hobby, 1);
}
pe.onclick = function () {
    Charge(this, hobby, 2);
}
diy.onclick = function () {
    Charge(this, hobby, 3);
}
food.onclick = function () {
    Charge(this, hobby, 4);
}
hang.onclick = function () {
    Charge(this, hobby, 5);
}
nature.onclick = function () {
    Charge(this, hobby, 6);
}
film.onclick = function () {
    Charge(this, hobby, 7);
}
game.onclick = function () {
    Charge(this, hobby, 8);
}
beauty.onclick = function () {
    Charge(this, hobby, 9);
}
culture.onclick = function () {
    Charge(this, hobby, 10);
}

var indoor = document.querySelector('.indoor');
var outdoor = document.querySelector('.outdoor');
indoor.onclick = function () {
    Charge(this, place, 1);
}
outdoor.onclick = function () {
    Charge(this, place, 2);
}

var sun = document.querySelector('.sun');
var cloud = document.querySelector('.cloud');
var rain = document.querySelector('.rain');
var fog = document.querySelector('.fog');
sun.onclick = function () {
    Exclusive(sun, cloud, rain, fog);
    Charge(this, weather, 1);
}
cloud.onclick = function () {
    Exclusive(sun, cloud, rain, fog);
    Charge(this, weather, 2);
}
rain.onclick = function () {
    Exclusive(sun, cloud, rain, fog);
    Charge(this, weather, 3);
}
fog.onclick = function () {
    Exclusive(sun, cloud, rain, fog);
    Charge(this, weather, 4);
}


var day = document.querySelector('.day');
var start = document.querySelector('.start');
var end = document.querySelector('.end');
console.log(day.value);
if (localStorage.getItem('Results') != null) {
    localStorage.removeItem("Results");
}
var comfirm = document.querySelector('.comfirm');
comfirm.onclick = function () {
if(day.value!="")
{
    var p;
    if (localStorage.getItem('Pick' + localStorage.getItem('Now')) == null)
        p = new Array();
    else
    {
        p = JSON.parse(localStorage.getItem('Pick' + localStorage.getItem('Now')));
        if (p != null && p.length != 0) {
            if (p[p.length - 1].length == 10)
                p.splice(p.length - 1, 1);
        }
    }
    console.log(day.value);
    p.push(String(day.value));
    localStorage.setItem('Pick' + localStorage.getItem('Now'), JSON.stringify(p));
    var results = [];
    var L = events.length;
    for (var i = 0; i < L; i++) {
        var lh = hobby.length;
        var lp = place.length;
        var lw = events[i].weather.length;
        for (var k = 0; k < lh; k++) {
            if (hobby[k] == events[i].hobby) {
                events[i].key[0] = 1;
                break;
            }
        }
        for (var k = 0; k < lp; k++) {
            if (place[k] == events[i].place) {
                events[i].key[1] = 1;
                break;
            }
        }
        for (var k = 0; k < lw; k++) {
            if (weather[0] == events[i].weather[k]) {
                events[i].key[2] = 1;
                break;
            }
        }
        if (parseInt(start.value) >= parseInt(events[i].start) && parseInt(end.value) <= parseInt(events[i].end)) {
            // console.log('111');
            events[i].key[3] = 1;
        }
        if (events[i].key[0] == 1 && events[i].key[1] == 1 && events[i].key[2] == 1 && events[i].key[3] == 1)
            Insert(results, [events[i].name, 1]);
        else
            Insert(results, [events[i].name, 0]);
        // console.log(events[i].name);
        // console.log(events[i].key);
    }
    localStorage.setItem("Results", results);
    window.location.href = "result.html";
}
}
