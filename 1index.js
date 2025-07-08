// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [{
    quote: `"The Best Way to find ypurself is to lose yourself in the
    service of others."`,
    person:`Mahatma Gandhi`
},{
    quote:`"All that we are is the result of what we have thought."`,
    person: `Buddha`
},{
    quote: `"If you judge people, you have no time to love them."`,
    person: `Mother Teresa`
},];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()*quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})