// ==========================================
// 1. БАЗА ДАНИХ КРАЇН ТА КЛУБІВ
// ==========================================
const leagueData = {
    ENG: { 
        name: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Англія", league: "Прем'єр-Ліга", clubs: [
            { 
                id: "mancity", name: "Манчестер Сіті", leagueDetails: "Англійська Прем'єр-Ліга • Сезон 2025/26", rank: "1 місце",
                formation: "4-1-4-1", coach: "Пеп Гвардіола", staff: "Хуанма Лільо, Доменек Торрент",
                players: [
                    { num: 31, name: "Едерсон", pos: "Воротар", foot: "Лів.", strengths: "Гра ногами, довгі передачі", weaknesses: "Ризиковані дії у штрафному", role: "Sweeper-keeper" },
                    { num: 2, name: "Вокер", pos: "Правий захисник", foot: "Прав.", strengths: "Швидкість, фізика", weaknesses: "Позиційна гра", role: "Фулбек-руйнівник" },
                    { num: 3, name: "Діаш", pos: "Центральний захисник", foot: "Прав.", strengths: "Лідерство, відбір", weaknesses: "Мобільність проти швидких форвардів", role: "Центрбек-лідер" },
                    { num: 25, name: "Аканджі", pos: "Центральний захисник", foot: "Прав.", strengths: "Універсальність, пас", weaknesses: "Верхова боротьба", role: "Мобільний захисник" },
                    { num: 24, name: "Гвардіол", pos: "Лівий захисник", foot: "Лів.", strengths: "Техніка, підключення до атак", weaknesses: "Іноді втрачає концентрацію", role: "Інвертований захисник" },
                    { num: 16, name: "Родрі", pos: "Опорний півзахисник", foot: "Прав.", strengths: "Читання гри, баланс, удари", weaknesses: "Немає явних", role: "Опорний якір" },
                    { num: 17, name: "Де Брейне", pos: "Центральний півзахисник", foot: "Прав.", strengths: "Плеймейкінг, передачі", weaknesses: "Травматичність", role: "Атакуючий диспетчер" },
                    { num: 20, name: "Бернарду Сілва", pos: "Атакувальний півзахисник", foot: "Лів.", strengths: "Пресинг, контроль м'яча", weaknesses: "Антропометрія", role: "Воркер / Плеймейкер" },
                    { num: 47, name: "Фоден", pos: "Правий вінгер", foot: "Лів.", strengths: "Дриблінг, гострота", weaknesses: "Гра в обороні", role: "Інвертований вінгер" },
                    { num: 10, name: "Гріліш", pos: "Лівий вінгер", foot: "Прав.", strengths: "Збереження м'яча, фоли", weaknesses: "Гострота біля воріт", role: "Контролер темпу" },
                    { num: 9, name: "Голанд", pos: "Центрфорвард", foot: "Лів.", strengths: "Голелдорство, швидкість", weaknesses: "Участь у білд-апі", role: "Таргетмен" }
                ],
                reasoning: "Поточна схема 4-1-4-1 забезпечує максимальний контроль центру поля та володіння м'ячем."
            },
            { 
                id: "arsenal", name: "Арсенал Лондон", leagueDetails: "Англійська Прем'єр-Ліга • Сезон 2025/26", rank: "2 місце",
                formation: "4-3-3", coach: "Мікель Артета", staff: "Альберт Стуйвенберг, Іньякі Кана",
                players: [
                    { num: 22, name: "Рая", pos: "Воротар", foot: "Прав.", strengths: "Гра на виходах", weaknesses: "Позиціонування на лінії", role: "Сучасний воротар" },
                    { num: 4, name: "Вайт", pos: "Правий захисник", foot: "Прав.", strengths: "Підключення в атаку", weaknesses: "Швидкісні ривки за спину", role: "Правий інверт" },
                    { num: 2, name: "Саліба", pos: "Центральний захисник", foot: "Прав.", strengths: "Спокій, відбір", weaknesses: "Інколи надмірна розслабленість", role: "Стопер" },
                    { num: 6, name: "Габріел", pos: "Центральний захисник", foot: "Лів.", strengths: "Жорсткість, голи зі стандартів", weaknesses: "Картки", role: "Ліворукий центрбек" },
                    { num: 17, name: "Зінченко", pos: "Лівий захисник", foot: "Лів.", strengths: "Плеймейкінг з глибини", weaknesses: "Оборона один-в-один", role: "Фальшивий фулбек" },
                    { num: 41, name: "Райс", pos: "Опорний півзахисник", foot: "Прав.", strengths: "Відбір, перехоплення, ривки", weaknesses: "Креатив у тісних зонах", role: "Бокс-ту-бокс / Опорник" },
                    { num: 8, name: "Едегор", pos: "Центральний півзахисник", foot: "Прав.", strengths: "Креатив, пресинг", weaknesses: "Фізична боротьба", role: "Капітан / Мозок команди" },
                    { num: 29, name: "Гаверц", pos: "Атакувальний півзахисник", foot: "Лів.", strengths: "Відкривання, боротьба вгорі", weaknesses: "Нестабільність реалізації", role: "Потужна вісімка" },
                    { num: 7, name: "Сака", pos: "Правий вінгер", foot: "Лів.", strengths: "Дриблінг, простріли", weaknesses: "Втома через навантаження", role: "Зірковий вінгер" },
                    { num: 11, name: "Мартінеллі", pos: "Лівий вінгер", foot: "Прав.", strengths: "Вибухова швидкість", weaknesses: "Залежність від простору", role: "Швидкісний край" },
                    { num: 9, name: "Жезус", pos: "Центрфорвард", foot: "Прав.", strengths: "Пресинг, техніка", weaknesses: "Реалізація моментів", role: "Фальшива дев'ятка" }
                ],
                reasoning: "Схема 4-3-3 дозволяє ефективно тиснути на захист суперника високим блоком."
            }
        ]
    },
    UKR: { 
        name: "🇺🇦 Україна", league: "УПЛ", clubs: [
            { 
                id: "dynamo", name: "Динамо Київ", leagueDetails: "Українська Прем'єр-Ліга • Сезон 2025/26", rank: "1 місце",
                formation: "4-2-3-1", coach: "Олександр Шовковський", staff: "Еміліан Карас, Олег Гусев",
                players: [
                    { num: 1, name: "Бущан", pos: "Воротар", foot: "Прав.", strengths: "Рефлекси, гра на лінії", weaknesses: "Травми", role: "Основний голкіпер" },
                    { num: 24, name: "Тимчик", pos: "Правий захисник", foot: "Прав.", strengths: "Швидкість, активність в атаці", weaknesses: "Позиційні помилки", role: "Атакуючий край" },
                    { num: 4, name: "Попов", pos: "Центральний захисник", foot: "Прав.", strengths: "Жорсткість, єдиноборства", weaknesses: "Схильність до карток", role: "Руйнівник" },
                    { num: 32, name: "Михавко", pos: "Центральний захисник", foot: "Лів.", strengths: "Перший пас, читання", weaknesses: "Досвід", role: "Перспективний центрбек" },
                    { num: 44, name: "Дубінчак", pos: "Лівий захисник", foot: "Лів.", strengths: "Обсяг роботи", weaknesses: "Точність подач", role: "Роботяга бровки" },
                    { num: 6, name: "Бражко", pos: "Опорний півзахисник", foot: "Прав.", strengths: "Дальній удар, відбір", weaknesses: "Мобільність під пресингом", role: "Опорник-диспетчер" },
                    { num: 10, name: "Шапаренко", pos: "Центральний півзахисник", foot: "Прав.", strengths: "Техніка, пасом у розріз", weaknesses: "Стабільність", role: "Креативний хавбек" },
                    { num: 29, name: "Буяльський", pos: "Атакувальний півзахисник", foot: "Прав.", strengths: "Інтелект, відкривання", weaknesses: "Антропометрія", role: "Тіньовий форвард" },
                    { num: 7, name: "Ярмоленко", pos: "Правий вінгер", foot: "Лів.", strengths: "Досвід, зміщення в центр", weaknesses: "Швидкість", role: "Досвідчений лідер" },
                    { num: 22, name: "Кабаєв", pos: "Лівий вінгер", foot: "Прав.", strengths: "Дриблінг, чорнова робота", weaknesses: "Гольова статистика", role: "Робочий вінгер" },
                    { num: 11, name: "Ванат", pos: "Центрфорвард", foot: "Прав.", strengths: "Відкривання за спину, тиск", weaknesses: "Гра в силовій боротьбі", role: "Атакуючий вістря" }
                ],
                reasoning: "Схема 4-2-3-1 найкраще розкриває потенціал креативних півзахисників та швидких флангів."
            }
        ]
    }
};

