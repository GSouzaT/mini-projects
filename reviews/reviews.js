const reviews = [
    {
        id: 1,
        name: "Lara N",
        job: "UX DESIGNER",
        img: "/reviews/src/person1.jpeg",
        text: "Do mesmo modo, a execução dos pontos do programa agrega valor ao estabelecimento dos modos de operação convencionais."
    },
    {
        id: 2,
        name: "Jhon Doe",
        job: "Swift DEV",
        img: "/reviews/src/person2.jpeg",
        text: "Assim mesmo, a revolução dos costumes pode nos levar a considerar a reestruturação dos relacionamentos verticais entre as hierarquias."
    },
    {
        id: 3,
        name: "Rehegua Occhi",
        job: "Product Owner",
        img: "/reviews/src/person3.jpeg",
        text: "Percebemos, cada vez mais, que a valorização de fatores subjetivos auxilia a preparação e a composição de alternativas às soluções ortodoxas."
    },
    {
        id: 4,
        name: "Ryan Kyōryū",
        job: "Java Developer",
        img: "/reviews/src/person4.jpeg",
        text: "Assim mesmo, a constante divulgação das informações é uma das consequências do processo de comunicação como um todo."
    },
    {
        id: 5,
        name: "Curtis B",
        job: "CEO",
        img: "/reviews/src/person5.jpeg",
        text: "Desta maneira, o consenso sobre a necessidade de qualificação não pode mais se dissociar do retorno esperado a longo prazo."
    }
];

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const randomBtn = document.querySelector(".random-btn")

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function() {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', function showNextPerson() {
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
})

prevBtn.addEventListener('click', function showPreviousPerson() {
    currentItem--;
    if(currentItem < 0){
        currentItem = 4;
    }
    showPerson(currentItem);
})

randomBtn.addEventListener('click', function showRandomPerson() {
    let randomPerson = getRandomPerson()
    showPerson(randomPerson);
})

function getRandomPerson(){
    return Math.floor(Math.random()*reviews.length);
}
