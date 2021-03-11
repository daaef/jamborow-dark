import 'what-input';

import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

// loads the Icon plugin
UIkit.use(Icons);

document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function () {
        document.querySelector('#introLoader').classList.add('uk-animation-fade');
        document.querySelector('#introLoader').classList.add('uk-animation-reverse');
        document.querySelector('#introLoader').classList.add('z-index-0');
    }, 1000)
});