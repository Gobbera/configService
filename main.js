const corpName = document.getElementById('corpName');
const baseURL = document.getElementById('baseURL');
const url = document.getElementById('url');
const url_fs = document.getElementById('url_fs');
const language = document.getElementById('language');
const output = document.getElementById('output');
const operatorImg = document.getElementById('operatorImg');
const customerImg = document.getElementById('customerImg');
const logoImg = document.getElementById('logoImg');
const ncsBackground = document.getElementById('ncsBackground');
const chatBackground = document.getElementById('chatBackground');
const callEndedBackground = document.getElementById('callEndedBackground');
const noAttendantBackground = document.getElementById('noAttendantBackground');
const notFoundBackground = document.getElementById('notFoundBackground');
const reconnectBackground = document.getElementById('reconnectBackground');
const queueBackground = document.getElementById('queueBackground');
const currentChat = document.getElementById('currentChat');
const skype = document.getElementById('skype');
const messenger = document.getElementById('messenger');
const telegram = document.getElementById('telegram');
const whatsapp = document.getElementById('whatsapp');
const appleBusiness = document.getElementById('appleBusiness');
const email = document.getElementById('email');


const generatorBtn = document.getElementById('generatorBtn');

const tab = '&nbsp;&nbsp;&nbsp;&nbsp;';

let definedLayout;
let definedBallon;
let definedTopBar;
let definedOperator;
let definedCustomer;
let definedLogo;
let definedCurrentChat;
let definedSkype;
let definedMessenger;
let definedTelegram;
let definedWhatsapp;
let definedAppleBusiness;
let definedEmail;

