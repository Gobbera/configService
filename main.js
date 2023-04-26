const output = document.getElementById('output');
const outputCss = document.getElementById('outputCss');
const corpName = document.getElementById('corpName');
const baseURL = document.getElementById('baseURL');
const url = document.getElementById('url');
const url_fs = document.getElementById('url_fs');
const language = document.getElementById('language');
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
const topBarEnableImg = document.getElementById('topBarEnableImg');
const topBarDisableImg = document.getElementById('topBarDisableImg');
const operatorEnableImg = document.getElementById('operatorEnableImg');
const operatorDisableImg = document.getElementById('operatorDisableImg');
const customerEnableImg = document.getElementById('customerEnableImg');
const customerDisableImg = document.getElementById('customerDisableImg');
const logoEnableImg = document.getElementById('logoEnableImg');
const operatorEnableImgIcon = document.getElementById('operatorEnableImgIcon');
const copyButton = document.getElementById('copyButton');
const download = document.getElementById('download');


topBarDisableImg.hidden = true;
operatorDisableImg.hidden = true;
customerDisableImg.hidden = true;
copyButton.hidden = true;
download.hidden = true;

const generatorBtn = document.getElementById('generatorBtn');

const tab = '&nbsp;&nbsp;&nbsp;&nbsp;';
let comma = ',';

let definedLayout;
let definedBallon;
let definedTopBar;
let definedOperator;
let definedCustomer;
let definedLogo;

