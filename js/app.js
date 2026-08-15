let currentLang = 'uk';
let activeClubData = null;

const translations = {
    uk: {
        title: "⚽ Футбольний Психопат",
        subtitle: "Аналітика клубів UEFA та детальна статистика гравців",
        search_title: "🇪🇺 Вибір клубу UEFA",
        btn_search: "Аналізувати",
        lbl_coach: "Головний тренер:",
        lbl_last_matches: "📊 Останні 10 матчів",
        squad: "Склад та статистика гравців",
        starter: "Основа", sub: "Заміна",
        win: "ПЕР", draw: "НІЧ", loss: "ПОР",
        lbl_pos: "Позиція:", lbl_foot: "Робоча нога:", lbl_stamina: "Витривалість:",
        lbl_strengths: "💪 Сильні сторони", lbl_weaknesses: "⚠️ Слабкі сторони",
        lbl_tactics_title: "📋 Тактичний профіль",
        lbl_role: "🎯 Роль:", lbl_zone: "📍 Зона:",
        lbl_def: "🛡️ Пресинг:", lbl_workrate: "🏃‍♂️ Обсяг роботи:",
        lbl_heatmap: "🔥 Теплова карта (Heatmap)",
        lbl_stats: "📈 Повна статистика в єврокубках/лізі",
        st_goals: "Голи", st_assists: "Асисти", st_rating: "Рейтинг",
        foot_right: "Права", foot_left: "Ліва"
    },
    en: {
        title: "⚽ Football Psychopath",
        subtitle: "UEFA club analytics and detailed player statistics",
        search_title: "🇪🇺 UEFA Club Selection",
        btn_search: "Analyze",
        lbl_coach: "Head Coach:",
        lbl_last_matches: "📊 Last 10 Matches",
        squad: "Squad & Player Statistics",
        starter: "Starter", sub: "Substitute",
        win: "WIN", draw: "DRAW", loss: "LOSS",
        lbl_pos: "Position:", lbl_foot: "Preferred Foot:", lbl_stamina: "Stamina:",
        lbl_strengths: "💪 Strengths", lbl_weaknesses: "⚠️ Weaknesses",
        lbl_tactics_title: "📋 Tactical Profile",
        lbl_role: "🎯 Role:", lbl_zone: "📍 Zone:",
        lbl_def: "🛡️ Pressing:", lbl_workrate: "🏃‍♂️ Work Rate:",
        lbl_heatmap: "🔥 Activity Heatmap",
        lbl_stats: "📈 UEFA & Domestic Statistics",
        st_goals: "Goals", st_assists: "Assists", st_rating: "Rating",
        foot_right: "Right", foot_left: "Left"
    },
    cs: {
        title: "⚽ Fotbalový Psychopat",
        subtitle: "UEFA klubová analytika a podrobná statistika hráčů",
        search_title: "🇪🇺 Výběr klubu UEFA",
        btn_search: "Analyzovat",
        lbl_coach: "Hlavní trenér:",
        lbl_last_matches: "📊 Posledních 10 zápasů",
        squad: "Sestava a statistiky hráčů",
        starter: "Základ", sub: "Lavička",
        win: "VÝH", draw: "REM", loss: "PRO",
        lbl_pos: "Pozice:", lbl_foot: "Silnější noha:", lbl_stamina: "Vytrvalost:",
        lbl_strengths: "💪 Silné stránky", lbl_weaknesses: "⚠️ Slabé stránky",
        lbl_tactics_title: "📋 Taktický profil",
        lbl_role: "🎯 Role:", lbl_zone: "Zóna:",
        lbl_def: "🛡️ Presink:", lbl_workrate: "🏃‍♂️ Pracovní tempo:",
        lbl_heatmap: "🔥 Teplotní mapa (Heatmap)",
        lbl_stats: "📈 Statistiky v UEFA a lize",
        st_goals: "Góly", st_assists: "Asistence", st_rating: "Hodnocení",
        foot_right: "Pravá", foot_left: "Levá"
    },
    ru: {
        title: "⚽ Футбольный Психопат",
        subtitle: "Аналитика клубов UEFA и детальная статистика игроков",
        search_title: "🇪🇺 Выбор клуба UEFA",
        btn_search: "Анализировать",
        lbl_coach: "Главный тренер:",
        lbl_last_matches: "📊 Последние 10 матчей",
        squad: "Состав и статистика игроков",
        starter: "Основа", sub: "Замена",
        win: "ПОБ", draw: "НИЧ", loss: "ПОР",
        lbl_pos: "Позиция:", lbl_foot: "Рабочая нога:", lbl_stamina: "Выносливость:",
        lbl_strengths: "💪 Сильные стороны", lbl_weaknesses: "⚠️ Слабые стороны",
        lbl_tactics_title: "📋 Тактический профиль",
        lbl_role: "🎯 Роль:", lbl_zone: "📍 Зона:",
        lbl_def: "🛡️ Прессинг:", lbl_workrate: "🏃‍♂️ Объем работы:",
        lbl_heatmap: "🔥 Тепловая карта (Heatmap)",
        lbl_stats: "📈 Полная статистика в еврокубках/лиге",
        st_goals: "Голы", st_assists: "Ассисты", st_rating: "Рейтинг",
        foot_right: "Правая", foot_left: "Левая"
    }
};

