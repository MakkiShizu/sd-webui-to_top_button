class OnTheGo {
    static addToTopButton(referenceButton) {
        const jump = referenceButton.cloneNode();
        jump.innerHTML = 'To Top';
        jump.addEventListener('click', () => {
            const scrollToTop = () => {
                const c = document.documentElement.scrollTop || document.body.scrollTop;
                if (c > 0) {
                    window.requestAnimationFrame(scrollToTop);
                    window.scrollTo(0, c - c / 8);
                }
            };
            scrollToTop();
        });

        jump.style.position = 'fixed';
        jump.style.bottom = '50px';
        jump.style.right = '50px';
        jump.style.width = '80px';
        jump.style.height = '80px';
        jump.style.borderRadius = '50%';
        jump.style.overflow = 'hidden';
        jump.style.cursor = 'pointer';
        jump.style.transition = 'background-color 0.5s';

        document.body.appendChild(jump);
    }

    static main() {
        ['txt', 'img'].forEach((mode) => {
            const referenceButton = document.getElementById(mode + '2img_generate');
            OnTheGo.addToTopButton(referenceButton);
        });
    }
}

onUiLoaded(async () => OnTheGo.main());