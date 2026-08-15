let currentLang = 'uk';
let activeClubData = null;
let currentLeagueClubs = [];

const uefaLeagues = [
    { code: "UKR", name: "🇺🇦 Україна (Українська Прем'єр-Ліга)", count: 16 },
    { code: "ENG", name: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Англія (Premier League)", count: 20 },
    { code: "ESP", name: "🇪🇸 Іспанія (LaLiga)", count: 20 },
    { code: "GER", name: "🇩🇪 Німеччина (Bundesliga)", count: 18 },
    { code: "ITA", name: "🇮🇹 Італія (Serie A)", count: 20 },
    { code: "FRA", name: "🇫🇷 Франція (Ligue 1)", count: 18 },
    { code: "CZE", name: "🇨🇿 Чехія (Chance Liga)", count: 16 },
    { code: "POL", name: "🇵🇱 Польща (Ekstraklasa)", count: 18 },
    { code: "POR", name: "🇵🇹 Португалія (Liga Portugal)", count: 18 },
    { code: "NED", name: "🇳🇱 Нідерланди (Eredivisie)", count: 18 },
    { code: "BEL", name: "🇧🇪 Бельгія (Jupiler Pro League)", count: 16 },
    { code: "TUR", name: "🇹🇷 Туреччина (Süper Lig)", count: 19 },
    { code: "AUT", name: "🇦🇹 Австрія (Bundesliga)", count: 12 },
    { code: "SCO", name: "🏴󠁧󠁢󠁳󠁣󠁴󠁿 Шотландія (Premiership)", count: 12 }
];

// Автоматичний генератор повного складу команди вищої ліги
function generateFullClubData(countryCode, clubIndex) {
    const clubNames = {
        UKR: ["Динамо Київ", "Шахтар Донецьк", "Полісся Житомир", "Олександрія", "Рух Львів", "Кривбас", "Зоря Луганськ", "Ворскла Полтава", "Колос Ковалівка", "ЛНЗ Черкаси", "Карпати Львів", "Верес Рівне", "Оболонь Київ", "Чорноморець", "Лівий Берег", "Інгулець"],
        CZE: ["Sparta Praha", "Slavia Praha", "Viktoria Plzeň", "Baník Ostrava", "Mladá Boleslav", "Slovan Liberec", "Slovácko", "Sigma Olomouc", "Hradec Králové", "Teplice", "Bohemians 1905", "Jablonec", "Pardubice", "Zlín", "Karviná", "České Budějovice"],
        ENG: ["Manchester City", "Arsenal", "Liverpool", "Aston Villa", "Tottenham", "Chelsea", "Newcastle", "Manchester United", "West Ham", "Brighton", "Bournemouth", "Crystal Palace", "Wolves", "Everton", "Brentford", "Fulham", "Nottingham Forest", "Leicester", "Ipswich", "Southampton"]
    };

    const namesList = clubNames[countryCode] || Array.from({length: 16}, (_, i) => `Клуб #${i+1} (${countryCode})`);
    const name = namesList[clubIndex] || `ФК Команда ${clubIndex + 1}`;

    const positions = ["Воротар (GK)", "Центрбек (CB)", "Лівий захисник (LB)", "Правий захисник (RB)", "Опорник (CDM)", "Плеймейкер (CM)", "Вінгер (LW/RW)", "Форвард (ST)"];
    
    // Генерація повного складу 18-22 гравців для обраного клубу
    const squad = Array.from({ length: 20 }, (_, i) => {
        const isStarter = i < 11;
        const pos = positions[i % positions.length];
        return {
            id: clubIndex * 100 + i + 1,
            name: `Гравець #${i + 1} (${name.split(' ')[0]})`,
            status: isStarter ? "starter" : "sub",
            pos: pos,
            foot: i % 2 === 0 ? "Права" : "Ліва",
            stamina: `${82 + (i % 15)}%`,
            strengths: "Висока точність передач, бачення поля, пресинг",
            weaknesses: "Гра головою при кутових",
            tacticalProfile: {
                role: isStarter ? "Ключовий виконавець" : "Ротація / Заміна",
                zone: "Центральна третина поля",
                pressing: "Висока інтенсивність",
                workrate: "Атака: Висока | Оборона: Середня"
            },
            heatmap: Array.from({ length: 12 }, () => Math.floor(Math.random() * 85)),
            stats: {
                goals: Math.floor(Math.random() * 12),
                assists: Math.floor(Math.random() * 10),
                rating: (6.5 + Math.random() * 2.3).toFixed(1)
            }
        };
    });

    return {
        id: `club_${countryCode}_${clubIndex}`,
        title: name,
        country: countryCode,
        coach: `Головний тренер (${name})`,
        staff: "Асистент тренера, Тренер воротарів, Аналітик, Фізіотерапевт",
        matches: [
            { opp: "Суперник A", res: "win", score: "2:0" },
            { opp: "Суперник B", res: "draw", score: "1:1" },
            { opp: "Суперник C", res: "loss", score: "0:2" },
            { opp: "Суперник D", res: "win", score: "3:1" }
        ],
        players: squad
    };
}

document.addEventListener("DOMContentLoaded", () => {
    const countrySelect = document.getElementById("country-select");
    const clubSelect = document.getElementById("club-select");
    const searchBtn = document.getElementById("search-btn");
    const closeModalBtn = document.getElementById("close-modal-btn");
    const modal = document.getElementById("player-modal");

    // Заповнення списку країн
    uefaLeagues.forEach(l => {
        const opt = document.createElement("option");
        opt.value = l.code;
        opt.innerText = `${l.name} (${l.count} клубів)`;
        countrySelect.appendChild(opt);
    });

    countrySelect.addEventListener("change", () => loadLeagueClubs(countrySelect.value));
    searchBtn.addEventListener("click", executeSearch);
    closeModalBtn.addEventListener("click", closeModal);
    
    window.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    loadLeagueClubs("UKR");
});

function loadLeagueClubs(countryCode) {
    const clubSelect = document.getElementById("club-select");
    clubSelect.innerHTML = "";
    
    const leagueInfo = uefaLeagues.find(l => l.code === countryCode) || uefaLeagues[0];
    currentLeagueClubs = Array.from({ length: leagueInfo.count }, (_, i) => generateFullClubData(countryCode, i));

    currentLeagueClubs.forEach(club => {
        const opt = document.createElement("option");
        opt.value = club.id;
        opt.innerText = club.title;
        clubSelect.appendChild(opt);
    });

    executeSearch();
}

function executeSearch() {
    const clubId = document.getElementById("club-select").value;
    activeClubData = currentLeagueClubs.find(c => c.id === clubId) || currentLeagueClubs[0];

    document.getElementById("club-title").innerText = activeClubData.title;
    document.getElementById("club-coach").innerText = activeClubData.coach;
    document.getElementById("club-staff").innerText = activeClubData.staff;
    document.getElementById("club-country-badge").innerText = activeClubData.country;

    renderMatches(activeClubData.matches);
    renderSquad(activeClubData.players);
}

function renderMatches(matches) {
    const container = document.getElementById("matches-list");
    container.innerHTML = "";
    matches.forEach(m => {
        const el = document.createElement("div");
        el.className = "match-badge";
        el.innerHTML = `
            <span class="match-res ${m.res}">${m.res.toUpperCase()}</span>
            <div class="match-opp">${m.opp}</div>
            <div class="match-score">${m.score}</div>
        `;
        container.appendChild(el);
    });
}

function renderSquad(players) {
    const container = document.getElementById("players-list");
    container.innerHTML = "";
    players.forEach(p => {
        const card = document.createElement("div");
        card.className = "player-card";
        card.onclick = () => openPlayerModal(p.id);

        card.innerHTML = `
            <div class="player-card-header">
                <strong>${p.name}</strong>
                <span class="status-pill ${p.status}">${p.status === "starter" ? "Основа" : "Заміна"}</span>
            </div>
            <p style="color: var(--text-secondary); font-size: 0.825rem; margin-top:2px;">${p.pos}</p>
            <div class="player-mini-stats">
                <span>⚽ Голи: <strong>${p.stats.goals}</strong></span>
                <span>🅰️ Асисти: <strong>${p.stats.assists}</strong></span>
                <span>⭐ <strong>${p.stats.rating}</strong></span>
            </div>
        `;
        container.appendChild(card);
    });
}

function openPlayerModal(playerId) {
    const player = activeClubData.players.find(p => p.id === playerId);
    if (!player) return;

    document.getElementById("modal-player-name").innerText = player.name;
    document.getElementById("modal-player-status").innerText = player.status === "starter" ? "Основа" : "Заміна";
    document.getElementById("modal-player-status").className = `status-pill ${player.status}`;

    document.getElementById("modal-player-pos").innerText = player.pos;
    document.getElementById("modal-player-foot").innerText = player.foot;
    document.getElementById("modal-player-stamina").innerText = player.stamina;
    document.getElementById("modal-player-strengths").innerText = player.strengths;
    document.getElementById("modal-player-weaknesses").innerText = player.weaknesses;

    document.getElementById("m-tac-role").innerText = player.tacticalProfile.role;
    document.getElementById("m-tac-zone").innerText = player.tacticalProfile.zone;
    document.getElementById("m-tac-def").innerText = player.tacticalProfile.pressing;
    document.getElementById("m-tac-workrate").innerText = player.tacticalProfile.workrate;

    document.getElementById("m-goals").innerText = player.stats.goals;
    document.getElementById("m-assists").innerText = player.stats.assists;
    document.getElementById("m-rating").innerText = player.stats.rating;

    renderHeatmap(player.heatmap);

    const modal = document.getElementById("player-modal");
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    const modal = document.getElementById("player-modal");
    modal.classList.add("hidden");
    document.body.style.overflow = "";
}

function renderHeatmap(values) {
    const grid = document.getElementById("heatmap-grid");
    grid.innerHTML = "";
    values.forEach(val => {
        const cell = document.createElement("div");
        cell.className = "heatmap-cell";
        const opacity = val / 100;
        if (opacity > 0) cell.style.backgroundColor = `rgba(239, 68, 68, ${opacity})`;
        grid.appendChild(cell);
    });
}