function generatorFile() {
    let layoutRadio = document.getElementsByName('layout');
    let ballonRadio = document.getElementsByName('model');
    let topBarRadio = document.getElementsByName('topBar');
    let operatorRadio = document.getElementsByName('operator');
    let customerRadio = document.getElementsByName('customer');
    let logoRadio = document.getElementsByName('logo');
    let currentChatRadio = document.getElementsByName('currentChat');
    let skypeRadio = document.getElementsByName('skype');
    let messengerRadio = document.getElementsByName('messenger');
    let telegramRadio = document.getElementsByName('telegram');
    let whatsAppRadio = document.getElementsByName('whatsapp');
    let appleBusinessRadio = document.getElementsByName('appleBusiness');
    let emailRadio = document.getElementsByName('email');
    let emailTopics = document.getElementById('combobox-email-container');
    let topics = emailTopics.children.length;
    let emailTopic = [];
    //<debug>
    debugger;
    //</debug>

    while (emailTopic.length < (topics)) {
        emailTopic.push(`{${'<br>'}
        ${tab}${tab}PLACE: '${emailTopics.children[emailTopic.length || 0].children[1].value}'${'<br>'}
        ${tab}}`);
    }

    for (i = 0; i < layoutRadio.length; i++) {
        if (layoutRadio[i].checked) {
            definedLayout = `<span class="true">${layoutRadio[i].value}</span>`;
        }
    }
    for (i = 0; i < ballonRadio.length; i++) {
        if (ballonRadio[i].checked) {
            definedBallon = `<span class="true">${ballonRadio[i].value}</span>`;
        }
    }
    for (i = 0; i < topBarRadio.length; i++) {
        if (topBarRadio[i].checked) {
            definedTopBar = `<span class="true">${topBarRadio[i].value}</span>`;
        }
    }
    for (i = 0; i < operatorRadio.length; i++) {
        if (operatorRadio[i].checked) {
            definedOperator = `<span class="true">${operatorRadio[i].value}</span>`;
        }
    }
    for (i = 0; i < customerRadio.length; i++) {
        if (customerRadio[i].checked) {
            definedCustomer = `<span class="true">${customerRadio[i].value}</span>`;
        }
    }
    for (i = 0; i < logoRadio.length; i++) {
        if (logoRadio[i].checked) {
            definedLogo = `<span class="true">${logoRadio[i].value}</span>`;
        }
    }
    for (i = 0; i < currentChatRadio.length; i++) {
        if (currentChatRadio[i].checked) {
            definedCurrentChat = `<span class="true">${currentChatRadio[i].value}</span>`;
        }
    }
    for (i = 0; i < skypeRadio.length; i++) {
        if (skypeRadio[i].checked) {
            definedSkype = `<span class="true">${skypeRadio[i].value}</span>`;
        }
    }
    for (i = 0; i < messengerRadio.length; i++) {
        if (messengerRadio[i].checked) {
            definedMessenger = `<span class="true">${messengerRadio[i].value}</span>`;
        }
    }
    for (i = 0; i < telegramRadio.length; i++) {
        if (telegramRadio[i].checked) {
            definedTelegram = `<span class="true">${telegramRadio[i].value}</span>`;
        }
    }
    for (i = 0; i < whatsAppRadio.length; i++) {
        if (whatsAppRadio[i].checked) {
            definedWhatsapp = `<span class="true">${whatsAppRadio[i].value}</span>`;
        }
    }
    for (i = 0; i < appleBusinessRadio.length; i++) {
        if (appleBusinessRadio[i].checked) {
            definedAppleBusiness = `<span class="true">${appleBusinessRadio[i].value}</span>`;
        }
    }
    for (i = 0; i < emailRadio.length; i++) {
        if (emailRadio[i].checked) {
            definedEmail = `<span class="true">${emailRadio[i].value}</span>`;
        }
    }

    output.innerHTML =
        `window.CONFIG = {${'<br>'}
        ${tab}CORPORATE_NAME: '${corpName.value}',${'<br>'}
        ${tab}MAP_KEY: '',${'<br>'}
        ${tab}BASE_URL: '${baseURL.value}',${'<br>'}
        ${tab}URL: '${url.value}',${'<br>'}
        ${tab}URL_FS: '${url_fs.value}',${'<br>'}
        ${tab}LANGUAGE: '${language.value}',${'<br>'}
        ${tab}IS_HOME: '',${'<br>'}
        ${tab}LAYOUT: '${definedLayout}',${'<br>'}
        ${tab}BALLON_MESSAGE: '${definedBallon}',${'<br>'}
        ${tab}CHAT: {${'<br>'}
        ${tab}${tab}TOP_BAR_ENABLE: ${definedTopBar},${'<br>'}
        ${tab}${tab}OPERATOR: {${'<br>'}
        ${tab}${tab}${tab}ENABLE: ${definedOperator},${'<br>'}
        ${tab}${tab}${tab}IMAGE: '${operatorImg.value}',${'<br>'}
        ${tab}},${'<br>'}
        ${tab}${tab}CUSTOMER: {${'<br>'}
        ${tab}${tab}${tab}ENABLE: ${definedCustomer},${'<br>'}
        ${tab}${tab}${tab}IMAGE: '${customerImg.value}',${'<br>'}
        ${tab}${tab}}${'<br>'}
        ${tab}}${'<br>'}
        ${tab}LOGO: {${'<br>'}
        ${tab}${tab}ENABLE: ${definedCustomer},${'<br>'}
        ${tab}${tab}IMAGE: '${logoImg.value}',${'<br>'}
        ${tab}},${'<br>'}
        ${tab}BACKGROUND_IMAGE: {${'<br>'}
        ${tab}${tab}NEW_CHAT_SESSION: '${ncsBackground.value}',${'<br>'}
        ${tab}${tab}CHAT: '${chatBackground.value}',${'<br>'}
        ${tab}${tab}CALL_ENDED: '${callEndedBackground.value}',${'<br>'}
        ${tab}${tab}NO_ATTENDANT: '${noAttendantBackground.value}',${'<br>'}
        ${tab}${tab}NOT_FOUND: '${notFoundBackground.value}',${'<br>'}
        ${tab}${tab}RECONNECT: '${reconnectBackground.value}',${'<br>'}
        ${tab}${tab}QUEUE: '${queueBackground.value}'${'<br>'}
        ${tab}},${'<br>'}
        ${tab}ICONS: {${'<br>'}
        ${tab}${tab}CHAT: '',${'<br>'}
        ${tab}${tab}TOOLS_ATTACHMENT: '',${'<br>'}
        ${tab}${tab}TOOLS_MAP: '',${'<br>'}
        ${tab}${tab}TOOLS_CAMERA: '',${'<br>'}
        ${tab}${tab}TOOLS_SOUND_ENABLE: '',${'<br>'}
        ${tab}${tab}TOOLS_SOUND_DISABLE: '',${'<br>'}
        ${tab}${tab}SURVEY_YES: '',${'<br>'}
        ${tab}${tab}SURVEY_NO: '',${'<br>'}
        ${tab}${tab}CAMERA: '',${'<br>'}
        ${tab}${tab}NEW_PHOTO: '',${'<br>'}
        ${tab}${tab}PRINT: '',${'<br>'}
        ${tab}${tab}EMAIL: '',${'<br>'}
        ${tab}${tab}FILE: '',${'<br>'}
        ${tab}${tab}FILE_PDF: '',${'<br>'}
        ${tab}${tab}SEARCH: '',${'<br>'}
        ${tab}${tab}CHECK: '',${'<br>'}
        ${tab}${tab}CLOSE: '',${'<br>'}
        ${tab}${tab}CLOSE_CIRCLE: '',${'<br>'}
        ${tab}${tab}HANDSHAKE: '',${'<br>'}
        ${tab}${tab}BARS: '',${'<br>'}
        ${tab}${tab}EMOJI: '',${'<br>'}
        ${tab}${tab}EMOJI_ALTERNATIVE: '',${'<br>'}
        ${tab}${tab}EMOJI_SYMBOLS: '',${'<br>'}
        ${tab}${tab}SEND: '',${'<br>'}
        ${tab}${tab}ACCESS_CHAT: '',${'<br>'}
        ${tab}${tab}COPY: '',${'<br>'}
        ${tab}${tab}RECONNECT: '',${'<br>'}
        ${tab}${tab}CHATBOT: '',${'<br>'}
        ${tab}},${'<br>'}
        ${tab}CONTACT_MEDIAS: {${'<br>'}
        ${tab}${tab}ENABLE: ${definedCurrentChat},${'<br>'}
        ${tab}${tab}CURRENT_CHAT: {${'<br>'}
        ${tab}${tab}${tab}IMAGE_LINK: '${currentChat.value}',${'<br>'}
        ${tab}${tab}},${'<br>'}
        ${tab}${tab}SKYPE: {${'<br>'}
        ${tab}${tab}${tab}ENABLE: ${definedSkype},${'<br>'}
        ${tab}${tab}${tab}LINK: '${skype.value}'${'<br>'}
        ${tab}${tab}},${'<br>'}
        ${tab}${tab}MESSENGER: {${'<br>'}
        ${tab}${tab}${tab}ENABLE: ${definedMessenger},${'<br>'}
        ${tab}${tab}${tab}LINK: '${messenger.value}'${'<br>'}
        ${tab}${tab}},${'<br>'}
        ${tab}${tab}TELEGRAM: {${'<br>'}
        ${tab}${tab}${tab}ENABLE: ${definedTelegram},${'<br>'}
        ${tab}${tab}${tab}LINK: '${telegram.value}'${'<br>'}
        ${tab}${tab}},${'<br>'}
        ${tab}${tab}WHATSAPP: {${'<br>'}
        ${tab}${tab}${tab}ENABLE: ${definedWhatsapp},${'<br>'}
        ${tab}${tab}${tab}LINK: '${whatsapp.value}'${'<br>'}
        ${tab}${tab}},${'<br>'}
        ${tab}${tab}APPLE_BUSINESS: {${'<br>'}
        ${tab}${tab}${tab}ENABLE: ${definedAppleBusiness},${'<br>'}
        ${tab}${tab}${tab}LINK: '${appleBusiness.value}'${'<br>'}
        ${tab}${tab}},${'<br>'}
        ${tab}${tab}EMAIL: {${'<br>'}
        ${tab}${tab}${tab}ENABLE: ${definedEmail},${'<br>'}
        ${tab}${tab}${tab}LINK: '${email.value}'${'<br>'}
        ${tab}${tab}}${'<br>'}
        ${tab}},${'<br>'}
        ${tab}COMBOBOX_EMAIL_SUBJECT:[${emailTopic}],${'<br>'}
        }`;
}
generatorBtn.addEventListener('click', generatorFile);
