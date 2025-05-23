const users = [
  {
    name: "Микола",
    age: 22,
    city: "Харків",
    favoriteColors: ["жовтий", "синій"],
    isStudent: true,
    grades: [100, 97, 89],
  },
  {
    name: "Олег",
    age: 30,
    city: "Київ",
    favoriteColors: ["зелений", "рожевий"],
    isStudent: false,
    grades: [60, 73, 88],
  },
  {
    name: "Анна",
    age: 19,
    city: "Львів",
    favoriteColors: ["жовтий", "білий"],
    isStudent: true,
    grades: [100, 90, 100],
  },
  {
    name: "Олена",
    age: 19,
    city: "Дніпро",
    favoriteColors: ["чорний"],
    isStudent: true,
    grades: [60, 55, 49],
  },
];

function greetUser(user) {
  console.log(`\nПривіт, ${user.name} з міста ${user.city}!`);
}

function averageGrade(grades) {
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

function performance(average) {
  if (average >= 85) return "Відмінно";
  else if (average >= 60) return "Добре";
  else return "Задовільно";
}

function formatColors(colors) {
  return colors.join(", ");
}

const square = (x) => x * x;
const double = (x) => x * 2;
const isEven = (x) => x % 2 === 0;

console.log("\n=== Аналіз користувачів: for ===");
for (let i = 0; i < users.length; i++) {
  const user = users[i];
  processUser(user);
}

console.log("\n=== Аналіз користувачів: for...of ===");
for (const user of users) {
  processUser(user);
}

console.log("\n=== Аналіз користувачів: forEach ===");
users.forEach((user) => processUser(user));

function processUser(user) {
  greetUser(user);
  const avg = averageGrade(user.grades);
  console.log("Середній бал:", avg.toFixed(2));
  console.log("Оцінка:", performance(avg));
  console.log(
    `Ім'я: ${user.name}, Місто: ${user.city}, Студент: ${user.isStudent}`
  );
  console.log("Улюблені кольори:", formatColors(user.favoriteColors));
  const message = user.grades.some((g) => g < 60)
    ? "Потрібна перездача"
    : "Хвостів немає";
  console.log("Статус:", message);
  console.log("--------------------");
}

console.log("\nКвадрат 5:", square(3));
console.log("Подвоїти 9:", double(7));
console.log("Чи парне 8:", isEven(8));
console.log("Чи парне 9:", isEven(9));
