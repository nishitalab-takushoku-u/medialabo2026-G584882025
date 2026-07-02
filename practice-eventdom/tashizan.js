function tashizan(){
    left = document.querySelector('input[name="left"]');
    let right = document.querySelector('input[name="right"]');
    right = document.querySelector('input[name="right"]');
    let l = Number(left.value);
    let r = Number(right.value); 
    let answer = document.querySelector('span[id="answer"]');
    answer.textContent=l+r;
}

let button = document.querySelector('button#calc');
button.addEventListener('click', tashizan);