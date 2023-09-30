var TX = document.querySelector('.Text');
TX.onclick = function () {
    window.location.href = "choose.html";
}

const panels = document.querySelectorAll('.panel');
panels.forEach((item) => {
    item.addEventListener('click', () => {
        panels.forEach((item) => {
            item.classList.remove('active');
        })
        item.classList.add('active');
    });
});

const likes1 = document.querySelector('.panel .likebtn1');
const likes2 = document.querySelector('.panel .likebtn2');
const likes3 = document.querySelector('.panel .likebtn3');
const likes4 = document.querySelector('.panel .likebtn4');
const likes5 = document.querySelector('.panel .likebtn5');
let isLiked1 = true, isLiked2 = true, isLiked3 = true, isLiked4 = true, isLiked5 = true;
let likes = [likes1, likes2, likes3, likes4, likes5];
let isLiked = [isLiked1, isLiked2, isLiked3, isLiked4, isLiked5];

function getRandomItems(arr, num) {
    // 创建一个副本数组，避免影响原数组
    var copyArr = arr.slice();

    // 用于存储随机选取的值
    var result = [];

    for (var i = 0; i < num; i++) {
        // 生成一个随机索引
        var randomIndex = Math.floor(Math.random() * copyArr.length);

        // 将选取的值加入结果数组
        result.push(copyArr[randomIndex]);

        // 将已选取的值从副本数组中删除，避免重复选取
        copyArr.splice(randomIndex, 1);
    }

    return result;
}

const history = document.querySelectorAll('.history');
history.forEach((item) => {
    item.addEventListener('click', () => {
        history.forEach((item) => {
            item.classList.remove('pick');
            item.innerText = "未选中";
        })
        item.classList.add('pick');
        item.innerText = "已选中";
        var p = item.nextSibling.nextSibling.innerText;
        localStorage.setItem('ptrans', p);
    });
});

var finish = document.querySelector('.finish');
finish.onclick = function () {
    var pick = String(localStorage.getItem('ptrans'));
    var Pobj = JSON.parse(localStorage.getItem('Pick' + localStorage.getItem('Now')));
    Pobj.push(String(Pobj[Pobj.length-1]) + pick + Which(pick));
    Pobj.splice(Pobj.length-2, 1);
    console.log(Pobj);
    localStorage.setItem('Pick' + localStorage.getItem('Now'), JSON.stringify(Pobj));
    localStorage.removeItem('ptrans');
    // localStorage.removeItem('Pick' + localStorage.getItem('Now'), JSON.stringify(Pobj));
    window.location.href = "index.html";
}

var p1 = document.querySelector('.p1');
var h1 = document.querySelector('.p1 h3');
var p2 = document.querySelector('.p2');
var h2 = document.querySelector('.p2 h3');
var p3 = document.querySelector('.p3');
var h3 = document.querySelector('.p3 h3');
var p4 = document.querySelector('.p4');
var h4 = document.querySelector('.p4 h3');
var p5 = document.querySelector('.p5');
var h5 = document.querySelector('.p5 h3');
if (localStorage.getItem('Results') != null) {
    var results = localStorage.getItem('Results');
    var names = [];
    var RL = results.length;
    var i = 0, j = 0;
    while (i < RL) {
        while (results[i] != ',')
            i++;
        if (results[i + 1] == 1) {
            var NL = names.length;
            names[NL] = results[j];
            j++;
            for (; j < i; j++)
                names[NL] = names[NL] + results[j];
             console.log(names[NL]);
        }
        i = i + 3;
        j = i;
    }
    if (names.length >= 5) {
        names = getRandomItems(names, 5);
    }
    else {
        for (var i = names.length; i < 5; i++) {
            names[i] = "敬请期待";
            likes[i].innerText = ' ';// ljq
            panels[i].removeChild(panels[i].children[0]);
        }
    }
    // console.log(names);
    p1.style.backgroundImage = "url('./upload/" + names[0] + ".jpg')";
    h1.innerText = names[0];
    p2.style.backgroundImage = "url('./upload/" + names[1] + ".jpg')";
    h2.innerText = names[1];
    p3.style.backgroundImage = "url('./upload/" + names[2] + ".jpg')";
    h3.innerText = names[2];
    p4.style.backgroundImage = "url('./upload/" + names[3] + ".jpg')";
    h4.innerText = names[3];
    p5.style.backgroundImage = "url('./upload/" + names[4] + ".jpg')";
    h5.innerText = names[4];
}

let liked_Data = JSON.parse(localStorage.getItem('liked_Data'+localStorage.getItem('Now'))) || [];// ljq
liked_Data = Array.from(new Map(liked_Data.map(item => [item, item])).values());// ljq

window.addEventListener('beforeunload', function() {
    localStorage.setItem('liked_Data' + localStorage.getItem('Now'), JSON.stringify(liked_Data));
});// ljq

