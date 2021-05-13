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

const vw = window.innerWidth / 100;
const vh = window.innerHeight / 100;
const px = vw / document.documentElement.clientWidth

let el = document.querySelector('#rgb'),
    els = el.querySelectorAll('.li_spec'),
    elp = el.getBoundingClientRect();

els.forEach(function (e,i) {
    e.setAttribute('data-anchor-target', '#rgb');
    e.setAttribute('data-550', 'left: 0%; opasity: 1;');
    e.setAttribute('data-' + Math.floor(200-(20*i)) + 'p-top', 'left: 400%; opasity: 0;');
});


let elr = document.querySelector('#main5_anchor'),
    elsr = elr.querySelectorAll('.li_sup_spec'),
    elpr = elr.getBoundingClientRect();

elsr.forEach(function (egs,i) {
    egs.setAttribute('data-anchor-target', '#main5_anchor');
    egs.setAttribute('data-4850', 'left: 3%; opasity: 1;');
    egs.setAttribute('data-' + Math.floor(400-(20*i)) + 'p-top', 'left: 400%; opasity: 0;');
});

skrollr.init();