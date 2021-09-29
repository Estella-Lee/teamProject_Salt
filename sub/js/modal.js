const open1 = document.querySelector(".open1");
const modal1 = document.querySelector(".modal1");
const close1 = document.querySelector(".modal1_Bg");

function init1() {
    open1.addEventListener("click", function () {
        modal1.classList.remove("hidden");
    });

    close1.addEventListener("click", function () {
        modal1.classList.add("hidden");
    });
}

init1();


const open2 = document.querySelector(".open2");
const modal2 = document.querySelector(".modal2");
const close2 = document.querySelector(".modal2_Bg");

function init2() {
    open2.addEventListener("click", function () {
        modal2.classList.remove("hidden");
    });

    close2.addEventListener("click", function () {
        modal2.classList.add("hidden");
    });
}

init2();

const open3 = document.querySelector(".open3");
const modal3 = document.querySelector(".modal3");
const close3 = document.querySelector(".modal3_Bg");

function init3() {
    open3.addEventListener("click", function () {
        modal3.classList.remove("hidden");
    });

    close3.addEventListener("click", function () {
        modal3.classList.add("hidden");
    });
}

init3();


const open4 = document.querySelector(".open4");
const modal4 = document.querySelector(".modal4");
const close4 = document.querySelector(".modal4_Bg");

function init4() {
    open4.addEventListener("click", function () {
        modal4.classList.remove("hidden");
    });

    close4.addEventListener("click", function () {
        modal4.classList.add("hidden");
    });
}

init4();

const open5 = document.querySelector(".open5");
const modal5 = document.querySelector(".modal5");
const close5 = document.querySelector(".modal5_Bg");

function init5() {
    open5.addEventListener("click", function () {
        modal5.classList.remove("hidden");
    });

    close5.addEventListener("click", function () {
        modal5.classList.add("hidden");
    });
}

init5();

const open6 = document.querySelector(".open6");
const modal6 = document.querySelector(".modal6");
const close6 = document.querySelector(".modal6_Bg");

function init6() {
    open6.addEventListener("click", function () {
        modal6.classList.remove("hidden");
    });

    close6.addEventListener("click", function () {
        modal6.classList.add("hidden");
    });
}

init6();


const moreBtn = document.querySelector(".photoLine .more");
const moreImg = document.querySelector(".imgWrapper2");
const closeBtn = document.querySelector(".close");

function dbg() {
    moreBtn.addEventListener("click", function () {
        moreImg.classList.remove("hidden");
        moreBtn.classList.add("hidden");
        closeBtn.classList.remove("hidden");
    });

    closeBtn.addEventListener("click", function () {
        moreImg.classList.add("hidden");
        moreBtn.classList.remove("hidden");
        closeBtn.classList.add("hidden");
    })

}


dbg();

const moreBtn2 = document.querySelector(".videoLine .more");
const moreVid = document.querySelector(".videoWrapper2");
const closeBtn2 = document.querySelector(".videoLine .close");

function dbg2() {
    moreBtn2.addEventListener("click", function () {
        moreVid.classList.remove("hidden");
        moreBtn2.classList.add("hidden");
        closeBtn2.classList.remove("hidden");
    });

    closeBtn2.addEventListener("click", function () {
        moreVid.classList.add("hidden");
        moreBtn2.classList.remove("hidden");
        closeBtn2.classList.add("hidden");
    })

}


dbg2();






