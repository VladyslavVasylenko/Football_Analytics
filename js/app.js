// ==========================================
// 1. ПОВНИЙ ОФІЦІЙНИЙ СПИСОК УСІХ 55 КРАЇН УЄФА
// ==========================================
const uefaCountries = [
    { code: "ENG", name: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Англія", leagueName: "Прем'єр-Ліга", teamsCount: 20 },
    { code: "ITA", name: "🇮🇹 Італія", leagueName: "Серія А", teamsCount: 20 },
    { code: "ESP", name: "🇪🇸 Іспанія", leagueName: "Ла Ліга", teamsCount: 20 },
    { code: "GER", name: "🇩🇪 Німеччина", leagueName: "Бундесліга", teamsCount: 18 },
    { code: "FRA", name: "🇫🇷 Франція", leagueName: "Ліга 1", teamsCount: 18 },
    { code: "NED", name: "🇳🇱 Нідерланди", leagueName: "Ередивізі", teamsCount: 18 },
    { code: "POR", name: "🇵🇹 Португалія", leagueName: "Примейра-ліга", teamsCount: 18 },
    { code: "BEL", name: "🇧🇪 Бельгія", leagueName: "Жюпіле Про Ліга", teamsCount: 16 },
    { code: "CZE", name: "🇨🇿 Чехія", leagueName: "Chance Liga", teamsCount: 16 },
    { code: "TUR", name: "🇹🇷 Туреччина", leagueName: "Суперліга", teamsCount: 19 },
    { code: "UKR", name: "🇺🇦 Україна", leagueName: "Українська Прем'єр-Ліга", teamsCount: 16 },
    { code: "AUT", name: "🇦🇹 Австрія", leagueName: "Бундесліга", teamsCount: 12 },
    { code: "NOR", name: "🇳🇴 Норвегія", leagueName: "Елітесеріен", teamsCount: 16 },
    { code: "GRE", name: "🇬🇷 Греція", leagueName: "Суперліга", teamsCount: 14 },
    { code: "DEN", name: "🇩🇰 Данія", leagueName: "Суперліга", teamsCount: 12 },
    { code: "SCO", name: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Шотландія", leagueName: "Прем'єршип", teamsCount: 12 },
    { code: "SUI", name: "🇨🇭 Швейцарія", leagueName: "Суперліга", teamsCount: 12 },
    { code: "POL", name: "🇵🇱 Польща", leagueName: "Екстракляса", teamsCount: 18 },
    { code: "CRO", name: "🇭🇷 Хорватія", leagueName: "HNL", teamsCount: 10 },
    { code: "SRB", name: "🇷🇸 Сербія", leagueName: "Суперліга", teamsCount: 16 },
    { code: "SWE", name: "🇸🇪 Швеція", leagueName: "Аллсвенскан", teamsCount: 16 },
    { code: "ISR", name: "🇮🇱 Ізраїль", leagueName: "Прем'єр-ліга", teamsCount: 14 },
    { code: "CYP", name: "🇨🇾 Кіпр", leagueName: "Перший дивізіон", teamsCount: 14 },
    { code: "HUN", name: "🇭🇺 Угорщина", leagueName: "NBI", teamsCount: 12 },
    { code: "AZE", name: "🇦🇿 Азербайджан", leagueName: "Прем'єр-ліга", teamsCount: 10 },
    { code: "SVK", name: "🇸🇰 Словаччина", leagueName: "Niké liga", teamsCount: 12 },
    { code: "BUL", name: "🇧🇬 Болгарія", leagueName: "Перша ліга", teamsCount: 16 },
    { code: "ROU", name: "🇷🇴 Румунія", leagueName: "Суперліга", teamsCount: 16 },
    { code: "SVN", name: "🇸🇮 Словенія", leagueName: "Перша ліга", teamsCount: 10 },
    { code: "MDA", name: "🇲🇩 Молдова", leagueName: "Суперліга", teamsCount: 8 },
    { code: "KAZ", name: "🇰🇿 Казахстан", leagueName: "Прем'єр-ліга", teamsCount: 13 },
    { code: "IRL", name: "🇮🇪 Ірландія", leagueName: "Прем'єр-дивізіон", teamsCount: 10 },
    { code: "FIN", name: "🇫🇮 Фінляндія", leagueName: "Вейккаусліга", teamsCount: 12 },
    { code: "LTU", name: "🇱🇹 Литва", leagueName: "А Ліга", teamsCount: 10 },
    { code: "ARM", name: "🇦🇲 Вірменія", leagueName: "Прем'єр-ліга", teamsCount: 10 },
    { code: "LVA", name: "🇱🇻 Латвія", leagueName: "Вірсліга", teamsCount: 10 },
    { code: "GEO", name: "🇬🇪 Грузія", leagueName: "Еровнулі Ліга", teamsCount: 10 },
    { code: "BIH", name: "🇧🇦 Боснія і Герцеговина", leagueName: "Прем'єр-ліга", teamsCount: 12 },
    { code: "ISL", name: "🇮🇸 Ісландія", leagueName: "Besta deild", teamsCount: 12 },
    { code: "NIR", name: "🇬🇧 Північна Ірландія", leagueName: "Прем'єршип", teamsCount: 12 },
    { code: "LUX", name: "🇱🇺 Люксембург", leagueName: "Національний дивізіон", teamsCount: 16 },
    { code: "EST", name: "🇪🇪 Естонія", leagueName: "Преміум Ліга", teamsCount: 10 },
    { code: "MLT", name: "🇲🇹 Мальта", leagueName: "Прем'єр-ліга", teamsCount: 12 },
    { code: "ALB", name: "🇦🇱 Албанія", leagueName: "Вища категорія", teamsCount: 10 },
    { code: "FRO", name: "🇫🇴 Фарерські острови", leagueName: "Прем'єр-ліга", teamsCount: 10 },
    { code: "MKD", name: "🇲🇰 Північна Македонія", leagueName: "Перша ліга", teamsCount: 12 },
    { code: "AND", name: "🇦🇩 Андорра", leagueName: "Примера Дивізіо", teamsCount: 10 },
    { code: "MNE", name: "🇲🇪 Чорногорія", leagueName: "Перша ліга", teamsCount: 10 },
    { code: "GIB", name: "🇬🇮 Гібралтар", leagueName: "Національна ліга", teamsCount: 11 },
    { code: "SMR", name: "🇸🇲 Сан-Марино", leagueName: "Чемпіонат Сан-Марино", teamsCount: 16 },
    { code: "LIE", name: "🇱🇮 Ліхтенштейн", leagueName: "Кубок Ліхтенштейну", teamsCount: 7 },
    { code: "WAL", name: "🏴󠁧󠁢󠁷󠁬󠁳󠁿 Уельс", leagueName: "Прем'єр-ліга", teamsCount: 12 },
    { code: "KOS", name: "🇽🇰 Косово", leagueName: "Суперліга", teamsCount: 10 },
    { code: "BLR", name: "🇧🇾 Білорусь", leagueName: "Вища ліга", teamsCount: 16 },
    { code: "RUS", name: "🇷🇺 Росія (Відсторонені)", leagueName: "Прем'єр-ліга", teamsCount: 16 }
];

// ==========================================
// 2. БАЗОВІ РЕАЛЬНІ КЛУБИ ДЛЯ ДЕЯКИХ ЛІГ
// ==========================================
const baseRealClubs = {
    ENG: [
        { id: "mancity", name: "Манчестер Сіті", rank: 1, coach: "Пеп Гвардіола", staff: "Хуанма Лілльо", formation: "4-1-4-1" },
        { id: "arsenal", name: "Арсенал Лондон", rank: 2, coach: "Мікель Артета", staff: "Альберт Стейвенберг", formation: "4-3-3" },
        { id: "liverpool", name: "Ліверпуль", rank: 3, coach: "Арне Слот", staff: "Сипке Хулсхофф", formation: "4-2-3-1" },
        { id: "chelsea", name: "Челсі", rank: 4, coach: "Енцо Мареска", staff: "Віллі Кабальєро", formation: "4-2-3-1" }
    ],
    UKR: [
        { id: "dynamo", name: "Динамо Київ", rank: 1, coach: "Олександр Шовковський", staff: "Олег Гусєв", formation: "4-3-3" },
        { id: "shakhtar", name: "Шахтар Донецьк", rank: 2, coach: "Маріно Пушич", staff: "Маріо Станич", formation: "4-2-3-1" },
        { id: "polissya", name: "Полісся Житомир", rank: 3, coach: "Імад Ашур", staff: "Сергій Шищенко", formation: "4-3-3" },
        { id: "oleksandriya", name: "Олександрія", rank: 4, coach: "Руслан Ротань", staff: "Олексій Антонов", formation: "4-3-3" }
    ],
    CZE: [
        { id: "sparta", name: "Спарта Прага", rank: 1, coach: "Ларс Фрііс", staff: "Йенс Аскоу", formation: "3-4-3" },
        { id: "slavia", name: "Славія Прага", rank: 2, coach: "Йіндржих Трпишовський", staff: "Зденек Грозділ", formation: "3-4-1-2" },
        { id: "plzen", name: "Вікторія Пльзень", rank: 3, coach: "Мирослав Koubek", staff: "Marek Bakoš", formation: "3-4-3" }
    ]
};

// ==========================================
// 3. ДИНАМІЧНИЙ ГЕНЕРАТОР ГРАВЦІВ ТА КЛУБІВ
// ==========================================
const posList = [
    { pos: "Воротар", role: "Основа", num: 1 },
    { pos: "Правий захисник", role: "Основа", num: 2 },
    { pos: "Центральний захисник", role: "Основа", num: 4 },
    { pos: "Центральний захисник", role: "Основа", num: 5 },
    { pos: "Лівий захисник", role: "Основа", num: 3 },
    { pos: "Опорний півзахисник", role: "Основа", num: 6 },
    { pos: "Центральний півзахисник", role: "Основа", num: 8 },
    { pos: "Атакувальний півзахисник", role: "Основа", num: 10 },
    { pos: "Правий вінгер", role: "Основа", num: 7 },
    { pos: "Центрфорвард", role: "Основа", num: 9 },
    { pos: "Лівий вінгер", role: "Основа", num: 11 },
    { pos: "Воротар", role: "Заміна", num: 12 },
    { pos: "Захисник", role: "Заміна", num: 14 },
    { pos: "Півзахисник", role: "Заміна", num: 17 },
    { pos: "Нападник", role: "Заміна", num: 20 }
];

// Генератор УНІКАЛЬНИХ гравців під конкретний клуб
function generateUniquePlayers(clubName, countryCode) {
    const surnames = {
        ENG: ["Smith", "Johnson", "Williams", "Brown", "Jones", "Walker", "Kane", "Rice", "Sterling", "Palmer", "Foden", "Saka", "Pickford", "Trippier", "Grealish"],
        UKR: ["Бущан", "Ярмоленко", "Шапаренко", "Ванат", "Михавко", "Попов", "Бражко", "Караваєв", "Дубінчак", "Буяльський", "Волошин", "Нещерет", "Кабаєв", "Піхальонок", "Тимчик"],
        CZE: ["Souček", "Schick", "Hložek", "Coufal", "Krejčí", "Chytil", "Provod", "Jurásek", "Staněk", "Zima", "Holeš", "Barák", "Lingr", "Vlček", "Chorý"],
        ESP: ["García", "Rodríguez", "González", "López", "Martínez", "Pérez", "Sánchez", "Torres", "Ruiz", "Pedri", "Gavi", "Yamal", "Morata", "Carvajal", "Olmo"],
        GER: ["Müller", "Schmidt", "Schneider", "Fischer", "Weber", "Meyer", "Wagner", "Becker", "Neuer", "Kimmich", "Musiala", "Wirtz", "Havertz", "Sané", "Rüdiger"],
        ITA: ["Rossi", "Russo", "Ferrari", "Esposito", "Bianchi", "Romano", "Colombo", "Ricci", "Barella", "Chiesa", "Bastoni", "Donnarumma", "Pellegrini", "Dimarco", "Scamacca"]
    };

    const list = surnames[countryCode] || [
        `${countryCode}_PlayerA`, `${countryCode}_PlayerB`, `${countryCode}_PlayerC`, `${countryCode}_PlayerD`,
        `${countryCode}_PlayerE`, `${countryCode}_PlayerF`, `${countryCode}_PlayerG`, `${countryCode}_PlayerH`,
        `${countryCode}_PlayerI`, `${countryCode}_PlayerJ`, `${countryCode}_PlayerK`, `${countryCode}_PlayerL`
    ];

    return posList.map((p, idx) => {
        const surname = list[idx % list.length] + (countryCode !== 'ENG' && countryCode !== 'ESP' ? '' : '');
        return {
            number: p.num,
            firstName: `Гравець #${p.num}`,
            lastName: `${surname} (${clubName.substring(0, 3)})`,
            pos: p.pos,
            foot: idx % 2 === 0 ? "Права" : "Ліва",
            strengths: "Контроль м'яча, бачення поля",
            weaknesses: "Фізична витривалість",
            role: p.role
        };
    });
}

// Отримання клубів для країни
function getClubsForCountry(countryCode) {
    let clubs = baseRealClubs[countryCode];
    
    if (!clubs || clubs.length === 0) {
        const country = uefaCountries.find(c => c.code === countryCode);
        const nameClean = country ? country.name.split(" ")[1] : "Клуб";
        
        clubs = [
            { id: `${countryCode.toLowerCase()}_1`, name: `${nameClean} Юнайтед`, rank: 1, coach: "Головний тренер", staff: "Асистент", formation: "4-3-3" },
            { id: `${countryCode.toLowerCase()}_2`, name: `${nameClean} Сіті`, rank: 2, coach: "Головний тренер", staff: "Асистент", formation: "4-2-3-1" },
            { id: `${countryCode.toLowerCase()}_3`, name: `${nameClean} Динамо`, rank: 3, coach: "Головний тренер", staff: "Асистент", formation: "3-5-2" },
            { id: `${countryCode.toLowerCase()}_4`, name: `${countryName || nameClean} Атлетік`, rank: 4, coach: "Головний тренер", staff: "Асистент", formation: "4-4-2" }
        ];
    }

    return clubs.map(c => ({
        ...c,
        players: generateUniquePlayers(c.name, countryCode)
    }));
}

let selectedClubData = null;

// ==========================================
// 4. ІНІЦІАЛІЗАЦІЯ ТА ПОДІЇ
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    initCountries();
    
    document.getElementById("country-select").addEventListener("change", (e) => loadClubsForCountry(e.target.value));
    document.getElementById("club-select").addEventListener("change", (e) => renderClubDashboard(e.target.value));
    
    const squadBtn = document.getElementById("toggle-squad-btn");
    if (squadBtn) squadBtn.addEventListener("click", toggleSquadBlock);
    
    const closeBtn = document.getElementById("close-modal");
    if (closeBtn) closeBtn.addEventListener("click", closeModal);
    
    window.addEventListener("click", (e) => {
        if (e.target === document.getElementById("player-modal")) closeModal();
    });
});

