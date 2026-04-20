const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -100px 0px', threshold: 0.1 });

    revealElements.forEach(element => revealObserver.observe(element));

    document.getElementById('year').textContent = new Date().getFullYear();

    (() => {
      const phoneLink = document.getElementById('phone-link');
      const emailLink = document.getElementById('email-link');

      if (phoneLink) {
        const parts = ['+33', '7', '50', '42', '77', '98'];
        phoneLink.textContent = `0${parts[1]} ${parts[2]} ${parts[3]} ${parts[4]} ${parts[5]}`;
        phoneLink.href = 'tel:' + parts.join('');
      }

      if (emailLink) {
        emailLink.href = 'mailto:emil30w@gmail.com';
      }
    })();

    (() => {
      const creativeJpgIndexes = new Set([22, 36, 57, 62]);
      const creativeFiles = Array.from({ length: 68 }, (_, index) => {
        const number = index + 1;
        const extension = creativeJpgIndexes.has(number) ? 'jpg' : 'png';
        return `assets/creative/creative-${String(number).padStart(2, '0')}.${extension}`;
      });

      const galleries = {
        uxui: [
          { src: 'assets/uxui-1.webp', alt: 'UX/UI - Maquette Figma Desktop' },
          { src: 'assets/uxui-7.webp', alt: 'UX/UI - Maquette Figma Mobile' },
          { src: 'assets/uxui-8.webp', alt: 'UX/UI - Menu Responsive Mobile Site e-commerce' },
          { src: 'assets/uxui-2.webp', alt: 'UX/UI - Page Produit Site e-commerce' },
          { src: 'assets/uxui-3.webp', alt: 'UX/UI - Exemple Carte Produit Site e-commerce' },
          { src: 'assets/uxui-4.webp', alt: 'UX/UI - Réassurance & UGC Site e-commerce' },
          { src: 'assets/uxui-5.webp', alt: 'UX/UI - Page Fidélité Site e-commerce' },
          { src: 'assets/uxui-6.webp', alt: 'UX/UI - Exemple Asset Personnalisé Site e-commerce' },
          { src: 'assets/uxui-9.webp', alt: 'UX/UI - Optimisation Métadonnées' },
          { src: 'assets/uxui-10.webp', alt: 'UX/UI - Optimisation Images & SEO' },
          { src: 'assets/uxui-11.webp', alt: 'UX/UI - Personnalisation Code' },
          { src: 'assets/uxui-12.webp', alt: 'UX/UI - Autre Exemple De Maquette' }
        ],
        marketing: [
          { src: 'assets/marketing-1.webp', alt: 'Exemple Flux Mail Klaviyo' },
          { src: 'assets/marketing-2.webp', alt: 'Exemples Mails Présentation' },
          { src: 'assets/marketing-3.webp', alt: 'Exemples Mails Divers' },
          { src: 'assets/marketing-4.webp', alt: 'Exemples Mails Hebdo' },
          { src: 'assets/marketing-5.webp', alt: 'Exemples Meta Ads' },
          { src: 'assets/marketing-13.webp', alt: 'Exemples Bannières Site' },
          { src: 'assets/marketing-14.png', alt: 'Itérations De Logos' },
          { src: 'assets/marketing-15.png', alt: 'Création Images Vectorielles' }
        ],
        illu: [
          { src: 'assets/Social-1.webp', alt: 'Exemples Prints, Flyers' },
          { src: 'assets/Social-2.webp', alt: 'Exemples Retouches Photos' },
          { src: 'assets/Social-3.webp', alt: 'Gestion Du Calendrier Editorial' },
          { src: 'assets/Social-4.webp', alt: 'Exemples De Posts' },
          { src: 'assets/Social-5.webp', alt: 'Conception du Hub de Liens' },
          { src: 'assets/Social-6.webp', alt: 'Assemblage Magazine' }
        ],
        creative: creativeFiles.map((src, index) => ({
          src,
          alt: `Portfolio créatif - visuel ${String(index + 1).padStart(2, '0')}`
        }))
      };

      const lightbox = document.getElementById('lightbox');
      if (!lightbox) return;

      const imageEl = lightbox.querySelector('.lightbox-image');
      const captionEl = lightbox.querySelector('.lightbox-caption');
      const counterEl = lightbox.querySelector('.lightbox-counter');
      const thumbsContainer = lightbox.querySelector('.lightbox-thumbs');
      const prevButton = lightbox.querySelector('.lightbox-prev');
      const nextButton = lightbox.querySelector('.lightbox-next');
      let currentGallery = null;
      let currentIndex = 0;

      function updateImage() {
        const item = galleries[currentGallery][currentIndex];
        imageEl.src = item.src;
        imageEl.alt = item.alt || '';
        captionEl.textContent = item.alt || '';
        counterEl.textContent = `${currentIndex + 1} / ${galleries[currentGallery].length}`;

        Array.from(thumbsContainer.children).forEach((thumb, index) => {
          thumb.classList.toggle('is-active', index === currentIndex);
        });
      }

      function buildThumbs() {
        thumbsContainer.innerHTML = '';

        galleries[currentGallery].forEach((item, index) => {
          const button = document.createElement('button');
          const thumbImage = document.createElement('img');

          button.className = 'lightbox-thumb';
          button.type = 'button';
          button.setAttribute('aria-label', `Ouvrir l’image ${index + 1}`);
          thumbImage.src = item.src;
          thumbImage.alt = item.alt || '';
          thumbImage.loading = 'lazy';
          thumbImage.decoding = 'async';

          button.appendChild(thumbImage);
          button.addEventListener('click', () => {
            currentIndex = index;
            updateImage();
          });

          thumbsContainer.appendChild(button);
        });
      }

      function openLightbox(key) {
        if (!galleries[key]) return;

        currentGallery = key;
        currentIndex = 0;
        buildThumbs();
        updateImage();
        lightbox.classList.add('is-open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
      }

      function closeLightbox() {
        lightbox.classList.remove('is-open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
      }

      document.querySelectorAll('.project-link').forEach(link => {
        link.addEventListener('click', event => {
          event.preventDefault();
          openLightbox(link.getAttribute('data-gallery'));
        });
      });

      prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + galleries[currentGallery].length) % galleries[currentGallery].length;
        updateImage();
      });

      nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % galleries[currentGallery].length;
        updateImage();
      });

      lightbox.querySelectorAll('[data-lightbox-close]').forEach(button => {
        button.addEventListener('click', closeLightbox);
      });

      document.addEventListener('keydown', event => {
        if (!lightbox.classList.contains('is-open')) return;
        if (event.key === 'Escape') closeLightbox();
        if (event.key === 'ArrowLeft') prevButton.click();
        if (event.key === 'ArrowRight') nextButton.click();
      });
    })();


    (() => {
      const header = document.querySelector('.site-header');
      const toggle = document.querySelector('.menu-toggle');
      const mobileMenu = document.getElementById('mobile-menu');

      if (!header || !toggle || !mobileMenu) return;

      const setMenuState = isOpen => {
        header.classList.toggle('menu-open', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));
        toggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
        mobileMenu.setAttribute('aria-hidden', String(!isOpen));
      };

      setMenuState(false);

      toggle.addEventListener('click', () => {
        const isOpen = toggle.getAttribute('aria-expanded') === 'true';
        setMenuState(!isOpen);
      });

      mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => setMenuState(false));
      });

      document.addEventListener('keydown', event => {
        if (event.key === 'Escape') {
          setMenuState(false);
        }
      });

      window.addEventListener('resize', () => {
        if (window.innerWidth > 1024) {
          setMenuState(false);
        }
      });
    })();

    (() => {
      const track = document.querySelector('.videos-track');
      const items = document.querySelectorAll('.video-item');
      const prevButton = document.querySelector('.videos-prev');
      const nextButton = document.querySelector('.videos-next');

      if (!track || items.length === 0 || !prevButton || !nextButton) return;

      let current = 0;

      function goTo(index) {
        current = (index + items.length) % items.length;
        track.style.transform = `translateX(-${current * 100}%)`;
        items.forEach((item, itemIndex) => {
          item.classList.toggle('is-active', itemIndex === current);
        });
      }

      prevButton.addEventListener('click', () => goTo(current - 1));
      nextButton.addEventListener('click', () => goTo(current + 1));
    })();
