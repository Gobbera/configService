const comboboxEmailContainer = document.getElementById('combobox-email-container');
const sessionInfoContainer = document.getElementById('session-info-container');
const rating = document.getElementById('rating-container');
let id = 0;
let sessionId = 0;
let newSessionFieldId = 0;
let ratingId = 0;
let newField = `<div class="subject-field" id="fieldContainer${id}">
<label for="">Assunto</label>
<input type="text" id="subject" name="">
<button onclick="removeField()" id="removeField${id}" class="decreaseBtn">-</button>
</div>`;
let newSessionFields = `<div id="fieldContainer${sessionId}">
<label for="">Chat field</label>
<input type="text" id="chatSessionField" name="">
<button onclick="removeField()" id="removeField${sessionId}" class="plusBtn">-</button>
</div>`;
let addFieldBtn = document.getElementById('addFieldBtn');
let addSessionFields = document.getElementById('addSessionFields');
let addRatingFields = document.getElementById('addRatingFields');
let fieldContainer = '';
addFieldBtn.addEventListener('click', addNewField);
addSessionFields.addEventListener('click', addNewSessionFields);
addRatingFields.addEventListener('click', addNewRatingFields);

function addNewField() {
    id += 1;
    if (id > 10) {
        alert('O limite de assuntos foi atingido');
        return;
    }
    let newField = `<div class="subject-field" id="fieldContainer${id}">
    <label for="">Assunto ${id}</label>
    <input type="text" id="subject${id}" name="">
    <button onclick="removeField()" id="removeField${id}" class="decreaseBtn">-</button>
    </div>`;
    comboboxEmailContainer.insertAdjacentHTML('beforeend', newField);
}
function removeField() {
    const me = this;
    fieldContainer = document.getElementById(`fieldContainer${me.document.activeElement.id.substring(11)}`);
    comboboxEmailContainer.removeChild(fieldContainer);
}
function addNewSessionFields() {
    sessionId += 1;
    let newSessionFields = `<div id="chatSessionFieldContainer${sessionId}">
    <label for="">Chat field</label>
    <input type="text" id="chatSessionField" name=""><br>
    <div>
        ${tab}${tab}<label for="">Select Chat</label>
        <input type="text" id="chatSessionField" name=""><br>
        ${tab}${tab}<label for="">CallType field</label>
        <input type="text" id="chatSessionField" name=""><br>
        ${tab}${tab}<label for="">language</label>
        <input type="text" id="chatSessionField" name=""><br>
        <div>
            ${tab}${tab}<label for="fields">Fields</label> <br>
            ${tab}${tab}${tab}${tab}<label for="fieldsEnable">Enable</label>
            <input onclick="enableField()" type="radio" name="fields${sessionId}" id="fieldsEnable" value="true"> 
            ${tab}<label for="fieldsDisable">Disable</label>
            <input onclick="enableField()" type="radio" name="fields${sessionId}" id="fieldsDisable" value="false">
        </div>
        <div style="display: none" id="newSessionFieldsContainer${sessionId}">
            <div id="newSessionFields${sessionId}">
            </div>
            <button onclick="addNewChatField()" id="addNewChatField${sessionId}" class="plusBtn">+</button> <br>
        </div>
    </div>
    <button onclick="removeSessionFields()" id="removeField${sessionId}" class="decreaseBtn">-</button>
    </div>`;
    sessionInfoContainer.insertAdjacentHTML('beforeend', newSessionFields);
}
function removeNewChatField() {
    const me = this;
    const sessionFieldId = me.document.activeElement.parentElement;
    const newSessionFieldsContainer = me.document.getElementById(`newSessionFieldsContainer${me.document.activeElement.id.substring(15)}`).childNodes[1];
    newSessionFieldsContainer.removeChild(sessionFieldId);

}
function addNewChatField() {
    const me = this;
    const sessionFieldId = me.document.activeElement.id;
    newSessionFieldId += 1;
    let sessionField = `<div id="newSessionFields${sessionId}">
                            ${tab}${tab}<label for="">Select Field</label>
                                        <select name="type" id="type">
                                            <option value="name">name</option>
                                            <option value="phone">phone</option>
                                            <option value="CPF">CPF</option>
                                            <option value="email">email</option>
                                        </select>
                            <button onclick="removeNewChatField()" id="addNewChatField${sessionId}" class="decreaseBtn">-</button> <br>
                        </div>`;
    let newSessionFields = document.getElementById(`newSessionFields${sessionFieldId.substring(15)}`);
    newSessionFields.insertAdjacentHTML('beforeend', sessionField);
}

function removeSessionFields() {
    const me = this;
    fieldContainer = document.getElementById(`chatSessionFieldContainer${me.document.activeElement.id.substring(11)}`);
    sessionInfoContainer.removeChild(fieldContainer);
}

function enableField() {
    const me = this;
    const fieldName = me.document.activeElement.name;
    const fieldRadios = me.document.getElementsByName(fieldName);
    const fieldId = me.document.getElementById(`newSessionFieldsContainer${fieldName.substring(6)}`);
    let definedItem = Array.from(fieldRadios).find((element) => element.checked).value;
    if (definedItem == 'true') {
        fieldId.style.display = 'block'
        return;
    }
    fieldId.style.display = 'none'
}

function addNewRatingFields() {
    ratingId += 1;
    let ratingField = `<div id="rating-field${ratingId}" onchange="toggleDivVisibility()">
    ${tab}${tab}<label for="">Rating Field</label>
    <select name="ratingFirstMessage" id="ratingFirstMessage">
                    <option value="ratingFirstMessage">likeField</option>
                    <option value="serviceSatisfaction">serviceSatisfaction</option>
                    <option value="serviceSatisfactionStars">serviceSatisfactionStars</option>
                    <option value="opinionField">opinionField</option>
                    <option value="printChat">printChat</option>
                    <option value="printPDFChat">printPDFChat</option>
                </select>
    <button onclick="removeNewRatingFields()" id="removeNewRatingFields${ratingId}" class="decreaseBtn">-</button> <br>
    <div style="display:none;">
    ${tab}${tab}<label for="">Number of stars</label>
    <select name="" id="ratingStarsNumber">
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                </select>
    </div>
    </div>`;
    rating.insertAdjacentHTML('beforeend', ratingField);
}

function toggleDivVisibility() {
    const me = this;
    let selectBox = me.document.activeElement;
    let selectedValue = selectBox.options[selectBox.selectedIndex].value;
    let ratingStarsDiv = selectBox.parentElement.lastElementChild;

    if (selectBox.id === "ratingStarsNumber") {
        return;
    }
    if (selectedValue === "serviceSatisfactionStars") {
        ratingStarsDiv.style.display = "block";
    } else {
        ratingStarsDiv.style.display = "none";
    }
}

function removeNewRatingFields() {
    const me = this;
    ratingField = document.getElementById(`rating-field${me.document.activeElement.id.substring(21)}`);
    rating.removeChild(ratingField);
}