function initCountries() {
    const countrySelect = document.getElementById("country-select");
    if (!countrySelect) return;
    countrySelect.innerHTML = "";
    
    uefaCountries.forEach(c => {
        const opt = document.createElement("option");
        opt.value = c.code;
        opt.innerText = c.name;
        countrySelect.appendChild(opt);
    });

    loadClubsForCountry("ENG"); // Замовчуванням Англія
}

function loadClubsForCountry(countryCode) {
    const clubSelect = document.getElementById("club-select");
    if (!clubSelect) return;
    clubSelect.innerHTML = "";
    
    const list = getClubsForCountry(countryCode);
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
    const list = getClubsForCountry(countryCode);
    const club = list.find(c => c.id === clubId) || list[0];

    selectedClubData = generateMatchAndTacticsData(club, list);

    document.getElementById("club-name").innerText = selectedClubData.name;
    document.getElementById("club-league-info").innerText = `Ліга: ${countryObj.leagueName} | Всього команд: ${countryObj.teamsCount}`;
    document.getElementById("club-rank").innerText = `${selectedClubData.rank}-е місце в таблиці`;

    document.getElementById("coach-name").innerText = selectedClubData.coach;
    document.getElementById("staff-members").innerText = selectedClubData.staff;
    document.getElementById("current-formation-title").innerText = selectedClubData.formation;

    // Малюємо гравців Поточного Клубу
    renderPitch("current-pitch-players", selectedClubData.players.slice(0, 11), selectedClubData.formation);

    document.getElementById("squad-count").innerText = `${selectedClubData.players.length} гравців`;
    renderSquadList(selectedClubData.players);

    renderMatches(selectedClubData.matches);

    document.getElementById("tactical-reasoning").innerText = selectedClubData.recommendedTactics.reasoning;
    document.getElementById("recommended-formation-title").innerText = selectedClubData.recommendedTactics.formation;
    renderPitch("recommended-pitch-players", selectedClubData.players.slice(0, 11), selectedClubData.recommendedTactics.formation);
}

