const events = [
    {
        text: "Ты потерял телефон в другом городе.",
        choices: [
            { text: "Искать через GPS", result: "Ты нашел телефон, но потратил 2 часа." },
            { text: "Попросить помощи у прохожих", result: "Ты наткнулся на мошенников и потерял деньги." },
            { text: "Купить новый телефон", result: "Ты потратил много денег, но телефон теперь у тебя." }
        ]
    },
    {
        text: "Ты опоздал на важное собеседование.",
        choices: [
            { text: "Сказать правду", result: "Работодатель оценил честность и дал второй шанс." },
            { text: "Солгать про пробку", result: "Тебя разоблачили, и ты потерял шанс на работу." },
            { text: "Извиниться и попросить новое время", result: "Работодатель согласился и дал шанс." }
        ]
    },
    {
        text: "Ты нашел кошелек на улице.",
        choices: [
            { text: "Отнести в полицию", result: "Владелец поблагодарил тебя и дал вознаграждение." },
            { text: "Взять деньги и выбросить кошелек", result: "Камеры зафиксировали тебя, и тебя нашли." },
            { text: "Искать владельца самостоятельно", result: "Ты нашел владельца, но потратил много времени." }
        ]
    }
];

let currentEventIndex = 0;
let totalEvents = events.length;
let progress = 0;

document.getElementById("start-button").addEventListener("click", startGame);
document.getElementById("next-event").addEventListener("click", generateEvent);
document.getElementById("theme-button").addEventListener("click", toggleTheme);

function startGame() {
    document.getElementById("start-button").style.display = "none";
    generateEvent();
}

function generateEvent() {
    if (currentEventIndex >= totalEvents) {
        document.getElementById("event-text").innerText = "Игра завершена!";
        document.getElementById("choices").innerHTML = "";
        document.getElementById("next-event").style.display = "none";
        return;
    }

    let currentEvent = events[currentEventIndex];
    document.getElementById("event-text").innerText = currentEvent.text;

    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = "";

    currentEvent.choices.forEach((choice, index) => {
        let btn = document.createElement("button");
        btn.innerText = choice.text;
        btn.onclick = () => chooseOption(index);
        choicesDiv.appendChild(btn);
    });

    document.getElementById("result").innerText = "";
    document.getElementById("next-event").style.display = "none";
}

function chooseOption(index) {
    let currentEvent = events[currentEventIndex];
    document.getElementById("result").innerText = currentEvent.choices[index].result;

    document.querySelectorAll("#choices button").forEach(btn => {
        btn.disabled = true;
    });

    document.getElementById("next-event").style.display = "block";

    progress += 100 / totalEvents;
    document.getElementById("progress-bar").style.width = `${progress}%`;

    currentEventIndex++;
}

function toggleTheme() {
    document.body.classList.toggle("dark-theme");
    const themeButton = document.getElementById("theme-button");
    themeButton.textContent = document.body.classList.contains("dark-theme") ? "☀️" : "🌙";
}
