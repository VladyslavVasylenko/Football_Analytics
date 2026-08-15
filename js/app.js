// ==========================================
// 1. БАЗА ДАНИХ (55 КРАЇН УЄФА)
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
            { num: 18, name: "Саділек", pos: "Півзахисник" }, { num: 22, name: "Гараслін", pos: "Нападник" },
            { num: 9, name: "Кухта", pos: "Центрфорвард" }, { num: 14, name: "Бірманчевич", pos: "Нападник" },
            { num: 10, name: "Карабец", pos: "Півзахисник" }
        ]},
        { id: "slavia", name: "Славія Прага", formation: "4-2-3-1", coach: "Йіндржих Трпишовський", players: [
            { num: 1, name: "Коларж", pos: "Воротар" }, { num: 5, name: "Огбу", pos: "Центральний захисник" },
            { num: 3, name: "Голеш", pos: "Центральний захисник" }, { num: 12, name: "Дудєра", pos: "Правий захисник" },
            { num: 18, name: "Божіл", pos: "Лівий захисник" }, { num: 19, name: "Дорлі", pos: "Опорний півзахисник" },
            { num: 10, name: "Зафеіріс", pos: "Центральний півзахисник" }, { num: 17, name: "Провід", pos: "Атакувальний півзахисник" },
            { num: 21, name: "Дудєра", pos: "Правий вінгер" }, { num: 32, name: "Lingr", pos: "Лівий вінгер" },
            { num: 13, name: "Хітіл", pos: "Центрфорвард" }
        ]}
    ]}
};

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

// Автогенерація для решти країн
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
// 2. ІНІЦІАЛІЗАЦІЯ ТА ЛОГІКА ОЧИЩЕННЯ/ПЕРЕВІРКИ
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const countrySel = document.getElementById("country-select");
    const clubSel = document.getElementById("club-select");

    if (!countrySel || !clubSel) return;

    // Заповнюємо список країн + додаємо порожній дефолтний пункт
    countrySel.innerHTML = '<option value="">-- Оберіть країну --</option>';
    Object.keys(leagueData).forEach(code => {
        const opt = document.createElement("option");
        opt.value = code;
        opt.innerText = leagueData[code].name;
        countrySel.appendChild(opt);
    });

    // Очищаємо список клубів при старті
    clubSel.innerHTML = '<option value="">-- Спочатку оберіть країну --</option>';
    clearUI();

    // Подія зміни країни
    countrySel.addEventListener("change", (e) => {
        const countryCode = e.target.value;
        updateClubSelect(countryCode);
    });

    // Подія зміни клубу
    clubSel.addEventListener("change", (e) => {
        const countryCode = countrySel.value;
        const clubId = e.target.value;
        loadClubData(countryCode, clubId);
    });
});

// Оновлення списку клубів для вибраної країни
function updateClubSelect(countryCode) {
    const clubSel = document.getElementById("club-select");
    if (!clubSel) return;

    clubSel.innerHTML = "";

    // Перевірка: якщо країну не вибрано або код не існує
    if (!countryCode || !leagueData[countryCode]) {
        clubSel.innerHTML = '<option value="">-- Спочатку оберіть країну --</option>';
        clearUI();
        return;
    }

    const country = leagueData[countryCode];

    // Додаємо дефолтну порожню опцію для клубів
    const defaultOpt = document.createElement("option");
    defaultOpt.value = "";
    defaultOpt.innerText = "-- Оберіть клуб --";
    clubSel.appendChild(defaultOpt);

    if (country.clubs && country.clubs.length > 0) {
        country.clubs.forEach(c => {
            const opt = document.createElement("option");
            opt.value = c.id;
            opt.innerText = c.name;
            clubSel.appendChild(opt);
        });
    }

    // Скидаємо інтерфейс у порожній стан, оскільки клуб ще не вибраний
    clearUI();
}

