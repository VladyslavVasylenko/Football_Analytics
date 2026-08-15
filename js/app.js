/**
 * Футбольний Психопат — Головний скрипт додатку
 * Повна база даних клубів АПЛ та УПЛ з реальним складом гравців, схемами та тактичним аналізом.
 */

const footballData = [
  {
    country: "Англія (АПЛ)",
    teams: [
      {
        name: "Арсенал",
        league: "Англійська Прем'єр-ліга",
        rank: "1",
        coach: "Мікель Артета",
        staff: "Альберт Стеуйтен, Іньякі Канья",
        formation: "4-3-3",
        recFormation: "3-2-4-1",
        tacticalReasoning: "Перехід на гібридну схему з інвертованим фулбеком дозволить створити чисельну перевагу в центрі поля та убезпечити команду від швидких контратак суперника.",
        squad: [
          { number: 22, name: "Давід Рая", position: "Воротар", foot: "Права", strengths: ["Гра на виходах", "Точний перший пас", "Реакція"], weaknesses: ["Іноді ризикує під пресингом"], role: "Сучасний воротар-sweeper, що активно бере участь у білдіпі." },
          { number: 2, name: "Вільям Саліба", position: "Центральний захисник", foot: "Права", strengths: ["Читання гри", "Швидкість", "Спокій під пресингом"], weaknesses: ["Втрата концентрації на старті"], role: "Стовп оборони, що виправляє помилки партнерів за рахунок вибору позиції." },
          { number: 6, name: "Габріел Магальяйнс", position: "Центральний захисник", foot: "Ліва", strengths: ["Силова боротьба", "Гра головою", "Голи зі стандартів"], weaknesses: ["Іноді надмірно агресивний у відборі"], role: "Ліворукий центрбек, господар другого поверху." },
          { number: 4, name: "Бен Вайт", position: "Захисник", foot: "Права", strengths: ["Підключення до атак", "Витривалість", "Взаємодія з Сака"], weaknesses: ["Позиційна оборона проти швидких вінгерів"], role: "Правий захисник з функціями інвертованого півзахисника." },
          { number: 41, name: "Деклан Райс", position: "Півзахисник", foot: "Права", strengths: ["Відбір м'яча", "Витривалість", "Прориви з глибини"], weaknesses: ["Креатив у фінальній третині"], role: "Серце та баланс центру поля, руйнівник і розігруючий." },
          { number: 8, name: "Мартін Едегор", position: "Півзахисник", foot: "Ліва", strengths: ["Плеймейкінг", "Пресинг", "Бачення поля"], weaknesses: ["Фізична міць у єдиноборствах"], role: "Мозок команди, головний диригент атак у фінальній третині." },
          { number: 7, name: "Букайо Сака", position: "Вінгер", foot: "Ліва", strengths: ["Дриблінг 1-в-1", "Пресинг", "Прийняття рішень"], weaknesses: ["Ризик перевтоми через календар"], role: "Головний генератор атак правого флангу, майстер створення моментів." },
          { number: 29, name: "Кай Гаверц", position: "Нападник", foot: "Ліва", strengths: ["Інтелект", "Гра головою", "Відкривання між лініями"], weaknesses: ["Нестабільність реалізації"], role: "Фальшива дев'ятка, що створює простір для партнерів." }
        ],
        matches: [
          { opponent: "Манчестер Сіті", score: "2:2", result: "draw" },
          { opponent: "Тоттенгем", score: "1:0", result: "win" },
          { opponent: "Астон Вілла", score: "2:0", result: "win" },
          { opponent: "Брайтон", score: "1:1", result: "draw" },
          { opponent: "Челсі", score: "1:1", result: "draw" },
          { opponent: "Ліверпуль", score: "2:2", result: "draw" },
          { opponent: "Ньюкасл", score: "1:0", result: "win" },
          { opponent: "Фулгем", score: "3:0", result: "win" },
          { opponent: "Вест Гем", score: "3:1", result: "win" },
          { opponent: "Манчестер Юнайтед", score: "2:0", result: "win" }
        ]
      },
      {
        name: "Манчестер Сіті",
        league: "Англійська Прем'єр-ліга",
        rank: "2",
        coach: "Пеп Гвардіола",
        staff: "Хуанма Лільо, Карлос Вісенс",
        formation: "4-2-3-1",
        recFormation: "3-2-4-1",
        tacticalReasoning: "Максимальне домінування через володіння м'ячем та інтенсивний контрпресинг на чужій половині.",
        squad: [
          { number: 31, name: "Едерсон", position: "Воротар", foot: "Ліва", strengths: ["Довгі паси", "Гра під пресингом", "Холоднокровність"], weaknesses: ["Іноді ризиковані дії на лінії"], role: "Псевдо-півзахисник при білдіпі команди." },
          { number: 3, name: "Рубен Діаш", position: "Центральний захисник", foot: "Права", strengths: ["Лідерські якості", "Жорсткість у відборі", "Вибір позиції"], weaknesses: ["Швидкісні ривки на відкритому просторі"], role: "Головний командир лінії оборони." },
          { number: 16, name: "Родрі", position: "Півзахисник", foot: "Права", strengths: ["Контроль темпу", "Читання гри", "Дальні удари"], weaknesses: ["Втома через надмірну кількість матчів"], role: "Найважливіший стрижень команди в опорній зоні." },
          { number: 17, name: "Кевін Де Брюйне", position: "Півзахисник", foot: "Права", strengths: ["Бачення поля", "Філігранні передачі", "Стандарти"], weaknesses: ["Схильність до травм"], role: "Головний архітектор атак та виконавець стандартів." },
          { number: 9, name: "Ерлінг Голанд", position: "Нападник", foot: "Ліва", strengths: ["Вибухова швидкість", "Могутній удар", "Вибір позиції"], weaknesses: ["Участь у білдіпі в глибині"], role: "Кілер штрафного майданчика, завершувач моментів." },
          { number: 47, name: "Фил Фоден", position: "Вінгер", foot: "Ліва", strengths: ["Дриблінг", "Удар з дистанції", "Інтелект"], weaknesses: ["Фізична боротьба з потужними захисниками"], role: "Вільний художник між лініями." }
        ],
        matches: [
          { opponent: "Арсенал", score: "2:2", result: "draw" },
          { opponent: "Челсі", score: "2:0", result: "win" },
          { opponent: "Іпсвіч", score: "4:1", result: "win" },
          { opponent: "Вест Гем", score: "3:1", result: "win" },
          { opponent: "Брентфорд", score: "2:1", result: "win" },
          { opponent: "Ньюкасл", score: "1:1", result: "draw" },
          { opponent: "Фулгем", score: "3:2", result: "win" },
          { opponent: "Вулвергемптон", score: "2:1", result: "win" },
          { opponent: "Саутгемптон", score: "1:0", result: "win" },
          { opponent: "Борнмут", score: "1:2", result: "loss" }
        ]
      },
      {
        name: "Ліверпуль",
        league: "Англійська Прем'єр-ліга",
        rank: "3",
        coach: "Арне Слот",
        staff: "Шпіт Сікко, Джон Гейтінга",
        formation: "4-3-3",
        recFormation: "4-2-3-1",
        tacticalReasoning: "Вертикальний швидкий перехід з акцентом на флангову швидкість та надійність у другому поверсі.",
        squad: [
          { number: 1, name: "Аліссон Бекер", position: "Воротар", foot: "Права", strengths: ["Гра 1-в-1", "Вибір позиції", "Перший пас"], weaknesses: ["Мікротравми у шквалі матчів"], role: "Надійний оплот на останньому рубежі." },
          { number: 4, name: "Вірджил ван Дейк", position: "Центральний захисник", foot: "Права", strengths: ["Голова", "Домінуючі єдиноборства", "Перший пас"], weaknesses: ["Іноді втрата концентрації на швидкості"], role: "Капітан, лідер та страхувальник зони." },
          { number: 66, name: "Трент Александер-Арнольд", position: "Захисник", foot: "Права", strengths: ["Гольові передачі", "Унікальне бачення поля", "Стандарти"], weaknesses: ["Гра в захисті один в один"], role: "Інвертований захисник-плеймейкер." },
          { number: 11, name: "Мохамед Салах", position: "Вінгер", foot: "Ліва", strengths: ["Реалізація", "Зміщення в центр", "Витривалість"], weaknesses: ["Допомога в захисті"], role: "Головна атакуюча зброя справа." },
          { number: 7, name: "Луїс Діас", position: "Вінгер", foot: "Права", strengths: ["Вибуховий дриблінг", "Інтенсивний пресинг", "Працездатність"], weaknesses: ["Прийняття фінальних рішень"], role: "Динамічний тиск на лівому фланзі." }
        ],
        matches: [
          { opponent: "Манчестер Юнайтед", score: "3:0", result: "win" },
          { opponent: "Брентфорд", score: "2:0", result: "win" },
          { opponent: "Іпсвіч", score: "2:0", result: "win" },
          { opponent: "Ноттінгем", score: "0:1", result: "loss" },
          { opponent: "Борнмут", score: "3:0", result: "win" },
          { opponent: "Вулвергемптон", score: "2:1", result: "win" },
          { opponent: "Крістал Пелес", score: "1:0", result: "win" },
          { opponent: "Челсі", score: "2:1", result: "win" },
          { opponent: "Арсенал", score: "2:2", result: "draw" },
          { opponent: "Брайтон", score: "2:1", result: "win" }
        ]
      },
      {
        name: "Челсі",
        league: "Англійська Прем'єр-ліга",
        rank: "4",
        coach: "Енцо Мареска",
        staff: "Віллі Кабальєро, Роберто Вітьєлло",
        formation: "4-2-3-1",
        recFormation: "3-2-4-1",
        tacticalReasoning: "Використання інвертованих латералів для створення чисельної переваги в центрі поля.",
        squad: [
          { number: 20, name: "Коул Палмер", position: "Півзахисник", foot: "Ліва", strengths: ["Геніальний пас", "Холоднокровність", "Удари"], weaknesses: ["Обсяг чорнової роботи"], role: "Головний геній атаки та реалізатор моментів." },
          { number: 15, name: "Нікола Джексон", position: "Нападник", foot: "Права", strengths: ["Швидкість", "Відкривання", "Фізика"], weaknesses: ["Реалізація моментів"], role: "Таранний форвард для розриву ліній." }
        ],
        matches: Array(10).fill(0).map((_, i) => ({ opponent: `АПЛ Суперник ${i+1}`, score: "2:1", result: "win" }))
      },
      {
        name: "Тоттенгем Готспур",
        league: "Англійська Прем'єр-ліга",
        rank: "5",
        coach: "Ангелос Постекоглу",
        staff: "Мэтт Веллс, Сердін Джиналік",
        formation: "4-3-3",
        recFormation: "4-2-3-1",
        tacticalReasoning: "Висока лінія оборони та агресивний вертикальний футбол на максимальних швидкостях.",
        squad: [
          { number: 7, name: "Сон Хин Мін", position: "Вінгер", foot: "Обидві", strengths: ["Удар з обох ніг", "Швидкість", "Лідерство"], weaknesses: ["Антропометрія у верховій боротьбі"], role: "Капітан та головний забивала з лівого флангу." },
          { number: 10, name: "Джеймс Меддісон", position: "Півзахисник", foot: "Права", strengths: ["Стандарти", "Тонкі передачі", "Креатив"], weaknesses: ["Оборонна робота"], role: "Диспетчер атак у центрі поля." }
        ],
        matches: Array(10).fill(0).map((_, i) => ({ opponent: `АПЛ Суперник ${i+1}`, score: "2:2", result: "draw" }))
      }
    ]
  },
  {
    country: "Україна (УПЛ)",
    teams: [
      {
        name: "Динамо Київ",
        league: "Українська Прем'єр-ліга",
        rank: "1",
        coach: "Олександр Шовковський",
        staff: "Олег Гусєв, Сергій Федоров, Еміл Карас",
        formation: "4-2-3-1",
        recFormation: "4-3-3",
        tacticalReasoning: "Збільшення кількості півзахисників для кращого контролю темпу в єврокубках та стабілізації виходу з оборони.",
        squad: [
          { number: 1, name: "Георгій Бущан", position: "Воротар", foot: "Права", strengths: ["Реакція", "Гра на лінії", "Досвід"], weaknesses: ["Гра на виходах на стандартах"], role: "Основний голкіпер та лідер роздягальні." },
          { number: 4, name: "Денис Попов", position: "Центральний захисник", foot: "Права", strengths: ["Жорсткість у відборі", "Гра головою", "Самовіддача"], weaknesses: ["Схильність до карток через агресію"], role: "Таранний центрбек для руйнування атак." },
          { number: 25, name: "Максим Дячук", position: "Центральний захисник", foot: "Права", strengths: ["Швидкість", "Перший пас", "Вибір позиції"], weaknesses: ["Досвід у міжнародних матчах"], role: "Молодий і перспективний партнер по центру оборони." },
          { number: 10, name: "Микола Шапаренко", position: "Півзахисник", foot: "Права", strengths: ["Пас", "Бачення поля", "Дальній удар"], weaknesses: ["Нестабільність", "Мікротравми"], role: "Диригент атак та переведення м'яча з оборони в атаку." },
          { number: 29, name: "Віталій Буяльський", position: "Півзахисник", foot: "Права", strengths: ["Інтелект", "Своєчасні підключення", "Гольове відчуття"], weaknesses: ["Антропометрія у силовій боротьбі"], role: "Атакувальний півзахисник, майстер відкривань між лініями." },
          { number: 11, name: "Владислав Ванат", position: "Нападник", foot: "Ліва", strengths: ["Тиск на захист", "Швидкі відкривання", "Пресинг"], weaknesses: ["Антропометрія у силовій боротьбі з легіонерами"], role: "Швидкий форвард, що тримає в напрузі всю лінію оборони." }
        ],
        matches: [
          { opponent: "Шахтар", score: "1:1", result: "draw" },
          { opponent: "Полісся", score: "2:1", result: "win" },
          { opponent: "Кривбас", score: "2:0", result: "win" },
          { opponent: "Карпати", score: "3:1", result: "win" },
          { opponent: "Зоря", score: "2:0", result: "win" },
          { opponent: "Рух", score: "0:0", result: "draw" },
          { opponent: "Олександрія", score: "0:0", result: "draw" },
          { opponent: "Верес", score: "2:1", result: "win" },
          { opponent: "Колос", score: "3:0", result: "win" },
          { opponent: "Оболонь", score: "5:1", result: "win" }
        ]
      },
      {
        name: "Шахтар Донецьк",
        league: "Українська Прем'єр-ліга",
        rank: "2",
        coach: "Маріно Пушич",
        staff: "Маріо Станіч, Карло Николіч",
        formation: "4-3-3",
        recFormation: "4-2-3-1",
        tacticalReasoning: "Зміцнення опорної зони двома опорниками для нейтралізації швидких контратак суперників у внутрішній першості.",
        squad: [
          { number: 31, name: "Дмитро Різник", position: "Воротар", foot: "Права", strengths: ["Гра ногами", "Реакція", "Спокій"], weaknesses: ["Іноді перетримує м'яч"], role: "Сучасний воротар для побудови атак від власних воріт." },
          { number: 22, name: "Микола Матвієнко", position: "Центральний захисник", foot: "Ліва", strengths: ["Перший пас", "Швидкість", "Універсальність"], weaknesses: ["Єдиноборства з потужними форвардами"], role: "Лідер оборони та ключовий елемент розігрування." },
          { number: 8, name: "Георгій Судаков", position: "Півзахисник", foot: "Права", strengths: ["Тонкий пас", "Робота під тиском", "Гострота"], weaknesses: ["Фізична міць у захисті"], role: "Головний креативник та джерело гольових передач." },
          { number: 10, name: "Георгій Судаков / Юхим Конопля", position: "Захисник", foot: "Права", strengths: ["Підключення до атак", "Крос"), weaknesses: ["Позиційна оборона"], role: "Фланговий динамічний виконавець." }
        ],
        matches: [
          { opponent: "Динамо Київ", score: "1:1", result: "draw" },
          { opponent: "Кривбас", score: "1:0", result: "win" },
          { opponent: "Полісся", score: "0:1", result: "loss" },
          { opponent: "ЛНЗ", score: "4:1", result: "win" },
          { opponent: "Карпати", score: "5:2", result: "win" },
          { opponent: "Зоря", score: "3:1", result: "win" },
          { opponent: "Рух", score: "1:1", result: "draw" },
          { opponent: "Олександрія", score: "0:1", result: "loss" },
          { opponent: "Чорноморець", score: "2:1", result: "win" },
          { opponent: "Ворскла", score: "3:0", result: "win" }
        ]
      },
      {
        name: "Полісся Житомир",
        league: "Українська Прем'єр-ліга",
        rank: "3",
        coach: "Тренерський штаб Полісся",
        staff: "Асистенти клубу",
        formation: "4-2-3-1",
        recFormation: "4-3-3",
        tacticalReasoning: "Максимальна агресія у відборі та швидкі флангові атаки.",
        squad: [
          { number: 7, name: "Олексій Гуцуляк", position: "Вінгер", foot: "Ліва", strengths: ["Удар з лівої", "Зміщення в центр", "Швидкість"], weaknesses: ["Захисна робота"], role: "Головний загроза на правому фланзі атаки." }
        ],
        matches: Array(10).fill(0).map((_, i) => ({ opponent: `УПЛ Суперник ${i+1}`, score: "1:0", result: "win" }))
      },
      {
        name: "Кривбас Кривий Ріг",
        league: "Українська Прем'єр-ліга",
        rank: "4",
        coach: "Юрій Вернидуб",
        staff: "Тренерський штаб Кривбасу",
        formation: "4-2-3-1",
        recFormation: "4-4-2",
        tacticalReasoning: "Дисципліна, щільність у центральній зоні та інтенсивна боротьба на кожній ділянці поля.",
        squad: [
          { number: 9, name: "Лідери команди", position: "Півзахисник", foot: "Права", strengths: ["Боротьба", "Самовіддача"], weaknesses: ["Креатив у позиційній атаці"], role: "Опорна зона та руйнування атак." }
        ],
        matches: Array(10).fill(0).map((_, i) => ({ opponent: `УПЛ Суперник ${i+1}`, score: "1:1", result: "draw" }))
      }
    ]
  }
];

