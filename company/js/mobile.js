// 모바일 메뉴 버튼
const mobileBtn = document.querySelector('.mobileBtn');
const mobileBtnBar = document.querySelectorAll('.mobileBtn span');
const mobileMenu = document.querySelector('.mobileMenu');
const gnb = document.querySelector('.gnb');
const gnbList = document.querySelectorAll('.gnb li');
const logoMenu = document.querySelector('.logoMenu');
const loginSignup = document.querySelector('.loginSignup');
const loginSignupLink = document.querySelectorAll('.loginSignup a');

mobileBtn.onclick = () => {
    mobileBtnBar[0].classList.toggle('hidden');
    mobileBtnBar[1].classList.toggle('rotate');
    mobileBtnBar[1].classList.toggle('closeBar');
    mobileBtnBar[2].classList.toggle('hidden');


    if (mobileBtnBar[0].classList.contains('hidden')) {
        logoMenu.style.height = '350px';
    } else if (!mobileBtnBar[0].classList.contains('hidden')) {
        logoMenu.style.height = '55px';
    }
}