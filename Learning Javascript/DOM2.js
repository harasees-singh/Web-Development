const content = document.getElementsByClassName('error');
console.log(content);
content[0].setAttribute('class', 'success');

const para = document.querySelector('p');

para.classList.add('success');
// para.classList.remove('success');