/* =========================================================
   app.js — Футбольний Психопат
   Працює безпосередньо з HTML, наданим користувачем.

   Очікувана структура:
   /index.html
   /js/app.js
   /js/ukraine.js

   ukraine.js:
   export const ukraineData = { ... };
   ========================================================= */

(() => {
    "use strict";

    // ---------------------------------------------------------
    // DOM
    // ---------------------------------------------------------

    const $ = (id) => document.getElementById(id);

    const countrySelect = $("country-select");
    const clubSelect = $("club-select");

    const clubName = $("club-name");
    const clubLeagueInfo = $("club-league-info");
    const clubRank = $("club-rank");

    const coachName = $("coach-name");
    const staffMembers = $("staff-members");
    const currentFormationTitle = $("current-formation-title");

    const currentPitchPlayers = $("current-pitch-players");

    const squadCount = $("squad-count");
    const toggleSquadBtn = $("toggle-squad-btn");
    const toggleSquadIcon = $("toggle-squad-icon");
    const squadContainer = $("squad-container");
    const playersList = $("players-list");

    const matchesGrid = $("matches-grid");
    const selectedMatchStats = $("selected-match-stats");
    const matchStatsTitle = $("match-stats-title");
    const matchStatsBars = $("match-stats-bars");

    const tacticalReasoning = $("tactical-reasoning");
    const recommendedFormationTitle = $("recommended-formation-title");
    const recommendedPitchPlayers = $("recommended-pitch-players");

    // Modal
    const playerModal = $("player-modal");
    const closeModal = $("close-modal");

    const modalPlayerNumber = $("m-player-number");
    const modalPlayerName = $("m-player-name");
    const modalPlayerPos = $("m-player-pos");
    const modalPlayerFoot = $("m-player-foot");
    const modalPlayerStrengths = $("m-player-strengths");
    const modalPlayerWeaknesses = $("m-player-weaknesses");
    const modalPlayerRole = $("m-player-role");

    // ---------------------------------------------------------
    // STATE
    // ---------------------------------------------------------

    let ukraineData = null;
    let clubs = [];
    let currentClub = null;

    // ---------------------------------------------------------
    // CONSTANTS
    // ---------------------------------------------------------

    const POSITION_NAMES = {
        GK: "Воротар",
        DF: "Захисник",
        MF: "Півзахисник",
        FW: "Нападник"
    };

    const POSITION_SHORT = {
        GK: "GK",
        DF: "DF",
        MF: "MF",
        FW: "FW"
    };

    const FORMATION_LAYOUTS = {
        "4-4-2": [
            ["GK", 50, 86],
            ["DF", 14, 67],
            ["DF", 37, 72],
            ["DF", 63, 72],
            ["DF", 86, 67],
            ["MF", 14, 48],
            ["MF", 37, 53],
            ["MF", 63, 53],
            ["MF", 86, 48],
            ["FW", 37, 27],
            ["FW", 63, 27]
        ],

        "4-2-3-1": [
            ["GK", 50, 86],
            ["DF", 14, 67],
            ["DF", 37, 72],
            ["DF", 63, 72],
            ["DF", 86, 67],
            ["MF", 37, 55],
            ["MF", 63, 55],
            ["MF", 20, 35],
            ["MF", 50, 31],
            ["MF", 80, 35],
            ["FW", 50, 17]
        ],

        "4-3-3": [
            ["GK", 50, 86],
            ["DF", 14, 67],
            ["DF", 37, 72],
            ["DF", 63, 72],
            ["DF", 86, 67],
            ["MF", 27, 52],
            ["MF", 50, 58],
            ["MF", 73, 52],
            ["FW", 18, 27],
            ["FW", 50, 20],
            ["FW", 82, 27]
        ],

        "3-4-3": [
            ["GK", 50, 86],
            ["DF", 25, 69],
            ["DF", 50, 73],
            ["DF", 75, 69],
            ["MF", 12, 49],
            ["MF", 35, 54],
            ["MF", 65, 54],
            ["MF", 88, 49],
            ["FW", 20, 25],
            ["FW", 50, 18],
            ["FW", 80, 25]
        ],

        "3-5-2": [
            ["GK", 50, 86],
            ["DF", 25, 69],
            ["DF", 50, 73],
            ["DF", 75, 69],
            ["MF", 12, 47],
            ["MF", 31, 54],
            ["MF", 50, 45],
            ["MF", 69, 54],
            ["MF", 88, 47],
            ["FW", 38, 22],
            ["FW", 62, 22]
        ],

        "4-1-4-1": [
            ["GK", 50, 86],
            ["DF", 14, 67],
            ["DF", 37, 72],
            ["DF", 63, 72],
            ["DF", 86, 67],
            ["MF", 50, 58],
            ["MF", 14, 38],
            ["MF", 37, 43],
            ["MF", 63, 43],
            ["MF", 86, 38],
            ["FW", 50, 19]
        ],

        "4-3-2-1": [
            ["GK", 50, 86],
            ["DF", 14, 67],
            ["DF", 37, 72],
            ["DF", 63, 72],
            ["DF", 86, 67],
            ["MF", 30, 54],
            ["MF", 50, 59],
            ["MF", 70, 54],
            ["MF", 37, 32],
            ["MF", 63, 32],
            ["FW", 50, 18]
        ],

        "5-3-2": [
            ["GK", 50, 86],
            ["DF", 8, 63],
            ["DF", 29, 70],
            ["DF", 50, 73],
            ["DF", 71, 70],
            ["DF", 92, 63],
            ["MF", 30, 50],
            ["MF", 50, 55],
            ["MF", 70, 50],
            ["FW", 38, 23],
            ["FW", 62, 23]
        ]
    };

    const DEFAULT_FORMATION = "4-2-3-1";

    // ---------------------------------------------------------
    // HELPERS
    // ---------------------------------------------------------

    function safeText(value, fallback = "—") {
        if (value === null || value === undefined || value === "") {
            return fallback;
        }

        return String(value);
    }

    function escapeHTML(value) {
        return String(value ?? "")
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    function normalizeFormation(formation) {
        if (!formation) {
            return DEFAULT_FORMATION;
        }

        const value = String(formation).trim();

        return FORMATION_LAYOUTS[value]
            ? value
            : DEFAULT_FORMATION;
    }

    function getSquad(club) {
        return Array.isArray(club?.squad) ? club.squad : [];
    }

    function getPlayerStats(player) {
        if (!player || !player.stats) {
            return {
                appearances: null,
                starts: null,
                minutes: null,
                goals: null,
                assists: null,
                yellowCards: null,
                redCards: null,
                cleanSheets: null
            };
        }

        return {
            appearances: player.stats.appearances ?? null,
            starts: player.stats.starts ?? null,
            minutes: player.stats.minutes ?? null,
            goals: player.stats.goals ?? null,
            assists: player.stats.assists ?? null,
            yellowCards: player.stats.yellowCards ?? null,
            redCards: player.stats.redCards ?? null,
            cleanSheets: player.stats.cleanSheets ?? null
        };
    }

    function getPositionName(position) {
        return POSITION_NAMES[position] || safeText(position);
    }

    function getPlayerNumber(player) {
        return player?.number !== null &&
            player?.number !== undefined &&
            player?.number !== ""
            ? `#${player.number}`
            : "#—";
    }

    function getPlayerInitials(name) {
        if (!name) return "⚽";

        const words = String(name)
            .trim()
            .split(/\s+/)
            .filter(Boolean);

        if (words.length === 1) {
            return words[0].slice(0, 2).toUpperCase();
        }

        return (
            words[0].charAt(0) +
            words[1].charAt(0)
        ).toUpperCase();
    }

    function formatStat(value) {
        return value === null || value === undefined
            ? "—"
            : String(value);
    }

    function sortSquad(squad) {
        const order = {
            GK: 1,
            DF: 2,
            MF: 3,
            FW: 4
        };

        return [...squad].sort((a, b) => {
            const positionA = order[a?.position] || 99;
            const positionB = order[b?.position] || 99;

            if (positionA !== positionB) {
                return positionA - positionB;
            }

            const numberA =
                typeof a?.number === "number"
                    ? a.number
                    : 999;

            const numberB =
                typeof b?.number === "number"
                    ? b.number
                    : 999;

            return numberA - numberB;
        });
    }

    // ---------------------------------------------------------
    // LOAD DATA
    // ---------------------------------------------------------

    async function loadUkraineData() {
        try {
            /*
             * Важливо:
             * HTML користувача має:
             *
             * <script src="js/app.js" defer></script>
             *
             * Тому static import тут використовувати не можна.
             * Dynamic import працює навіть у звичайному JS-файлі.
             */
            const module = await import("./ukraine.js");

            if (!module || !module.ukraineData) {
                throw new Error(
                    "ukraineData не знайдено в ukraine.js"
                );
            }

            ukraineData = module.ukraineData;

            clubs = Array.isArray(ukraineData.clubs)
                ? ukraineData.clubs
                : [];

            if (!clubs.length) {
                throw new Error(
                    "Масив ukraineData.clubs порожній."
                );
            }

            initializeApp();
        } catch (error) {
            console.error(
                "Помилка завантаження ukraine.js:",
                error
            );

            showFatalError(
                "Не вдалося завантажити ukraine.js. Перевір, що файл знаходиться в папці js поруч із app.js."
            );
        }
    }

    // ---------------------------------------------------------
    // INITIALIZATION
    // ---------------------------------------------------------

    function initializeApp() {
        populateCountrySelect();
        populateClubSelect();

        setupEventListeners();

        const initialClub =
            clubs.find((club) => club.id === "dynamo") ||
            clubs[0];

        if (initialClub) {
            clubSelect.value = initialClub.id;
            renderClub(initialClub.id);
        }
    }

    // ---------------------------------------------------------
    // COUNTRY
    // ---------------------------------------------------------

    function populateCountrySelect() {
        countrySelect.innerHTML = "";

        const option = document.createElement("option");

        option.value = "ukraine";
        option.textContent = "Україна (УПЛ)";

        countrySelect.appendChild(option);

        countrySelect.value = "ukraine";
    }

    // ---------------------------------------------------------
    // CLUB SELECT
    // ---------------------------------------------------------

    function populateClubSelect() {
        clubSelect.innerHTML = "";

        clubs.forEach((club) => {
            const option = document.createElement("option");

            option.value = club.id;

            const position = club.position
                ? ` — ${club.position} місце`
                : "";

            option.textContent =
                `${safeText(club.name)}${position}`;

            clubSelect.appendChild(option);
        });
    }

    // ---------------------------------------------------------
    // EVENTS
    // ---------------------------------------------------------

    function setupEventListeners() {
        countrySelect.addEventListener(
            "change",
            handleCountryChange
        );

        clubSelect.addEventListener(
            "change",
            handleClubChange
        );

        toggleSquadBtn.addEventListener(
            "click",
            toggleSquad
        );

        closeModal.addEventListener(
            "click",
            closePlayerModal
        );

        playerModal.addEventListener(
            "click",
            (event) => {
                if (event.target === playerModal) {
                    closePlayerModal();
                }
            }
        );

        document.addEventListener(
            "keydown",
            (event) => {
                if (event.key === "Escape") {
                    closePlayerModal();
                }
            }
        );
    }

    function handleCountryChange() {
        if (countrySelect.value !== "ukraine") {
            countrySelect.value = "ukraine";
        }

        populateClubSelect();

        if (clubs[0]) {
            clubSelect.value = clubs[0].id;
            renderClub(clubs[0].id);
        }
    }

    function handleClubChange() {
        renderClub(clubSelect.value);
    }

    // ---------------------------------------------------------
    // MAIN CLUB RENDER
    // ---------------------------------------------------------

    function renderClub(clubId) {
        const club = clubs.find(
            (item) => String(item.id) === String(clubId)
        );

        if (!club) {
            console.warn(
                `Клуб з id "${clubId}" не знайдено.`
            );
            return;
        }

        currentClub = club;

        renderClubInfo(club);
        renderStaff(club);
        renderCurrentFormation(club);
        renderSquad(club);
        renderMatches(club);
        renderRecommendation(club);
    }

    // ---------------------------------------------------------
    // CLUB INFO
    // ---------------------------------------------------------

    function renderClubInfo(club) {
        clubName.textContent = safeText(club.name);

        const league =
            ukraineData.league ||
            "Українська Прем'єр-ліга";

        const season =
            ukraineData.season ||
            "2026/2027";

        clubLeagueInfo.textContent =
            `${league} • Сезон ${season}`;

        clubRank.textContent =
            club.position
                ? `#${club.position}`
                : "—";
    }

    // ---------------------------------------------------------
    // STAFF
    // ---------------------------------------------------------

    function renderStaff(club) {
        const coach =
            club.coach?.headCoach ||
            club.headCoach ||
            "—";

        coachName.textContent = coach;

        let staff = [];

        if (Array.isArray(club.coach?.assistants)) {
            staff = club.coach.assistants;
        } else if (Array.isArray(club.staff)) {
            staff = club.staff;
        }

        staffMembers.textContent =
            staff.length
                ? staff.join(", ")
                : "Дані не вказані";

        currentFormationTitle.textContent =
            normalizeFormation(
                club.formation
            );
    }

    // ---------------------------------------------------------
    // PITCH
    // ---------------------------------------------------------

    function clearPitch(container) {
        if (!container) return;

        container.innerHTML = "";
    }

    function createPitchPlayer(
        player,
        position,
        x,
        y,
        index
    ) {
        const wrapper =
            document.createElement("button");

        wrapper.type = "button";
        wrapper.className = "pitch-player";

        wrapper.style.left = `${x}%`;
        wrapper.style.top = `${y}%`;

        wrapper.dataset.index = String(index);

        const number =
            player?.number !== null &&
            player?.number !== undefined &&
            player?.number !== ""
                ? player.number
                : "—";

        wrapper.innerHTML = `
            <span class="pitch-player-number">
                ${escapeHTML(number)}
            </span>
            <span class="pitch-player-name">
                ${escapeHTML(
                    getShortPlayerName(
                        player?.name
                    )
                )}
            </span>
        `;

        wrapper.title =
            `${safeText(player?.name)} — ${getPositionName(position)}`;

        wrapper.addEventListener(
            "click",
            () => {
                openPlayerModal(player);
            }
        );

        return wrapper;
    }

    function getShortPlayerName(name) {
        if (!name) return "—";

        const words = String(name)
            .trim()
            .split(/\s+/);

        if (words.length === 1) {
            return words[0];
        }

        return (
            words[0] +
            " " +
            words[words.length - 1]
                .charAt(0) +
            "."
        );
    }

    function getPlayersForFormation(
        squad,
        formation
    ) {
        const layout =
            FORMATION_LAYOUTS[formation] ||
            FORMATION_LAYOUTS[DEFAULT_FORMATION];

        const result = [];

        const usedIndexes = new Set();

        layout.forEach(
            ([position, x, y], layoutIndex) => {
                let playerIndex =
                    squad.findIndex(
                        (player, index) =>
                            !usedIndexes.has(index) &&
                            player?.position === position
                    );

                /*
                 * Якщо для конкретної позиції немає
                 * гравця, шукаємо найближче амплуа.
                 */
                if (playerIndex === -1) {
                    playerIndex =
                        squad.findIndex(
                            (_, index) =>
                                !usedIndexes.has(index)
                        );
                }

                if (playerIndex !== -1) {
                    usedIndexes.add(playerIndex);

                    result.push({
                        player:
                            squad[playerIndex],
                        position,
                        x,
                        y,
                        layoutIndex
                    });
                }
            }
        );

        return result;
    }

    function renderPitch(
        container,
        club,
        formation
    ) {
        clearPitch(container);

        const squad =
            sortSquad(
                getSquad(club)
            );

        const positions =
            getPlayersForFormation(
                squad,
                formation
            );

        positions.forEach(
            ({
                player,
                position,
                x,
                y,
                layoutIndex
            }) => {
                const element =
                    createPitchPlayer(
                        player,
                        position,
                        x,
                        y,
                        layoutIndex
                    );

                container.appendChild(element);
            }
        );
    }

    function renderCurrentFormation(club) {
        const formation =
            normalizeFormation(
                club.formation
            );

        renderPitch(
            currentPitchPlayers,
            club,
            formation
        );
    }

    // ---------------------------------------------------------
    // SQUAD
    // ---------------------------------------------------------

    function renderSquad(club) {
        const squad =
            sortSquad(
                getSquad(club)
            );

        squadCount.textContent =
            squad.length;

        playersList.innerHTML = "";

        if (!squad.length) {
            playersList.innerHTML = `
                <div class="empty-state">
                    Дані про склад відсутні.
                </div>
            `;

            return;
        }

        const groups = {
            GK: [],
            DF: [],
            MF: [],
            FW: []
        };

        squad.forEach((player) => {
            const position =
                player?.position;

            if (!groups[position]) {
                groups[position] = [];
            }

            groups[position].push(player);
        });

        Object.keys(groups).forEach(
            (position) => {
                const players =
                    groups[position];

                if (!players.length) {
                    return;
                }

                const group =
                    document.createElement("div");

                group.className =
                    "position-group";

                const title =
                    document.createElement("h3");

                title.textContent =
                    getPositionName(position);

                group.appendChild(title);

                players.forEach(
                    (player) => {
                        group.appendChild(
                            createPlayerCard(
                                player
                            )
                        );
                    }
                );

                playersList.appendChild(group);
            }
        );
    }

    function createPlayerCard(player) {
        const card =
            document.createElement("button");

        card.type = "button";
        card.className =
            "player-card";

        const stats =
            getPlayerStats(player);

        card.innerHTML = `
            <div class="player-card-left">
                <div class="player-avatar">
                    ${escapeHTML(
                        getPlayerInitials(
                            player?.name
                        )
                    )}
                </div>

                <div class="player-main-info">
                    <strong>
                        ${escapeHTML(
                            safeText(
                                player?.name
                            )
                        )}
                    </strong>

                    <span>
                        ${escapeHTML(
                            getPositionName(
                                player?.position
                            )
                        )}
                    </span>
                </div>
            </div>

            <div class="player-card-number">
                ${escapeHTML(
                    getPlayerNumber(
                        player
                    )
                )}
            </div>

            <div class="player-card-stats">
                <span>
                    <b>${formatStat(
                        stats.appearances
                    )}</b>
                    <small>матчів</small>
                </span>

                <span>
                    <b>${formatStat(
                        stats.goals
                    )}</b>
                    <small>голів</small>
                </span>

                <span>
                    <b>${formatStat(
                        stats.assists
                    )}</b>
                    <small>асистів</small>
                </span>
            </div>
        `;

        card.addEventListener(
            "click",
            () => openPlayerModal(player)
        );

        return card;
    }

    // ---------------------------------------------------------
    // SQUAD TOGGLE
    // ---------------------------------------------------------

    function toggleSquad() {
        const isHidden =
            squadContainer.classList.contains(
                "hidden"
            );

        if (isHidden) {
            squadContainer.classList.remove(
                "hidden"
            );

            toggleSquadIcon.textContent = "▲";
        } else {
            squadContainer.classList.add(
                "hidden"
            );

            toggleSquadIcon.textContent = "▼";
        }
    }

    // ---------------------------------------------------------
    // MATCHES
    // ---------------------------------------------------------

    function getMatches(club) {
        if (
            Array.isArray(club?.matches)
        ) {
            return club.matches.slice(
                0,
                10
            );
        }

        if (
            Array.isArray(
                club?.lastMatches
            )
        ) {
            return club.lastMatches.slice(
                0,
                10
            );
        }

        if (
            Array.isArray(
                club?.recentMatches
            )
        ) {
            return club.recentMatches.slice(
                0,
                10
            );
        }

        return [];
    }

    function getMatchOpponent(
        match,
        club
    ) {
        if (match?.opponent) {
            return match.opponent;
        }

        if (match?.homeTeam === club?.name) {
            return match.awayTeam;
        }

        if (match?.awayTeam === club?.name) {
            return match.homeTeam;
        }

        return "Суперник";
    }

    function getMatchScore(match) {
        if (
            match?.score !== undefined &&
            match?.score !== null
        ) {
            return String(match.score);
        }

        if (
            match?.homeScore !== undefined &&
            match?.awayScore !== undefined
        ) {
            return `${match.homeScore}:${match.awayScore}`;
        }

        return "—";
    }

    function getMatchResult(
        match,
        club
    ) {
        if (match?.result) {
            return String(
                match.result
            ).toUpperCase();
        }

        let goalsFor = null;
        let goalsAgainst = null;

        if (
            typeof match?.goalsFor ===
            "number"
        ) {
            goalsFor =
                match.goalsFor;
        }

        if (
            typeof match?.goalsAgainst ===
            "number"
        ) {
            goalsAgainst =
                match.goalsAgainst;
        }

        if (
            goalsFor === null &&
            match?.homeScore !== undefined &&
            match?.awayScore !== undefined
        ) {
            if (
                match.homeTeam ===
                club?.name
            ) {
                goalsFor =
                    Number(match.homeScore);

                goalsAgainst =
                    Number(match.awayScore);
            } else {
                goalsFor =
                    Number(match.awayScore);

                goalsAgainst =
                    Number(match.homeScore);
            }
        }

        if (
            goalsFor === null ||
            goalsAgainst === null
        ) {
            return "—";
        }

        if (goalsFor > goalsAgainst) {
            return "В";
        }

        if (goalsFor < goalsAgainst) {
            return "П";
        }

        return "Н";
    }

    function renderMatches(club) {
        const matches =
            getMatches(club);

        matchesGrid.innerHTML = "";

        selectedMatchStats.classList.add(
            "hidden"
        );

        if (!matches.length) {
            matchesGrid.innerHTML = `
                <div class="empty-state">
                    <strong>Матчі ще не додані до ukraine.js</strong>
                    <p>
                        Додай для клубу масив
                        <code>matches</code>
                        або
                        <code>lastMatches</code>,
                        і цей блок автоматично покаже
                        останні 10 матчів.
                    </p>
                </div>
            `;

            return;
        }

        matches.forEach(
            (match, index) => {
                const opponent =
                    getMatchOpponent(
                        match,
                        club
                    );

                const score =
                    getMatchScore(match);

                const result =
                    getMatchResult(
                        match,
                        club
                    );

                const card =
                    document.createElement(
                        "button"
                    );

                card.type = "button";
                card.className =
                    "match-card";

                if (result === "В") {
                    card.classList.add(
                        "match-win"
                    );
                } else if (
                    result === "П"
                ) {
                    card.classList.add(
                        "match-loss"
                    );
                } else if (
                    result === "Н"
                ) {
                    card.classList.add(
                        "match-draw"
                    );
                }

                card.innerHTML = `
                    <span class="match-opponent">
                        ${escapeHTML(
                            safeText(
                                opponent
                            )
                        )}
                    </span>

                    <strong class="match-score">
                        ${escapeHTML(score)}
                    </strong>

                    <span class="match-result">
                        ${escapeHTML(result)}
                    </span>
                `;

                card.addEventListener(
                    "click",
                    () =>
                        renderMatchStats(
                            match,
                            club,
                            index
                        )
                );

                matchesGrid.appendChild(card);
            }
        );
    }

    // ---------------------------------------------------------
    // MATCH STATISTICS
    // ---------------------------------------------------------

    function renderMatchStats(
        match,
        club,
        index
    ) {
        const opponent =
            getMatchOpponent(
                match,
                club
            );

        const score =
            getMatchScore(match);

        matchStatsTitle.textContent =
            `${club.name} — ${opponent} (${score})`;

        matchStatsBars.innerHTML = "";

        const stats =
            match?.statistics ||
            match?.stats ||
            {};

        const normalizedStats = normalizeMatchStats(
            stats
        );

        if (!normalizedStats.length) {
            matchStatsBars.innerHTML = `
                <div class="empty-state">
                    Детальна статистика цього матчу
                    відсутня в ukraine.js.
                </div>
            `;

            selectedMatchStats.classList.remove(
                "hidden"
            );

            return;
        }

        normalizedStats.forEach(
            (stat) => {
                const row =
                    document.createElement(
                        "div"
                    );

                row.className =
                    "stat-bar-row";

                const home =
                    Number(
                        stat.home ?? 0
                    );

                const away =
                    Number(
                        stat.away ?? 0
                    );

                const total =
                    home + away || 1;

                const homePercent =
                    Math.round(
                        (home / total) *
                        100
                    );

                const awayPercent =
                    100 -
                    homePercent;

                row.innerHTML = `
                    <div class="stat-bar-header">
                        <span>
                            ${escapeHTML(
                                stat.label
                            )}
                        </span>

                        <span>
                            ${escapeHTML(
                                String(home)
                            )}
                            :
                            ${escapeHTML(
                                String(away)
                            )}
                        </span>
                    </div>

                    <div class="stat-bar-track">
                        <div
                            class="stat-bar-home"
                            style="width:${homePercent}%"
                        ></div>

                        <div
                            class="stat-bar-away"
                            style="width:${awayPercent}%"
                        ></div>
                    </div>
                `;

                matchStatsBars.appendChild(
                    row
                );
            }
        );

        selectedMatchStats.classList.remove(
            "hidden"
        );
    }

    function normalizeMatchStats(stats) {
        if (!stats || typeof stats !== "object") {
            return [];
        }

        const labels = {
            possession: "Володіння м'ячем",
            shots: "Удари",
            shotsOnTarget: "Удари в площину",
            corners: "Кутові",
            fouls: "Фоли",
            offsides: "Офсайди",
            yellowCards: "Жовті картки",
            passes: "Передачі",
            accuratePasses: "Точні передачі",
            xG: "xG",
            bigChances: "Гольові моменти"
        };

        const result = [];

        Object.keys(stats).forEach(
            (key) => {
                const value =
                    stats[key];

                let home = null;
                let away = null;

                if (
                    Array.isArray(value) &&
                    value.length >= 2
                ) {
                    home = value[0];
                    away = value[1];
                } else if (
                    value &&
                    typeof value ===
                        "object"
                ) {
                    home =
                        value.home ??
                        value.team ??
                        value[0];

                    away =
                        value.away ??
                        value.opponent ??
                        value[1];
                }

                if (
                    home === null ||
                    away === null
                ) {
                    return;
                }

                result.push({
                    label:
                        labels[key] ||
                        formatStatLabel(
                            key
                        ),
                    home,
                    away
                });
            }
        );

        return result;
    }

    function formatStatLabel(key) {
        return String(key)
            .replace(
                /([A-Z])/g,
                " $1"
            )
            .replace(
                /^./,
                (letter) =>
                    letter.toUpperCase()
            );
    }

    // ---------------------------------------------------------
    // TACTICAL RECOMMENDATION
    // ---------------------------------------------------------

    function chooseRecommendedFormation(
        club
    ) {
        const squad =
            getSquad(club);

        const counts = {
            GK: 0,
            DF: 0,
            MF: 0,
            FW: 0
        };

        squad.forEach(
            (player) => {
                if (
                    counts[
                        player?.position
                    ] !== undefined
                ) {
                    counts[
                        player.position
                    ]++;
                }
            }
        );

        /*
         * Не вигадуємо позицій.
         * Рекомендація залежить від кількості
         * гравців у складі та поточної схеми.
         */

        const current =
            normalizeFormation(
                club.formation
            );

        if (
            counts.MF >= 5 &&
            counts.DF >= 4
        ) {
            return "4-3-2-1";
        }

        if (
            counts.FW >= 3 &&
            counts.MF >= 3
        ) {
            return "4-3-3";
        }

        if (
            counts.DF >= 5 &&
            counts.MF >= 3
        ) {
            return "5-3-2";
        }

        return current;
    }

    function buildTacticalReasoning(
        club,
        recommended
    ) {
        const current =
            normalizeFormation(
                club.formation
            );

        if (
            recommended === current
        ) {
            return (
                `Поточна схема ${current} вже відповідає ` +
                `базовому балансу складу. Аналітична рекомендація — ` +
                `зберегти структуру та коригувати висоту ліній ` +
                `і кількість гравців між лініями залежно від суперника.`
            );
        }

        if (
            recommended === "4-3-3"
        ) {
            return (
                `Перехід із ${current} на 4-3-3 збільшує ` +
                `ширину атаки та кількість варіантів для пресингу. ` +
                `Трійка центральних півзахисників повинна забезпечити ` +
                `контроль центральної зони, а вінгери — ширину.`
            );
        }

        if (
            recommended === "4-3-2-1"
        ) {
            return (
                `Схема 4-3-2-1 дозволяє наситити центральну зону ` +
                `та створити додаткові зв'язки між півзахистом і нападником. ` +
                `Це корисно для контролю темпу та позиційних атак.`
            );
        }

        if (
            recommended === "5-3-2"
        ) {
            return (
                `Схема 5-3-2 додає чисельність у захисті та ` +
                `може бути використана для компактної середньої ` +
                `або низької оборони з переходом у швидкі атаки.`
            );
        }

        return (
            `Рекомендована схема ${recommended} забезпечує ` +
            `більш збалансоване розташування ліній та може ` +
            `використовуватися як базова структура залежно від суперника.`
        );
    }

    function renderRecommendation(club) {
        const recommended =
            chooseRecommendedFormation(
                club
            );

        recommendedFormationTitle.textContent =
            recommended;

        tacticalReasoning.textContent =
            buildTacticalReasoning(
                club,
                recommended
            );

        renderPitch(
            recommendedPitchPlayers,
            club,
            recommended
        );
    }

    // ---------------------------------------------------------
    // PLAYER MODAL
    // ---------------------------------------------------------

    function openPlayerModal(player) {
        if (!player) return;

        modalPlayerNumber.textContent =
            getPlayerNumber(player);

        modalPlayerName.textContent =
            safeText(
                player.name,
                "Невідомий гравець"
            );

        modalPlayerPos.textContent =
            getPositionName(
                player.position
            );

        const foot =
            player.foot ||
            player.preferredFoot ||
            "Не вказано";

        modalPlayerFoot.textContent =
            foot;

        const analysis =
            getPlayerAnalysis(
                player
            );

        modalPlayerStrengths.textContent =
            analysis.strengths;

        modalPlayerWeaknesses.textContent =
            analysis.weaknesses;

        modalPlayerRole.textContent =
            analysis.role;

        playerModal.classList.remove(
            "hidden"
        );

        document.body.classList.add(
            "modal-open"
        );
    }

    function closePlayerModal() {
        playerModal.classList.add(
            "hidden"
        );

        document.body.classList.remove(
            "modal-open"
        );
    }

    // ---------------------------------------------------------
    // PLAYER ANALYSIS
    // ---------------------------------------------------------

    function getPlayerAnalysis(player) {
        /*
         * Якщо в ukraine.js згодом з'являться:
         *
         * strengths
         * weaknesses
         * role
         *
         * вони автоматично матимуть пріоритет
         * над fallback-текстом.
         */

        const strengths =
            player.strengths ||
            getDefaultStrengths(
                player.position
            );

        const weaknesses =
            player.weaknesses ||
            getDefaultWeaknesses(
                player.position
            );

        const role =
            player.role ||
            getDefaultRole(
                player.position
            );

        return {
            strengths,
            weaknesses,
            role
        };
    }

    function getDefaultStrengths(
        position
    ) {
        switch (position) {
            case "GK":
                return (
                    "Гра руками, реакція, контроль штрафного майданчика. " +
                    "Конкретні показники залежать від доступної статистики."
                );

            case "DF":
                return (
                    "Позиційна дисципліна, єдиноборства та робота без м'яча. " +
                    "Точні індивідуальні показники потребують матчевої статистики."
                );

            case "MF":
                return (
                    "Участь у розвитку атак, робота між лініями та контроль темпу. " +
                    "Конкретна роль залежить від позиції у схемі."
                );

            case "FW":
                return (
                    "Завершення атак, відкривання та робота у фінальній третині. " +
                    "Точні показники залежать від офіційної статистики."
                );

            default:
                return (
                    "Індивідуальні характеристики потребують "
                    + "підтвердженої статистики гравця."
                );
        }
    }

    function getDefaultWeaknesses(
        position
    ) {
        switch (position) {
            case "GK":
                return (
                    "Без підтвердженої розширеної статистики "
                    + "не можна достовірно оцінити слабкі сторони."
                );

            case "DF":
                return (
                    "Потребує аналізу дуелей, позиційних помилок "
                    + "та поведінки при високій лінії оборони."
                );

            case "MF":
                return (
                    "Потребує аналізу втрат м'яча, прогресивних передач "
                    + "та роботи після втрати володіння."
                );

            case "FW":
                return (
                    "Потребує аналізу реалізації, xG, пресингу "
                    + "та ефективності відкривань."
                );

            default:
                return (
                    "Недостатньо підтверджених даних "
                    + "для об'єктивної оцінки."
                );
        }
    }

    function getDefaultRole(
        position
    ) {
        switch (position) {
            case "GK":
                return (
                    "Воротар — останній рубіж оборони. "
                    + "У системі з високою лінією важлива якість гри ногами."
                );

            case "DF":
                return (
                    "Захисник — забезпечення компактності оборони, "
                    + "контроль зон та перехід у першу фазу розіграшу."
                );

            case "MF":
                return (
                    "Півзахисник — зв'язок між лініями, "
                    + "контроль темпу та підтримка пресингу."
                );

            case "FW":
                return (
                    "Нападник — основна загроза у фінальній третині, "
                    + "відкривання за спину та завершення атак."
                );

            default:
                return (
                    "Тактична роль визначається поточною схемою команди."
                );
        }
    }

    // ---------------------------------------------------------
    // ERROR UI
    // ---------------------------------------------------------

    function showFatalError(message) {
        const wrapper =
            document.querySelector(
                ".app-wrapper"
            );

        if (!wrapper) {
            return;
        }

        const error =
            document.createElement(
                "div"
            );

        error.className =
            "card app-error";

        error.innerHTML = `
            <h2>⚠️ Помилка даних</h2>
            <p>
                ${escapeHTML(message)}
            </p>
        `;

        wrapper.prepend(error);
    }

    // ---------------------------------------------------------
    // GLOBAL API
    // ---------------------------------------------------------

    /*
     * Корисно для тестування з DevTools:
     *
     * window.FootballPsychopath.getCurrentClub()
     * window.FootballPsychopath.getClubs()
     */

    window.FootballPsychopath = {
        getCurrentClub() {
            return currentClub;
        },

        getClubs() {
            return [...clubs];
        },

        renderClub(clubId) {
            renderClub(clubId);
        },

        openPlayer(player) {
            openPlayerModal(player);
        },

        closePlayer() {
            closePlayerModal();
        }
    };

    // ---------------------------------------------------------
    // START
    // ---------------------------------------------------------

    loadUkraineData();

})();
