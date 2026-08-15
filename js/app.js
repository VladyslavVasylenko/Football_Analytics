// ==========================================
// 1. 55 КРАЇН УЄФА ТА ЇХНІ РЕАЛЬНІ КЛУБИ
// ==========================================
const leagueData = {
    ENG: { name: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Англія", league: "Прем'єр-Ліга", clubs: [
        { id: "mancity", name: "Манчестер Сіті", formation: "4-1-4-1", coach: "Пеп Гвардіола", players: [
            { num: 31, name: "Едерсон", pos: "Воротар" }, { num: 2, name: "Вокер", pos: "Правий захисник" },
            { num: 3, name: "Діаш", pos: "Центральний захисник" }, { num: 25, name: "Аканджі", pos: "Центральний захисник" },
            { num: 24, name: "Гвардіол", pos: "Лівий захисник" }, { num: 16, name: "Родрі", pos: "Опорний півзахисник" },
            { num: 17, name: "Де Брейне", pos: "Центральний півзахисник" }, { num: 20, name: "Бернарду Сілва", pos: "Атакувальний півзахисник" },
            { num: 47, name: "Фоден", pos: "Правий вінгер" }, { num: 10, name: "Гріліш", pos: "Лівий вінгер" },
            { num: 9, name: "Голанд", pos: "Центрфорвард" }
        ]},
        { id: "arsenal", name: "Арсенал Лондон", formation: "4-3-3", coach: "Мікель Артета", players: [
            { num: 22, name: "Рая", pos: "Воротар" }, { num: 4, name: "Вайт", pos: "Правий захисник" },
            { num: 2, name: "Саліба", pos: "Центральний захисник" }, { num: 6, name: "Габріел", pos: "Центральний захисник" },
            { num: 17, name: "Зінченко", pos: "Лівий захисник" }, { num: 41, name: "Райс", pos: "Опорний півзахисник" },
            { num: 8, name: "Едегор", pos: "Центральний півзахисник" }, { num: 29, name: "Гаверц", pos: "Атакувальний півзахисник" },
            { num: 7, name: "Сака", pos: "Правий вінгер" }, { num: 11, name: "Мартінеллі", pos: "Лівий вінгер" },
            { num: 9, name: "Жезус", pos: "Центрфорвард" }
        ]}
    ]},
    UKR: { name: "🇺🇦 Україна", league: "УПЛ", clubs: [
        { id: "dynamo", name: "Динамо Київ", formation: "4-3-3", coach: "Олександр Шовковський", players: [
            { num: 1, name: "Бущан", pos: "Воротар" }, { num: 24, name: "Тимчик", pos: "Правий захисник" },
            { num: 4, name: "Попов", pos: "Центральний захисник" }, { num: 32, name: "Михавко", pos: "Центральний захисник" },
            { num: 44, name: "Дубінчак", pos: "Лівий захисник" }, { num: 6, name: "Бражко", pos: "Опорний півзахисник" },
            { num: 10, name: "Шапаренко", pos: "Центральний півзахисник" }, { num: 29, name: "Буяльський", pos: "Атакувальний півзахисник" },
            { num: 7, name: "Ярмоленко", pos: "Правий вінгер" }, { num: 22, name: "Кабаєв", pos: "Лівий вінгер" },
            { num: 11, name: "Ванат", pos: "Центрфорвард" }
        ]},
        { id: "shakhtar", name: "Шахтар Донецьк", formation: "4-2-3-1", coach: "Маріно Пушич", players: [
            { num: 31, name: "Різник", pos: "Воротар" }, { num: 13, name: "Гочолейшвілі", pos: "Правий захисник" },
            { num: 22, name: "Матвієнко", pos: "Центральний захисник" }, { num: 5, name: "Бондар", pos: "Центральний захисник" },
            { num: 16, name: "Азаров", pos: "Лівий захисник" }, { num: 6, name: "Степаненко", pos: "Опорний півзахисник" },
            { num: 21, name: "Бондаренко", pos: "Центральний півзахисник" }, { num: 10, name: "Судаков", pos: "Атакувальний півзахисник" },
            { num: 11, name: "Зубков", pos: "Правий вінгер" }, { num: 7, name: "Егіналду", pos: "Лівий вінгер" },
            { num: 2, name: "Траоре", pos: "Центрфорвард" }
        ]}
    ]},
    CZE: { name: "🇨🇿 Чехія", league: "Chance Liga", clubs: [
        { id: "sparta", name: "Спарта Прага", formation: "3-4-3", coach: "Ларс Фрііс", players: [
            { num: 1, name: "Віндаль", pos: "Воротар" }, { num: 4, name: "Зелени", pos: "Центральний захисник" },
            { num: 37, name: "Крейчі", pos: "Центральний захисник" }, { num: 25, name: "Вітік", pos: "Центральний захисник" },
            { num: 20, name: "Казабланка", pos: "Півзахисник" }, { num: 6, name: "Кайрінен", pos: "Півзахисник" },
            { num: 18, name: "Саділек", pos: "Півзахисник" }, { num: 22, name: "Haraslín", pos: "Нападник" },
            { num: 9, name: "Kuchta", pos: "Центрфорвард" }, { num: 14, name: "Birmančević", pos: "Нападник" },
            { num: 10, name: "Karabec", pos: "Півзахисник" }
        ]}
    ]
};

