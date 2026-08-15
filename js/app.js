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
// 2. ДЕТАЛІЗОВАНІ КЛУБИ (КЛЮЧОВІ ЛІГИ)
// ==========================================
const clubsData = {
    UKR: [
        { id: "dynamo", name: "Динамо Київ", rank: 1, coach: "Олександр Шовковський", staff: "Еміль Карас, Олег Гусєв", formation: "4-3-3" },
        { id: "shakhtar", name: "Шахтар Донецьк", rank: 2, coach: "Маріно Пушич", staff: "Маріо Станич", formation: "4-2-3-1" },
        { id: "polissya", name: "Полісся Житомир", rank: 3, coach: "Імад Ашур", staff: "Сергій Шищенко", formation: "4-3-3" },
        { id: "oleksandriya", name: "Олександрія", rank: 4, coach: "Руслан Ротань", staff: "Олексій Антонов", formation: "4-3-3" },
        { id: "rukh", name: "Рух Львів", rank: 5, coach: "Віталій Пономарьов", staff: "Геннадій Щекотилін", formation: "4-3-3" },
        { id: "kryvbas", name: "Кривбас Кривий Ріг", rank: 6, coach: "Юрій Вернидуб", staff: "Дмитро Кара-Мустафа", formation: "4-2-3-1" },
        { id: "zorya", name: "Зоря Луганськ", rank: 7, coach: "Юрій Коваль", staff: "Младен Бартулович", formation: "4-3-3" },
        { id: "vorskla", name: "Ворскла Полтава", rank: 8, coach: "Сергій Долганський", staff: "Олександр Melaschenko", formation: "4-4-2" },
        { id: "kolos", name: "Колос Ковалівка", rank: 9, coach: "Олександр Поздєєв", staff: "Сергій Кузнецов", formation: "4-2-3-1" },
        { id: "lnz", name: "ЛНЗ Черкаси", rank: 10, coach: "Андрес Карраско", staff: "Віталій Левченко", formation: "4-3-3" },
        { id: "karpaty", name: "Карпати Львів", rank: 11, coach: "Владислав Лупашко", staff: "Iгор Ермаков", formation: "4-3-3" },
        { id: "veres", name: "Верес Рівне", rank: 12, coach: "Олег Шандрук", staff: "Юрій Бандура", formation: "4-4-2" },
        { id: "chornomorets", name: "Чорноморець Одеса", rank: 13, coach: "Олександр Бабич", staff: "Володимир Пятенко", formation: "4-3-3" },
        { id: "obolon", name: "Оболонь Київ", rank: 14, coach: "Сергій Шищенко", staff: "Олександр Антоненко", formation: "5-3-2" },
        { id: "ingulec", name: "Інгулець Петрове", rank: 15, coach: "Василь Кобін", staff: "В'ячеслав Нівінський", formation: "4-4-2" },
        { id: "livyi_bereh", name: "Лівий Берег Київ", rank: 16, coach: "Віталій Первак", staff: "Андрій Запорожан", formation: "4-2-3-1" }
    ],
    ENG: [
        { id: "mancity", name: "Манчестер Сіті", rank: 1, coach: "Хосеп Гвардіола", staff: "Хуанма Лілльо", formation: "4-1-4-1" },
        { id: "arsenal", name: "Арсенал", rank: 2, coach: "Мікель Артета", staff: "Альберт Стейвенберг", formation: "4-3-3" },
        { id: "liverpool", name: "Ліверпуль", rank: 3, coach: "Арне Слот", staff: "Сипке Хулсхофф", formation: "4-2-3-1" },
        { id: "chelsea", name: "Челсі", rank: 4, coach: "Енцо Мареска", staff: "Віллі Кабальєро", formation: "4-2-3-1" },
        { id: "aston_villa", name: "Астон Вілла", rank: 5, coach: "Унаї Емері", staff: "Папі Ольмо", formation: "4-4-2" },
        { id: "tottenham", name: "Тоттенгем Готспур", rank: 6, coach: "Анге Постекоглу", staff: "Метт Веллс", formation: "4-3-3" },
        { id: "newcastle", name: "Ньюкасл Юнайтед", rank: 7, coach: "Едді Гау", staff: "Джейсон Тіндролл", formation: "4-3-3" },
        { id: "manutd", name: "Манчестер Юнайтед", rank: 8, coach: "Рубен Аморім", staff: "Карлуш Фернандеш", formation: "3-4-2-1" }
    ],
    CZE: [
        { id: "sparta", name: "Спарта Прага", rank: 1, coach: "Ларс Фрііс", staff: "Йенс Аскоу", formation: "3-4-3" },
        { id: "slavia", name: "Славія Прага", rank: 2, coach: "Йіндржих Трпишовський", staff: "Зденек Грозділ", formation: "3-4-1-2" },
        { id: "plzen", name: "Вікторія Пльзень", rank: 3, coach: "Мирослав Koubek", staff: "Marek Bakoš", formation: "3-4-3" },
        { id: "ostrava", name: "Банік Острава", rank: 4, coach: "Павел Гапал", staff: "Jiří Neček", formation: "4-2-3-1" },
        { id: "boleslav", name: "Млада Болеслав", rank: 5, coach: "Давід Голоубек", staff: "Marek Jarolím", formation: "4-3-3" },
        { id: "liberec", name: "Слован Ліберець", rank: 6, coach: "Радослав Ковач", staff: "Miroslav Holeňák", formation: "3-4-2-1" },
        { id: "slovacko", name: "Словацко", rank: 7, coach: "Роман Вест", staff: "Jan Palinek", formation: "4-4-2" },
        { id: "zlin", name: "Злін", rank: 8, coach: "Броніслав Червенка", staff: "Лукаш Мпоталь", formation: "4-4-2" }
    ],
    ESP: [
        { id: "real_madrid", name: "Реал Мадрид", rank: 1, coach: "Карло Анчелотті", staff: "Давіде Анчелотті", formation: "4-3-3" },
        { id: "barcelona", name: "Барселона", rank: 2, coach: "Гансі Флік", staff: "Маркус Сорг", formation: "4-2-3-1" },
        { id: "atletico", name: "Атлетіко Мадрид", rank: 3, coach: "Дієго Сімеоне", staff: "Нельсон Вівас", formation: "3-5-2" },
        { id: "girona", name: "Жирона", rank: 4, coach: "Мічел", staff: "Сальва Фунес", formation: "4-3-3" }
    ],
    GER: [
        { id: "bayern", name: "Баварія Мюнхен", rank: 1, coach: "Венсан Компані", staff: "Аарон Данкс", formation: "4-2-3-1" },
        { id: "leverkusen", name: "Баєр Леверкузен", rank: 2, coach: "Хабі Алонсо", staff: "Себастьян Паррілья", formation: "3-4-2-1" },
        { id: "dortmund", name: "Боруссія Дортмунд", rank: 3, coach: "Нурі Шахін", staff: "Лукаш Піщєк", formation: "4-2-3-1" }
    ],
    ITA: [
        { id: "inter", name: "Інтер Мілан", rank: 1, coach: "Сімоне Индзагі", staff: "Массіміліано Фарріс", formation: "3-5-2" },
        { id: "juventus", name: "Ювентус", rank: 2, coach: "Тьяго Мотта", staff: "Александр Гуже", formation: "4-2-3-1" },
        { id: "milan", name: "Мілан", rank: 3, coach: "Паулу Фонсека", staff: "Тіагу Леаль", formation: "4-2-3-1" }
    ]
};