function generateMatchAndTacticsData(club, currentLeagueClubs) {
    const opponentsPool = currentLeagueClubs.filter(c => c.id !== club.id).map(c => c.name);
    
    const matches = Array.from({ length: 10 }).map((_, idx) => {
        const oppName = opponentsPool.length > 0 ? opponentsPool[idx % opponentsPool.length] : "Суперник";
        const results = ["win", "draw", "loss", "win", "win"];
        const scores = ["2:1", "1:1", "0:2", "3:0", "1:0"];
        
        return {
            id: idx + 1,
            opponent: oppName,
            result: results[idx % results.length],
            score: scores[idx % scores.length],
            stats: {
                passes: 400 + (idx * 10),
                shots: 10 + (idx % 5),
                setPieces: 5 + (idx % 3),
                tackles: 12 + (idx % 4),
                fouls: 8 + (idx % 3)
            }
        };
    });

    return {
        ...club,
        matches: matches,
        recommendedTactics: {
            formation: club.formation === "4-3-3" ? "4-2-3-1" : "4-3-3",
            reasoning: `Рекомендація для ${club.name}: змінити схему на ${club.formation === "4-3-3" ? "4-2-3-1" : "4-3-3"} для покращення контролю центральної зони.`
        }
    };
}

function toggleSquadBlock() {
    const container = document.getElementById("squad-container");
    const icon = document.getElementById("toggle-squad-icon");
    if (container) container.classList.toggle("hidden");
    if (icon) icon.classList.toggle("open");
}

