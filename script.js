console.log('connected')


const div = document.getElementById('my-div');

const h1 = document.createElement('h1')
h1.innerText ="https://facebook.com";

div.appendChild(h1)
//adding css class 
const onHover=()=>{
    const h1 = document.getElementById('h1')
    h1.classList.add('h1')
}


const body = document.getElementById('body')
const section = document.createElement('section');

const h4= document.createElement('h2');
h4.innerText='hello this is sifat';
section.appendChild(h4)

const ul = document.createElement('ul');

ul.innerHTML=
`
<li>banana</li>
<li>Apale</li>
<li>lichu</li>

`



section.appendChild(ul)

body.appendChild(section)

console.log(body)