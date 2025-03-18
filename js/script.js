/* COLOR UPDATE EFFECT */

window.addEventListener('load', () => {
  const swContainer = document.querySelector('.sw_container');
  const swElements = Array.from(document.querySelectorAll('[id^="sw"]'));

  const styleMap = {
    sw01: {
      body: {
        color: 'var(--gm_white)',
        backgroundImage: 'radial-gradient(#757575, #616161, #939393, #616161)'
      },
      '#name:hover': { color: 'var(--gm_black)' },
      '#info:hover': { color: 'var(--gm_black)' },
      '#information:hover': { color: 'var(--gm_black)' },
      '#experiments:hover': { color: 'var(--gm_black)' },
      '#archive:hover': { color: 'var(--gm_black)' },
      '#otis, #gc, #hxouse': { color: 'var(--gm_white)' },
      '#otis:hover': { color: 'var(--gm_black)' },
      '#gc:hover': { color: 'var(--gm_black)' },
      '#hxouse:hover': { color: 'var(--gm_black)' },
      '#currently': { color: 'var(--gm_lightGrey)' },
      '.individual_sw_project': { borderLeft: '1.4px solid var(--gm_darkGrey)' },
      '#sw01:hover': { color: 'var(--gm_black)' },
      '#sw02:hover': { color: 'var(--gm_black)' },
      '#sw03:hover': { color: 'var(--gm_black)' },
      '#sw04:hover': { color: 'var(--gm_black)' },
      '#sw05:hover': { color: 'var(--gm_black)' },
      '.p_body': { color: 'var(--gm_grey)' },
      '.footer': { color: 'var(--gm_darkGrey)' }
    },
    sw02: {
      body: {
        color: 'var(--dm_black)',
        backgroundImage: 'radial-gradient(#eeeeee, #e9fbe6, #eeeeee, #eeeeee, #eeeeee, #66a2ea, #7eda6b, #f6d462)'
      },
      '#name:hover': { color: 'var(--dm_lightGrey)' },
      '#information:hover': { color: 'var(--dm_lightGrey)' },
      '#info:hover': { color: 'var(--dm_lightGrey)' },
      '#experiments:hover': { color: 'var(--dm_lightGrey)' },
      '#archive:hover': { color: 'var(--dm_lightGrey)' },
      '#otis, #gc, #hxouse': { color: 'var(--dm_black)' },
      '#otis:hover': { color: 'var(--dm_lightGrey)' },
      '#gc:hover': { color: 'var(--dm_lightGrey)' },
      '#hxouse:hover': { color: 'var(--dm_lightGrey)' },
      '#currently': { color: 'var(--dm_darkGrey)' },
      '.individual_sw_project': { borderLeft: '1.4px solid var(--gm_lightGrey)' },
      '#sw01:hover': { color: 'var(--dm_lightGrey)' },
      '#sw02:hover': { color: 'var(--dm_lightGrey)' },
      '#sw03:hover': { color: 'var(--dm_lightGrey)' },
      '#sw04:hover': { color: 'var(--dm_lightGrey)' },
      '#sw05:hover': { color: 'var(--dm_lightGrey)' },
      '.p_body': { color: 'var(--dm_grey)' },
      '.footer': { color: 'var(--dm_lightGrey)' }
    },
    sw03: {
      body: {
        color: 'var(--lm_white)',
        backgroundImage: 'radial-gradient(#F2F2F2, #000000, #000000)'
      },
      '#name:hover': { color: 'var(--lm_darkGrey)' },
      '#information:hover': { color: 'var(--lm_darkGrey)' },
      '#info:hover': { color: 'var(--lm_darkGrey)' },
      '#experiments:hover': { color: 'var(--lm_darkGrey)' },
      '#archive:hover': { color: 'var(--lm_darkGrey)' },
      '#otis, #gc, #hxouse': { color: 'var(--lm_white)' },
      '#otis:hover': { color: 'var(--lm_darkGrey)' },
      '#gc:hover': { color: 'var(--lm_darkGrey)' },
      '#hxouse:hover': { color: 'var(--lm_darkGrey)' },
      '#currently': { color: 'var(--lm_lightGrey)' },
      '.individual_sw_project': { borderLeft: '1.4px solid var(--gm_darkGrey)' },
      '#sw01:hover': { color: 'var(--lm_darkGrey)' },
      '#sw02:hover': { color: 'var(--lm_darkGrey)' },
      '#sw03:hover': { color: 'var(--lm_darkGrey)' },
      '#sw04:hover': { color: 'var(--lm_darkGrey)' },
      '#sw05:hover': { color: 'var(--lm_darkGrey)' },
      '.p_body': { color: 'var(--lm_grey)' },
      '.footer': { color: 'var(--lm_darkGrey)' }
    },
    sw04: {
      body: {
        color: 'var(--dm_black)',
        backgroundImage: 'linear-gradient(to bottom, #0066ee, #e5e5e5, #fafafa, #e5e5e5, #0066ee)'
      },
      '#name:hover': { color: 'var(--dm_lightGrey)' },
      '#information:hover': { color: 'var(--dm_lightGrey)' },
      '#info:hover': { color: 'var(--dm_lightGrey)' },
      '#experiments:hover': { color: 'var(--dm_lightGrey)' },
      '#archive:hover': { color: 'var(--dm_lightGrey)' },
      '#otis, #gc, #hxouse': { color: 'var(--dm_black)' },
      '#otis:hover': { color: 'var(--dm_lightGrey)' },
      '#gc:hover': { color: 'var(--dm_lightGrey)' },
      '#hxouse:hover': { color: 'var(--dm_lightGrey)' },
      '#currently': { color: 'var(--dm_darkGrey)' },
      '.individual_sw_project': { borderLeft: '1.4px solid var(--gm_lightGrey)' },
      '#sw01:hover': { color: 'var(--dm_lightGrey)' },
      '#sw02:hover': { color: 'var(--dm_lightGrey)' },
      '#sw03:hover': { color: 'var(--dm_lightGrey)' },
      '#sw04:hover': { color: 'var(--dm_lightGrey)' },
      '#sw05:hover': { color: 'var(--dm_lightGrey)' },
      '.p_body': { color: 'var(--dm_grey)' },
      '.footer': { color: 'var(--dm_lightGrey)' }
    },
    sw05: {
      body: {
        color: 'var(--dm_black)',
        backgroundImage: 'radial-gradient(#ff9e1c, #ff9e1c, #fbfbfb)'
      },
      '#name:hover': { color: 'var(--dm_white)' },
      '#information:hover': { color: 'var(--dm_white)' },
      '#info:hover': { color: 'var(--dm_white)' },
      '#experiments:hover': { color: 'var(--dm_white)' },
      '#archive:hover': { color: 'var(--dm_white)' },
      '#otis, #gc, #hxouse': { color: 'var(--dm_black)' },
      '#otis:hover': { color: 'var(--dm_white)' },
      '#gc:hover': { color: 'var(--dm_white)' },
      '#hxouse:hover': { color: 'var(--dm_white)' },
      '#currently': { color: 'var(--dm_darkGrey)' },
      '.individual_sw_project': { borderLeft: '1.4px solid var(--dm_lightGrey)' },
      '#sw01:hover': { color: 'var(--dm_white)' },
      '#sw02:hover': { color: 'var(--dm_white)' },
      '#sw03:hover': { color: 'var(--dm_white)' },
      '#sw04:hover': { color: 'var(--dm_white)' },
      '#sw05:hover': { color: 'var(--dm_white)' },
      '.p_body': { color: 'var(--dm_grey)' },
      '.footer': { color: 'var(--dm_lightGrey)' }
    },
    sw06: {
      body: {
        color: 'var(--dm_white)',
        backgroundImage: 'radial-gradient(#0d0d0d, #0d0d0d)'
      },
      '#name:hover': { color: 'var(--lm_darkGrey)' },
      '#information:hover': { color: 'var(--lm_darkGrey)' },
      '#info:hover': { color: 'var(--lm_darkGrey)' },
      '#experiments:hover': { color: 'var(--lm_darkGrey)' },
      '#archive:hover': { color: 'var(--lm_darkGrey)' },
      '#otis, #gc, #hxouse': { color: 'var(--lm_white)' },
      '#otis:hover': { color: 'var(--lm_darkGrey)' },
      '#gc:hover': { color: 'var(--lm_darkGrey)' },
      '#hxouse:hover': { color: 'var(--lm_darkGrey)' },
      '#currently': { color: 'var(--lm_lightGrey)' },
      '.individual_sw_project': { borderLeft: '1.4px solid var(--gm_darkGrey)' },
      '#sw01:hover': { color: 'var(--lm_darkGrey)' },
      '#sw02:hover': { color: 'var(--lm_darkGrey)' },
      '#sw03:hover': { color: 'var(--lm_darkGrey)' },
      '#sw04:hover': { color: 'var(--lm_darkGrey)' },
      '#sw05:hover': { color: 'var(--lm_darkGrey)' },
      '.p_body': { color: 'var(--lm_grey)' },
      '.footer': { color: 'var(--lm_darkGrey)' }
    }
  };

  function applyStyles(styleObj) {
    let dynamicStyle = document.getElementById('dynamic-hover-style');
    if (!dynamicStyle) {
      dynamicStyle = document.createElement('style');
      dynamicStyle.id = 'dynamic-hover-style';
      document.head.appendChild(dynamicStyle);
    }
    dynamicStyle.innerHTML = '';

    for (const selector in styleObj) {
      const styleProps = styleObj[selector];

      if (selector.includes(':hover')) {
        let rule = `${selector} {`;
        for (const prop in styleProps) {
          const val = styleProps[prop];
          if (val) {
            rule += `${prop}: ${val} !important;`;
          }
        }
        rule += '}';
        dynamicStyle.innerHTML += rule + '\n';
      } else if (selector === 'body') {
        for (const prop in styleProps) {
          const val = styleProps[prop];
          if (val) {
            document.body.style[prop] = val;
          }
        }
      } else {
        const elements = document.querySelectorAll(selector);
        elements.forEach(el => {
          for (const prop in styleProps) {
            const val = styleProps[prop];
            if (val) {
              el.style[prop] = val;
            }
          }
        });
      }
    }
  }

  applyStyles(styleMap.sw01);

  swContainer.addEventListener('scroll', () => {
    const containerRect = swContainer.getBoundingClientRect();
    let currentStyle = styleMap.sw01;

    for (let i = 1; i < swElements.length; i++) {
      const prevRect = swElements[i - 1].getBoundingClientRect();
      // Updated trigger point at 60% of the element's height
      const triggerPoint = prevRect.top + (prevRect.height * 0.6);
      if (triggerPoint - containerRect.top <= 0) {
        currentStyle = styleMap[swElements[i].id];
      }
    }
    applyStyles(currentStyle);
  });
});

  
  
  
/* GSAP */

gsap.from('#name', { duration: 1, y: '200%', ease: 'power2.out' });



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
