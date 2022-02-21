// document object model
const para = document.querySelector('.error');
const div = document.querySelector('div.error')
const paras = document.querySelectorAll('p');
console.log(para);
console.log(paras[0]);
const title = document.getElementById('page-title');
console.log(title);
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(title.innerText);
title.innerText += " from this point forward"

paras.forEach(para => {
        console.log(para.innerText);
        para.innerText += "hehehehe"
})
const content = document.querySelector('.content')
console.log(content.innerHTML)

content.innerHTML = '<h2>this is a new h2</h2>';

para.setAttribute('style', 'color: orange;')
para.setAttribute('style', 'margin: 50px auto;') // overwritten
para.style.color = 'purple'; 
para.style.margin = '50px auto';
para.style.fontSize = '50px';   // not overwritten this way

