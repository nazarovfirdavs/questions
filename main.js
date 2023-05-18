const answer = document.querySelector("#answer");
const btn = document.querySelector("#btn");
const text = document.querySelector("#text")

let questions = [
    { savol: "Когда закончился 2 мировая война?", javob: "1945", img: "./img/voyna.jpg" },
    { savol: "Когда создали instagram?", javob: "2010", img: "./img/instagram.png" },
    { savol: "Самая высокая точка в мире?", javob: "everest", img: "./img/everest.jpg" },
    { savol: "День независимости Республики Узбекистана?", j: "1991", img: "./img/flag.png" },
    { savol: "Какой флаг изображен на картинке?", javob: "rossiya", img:"./img/russia.jpg" },
    { savol: "Какой флаг изображен на картинке?", javob: "braziliya", img:"./img/brazil.png" },
    { savol: "Tugadi", javob: " ", img:"./img/theend.png"},
    
];
function* start(){
    for(let sav of questions) {
     text.textContent = sav.savol;   
     img.src = sav.img
     let j = yield;
    if(j == sav.javob) ball.textContent = +ball.textContent+1;
    }
}

let i = 0;

let gen = start();

gen.next();
btn.onclick = () => {
    gen.next(answer.value).value;
    answer.value = ""
}
