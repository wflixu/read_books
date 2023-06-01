let model = {
    url: window.location.href,
}

let input =  document.createElement('input')
input.classList.add('Input', 'URlinput')
input.classList.add('dd')
input.value;
input.addEventListener('change', () => {
    model.url = input.value.toUpperCase();
})

document.body.appendChild(input)

document.querySelector('.element')!.value


import postgres from 'postgres'
let client = postgres({

});

let res = await client



