let liked_Data = JSON.parse(localStorage.getItem('liked_Data' + localStorage.getItem('Now')));// ljq
if (liked_Data != null) {
    liked_Data = Array.from(new Map(liked_Data.map(item => [item, item])).values());// ljq
    var indexToRemove;
    console.log(liked_Data);
    for (i = 0; i < liked_Data.length; i++) {
        if (liked_Data[i] == null || liked_Data[i] == undefined) {
            indexToRemove = liked_Data.indexOf(liked_Data[i]);
            liked_Data.splice(indexToRemove, 1);
        }
    }

    window.addEventListener('beforeunload', function () {
        localStorage.setItem('liked_Data' + localStorage.getItem('Now'), JSON.stringify(liked_Data));
    });// ljq
}
else {
    liked_Data = [];
}

for (i = 0; i < events.length; i++) {
    if (events[i].name != "敬请期待") {
        var like = document.createElement('div');
        like.classList.add('likebtn');
        var activity = document.createElement('span');
        var activitymeta = document.createElement('div');
        activitymeta.classList.add('meta');
        var container = document.querySelector('.objects');
        activity.appendChild(activitymeta);
        activity.appendChild(like);
        container.appendChild(activity);
        console.log(events[i].name + '.jpg');
        activitymeta.innerHTML = events[i].name;
        activity.style.background = "url('./upload/" + events[i].name + ".jpg')";
        activity.style.backgroundSize = "cover";
    }

}

var btn = document.querySelectorAll('.likebtn');

for (let i = 0; i < events.length; i++) {
    btn[i].onmouseover = function () {
        btn[i].style.color = '#666';
    }
    btn[i].onmouseout = function () {
        btn[i].style.color = '#ececec';
    }
    if (liked_Data.includes(events[i].name)) {
        btn[i].innerHTML = "已收藏";
        btn[i].style.background = '#ffc341';
        btn[i].style.width = '55px';
    }
    else {
        btn[i].innerHTML = "点击收藏";
        btn[i].style.width = '70px';
    }

    (function (i) {
        btn[i].addEventListener('click', function () {
            if (!liked_Data.includes(events[i].name)) {
                btn[i].innerHTML = '收藏成功！';
                btn[i].style.background = '#ffc341';
                btn[i].style.width = '80px';
                liked_Data.push(events[i].name);
            }
            else {
                btn[i].innerHTML = '点击收藏';
                btn[i].style.background = "rgb(48, 65, 100)";
                btn[i].style.width = '70px';
                indexToRemove = liked_Data.indexOf(events[i].name);
                liked_Data.splice(indexToRemove, 1);
            }
            console.log(liked_Data);
        });
    })(i);

}
window.addEventListener('beforeunload', function () {
    localStorage.setItem('liked_Data' + localStorage.getItem('Now'), JSON.stringify(liked_Data));
});// ljq