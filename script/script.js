const edit = document.querySelector('.edit');
const style = document.querySelector('.style');
const add = document.querySelector('.add');
const topElem = document.querySelector('.container__top');
const editElemet = document.querySelector('.editElement');
const styleElement = document.querySelector('.styleElement');
const squareElement = document.querySelector('.square');
const container = document.querySelector('.container');
const showTable = document.querySelector('.showTable');
const showList = document.querySelector('.showList');
const choose = document.querySelector('.choose');
const createTable = document.querySelector('.createTable');
const createList = document.querySelector('.createList');
const textArea = document.querySelector('.text');
const save = document.querySelector('.save');
const form1 = document.forms['form1'];
const form2 = document.forms['form2'];
const form3 = document.forms['form3'];
const form4 = document.forms['form4'];
const textColor = document.querySelector('.textColor');
const backgroundColor = document.querySelector('.backgroundColor');
edit.onclick = function () {
    edit.style.boxShadow = '-1px 1px 5px 5px rgb(240, 204, 135)';
    editElemet.style.display = 'block';
    styleElement.style.display = 'none';
    textArea.value = topElem.innerHTML;
}
style.onclick = function () {
    style.style.boxShadow = '-1px 1px 5px 5px rgb(117, 233, 233)';
    styleElement.style.display = 'flex';
    editElemet.style.display = 'none';

}
edit.onmouseout = function () {
    edit.style.boxShadow = 'none';
}
style.onmouseout = function () {
    style.style.boxShadow = 'none';
}
save.onclick = function () {
    topElem.innerHTML = textArea.value;
    editElemet.style.display = '';
}
function fontSize() {
    topElem.style.fontSize = event.target.value;
}
form1.fontFamily.onchange = function () {
    topElem.style.fontFamily = form1.fontFamily.value;
}
textColor.onclick = function () {
    squareElement.style.display = 'flex';
    squareElement.removeAttribute('data-color');
    squareElement.setAttribute('data-color', 'text');
}
backgroundColor.onclick = function () {
    squareElement.style.display = 'flex';
    squareElement.removeAttribute('data-color');
    squareElement.setAttribute('data-color', 'background');
}
for (let i = 0; i < squareElement.children.length; i++) {
    squareElement.children[i].addEventListener('click', function () {
        if (squareElement.getAttribute('data-color') == 'text') {
            topElem.style.color = squareElement.children[i].getAttribute('class');
            squareElement.style.display = 'none';
        }
        else if (squareElement.getAttribute('data-color') == 'background') {
            topElem.style.backgroundColor = squareElement.children[i].getAttribute('class');
            squareElement.style.display = 'none';
        }
    });
}
function fontStyle() {
    if (event.target.checked && event.target.value == 'italic') {
        topElem.style.fontStyle = event.target.value;
    }
    else if (event.target.checked && event.target.value == 'bold') {
        topElem.style.fontWeight = 'bold';
    }
    else if (!event.target.checked && event.target.value == 'italic') {
        topElem.style.fontStyle = 'unset';
    }
    else if (!event.target.checked && event.target.value == 'bold') {
        topElem.style.fontWeight = 'unset';
    }
}
add.onclick = function () {
    container.style.display = 'none';
    choose.style.display = 'block';
}
function selectElem() {
    if (event.target.value == 'table') {
        showTable.style.display = 'block';
        showList.style.display = 'none';
    }
    else {
        showTable.style.display = 'none';
        showList.style.display = 'block';
    }
}
createTable.onclick = function () {
    let tr = document.querySelector('.trInput').value;
    let td = document.querySelector('.tdInput').value;
    let tdWidth = document.querySelector('.tdWidth').value;
    let tdHeight = document.querySelector('.tdWidth').value;
    let tdBorderWidth = document.querySelector('.tdBorderWidth').value;
    let tdBorderType = document.querySelector('.tdBorderType').value;
    let tdBorderColor = document.querySelector('.tdBorderColor').value;
    textArea.value += `<table>`;
    for (let i = 1; i <= tr; i++) {
        textArea.value += `<tr>`;
        for (let j = 1; j <= td; j++) {
            textArea.value += `<td style="width: ${tdWidth}px; height: ${tdHeight}px; border: ${tdBorderWidth}px ${tdBorderType} ${tdBorderColor}">TD</td>`;
        }
        textArea.value += `</tr>`;
    }
    textArea.value += `</table>`;
    hidingForms();
}
createList.onclick = function () {
    let li = document.querySelector('.liInput').value;
    let liMarkType = document.querySelector('.liMarkType').value;
    textArea.value += `<ul>`;
    for (let i = 1; i <= li; i++) {
        textArea.value += `<li style="list-style: ${liMarkType}">Item ${i}</li>`;
    }
    textArea.value += `</ul>`;
    hidingForms();
}
function hidingForms() {
    choose.style.display = 'none';
    container.style.display = 'block';
    showTable.style.display = 'none';
    showList.style.display = 'none';
    form3.reset();
    form2.reset();
    form4.reset();
}