function generatorFile() {
    let layoutRadio = document.getElementsByName('layout');
    let ballonRadio = document.getElementsByName('model');

    let contactMedias = document.getElementById('contactMedias');
    let skypeEnable = document.getElementById('skypeEnable');
    let messengerEnable = document.getElementById('messengerEnable');
    let telegramEnable = document.getElementById('telegramEnable');
    let whatsAppEnable = document.getElementById('whatsAppEnable');
    let appleBusinessEnable = document.getElementById('appleBusinessEnable');
    let emailEnable = document.getElementById('emailEnable');
    let blankFieldName = document.getElementById('blankFieldName');
    let blankFieldPhone = document.getElementById('blankFieldPhone');
    let blankFieldEmail = document.getElementById('blankFieldEmail');
    let blankFieldCpf = document.getElementById('blankFieldCpf');

    let defaultFieldsEnableNAME = document.getElementById('defaultFieldsEnableNAME');
    let defaultFieldsEnablePHONE = document.getElementById('defaultFieldsEnablePHONE');
    let defaultFieldsEnableCPF = document.getElementById('defaultFieldsEnableCPF');
    let defaultFieldsEnableEMAIL = document.getElementById('defaultFieldsEnableEMAIL');

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
            ${tab}${tab}}`)
        }
        if (sessionInfoFieldsChildren.children[3].children[10].style.display !== 'none') {
            sessionInfoFields.push(`${'<br>'}
            ${tab}${tab}${sessionInfoFieldsChildren.children[1].value}:{${'<br>'}
            ${tab}${tab}${tab}selectChat: ${sessionInfoFieldsChildren.children[3].children[1].value},${'<br>'}
            ${tab}${tab}${tab}calltype: ${sessionInfoFieldsChildren.children[3].children[4].value},${'<br>'}
            ${tab}${tab}${tab}language: ${sessionInfoFieldsChildren.children[3].children[7].value}${'<br>'}
            ${tab}${tab}${tab}fields: [${fieldsSessionInfo(sessionInfoFieldsChildren.children[3].children[10].children[0].children)}]${'<br>'}
            ${tab}${tab}}`)
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

    let ratingContainer = document.getElementById('rating-container');
    let ratingLength = ratingContainer.children.length;
    let ratingFields = [];
    while (ratingFields.length < ratingLength) {
        if (ratingContainer.children[ratingFields.length || 0].children[4].style.display === "none") {
            ratingFields.push(` {${'<br>'}
            ${tab}${tab}${tab}surveyField: '${ratingContainer.children[emailTopic.length || 0].children[1].value}'${'<br>'}
            ${tab}${tab}}`);
        }
        if (ratingContainer.children[ratingFields.length || 0]) {
            if (ratingContainer.children[ratingFields.length || 0].children[4].style.display !== "none") {
                ratingFields.push(` {${'<br>'}
                ${tab}${tab}${tab}surveyField: '${ratingContainer.children[emailTopic.length || 0].children[1].value}',${'<br>'}
                ${tab}${tab}${tab}inputs: '${ratingContainer.children[emailTopic.length || 0].children[4].children[1].value}'${'<br>'}
                ${tab}${tab}}`);
            }
        }
    }
    if (ratingFields.length === 0) {
        comma = '';
    }

    function enableItem(item) {
        return Array.from(item).find((element) => element.checked)?.value || 'false';
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
        ${tab}${tab}TOP_BAR_ENABLE: ${isChecked(topBarEnable)},${'<br>'}
        ${tab}${tab}OPERATOR: {${'<br>'}
        ${tab}${tab}${tab}ENABLE: ${isChecked(operatorEnable)},${'<br>'}
        ${tab}${tab}${tab}IMAGE: '${operatorImg.value}',${'<br>'}
        ${tab}${tab}},${'<br>'}
        ${tab}${tab}CUSTOMER: {${'<br>'}
        ${tab}${tab}${tab}ENABLE: ${isChecked(customerEnable)},${'<br>'}
        ${tab}${tab}${tab}IMAGE: '${customerImg.value}',${'<br>'}
        ${tab}${tab}}${'<br>'}
        ${tab}}${'<br>'}
        ${tab}LOGO: {${'<br>'}
        ${tab}${tab}ENABLE: ${isChecked(logoEnable)},${'<br>'}
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
        ${tab}}, {${'<br>'}
        ${tab}sessionsInfo: {${sessionInfoFields}${'<br>'}
        ${tab}},${'<br>'}
        ${tab}fields:[{${'<br>'}
        ${tab}${tab}enable: ${isChecked(defaultFieldsEnableNAME)}${'<br>'}
        ${tab}${tab}input: 'name' ${'<br>'}
        ${tab}}, { ${'<br>'}
        ${tab}${tab}enable: ${isChecked(defaultFieldsEnablePHONE)}${'<br>'}
        ${tab}${tab}input: 'phone' ${'<br>'}
        ${tab}}, {${'<br>'}
        ${tab}${tab}enable: ${isChecked(defaultFieldsEnableCPF)}${'<br>'} 
        ${tab}${tab}input: 'CPF' ${'<br>'}
        ${tab}}, {${'<br>'}
        ${tab}${tab}enable: ${isChecked(defaultFieldsEnableEMAIL)}${'<br>'} 
        ${tab}${tab}input: 'email' ${'<br>'}
        ${tab}}],${'<br>'}
        ${tab}blankField: {${'<br>'}
        ${tab}${tab}name: ${blankFieldName.value}${'<br>'}
        ${tab}${tab}phone: ${blankFieldPhone.value}${'<br>'}
        ${tab}${tab}email: ${blankFieldEmail.value}${'<br>'}
        ${tab}${tab}cpf: ${blankFieldCpf.value}${'<br>'}
        ${tab}},${'<br>'}
        ${tab}rating: {${'<br>'}
        ${tab}${tab}ratingFields: [{${'<br>'}
        ${tab}${tab}${tab}surveyField: 'firstMessageField'${'<br>'}
        ${tab}${tab}},${ratingFields}${comma} {${'<br>'}
        ${tab}${tab}${tab}surveyField: 'lastMessageField'${'<br>'}
        ${tab}${tab}}]${'<br>'}
        ${tab}}${'<br>'}
        }`;

        outputCss.innerHTML = 
        `root: {
            --primary-color: #21A6DA;${'<br>'}
            --secondary-color: #68C5ED;${'<br>'}
            --tertiary-color: #C6E7F4;${'<br>'}
            --fourth-color: #efefef;${'<br>'}
            --font-color: #555555;${'<br>'}
            --icon-color: rgb(62, 61, 61);${'<br>'}
        
            --second-linear-gradient: linear-gradient(180deg, var(--alternative-first-color), var(--alternative-second-color));${'<br>'}
            --linear-gradient: linear-gradient(-89deg, var(--primary-color), var(--secondary-color));${'<br>'}
        
            --background-main-theme: none;${'<br>'}
        
            --advise-font-color: var(--font-color);${'<br>'}
            --advise-font-family: default;${'<br>'}
        
            --title-font-family: default;${'<br>'}
            --title-font-color: var(--font-color);${'<br>'}
        
            --default-buttons-icon-color: white;${'<br>'}
            --default-buttons-background-color: var(--primary-color);${'<br>'}
            --default-buttons-font-color: white;${'<br>'}
            --default-buttons-hover-background-color: var(--secondary-color);${'<br>'}
            --default-buttons-border-radius: 5px 10px 5px 10px;${'<br>'}
            --default-buttons-hover-border-radius: 2px;${'<br>'}
            --default-buttons-font-family: default;${'<br>'}
        
            --rounded-buttons-icon-color: var(--secondary-color);${'<br>'}
            --rounded-buttons-hover-background-color: var(--fourth-color);${'<br>'}
        
            --chat-buttons-background-color: var(--secondary-color);${'<br>'}
            --chat-panel-icon-color: var(--primary-color);${'<br>'}
            --chat-buttons-hover-background-color: var(--tertiary-color);${'<br>'}
            --chat-buttons-hover-border-radius: 12px;${'<br>'}
            --chat-buttons-icon-color: var(--tertiary-color);${'<br>'}
            --chat-border-thickness: none;${'<br>'}
            --chat-border-color: none;${'<br>'}
            --chat-buttons-icon-color: white;${'<br>'}
        
            --backgrounds-color: var(--background-main-theme);${'<br>'}
            --chat-background-color: linear-gradient(180deg, #E8F1F5, #F4F8FA);${'<br>'}
            --chat-message-container-background-color: var(--background-main-theme);${'<br>'}
        
            --attachment-container-border-color: var(--primary-color);${'<br>'}
        
            --text-fields-font-color: var(--font-color);${'<br>'}
            --text-fields-background-color: #cfcfcf;${'<br>'}
            --text-fields-border-radius: 4px 4px 10px 4px;${'<br>'}
        
            --chat-emoji-button-height: 100%;${'<br>'}
            --chat-emoji-button-width: 50px;${'<br>'}
            --chat-emoji-button-border-radius: 10px 4px 4px 10px;${'<br>'}
            --chat-emoji-button-icon-color: var(--font-color);${'<br>'}
            --chat-emoji-button-margin-top: 0px;${'<br>'}
        
            --chat-send-button-height: 100%;${'<br>'}
            --chat-send-button-width: 50px;${'<br>'}
            --chat-send-button-border-radius: 4px 10px 10px 4px;${'<br>'}
            --chat-send-button-icon-color: var(--font-color);${'<br>'}
            --chat-send-button-margin-top: 0px;${'<br>'}
        
            --copy-bar-successful-background-color: rgb(0, 168, 132);${'<br>'}
            --copy-bar-successful-font-color: white;${'<br>'}
        
            --inactivity-bar-message-background-color: var(--primary-color);${'<br>'}
            --inactivity-bar-message-font-color: white;${'<br>'}
            --inactivity-bar-background-color: var(--fourth-color);${'<br>'}
            --inactivity-progress-bar-color: var(--tertiary-color);${'<br>'}
        
            --map-cordenates-color: var(--font-color);${'<br>'}
        
            --new-chat-session-forms-border-radius: 5px 10px;${'<br>'}
            --new-chat-session-forms-focus-within-border-bottom-color: var(--primary-color);${'<br>'}
            --new-chat-session-forms-font-color: var(--font-color);${'<br>'}
            --new-chat-session-forms-title-font-color: var(--font-color);${'<br>'}
            --new-chat-session-forms-background-color: white;${'<br>'}
        
            --own-author-font-color: var(--font-color);${'<br>'}
            --own-message-background-color: var(--tertiary-color);${'<br>'}
            --own-message-border-radius: 10px 5px;${'<br>'}
            --own-message-border-color: var(--secondary-color) 3px solid;${'<br>'}
            --own-text-message-font-color: black;${'<br>'}
            --own-author-box-shadow: 0 10px 5px -6px #00000025;${'<br>'}
        
            --receive-author-font-color: #0D4459;${'<br>'}
            --receive-message-background-color: var(--secondary-color);${'<br>'}
            --receive-message-border-radius: 5px 10px;${'<br>'}
            --receive-message-border-color: var(--primary-color) 3px solid;${'<br>'}
            --receive-text-message-font-color: black;${'<br>'}
            --receive-box-shadow: 0 10px 5px -6px #00000025;${'<br>'}
            --receive-rating-border: none;${'<br>'}
            --receive-rating-border-radius: 4px;${'<br>'}
            --receive-rating-margin: 0px 12px 0px 12px;${'<br>'}
            --receive-rating-buttons-background-color: #197EA6;${'<br>'}
            --receive-rating-buttons-background-color-selected: #115773;${'<br>'}
            --receive-rating-stars-background-color: #197EA6;${'<br>'}
            --receive-rating-stars-background-color-hover: #FFDE4B;${'<br>'}
            --receive-rating-segmented-button-margin: 5px 30px;${'<br>'}
            --receive-rating-buttons-border: none;${'<br>'}
            --receive-rating-segmented-button-border-radius: 5px 10px 5px 10px;${'<br>'}
        
            --scrollbar-bar-track-hover-background-color: var(--tertiary-color);${'<br>'}
            --scrollbar-thumb-background-color: var(--tertiary-color);${'<br>'}
            --scrollbar-thumb-hover-background-color: var(--primary-color);${'<br>'}
            --scrollbar-thumb-border-color: var(--primary-color);${'<br>'}
        
            --top-bar-operator-img-border-color: var(--tertiary-color);${'<br>'}
            --top-bar-operator-name-font-color: var(--primary-color);${'<br>'}
            --top-bar-tool-color: var(--fourth-color);${'<br>'}
            --tob-bar-background-color: var(--chat-background-color);${'<br>'}
            --top-bar-background-color: var(--tob-bar-background-color);${'<br>'}
            --top-bar-height: 75px;${'<br>'}
            --top-bar-operator-img-border-radius: 4px;${'<br>'}
            --top-bar-operator-img-width: 40px;${'<br>'}
            --top-bar-operator-img-height: 40px;${'<br>'}
            --top-bar-operator-img-margin-top: 0px;${'<br>'}
            --top-bar-operator-name-margin-top: 0px;${'<br>'}
        }`

    copyButton.hidden = false;
    download.hidden = false;
}

