const comboboxEmailContainer = document.getElementById('combobox-email-container');
let id = 0;
let newField = `<div id="fieldContainer${id}">
<label for="">Assunto</label>
<input type="text" id="email" name="">
<button onclick="removeField()" id="removeField${id}" class="plusBtn">-</button>
</div>`;
let addFieldBtn = document.getElementById('addFieldBtn');
let fieldContainer = '';
addFieldBtn.addEventListener('click', addNewField);

function addNewField() {
    id += 1;
    if (id > 10) {
        alert('O limite de assuntos foi atingido');
        return;
    }
    let newField = `<div id="fieldContainer${id}">
    <label for="">Assunto</label>
    <input type="text" id="email" name="">
    <button onclick="removeField()" id="removeField${id}" class="plusBtn">-</button>
    </div>`;
    comboboxEmailContainer.insertAdjacentHTML('afterbegin', newField);
}
function removeField() {
    const me = this;
    fieldContainer = document.getElementById(`fieldContainer${me.document.activeElement.id.substring(11)}`);
    comboboxEmailContainer.removeChild(fieldContainer);
}