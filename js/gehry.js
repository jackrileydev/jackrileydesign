

  /* NAME TYPEFACE SCROLLING EFFECT */

  document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('name');
    let isThrottled = false;

    const fontFamilies = [
        getComputedStyle(document.documentElement).getPropertyValue('--sI_t01_family').trim(),
        getComputedStyle(document.documentElement).getPropertyValue('--sI_t02_family').trim(),
        getComputedStyle(document.documentElement).getPropertyValue('--sI_t03_family').trim(),
        getComputedStyle(document.documentElement).getPropertyValue('--sI_t04_family').trim(),
        getComputedStyle(document.documentElement).getPropertyValue('--sI_t05_family').trim(),
        'diatype'
    ];
    let lastFontFamily = 'diatype';

    function changeFontFamily() {
        let newFontFamily;
        do {
            newFontFamily = fontFamilies[Math.floor(Math.random() * fontFamilies.length)];
        } while (newFontFamily === lastFontFamily);
        lastFontFamily = newFontFamily;
        textElement.style.fontFamily = newFontFamily;

        clearTimeout(textElement.revertTimeout);
        textElement.revertTimeout = setTimeout(() => {
            textElement.style.fontFamily = 'diatype';
        }, 300);
    }

    document.addEventListener('wheel', () => {
        if (!isThrottled) {
            changeFontFamily();
            isThrottled = true;
            setTimeout(() => {
                isThrottled = false;
            }, 63);
        }
    });
});