// Завантаження даних конкретного клубу
function loadClubData(countryCode, clubId) {
    // Перевірка 1: Чи вибрано країну
    if (!countryCode || !leagueData[countryCode]) {
        clearUI();
        return;
    }

    // Перевірка 2: Чи вибрано клуб
    if (!clubId) {
        clearUI();
        return;
    }

    const country = leagueData[countryCode];
    const club = country.clubs ? country.clubs.find(c => c.id === clubId) : null;

    // Перевірка 3: Чи належить даний клуб саме до вибраної країни
    if (!club) {
        clearUI();
        return;
    }

    // Якщо всі перевірки пройдено — відображаємо дані
    const elClubName = document.getElementById("club-name");
    const elCoachName = document.getElementById("coach-name");
    const elFormation = document.getElementById("current-formation-title");

    if (elClubName) elClubName.innerText = club.name;
    if (elCoachName) elCoachName.innerText = club.coach || "Не вказано";
    if (elFormation) elFormation.innerText = club.formation || "-";

    // Оновлення списку гравців
    const list = document.getElementById("players-list");
    if (list) {
        list.innerHTML = "";
        if (club.players && club.players.length > 0) {
            club.players.forEach(p => {
                const item = document.createElement("div");
                item.className = "player-item";
                item.style.padding = "6px 0";
                item.style.borderBottom = "1px solid #eee";
                item.innerHTML = `<strong>#${p.num} ${p.name}</strong> — <span style="color:#666">${p.pos}</span>`;
                list.appendChild(item);
            });
        } else {
            list.innerHTML = "<div>Немає інформації про гравців</div>";
        }
    }

    // Відображення на полі
    renderPitch("current-pitch-players", club.players || []);
}

// Повне очищення інтерфейсу (коли клуб не вибраний)
function clearUI() {
    const elClubName = document.getElementById("club-name");
    const elCoachName = document.getElementById("coach-name");
    const elFormation = document.getElementById("current-formation-title");
    const list = document.getElementById("players-list");
    const pitch = document.getElementById("current-pitch-players");

    if (elClubName) elClubName.innerText = "Оберіть клуб";
    if (elCoachName) elCoachName.innerText = "-";
    if (elFormation) elFormation.innerText = "-";

    if (list) {
        list.innerHTML = '<div style="color:#888; font-style:italic;">Будь ласка, оберіть країну та клуб для перегляду складу.</div>';
    }

    if (pitch) {
        pitch.innerHTML = "";
    }
}

// Рендеринг гравців на полі
function renderPitch(containerId, players) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";

    if (!players || players.length === 0) return;

    const coords = [
        { x: 50, y: 85 }, // ВР
        { x: 15, y: 68 }, { x: 38, y: 72 }, { x: 62, y: 72 }, { x: 85, y: 68 }, // Захисники
        { x: 30, y: 46 }, { x: 50, y: 50 }, { x: 70, y: 46 }, // Півзахисники
        { x: 20, y: 20 }, { x: 50, y: 15 }, { x: 80, y: 20 }  // Нападники
    ];

    players.forEach((p, i) => {
        if (!coords[i]) return;
        const node = document.createElement("div");
        node.className = "pitch-player-node";
        node.style.position = "absolute";
        node.style.left = `${coords[i].x}%`;
        node.style.top = `${coords[i].y}%`;
        node.style.transform = "translate(-50%, -50%)";
        node.style.textAlign = "center";

        node.innerHTML = `
            <div style="width: 26px; height: 26px; background: #ffeb3b; color: #000; font-weight: bold; border-radius: 50%; line-height: 26px; margin: 0 auto; border: 2px solid #000; font-size: 12px;">${p.num}</div>
            <div style="background: rgba(0,0,0,0.75); color: #fff; padding: 2px 6px; border-radius: 3px; font-size: 10px; margin-top: 2px; white-space: nowrap;">${p.name}</div>
        `;
        container.appendChild(node);
    });
}
