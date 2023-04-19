const comboboxEmailContainer = document.getElementById('combobox-email-container');
const newField = `<div>
<label for="">Assunto</label>
<input type="text" id="email" name="">
</div>`;
let id = 1;
let newBtn = `<input class="plusBtn" type="button" id="addFieldBtn${id}" value="+">`;
let addFieldBtn = document.getElementById('addFieldBtn');

addFieldBtn.addEventListener('click', addNewField);

function addNewField () {
    id += 1;
    newBtn = `<input class="plusBtn" type="button" id="addFieldBtn${id}" value="+">`;
    comboboxEmailContainer.insertAdjacentHTML('afterbegin', newBtn);
    comboboxEmailContainer.insertAdjacentHTML('afterbegin', newField);
}