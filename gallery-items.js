const gallery = [
    {
      preview:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
      original:
        'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
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

  const imageContainer = document.querySelector('.js-gallery');
  const cardsMarkup = createImagesMarkup(gallery);
  const itemImgContainer = imageContainer.querySelectorAll('li')
  const modalWIndow = document.querySelector('.js-lightbox');
  const modalBtnClouse = document.querySelector('[data-action="close-lightbox"]');
  const modalImg = document.querySelector('.lightbox__image');
  const overlay = document.querySelector('.lightbox__overlay');
  let imgEl = " ";
  let indexEl = 0;

  imageContainer.insertAdjacentHTML('beforeend', cardsMarkup);

  imageContainer.addEventListener('click', onImagesClick);

  modalBtnClouse.addEventListener('click', clousedModalWondow);

  window.addEventListener('keydown', onEscKeyPress);

  overlay.addEventListener('click', onOverlayClick );
  window.addEventListener('keydown',  scrollingImages);

  
  function createImagesMarkup(gallery) {
    return gallery
      .map(({ preview, original, description }) => {
        return `
        <li class = "gallery__item gallery__link" > <img class = "gallery__image" src = "${preview}", alt = "${description}"></li>` }).join('');
  };

  function onImagesClick(evt) {
    const isImagesEl = evt.target.classList.contains('gallery__image');
      if (!isImagesEl) {
      console.log('click');
      return;
    };
      imgEl = evt.target;//ссылка на текущий элемент на которий кликнули
        const parentImgCard = imgEl.closest('.gallery__item');
        indexEl = gallery.indexOf( gallery.find(arr => arr.preview === imgEl.src));
        setImagesEl();
        onBigImmagesRef()

  };

function onBigImmagesRef () {
    const BigImgRes =  gallery.map(({ preview, original, description }) => {
    // console.log(original);
      if (imgEl.src === preview){
       return modalImg.src = original;
          }
  })
  };

function setImagesEl() {
    modalWIndow.classList.add('is-open')
 };

function clousedModalWondow() {
  
      modalWIndow.classList.remove('is-open');
      modalImg.src = " ";

   };
  function onEscKeyPress(evt) {
     console.log(evt);
      if (evt.code === 'Escape') {
        clousedModalWondow()
    }
  };

  function onOverlayClick(evt) {
    if (evt.currentTarget === evt.target) {
          clousedModalWondow();
    }
  }

function scrollingImages(evt) {
if (evt.code === 'ArrowRight') {
  galleryImageNext()
} else if (evt.code === 'ArrowLeft') {
  galleryImagePrevious()
};};

function galleryImageNext(){
  indexEl += 1;
  if (indexEl == gallery.length) {
    indexEl = 0;
  }
  modalImg.src = " ";
  modalImg.src = gallery[indexEl].original;
  console.log(indexEl);
};

function galleryImagePrevious(){
  indexEl -= 1;
  if (indexEl > 0) {
    
    
    modalImg.src = " ";
    modalImg.src = gallery[indexEl].original;
    console.log(indexEl);
   return
  }
  else 
  modalImg.src = " ";
  modalImg.src = gallery[0].original;
  indexEl = gallery.length;

};

console.log(indexEl);