// Автогенерація для решти країн, щоб селекти не були порожніми
const otherCountriesCodes = ["ESP", "ITA", "GER", "FRA", "POR", "NED", "TUR", "POL", "CZE"];
otherCountriesCodes.forEach(code => {
    leagueData[code] = {
        name: `Країна (${code})`, league: "Вища ліга", clubs: [
            {
                id: `${code.toLowerCase()}_club1`, name: `${code} FC 1`, leagueDetails: `Національний чемпіонат • Сезон 2025/26`, rank: "3 місце",
                formation: "4-3-3", coach: `Головний тренер (${code})`, staff: "Асистент 1, Асистент 2",
                players: Array.from({length: 11}, (_, i) => ({
                    num: i + 1, name: `Гравець ${i + 1}`, pos: i === 0 ? "Воротар" : "Польовий гравець", foot: "Прав.", strengths: "Стандартні навички", weaknesses: "Немає даних", role: "Універсал"
                })),
                reasoning: "Збалансована розстановка для контролю гри."
            }
        ]
    };
});

// ==========================================
// 2. ІНІЦІАЛІЗАЦІЯ І ЛОГІКА ІНТЕРФЕЙСУ
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    const countrySel = document.getElementById("country-select");
    const clubSel = document.getElementById("club-select");

    if (!countrySel || !clubSel) return;

    // 1. Заповнення списку країн
    countrySel.innerHTML = '<option value="">-- Оберіть країну --</option>';
    Object.keys(leagueData).forEach(code => {
        const opt = document.createElement("option");
        opt.value = code;
        opt.innerText = leagueData[code].name;
        countrySel.appendChild(opt);
    });

    // Початковий стан селекта клубів
    clubSel.innerHTML = '<option value="">-- Спочатку оберіть країну --</option>';
    clearUI();

    // 2. Подія зміни країни
    countrySel.addEventListener("change", (e) => {
        const countryCode = e.target.value;
        updateClubSelect(countryCode);
    });

    // 3. Подія зміни клубу
    clubSel.addEventListener("change", (e) => {
        const countryCode = countrySel.value;
        const clubId = e.target.value;
        loadClubData(countryCode, clubId);
    });

    // 4. Обробка згортання/розгортання складу
    const toggleBtn = document.getElementById("toggle-squad-btn");
    const squadContainer = document.getElementById("squad-container");
    const toggleIcon = document.getElementById("toggle-squad-icon");

    if (toggleBtn && squadContainer) {
        toggleBtn.addEventListener("click", () => {
            squadContainer.classList.toggle("hidden");
            if (squadContainer.classList.contains("hidden")) {
                toggleIcon.innerText = "▼";
            } else {
                toggleIcon.innerText = "▲";
            }
        });
    }

    // 5. Закриття модального вікна
    const closeModalBtn = document.getElementById("close-modal");
    const modal = document.getElementById("player-modal");
    if (closeModalBtn && modal) {
        closeModalBtn.addEventListener("click", () => {
            modal.classList.add("hidden");
        });
        window.addEventListener("click", (e) => {
            if (e.target === modal) modal.classList.add("hidden");
        });
    }
});

