// Yinuo Huang — personal site
// Small, dependency-free interactions: scroll reveal, sticky nav, lightbox.

(function () {
  const nav = document.getElementById('nav');
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // ---- reveal on scroll ----
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('in'));
  }

  // ---- lightbox ----
  const box = document.getElementById('lightbox');
  const boxImg = document.getElementById('lightbox-img');
  const boxTitle = document.getElementById('lightbox-title');
  const boxMeta = document.getElementById('lightbox-meta');
  const cards = Array.from(document.querySelectorAll('.card__btn'));
  let index = 0;

  function render(i) {
    index = (i + cards.length) % cards.length;
    const btn = cards[index];
    boxImg.src = btn.dataset.full;
    boxImg.alt = btn.querySelector('img')?.alt || '';
    boxTitle.textContent = btn.dataset.title || '';
    boxMeta.textContent = btn.dataset.meta || '';
  }

  function open(i) {
    render(i);
    box.hidden = false;
    document.body.style.overflow = 'hidden';
    box.querySelector('.lightbox__close').focus();
  }

  function close() {
    box.hidden = true;
    document.body.style.overflow = '';
    cards[index]?.focus();
  }

  cards.forEach((btn, i) => btn.addEventListener('click', () => open(i)));
  box.querySelector('.lightbox__close').addEventListener('click', close);
  box.querySelector('.lightbox__nav--prev').addEventListener('click', () => render(index - 1));
  box.querySelector('.lightbox__nav--next').addEventListener('click', () => render(index + 1));
  box.addEventListener('click', (e) => { if (e.target === box) close(); });

  document.addEventListener('keydown', (e) => {
    if (box.hidden) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') render(index - 1);
    if (e.key === 'ArrowRight') render(index + 1);
  });
})();
