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
// 2. ДЕТАЛІЗОВАНІ КЛУБИ ТА РЕАЛЬНІ СКАДИ
// ==========================================
const clubsData = {
    UKR: [
        { 
            id: "dynamo", name: "Динамо Київ", rank: 1, coach: "Олександр Шовковський", staff: "Еміль Карас, Олег Гусєв", formation: "4-3-3",
            players: [
                { number: 1, firstName: "Георгій", lastName: "Бущан", pos: "Воротар", foot: "Права", strengths: "Рефлекси, гра на лінії", weaknesses: "Далекий пас", role: "Основа" },
                { number: 24, firstName: "Олександр", lastName: "Тимчик", pos: "Правий захисник", foot: "Права", strengths: "Швидкість, витривалість", weaknesses: "Позиційний захист", role: "Основа" },
                { number: 4, firstName: "Денис", lastName: "Попов", pos: "Центральний захисник", foot: "Права", strengths: "Боротьба вгорі", weaknesses: "Агресія, картки", role: "Основа" },
                { number: 32, firstName: "Тарас", lastName: "Михавко", pos: "Центральний захисник", foot: "Ліва", strengths: "Перший пас", weaknesses: "Фізична дуель", role: "Основа" },
                { number: 44, firstName: "Владислав", lastName: "Дубінчак", pos: "Лівий захисник", foot: "Ліва", strengths: "Кроси, підключення", weaknesses: "Зона за спиною", role: "Основа" },
                { number: 6, firstName: "Володимир", lastName: "Бражко", pos: "Опорний півзахисник", foot: "Права", strengths: "Дальній удар, відбір", weaknesses: "Мобільність", role: "Основа" },
                { number: 10, firstName: "Микола", lastName: "Шапаренко", pos: "Центральний півзахисник", foot: "Права", strengths: "Дриблінг, бачення поля", weaknesses: "Захисні дії", role: "Основа" },
                { number: 29, firstName: "Віталій", lastName: "Буяльський", pos: "Атакувальний півзахисник", foot: "Права", strengths: "Вривання у штрафний", weaknesses: "Силова боротьба", role: "Основа" },
                { number: 20, firstName: "Олександр", lastName: "Караваєв", pos: "Правий вінгер", foot: "Права", strengths: "Завершення атак", weaknesses: "Захист 1-в-1", role: "Основа" },
                { number: 11, firstName: "Владислав", lastName: "Ванат", pos: "Центрфорвард", foot: "Ліва", strengths: "Швидкісні ривки", weaknesses: "Гра головою", role: "Основа" },
                { number: 9, firstName: "Назар", lastName: "Волошин", pos: "Лівий вінгер", foot: "Права", strengths: "Вибуховий дриблінг", weaknesses: "Прийняття рішень", role: "Основа" },
                { number: 7, firstName: "Андрій", lastName: "Ярмоленко", pos: "Правий вінгер", foot: "Ліва", strengths: "Досвід, техніка", weaknesses: "Швидкість", role: "Заміна" },
                { number: 18, firstName: "Олександр", lastName: "Піхальонок", pos: "Центральний півзахисник", foot: "Ліва", strengths: "Розрізні паси", weaknesses: "Відбір", role: "Заміна" }
            ]
        },
        { id: "shakhtar", name: "Шахтар Донецьк", rank: 2, coach: "Маріно Пушич", staff: "Маріо Станич", formation: "4-2-3-1" },
        { id: "polissya", name: "Полісся Житомир", rank: 3, coach: "Імад Ашур", staff: "Сергій Шищенко", formation: "4-3-3" },
        { id: "oleksandriya", name: "Олександрія", rank: 4, coach: "Руслан Ротань", staff: "Олексій Антонов", formation: "4-3-3" },
        { id: "rukh", name: "Рух Львів", rank: 5, coach: "Віталій Пономарьов", staff: "Геннадій Щекотилін", formation: "4-3-3" },
        { id: "kryvbas", name: "Кривбас Кривий Ріг", rank: 6, coach: "Юрій Вернидуб", staff: "Дмитро Кара-Мустафа", formation: "4-2-3-1" }
    ],
    ENG: [
        { id: "mancity", name: "Манчестер Сіті", rank: 1, coach: "Хосеп Гвардіола", staff: "Хуанма Лілльо", formation: "4-1-4-1" },
        { id: "arsenal", name: "Арсенал", rank: 2, coach: "Мікель Артета", staff: "Альберт Стейвенберг", formation: "4-3-3" },
        { id: "liverpool", name: "Ліверпуль", rank: 3, coach: "Арне Слот", staff: "Сипке Хулсхофф", formation: "4-2-3-1" }
    ],
    CZE: [
        { id: "sparta", name: "Спарта Прага", rank: 1, coach: "Ларс Фрііс", staff: "Йенс Аскоу", formation: "3-4-3" },
        { id: "slavia", name: "Славія Прага", rank: 2, coach: "Йіндржих Трпишовський", staff: "Зденек Грозділ", formation: "3-4-1-2" },
        { id: "plzen", name: "Вікторія Пльзень", rank: 3, coach: "Мирослав Koubek", staff: "Marek Bakoš", formation: "3-4-3" }
    ]
};

