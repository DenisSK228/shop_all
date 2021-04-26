const animItems = document.querySelectorAll('._anim-items')

if (animItems.length > 0) {
    function anim_on_scroll(params) {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                let animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }


        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scroolLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop,
        return { top: rect.top + scrollTop, left: rect.left + scroolLeft }
    }
}