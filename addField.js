const addFieldBtn = document.getElementById('addFieldBtn');
const comboboxEmailContainer = document.getElementById('combobox-email-container');
const newField = `<div>
<label for="">Assunto</label>
<input type="text" id="email" name="">
</div>`
const newBtn = '<input class="plusBtn" type="button" id="addFieldBtn" value="+">'

addFieldBtn.addEventListener('click', addNewField);
function addNewField () {
    addFieldBtn.hidden = true
    comboboxEmailContainer.insertAdjacentHTML('afterbegin', newField);
    comboboxEmailContainer.insertAdjacentHTML('afterbegin', newBtn);
}