// ==========================================
// 3. ФОЛБЕК ГЕНЕРАТОР ДЛЯ РЕШТИ КРАЇН (АВТОМАТИЧНО)
// ==========================================
function getClubsForCountry(countryCode) {
    if (clubsData[countryCode] && clubsData[countryCode].length > 0) {
        return clubsData[countryCode];
    }
    
    const country = uefaCountries.find(c => c.code === countryCode);
    const countryName = country ? country.name.split(" ")[1] : "Клуб";
    
    return [
        { id: `${countryCode.toLowerCase()}_1`, name: `${countryName} Юнайтед`, rank: 1, coach: "Головний тренер", staff: "Асистент", formation: "4-3-3" },
        { id: `${countryCode.toLowerCase()}_2`, name: `${countryName} Сіті`, rank: 2, coach: "Головний тренер", staff: "Асистент", formation: "4-2-3-1" },
        { id: `${countryCode.toLowerCase()}_3`, name: `${countryName} Динамо`, rank: 3, coach: "Головний тренер", staff: "Асистент", formation: "3-5-2" },
        { id: `${countryCode.toLowerCase()}_4`, name: `${countryName} Спартак`, rank: 4, coach: "Головний тренер", staff: "Асистент", formation: "4-4-2" }
    ];
}

// ==========================================
// 4. ДЕФОЛТНИЙ СПИСОК ГРАВЦІВ
// ==========================================
const defaultPlayersTemplates = [
    { number: 1, firstName: "Георгій", lastName: "Бущан", pos: "Воротар", foot: "Права", strengths: "Рефлекси, гра на лінії.", weaknesses: "Далекий пас.", role: "Основа" },
    { number: 24, firstName: "Олександр", lastName: "Тимчик", pos: "Правий захисник", foot: "Права", strengths: "Швидкість, витривалість.", weaknesses: "Позиційний захист.", role: "Основа" },
    { number: 4, firstName: "Денис", lastName: "Попов", pos: "Центральний захисник", foot: "Права", strengths: "Боротьба вгорі.", weaknesses: "Картки.", role: "Основа" },
    { number: 32, firstName: "Тарас", lastName: "Михавко", pos: "Центральний захисник", foot: "Ліва", strengths: "Перший пас.", weaknesses: "Фізична дуель.", role: "Основа" },
    { number: 44, firstName: "Владислав", lastName: "Дубінчак", pos: "Лівий захисник", foot: "Ліва", strengths: "Кроси, швидкість.", weaknesses: "Зона за спиною.", role: "Основа" },
    { number: 6, firstName: "Володимир", lastName: "Бражко", pos: "Опорний півзахисник", foot: "Права", strengths: "Дальній удар.", weaknesses: "Поворотність.", role: "Основа" },
    { number: 10, firstName: "Микола", lastName: "Шапаренко", pos: "Центральний півзахисник", foot: "Права", strengths: "Дриблінг, бачення.", weaknesses: "Оборона.", role: "Основа" },
    { number: 29, firstName: "Віталій", lastName: "Буяльський", pos: "Атакувальний півзахисник", foot: "Права", strengths: "Вривання у штрафний.", weaknesses: "Силова боротьба.", role: "Основа" },
    { number: 20, firstName: "Олександр", lastName: "Караваєв", pos: "Правий вінгер", foot: "Права", strengths: "Завершення атак.", weaknesses: "Гра 1-в-1 в обороні.", role: "Основа" },
    { number: 11, firstName: "Владислав", lastName: "Ванат", pos: "Центрфорвард", foot: "Ліва", strengths: "Швидкісні ривки.", weaknesses: "Гра головою.", role: "Основа" },
    { number: 9, firstName: "Назар", lastName: "Волошин", pos: "Лівий вінгер", foot: "Права", strengths: "Вибуховий дриблінг.", weaknesses: "Прийняття рішень.", role: "Основа" },
    { number: 7, firstName: "Андрій", lastName: "Ярмоленко", pos: "Правий вінгер", foot: "Ліва", strengths: "Досвід, техніка.", weaknesses: "Швидкість.", role: "Заміна" },
    { number: 18, firstName: "Олександр", lastName: "Піхальонок", pos: "Центральний півзахисник", foot: "Ліва", strengths: "Розрізні паси.", weaknesses: "Відбір.", role: "Заміна" }
];

let selectedClubData = null;

// ==========================================
// 5. ІНІЦІАЛІЗАЦІЯ ТА ПОДІЇ
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
                passes: 410 + (idx * 12),
                shots: 10 + (idx % 7),
                setPieces: 4 + (idx % 5),
                tackles: 15 + (idx % 6),
                fouls: 8 + (idx % 5)
            }
        };
    });

    const playersList = club.players || defaultPlayersTemplates;

    return {
        ...club,
        players: playersList,
        matches: matches,
        recommendedTactics: {
            formation: club.formation === "4-3-3" ? "4-2-3-1" : "4-3-3",
            reasoning: `Аналіз останніх 10 матчів показує можливість покращити бічні атаки. Рекомендовано перейти на схему ${club.formation === "4-3-3" ? "4-2-3-1" : "4-3-3"} для збалансування захисту та насичення флангових зон.`
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
