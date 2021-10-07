// Scroll Animation (스크롤 애니메이션)
window.onload = function () {
    const scrAniTriggerMargin = 250;
        const scrAniElementList = document.querySelectorAll('.scrAni');
  
        const scrAniFunc = function() {
          for (const element of scrAniElementList) {
            if (!element.classList.contains('show')) {
              if (window.innerHeight > element.getBoundingClientRect().top + scrAniTriggerMargin) {
                element.classList.add('show');
              }
            }
          }
        }
  
        window.addEventListener('load', scrAniFunc);
        window.addEventListener('scroll', scrAniFunc);
}