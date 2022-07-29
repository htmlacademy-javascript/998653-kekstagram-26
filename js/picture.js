//импортируем функцию для генерации массива фото
import { myPhotos } from './data.js';

// ищем шаблон
const pictureTemplate = document.querySelector('#picture').content;
const newPictureTemplate = pictureTemplate.querySelector('.picture');

//ищем контейнер
const pictureContainer = document.querySelector('pictures');

//создадим массив с фото и наполним его данными
const allPhotos = myPhotos();

const allPhotosFragment = document.createDocumentFragment();

// для каждого элемента этого массива применим шаблон
allPhotos.forEach(() => {
  // копируем картинку
  const newPicture = newPictureTemplate.cloneNode(true);

  //вставим данные в шаблон

  //адрес изображения
  newPicture.querySelector('.picture__img').style.src = url;

  //количество лайков
  newPicture.querySelector('.picture__likes').textContent = likes;

  //количество комментов
  newPicture.querySelector('.picture__comment').textContent = comments.length;

  // отрисовываем новую картинку в конец документ-фрагмента
  allPhotosFragment.appendChild(newPicture);
});

// добавляем фрагмент в контейнер
pictureContainer.appendChild(allPhotosFragment);