function isChecked(item) {
    return `<span class="true">${item.checked ? 'true' : 'false'}</span>`;
}

function changeStatus(id, item) {
    switch (item) {
        case topBarEnable:
            changeElement(topBarEnableImg, topBarDisableImg);
            break;
        case operatorEnable:
            operatorEnableImgIcon.hidden = !operatorEnableImgIcon.hidden
            insertOperatorUrl.hidden = !insertOperatorUrl.hidden;
            changeElement(operatorEnableImg, operatorDisableImg);
            break;
        case customerEnable:
            customerEnableImgIcon.hidden = !customerEnableImgIcon.hidden;
            insertCustomerUrl.hidden = !insertCustomerUrl.hidden;
            changeElement(customerEnableImg, customerDisableImg);
            break;
        case logoEnable:
            logoEnableImgIcon.hidden = !logoEnableImgIcon.hidden;
            insertLogoUrl.hidden = !insertLogoUrl.hidden;
            changeElement(logoEnableImg, logoEnableImg);
            break;
    }
    if (item.checked) {
        id.classList.remove("disable");
        id.textContent = 'Enable';
        return;
    }
    id.classList.add("disable");
    id.textContent = "Disable";
}

function changeElement(imgEnable, imgDisable) {
    imgDisable.hidden = !imgDisable.hidden;
    imgEnable.hidden = !imgEnable.hidden;
}

function sendImageToIcon(element, valueOfInput) {
    element.setAttribute('src', valueOfInput.value);
}

function copyConfig() {
    const text = output.textContent;
    const temporaryElement = document.createElement('textarea');
    temporaryElement.value = text;
    document.body.appendChild(temporaryElement);
    temporaryElement.select();
    document.execCommand('copy');
    document.body.removeChild(temporaryElement);
}

function downloadFile() {
    const userString = output.textContent;
    const downloadLink = document.createElement("a");
    const file = new Blob([userString], {type: "js"});
    downloadLink.href = URL.createObjectURL(file);
    downloadLink.download = "config.template.js";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

copyButton.addEventListener('click', copyConfig);
generatorBtn.addEventListener('click', generatorFile);
download.addEventListener("click", downloadFile);
