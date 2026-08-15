// СПИСОК КРАЇН (БЕЗ ДЕТАЛЕЙ ТА КІЛЬКОСТІ КОМАНД У СПИСКУ)
const uefaCountries = [
    { code: "ENG", name: "🏴󠁧󠁢󠁥󠁮󠁧󠁿 Англія", leagueName: "Прем'єр-ліга Англії", teamsCount: 20 },
    { code: "UKR", name: "🇺🇦 Україна", leagueName: "Українська Прем'єр-Ліга", teamsCount: 16 },
    { code: "ESP", name: "🇪🇸 Іспанія", leagueName: "Ла Ліга", teamsCount: 20 },
    { code: "GER", name: "🇩🇪 Німеччина", leagueName: "Бундесліга", teamsCount: 18 },
    { code: "ITA", name: "🇮🇹 Італія", leagueName: "Серія А", teamsCount: 20 },
    { code: "CZE", name: "🇨🇿 Чехія", leagueName: "Chance Liga", teamsCount: 16 }
];

// БАЗА ДАНИХ КЛУБІВ
const clubsDatabase = {
    ENG: [
        { id: "chelsea", name: "Челсі", rank: 4, coach: "Енцо Мареска", staff: "Віллі Кабальєро, Денні Вокер", formation: "4-2-3-1" },
        { id: "arsenal", name: "Арсенал", rank: 2, coach: "Мікель Артета", staff: "Альберт Стейвенберг", formation: "4-3-3" },
        { id: "mancity", name: "Манчестер Сіті", rank: 1, coach: "Пеп Гвардіола", staff: "Хуанма Лілло", formation: "3-2-4-1" }
    ],
    UKR: [
        { id: "dynamo", name: "Динамо Київ", rank: 1, coach: "Олександр Шовковський", staff: "Еміль Карас, Олег Гусєв", formation: "4-3-3" },
        { id: "shakhtar", name: "Шахтар Донецьк", rank: 2, coach: "Маріно Пушич", staff: "Маріо Станич", formation: "4-2-3-1" }
    ],
    CZE: [
        { id: "sparta", name: "Спарта Прага", rank: 1, coach: "Ларс Фрііс", staff: "Йенс Аскоу", formation: "3-4-3" }
    ]
};

let currentClubData = null;

