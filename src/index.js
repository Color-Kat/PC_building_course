import './scss/index.scss';
import touch_class from './modules/touch_class';
import dropDownMenu from './modules/dropDownMenu';
import toggleMenu from './modules/toggleMenu';

touch_class();
dropDownMenu();

// ibg - change html img for css background-img
function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            console.log(1243);
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

document.querySelector('.menu__icon').addEventListener('click', toggleMenu);