// Список решти 52 країн УЄФА
const otherCountries = [
    { code: "ESP", name: "🇪🇸 Іспанія", league: "Ла Ліга" },
    { code: "ITA", name: "🇮🇹 Італія", league: "Серія А" },
    { code: "GER", name: "🇩🇪 Німеччина", league: "Бундесліга" },
    { code: "FRA", name: "🇫🇷 Франція", league: "Ліга 1" },
    { code: "POR", name: "🇵🇹 Португалія", league: "Примейра" },
    { code: "NED", name: "🇳🇱 Нідерланди", league: "Ередивізі" },
    { code: "BEL", name: "🇧🇪 Бельгія", league: "Ліга Про" },
    { code: "TUR", name: "🇹🇷 Туреччина", league: "Суперліга" },
    { code: "AUT", name: "🇦🇹 Австрія", league: "Бундесліга" },
    { code: "POL", name: "🇵🇱 Польща", league: "Екстракляса" },
    { code: "CRO", name: "🇭🇷 Хорватія", league: "HNL" },
    { code: "SCO", name: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Шотландія", league: "Прем'єршип" },
    { code: "SRB", name: "🇷🇸 Сербія", league: "Суперліга" },
    { code: "SUI", name: "🇨🇭 Швейцарія", league: "Суперліга" },
    { code: "DEN", name: "🇩🇰 Данія", league: "Суперліга" },
    { code: "NOR", name: "🇳🇴 Норвегія", league: "Елітесеріен" },
    { code: "GRE", name: "🇬🇷 Греція", league: "Суперліга" },
    { code: "SWE", name: "🇸🇪 Швеція", league: "Аллсвенскан" },
    { code: "ISR", name: "🇮🇱 Ізраїль", league: "Прем'єр-ліга" },
    { code: "CYP", name: "🇨🇾 Кіпр", league: "Перший дивізіон" },
    { code: "HUN", name: "🇭🇺 Угорщина", league: "NBI" },
    { code: "AZE", name: "🇦🇿 Азербайджан", league: "Прем'єр-ліга" },
    { code: "SVK", name: "🇸🇰 Словаччина", league: "Niké liga" },
    { code: "BUL", name: "🇧🇬 Болгарія", league: "Перша ліга" },
    { code: "ROU", name: "🇷🇴 Румунія", league: "Суперліга" },
    { code: "SVN", name: "🇸🇮 Словенія", league: "Перша ліга" },
    { code: "MDA", name: "🇲🇩 Молдова", league: "Суперліга" },
    { code: "KAZ", name: "🇰🇿 Казахстан", league: "Прем'єр-ліга" },
    { code: "IRL", name: "🇮🇪 Ірландія", league: "Прем'єр-дивізіон" },
    { code: "FIN", name: "🇫🇮 Фінляндія", league: "Вейккаусліга" },
    { code: "LTU", name: "🇱🇹 Литва", league: "А Ліга" },
    { code: "ARM", name: "🇦🇲 Вірменія", league: "Прем'єр-ліга" },
    { code: "LVA", name: "🇱🇻 Латвія", league: "Вірсліга" },
    { code: "GEO", name: "🇬🇪 Грузія", league: "Еровнулі Ліга" },
    { code: "BIH", name: "🇧🇦 Боснія", league: "Прем'єр-ліга" },
    { code: "ISL", name: "🇮🇸 Ісландія", league: "Besta deild" },
    { code: "NIR", name: "🇬🇧 Пн. Ірландія", league: "Прем'єршип" },
    { code: "LUX", name: "🇱🇺 Люксембург", league: "Дивізіон" },
    { code: "EST", name: "🇪🇪 Естонія", league: "Преміум Ліга" },
    { code: "MLT", name: "🇲🇹 Мальта", league: "Прем'єр-ліга" },
    { code: "ALB", name: "🇦🇱 Албанія", league: "Вища категорія" },
    { code: "FRO", name: "🇫🇴 Фарери", league: "Прем'єр-ліга" },
    { code: "MKD", name: "🇲🇰 Пн. Македонія", league: "Перша ліга" },
    { code: "AND", name: "🇦🇩 Андорра", league: "Примера" },
    { code: "MNE", name: "🇲🇪 Чорногорія", league: "Перша ліга" },
    { code: "GIB", name: "🇬🇮 Гібралтар", league: "Національна ліга" },
    { code: "SMR", name: "🇸🇲 Сан-Марино", league: "Чемпіонат" },
    { code: "LIE", name: "🇱🇮 Ліхтенштейн", league: "Кубок" },
    { code: "WAL", name: "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Уельс", league: "Прем'єр-ліга" },
    { code: "KOS", name: "🇽🇰 Косово", league: "Суперліга" },
    { code: "BLR", name: "🇧🇾 Білорусь", league: "Вища ліга" },
    { code: "RUS", name: "🇷🇺 Росія", league: "Прем'єр-ліга" }
];

// Автозаповнення для країн без явного списку
otherCountries.forEach(c => {
    const cleanName = c.name.split(" ")[1] || "Клуб";
    leagueData[c.code] = {
        name: c.name,
        league: c.league,
        clubs: [
            generateAutoClub(`${c.code}_1`, `${cleanName} Юнайтед`, c.code),
            generateAutoClub(`${c.code}_2`, `${cleanName} Сіті`, c.code)
        ]
    };
});

function generateAutoClub(id, name, code) {
    const roles = [
        "Воротар", "Правий захисник", "Центральний захисник", "Центральний захисник",
        "Лівий захисник", "Опорний півзахисник", "Центральний півзахисник",
        "Атакувальний півзахисник", "Правий вінгер", "Лівий вінгер", "Центрфорвард"
    ];
    return {
        id: id,
        name: name,
        formation: "4-3-3",
        coach: `Головний Тренер (${code})`,
        players: roles.map((r, i) => ({
            num: i + 1,
            name: `Гравець ${i + 1} [${code}]`,
            pos: r
        }))
    };
}

// ==========================================
// 2. ПОДІЇ ТА ВІДОБРАЖЕННЯ
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const countrySel = document.getElementById("country-select");
    const clubSel = document.getElementById("club-select");

    countrySel.innerHTML = "";
    Object.keys(leagueData).forEach(code => {
        const opt = document.createElement("option");
        opt.value = code;
        opt.innerText = leagueData[code].name;
        countrySel.appendChild(opt);
    });

    countrySel.value = "ENG";
    updateClubSelect("ENG");

    countrySel.addEventListener("change", (e) => updateClubSelect(e.target.value));
    clubSel.addEventListener("change", (e) => loadClubData(countrySel.value, e.target.value));
});

