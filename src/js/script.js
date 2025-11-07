// TODO
const paragrapheRouge= document.getElementById("a-mettre-en-rouge");
paragrapheRouge.style.color="red"

const bouton = document.getElementById('en-rouge-suite-a-click');

bouton.addEventListener('click', () => {

  bouton.style.backgroundColor = "red";
});


const tousH2 = document.querySelectorAll('h2');


tousH2.forEach(h2 => {
  h2.addEventListener('click', (event) => {

    event.target.style.color = 'red';
  });
});