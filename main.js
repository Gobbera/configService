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
const animationType = document.getElementById('type');
const animationDuration = document.getElementById('duration');
const animationDirection = document.getElementById('direction');



const generatorBtn = document.getElementById('generatorBtn');

const tab = '&nbsp;&nbsp;&nbsp;&nbsp;';

let definedLayout;
let definedBallon;
let definedTopBar;
let definedOperator;
let definedCustomer;
let definedLogo;

function generatorFile() {
    let layoutRadio = document.getElementsByName('layout');
    let ballonRadio = document.getElementsByName('model');
    let topBarRadio = document.getElementsByName('topBar');
    let operatorRadio = document.getElementsByName('operator');
    let customerRadio = document.getElementsByName('customer');
    let logoRadio = document.getElementsByName('logo');
    
    let contactMedias = document.getElementById('contactMedias');
    let skypeEnable = document.getElementById('skypeEnable');
    let messengerEnable = document.getElementById('messengerEnable');
    let telegramEnable = document.getElementById('telegramEnable');
    let whatsAppEnable = document.getElementById('whatsAppEnable');
    let appleBusinessEnable = document.getElementById('appleBusinessEnable');
    let emailEnable = document.getElementById('emailEnable');
    let animationEnable = document.getElementById('animationEnable');
    
    
    let emailTopics = document.getElementById('combobox-email-container');
    let topics = emailTopics.children.length;
    let emailTopic = [];
    while (emailTopic.length < topics) {
        emailTopic.push(`{${'<br>'}
        ${tab}${tab}PLACE: '${emailTopics.children[emailTopic.length || 0].children[1].value}'${'<br>'}
        ${tab}}`);
    }

    let sessionInfoContainer = document.getElementById('session-info-container');
    let sessionInfo = sessionInfoContainer.children.length;
    let sessionInfoFields = [];
    while (sessionInfoFields.length < sessionInfo) {
        let sessionInfoFieldsChildren = sessionInfoContainer.children[sessionInfoFields.length || 0];
        if (sessionInfoFieldsChildren.children[3].children[10].style.display === 'none') {
            sessionInfoFields.push(`${'<br>'}
            ${tab}${tab}${sessionInfoFieldsChildren.children[1].value}:{${'<br>'}
            ${tab}${tab}${tab}selectChat: ${sessionInfoFieldsChildren.children[3].children[1].value},${'<br>'}
            ${tab}${tab}${tab}calltype: ${sessionInfoFieldsChildren.children[3].children[4].value},${'<br>'}
            ${tab}${tab}${tab}language: ${sessionInfoFieldsChildren.children[3].children[7].value}${'<br>'}
            ${tab}}`)
        }
        if (sessionInfoFieldsChildren.children[3].children[10].style.display !== 'none') {
            sessionInfoFields.push(`${'<br>'}
            ${tab}${tab}${sessionInfoFieldsChildren.children[1].value}:{${'<br>'}
            ${tab}${tab}${tab}selectChat: ${sessionInfoFieldsChildren.children[3].children[1].value},${'<br>'}
            ${tab}${tab}${tab}calltype: ${sessionInfoFieldsChildren.children[3].children[4].value},${'<br>'}
            ${tab}${tab}${tab}language: ${sessionInfoFieldsChildren.children[3].children[7].value}${'<br>'}
            ${tab}${tab}${tab}fields: [${fieldsSessionInfo(sessionInfoFieldsChildren.children[3].children[10].children[0].children)}]${'<br>'}
            ${tab}}`)
        }
    }

    function fieldsSessionInfo(children) {
        let fieldsSessionInfos = [];
        while (fieldsSessionInfos.length < children.length) {
            fieldsSessionInfos.push(`{${'<br>'}
            ${tab}${tab}${tab}${tab}${children[fieldsSessionInfos.length || 0].children[1].value}${'<br>'}
            ${tab}${tab}${tab}}`)
        }
        return fieldsSessionInfos;
    }
    function enableItem(item) {
        let definedItem;
        for (i = 0; i < item.length; i++) {
            if (item[i].checked) {
                definedItem = `<span class="true">${item[i].value}</span>`;
            }
        }
        if (definedItem === undefined) {
            definedItem = false;
        }
        return definedItem;
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
        ${tab}LAYOUT: '${enableItem(layoutRadio)}',${'<br>'}
        ${tab}BALLON_MESSAGE: '${enableItem(ballonRadio)}',${'<br>'}
        ${tab}CHAT: {${'<br>'}
        ${tab}${tab}TOP_BAR_ENABLE: ${enableItem(topBarRadio)},${'<br>'}
        ${tab}${tab}OPERATOR: {${'<br>'}
        ${tab}${tab}${tab}ENABLE: ${enableItem(operatorRadio)},${'<br>'}
        ${tab}${tab}${tab}IMAGE: '${operatorImg.value}',${'<br>'}
        ${tab}},${'<br>'}
        ${tab}${tab}CUSTOMER: {${'<br>'}
        ${tab}${tab}${tab}ENABLE: ${enableItem(customerRadio)},${'<br>'}
        ${tab}${tab}${tab}IMAGE: '${customerImg.value}',${'<br>'}
        ${tab}${tab}}${'<br>'}
        ${tab}}${'<br>'}
        ${tab}LOGO: {${'<br>'}
        ${tab}${tab}ENABLE: ${enableItem(logoRadio)},${'<br>'}
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
        ${tab}${tab}ENABLE: ${isChecked(contactMedias)},${'<br>'}
        ${tab}${tab}CURRENT_CHAT: {${'<br>'}
        ${tab}${tab}${tab}IMAGE_LINK: '${currentChat.value}',${'<br>'}
        ${tab}${tab}},${'<br>'}
        ${tab}${tab}SKYPE: {${'<br>'}
        ${tab}${tab}${tab}ENABLE: ${isChecked(skypeEnable)},${'<br>'}
        ${tab}${tab}${tab}LINK: '${skype.value}'${'<br>'}
        ${tab}${tab}},${'<br>'}
        ${tab}${tab}MESSENGER: {${'<br>'}
        ${tab}${tab}${tab}ENABLE: ${isChecked(messengerEnable)},${'<br>'}
        ${tab}${tab}${tab}LINK: '${messenger.value}'${'<br>'}
        ${tab}${tab}},${'<br>'}
        ${tab}${tab}TELEGRAM: {${'<br>'}
        ${tab}${tab}${tab}ENABLE: ${isChecked(telegramEnable)},${'<br>'}
        ${tab}${tab}${tab}LINK: '${telegram.value}'${'<br>'}
        ${tab}${tab}},${'<br>'}
        ${tab}${tab}WHATSAPP: {${'<br>'}
        ${tab}${tab}${tab}ENABLE: ${isChecked(whatsAppEnable)},${'<br>'}
        ${tab}${tab}${tab}LINK: '${whatsapp.value}'${'<br>'}
        ${tab}${tab}},${'<br>'}
        ${tab}${tab}APPLE_BUSINESS: {${'<br>'}
        ${tab}${tab}${tab}ENABLE: ${isChecked(appleBusinessEnable)},${'<br>'}
        ${tab}${tab}${tab}LINK: '${appleBusiness.value}'${'<br>'}
        ${tab}${tab}},${'<br>'}
        ${tab}${tab}EMAIL: {${'<br>'}
        ${tab}${tab}${tab}ENABLE: ${isChecked(emailEnable)},${'<br>'}
        ${tab}${tab}${tab}LINK: '${email.value}'${'<br>'}
        ${tab}${tab}}${'<br>'}
        ${tab}},${'<br>'}
        ${tab}COMBOBOX_EMAIL_SUBJECT:[${emailTopic}],${'<br>'}
        ${tab}ANIMATIONS: {${'<br>'}
        ${tab}${tab}ENABLE: ${isChecked(animationEnable)},${'<br>'}
        ${tab}${tab}TYPE: '${animationType.value}',${'<br>'}
        ${tab}${tab}DURATION: '${animationDuration.value}',${'<br>'}
        ${tab}${tab}DIRECTION: '${animationDirection.value}',${'<br>'}
        ${tab}}, { ${'<br>'}
        ${tab}sessionsInfo: {${sessionInfoFields}
        ${tab}${'<br>'}
        }`;
}
generatorBtn.addEventListener('click', generatorFile);


function isChecked(item) {
    if(item.checked) {
        item.value = 'true';
    }
    else {
        item.value = 'false';
    }
    return `<span class="true">${item.value}</span>`;
}

function changeStatus(id, item) {
    if (item.checked) {
        id.classList.remove("disable");
        id.textContent = 'Enable';
    }
    else {    
        id.classList.add("disable");
        id.textContent = "Disable";
    }

}