// Оновлення списку клубів
function updateClubSelect(countryCode) {
    const clubSel = document.getElementById("club-select");
    if (!clubSel) return;

    clubSel.innerHTML = "";

    if (!countryCode || !leagueData[countryCode]) {
        clubSel.innerHTML = '<option value="">-- Спочатку оберіть країну --</option>';
        clearUI();
        return;
    }

    const country = leagueData[countryCode];
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

    clearUI();
}

// Завантаження даних вибраного клубу
function loadClubData(countryCode, clubId) {
    if (!countryCode || !clubId || !leagueData[countryCode]) {
        clearUI();
        return;
    }

    const country = leagueData[countryCode];
    const club = country.clubs.find(c => c.id === clubId);

    if (!club) {
        clearUI();
        return;
    }

    // Заповнення текстових полів шапки клубу
    document.getElementById("club-name").innerText = club.name;
    document.getElementById("club-league-info").innerText = club.leagueDetails;
    document.getElementById("club-rank").innerText = club.rank;

    // Тренерський штаб
    document.getElementById("coach-name").innerText = club.coach;
    document.getElementById("staff-members").innerText = club.staff;
    document.getElementById("current-formation-title").innerText = club.formation;
    document.getElementById("recommended-formation-title").innerText = club.formation;

    // Тактичне обґрунтування
    document.getElementById("tactical-reasoning").innerText = club.reasoning;

    // Кількість гравців
    const squadCount = club.players ? club.players.length : 0;
    document.getElementById("squad-count").innerText = squadCount;

    // Рендеринг гравців у випадаючому списку
    renderPlayersList(club.players);

    // Рендеринг на полі
    renderPitch("current-pitch-players", club.players);
    renderPitch("recommended-pitch-players", club.players);

    // Останні матчі (мокет)
    renderMatches();
}

// Рендеринг списку гравців
function renderPlayersList(players) {
    const list = document.getElementById("players-list");
    if (!list) return;
    list.innerHTML = "";

    if (!players || players.length === 0) {
        list.innerHTML = "<p>Немає даних про гравців</p>";
        return;
    }

    players.forEach(p => {
        const item = document.createElement("div");
        item.className = "player-row-item";
        item.style.padding = "8px";
        item.style.borderBottom = "1px solid rgba(255,255,255,0.1)";
        item.style.cursor = "pointer";
        item.innerHTML = `<strong>#${p.num} ${p.name}</strong> — <span style="color:#aaa">${p.pos}</span>`;
        
        // Клік відкриває модалку аналітики гравця
        item.addEventListener("click", () => openPlayerModal(p));
        list.appendChild(item);
    });
}

