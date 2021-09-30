const newsAllList = document.getElementById('newsAllList');
const newsList = document.getElementsByClassName('newsList');
const newsSlideBtn = document.getElementsByClassName('newsSlideBtn');
const more = document.querySelectorAll('.newsCon .contents a');

const articleCloseBtn = document.querySelectorAll('.articleFullText .closeBtn');
const articleFullText = document.querySelectorAll('.articleFullText .fullText');

const noticeCloseBtn = document.querySelectorAll('.noticeFullText .closeBtn');
const noticeFullText = document.querySelectorAll('.noticeFullText .fullText');
const noticeList = document.querySelectorAll('.noticeList li');

const noticeTitle = document.querySelectorAll('.noticeContents h3');
const nextNoticeTitle = document.querySelectorAll('.nextPrevBtn p:first-child');
const prevNoticeTitle = document.querySelectorAll('.nextPrevBtn p:last-child');


// 뉴스 슬라이드

for (let i=0; i<newsSlideBtn.length; i++) {
    newsSlideBtn[i].onclick = function() { slide(i) };
}


function slide(i) {
    newsAllList.style.transform = 'translateX(' + -10 * i + '%)';
    newsSlideBtn[i].style.backgroundColor = '#6f6f6f';

    for (let j=0; j<newsSlideBtn.length; j++) {
        if (j != i) newsSlideBtn[j].style.backgroundColor = '#bdbdbd';
    }
}



// 전체 기사 & 공지
for (let i=0; i<more.length; i++) {
    more[i].onclick = function() { moreArticle(i) };
    articleCloseBtn[i].onclick = function() { closeArticle(i) };
}

for (let i=0; i<noticeList.length; i++) {
    noticeList[i].onclick = function() { moreNotice(i) };
    noticeCloseBtn[i].onclick = function() { closeArticle(i) };
}

function moreArticle(i) {
    articleFullText[i].style.transform = 'translateY(0%)';
    articleFullText[i].style.overflowY = 'scroll';
    document.body.style.overflowY = 'hidden';
}

function moreNotice(i) {
    noticeFullText[i].style.transform = 'translateY(0%)';
    noticeFullText[i].style.overflowY = 'scroll';
    document.body.style.overflowY = 'hidden';
}

function closeArticle(i) {
    articleFullText[i].style.transform = 'translateY(100%)';
    articleFullText[i].style.overflowY = 'hidden';

    noticeFullText[i].style.transform = 'translateY(100%)';
    noticeFullText[i].style.overflowY = 'hidden';
    document.body.style.overflowY = 'scroll';
}



// 공지 이전글 다음글
for (let i=0; i<noticeList.length; i++) {
    plusPrevNext(i);
}

function plusPrevNext(i) {
    if (i > 0) {
        const nextTitle = document.createElement('a');
        nextTitle.innerHTML = noticeTitle[i-1].innerHTML;

        const next = nextNoticeTitle[i].appendChild(nextTitle);

        next.onclick = function() {
            window.open("", "_self");
            closeArticle(i);
            moreNotice(i-1);
        }
    }

    if (i < noticeTitle.length -1) {
        const prevTitle = document.createElement('a');
        prevTitle.innerHTML = noticeTitle[i+1].innerHTML;
    
        const prev = prevNoticeTitle[i].appendChild(prevTitle);

        prev.onclick = function() {
            moreNotice(i+1);
            closeArticle(i);
        }
    }
}


// more
const moreBtn = document.querySelector('.more span');
const noticeAllList = document.querySelector('#noticeAllList');

moreBtn.onclick = () => {
    noticeAllList.style.height = '1500px'

    listChange(6);

    function listChange(j) {
        for (let i=j; i < noticeList.length; i++) {
            noticeList[i].classList.add('listPop');
        }

        moreBtn.innerHTML = 'End';
    }

    if (window.matchMedia("(max-width: 1024px)").matches) {
        noticeAllList.style.height = '1350px'
        listChange(6);
    }
    
    if (window.matchMedia("(max-width: 764px)").matches) {
        noticeAllList.style.height = '1500px'
        listChange(7);
    }

    if (window.matchMedia("(max-width: 640px)").matches) {
        noticeAllList.style.height = '1250px'
        listChange(7);
    }
}
