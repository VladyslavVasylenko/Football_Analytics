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
        lbl_role: "🎯 Role:", lbl_zone: "📍 Zóna:",
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

// СПИСОК ВСІХ 54 КРАЇН УЄФА, ЧИЇ КЛУБИ ДОПУЩЕНІ ДО ЄВРОКУБКІВ
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

// БАЗА ДАНИХ КЛУБІВ УЄФА
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
                { opp: "Ференцварош", res: "loss", score: "0:4" },
                { opp: "ЛНЗ", res: "win", score: "1:0" },
                { opp: "Оболонь", res: "win", score: "5:1" },
                { opp: "Рома", res: "loss", score: "0:1" },
                { opp: "Кривбас", res: "win", score: "2:1" },
                { opp: "Рух", res: "draw", score: "0:0" }
            ],
            players: [
                {
                    id: 101, status: "starter", stamina: "88%", footKey: "foot_right",
                    name: { uk: "Микола Шапаренко", en: "Mykola Shaparenko", cs: "Mykola Shaparenko", ru: "Николай Шапаренко" },
                    pos: { uk: "Півзахисник (CM / CAM)", en: "Midfielder (CM / CAM)", cs: "Záložník (CM / CAM)", ru: "Полузащитник (CM / CAM)" },
                    strengths: { uk: "Дриблінг, бачення поля, креатив", en: "Dribbling, vision, creativity", cs: "Driblink, vidění hry", ru: "Дриблинг, видение поля" },
                    weaknesses: { uk: "Верхові єдиноборства", en: "Aerial duels", cs: "Hlavičkování", ru: "Верховые единоборства" },
                    tacticalProfile: {
                        bestRole: { uk: "Атакувальний плеймейкер", en: "Advanced Playmaker", cs: "Útočný tvorce hry", ru: "Атакующий плеймейкер" },
                        bestZone: { uk: "Центральна зона та півфланги", en: "Central zone & half-spaces", cs: "Centrální zóna a meziprostory", ru: "Центральная зона и полуфланги" },
                        defensiveWork: { uk: "Пресинг опорної зони суперника", en: "Pressing opponent DMs", cs: "Presink zálohy soupeře", ru: "Прессинг опорников" },
                        workRate: { uk: "Атака: Висока | Оборона: Середня", en: "Att: High | Def: Medium", cs: "Útok: Vysoká | Obrana: Střední", ru: "Атака: Высокая | Оборона: Средняя" }
                    },
                    heatmap: [15, 35, 20, 40, 85, 60, 30, 70, 45, 10, 25, 15],
                    detailedStats: { goals: 5, assists: 7, rating: 7.8 }
                },
                {
                    id: 102, status: "starter", stamina: "91%", footKey: "foot_right",
                    name: { uk: "Владислав Ванат", en: "Vladyslav Vanat", cs: "Vladyslav Vanat", ru: "Владислав Ванат" },
                    pos: { uk: "Нападник (ST)", en: "Striker (ST)", cs: "Útočník (ST)", ru: "Нападающий (ST)" },
                    strengths: { uk: "Завершення, ривки в штрафний", en: "Finishing, box entries", cs: "Zakončení, náběhy", ru: "Завершение, рывки" },
                    weaknesses: { uk: "Силова боротьба спиною до воріт", en: "Physical hold-up play", cs: "Hra zády k brance", ru: "Игра спиной к воротам" },
                    tacticalProfile: {
                        bestRole: { uk: "Центрфорвард (Advanced Forward)", en: "Advanced Forward", cs: "Hrotový útočník", ru: "Центрфорвард" },
                        bestZone: { uk: "Штрафний майданчик", en: "Penalty box", cs: "Pokutové území", ru: "Штрафная площадка" },
                        defensiveWork: { uk: "Перша лінія високого пресингу", en: "First line of high press", cs: "První linie presinku", ru: "Первая линия прессинга" },
                        workRate: { uk: "Атака: Висока | Оборона: Низька", en: "Att: High | Def: Low", cs: "Útok: Vysoká | Obrana: Nízká", ru: "Атака: Высокая | Оборона: Низкая" }
                    },
                    heatmap: [5, 10, 5, 15, 20, 15, 45, 90, 50, 60, 80, 65],
                    detailedStats: { goals: 12, assists: 4, rating: 7.7 }
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
                { opp: "Динамо Київ", res: "draw", score: "1:1" },
                { opp: "Арсенал", res: "loss", score: "0:1" },
                { opp: "Чорноморець", res: "win", score: "2:1" },
                { opp: "Аталанта", res: "loss", score: "0:3" },
                { opp: "Верес", res: "draw", score: "1:1" },
                { opp: "Оболонь", res: "win", score: "4:0" },
                { opp: "Болонья", res: "draw", score: "0:0" },
                { opp: "Карпати", res: "win", score: "5:2" },
                { opp: "Олександрія", res: "loss", score: "3:4" }
            ],
            players: [
                {
                    id: 103, status: "starter", stamina: "93%", footKey: "foot_left",
                    name: { uk: "Георгій Судаков", en: "Heorhiy Sudakov", cs: "Heorhiy Sudakov", ru: "Георгий Судаков" },
                    pos: { uk: "Плеймейкер (CAM / CM)", en: "Playmaker (CAM / CM)", cs: "Tvorce hry (CAM)", ru: "Плеймейкер (CAM / CM)" },
                    strengths: { uk: "Далекий удар, контроль м'яча", en: "Long shots, ball control", cs: "Střelba z dálky, kontrola míče", ru: "Дальний удар, контроль мяча" },
                    weaknesses: { uk: "Грубий відбір", en: "Tackling timing", cs: "Odebírání míče", ru: "Отбор мяча" },
                    tacticalProfile: {
                        bestRole: { uk: "Вільний художник / Плеймейкер", en: "Free-role Playmaker", cs: "Volný tvorce hry", ru: "Свободный плеймейкер" },
                        bestZone: { uk: "Чужа третина поля, центральна вісь", en: "Attacking third, central axis", cs: "Útočná třetina", ru: "Атакующая треть поля" },
                        defensiveWork: { uk: "Контрпресинг після втрати", en: "Counter-pressing after turnover", cs: "Kontrapresink", ru: "Контрпрессинг при потере" },
                        workRate: { uk: "Атака: Висока | Оборона: Середня", en: "Att: High | Def: Medium", cs: "Útok: Vysoká | Obrana: Střední", ru: "Атака: Высокая | Оборона: Средняя" }
                    },
                    heatmap: [20, 30, 40, 50, 75, 85, 80, 60, 30, 40, 50, 20],
                    detailedStats: { goals: 8, assists: 6, rating: 8.1 }
                }
            ]
        }
    ],
    ENG: [
        {
            id: "arsenal",
            title: "ФК Арсенал Лондон",
            country: "🇬🇧 Англія (Premier League / Ліга Чемпіонів)",
            coach: "Мікель Артета",
            matches: [
                { opp: "Челсі", res: "draw", score: "1:1" },
                { opp: "Інтер", res: "loss", score: "0:1" },
                { opp: "Ньюкасл", res: "loss", score: "0:1" },
                { opp: "Престон", res: "win", score: "3:0" },
                { opp: "Ліверпуль", res: "draw", score: "2:2" },
                { opp: "Шахтар", res: "win", score: "1:0" },
                { opp: "Борнмут", res: "loss", score: "0:2" },
                { opp: "Саутгемптон", res: "win", score: "3:1" },
                { opp: "ПСЖ", res: "win", score: "2:0" },
                { opp: "Лестер", res: "win", score: "4:2" }
            ],
            players: [
                {
                    id: 201, status: "starter", stamina: "95%", footKey: "foot_left",
                    name: { uk: "Букайо Сака", en: "Bukayo Saka", cs: "Bukayo Saka", ru: "Букайо Сака" },
                    pos: { uk: "Правий вінгер (RW)", en: "Right Winger (RW)", cs: "Pravé křídlo (RW)", ru: "Правый вингер (RW)" },
                    strengths: { uk: "Дриблінг 1в1, гострі сольні проходи", en: "1v1 dribbling, key passes", cs: "Driblink 1 na 1, centry", ru: "Дриблинг 1в1, острые пасы" },
                    weaknesses: { uk: "Перевтома від щільного графіка", en: "Fatigue under high load", cs: "Únava z náročného programu", ru: "Усталость при нагрузках" },
                    tacticalProfile: {
                        bestRole: { uk: "Інвертований вінгер", en: "Inverted Winger", cs: "Invertované křídlo", ru: "Инвертированный вингер" },
                        bestZone: { uk: "Правий край та штрафний майданчик", en: "Right flank & penalty area", cs: "Pravá strana a vápno", ru: "Правый край и штрафная" },
                        defensiveWork: { uk: "Дисципліноване повернення в оборону", en: "Trackback defense", cs: "Návrat do defenzívy", ru: "Возврат в оборону" },
                        workRate: { uk: "Атака: Висока | Оборона: Висока", en: "Att: High | Def: High", cs: "Útok: Vysoká | Obrana: Vysoká", ru: "Атака: Высокая | Оборона: Высокая" }
                    },
                    heatmap: [10, 20, 80, 95, 30, 40, 70, 90, 10, 20, 50, 60],
                    detailedStats: { goals: 8, assists: 11, rating: 8.3 }
                }
            ]
        }
    ],
    ESP: [
        {
            id: "real_madrid",
            title: "Реал Мадрид",
            country: "🇪🇸 Іспанія (LaLiga / Ліга Чемпіонів)",
            coach: "Карло Анчелотті",
            matches: [
                { opp: "Осасуна", res: "win", score: "4:0" },
                { opp: "Мілан", res: "loss", score: "1:3" },
                { opp: "Барселона", res: "loss", score: "0:4" },
                { opp: "Боруссія Д", res: "win", score: "5:2" },
                { opp: "Сельта", res: "win", score: "2:1" },
                { opp: "Вільярреал", res: "win", score: "2:0" },
                { opp: "Лілль", res: "loss", score: "0:1" },
                { opp: "Атлетіко", res: "draw", score: "1:1" },
                { opp: "Алавес", res: "win", score: "3:2" },
                { opp: "Еспаньйол", res: "win", score: "4:1" }
            ],
            players: [
                {
                    id: 301, status: "starter", stamina: "96%", footKey: "foot_right",
                    name: { uk: "Вінісіус Жуніор", en: "Vinícius Júnior", cs: "Vinícius Júnior", ru: "Винисиус Жуниор" },
                    pos: { uk: "Лівий вінгер (LW)", en: "Left Winger (LW)", cs: "Levé křídlo (LW)", ru: "Левый вингер (LW)" },
                    strengths: { uk: "Вибухова швидкість, дриблінг, реалізація", en: "Explosive speed, finishing", cs: "Rychlost, driblink, zakončení", ru: "Взрывная скорость, реализация" },
                    weaknesses: { uk: "Емоційний контроль", en: "Temperament control", cs: "Emoční kontrola", ru: "Контроль эмоций" },
                    tacticalProfile: {
                        bestRole: { uk: "Атакувальний вінгер / Форвард", en: "Inside Forward / Winger", cs: "Křídelní útočník", ru: "Атакующий вингер" },
                        bestZone: { uk: "Лівий півфланг та штрафний", en: "Left half-space & box", cs: "Levý meziprostor a vápno", ru: "Левый полуфланг" },
                        defensiveWork: { uk: "Вибірковий пресинг захисників", en: "Selective pressing", cs: "Bodový presink", ru: "Выборочный прессинг" },
                        workRate: { uk: "Атака: Висока | Оборона: Низька", en: "Att: High | Def: Low", cs: "Útok: Vysoká | Obrana: Nízká", ru: "Атака: Высокая | Оборона: Низкая" }
                    },
                    heatmap: [90, 70, 20, 10, 95, 80, 30, 20, 85, 90, 40, 10],
                    detailedStats: { goals: 12, assists: 7, rating: 8.5 }
                }
            ]
        }
    ],
    GER: [
        {
            id: "bayern_munich",
            title: "Баварія Мюнхен",
            country: "🇩🇪 Німеччина (Bundesliga / Ліга Чемпіонів)",
            coach: "Венсан Компані",
            matches: [
                { opp: "Санкт-Паулі", res: "win", score: "1:0" },
                { opp: "Бенфіка", res: "win", score: "1:0" },
                { opp: "Уніон Берлін", res: "win", score: "3:0" },
                { opp: "Майнц", res: "win", score: "4:0" },
                { opp: "Бохум", res: "win", score: "5:0" },
                { opp: "Барселона", res: "loss", score: "1:4" },
                { opp: "Штутгарт", res: "win", score: "4:0" },
                { opp: "Айнтрахт", res: "draw", score: "3:3" },
                { opp: "Астон Вілла", res: "loss", score: "0:1" },
                { opp: "Байєр", res: "draw", score: "1:1" }
            ],
            players: [
                {
                    id: 401, status: "starter", stamina: "92%", footKey: "foot_right",
                    name: { uk: "Гаррі Кейн", en: "Harry Kane", cs: "Harry Kane", ru: "Гарри Кейн" },
                    pos: { uk: "Центрфорвард (ST)", en: "Striker (ST)", cs: "Útočník (ST)", ru: "Нападающий (ST)" },
                    strengths: { uk: "Завершення, підбирання, глибинний пас", en: "Finishing, deep playmaking", cs: "Zakončení, přihrávky z hloubi", ru: "Завершение, пасы из глубины" },
                    weaknesses: { uk: "Стартова швидкість", en: "Acceleration", cs: "Akcelerace", ru: "Стартовая скорость" },
                    tacticalProfile: {
                        bestRole: { uk: "Відтягнутий форвард (Deep Lying Forward)", en: "Deep Lying Forward", cs: "Stažený útočník", ru: "Оттянутый форвард" },
                        bestZone: { uk: "Штрафний та дуга перед ним", en: "Penalty area & edge of box", cs: "Vápno a předprostor", ru: "Штрафная и зона перед ней" },
                        defensiveWork: { uk: "Перекриття ліній передач", en: "Passing lane blocking", cs: "Blokování přihrávek", ru: "Перекрытие линий передач" },
                        workRate: { uk: "Атака: Висока | Оборона: Середня", en: "Att: High | Def: Medium", cs: "Útok: Vysoká | Obrana: Střední", ru: "Атака: Высокая | Оборона: Средняя" }
                    },
                    heatmap: [10, 20, 10, 10, 30, 60, 40, 20, 50, 95, 70, 30],
                    detailedStats: { goals: 17, assists: 8, rating: 8.6 }
                }
            ]
        }
    ],
    CZE: [
        {
            id: "slavia_prague",
            title: "СК Славія Прага",
            country: "🇨🇿 Чехія (Chance Liga / Ліга Європи)",
            coach: "Йіндржих Трпішовський",
            matches: [
                { opp: "Карвіна", res: "win", score: "5:1" },
                { opp: "Айнтрахт Ф", res: "loss", score: "0:1" },
                { opp: "Храдець Кралове", res: "draw", score: "1:1" },
                { opp: "Бенятки", res: "win", score: "4:1" },
                { opp: "Сігма Оломоуц", res: "win", score: "3:0" },
                { opp: "Атлетик Більбао", res: "loss", score: "0:1" },
                { opp: "Яблонець", res: "win", score: "2:1" },
                { opp: "Спарта Прага", res: "win", score: "2:1" },
                { opp: "Лудогорець", res: "win", score: "2:0" },
                { opp: "Богеміанс", res: "win", score: "4:0" }
            ],
            players: [
                {
                    id: 501, status: "starter", stamina: "94%", footKey: "foot_right",
                    name: { uk: "Томаш Хори", en: "Tomáš Chorý", cs: "Tomáš Chorý", ru: "Томаш Хоры" },
                    pos: { uk: "Габаритний форвард (ST)", en: "Target Man (ST)", cs: "Cílový útočník (ST)", ru: "Таргетмен (ST)" },
                    strengths: { uk: "Гра головою, боротьба на стовп", en: "Aerial power, hold-up play", cs: "Hlavičkování, osobní souboje", ru: "Игра головой, физика" },
                    weaknesses: { uk: "Мобільність на великих дистанціях", en: "Long distance mobility", cs: "Pohyblivost na velké vzdálenosti", ru: "Дистанционная скорость" },
                    tacticalProfile: {
                        bestRole: { uk: "Таргетмен (Target Forward)", en: "Target Forward", cs: "Cílový útočník", ru: "Таргетмен" },
                        bestZone: { uk: "Воротарський майданчик суперника", en: "Six-yard box", cs: "Malé vápno", ru: "Вратарская площадка" },
                        defensiveWork: { uk: "Пресинг під час кутових суперника", en: "Defensive set-pieces", cs: "Defenzivní standardky", ru: "Оборона при стандартах" },
                        workRate: { uk: "Атака: Висока | Оборона: Середня", en: "Att: High | Def: Medium", cs: "Útok: Vysoká | Obrana: Střední", ru: "Атака: Высокая | Оборона: Средняя" }
                    },
                    heatmap: [5, 5, 5, 5, 10, 20, 10, 5, 30, 95, 60, 20],
                    detailedStats: { goals: 7, assists: 3, rating: 7.6 }
                }
            ]
        }
    ]
};

