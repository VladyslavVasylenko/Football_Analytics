let currentLang = 'uk';
const translationsCache = {};

const playersData = [
    {
        id: 1,
        status: "starter",
        stamina: "88%",
        footKey: "foot_right",
        name: { uk: "Микола Шапаренко", en: "Mykola Shaparenko", cs: "Mykola Shaparenko", ru: "Николай Шапаренко" },
        pos: { uk: "Півзахисник (CM / CAM)", en: "Midfielder (CM / CAM)", cs: "Záložník (CM / CAM)", ru: "Полузащитник (CM / CAM)" },
        strengths: { uk: "Дриблінг, бачення поля", en: "Dribbling, vision", cs: "Driblink, vidění hry", ru: "Дриблинг, видение поля" },
        weaknesses: { uk: "Гра головою", en: "Aerial duels", cs: "Hlavičkování", ru: "Игра головой" },
        tacticalProfile: {
            bestRole: { uk: "Центральний атакувальний півзахисник", en: "Central Attacking Midfielder", cs: "Střední útočný záložník", ru: "Центральный атакующий полузащитник" },
            bestZone: { uk: "Центральна зона та півфланги", en: "Central zone & half-spaces", cs: "Centrální zóna a meziprostory", ru: "Центральная зона и полуфланги" },
            defensiveWork: { uk: "Активний пресинг опорників", en: "Active pressing on DMs", cs: "Aktivní presink na DM", ru: "Активный прессинг опорников" },
            workRate: { uk: "Атака: Висока | Оборона: Середня", en: "Att: High | Def: Medium", cs: "Útok: Vysoká | Obrana: Střední", ru: "Атака: Высокая | Оборона: Средняя" }
        },
        heatmap: [15, 35, 20, 40, 85, 60, 30, 70, 45, 10, 25, 15],
        detailedStats: { goals: 3, assists: 5, rating: 7.8 }
    },
    {
        id: 2,
        status: "starter",
        stamina: "92%",
        footKey: "foot_right",
        name: { uk: "Владислав Ванат", en: "Vladyslav Vanat", cs: "Vladyslav Vanat", ru: "Владислав Ванат" },
        pos: { uk: "Нападник (ST)", en: "Striker (ST)", cs: "Útočník (ST)", ru: "Нападающий (ST)" },
        strengths: { uk: "Завершення, ривки за спину", en: "Finishing, off-the-ball runs", cs: "Zakončení, náběhy za obranu", ru: "Завершение, рывки за спину" },
        weaknesses: { uk: "Силова боротьба", en: "Physical duels", cs: "Fyzické souboje", ru: "Силовая борьба" },
        tacticalProfile: {
            bestRole: { uk: "Центрфорвард (Advanced Forward)", en: "Advanced Forward", cs: "Hrotový útočník", ru: "Центрфорвард" },
            bestZone: { uk: "Штрафний майданчик", en: "Penalty box", cs: "Pokutové území", ru: "Штрафная площадка" },
            defensiveWork: { uk: "Перша лінія пресингу", en: "First line of press", cs: "První linie presinku", ru: "Первая линия прессинга" },
            workRate: { uk: "Атака: Висока | Оборона: Низька", en: "Att: High | Def: Low", cs: "Útok: Vysoká | Obrana: Nízká", ru: "Атака: Высокая | Оборона: Низкая" }
        },
        heatmap: [5, 10, 5, 15, 20, 15, 45, 90, 50, 60, 80, 65],
        detailedStats: { goals: 9, assists: 2, rating: 7.6 }
    }
];

// Завантаження файлу локалізації через fetch
async function loadTranslation(lang) {
    if (translationsCache[lang]) {
        return translationsCache[lang];
    }

    try {
        const response = await fetch(`./locales/${lang}.json`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        translationsCache[lang] = data;
        return data;
    } catch (error) {
        console.error(`Помилка завантаження мови (${lang}):`, error);
        return null;
    }
}

async function setLanguage(lang) {
    const translations = await loadTranslation(lang);
    if (!translations) return;

    currentLang = lang;
    updateLanguageUI(translations);
    renderPlayersList(translations);
}

function updateLanguageUI(t) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (t[key]) el.innerText = t[key];
    });
}

function renderPlayersList(t) {
    const container = document.getElementById("players-list");
    container.innerHTML = "";

    playersData.forEach(player => {
        const card = document.createElement("div");
        card.className = "player-card";
        card.onclick = () => openPlayerModal(player.id);

        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <h3>${player.name[currentLang]}</h3>
                <span class="status-pill ${player.status}">${t[player.status] || player.status}</span>
            </div>
            <p style="color: var(--text-secondary); margin-top:5px;">${player.pos[currentLang]}</p>
        `;
        container.appendChild(card);
    });
}

async function openPlayerModal(playerId) {
    const player = playersData.find(p => p.id === playerId);
    if (!player) return;

    const t = await loadTranslation(currentLang);
    const lang = currentLang;

    document.getElementById('modal-player-name').innerText = player.name[lang];
    document.getElementById('modal-player-status').innerText = t[player.status] || player.status;
    document.getElementById('modal-player-status').className = `status-pill ${player.status}`;

    document.getElementById('modal-player-pos').innerText = player.pos[lang];
    document.getElementById('modal-player-foot').innerText = t[player.footKey] || player.footKey;
    document.getElementById('modal-player-stamina').innerText = player.stamina;
    document.getElementById('modal-player-strengths').innerText = player.strengths[lang];
    document.getElementById('modal-player-weaknesses').innerText = player.weaknesses[lang];

    document.getElementById('m-tac-role').innerText = player.tacticalProfile.bestRole[lang];
    document.getElementById('m-tac-zone').innerText = player.tacticalProfile.bestZone[lang];
    document.getElementById('m-tac-def').innerText = player.tacticalProfile.defensiveWork[lang];
    document.getElementById('m-tac-workrate').innerText = player.tacticalProfile.workRate[lang];

    document.getElementById('m-goals').innerText = player.detailedStats.goals;
    document.getElementById('m-assists').innerText = player.detailedStats.assists;
    document.getElementById('m-rating').innerText = player.detailedStats.rating;

    renderHeatmap(player.heatmap);
    document.getElementById('player-modal').classList.remove('hidden');
}

function renderHeatmap(intensityValues) {
    const grid = document.getElementById('heatmap-grid');
    grid.innerHTML = '';

    intensityValues.forEach(value => {
        const cell = document.createElement('div');
        cell.className = 'heatmap-cell';
        
        let opacity = value / 100;
        if (opacity > 0) {
            cell.style.backgroundColor = `rgba(239, 68, 68, ${opacity})`;
        }
        grid.appendChild(cell);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const langSelect = document.getElementById("lang-select");
    const modal = document.getElementById("player-modal");
    const closeBtn = document.getElementById("close-modal-btn");

    langSelect.addEventListener("change", (e) => {
        setLanguage(e.target.value);
    });

    closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
    window.addEventListener("click", (e) => {
        if (e.target === modal) modal.classList.add("hidden");
    });

    // Початкова ініціалізація
    setLanguage(currentLang);
});
