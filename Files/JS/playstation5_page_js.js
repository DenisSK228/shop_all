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
    }, 200)
    
}

const vw = window.innerWidth / 100;
const vh = window.innerHeight / 100;
const px = vw / document.documentElement.clientWidth

let el = document.querySelector('#anchor'),
    els = el.querySelectorAll('.li_spec'),
    elp = el.getBoundingClientRect();

els.forEach(function (e,i) {
    e.setAttribute('data-anchor-target', '#anchor');
  e.setAttribute('data-750', 'left:0%; opasity: 1;');
  e.setAttribute('data-' + Math.floor(200-(20*i)) + 'p-top', 'left:400%; opasity: 0;');
});

skrollr.init();