function renderSquadList(players) {
    const container = document.getElementById("players-list");
    if (!container) return;
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
    if (!container) return;
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
        ],
        "3-5-2": [
            { x: 50, y: 88 },
            { x: 25, y: 76 }, { x: 50, y: 78 }, { x: 75, y: 76 },
            { x: 12, y: 50 }, { x: 35, y: 54 }, { x: 50, y: 48 }, { x: 65, y: 54 }, { x: 88, y: 50 },
            { x: 35, y: 20 }, { x: 65, y: 20 }
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
    if (!container) return;
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
    if (panel) panel.classList.remove("hidden");

    const title = document.getElementById("match-stats-title");
    if (title) title.innerText = `Статистика матчу проти ${match.opponent} (${match.score})`;

    const statsContainer = document.getElementById("match-stats-bars");
    if (statsContainer) {
        statsContainer.innerHTML = `
            <div class="stat-row"><span>Передачі (паси):</span><strong>${match.stats.passes}</strong></div>
            <div class="stat-row"><span>Удари по воротах:</span><strong>${match.stats.shots}</strong></div>
            <div class="stat-row"><span>Стандарти:</span><strong>${match.stats.setPieces}</strong></div>
            <div class="stat-row"><span>Відбори:</span><strong>${match.stats.tackles}</strong></div>
            <div class="stat-row"><span>Фоли:</span><strong>${match.stats.fouls}</strong></div>
        `;
    }
}

function openPlayerModal(player) {
    document.getElementById("m-player-number").innerText = `#${player.number}`;
    document.getElementById("m-player-name").innerText = `${player.firstName} ${player.lastName}`;
    document.getElementById("m-player-pos").innerText = player.pos;
    document.getElementById("m-player-foot").innerText = player.foot;
    document.getElementById("m-player-strengths").innerText = player.strengths;
    document.getElementById("m-player-weaknesses").innerText = player.weaknesses;
    document.getElementById("m-player-role").innerText = player.role;

    const modal = document.getElementById("player-modal");
    if (modal) modal.classList.remove("hidden");
}

function closeModal() {
    const modal = document.getElementById("player-modal");
    if (modal) modal.classList.add("hidden");
}