// Модальне вікно гравця
function openPlayerModal(p) {
    document.getElementById("m-player-number").innerText = `#${p.num}`;
    document.getElementById("m-player-name").innerText = p.name;
    document.getElementById("m-player-pos").innerText = p.pos;
    document.getElementById("m-player-foot").innerText = p.foot;
    document.getElementById("m-player-strengths").innerText = p.strengths;
    document.getElementById("m-player-weaknesses").innerText = p.weaknesses;
    document.getElementById("m-player-role").innerText = p.role;

    document.getElementById("player-modal").classList.remove("hidden");
}

// Рендеринг розстановки на полі
function renderPitch(containerId, players) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";

    if (!players || players.length === 0) return;

    // Стандартні координати на полі (у відсотках)
    const coords = [
        { x: 50, y: 88 }, // Воротар
        { x: 15, y: 70 }, { x: 38, y: 75 }, { x: 62, y: 75 }, { x: 85, y: 70 }, // Захисники
        { x: 30, y: 48 }, { x: 50, y: 52 }, { x: 70, y: 48 }, // Півзахисники
        { x: 20, y: 22 }, { x: 50, y: 16 }, { x: 80, y: 22 }  // Нападники
    ];

    players.forEach((p, i) => {
        if (!coords[i]) return;
        const node = document.createElement("div");
        node.style.position = "absolute";
        node.style.left = `${coords[i].x}%`;
        node.style.top = `${coords[i].y}%`;
        node.style.transform = "translate(-50%, -50%)";
        node.style.textAlign = "center";
        node.style.cursor = "pointer";

        node.innerHTML = `
            <div style="width: 28px; height: 28px; background: #ffeb3b; color: #000; font-weight: bold; border-radius: 50%; line-height: 28px; margin: 0 auto; border: 2px solid #000; font-size: 11px;">${p.num}</div>
            <div style="background: rgba(0,0,0,0.8); color: #fff; padding: 1px 5px; border-radius: 3px; font-size: 9px; margin-top: 2px; white-space: nowrap;">${p.name}</div>
        `;

        node.addEventListener("click", () => openPlayerModal(p));
        container.appendChild(node);
    });
}

// Рендеринг сітки останніх матчів
function renderMatches() {
    const grid = document.getElementById("matches-grid");
    if (!grid) return;
    grid.innerHTML = "";

    // Мокові дані для останніх 5 матчів
    const matches = [
        { rival: "Команд А", score: "2:1", result: "win" },
        { rival: "Команд Б", score: "1:1", result: "draw" },
        { rival: "Команд В", score: "0:2", result: "lose" },
        { rival: "Команд Г", score: "3:0", result: "win" },
        { rival: "Команд Д", score: "1:0", result: "win" }
    ];

    matches.forEach((m, index) => {
        const box = document.createElement("div");
        box.className = `match-box ${m.result}`;
        box.style.padding = "8px";
        box.style.background = m.result === "win" ? "rgba(46, 125, 50, 0.3)" : m.result === "lose" ? "rgba(198, 40, 40, 0.3)" : "rgba(238, 238, 238, 0.2)";
        box.style.borderRadius = "6px";
        box.style.textAlign = "center";
        box.style.fontSize = "12px";
        box.innerHTML = `<div>Матч ${index + 1} vs ${m.rival}</div><strong>${m.score}</strong>`;
        grid.appendChild(box);
    });
}

// Очищення інтерфейсу, якщо клуб не вибрано
function clearUI() {
    document.getElementById("club-name").innerText = "-";
    document.getElementById("club-league-info").innerText = "-";
    document.getElementById("club-rank").innerText = "-";
    document.getElementById("coach-name").innerText = "-";
    document.getElementById("staff-members").innerText = "-";
    document.getElementById("current-formation-title").innerText = "-";
    document.getElementById("recommended-formation-title").innerText = "-";
    document.getElementById("tactical-reasoning").innerText = "-";
    document.getElementById("squad-count").innerText = "0";

    const list = document.getElementById("players-list");
    if (list) list.innerHTML = "<p>Будь ласка, оберіть країну та клуб</p>";

    const pitch1 = document.getElementById("current-pitch-players");
    const pitch2 = document.getElementById("recommended-pitch-players");
    if (pitch1) pitch1.innerHTML = "";
    if (pitch2) pitch2.innerHTML = "";

    const matchesGrid = document.getElementById("matches-grid");
    if (matchesGrid) matchesGrid.innerHTML = "<p>Оберіть клуб для перегляду матчів</p>";
}
