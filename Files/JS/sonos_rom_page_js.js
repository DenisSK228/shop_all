const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', () => {
        anim_on_scroll()
    })

    function anim_on_scroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = (window.innerHeight - animItemHeight / animStart);
            if (animItemHeight > window.innerHeight) {
                animItemPoint = (window.innerHeight - window.innerHeight / animStart);
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim_no_restart')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scroolLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scroolLeft }
    }

    setTimeout(() => {
        anim_on_scroll();
    }, 300)
    
}

const playbackConst_v = 500;
const video = document.getElementById('video');
const animItemOffset_v = offset(video).top;
const animItemHeight_v = video.offsetHeight;
const animStart_v = 4;
let animItemPoint = (window.innerHeight - animItemHeight_v / animStart_v);

function scroll() {
  const frameNumber = window.pageYOffset / playbackConst_v;
  video.currentTime = frameNumber;
  window.requestAnimationFrame(scroll);
}
if ((pageYOffset - 1000 > animItemOffset_v - animItemPoint ) && pageYOffset - 1000 < (animItemOffset_v + animItemHeight_v )) {
    window.requestAnimationFrame(scroll);
}


function offset(el) {
    const rect = el.getBoundingClientRect(),
        scroolLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return { top: rect.top + scrollTop, left: rect.left + scroolLeft }
}