function updateClubSelect(countryCode) {
    const clubSel = document.getElementById("club-select");
    clubSel.innerHTML = "";
    
    const country = leagueData[countryCode];
    country.clubs.forEach(c => {
        const opt = document.createElement("option");
        opt.value = c.id;
        opt.innerText = c.name;
        clubSel.appendChild(opt);
    });

    loadClubData(countryCode, country.clubs[0].id);
}

function loadClubData(countryCode, clubId) {
    const club = leagueData[countryCode].clubs.find(c => c.id === clubId);
    if (!club) return;

    document.getElementById("club-name").innerText = club.name;
    document.getElementById("coach-name").innerText = club.coach;
    document.getElementById("current-formation-title").innerText = club.formation;

    // Оновлюємо список гравців
    const list = document.getElementById("players-list");
    if (list) {
        list.innerHTML = "";
        club.players.forEach(p => {
            const item = document.createElement("div");
            item.className = "player-item";
            item.innerHTML = `<strong>#${p.num} ${p.name}</strong> — <span>${p.pos}</span>`;
            list.appendChild(item);
        });
    }

    // Відображаємо на табло/полі
    renderPitch("current-pitch-players", club.players, club.formation);
}

function renderPitch(containerId, players, formation) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";

    const coords = [
        { x: 50, y: 88 },
        { x: 15, y: 70 }, { x: 38, y: 74 }, { x: 62, y: 74 }, { x: 85, y: 70 },
        { x: 30, y: 48 }, { x: 50, y: 52 }, { x: 70, y: 48 },
        { x: 20, y: 22 }, { x: 50, y: 18 }, { x: 80, y: 22 }
    ];

    players.forEach((p, i) => {
        if (!coords[i]) return;
        const node = document.createElement("div");
        node.className = "pitch-player-node";
        node.style.left = `${coords[i].x}%`;
        node.style.top = `${coords[i].y}%`;
        node.innerHTML = `<div class="player-dot">${p.num}</div><div class="player-name-tag">${p.name}</div>`;
        container.appendChild(node);
    });
}