// ==========================================
// 3. АВТОМАТИЧНИЙ ГЕНЕРАТОР УНІКАЛЬНИХ СКЛАДІВ ДЛЯ БУДЬ-ЯКОГО КЛУБУ
// ==========================================
const positionsTemplate = [
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
    { pos: "Центральний захисник", role: "Заміна", num: 15 },
    { pos: "Центральний півзахисник", role: "Заміна", num: 18 },
    { pos: "Нападник", role: "Заміна", num: 21 }
];

const namePrefixes = ["A.", "M.", "D.", "J.", "K.", "S.", "L.", "P.", "R.", "T.", "V.", "H.", "B.", "C."];

function generateSquadForClub(clubName, countryCode) {
    return positionsTemplate.map((item, idx) => {
        // Унікальна генерація прізвища на основі назви клубу та індексу гравця
        const seed = clubName.length + countryCode.charCodeAt(0) + idx;
        const fn = namePrefixes[(seed + idx) % namePrefixes.length];
        const ln = `${clubName.replace(/[^a-zA-Zа-яА-ЯІіЇїЄє]/g, "")}_Гравець_${idx + 1}`;
        
        return {
            number: item.num,
            firstName: fn,
            lastName: ln,
            pos: item.pos,
            foot: (idx % 3 === 0) ? "Ліва" : "Права",
            strengths: `Професійна гра на позиції (${item.pos}), фізична витривалість.`,
            weaknesses: `Потребує ротації у напруженому графіку.`,
            role: item.role
        };
    });
}

// ==========================================
// 4. ОДЕРЖАННЯ КЛУБІВ ТА ЇХ СКЛАДІВ
// ==========================================
function getClubsForCountry(countryCode) {
    let list = clubsData[countryCode];
    
    if (!list || list.length === 0) {
        const country = uefaCountries.find(c => c.code === countryCode);
        const countryName = country ? country.name.split(" ")[1] : "Клуб";
        
        list = [
            { id: `${countryCode.toLowerCase()}_1`, name: `${countryName} Юнайтед`, rank: 1, coach: "Головний тренер", staff: "Асистент", formation: "4-3-3" },
            { id: `${countryCode.toLowerCase()}_2`, name: `${countryName} Сіті`, rank: 2, coach: "Головний тренер", staff: "Асистент", formation: "4-2-3-1" },
            { id: `${countryCode.toLowerCase()}_3`, name: `${countryName} Динамо`, rank: 3, coach: "Головний тренер", staff: "Асистент", formation: "3-5-2" },
            { id: `${countryCode.toLowerCase()}_4`, name: `${countryName} Спартак`, rank: 4, coach: "Головний тренер", staff: "Асистент", formation: "4-4-2" }
        ];
    }

    // Перевіряємо та генеруємо унікальний склад для кожного клубу, якщо його ще немає
    return list.map(club => {
        if (!club.players || club.players.length === 0) {
            club.players = generateSquadForClub(club.name, countryCode);
        }
        return club;
    });
}

let selectedClubData = null;

// ==========================================
// 5. ПОДІЇ ТА ВІДОБРАЖЕННЯ
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

    loadClubsForCountry("UKR");
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
    document.getElementById("club-league-info").innerText = `Ліга: ${countryObj.leagueName} | Всього команд у лізі: ${countryObj.teamsCount}`;
    document.getElementById("club-rank").innerText = `${selectedClubData.rank}-е місце в таблиці`;

    document.getElementById("coach-name").innerText = selectedClubData.coach;
    document.getElementById("staff-members").innerText = selectedClubData.staff;
    document.getElementById("current-formation-title").innerText = selectedClubData.formation;

    // Оновлюємо схему та список гравців САМЕ ДЛЯ ПОТОЧНОГО ОБРАНОГО КЛУБУ
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
        const results = ["win", "draw", "loss", "win", "win", "draw", "win", "loss", "win", "draw"];
        const scores = ["2:1", "1:1", "0:2", "3:0", "1:0", "2:2", "4:1", "1:2", "2:0", "0:0"];
        const res = results[idx % results.length];

        return {
            id: idx + 1,
            opponent: oppName,
            result: res,
            score: scores[idx % scores.length],
            stats: {
                passes: 380 + (idx * 15),
                shots: 8 + (idx % 8),
                setPieces: 3 + (idx % 6),
                tackles: 14 + (idx % 7),
                fouls: 7 + (idx % 6)
            }
        };
    });

    return {
        ...club,
        matches: matches,
        recommendedTactics: {
            formation: club.formation === "4-3-3" ? "4-2-3-1" : "4-3-3",
            reasoning: `Аналіз останніх 10 матчів команди ${club.name} показує доцільність оптимізації переходів з оборони в атаку. Рекомендовано схему ${club.formation === "4-3-3" ? "4-2-3-1" : "4-3-3"}.`
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
            <div class="stat-row"><span>Стандарти (кутові/штрафні):</span><strong>${match.stats.setPieces}</strong></div>
            <div class="stat-row"><span>Успішні відбори:</span><strong>${match.stats.tackles}</strong></div>
            <div class="stat-row"><span>Фоли / Штрафні:</span><strong>${match.stats.fouls}</strong></div>
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
