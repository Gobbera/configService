const corpName = document.getElementById('corpName');
const baseURL = document.getElementById('baseURL');
const url = document.getElementById('url');
const url_fs = document.getElementById('url_fs');
const language = document.getElementById('language');
const output = document.getElementById('output');
const generatorBtn = document.getElementById('generatorBtn');
const layoutDefault = document.getElementById('layout-default');
const layout1 = document.getElementById('layout1');
const layout2 = document.getElementById('layout2');
const layout3 = document.getElementById('layout3');

let definedLayout;
function generatorFile() {
    let layoutRadio = document.getElementsByName('layout');
    for (i = 0; i < layoutRadio.length; i++) {
        if (layoutRadio[i].checked) {
            definedLayout = layoutRadio[i].value;
        }
    }

    output.innerHTML =
        `window.CONFIG = {${'<br>'}
                CORPORATE_NAME: '${corpName.value}',${'<br>'}
                MAP_KEY: '',${'<br>'}
                BASE_URL: '${baseURL.value}',${'<br>'}
                URL: '${url.value}',${'<br>'}
                URL_FS: '${url_fs.value}',${'<br>'}
                LANGUAGE: '${language.value}',${'<br>'}
                IS_HOME: '',${'<br>'}
                LAYOUT: '${definedLayout}',${'<br>'}
            }`;
}

generatorBtn.addEventListener('click', generatorFile);