const uefaCountriesList = [
    { code: "ENG", name: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Англія (Premier League)" },
    { code: "ITA", name: "🇮🇹 Італія (Serie A)" },
    { code: "ESP", name: "🇪🇸 Іспанія (LaLiga)" },
    { code: "GER", name: "🇩🇪 Німеччина (Bundesliga)" },
    { code: "FRA", name: "🇫🇷 Франція (Ligue 1)" },
    { code: "POR", name: "🇵🇹 Португалія (Liga Portugal)" },
    { code: "BEL", name: "🇧🇪 Бельгія (Jupiler Pro League)" },
    { code: "NED", name: "🇳🇱 Нідерланди (Eredivisie)" },
    { code: "TUR", name: "🇹🇷 Туреччина (Süper Lig)" },
    { code: "CZE", name: "🇨🇿 Чехія (Chance Liga)" },
    { code: "GRE", name: "🇬🇷 Греція (Super League 1)" },
    { code: "POL", name: "🇵🇱 Польща (Ekstraklasa)" },
    { code: "DEN", name: "🇩🇰 Данія (Superliga)" },
    { code: "NOR", name: "🇳🇴 Норвегія (Eliteserien)" },
    { code: "CYP", name: "🇨🇾 Кіпр (Cyprus League)" },
    { code: "SUI", name: "🇨🇭 Швейцарія (Super League)" },
    { code: "AUT", name: "🇦🇹 Австрія (Bundesliga)" },
    { code: "SCO", name: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Шотландія (Premiership)" },
    { code: "SWE", name: "🇸🇪 Швеція (Allsvenskan)" },
    { code: "CRO", name: "🇭🇷 Хорватія (HNL)" },
    { code: "ISR", name: "🇮🇱 Ізраїль (Premier League)" },
    { code: "HUN", name: "🇭🇺 Угорщина (OTP Bank Liga)" },
    { code: "UKR", name: "🇺🇦 Україна (УПЛ)" },
    { code: "SRB", name: "🇷🇸 Сербія (SuperLiga)" },
    { code: "ROU", name: "🇷🇴 Румунія (SuperLiga)" },
    { code: "SVN", name: "🇸🇮 Словенія (PrvaLiga)" },
    { code: "AZE", name: "🇦🇿 Азербайджан (Premyer Liqası)" },
    { code: "SVK", name: "🇸🇰 Словаччина (Niké liga)" },
    { code: "BUL", name: "🇧🇬 Болгарія (Parva Liga)" },
    { code: "ISL", name: "🇮🇸 Ісландія (Besta deild)" },
    { code: "IRL", name: "🇮🇪 Ірландія (Premier Division)" },
    { code: "ARM", name: "🇦🇲 Вірменія (Premier League)" },
    { code: "MDA", name: "🇲🇩 Молдова (Super Liga)" },
    { code: "FIN", name: "🇫🇮 Фінляндія (Veikkausliiga)" },
    { code: "KOS", name: "🇽🇰 Косово (Superliga)" },
    { code: "KAZ", name: "🇰🇿 Казахстан (KPL)" },
    { code: "BIH", name: "🇧🇦 Боснія і Герцеговина (WWin Liga)" },
    { code: "LVA", name: "🇱🇻 Латвія (Virslīga)" },
    { code: "FRO", name: "🇫🇴 Фарерські острови (Betri deildin)" },
    { code: "MLT", name: "🇲🇹 Мальта (Premier League)" },
    { code: "EST", name: "🇪🇪 Естонія (Premium Liiga)" },
    { code: "ALB", name: "🇦🇱 Албанія (Superiore)" },
    { code: "MKD", name: "🇲🇰 Північна Македонія (1. MFL)" },
    { code: "LTU", name: "🇱🇹 Литва (TOPLYGA)" },
    { code: "NIR", name: "🇬🇧 Північна Ірландія (Premiership)" },
    { code: "GIB", name: "🇬🇮 Гібралтар (Football League)" },
    { code: "AND", name: "🇦🇩 Андорра (Primera Divisió)" },
    { code: "BLR", name: "🇧🇾 Білорусь (Вища ліга)" },
    { code: "GEO", name: "🇬🇪 Грузія (Erovnuli Liga)" },
    { code: "LUX", name: "🇱🇺 Люксембург (BGL Ligue)" },
    { code: "MNE", name: "🇲🇪 Чорногорія (1. CFL)" },
    { code: "WAL", name: "🏴󠁧󠁢󠁷󠁬󠁳️⃣ Уельс (Cymru Premier)" },
    { code: "SMR", name: "🇸🇲 Сан-Марино (Campionato Sammarinese)" },
    { code: "RUS", name: "⛔ Росія (Відсторонена УЄФА)" }
];

const uefaClubsDatabase = {
    UKR: [
        {
            id: "dynamo_kyiv",
            title: "ФК Динамо Київ",
            country: "🇺🇦 Україна (УПЛ / Ліга Європи)",
            coach: "Олександр Шовковський",
            matches: [
                { opp: "Ворскла", res: "win", score: "3:1" },
                { opp: "Шахтар", res: "draw", score: "1:1" },
                { opp: "Заря", res: "win", score: "2:0" },
                { opp: "Полісся", res: "win", score: "2:1" },
                { opp: "Ференцварош", res: "loss", score: "0:4" }
            ],
            players: [
                {
                    id: 101, status: "starter", stamina: "88%", footKey: "foot_right",
                    name: { uk: "Микола Шапаренко", en: "Mykola Shaparenko", cs: "Mykola Shaparenko", ru: "Николай Шапаренко" },
                    pos: { uk: "Півзахисник (CM / CAM)", en: "Midfielder (CM / CAM)", cs: "Záložník (CM / CAM)", ru: "Полузащитник (CM / CAM)" },
                    strengths: { uk: "Дриблінг, бачення поля", en: "Dribbling, vision", cs: "Driblink, vidění hry", ru: "Дриблинг, видение поля" },
                    weaknesses: { uk: "Верхові єдиноборства", en: "Aerial duels", cs: "Hlavičkování", ru: "Верховые единоборства" },
                    tacticalProfile: {
                        bestRole: { uk: "Атакувальний плеймейкер", en: "Advanced Playmaker", cs: "Útočný tvorce hry", ru: "Атакующий плеймейкер" },
                        bestZone: { uk: "Центральна зона", en: "Central zone", cs: "Centrální zóna", ru: "Центральная зона" },
                        defensiveWork: { uk: "Пресинг опорної зони", en: "Pressing DMs", cs: "Presink zálohy", ru: "Прессинг опорников" },
                        workRate: { uk: "Атака: Висока | Оборона: Середня", en: "Att: High | Def: Medium", cs: "Útok: Vysoká | Obrana: Střední", ru: "Атака: Высокая | Оборона: Средняя" }
                    },
                    heatmap: [15, 35, 20, 40, 85, 60, 30, 70, 45, 10, 25, 15],
                    detailedStats: { goals: 5, assists: 7, rating: 7.8 }
                }
            ]
        },
        {
            id: "shakhtar_donetsk",
            title: "ФК Шахтар Донецьк",
            country: "🇺🇦 Україна (УПЛ / Ліга Чемпіонів)",
            coach: "Маріно Пушич",
            matches: [
                { opp: "Янг Бойз", res: "win", score: "2:1" },
                { opp: "Динамо Київ", res: "draw", score: "1:1" }
            ],
            players: [
                {
                    id: 103, status: "starter", stamina: "93%", footKey: "foot_left",
                    name: { uk: "Георгій Судаков", en: "Heorhiy Sudakov", cs: "Heorhiy Sudakov", ru: "Георгий Судаков" },
                    pos: { uk: "Плеймейкер (CAM)", en: "Playmaker (CAM)", cs: "Tvorce hry (CAM)", ru: "Плеймейкер (CAM)" },
                    strengths: { uk: "Далекий удар, контроль", en: "Long shots, control", cs: "Střelba, kontrola míče", ru: "Дальний удар, контроль" },
                    weaknesses: { uk: "Грубий відбір", en: "Tackling timing", cs: "Odebírání míče", ru: "Отбор мяча" },
                    tacticalProfile: {
                        bestRole: { uk: "Вільний художник", en: "Free-role Playmaker", cs: "Volný tvorce hry", ru: "Свободный плеймейкер" },
                        bestZone: { uk: "Атакуюча третина", en: "Attacking third", cs: "Útočná třetina", ru: "Атакующая треть" },
                        defensiveWork: { uk: "Контрпресинг", en: "Counter-pressing", cs: "Kontrapresink", ru: "Контрпрессинг" },
                        workRate: { uk: "Атака: Висока | Оборона: Середня", en: "Att: High | Def: Medium", cs: "Útok: Vysoká | Obrana: Střední", ru: "Атака: Высокая | Оборона: Средняя" }
                    },
                    heatmap: [20, 30, 40, 50, 75, 85, 80, 60, 30, 40, 50, 20],
                    detailedStats: { goals: 8, assists: 6, rating: 8.1 }
                }
            ]
        }
    ]
};

function ensureAllCountriesHaveClubs() {
    uefaCountriesList.forEach(c => {
        if (!uefaClubsDatabase[c.code]) {
            const countryNameOnly = c.name.split(' ')[1] || c.code;
            uefaClubsDatabase[c.code] = [
                {
                    id: `club_1_${c.code.toLowerCase()}`,
                    title: `ФК Чемпіон (${countryNameOnly})`,
                    country: `${c.name} / Єврокубки`,
                    coach: "Головний тренер A",
                    matches: [
                        { opp: "Суперник A", res: "win", score: "2:0" },
                        { opp: "Суперник B", res: "draw", score: "1:1" }
                    ],
                    players: [
                        {
                            id: Math.floor(Math.random() * 80000) + 10000,
                            status: "starter", stamina: "90%", footKey: "foot_right",
                            name: { uk: "Лідер Атаки", en: "Main Striker", cs: "Hlavní útočník", ru: "Лидер Атаки" },
                            pos: { uk: "Форвард (ST)", en: "Striker (ST)", cs: "Útočník (ST)", ru: "Нападающий (ST)" },
                            strengths: { uk: "Швидкість, точний удар", en: "Speed, finishing", cs: "Rychlost, zakončení", ru: "Скорость, удар" },
                            weaknesses: { uk: "Гра головою", en: "Aerial duels", cs: "Hlavičkování", ru: "Игра головой" },
                            tacticalProfile: {
                                bestRole: { uk: "Центрфорвард", en: "Advanced Forward", cs: "Hrotový útočník", ru: "Центрфорвард" },
                                bestZone: { uk: "Штрафний майданчик", en: "Penalty box", cs: "Pokutové území", ru: "Штрафная" },
                                defensiveWork: { uk: "Пресинг захисників", en: "Pressing defenders", cs: "Presink obranců", ru: "Прессинг" },
                                workRate: { uk: "Атака: Висока | Оборона: Низька", en: "Att: High | Def: Low", cs: "Útok: Vysoká | Obrana: Nízká", ru: "Атака: Высокая | Оборона: Низкая" }
                            },
                            heatmap: [10, 10, 20, 30, 40, 70, 90, 80, 20, 30, 60, 40],
                            detailedStats: { goals: 9, assists: 4, rating: 7.9 }
                        }
                    ]
                },
                {
                    id: `club_2_${c.code.toLowerCase()}`,
                    title: `ФК Віце-чемпіон (${countryNameOnly})`,
                    country: `${c.name} / Єврокубки`,
                    coach: "Головний тренер B",
                    matches: [
                        { opp: "Суперник C", res: "loss", score: "0:1" },
                        { opp: "Суперник D", res: "win", score: "3:1" }
                    ],
                    players: [
                        {
                            id: Math.floor(Math.random() * 80000) + 10000,
                            status: "starter", stamina: "88%", footKey: "foot_left",
                            name: { uk: "Опорник Команди", en: "Defensive Midfielder", cs: "Defenzivní záložník", ru: "Опорный защитник" },
                            pos: { uk: "Опорний півзахисник (CDM)", en: "Midfielder (CDM)", cs: "Záložník (CDM)", ru: "Опорник (CDM)" },
                            strengths: { uk: "Відбір, перехоплення", en: "Tackling, interceptions", cs: "Odebírání míče", ru: "Отбор, перехваты" },
                            weaknesses: { uk: "Дриблінг", en: "Dribbling", cs: "Driblink", ru: "Дриблинг" },
                            tacticalProfile: {
                                bestRole: { uk: "Руйнівник", en: "Ball Winning Midfielder", cs: "Defenzivní pes", ru: "Волнорез" },
                                bestZone: { uk: "Опорна зона", en: "Defensive zone", cs: "Defenzivní zóna", ru: "Опорная зона" },
                                defensiveWork: { uk: "Захист штрафного", en: "Box protection", cs: "Ochrana vápna", ru: "Защита штрафной" },
                                workRate: { uk: "Атака: Низька | Оборона: Висока", en: "Att: Low | Def: High", cs: "Útok: Nízká | Obrana: Vysoká", ru: "Атака: Низкая | Оборона: Высокая" }
                            },
                            heatmap: [40, 60, 50, 30, 80, 90, 70, 40, 20, 30, 20, 10],
                            detailedStats: { goals: 1, assists: 3, rating: 7.4 }
                        }
                    ]
                }
            ];
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    ensureAllCountriesHaveClubs();

    const langSelect = document.getElementById("lang-select");
    const countrySelect = document.getElementById("country-select");
    const clubSelect = document.getElementById("club-select");
    const searchBtn = document.getElementById("search-btn");
    const modal = document.getElementById("player-modal");
    const closeBtn = document.getElementById("close-modal-btn");

    populateCountrySelect();

    countrySelect.addEventListener("change", () => {
        populateClubSelect();
    });

    langSelect.addEventListener("change", (e) => {
        currentLang = e.target.value;
        updateUI();
    });

    searchBtn.addEventListener("click", () => {
        executeSearch();
    });

    closeBtn.addEventListener("click", closeModal);
    window.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    populateClubSelect();
    executeSearch();
});

function populateCountrySelect() {
    const countrySelect = document.getElementById("country-select");
    countrySelect.innerHTML = "";

    uefaCountriesList.forEach(c => {
        const option = document.createElement("option");
        option.value = c.code;
        option.innerText = c.name;
        if (c.code === "UKR") option.selected = true;
        countrySelect.appendChild(option);
    });
}

function populateClubSelect() {
    const countryKey = document.getElementById("country-select").value;
    const clubSelect = document.getElementById("club-select");
    clubSelect.innerHTML = "";

    const clubs = uefaClubsDatabase[countryKey] || [];
    clubs.forEach(club => {
        const option = document.createElement("option");
        option.value = club.id;
        option.innerText = club.title;
        clubSelect.appendChild(option);
    });
}

function executeSearch() {
    const countryKey = document.getElementById("country-select").value;
    const clubId = document.getElementById("club-select").value;

    const countryClubs = uefaClubsDatabase[countryKey] || [];
    activeClubData = countryClubs.find(c => c.id === clubId) || countryClubs[0];

    updateUI();
}

function updateUI() {
    const t = translations[currentLang];

    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (t[key]) el.innerText = t[key];
    });

    if (!activeClubData) return;

    document.getElementById("club-title").innerText = activeClubData.title;
    document.getElementById("club-coach").innerText = activeClubData.coach;
    document.getElementById("club-country-badge").innerText = activeClubData.country;

    renderMatches(activeClubData.matches);
    renderPlayersList(activeClubData.players);
}

function renderMatches(matches) {
    const container = document.getElementById("matches-list");
    container.innerHTML = "";
    const t = translations[currentLang];

    matches.forEach(m => {
        const item = document.createElement("div");
        item.className = "match-badge";
        item.innerHTML = `
            <span class="match-res ${m.res}">${t[m.res]}</span>
            <div class="match-opp">${m.opp}</div>
            <div class="match-score">${m.score}</div>
        `;
        container.appendChild(item);
    });
}

function renderPlayersList(players) {
    const container = document.getElementById("players-list");
    container.innerHTML = "";
    const t = translations[currentLang];

    players.forEach(player => {
        const card = document.createElement("div");
        card.className = "player-card";
        card.addEventListener("click", () => openPlayerModal(player.id));

        card.innerHTML = `
            <div class="player-card-header">
                <h3 style="font-size:1rem;">${player.name[currentLang] || player.name['uk']}</h3>
                <span class="status-pill ${player.status}">${t[player.status]}</span>
            </div>
            <p style="color: var(--text-secondary); margin-top:2px; font-size: 0.825rem;">${player.pos[currentLang] || player.pos['uk']}</p>
            <div class="player-mini-stats">
                <span>⚽ Голи: <strong>${player.detailedStats.goals}</strong></span>
                <span>🅰️ Асисти: <strong>${player.detailedStats.assists}</strong></span>
                <span>⭐ Рейтинг: <strong>${player.detailedStats.rating}</strong></span>
            </div>
        `;
        container.appendChild(card);
    });
}

function openPlayerModal(playerId) {
    if (!activeClubData) return;
    const player = activeClubData.players.find(p => p.id === playerId);
    if (!player) return;

    const t = translations[currentLang];
    const lang = currentLang;

    document.getElementById('modal-player-name').innerText = player.name[lang] || player.name['uk'];
    document.getElementById('modal-player-status').innerText = t[player.status];
    document.getElementById('modal-player-status').className = `status-pill ${player.status}`;

    document.getElementById('modal-player-pos').innerText = player.pos[lang] || player.pos['uk'];
    document.getElementById('modal-player-foot').innerText = t[player.footKey];
    document.getElementById('modal-player-stamina').innerText = player.stamina;
    document.getElementById('modal-player-strengths').innerText = player.strengths[lang] || player.strengths['uk'];
    document.getElementById('modal-player-weaknesses').innerText = player.weaknesses[lang] || player.weaknesses['uk'];

    document.getElementById('m-tac-role').innerText = player.tacticalProfile.bestRole[lang] || player.tacticalProfile.bestRole['uk'];
    document.getElementById('m-tac-zone').innerText = player.tacticalProfile.bestZone[lang] || player.tacticalProfile.bestZone['uk'];
    document.getElementById('m-tac-def').innerText = player.tacticalProfile.defensiveWork[lang] || player.tacticalProfile.defensiveWork['uk'];
    document.getElementById('m-tac-workrate').innerText = player.tacticalProfile.workRate[lang] || player.tacticalProfile.workRate['uk'];

    document.getElementById('m-goals').innerText = player.detailedStats.goals;
    document.getElementById('m-assists').innerText = player.detailedStats.assists;
    document.getElementById('m-rating').innerText = player.detailedStats.rating;

    renderHeatmap(player.heatmap);

    const modal = document.getElementById('player-modal');
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('player-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = '';
}

function renderHeatmap(intensityValues) {
    const grid = document.getElementById('heatmap-grid');
    grid.innerHTML = '';
    intensityValues.forEach(value => {
        const cell = document.createElement('div');
        cell.className = 'heatmap-cell';
        let opacity = value / 100;
        if (opacity > 0) cell.style.backgroundColor = `rgba(239, 68, 68, ${opacity})`;
        grid.appendChild(cell);
    });
}
