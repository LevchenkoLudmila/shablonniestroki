const a = document.querySelector ('input[name="ferstname"]');
console.log(a);
const b = document.querySelector ('input[name="secondname"]');
console.log(b);
const c = document.querySelector ('input[name="soname"]');
console.log(c);
const myButton = document.querySelector('.button1');
console.log(myButton);
const doOut = document.querySelector('.out');
console.log (doOut);

myButton.addEventListener('click',() => {
    myClick();
});

function myClick(){
    let val1 = document.querySelector ('input[name="ferstname"]').value;
    const val2 = document.querySelector ('input[name="secondname"]').value;
    const val3 = document.querySelector ('input[name="soname"]').value;
    doOut.innerHTML = `${val1} ${val2[0]} ${val3[0]}`;
}
