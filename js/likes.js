let liked_Data = JSON.parse(localStorage.getItem('liked_Data' + localStorage.getItem('Now')));// ljq
if (liked_Data != null && liked_Data.length > 0) {
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

    var caseDiv, likecaseDiv, likebtnDiv, backgroundDiv, container, validcase;

    for (i = 0; i < liked_Data.length; i++) {
        caseDiv = document.createElement('div');
        caseDiv.classList.add('case');

        likecaseDiv = document.createElement('div');
        likecaseDiv.classList.add('likecase');
        caseDiv.appendChild(likecaseDiv);

        likebtnDiv = document.createElement('div');
        likebtnDiv.classList.add('likebtn');
        caseDiv.appendChild(likebtnDiv);

        backgroundDiv = document.createElement('div');
        backgroundDiv.classList.add('background_pic');
        caseDiv.appendChild(backgroundDiv);

        container = document.querySelector('.workplace');
        container.appendChild(caseDiv);

        likecaseDiv.innerHTML = liked_Data[i];
        likebtnDiv.innerHTML = "点击取消收藏";
        backgroundDiv.style.background = "url('./upload/" + liked_Data[i] + ".jpg')";
        backgroundDiv.style.backgroundSize = "cover";
    }

    var btn = document.querySelectorAll('.likebtn');
    var names = document.getElementsByClassName('likecase');
    var isLiked = false;


    for (let i = 0; i < liked_Data.length; i++) {
        (function (i) {
            btn[i].addEventListener('click', function () {
                console.log(liked_Data.includes(names[i].textContent));
                if (isLiked) {
                    btn[i].innerHTML = '收藏成功！';
                    liked_Data.push(names[i].textContent);
                }
                else {
                    btn[i].innerHTML = '点击收藏';
                    indexToRemove = liked_Data.indexOf(names[i].textContent);
                    liked_Data.splice(indexToRemove, 1);
                }
                isLiked = !isLiked;
                console.log(liked_Data);
            });
        })(i);
    }
}
else if (liked_Data.length == 0) {
    validcase = document.createElement('div');
    container = document.querySelector('.workplace');
    container.appendChild(validcase);
    validcase.innerHTML = '你暂时没有收藏活动噢~';
}
