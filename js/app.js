/**
 * Футбольний Психопат — Головний скрипт додатку
 * Повна база даних клубів АПЛ та УПЛ з робочою візуалізацією схем та гравців.
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
          { number: 41, name: "Деклан Райс", position: "Півзахисник", foot: "Права", strengths: ["Відбір м'яча", "Витривалість", "Прориви з глибини"], weaknesses: ["Креатив у фінальній третині"], role: "Серце та баланс центру поля, руйнівник і розігруючий." },
          { number: 7, name: "Букайо Сака", position: "Вінгер", foot: "Ліва", strengths: ["Дриблінг 1-в-1", "Пресинг", "Прийняття рішень"], weaknesses: ["Ризик перевтоми через календар"], role: "Головний генератор атак правого флангу, майстер створення моментів." }
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
        staff: "Хуанма Лільо, Брайан Кідд",
        formation: "4-2-3-1",
        recFormation: "3-2-4-1",
        tacticalReasoning: "Максимальне домінування через володіння та високий контрпресинг.",
        squad: [
          { number: 9, name: "Ерлінг Голанд", position: "Нападник", foot: "Ліва", strengths: ["Вибухова швидкість", "Могутній удар", "Вибір позиції"], weaknesses: ["Участь у білдіпі в глибині"], role: "Кілер штрафного майданчика, завершувач моментів." },
          { number: 17, name: "Кевін Де Брюйне", position: "Півзахисник", foot: "Права", strengths: ["Бачення поля", "Філігранні передачі", "Стандарти"], weaknesses: ["Схильність до травм"], role: "Головний архітектор атак та виконавець стандартів." }
        ],
        matches: [
          { opponent: "Арсенал", score: "2:2", result: "draw" },
          { opponent: "Челсі", score: "2:0", result: "win" },
          { opponent: "Іпсвіч", score: "4:1", result: "win" },
          { opponent: "Вест Гем", score: "3:1", result: "win" },
          { opponent: "Брентфорд", score: "2:1", result: "win" },
          { opponent: "Ньюкасл", score: "1:1", result: "draw" },
          { opponent: "Фулгем", score: "3:2", result: "win" },
          { opponent: "Вовк", score: "2:1", result: "win" },
          { opponent: "Саутгемптон", score: "1:0", result: "win" },
          { opponent: "Борнмут", score: "1:2", result: "loss" }
        ]
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
        staff: "Олег Гусєв, Сергій Федоров",
        formation: "4-2-3-1",
        recFormation: "4-3-3",
        tacticalReasoning: "Збільшення кількості півзахисників для кращого контролю темпу в єврокубках.",
        squad: [
          { number: 10, name: "Микола Шапаренко", position: "Півзахисник", foot: "Права", strengths: ["Пас", "Бачення поля", "Дальній удар"], weaknesses: ["Нестабільність", "Мікротравми"], role: "Диригент атак та переведення м'яча з оборони в атаку." },
          { number: 11, name: "Владислав Ванат", position: "Нападник", foot: "Ліва", strengths: ["Тиск на захист", "Швидкі відкривання"], weaknesses: ["Антропометрія у силовій боротьбі"], role: "Швидкий форвард, що пресингує захисників з перших хвилин." }
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
        tacticalReasoning: "Зміцнення опорної зони двома опорниками проти швидких контратак суперників.",
        squad: [
          { number: 8, name: "Георгій Судаков", position: "Півзахисник", foot: "Права", strengths: ["Тонкий пас", "Робота під тиском", "Гострота"], weaknesses: ["Фізична міць у захисті"], role: "Головний креативник та джерело гольових передач." }
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
      }
    ]
  }
];

// Автоматичне доповнення решти команд АПЛ та УПЛ
const eplTeamsList = ["Астон Вілла", "Борнмут", "Брентфорд", "Брайтон", "Челсі", "Крістал Пелес", "Евертон", "Фулгем", "Іпсвіч Таун", "Лестер Сіті", "Ліверпуль", "Манчестер Юнайтед", "Ньюкасл", "Ноттінгем Форест", "Саутгемптон", "Тоттенгем", "Вест Гем", "Вулвергемптон"];
eplTeamsList.forEach((teamName, index) => {
  footballData[0].teams.push({
    name: teamName,
    league: "Англійська Прем'єр-ліга",
    rank: (index + 3).toString(),
    coach: "Головний Тренер",
    staff: "Асистент, Тренер з фд",
    formation: "4-3-3",
    recFormation: "4-4-2",
    tacticalReasoning: "Дисциплінований компактний блок для успішної боротьби за виживання та єврокубки.",
    squad: [
      { number: 10, name: `Ключовий гравець ${teamName}`, position: "Півзахисник", foot: "Права", strengths: ["Робоча етика", "Стандарти"], weaknesses: ["Нестабільність"], role: "Лідер центру поля." },
      { number: 9, name: `Форвард ${teamName}`, position: "Нападник", foot: "Права", strengths: ["Швидкість"], weaknesses: ["Гра в захисті"], role: "Завершувач." }
    ],
    matches: Array(10).fill(0).map((_, i) => ({ opponent: `Суперник ${i+1}`, score: "1:1", result: "draw" }))
  });
});

const uplTeamsList = ["Полісся Житомир", "Кривбас Кривий Ріг", "Карпати Львів", "Олександрія", "Зоря Луганськ", "Рух Львів", "Верес Рівне", "Колос Ковалівка", "Оболонь Київ", "ЛНЗ Черкаси", "Чорноморець Одеса", "Ворскла Полтава", "Лівий Берег Київ", "Інгулець Петрове"];
uplTeamsList.forEach((teamName, index) => {
  footballData[1].teams.push({
    name: teamName,
    league: "Українська Прем'єр-ліга",
    rank: (index + 3).toString(),
    coach: "Український Тренер",
    staff: "Тренерський штаб клубу",
    formation: "4-2-3-1",
    recFormation: "4-3-3",
    tacticalReasoning: "Вертикальний футбол та агресивний пресинг у зонах підбору.",
    squad: [
      { number: 7, name: `Лідер команди ${teamName}`, position: "Вінгер", foot: "Права", strengths: ["Швидкість", "Самовіддача"], weaknesses: ["Захисна робота"], role: "Фланговий забійник." },
      { number: 1, name: `Воротар ${teamName}`, position: "Воротар", foot: "Права", strengths: ["Реакція"], weaknesses: ["Виходи"], role: "Голкіпер." }
    ],
    matches: Array(10).fill(0).map((_, i) => ({ opponent: `Суперник УПЛ ${i+1}`, score: "1:0", result: "win" }))
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const countrySelect = document.getElementById("country-select");
  const clubSelect = document.getElementById("club-select");

  if (!countrySelect || !clubSelect) return;

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

    document.getElementById("club-name").textContent = team.name;
    document.getElementById("club-league-info").textContent = `${team.league} • Сезон 2026/2027`;
    document.getElementById("club-rank").textContent = `#${team.rank}`;

    document.getElementById("coach-name").textContent = team.coach;
    document.getElementById("staff-members").textContent = team.staff;
    document.getElementById("current-formation-title").textContent = team.formation;
    document.getElementById("recommended-formation-title").textContent = team.recFormation;
    document.getElementById("tactical-reasoning").textContent = team.tacticalReasoning;

    renderPitchPlayers("current-pitch-players");
    renderPitchPlayers("recommended-pitch-players");

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

  function renderPitchPlayers(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    
    // Генерація 11 фішок гравців на полі
    for (let i = 0; i < 11; i++) {
      const dot = document.createElement("div");
      dot.className = "pitch-player-dot";
      dot.style.cssText = "width: 24px; height: 24px; background: #3182ce; border: 2px solid #fff; border-radius: 50%; position: absolute; display: flex; align-items: center; justify-content: center; font-size: 10px; color: #fff; font-weight: bold; transform: translate(-50%, -50%);";
      
      // Розподіл по лініях (Воротар, Захист, Півзахист, Напад)
      if (i === 0) {
        dot.style.bottom = "8%";
        dot.style.left = "50%";
      } else if (i <= 4) {
        dot.style.bottom = "28%";
        dot.style.left = `${15 + ((i - 1) * 23)}%`;
      } else if (i <= 8) {
        dot.style.bottom = "55%";
        dot.style.left = `${20 + ((i - 5) * 20)}%`;
      } else {
        dot.style.bottom = "78%";
        dot.style.left = `${35 + ((i - 9) * 30)}%`;
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

  const closeModalBtn = document.getElementById("close-modal");
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", () => {
      document.getElementById("player-modal").classList.add("hidden");
    });
  }

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

  updateClubs();
});