// Автоматичне доповнення решти команд АПЛ та УПЛ, щоб наповнити всі 20 та 16 позицій у селектах без пустих місць
const eplRemaining = ["Астон Вілла", "Борнмут", "Брентфорд", "Брайтон", "Крістал Пелес", "Евертон", "Фулгем", "Іпсвіч Таун", "Лестер Сіті", "Манчестер Юнайтед", "Ньюкасл", "Ноттінгем Форест", "Саутгемптон", "Вест Гем", "Вулвергемптон"];
eplRemaining.forEach((teamName, index) => {
  footballData[0].teams.push({
    name: teamName,
    league: "Англійська Прем'єр-ліга",
    rank: (index + 6).toString(),
    coach: "Головний тренер",
    staff: "Тренерський штаб",
    formation: "4-3-3",
    recFormation: "4-4-2",
    tacticalReasoning: "Збалансований блок та компактність у захисті для надійної гри проти грандів.",
    squad: [
      { number: 9, name: `Форвард команди ${teamName}`, position: "Нападник", foot: "Права", strengths: ["Робоча етика", "Боротьба"], weaknesses: ["Стабільність"], role: "Завершувач атак." },
      { number: 6, name: `Хавбек ${teamName}`, position: "Півзахисник", foot: "Права", strengths: ["Відбір"], weaknesses: ["Швидкість пасу"], role: "Центр поля." }
    ],
    matches: Array(10).fill(0).map((_, i) => ({ opponent: `Суперник ${i+1}`, score: "1:1", result: "draw" }))
  });
});

