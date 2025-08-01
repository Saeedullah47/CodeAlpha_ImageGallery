const filterButtons = document.querySelectorAll('.filter-btn');
const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.querySelector('.lightbox');
const lightboxImg = document.querySelector('.lightbox-image');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Filter functionality
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    galleryItems.forEach(item => {
      const category = item.dataset.category;
      if (filter === 'all' || filter === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Lightbox functionality
galleryItems.forEach((item, index) => {
  const img = item.querySelector('img');
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    currentIndex = index;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  const nextImg = galleryItems[currentIndex].querySelector('img');
  lightboxImg.src = nextImg.src;
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  const prevImg = galleryItems[currentIndex].querySelector('img');
  lightboxImg.src = prevImg.src;
});
