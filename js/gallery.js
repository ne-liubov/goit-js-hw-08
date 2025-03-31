const images = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg',
      description: 'Hokkaido Flower',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
      description: 'Container Haulage Freight',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
      description: 'Aerial Beach View',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
      description: 'Flower Blooms',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
      description: 'Alpine Mountains',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
      description: 'Mountain Lake Sailing',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
      description: 'Alpine Spring Meadows',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
      description: 'Nature Landscape',
    },
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
      description: 'Lighthouse Coast Sea',
    },
];


const galleryList = document.querySelector(".gallery");


// вставляє в HTML після виконання map та join  
galleryList.innerHTML = images

// новий масив за допомогою шаблонного рядка
  .map(

// деструктуризація
    ({preview, original, description}) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src='${preview}'
          data-source='${original}'
          alt='${description}'
        />
        </a>
      </li>`
  )

// склейка в один рядок
  .join("");


// клік по img
galleryList.addEventListener('click', event => {
  

// заборона відкриття в іншому вікні
  event.preventDefault();


// перевірка кліку по img, 
// event.target.tagName - елемент, по якому клікнули
  if (event.target.tagName === 'IMG') {


// event.target.dataset.source - оригінальне img
    const imageOriginal = event.target.dataset.source;


// пошук (find) оригінальної img в початковому масиві (images)
    const imageInfo = images.find(el => el.original === imageOriginal);


// відкриття модалки, вставка інфи оригінальної img
    const instance = basicLightbox.create(`
      <img src="${imageOriginal}" width="1112" height="640">
      <p class="image-dscr">${imageInfo.description}</p>
    `);
    
    instance.show();
  }
});