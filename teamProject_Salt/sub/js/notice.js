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
newsSlideBtn[0].onclick = function() { slide(0) };
newsSlideBtn[1].onclick = function() { slide(1) };
newsSlideBtn[2].onclick = function() { slide(2) };
newsSlideBtn[3].onclick = function() { slide(3) };
newsSlideBtn[4].onclick = function() { slide(4) };
newsSlideBtn[5].onclick = function() { slide(5) };
newsSlideBtn[6].onclick = function() { slide(6) };
newsSlideBtn[7].onclick = function() { slide(7) };
newsSlideBtn[8].onclick = function() { slide(8) };
newsSlideBtn[9].onclick = function() { slide(9) };


function slide(i) {
    newsAllList.style.transform = 'translateX(' + -10 * i + '%)';
    newsSlideBtn[i].style.backgroundColor = '#6f6f6f';

    for (let j=0; j<newsSlideBtn.length; j++) {
        if (j != i) newsSlideBtn[j].style.backgroundColor = '#bdbdbd';
    }
}



// 전체 기사 & 공지
more[0].onclick = function() { moreArticle(0) };
more[1].onclick = function() { moreArticle(1) };
more[2].onclick = function() { moreArticle(2) };
more[3].onclick = function() { moreArticle(3) };
more[4].onclick = function() { moreArticle(4) };
more[5].onclick = function() { moreArticle(5) };
more[6].onclick = function() { moreArticle(6) };
more[7].onclick = function() { moreArticle(7) };
more[8].onclick = function() { moreArticle(8) };
more[9].onclick = function() { moreArticle(9) };

noticeList[0].onclick = function() { moreNotice(0) };
noticeList[1].onclick = function() { moreNotice(1) };
noticeList[2].onclick = function() { moreNotice(2) };
noticeList[3].onclick = function() { moreNotice(3) };
noticeList[4].onclick = function() { moreNotice(4) };
noticeList[5].onclick = function() { moreNotice(5) };
noticeList[6].onclick = function() { moreNotice(6) };
noticeList[7].onclick = function() { moreNotice(7) };
noticeList[8].onclick = function() { moreNotice(8) };
noticeList[9].onclick = function() { moreNotice(9) };

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

articleCloseBtn[0].onclick = function() { closeArticle(0) };
articleCloseBtn[1].onclick = function() { closeArticle(1) };
articleCloseBtn[2].onclick = function() { closeArticle(2) };
articleCloseBtn[3].onclick = function() { closeArticle(3) };
articleCloseBtn[4].onclick = function() { closeArticle(4) };
articleCloseBtn[5].onclick = function() { closeArticle(5) };
articleCloseBtn[6].onclick = function() { closeArticle(6) };
articleCloseBtn[7].onclick = function() { closeArticle(7) };
articleCloseBtn[8].onclick = function() { closeArticle(8) };
articleCloseBtn[9].onclick = function() { closeArticle(9) };

noticeCloseBtn[0].onclick = function() { closeArticle(0) };
noticeCloseBtn[1].onclick = function() { closeArticle(1) };
noticeCloseBtn[2].onclick = function() { closeArticle(2) };
noticeCloseBtn[3].onclick = function() { closeArticle(3) };
noticeCloseBtn[4].onclick = function() { closeArticle(4) };
noticeCloseBtn[5].onclick = function() { closeArticle(5) };
noticeCloseBtn[6].onclick = function() { closeArticle(6) };
noticeCloseBtn[7].onclick = function() { closeArticle(7) };
noticeCloseBtn[8].onclick = function() { closeArticle(8) };
noticeCloseBtn[9].onclick = function() { closeArticle(9) };

function closeArticle(i) {
    articleFullText[i].style.transform = 'translateY(100%)';
    articleFullText[i].style.overflowY = 'hidden';

    noticeFullText[i].style.transform = 'translateY(100%)';
    noticeFullText[i].style.overflowY = 'hidden';
    document.body.style.overflowY = 'scroll';
}



// 공지 이전글 다음글
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

plusPrevNext(0);
plusPrevNext(1);
plusPrevNext(2);
plusPrevNext(3);
plusPrevNext(4);
plusPrevNext(5);
plusPrevNext(6);
plusPrevNext(7);
plusPrevNext(8);
plusPrevNext(9);


// more
const moreBtn = document.querySelector('.more span');
const noticeAllList = document.querySelector('#noticeAllList');

moreBtn.onclick = () => {
    noticeAllList.style.height = '1500px'

    function listChange(j) {
        for (let i=j; i < noticeList.length; i++) {
            noticeList[i].classList.add('listPop');
        }

        moreBtn.innerHTML = 'End';
    }

    listChange(6);

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
