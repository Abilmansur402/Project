const events = [
    {
        text: "Ты потерял телефон в другом городе.",
        choices: [
            { text: "Искать через GPS", result: "Ты нашел телефон, но потратил 2 часа." },
            { text: "Попросить помощи у прохожих", result: "Ты наткнулся на мошенников и потерял деньги." },
            { text: "Зайти в ближайший магазин электроники", result: "Ты купил новый телефон, но потратил много денег." }
        ]
    },
    {
        text: "Ты опоздал на важное собеседование.",
        choices: [
            { text: "Сказать правду", result: "Работодатель оценил честность и дал второй шанс." },
            { text: "Солгать про пробку", result: "Тебя разоблачили, и ты потерял шанс на работу." },
            { text: "Извиниться и предложить пересмотреть время", result: "Работодатель согласился и назначил новую встречу." }
        ]
    }
];

let currentEvent;

function generateEvent() {
    currentEvent = events[Math.floor(Math.random() * events.length)];
    document.getElementById("event-text").innerText = currentEvent.text;
    const buttons = document.querySelectorAll("#choices button");
    buttons.forEach((btn, index) => {
        btn.innerText = currentEvent.choices[index].text;
    });
    document.getElementById("choices").style.display = "block";
    document.getElementById("result").innerText = "";
}

function chooseOption(index) {
    document.getElementById("result").innerText = currentEvent.choices[index].result;
}
