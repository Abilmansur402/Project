const events = [
    {
        text: "Ты потерял телефон в другом городе.",
        image: "lost_phone.jpg",
        choices: [
            { text: "Искать через GPS", result: "Ты нашел телефон, но потратил 2 часа." },
            { text: "Попросить помощи у прохожих", result: "Ты наткнулся на мошенников и потерял деньги." },
            { text: "Купить новый телефон", result: "Ты потратил много денег, но телефон теперь у тебя." }
        ]
    },
    {
        text: "Ты опоздал на важное собеседование.",
        image: "job_interview.jpg",
        choices: [
            { text: "Сказать правду", result: "Работодатель оценил честность и дал второй шанс." },
            { text: "Солгать про пробку", result: "Тебя разоблачили, и ты потерял шанс на работу." },
            { text: "Извиниться и попросить новое время", result: "Работодатель согласился и дал шанс." }
        ]
    },
    {
        text: "Ты нашел кошелек на улице.",
        image: "wallet.jpg",
        choices: [
            { text: "Отнести в полицию", result: "Владелец поблагодарил тебя и дал вознаграждение." },
            { text: "Взять деньги и выбросить кошелек", result: "Камеры зафиксировали тебя, и тебя нашли." },
            { text: "Искать владельца самостоятельно", result: "Ты нашел владельца, но потратил много времени." }
        ]
    },
    {
        text: "Незнакомый человек заходит в подъезд.",
        image: "dark_hallway.jpg",
        choices: [
            { text: "Позвать взрослых", result: "Родители вызвали полицию, всё под контролем." },
            { text: "Спросить, кто он", result: "Человек оказался соседом, всё хорошо." },
            { text: "Игнорировать", result: "Это был незнакомец с плохими намерениями." }
        ]
    }
];

let currentEventIndex = 0;
let totalEvents = events.length;
let progress = 0;

const startButton = document.getElementById("start-button");
const nextEventButton = document.getElementById("next-event");
const themeButton = document.getElementById("theme-button");
const eventText = document.getElementById("event-text");
const choicesDiv = document.getElementById("choices");
const resultText = document.getElementById("result");
const progressBar = document.getElementById("progress-bar");
const eventImage = document.getElementById("event-image");

startButton.addEventListener("click", startGame);
nextEventButton.addEventListener("click", generateEvent);
themeButton.addEventListener("click", toggleTheme);

toggleTheme(); // Применить тему сразу при загрузке

function startGame() {
    startButton.style.display = "none";
    generateEvent();
}

function generateEvent() {
    if (currentEventIndex >= totalEvents) {
        eventText.innerText = "Игра завершена!";
        choicesDiv.innerHTML = "";
        nextEventButton.style.display = "none";
        eventImage.style.display = "none";
        return;
    }

    let currentEvent = events[currentEventIndex];
    eventText.innerText = currentEvent.text;
    eventImage.src = `images/${currentEvent.image}`;
    eventImage.style.display = "block";

    choicesDiv.innerHTML = "";

    currentEvent.choices.forEach((choice, index) => {
        let btn = document.createElement("button");
        btn.innerText = choice.text;
        btn.onclick = () => chooseOption(index);
        choicesDiv.appendChild(btn);
    });

    resultText.innerText = "";
    nextEventButton.style.display = "none";
}

function chooseOption(index) {
    let currentEvent = events[currentEventIndex];
    resultText.innerText = currentEvent.choices[index].result;

    document.querySelectorAll("#choices button").forEach(btn => {
        btn.disabled = true;
    });

    nextEventButton.style.display = "block";
    progress += 100 / totalEvents;
    progressBar.style.width = `${progress}%`;
    currentEventIndex++;
}

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    const themeButton = document.getElementById("theme-button");
    themeButton.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
}