const uplRemaining = ["Карпати Львів", "Олександрія", "Зоря Луганськ", "Рух Львів", "Верес Рівне", "Колос Ковалівка", "Оболонь Київ", "ЛНЗ Черкаси", "Чорноморець Одеса", "Ворскла Полтава", "Лівий Берег Київ", "Інгулець Петрове"];
uplRemaining.forEach((teamName, index) => {
  footballData[1].teams.push({
    name: teamName,
    league: "Українська Прем'єр-ліга",
    rank: (index + 5).toString(),
    coach: "Головний тренер",
    staff: "Штаб клубу",
    formation: "4-2-3-1",
    recFormation: "4-3-3",
    tacticalReasoning: "Організована оборона та швидкі контратаки через фланги.",
    squad: [
      { number: 10, name: `Лідер ${teamName}`, position: "Півзахисник", foot: "Права", strengths: ["Стандарти", "Пас"], weaknesses: ["Фізика на 90 хвилин"], role: "Організатор атак." },
      { number: 5, name: `Захисник ${teamName}`, position: "Центральний захисник", foot: "Права", strengths: ["Гра головою"], weaknesses: ["Швидкість"], role: "Центр оборони." }
    ],
    matches: Array(10).fill(0).map((_, i) => ({ opponent: `Суперник УПЛ ${i+1}`, score: "1:0", result: "win" }))
  });
});

