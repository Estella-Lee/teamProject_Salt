// 인트로 글자 슬라이드
const introSpan = document.querySelectorAll('.intro span');

introLetterSlide();

function introLetterSlide() {
    introSpan[0].style.animation = 'introLetter 4s';
    introSpan[1].style.animation = 'introLetter 3s';
    introSpan[2].style.animation = 'introLetter 2s';
    introSpan[3].style.animation = 'introLetter 1s';
}

// 오디션 본문 효과
const video = document.querySelector('.mainVideo video');
const audition = document.querySelector('.audition');

let videoHeight = video.offsetHeight;

window.onscroll = () => { auditionSilde() };

function auditionSilde() {
    audition.classList.toggle('noticeEffect', window.scrollY >= videoHeight/5);
}
