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
    },
    {
        text: "Ты увидел как Абдулла переезжает к террористам, и ему предлагают бесплантный тур поездку в Сирию",
        choices: [
            { text: "Предупредить его, что это фанатики", result: "Абдулла не поверил и отправился в тур поездку,где его нашли и сделали шахидом." },
            { text: "Поговорить с Раха аби с главой секты и рассказать правду", result: "Раха аби пригрозил вам, сказав что уничтожит Актау с помощью талибанов." },
            { text: "Забить на это и дать выбор воле", result: "После долгих лет и пройденных войн вы встречаете Абдуллу в секте вахабитов в Афаганистане с 5 жёнами." }
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

let currentEvent;

function generateEvent() {
    currentEvent = events[Math.floor(Math.random() * events.length)];
    document.getElementById("event-text").innerText = currentEvent.text;
    
    const choicesDiv = document.getElementById("choices");
    choicesDiv.innerHTML = ""; // Очищаем старые кнопки

    currentEvent.choices.forEach((choice, index) => {
        let btn = document.createElement("button");
        btn.innerText = choice.text;
        btn.onclick = () => chooseOption(index);
        choicesDiv.appendChild(btn);
    });

    choicesDiv.style.display = "block";
    document.getElementById("result").innerText = "";
    document.getElementById("next-event").style.display = "none"; // Скрываем кнопку "Следующее событие"
}

function chooseOption(index) {
    document.getElementById("result").innerText = currentEvent.choices[index].result;

    // Отключаем кнопки после выбора
    document.querySelectorAll("#choices button").forEach(btn => {
        btn.disabled = true;
    });

    // Показываем кнопку "Следующее событие"
    document.getElementById("next-event").style.display = "block";
}
