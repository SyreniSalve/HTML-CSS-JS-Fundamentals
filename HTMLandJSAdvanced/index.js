const buttonId = document.getElementById('button');

const button = document.getElementById('element-add-button');

const alertButtonClick = (event) => alert(`Button was clicked which id is: ${event.id}`);

const addElement = () =>  {
   const text = document.createElement('p');
   text.innerHTML = 'This is the text';
   document.body.appendChild(text);
}

buttonId.addEventListener('click', function() {alertButtonClick (this)})

button.addEventListener('click', addElement);

// alertButtonClick(buttonId)