document.addEventListener("DOMContentLoaded", () => {
    initCountries();
    
    document.getElementById("country-select").addEventListener("change", (e) => loadClubsForCountry(e.target.value));
    document.getElementById("club-select").addEventListener("change", (e) => renderClubDashboard(e.target.value));
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

    loadClubsForCountry("ENG");
}

function loadClubsForCountry(countryCode) {
    const clubSelect = document.getElementById("club-select");
    clubSelect.innerHTML = "";
    
    const clubs = clubsDatabase[countryCode] || clubsDatabase["ENG"];
    clubs.forEach(club => {
        const opt = document.createElement("option");
        opt.value = club.id;
        opt.innerText = club.name;
        clubSelect.appendChild(opt);
    });

    renderClubDashboard(clubs[0].id);
}

function renderClubDashboard(clubId) {
    const countryCode = document.getElementById("country-select").value;
    const countryInfo = uefaCountries.find(c => c.code === countryCode) || uefaCountries[0];
    const clubsList = clubsDatabase[countryCode] || clubsDatabase["ENG"];
    const clubMeta = clubsList.find(c => c.id === clubId) || clubsList[0];

    // ГЕНЕРАЦІЯ ПОВНИХ ДАНИХ ДЛЯ КЛУБУ
    currentClubData = generateFullClubData(clubMeta, countryInfo);

    // 1. Інформація про клуб та лігу
    document.getElementById("club-name").innerText = currentClubData.name;
    document.getElementById("club-league-info").innerText = `Ліга: ${countryInfo.leagueName} | Кількість команд у лізі: ${countryInfo.teamsCount}`;
    document.getElementById("club-rank").innerText = `${currentClubData.rank}-е місце в таблиці`;

    // 2. Штаб та Поточна схема
    document.getElementById("coach-name").innerText = currentClubData.coach;
    document.getElementById("staff-members").innerText = currentClubData.staff;
    document.getElementById("current-formation-title").innerText = currentClubData.formation;

    renderPitch("current-pitch-players", currentClubData.players.slice(0, 11), currentClubData.formation);

    // 3. Список гравців
    renderPlayersList(currentClubData.players);

    // 4. Останні 10 матчів
    renderMatches(currentClubData.matches);

    // 5. Рекомендована тактика
    document.getElementById("tactical-reasoning").innerText = currentClubData.recommendedTactics.reasoning;
    document.getElementById("recommended-formation-title").innerText = currentClubData.recommendedTactics.formation;
    renderPitch("recommended-pitch-players", currentClubData.players.slice(0, 11), currentClubData.recommendedTactics.formation);
}

function generateFullClubData(meta, countryInfo) {
    const positions = ["Воротар", "Центральний захисник", "Центральний захисник", "Лівий захисник", "Правий захисник", "Опорний півзахисник", "Центральний півзахисник", "Атакувальний півзахисник", "Лівий вінгер", "Правий вінгер", "Центрфорвард"];
    
    const players = Array.from({ length: 18 }, (_, i) => ({
        id: i + 1,
        number: i === 0 ? 1 : i + 2,
        firstName: `Гравець_${i + 1}`,
        lastName: meta.name.split(" ")[0],
        position: positions[i % positions.length],
        foot: i % 2 === 0 ? "Права" : "Ліва",
        strengths: "Висока точність пасів, позиційна грамотність, витривалість.",
        weaknesses: "Гра лівою ногою, боротьба на другому поверсі.",
        role: "Виконує функцію зв'язуючого гравця між лініями під час виходу з-під пресингу."
    }));

    const matches = Array.from({ length: 10 }, (_, i) => {
        const resList = ["win", "draw", "loss"];
        const res = resList[i % 3];
        return {
            id: i + 1,
            opponent: `Клуб_${i + 1}`,
            result: res,
            score: res === "win" ? "2:1" : (res === "draw" ? "1:1" : "0:2"),
            stats: {
                passes: 450 + (i * 12),
                shots: 12 + (i % 5),
                setPieces: 6 + (i % 3),
                tackles: 18 + (i % 4),
                fouls: 10 + (i % 3)
            }
        };
    });

    return {
        ...meta,
        players: players,
        matches: matches,
        recommendedTactics: {
            formation: "4-2-3-1",
            reasoning: "Зважаючи на високий відсоток точності пасів півзахисників та швидкісні фланги, рекомендовано використовувати схему 4-2-3-1 із подвійним опорним блоком для захисту від контратак."
        }
    };
}

// ВІЗУАЛІЗАЦІЯ СХЕМИ НА ПОЛІ
function renderPitch(containerId, players, formation) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    // Координати позицій (Y - вертикаль від воротаря до нападу, X - горизонталь)
    const layouts = {
        "4-3-3": [
            { x: 50, y: 90 }, // GK
            { x: 15, y: 70 }, { x: 38, y: 75 }, { x: 62, y: 75 }, { x: 85, y: 70 }, // DEF
            { x: 30, y: 48 }, { x: 50, y: 52 }, { x: 70, y: 48 }, // MID
            { x: 20, y: 22 }, { x: 50, y: 18 }, { x: 80, y: 22 }  // FWD
        ],
        "4-2-3-1": [
            { x: 50, y: 90 }, // GK
            { x: 15, y: 72 }, { x: 38, y: 76 }, { x: 62, y: 76 }, { x: 85, y: 72 }, // DEF
            { x: 35, y: 55 }, { x: 65, y: 55 }, // CDM
            { x: 20, y: 34 }, { x: 50, y: 32 }, { x: 80, y: 34 }, // CAM
            { x: 50, y: 16 }  // ST
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

function renderPlayersList(players) {
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
                    <div class="player-pos-badge">${p.position}</div>
                </div>
            </div>
            <span style="font-size:0.8rem; color:var(--text-sub);">➔</span>
        `;
        container.appendChild(item);
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
    document.getElementById("m-player-pos").innerText = player.position;
    document.getElementById("m-player-foot").innerText = player.foot;
    document.getElementById("m-player-strengths").innerText = player.strengths;
    document.getElementById("m-player-weaknesses").innerText = player.weaknesses;
    document.getElementById("m-player-role").innerText = player.role;

    document.getElementById("player-modal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("player-modal").classList.add("hidden");
}
