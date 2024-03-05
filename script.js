console.log('connected')


const section = document.getElementById('my-div');

const sections = document.querySelectorAll('section');

const h1 = document.createElement('h1')
h1.innerText ="https://facebook.com";

section.appendChild(h1)

const onHover=()=>{
    const h1 = document.getElementById('h1')
    h1.classList.add('h1')
}
