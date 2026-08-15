// СПИСОК КРАЇН (ТІЛЬКИ НАЗВА)
const uefaCountries = [
    { code: "UKR", name: "🇺🇦 Україна", leagueName: "Українська Прем'єр-Ліга", teamsCount: 16 },
    { code: "ENG", name: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Англія", leagueName: "Прем'єр-ліга Англії", teamsCount: 20 },
    { code: "CZE", name: "🇨🇿 Чехія", leagueName: "Chance Liga", teamsCount: 16 },
    { code: "ESP", name: "🇪🇸 Іспанія", leagueName: "Ла Ліга", teamsCount: 20 }
];

// РЕАЛЬНІ СПИСКИ КЛУБІВ ТА ГРАВЦІВ (БЕЗ ЗАГЛУШОК КЛУБ_1 ЧИ ГРАВЕЦЬ_1)
const clubsData = {
    UKR: [
        {
            id: "dynamo", name: "Динамо Київ", rank: 1, coach: "Олександр Шовковський", staff: "Еміль Карас, Олег Гусєв", formation: "4-3-3",
            opponents: ["Шахтар Донецьк", "Полісся Житомир", "Олександрія", "Рух Львів", "Кривбас", "Зоря Луганськ", "Ворскла", "Колос", "ЛНЗ Черкаси", "Карпати"],
            players: [
                { id: 1, number: 1, firstName: "Георгій", lastName: "Бущан", pos: "Воротар", foot: "Права", strengths: "Рефлекси на лінії, гра на виходах.", weaknesses: "Далекий пас лівою ногою.", role: "Основа" },
                { id: 2, number: 24, firstName: "Олександр", lastName: "Тимчик", pos: "Правий захисник", foot: "Права", strengths: "Висока швидкість, підключення до атак.", weaknesses: "Позиційна робота при кросах.", role: "Основа" },
                { id: 3, number: 4, firstName: "Денис", lastName: "Попов", pos: "Центральний захисник", foot: "Права", strengths: "Боротьба на другому поверсі, агресивний відбір.", weaknesses: "Часті жовті картки.", role: "Основа" },
                { id: 4, number: 32, firstName: "Тарас", lastName: "Михавко", pos: "Центральний захисник", foot: "Ліва", strengths: "Перший пас, читання гри.", weaknesses: "Фізична дуель із кремезними форвардами.", role: "Основа" },
                { id: 5, number: 44, firstName: "Владислав", lastName: "Дубінчак", pos: "Лівий захисник", foot: "Ліва", strengths: "Витривалість, кроси у штрафний.", weaknesses: "Простори за спиною.", role: "Основа" },
                { id: 6, number: 6, firstName: "Володимир", lastName: "Бражко", pos: "Опорний півзахисник", foot: "Права", strengths: "Потужний дальній удар, перехоплення.", weaknesses: "Швидкість розвороту.", role: "Основа" },
                { id: 7, number: 10, firstName: "Микола", lastName: "Шапаренко", pos: "Центральний півзахисник", foot: "Права", strengths: "Дриблінг, просування м'яча, бачення поля.", weaknesses: "Оборонна дисципліна.", role: "Основа" },
                { id: 8, number: 29, firstName: "Віталій", lastName: "Буяльський", pos: "Атакувальний півзахисник", foot: "Права", strengths: "Вривання у штрафний майданчик, завершення.", weaknesses: "Силова боротьба.", role: "Основа" },
                { id: 9, number: 20, firstName: "Олександр", lastName: "Караваєв", pos: "Правий вінгер", foot: "Права", strengths: "Універсалізм, завершення атак.", weaknesses: "Гра один в один в обороні.", role: "Основа" },
                { id: 10, number: 11, firstName: "Владислав", lastName: "Ванат", pos: "Центрфорвард", foot: "Ліва", strengths: "Швидкість, відкривання за спини, вимагання фолів.", weaknesses: "Гра головою.", role: "Основа" },
                { id: 11, number: 9, firstName: "Назар", lastName: "Волошин", pos: "Лівий вінгер", foot: "Права", strengths: "Вибуховий ривок, дриблінг.", weaknesses: "Прийняття рішень у фінальній фазі.", role: "Основа" },
                { id: 12, number: 7, firstName: "Андрій", lastName: "Ярмоленко", pos: "Правий вінгер", foot: "Ліва", strengths: "Техніка, нестандартні паси, досвід.", weaknesses: "Дистанційна швидкість.", role: "Заміна" },
                { id: 13, number: 18, firstName: "Олександр", lastName: "Піхальонок", pos: "Центральний півзахисник", foot: "Ліва", strengths: "Стандарти, розрізні паси.", weaknesses: "Відбір м'яча.", role: "Заміна" },
                { id: 14, number: 35, firstName: "Руслан", lastName: "Нещерет", pos: "Воротар", foot: "Права", strengths: "Гра ногами.", weaknesses: "Стабільність на лінії.", role: "Заміна" }
            ]
        },
        {
            id: "shakhtar", name: "Шахтар Донецьк", rank: 2, coach: "Маріно Пушич", staff: "Маріо Станич", formation: "4-2-3-1",
            opponents: ["Динамо Київ", "Полісся Житомир", "Кривбас", "Олександрія", "Рух Львів", "Ворскла", "Зоря Луганськ", "Колос", "Карпати", "Верес"],
            players: [
                { id: 1, number: 31, firstName: "Дмитро", lastName: "Різник", pos: "Воротар", foot: "Права", strengths: "Гра ногами, реакція.", weaknesses: "Виходи на кутові.", role: "Основа" },
                { id: 2, number: 13, firstName: "Педро", lastName: "Енріке", pos: "Лівий захисник", foot: "Ліва", strengths: "Атакувальні випади.", weaknesses: "Захист на далекій штанзі.", role: "Основа" },
                { id: 3, number: 22, firstName: "Микола", lastName: "Матвієнко", pos: "Центральний захисник", foot: "Ліва", strengths: "Перший пас, досвід.", weaknesses: "Верхові дуелі.", role: "Основа" },
                { id: 4, number: 5, firstName: "Валерій", lastName: "Бондар", pos: "Центральний захисник", foot: "Права", strengths: "Підстраховка, позиція.", weaknesses: "Перша передача під пресингом.", role: "Основа" },
                { id: 5, number: 26, firstName: "Юхим", lastName: "Конопля", pos: "Правий захисник", foot: "Права", strengths: "Підключення до атак, кроси.", weaknesses: "Дисципліна.", role: "Основа" },
                { id: 6, number: 8, firstName: "Георгій", lastName: "Судаков", pos: "Центральний півзахисник", foot: "Права", strengths: "Бачення поля, удари здалеку, дриблінг.", weaknesses: "Силова боротьба.", role: "Основа" },
                { id: 7, number: 21, firstName: "Артем", lastName: "Бондаренко", pos: "Центральний півзахисник", foot: "Ліва", strengths: "Контроль темпу, паси.", weaknesses: "Швидкість.", role: "Основа" },
                { id: 8, number: 11, firstName: "Олександр", lastName: "Зубков", pos: "Правий вінгер", foot: "Ліва", strengths: "Зміщення в центр, удар.", weaknesses: "Правий край без роботи.", role: "Основа" },
                { id: 9, number: 10, firstName: "Егіналду", lastName: "Сілва", pos: "Лівий вінгер", foot: "Права", strengths: "Висока швидкість, стрибучість.", weaknesses: "Фізична міць.", role: "Основа" },
                { id: 10, number: 7, firstName: "Педріньйо", lastName: "Віктор", pos: "Атакувальний півзахисник", foot: "Ліва", strengths: "Техніка в тісному просторі.", weaknesses: "Робота в обороні.", role: "Основа" },
                { id: 11, number: 2, firstName: "Лассіна", lastName: "Траоре", pos: "Центрфорвард", foot: "Права", strengths: "Утримання м'яча спиною до воріт.", weaknesses: "Швидкісний маневр.", role: "Основа" }
            ]
        },
        {
            id: "polissya", name: "Полісся Житомир", rank: 3, coach: "Імад Ашур", staff: "Сергій Шищенко", formation: "4-3-3",
            opponents: ["Шахтар Донецьк", "Динамо Київ", "Олександрія", "Рух Львів", "Кривбас", "ЛНЗ Черкаси", "Ворскла", "Чорноморець", "Інгулець", "Верес"],
            players: [
                { id: 1, number: 1, firstName: "Олег", lastName: "Кудрик", pos: "Воротар", foot: "Права", strengths: "Гра на лінії.", weaknesses: "Передачі під пресингом.", role: "Основа" },
                { id: 2, number: 15, firstName: "Богдан", lastName: "Михайліченко", pos: "Лівий захисник", foot: "Ліва", strengths: "Витривалість, підключення.", weaknesses: "Фоли біля штрафного.", role: "Основа" },
                { id: 3, number: 4, firstName: "Сергій", lastName: "Чоботенко", pos: "Центральний захисник", foot: "Права", strengths: "Гра головою.", weaknesses: "Стартовий ривок.", role: "Основа" },
                { id: 4, number: 3, firstName: "Едуард", lastName: "Сарапій", pos: "Центральний захисник", foot: "Права", strengths: "Універсалізм, паси.", weaknesses: "Агресивність.", role: "Основа" },
                { id: 5, number: 27, firstName: "Вадим", lastName: "Червак", pos: "Правий захисник", foot: "Права", strengths: "Надійність.", weaknesses: "Атакувальний потенціал.", role: "Основа" },
                { id: 6, number: 8, firstName: "Руслан", lastName: "Бабенко", pos: "Опорний півзахисник", foot: "Права", strengths: "Позиція, баланс.", weaknesses: "Швидкість.", role: "Основа" },
                { id: 7, number: 10, firstName: "Олександр", lastName: "Назаренко", pos: "Правий вінгер", foot: "Ліва", strengths: "Найкраща швидкість ліги, гольове відчуття.", weaknesses: "Гра правою ногою.", role: "Основа" },
                { id: 8, number: 22, firstName: "Василь", lastName: "Грицук", pos: "Атакувальний півзахисник", foot: "Права", strengths: "Виконання стандартів.", weaknesses: "Вік та витривалість.", role: "Основа" },
                { id: 9, number: 7, firstName: "Олексій", lastName: "Гуцуляк", pos: "Лівий вінгер", foot: "Ліва", strengths: "Техніка, удар з лівої.", weaknesses: "Повернення в оборону.", role: "Основа" },
                { id: 10, number: 9, firstName: "Пилип", lastName: "Будківський", pos: "Центрфорвард", foot: "Права", strengths: "Антропометрія, боротьба вгорі.", weaknesses: "Швидкість на дистанції.", role: "Основа" },
                { id: 11, number: 11, firstName: "Луїфер", lastName: " Ернандес", pos: "Центрфорвард", foot: "Права", strengths: "Дриблінг, непередбачуваність.", weaknesses: "Адаптація.", role: "Основа" }
            ]
        }
    ],
    ENG: [
        {
            id: "chelsea", name: "Челсі", rank: 4, coach: "Енцо Мареска", staff: "Віллі Кабальєро, Денні Вокер", formation: "4-2-3-1",
            opponents: ["Арсенал", "Ліверпуль", "Манчестер Сіті", "Ньюкасл", "Тоттенгем", "Астон Вілла", "Вест Гем", "Брайтон", "Вулвергемптон", "Крістал Пелас"],
            players: [
                { id: 1, number: 1, firstName: "Роберт", lastName: "Санчес", pos: "Воротар", foot: "Права", strengths: "Рефлекси, довгий пас.", weaknesses: "Помилки при коротких передачах.", role: "Основа" },
                { id: 2, number: 24, firstName: "Ріс", lastName: "Джеймс", pos: "Правий захисник", foot: "Права", strengths: "Потужність, кроси, силовий відбір.", weaknesses: "Схильність до травм.", role: "Основа" },
                { id: 3, number: 29, firstName: "Веслі", lastName: "Фофана", pos: "Центральний захисник", foot: "Права", strengths: "Швидкість, випередження.", weaknesses: "Дисципліна позиції.", role: "Основа" },
                { id: 4, number: 6, firstName: "Леві", lastName: "Колвілл", pos: "Центральний захисник", foot: "Ліва", strengths: "Точний діагональний пас.", weaknesses: "Поворотність проти низьких вінгерів.", role: "Основа" },
                { id: 5, number: 3, firstName: "Марк", lastName: "Кукурелья", pos: "Лівий захисник", foot: "Ліва", strengths: "Пресинг, інвертований рух в центр.", weaknesses: "Верхові єдиноборства.", role: "Основа" },
                { id: 6, number: 25, firstName: "Мойсес", lastName: "Кайседо", pos: "Опорний півзахисник", foot: "Права", strengths: "Перехоплення, підстраховка, обсяг роботи.", weaknesses: "Емоційність.", role: "Основа" },
                { id: 7, number: 8, firstName: "Енцо", lastName: "Фернандес", pos: "Центральний півзахисник", foot: "Права", strengths: "Диригування темпом, довгі паси.", weaknesses: "Швидкість без м'яча.", role: "Основа" },
                { id: 8, number: 20, firstName: "Коул", lastName: "Палмер", pos: "Атакувальний півзахисник", foot: "Ліва", strengths: "Геній рішень, удари, стандарти.", weaknesses: "Фізичний тиск.", role: "Основа" },
                { id: 9, number: 11, firstName: "Ноні", lastName: "Мадуеке", pos: "Правий вінгер", foot: "Ліва", strengths: "Дриблінг один в один.", weaknesses: "Робота на команду.", role: "Основа" },
                { id: 10, number: 7, firstName: "Педру", lastName: "Нету", pos: "Лівий вінгер", foot: "Ліва", strengths: "Вибухова швидкість, кроси.", weaknesses: "Завершення правою.", role: "Основа" },
                { id: 11, number: 15, firstName: "Ніколас", lastName: "Джексон", pos: "Центрфорвард", foot: "Права", strengths: "Ривки за спину, обсяг бігу.", weaknesses: "Реалізація чистих моментів.", role: "Основа" },
                { id: 12, number: 18, firstName: "Крістофер", lastName: "Нкунку", pos: "Атакувальний півзахисник", foot: "Права", strengths: "Завершення в штрафному.", weaknesses: "Інтенсивність пресингу.", role: "Заміна" },
                { id: 13, number: 27, firstName: "Мало", lastName: "Гюсто", pos: "Правий захисник", foot: "Права", strengths: "Атака флангом.", weaknesses: "Захист проти габаритних гравців.", role: "Заміна" }
            ]
        },
        {
            id: "arsenal", name: "Арсенал", rank: 2, coach: "Мікель Артета", staff: "Альберт Стейвенберг", formation: "4-3-3",
            opponents: ["Челсі", "Манчестер Сіті", "Ліверпуль", "Тоттенгем", "Ньюкасл", "Астон Вілла", "Брайтон", "Вест Гем", "Евертон", "Брентфорд"],
            players: [
                { id: 1, number: 22, firstName: "Давід", lastName: "Рая", pos: "Воротар", foot: "Права", strengths: "Контроль штрафного майданчика, короткий пас.", weaknesses: "Дальні удари під перекладину.", role: "Основа" },
                { id: 2, number: 4, firstName: "Бен", lastName: "Вайт", pos: "Правий захисник", foot: "Права", strengths: "Взаємодія з вінгером, підстраховка.", weaknesses: "Швидкість проти швидкісних вінгерів.", role: "Основа" },
                { id: 3, number: 2, firstName: "Вільям", lastName: "Саліба", pos: "Центральний захисник", foot: "Права", strengths: "Спокій, позиція, холоднокровність.", weaknesses: "Рідкісні втрати концентрації.", role: "Основа" },
                { id: 4, number: 6, firstName: "Габріел", lastName: "Магальяес", pos: "Центральний захисник", foot: "Ліва", strengths: "Агресія, домінування при кутових.", weaknesses: "Фоли.", role: "Основа" },
                { id: 5, number: 12, firstName: "Юррієн", lastName: "Тімбер", pos: "Лівий захисник", foot: "Права", strengths: "Універсалізм, дриблінг під тиском.", weaknesses: "Гра вгорі.", role: "Основа" },
                { id: 6, number: 5, firstName: "Томас", lastName: "Партей", pos: "Опорний півзахисник", foot: "Права", strengths: "Вихід із-під пресингу, бачення.", weaknesses: "Швидкісні випади суперника.", role: "Основа" },
                { id: 7, number: 41, firstName: " Деклан", lastName: "Райс", pos: "Центральний півзахисник", foot: "Права", strengths: "Просування м'яча з боєм, відбір.", weaknesses: "Пас між лініями.", role: "Основа" },
                { id: 8, number: 8, firstName: "Мартін", lastName: "Эдегор", pos: "Атакувальний півзахисник", foot: "Ліва", strengths: "Пресинг-лідер, тонкі паси.", weaknesses: "Права нога.", role: "Основа" },
                { id: 9, number: 7, firstName: "Букайо", lastName: "Сака", pos: "Правий вінгер", foot: "Ліва", strengths: "Стабільність, зсув в центр, дриблінг.", weaknesses: "Втома через щільний графік.", role: "Основа" },
                { id: 10, number: 11, firstName: "Габріел", lastName: "Мартінеллі", pos: "Лівий вінгер", foot: "Права", strengths: "Швидкість на дистанції, ривок.", weaknesses: "Прийняття рішень з піднятою головою.", role: "Основа" },
                { id: 11, number: 29, firstName: "Кай", lastName: "Гаверц", pos: "Центрфорвард", foot: "Ліва", strengths: "Рух без м'яча, скидання головою.", weaknesses: "Енергійність у завершенні.", role: "Основа" }
            ]
        }
    ],
    CZE: [
        {
            id: "sparta", name: "Спарта Прага", rank: 1, coach: "Ларс Фрііс", staff: "Йенс Аскоу", formation: "3-4-3",
            opponents: ["Славія Прага", "Вікторія Пльзень", "Банік Острава", "Млада Болеслав", "Слован Ліберець", "Словацко", "Сігма Оломоуц", "Тепліце", "Яблонець", "Богеміанс"],
            players: [
                { id: 1, number: 1, firstName: "Петер", lastName: "Віндаль", pos: "Воротар", foot: "Права", strengths: "Гра ногами, початок атак.", weaknesses: "Удари у ближній кут.", role: "Основа" },
                { id: 2, number: 41, firstName: "Мартін", lastName: "Вітік", pos: "Центральний захисник", foot: "Права", strengths: "Сила, вікові перспективи, боротьба.", weaknesses: "Мобільність.", role: "Основа" },
                { id: 3, number: 27, firstName: "Філіп", lastName: "Панак", pos: "Центральний захисник", foot: "Права", strengths: "Інтелект, короткий пас.", weaknesses: "Швидкість.", role: "Основа" },
                { id: 4, number: 25, firstName: "Асбйорн", lastName: "Соренсен", pos: "Центральний захисник", foot: "Права", strengths: "Позиційна грамотність.", weaknesses: "Травматичність.", role: "Основа" },
                { id: 5, number: 2, firstName: "Анхело", lastName: "Пресіадо", pos: "Правий латераль", foot: "Права", strengths: "Агресія, дриблінг, швидкість.", weaknesses: "Дисципліна (картки).", role: "Основа" },
                { id: 6, number: 6, firstName: "Каан", lastName: "Кайрінен", pos: "Центральний півзахисник", foot: "Ліва", strengths: "Стандарти, точність передач.", weaknesses: "Силовий відбір.", role: "Основа" },
                { id: 7, number: 20, firstName: "Казім", lastName: "Лачі", pos: "Центральний півзахисник", foot: "Права", strengths: "Обсяг роботи, пресинг.", weaknesses: "Завершення атак.", role: "Основа" },
                { id: 8, number: 30, firstName: " Ярослав", lastName: "Зелений", pos: "Лівий латераль", foot: "Ліва", strengths: "Антропометрія, захист.", weaknesses: " Швидкісні фланги.", role: "Основа" },
                { id: 9, number: 14, firstName: "Велько", lastName: "Бірманчевич", pos: "Правий вінгер", foot: "Права", strengths: "Лідер атак, удар, швидкість.", weaknesses: "Егоїзм у моменті.", role: "Основа" },
                { id: 10, number: 22, firstName: "Лукаш", lastName: "Гараслін", pos: "Лівий вінгер", foot: "Права", strengths: "Зсув під праву ногу, кручений удар.", weaknesses: "Оборона.", role: "Основа" },
                { id: 11, number: 9, firstName: "Ян", lastName: "Кухта", pos: "Центрфорвард", foot: "Права", strengths: "Агресивний пресинг, відкривання.", weaknesses: "Втрата моментів.", role: "Основа" }
            ]
        }
    ]
};

let selectedClubData = null;

document.addEventListener("DOMContentLoaded", () => {
    initCountries();
    
    document.getElementById("country-select").addEventListener("change", (e) => loadClubsForCountry(e.target.value));
    document.getElementById("club-select").addEventListener("change", (e) => renderClubDashboard(e.target.value));
    
    // Перемикач згортання/розгортання блоку гравців
    document.getElementById("toggle-squad-btn").addEventListener("click", toggleSquadBlock);
    
    document.getElementById("close-modal").addEventListener("click", closeModal);
    window.addEventListener("click", (e) => {
        if (e.target === document.getElementById("player-modal")) closeModal();
    });
});

function initCountries() {
    const countrySelect = document.getElementById("country-select");
    countrySelect.innerHTML = "";
    
    uefaCountries.forEach(c => {
        const opt = document.createElement("option");
        opt.value = c.code;
        opt.innerText = c.name; // Тільки назва країни
        countrySelect.appendChild(opt);
    });

    loadClubsForCountry("UKR");
}

function loadClubsForCountry(countryCode) {
    const clubSelect = document.getElementById("club-select");
    clubSelect.innerHTML = "";
    
    const list = clubsData[countryCode] || clubsData["UKR"];
    list.forEach(club => {
        const opt = document.createElement("option");
        opt.value = club.id;
        opt.innerText = club.name;
        clubSelect.appendChild(opt);
    });

    renderClubDashboard(list[0].id);
}

function renderClubDashboard(clubId) {
    const countryCode = document.getElementById("country-select").value;
    const countryObj = uefaCountries.find(c => c.code === countryCode) || uefaCountries[0];
    const list = clubsData[countryCode] || clubsData["UKR"];
    const club = list.find(c => c.id === clubId) || list[0];

    selectedClubData = generateMatchAndTacticsData(club);

    // Інформація про клуб
    document.getElementById("club-name").innerText = selectedClubData.name;
    document.getElementById("club-league-info").innerText = `Ліга: ${countryObj.leagueName} | Всього команд у лізі: ${countryObj.teamsCount}`;
    document.getElementById("club-rank").innerText = `${selectedClubData.rank}-е місце в таблиці`;

    // Тренерський штаб та схема
    document.getElementById("coach-name").innerText = selectedClubData.coach;
    document.getElementById("staff-members").innerText = selectedClubData.staff;
    document.getElementById("current-formation-title").innerText = selectedClubData.formation;

    // Малювання поля з реальними прізвищами
    renderPitch("current-pitch-players", selectedClubData.players.slice(0, 11), selectedClubData.formation);

    // Склад
    document.getElementById("squad-count").innerText = `${selectedClubData.players.length} гравців`;
    renderSquadList(selectedClubData.players);

    // Останні 10 матчів із реальними суперниками
    renderMatches(selectedClubData.matches);

    // Рекомендована тактика
    document.getElementById("tactical-reasoning").innerText = selectedClubData.recommendedTactics.reasoning;
    document.getElementById("recommended-formation-title").innerText = selectedClubData.recommendedTactics.formation;
    renderPitch("recommended-pitch-players", selectedClubData.players.slice(0, 11), selectedClubData.recommendedTactics.formation);
}

function generateMatchAndTacticsData(club) {
    // Генерація 10 матчів із реальними назвами клубів суперників
    const matches = club.opponents.slice(0, 10).map((oppName, idx) => {
        const results = ["win", "draw", "loss", "win", "win", "draw", "win", "loss", "win", "draw"];
        const scores = ["2:1", "1:1", "0:2", "3:0", "1:0", "2:2", "4:1", "1:2", "2:0", "0:0"];
        const res = results[idx % results.length];

        return {
            id: idx + 1,
            opponent: oppName,
            result: res,
            score: scores[idx % scores.length],
            stats: {
                passes: 420 + (idx * 15),
                shots: 11 + (idx % 6),
                setPieces: 5 + (idx % 4),
                tackles: 16 + (idx % 5),
                fouls: 9 + (idx % 4)
            }
        };
    });

    return {
        ...club,
        matches: matches,
        recommendedTactics: {
            formation: club.formation === "4-3-3" ? "4-2-3-1" : "4-3-3",
            reasoning: `Зважаючи на індивідуальні показники гравців (${club.players[6].lastName}, ${club.players[7].lastName}), оптимально перейти на схему ${club.formation === "4-3-3" ? "4-2-3-1" : "4-3-3"} для більшого контролю центральної зони та швидкісного виходу у флангові атаки.`
        }
    };
}

// ЗГОРТАННЯ ТА РОЗГОРТАННЯ СПИСКУ ГРАВЦІВ
function toggleSquadBlock() {
    const container = document.getElementById("squad-container");
    const icon = document.getElementById("toggle-squad-icon");

    container.classList.toggle("hidden");
    icon.classList.toggle("open");
}

function renderSquadList(players) {
    const container = document.getElementById("players-list");
    container.innerHTML = "";

    players.forEach(p => {
        const item = document.createElement("div");
        item.className = "player-item";
        item.onclick = () => openPlayerModal(p);

        item.innerHTML = `
            <div class="player-item-left">
                <span class="player-num">#${p.number}</span>
                <div>
                    <div class="player-fullname">${p.firstName} ${p.lastName}</div>
                    <div class="player-pos-badge">${p.pos} • ${p.role}</div>
                </div>
            </div>
            <span style="font-size:0.8rem; color:var(--text-sub);">➔</span>
        `;
        container.appendChild(item);
    });
}

function renderPitch(containerId, players, formation) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    const layouts = {
        "4-3-3": [
            { x: 50, y: 88 },
            { x: 15, y: 70 }, { x: 38, y: 74 }, { x: 62, y: 74 }, { x: 85, y: 70 },
            { x: 30, y: 48 }, { x: 50, y: 52 }, { x: 70, y: 48 },
            { x: 20, y: 22 }, { x: 50, y: 18 }, { x: 80, y: 22 }
        ],
        "4-2-3-1": [
            { x: 50, y: 88 },
            { x: 15, y: 72 }, { x: 38, y: 76 }, { x: 62, y: 76 }, { x: 85, y: 72 },
            { x: 35, y: 55 }, { x: 65, y: 55 },
            { x: 20, y: 34 }, { x: 50, y: 32 }, { x: 80, y: 34 },
            { x: 50, y: 16 }
        ],
        "3-4-3": [
            { x: 50, y: 88 },
            { x: 25, y: 74 }, { x: 50, y: 76 }, { x: 75, y: 74 },
            { x: 12, y: 48 }, { x: 38, y: 52 }, { x: 62, y: 52 }, { x: 88, y: 48 },
            { x: 22, y: 22 }, { x: 50, y: 18 }, { x: 78, y: 22 }
        ]
    };

    const coords = layouts[formation] || layouts["4-3-3"];

    players.forEach((p, idx) => {
        if (!coords[idx]) return;
        const node = document.createElement("div");
        node.className = "pitch-player-node";
        node.style.left = `${coords[idx].x}%`;
        node.style.top = `${coords[idx].y}%`;
        node.onclick = () => openPlayerModal(p);

        node.innerHTML = `
            <div class="player-dot">${p.number}</div>
            <div class="player-name-tag">${p.lastName}</div>
        `;
        container.appendChild(node);
    });
}