for (var i = 0; i < 5; i++) {
    if (liked_Data.includes(names[i])) {
            likes[i].innerText = '已收藏';
    }
}

if (names.length >= 1) { // 确保有至少1个元素 ljq
    // 收藏 by ljq
    let indexToRemove;

    likes1.onmouseover = function () {
        likes1.style.color = '#666';
    }
    likes1.onmouseout = function () {
        likes1.style.color = '#ececec';
    }
    likes1.addEventListener('click', function() {
        console.log(liked_Data.includes(names[0]));
        if (isLiked1) {
            if (names[0] != "敬请期待" && !liked_Data.includes(names[0])) {
                likes1.innerText = '收藏成功！';
                    liked_Data.push(names[0]);
            }
            else if (liked_Data.includes(names[0])) {
                likes1.innerText = '已收藏';
            }
            else {
                likes1.innerText = ' ';
            }
        } 
        else {
            likes1.innerText = '点击收藏';
            indexToRemove = liked_Data.indexOf(names[0]);
            liked_Data.splice(indexToRemove, 1);
        }
        isLiked1 = !isLiked1;
        console.log(liked_Data);
    });
    
    likes2.onmouseover = function () {
        likes2.style.color = '#666';
    }
    likes2.onmouseout = function () {
        likes2.style.color = '#ececec';
    }
    likes2.addEventListener('click', function() {
        if (isLiked2) {
            if (names[1] != "敬请期待" && !liked_Data.includes(names[1])) {
                likes2.innerText = '收藏成功！';
                liked_Data.push(names[1]);
            }
            else if (liked_Data.includes(names[1])) {
                likes2.innerText = '已收藏';
            }
            else {
                likes2.innerText = ' ';
            }
        } 
        else {
            likes2.innerText = '点击收藏';
            indexToRemove = liked_Data.indexOf(names[1]);
            liked_Data.splice(indexToRemove, 1);
        }
        isLiked2 = !isLiked2;
        console.log(liked_Data);
    });

    likes3.onmouseover = function () {
        likes3.style.color = '#666';
    }
    likes3.onmouseout = function () {
        likes3.style.color = '#ececec';
    }
    likes3.addEventListener('click', function() {
        if (isLiked3) {
            if (names[2] != "敬请期待" && !liked_Data.includes(names[2])) {
                likes3.innerText = '收藏成功！';
                liked_Data.push(names[2]);
            }
            else if (liked_Data.includes(names[2])) {
                likes3.innerText = '已收藏';
            }
            else {
                likes3.innerText = ' ';
            }
        } 
        else {
            likes3.innerText = '点击收藏';
            indexToRemove = liked_Data.indexOf(names[2]);
            liked_Data.splice(indexToRemove, 1);
        }
        isLiked3 = !isLiked3;
        console.log(liked_Data);
    });

    likes4.onmouseover = function () {
        likes4.style.color = '#666';
    }
    likes4.onmouseout = function () {
        likes4.style.color = '#ececec';
    }
    likes4.addEventListener('click', function() {
        if (isLiked4) {
            if (names[3] != "敬请期待" && !liked_Data.includes(names[3])) {
                likes4.innerText = '收藏成功！';
                liked_Data.push(names[3]);
            }
            else if (liked_Data.includes(names[3])) {
                likes4.innerText = '已收藏';
            }
            else {
                likes4.innerText = ' ';
            }
        } 
        else {
            likes4.innerText = '点击收藏';
            indexToRemove = liked_Data.indexOf(names[3]);
            liked_Data.splice(indexToRemove, 1);
        }
        isLiked4 = !isLiked4;
        console.log(liked_Data);
    });

    likes5.onmouseover = function () {
        likes5.style.color = '#666';
    }
    likes5.onmouseout = function () {
        likes5.style.color = '#ececec';
    }
    likes5.addEventListener('click', function() {
        if (isLiked5) {
            if (names[4] != "敬请期待" && !liked_Data.includes(names[4])) {
                likes5.innerText = '收藏成功！';
                liked_Data.push(names[4]);
            }
            else if (liked_Data.includes(names[4])) {
                likes5.innerText = '已收藏';
            }
            else {
                likes5.innerText = ' ';
            }
        } 
        else {
            likes5.innerText = '点击收藏';
            indexToRemove = liked_Data.indexOf(names[4]);
            liked_Data.splice(indexToRemove, 1);
        }
        isLiked5 = !isLiked5;
        console.log(liked_Data);
    });
}

for (i = 0; i < liked_Data.length; i++) {
    if (liked_Data[i] == null || liked_Data[i] == undefined) {
        indexToRemove = liked_Data.indexOf(liked_Data[i]);
        liked_Data.splice(indexToRemove, 1); 
    }
}