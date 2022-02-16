const data = [
  {
    num: "1",
    name: "Большой шар с рисунком",
    count: "2",
    year: "1960",
    shape: "шар",
    color: "желтый",
    size: "большой",
    favorite: false,
    categories: ["petfriendly", "handmade"],
  },
  {
    num: "2",
    name: "Зелёный шар с цветами",
    count: "5",
    year: "2000",
    shape: "шар",
    color: "зелёный",
    size: "большой",
    favorite: false,
  },
  {
    num: "3",
    name: "Красный матовый шар",
    count: "3",
    year: "1990",
    shape: "шар",
    color: "красный",
    size: "большой",
    favorite: false,
  },
  {
    num: "4",
    name: "Сосулька красная",
    count: "2",
    year: "1980",
    shape: "фигурка",
    color: "красный",
    size: "большой",
    favorite: false,
  },
  {
    num: "5",
    name: "Красный виноград",
    count: "4",
    year: "1980",
    shape: "фигурка",
    color: "красный",
    size: "средний",
    favorite: true,
  },
  {
    num: "6",
    name: "Красный шар с рисунком",
    count: "6",
    year: "2010",
    shape: "шар",
    color: "красный",
    size: "большой",
    favorite: false,
    categories: ["petfriendly"],
  },
  {
    num: "7",
    name: "Молочно-белый шар",
    count: "12",
    year: "1960",
    shape: "шар",
    color: "белый",
    size: "средний",
    favorite: true,
  },
  {
    num: "8",
    name: "Красный шар",
    count: "10",
    year: "2010",
    shape: "шар",
    color: "красный",
    size: "большой",
    favorite: false,
    categories: ["petfriendly"],
  },
  {
    num: "9",
    name: "Колокольчик старинный",
    count: "2",
    year: "1950",
    shape: "колокольчик",
    color: "белый",
    size: "большой",
    favorite: false,
  },
  {
    num: "10",
    name: "Белый шар ретро",
    count: "7",
    year: "1960",
    shape: "шар",
    color: "белый",
    size: "большой",
    favorite: false,
  },
  {
    num: "11",
    name: "Шишка еловая белая",
    count: "11",
    year: "1960",
    shape: "шишка",
    color: "белый",
    size: "малый",
    favorite: false,
  },
  {
    num: "12",
    name: "Белый шар с цветами",
    count: "5",
    year: "1980",
    shape: "шар",
    color: "белый",
    size: "большой",
    favorite: false,
  },
  {
    num: "13",
    name: "Шар расписной Река",
    count: "3",
    year: "1970",
    shape: "шар",
    color: "синий",
    size: "большой",
    favorite: true,
  },
  {
    num: "14",
    name: "Шар расписной Деревня",
    count: "4",
    year: "1970",
    shape: "шар",
    color: "синий",
    size: "большой",
    favorite: true,
  },
  {
    num: "15",
    name: "Колокольчик расписной",
    count: "3",
    year: "1970",
    shape: "колокольчик",
    color: "синий",
    size: "средний",
    favorite: false,
  },
  {
    num: "16",
    name: "Шишка расписная Пейзаж",
    count: "3",
    year: "1970",
    shape: "шишка",
    color: "синий",
    size: "средний",
    favorite: true,
  },
  {
    num: "17",
    name: "Шишка расписная",
    count: "7",
    year: "1970",
    shape: "шишка",
    color: "красный",
    size: "средний",
    favorite: false,
  },
  {
    num: "18",
    name: "Желтый шар с бантом",
    count: "2",
    year: "2010",
    shape: "шар",
    color: "желтый",
    size: "большой",
    favorite: false,
  },
  {
    num: "19",
    name: "Желтый шар с паетками",
    count: "12",
    year: "1980",
    shape: "шар",
    color: "желтый",
    size: "большой",
    favorite: false,
  },
  {
    num: "20",
    name: "Красный шар с бантом",
    count: "8",
    year: "1950",
    shape: "шар",
    color: "красный",
    size: "средний",
    favorite: true,
  },
  {
    num: "21",
    name: "Красный шар с звёздами",
    count: "4",
    year: "1970",
    shape: "шар",
    color: "красный",
    size: "большой",
    favorite: true,
  },
];

// Function #1  Функцию, которая возвращает массив, состоящий только из названий игрушек.

const returnMassiveOfNames = (array) => {
  return array.map((item) => item.name);
};

// Function #2 Функцию, которая возвращает массив, состоящий только из имен игрушек произвденных позже 2000г.

const returnMassiveOfNamesAfter2000 = (array) => {
  const result = [];
  array.forEach((item) => {
    if (item.year > 2000) {
      result.push(item.name);
    }
  });
  return result;
};

// Function #3 Функцию, которая возвращает массив, состоящий только из объектов вида: shape, name

const deleteUselessProperties = (array) => {
  return array.map((item) => {
    delete item.year;
    delete item.count;
    delete item.num;
    delete item.size;
    delete item.color;
    delete item.favorite;
    delete item.categories;
    return array;
  });
};

// Function #4 Функцию, которая подсчитывает колличество игрушек каждого вида.

let newObj = {};
const countToysByShape = (array) => {
  array.map((item) => {
    if (newObj[item.shape] === undefined) {
      newObj[item.shape] = 1;
    } else {
      newObj[item.shape]++;
    }
  });
  return newObj;
};

const countToysByShape_2 = (array) => {
  return array.reduce((acc, item) => {
    if (acc[item.shape] === undefined) {
      acc[item.shape] = 1;
    } else {
      acc[item.shape]++;
    }
    return acc;
  }, {});
};