function renderMatches(matches) {
    const container = document.getElementById("matches-grid");
    container.innerHTML = "";

    matches.forEach((m, idx) => {
        const card = document.createElement("div");
        card.className = `match-card ${idx === 0 ? 'active' : ''}`;
        card.onclick = () => showMatchStats(m, card);

        const resClass = m.result === "win" ? "res-win" : (m.result === "draw" ? "res-draw" : "res-loss");
        const resLabel = m.result === "win" ? "ПЕРЕМОГА" : (m.result === "draw" ? "НІЧИЯ" : "ПОРАЗКА");

        card.innerHTML = `
            <span class="match-res-tag ${resClass}">${resLabel}</span>
            <div class="match-vs">vs ${m.opponent}</div>
            <div class="match-score-val">${m.score}</div>
        `;
        container.appendChild(card);
    });

    showMatchStats(matches[0]);
}

function showMatchStats(match, targetCard = null) {
    if (targetCard) {
        document.querySelectorAll(".match-card").forEach(c => c.classList.remove("active"));
        targetCard.classList.add("active");
    }

    const panel = document.getElementById("selected-match-stats");
    panel.classList.remove("hidden");

    document.getElementById("match-stats-title").innerText = `Статистика матчу проти ${match.opponent} (${match.score})`;

    const statsContainer = document.getElementById("match-stats-bars");
    statsContainer.innerHTML = `
        <div class="stat-row"><span>Передачі (паси):</span><strong>${match.stats.passes}</strong></div>
        <div class="stat-row"><span>Удари по воротах:</span><strong>${match.stats.shots}</strong></div>
        <div class="stat-row"><span>Стандарти (кутові/штрафні):</span><strong>${match.stats.setPieces}</strong></div>
        <div class="stat-row"><span>Успішні відбори:</span><strong>${match.stats.tackles}</strong></div>
        <div class="stat-row"><span>Фоли / Штрафні:</span><strong>${match.stats.fouls}</strong></div>
    `;
}

function openPlayerModal(player) {
    document.getElementById("m-player-number").innerText = `#${player.number}`;
    document.getElementById("m-player-name").innerText = `${player.firstName} ${player.lastName}`;
    document.getElementById("m-player-pos").innerText = player.pos;
    document.getElementById("m-player-foot").innerText = player.foot;
    document.getElementById("m-player-strengths").innerText = player.strengths;
    document.getElementById("m-player-weaknesses").innerText = player.weaknesses;
    document.getElementById("m-player-role").innerText = player.role;

    document.getElementById("player-modal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("player-modal").classList.add("hidden");
}