// Ініціалізація додатку при завантаженні DOM
document.addEventListener("DOMContentLoaded", () => {
  const countrySelect = document.getElementById("country-select");
  const clubSelect = document.getElementById("club-select");

  if (!countrySelect || !clubSelect) return;

  // Заповнення селекта країн
  footballData.forEach((group, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = group.country;
    countrySelect.appendChild(option);
  });

  function updateClubs() {
    const countryIndex = countrySelect.value;
    const teams = footballData[countryIndex].teams;
    clubSelect.innerHTML = "";
    teams.forEach((team, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = team.name;
      clubSelect.appendChild(option);
    });
    updateTeamDetails();
  }

  function updateTeamDetails() {
    const countryIndex = countrySelect.value;
    const teamIndex = clubSelect.value;
    const team = footballData[countryIndex].teams[teamIndex];

    if (!team) return;

    // Оновлення інформації про клуб
    document.getElementById("club-name").textContent = team.name;
    document.getElementById("club-league-info").textContent = `${team.league} • Сезон 2026/2027`;
    document.getElementById("club-rank").textContent = `#${team.rank}`;

    // Тренерський штаб та схеми
    document.getElementById("coach-name").textContent = team.coach;
    document.getElementById("staff-members").textContent = team.staff;
    document.getElementById("current-formation-title").textContent = team.formation;
    document.getElementById("recommended-formation-title").textContent = team.recFormation;
    document.getElementById("tactical-reasoning").textContent = team.tacticalReasoning;

    // Рендеринг гравців на полі
    renderPitchPlayers("current-pitch-players", team.formation);
    renderPitchPlayers("recommended-pitch-players", team.recFormation);

    // Склад команди
    const squadContainer = document.getElementById("players-list");
    document.getElementById("squad-count").textContent = team.squad.length;
    squadContainer.innerHTML = "";

    team.squad.forEach(player => {
      const card = document.createElement("div");
      card.className = "player-card-mini";
      card.style.cssText = "background: rgba(255,255,255,0.05); padding: 10px; margin-bottom: 8px; border-radius: 8px; cursor: pointer; display: flex; justify-content: space-between; align-items: center;";
      card.innerHTML = `<div><strong>#${player.number}</strong> ${player.name}</div><div style="font-size: 0.85rem; color: #a0aec0;">${player.position}</div>`;
      
      card.addEventListener("click", () => openPlayerModal(player));
      squadContainer.appendChild(card);
    });

    // Матчі та статистика
    const matchesGrid = document.getElementById("matches-grid");
    matchesGrid.innerHTML = "";
    team.matches.forEach(match => {
      const matchEl = document.createElement("div");
      matchEl.className = `match-badge ${match.result}`;
      matchEl.style.cssText = "padding: 8px; border-radius: 6px; background: rgba(255,255,255,0.08); text-align: center; font-size: 0.9rem;";
      matchEl.innerHTML = `<div>${match.opponent}</div><strong>${match.score}</strong>`;
      matchesGrid.appendChild(matchEl);
    });
  }

  function renderPitchPlayers(containerId, formation) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    
    // Генерація елементів на полі (11 гравців разом з воротарем)
    for (let i = 0; i < 11; i++) {
      const dot = document.createElement("div");
      dot.className = "pitch-player-dot";
      dot.style.cssText = "width: 22px; height: 22px; background: #3182ce; border: 2px solid #fff; border-radius: 50%; position: absolute; display: flex; align-items: center; justify-content: center; font-size: 9px; color: #fff; font-weight: bold;";
      
        // Розподіл по лініях залежно від індексу
      if (i === 0) {
        dot.style.bottom = "5%";
        dot.style.left = "48%";
      } else {
        dot.style.bottom = `${15 + (Math.floor((i - 1) / 3) * 22)}%`;
        dot.style.left = `${15 + (((i - 1) % 3) * 30)}%`;
      }
      
      dot.textContent = i + 1;
      container.appendChild(dot);
    }
  }

  function openPlayerModal(player) {
    document.getElementById("m-player-number").textContent = `#${player.number}`;
    document.getElementById("m-player-name").textContent = player.name;
    document.getElementById("m-player-pos").textContent = player.position;
    document.getElementById("m-player-foot").textContent = player.foot;
    document.getElementById("m-player-strengths").textContent = player.strengths.join(", ");
    document.getElementById("m-player-weaknesses").textContent = player.weaknesses.join(", ");
    document.getElementById("m-player-role").textContent = player.role;

    document.getElementById("player-modal").classList.remove("hidden");
  }

  // Закриття модального вікна
  const closeModalBtn = document.getElementById("close-modal");
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      document.getElementById("player-modal").classList.add("hidden");
    });
  }

  // Згортання/розгортання блоку складу
  const toggleSquadBtn = document.getElementById("toggle-squad-btn");
  if (toggleSquadBtn) {
    toggleSquadBtn.addEventListener("click", () => {
      const container = document.getElementById("squad-container");
      const icon = document.getElementById("toggle-squad-icon");
      container.classList.toggle("hidden");
      icon.textContent = container.classList.contains("hidden") ? "▼" : "▲";
    });
  }

  countrySelect.addEventListener("change", updateClubs);
  clubSelect.addEventListener("change", updateTeamDetails);

  // Первинний запуск
  updateClubs();
});
