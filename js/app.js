let currentLang = 'uk';

const translations = {
    uk: {
        title: "⚽ Футбольний Психопат",
        subtitle: "Тактичні профілі та детальна статистика гравців",
        search_title: "🔍 Вибір клубу для аналітики",
        btn_search: "Завантажити",
        squad: "Склад команди",
        starter: "Основа", sub: "Заміна",
        lbl_pos: "Позиція:", lbl_foot: "Робоча нога:", lbl_stamina: "Витривалість:",
        lbl_strengths: "💪 Сильні сторони", lbl_weaknesses: "⚠️ Слабкі сторони",
        lbl_tactics_title: "📋 Тактична роль та зона",
        lbl_role: "🎯 Роль:", lbl_zone: "📍 Зона:",
        lbl_def: "🛡️ Пресинг:", lbl_workrate: "🏃‍♂️ Обсяг роботи:",
        lbl_heatmap: "🔥 Зони активності (Heatmap)",
        lbl_stats: "📈 Статистика",
        st_goals: "Голи", st_assists: "Асисти", st_rating: "Рейтинг",
        foot_right: "Права", foot_left: "Ліва"
    },
    en: {
        title: "⚽ Football Psychopath",
        subtitle: "Tactical profiles and detailed player statistics",
        search_title: "🔍 Select Club for Analytics",
        btn_search: "Load Data",
        squad: "Team Squad",
        starter: "Starter", sub: "Substitute",
        lbl_pos: "Position:", lbl_foot: "Preferred foot:", lbl_stamina: "Stamina:",
        lbl_strengths: "💪 Strengths", lbl_weaknesses: "⚠️ Weaknesses",
        lbl_tactics_title: "📋 Tactical Role & Zone",
        lbl_role: "🎯 Role:", lbl_zone: "📍 Zone:",
        lbl_def: "🛡️ Pressing:", lbl_workrate: "🏃‍♂️ Work Rate:",
        lbl_heatmap: "🔥 Activity Heatmap",
        lbl_stats: "📈 Performance Stats",
        st_goals: "Goals", st_assists: "Assists", st_rating: "Rating",
        foot_right: "Right", foot_left: "Left"
    },
    cs: {
        title: "⚽ Fotbalový Psychopat",
        subtitle: "Taktické profily a podrobná statistika hráčů",
        search_title: "🔍 Výběr klubu pro analytiku",
        btn_search: "Načíst",
        squad: "Sestava týmu",
        starter: "Základ", sub: "Lavička",
        lbl_pos: "Pozice:", lbl_foot: "Silnější noha:", lbl_stamina: "Vytrvalost:",
        lbl_strengths: "💪 Silné stránky", lbl_weaknesses: "⚠️ Slabé stránky",
        lbl_tactics_title: "📋 Taktická role a zóna",
        lbl_role: "🎯 Role:", lbl_zone: "📍 Zóna:",
        lbl_def: "🛡️ Presink:", lbl_workrate: "🏃‍♂️ Pracovité tempo:",
        lbl_heatmap: "🔥 Aktivita na hřišti (Heatmap)",
        lbl_stats: "📈 Statistika výkonu",
        st_goals: "Góly", st_assists: "Asistence", st_rating: "Hodnocení",
        foot_right: "Pravá", foot_left: "Levá"
    },
    ru: {
        title: "⚽ Футбольный Психопат",
        subtitle: "Тактические профили и детальная статистика игроков",
        search_title: "🔍 Выбор клуба для аналитики",
        btn_search: "Загрузить",
        squad: "Состав команды",
        starter: "Основа", sub: "Замена",
        lbl_pos: "Позиция:", lbl_foot: "Рабочая нога:", lbl_stamina: "Выносливость:",
        lbl_strengths: "💪 Сильные стороны", lbl_weaknesses: "⚠️ Слабые стороны",
        lbl_tactics_title: "📋 Тактическая роль и зона",
        lbl_role: "🎯 Роль:", lbl_zone: "📍 Зона:",
        lbl_def: "🛡️ Прессинг:", lbl_workrate: "🏃‍♂️ Объем работы:",
        lbl_heatmap: "🔥 Зоны активности (Heatmap)",
        lbl_stats: "📈 Статистика",
        st_goals: "Голы", st_assists: "Ассисты", st_rating: "Рейтинг",
        foot_right: "Правая", foot_left: "Левая"
    }
};

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

document.addEventListener("DOMContentLoaded", () => {
    const langSelect = document.getElementById("lang-select");
    const searchBtn = document.getElementById("search-btn");
    const clubInput = document.getElementById("club-input");
    const countrySelect = document.getElementById("country-select");
    const modal = document.getElementById("player-modal");
    const closeBtn = document.getElementById("close-modal-btn");

    langSelect.addEventListener("change", (e) => {
        currentLang = e.target.value;
        updateUI();
    });

    searchBtn.addEventListener("click", executeSearch);

    clubInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") executeSearch();
    });

    countrySelect.addEventListener("change", () => {
        document.getElementById("club-country-badge").innerText = countrySelect.value;
    });

    closeBtn.addEventListener("click", closeModal);
    
    window.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    updateUI();
});

function executeSearch() {
    const clubValue = document.getElementById("club-input").value.trim();
    const countryValue = document.getElementById("country-select").value;

    if (clubValue) {
        document.getElementById("club-title").innerText = clubValue.toLowerCase().startsWith("фк") ? clubValue : `ФК ${clubValue}`;
        document.getElementById("club-country-badge").innerText = countryValue;
    }
}

function updateUI() {
    const t = translations[currentLang];
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (t[key]) el.innerText = t[key];
    });
    renderPlayersList();
}

function renderPlayersList() {
    const container = document.getElementById("players-list");
    container.innerHTML = "";
    const t = translations[currentLang];

    playersData.forEach(player => {
        const card = document.createElement("div");
        card.className = "player-card";
        card.onclick = () => openPlayerModal(player.id);

        card.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <h3 style="font-size:1rem;">${player.name[currentLang]}</h3>
                <span class="status-pill ${player.status}">${t[player.status]}</span>
            </div>
            <p style="color: var(--text-secondary); margin-top:4px; font-size: 0.825rem;">${player.pos[currentLang]}</p>
        `;
        container.appendChild(card);
    });
}

function openPlayerModal(playerId) {
    const player = playersData.find(p => p.id === playerId);
    if (!player) return;

    const t = translations[currentLang];
    const lang = currentLang;

    document.getElementById('modal-player-name').innerText = player.name[lang];
    document.getElementById('modal-player-status').innerText = t[player.status];
    document.getElementById('modal-player-status').className = `status-pill ${player.status}`;

    document.getElementById('modal-player-pos').innerText = player.pos[lang];
    document.getElementById('modal-player-foot').innerText = t[player.footKey];
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

    const modal = document.getElementById('player-modal');
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Блокуємо скролл під модалкою
}

function closeModal() {
    const modal = document.getElementById('player-modal');
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
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
