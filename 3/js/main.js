const MIN_PHOTO = 1;
const MAX_PHOTO = 25;
const MIN_LIKES = 15;
const MAX_LIKES = 200;

const NAMES = [
  "Адиль",
  "Хаджимусса",
  "Бауук",
  "Асланали",
  "Тувмак",
  "Тауби",
  "Самат",
  "Гирока",
  "Хаджимусса",
  "Таусолтан",
  "Рахмат",
  "Каммо",
  "Наук",
  "Темир",
  "Якуб",
  "Ахмат",
  "Домалай",
  "Курдан",
  "Аккуш",
  "Бузджигит",
  "Мустафа",
  "Таумырза",
  "Хутта",
  "Чотча",
  "Мавлют",
];

console.log(NAMES.length);

const DESCRIPTION = [
  "Даже близкие не читают мысли. Выражать чувства — твоя отвественность",
  "То чувство, когда ты родился красавчиком 😎",
  "Я со своим лучшим другом.",
  "У меня есть цели. И я иду к ним, несмотря на все преграды",
  "Каждый мужчина должен уметь сделать из своей женщины королеву, тогда он сам станет для неё королём» 👑👸🤴",
  "Пятница развратница",
  "Мозги — очень хорошая вещь, жаль не все ими умеют пользоваться…» 😜",
  "«Пошёл, увидел, забыл, что хотел.» 😅",
  "В твоих глазах можно утонуть.» 👀🙆‍♀️",
  "Хорошо там, где меня нет… Но ничего, я и туда доберусь!",
  "Страшнее фотографии в паспорте может быть только её ксерокопия.",
  "Бегаю ли я по утрам? Конечно. Еще и с криками: «Блин!! Проспал!!!»",
  "Хороший друг дешевле психотерапии.",
  "У каждого есть шанс на ошибку, но у меня безлимит.",
  "Жeнcкaя лoгикa – этo твepдaя yвepeннocть в тoм, чтo любyю oбъeктивнyю peaльнocть мoжнo пpeoдoлeть жeлaниeм.",
  "Если бы у меня было чувство юмора, я бы придумал подпись посмешнее.",
  "Похоже у меня аллергия на утро",
  "От души посмеяться и вволю выспаться – два лучших лекарства от всего на свете",
  "Деньги тоже страдают, оттого, что у них нет меня.",
  "Помните: вы единственный человек, который может наполнить ваш мир солнечным светом.",
  "Всегда начинайте свой день с хороших людей и кофе.",
  "Будьте счастливы в этот момент, потому что этот момент — и есть ваша жизнь",
  "Я пыталася заниматься йогой, но в позе лотоса уснул.",
  "Всегда помните: вы живете только один раз.",
  "Улыбка — красивая кривая, которая делает мир прочнее.",
];

console.log(DESCRIPTION.length);

const COMMENTS = [
  "Всё отлично!",
  "В целом всё неплохо. Но не всё.",
  "Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально",
  "Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.",
  "Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.",
  "Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!",
];

const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const checkStringLength = (string, length) => {
  return string.length <= length;
};

const getRandomArrayElements = (element) => {
  return element[getRandomPositiveInteger(0, element.length - 1)]; //возвращает рандомный индекс для элементов массива
};

/*const myPhoto =  {
  id: getRandomPositiveInteger(MIN_PHOTO, MAX_PHOTO),
  url: "photos/" + getRandomPositiveInteger(MIN_PHOTO, MAX_PHOTO) + ".jpg",
  description: getRandomArrayElements(DESCRIPTION),
  likes: getRandomPositiveInteger(MIN_PHOTO, MAX_PHOTO),
  comments: [
    {
      id: getRandomPositiveInteger(MIN_PHOTO, MAX_PHOTO),
      avatar:
        "img/avatar-" + getRandomPositiveInteger(MIN_PHOTO, MAX_PHOTO) + ".svg",
      message: getRandomArrayElements(COMMENTS),
      name: getRandomArrayElements(NAMES),
    }
  ]
}; */

const getMyPhoto = () => {
  return {
    id: getRandomPositiveInteger(MIN_PHOTO, MAX_PHOTO),
    url: "photos/" + getRandomPositiveInteger(MIN_PHOTO, MAX_PHOTO) + ".jpg",
    description: getRandomArrayElements(DESCRIPTION),
    likes: getRandomPositiveInteger(MIN_PHOTO, MAX_PHOTO),
    comments: [
      {
        id: getRandomPositiveInteger(MIN_PHOTO, MAX_PHOTO),
        avatar:
          "img/avatar-" +
          getRandomPositiveInteger(MIN_PHOTO, MAX_PHOTO) +
          ".svg",
        message: getRandomArrayElements(COMMENTS),
        name: getRandomArrayElements(NAMES),
      },
    ],
  };
};

console.log(getMyPhoto());

/*
РАЗОБРАТЬ ПОЧЕМУ НЕ ПОЛУЧИЛОСЬ!
const myPhotos = [];
for (let i =0; i <= MAX_PHOTO.length -1; i++) {
  myPhotos[i] = myPhotos.push(createMyPhoto());
};

console.log(myPhotos); */

const myPhotos = Array.from({ length: MAX_PHOTO }, getMyPhoto);
console.log(myPhotos);