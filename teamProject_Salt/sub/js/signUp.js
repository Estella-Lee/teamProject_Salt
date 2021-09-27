const arrow = document.getElementsByClassName('arrowImg');
const contents = document.querySelectorAll('.contents');

const emailSelect = document.querySelector('#email');
const emailInput = document.querySelector('.email .lastEmail');

const allAgree = document.getElementById('allAgree');
const over14 = document.getElementById('over14');
const termsOfUse = document.getElementById('termsOfUse');
const personalInfoProcess = document.getElementById('personalInfoProcess');


// 약관 열기
arrow[0].onclick = function() { controler(0) };
arrow[1].onclick = function() { controler(1) };

function controler(i) {
    const currentClass = contents[i].classList.contains('open');
    contents[i].classList.toggle('open');

    if (!currentClass) {
        openContents(i)
    } else {
        closeContents(i)
    }
}

function openContents(i) {
    arrow[i].style.transform = 'rotate(180deg)';
    contents[i].style.height = '330px';
    contents[i].style.padding = '10px 20px';
}

function closeContents(i) {
    arrow[i].style.transform = 'rotate(0deg)';
    contents[i].style.height = '0';
    contents[i].style.padding = '0 20px';
}


// 이메일 도메인 자동 입력
function emailDomainInput() {
    emailSelect.onchange = () => {
        emailInput.value = emailSelect.value;
    }
}

emailDomainInput();


// 전체 동의 체크
allAgree.onclick = () => {
    if(allAgree.checked) {
        over14.checked = true;
        termsOfUse.checked = true;
        personalInfoProcess.checked = true;
    } else {
        over14.checked = false;
        termsOfUse.checked = false;
        personalInfoProcess.checked = false;
    }
}