// АВТОМАТИЧНИЙ ГЕНЕРАТОР ШАБЛОНУ КЛУБІВ ДЛЯ ВСІХ ІНШИХ КРАЇН УЄФА
function ensureAllCountriesHaveClubs() {
    uefaCountriesList.forEach(c => {
        if (!uefaClubsDatabase[c.code]) {
            uefaClubsDatabase[c.code] = [
                {
                    id: `generic_club_${c.code.toLowerCase()}`,
                    title: `ФК Чемпіон (${c.name.split(' ')[1] || c.code})`,
                    country: `${c.name} / Єврокубки`,
                    coach: "Головний тренер",
                    matches: [
                        { opp: "Суперник A", res: "win", score: "2:0" },
                        { opp: "Суперник B", res: "draw", score: "1:1" },
                        { opp: "Суперник C", res: "win", score: "3:1" },
                        { opp: "Суперник D", res: "loss", score: "0:1" },
                        { opp: "Суперник E", res: "win", score: "1:0" },
                        { opp: "Суперник F", res: "draw", score: "2:2" },
                        { opp: "Суперник G", res: "win", score: "4:0" },
                        { opp: "Суперник H", res: "loss", score: "1:2" },
                        { opp: "Суперник I", res: "win", score: "2:1" },
                        { opp: "Суперник J", res: "win", score: "3:0" }
                    ],
                    players: [
                        {
                            id: 9901, status: "starter", stamina: "90%", footKey: "foot_right",
                            name: { uk: "Лідер Команди", en: "Team Captain", cs: "Kapitán týmu", ru: "Капитан Команды" },
                            pos: { uk: "Півзахисник (CM)", en: "Midfielder (CM)", cs: "Záložník (CM)", ru: "Полузащитник (CM)" },
                            strengths: { uk: "Пас, бачення поля", en: "Passing, vision", cs: "Přihrávky, vidění hry", ru: "Пас, видение поля" },
                            weaknesses: { uk: "Швидкість", en: "Speed", cs: "Rychlost", ru: "Скорость" },
                            tacticalProfile: {
                                bestRole: { uk: "Опорний плеймейкер", en: "Deep Playmaker", cs: "Defenzivní tvorce", ru: "Опорный плеймейкер" },
                                bestZone: { uk: "Центр поля", en: "Midfield", cs: "Střed pole", ru: "Центр поля" },
                                defensiveWork: { uk: "Перехоплення", en: "Interceptions", cs: "Zachytávání", ru: "Перехваты" },
                                workRate: { uk: "Атака: Середня | Оборона: Висока", en: "Att: Med | Def: High", cs: "Útok: Střední | Obrana: Vysoká", ru: "Атака: Средняя | Оборона: Высокая" }
                            },
                            heatmap: [10, 30, 20, 20, 60, 80, 50, 20, 30, 40, 20, 10],
                            detailedStats: { goals: 4, assists: 8, rating: 7.5 }
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

    // Заповнення списку всіх 54 країн УЄФА
    populateCountrySelect();

    countrySelect.addEventListener("change", populateClubSelect);

    langSelect.addEventListener("change", (e) => {
        currentLang = e.target.value;
        updateUI();
    });

    searchBtn.addEventListener("click", executeSearch);

    closeBtn.addEventListener("click", closeModal);
    window.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    // Ініціалізація
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
        if (c.code === "UKR") option.selected = true; // За замовчуванням Україна
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
        card.onclick = () => openPlayerModal(player.id);

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
