'use strict';

// タブメニュー
{
  const menuItems = document.querySelectorAll('.tab li a');
  const contents = document.querySelectorAll('.content');
  const homeclick = document.getElementById('homeclick');

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click', e => {
      e.preventDefault();

      menuItems.forEach(item => {
        item.classList.remove('active');
      });
      clickedItem.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
    homeclick.addEventListener('click', () => {
      window.location.href = "index.html"
    });
  });
}


// サイトメニュー
{
  const instrument = document.getElementById('instrument');
  const rehearsal = document.getElementById('rehearsal');
  const clinic = document.getElementById('clinic');
  const map = document.getElementById('map');
  const camp = document.getElementById('camp');
    instrument.addEventListener('click', () => {
      window.location.href = "https://uw0606.github.io/uwtools/"
   });
   rehearsal.addEventListener('click', () => {
      window.location.href = "https://uw0606.github.io/uwrehearsal/"
   });
    clinic.addEventListener('click', () => {
      window.location.href = "https://uw0606.github.io/uwclinic/"
   });
    map.addEventListener('click', () => {
      window.location.href = "https://uw0606.github.io/uwmap/"
   });
    camp.addEventListener('click', () => {
      window.location.href = "https://uw0606.github.io/nobutocamp/"
   });
}

// サイトメニューアニメーション

{
  function callback(entries, obs) {
    entries.forEach(entry => {
      if(!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });

  }

  const observer = new IntersectionObserver(callback, {
    threshold: 0.2,
  });

  document.querySelectorAll('.animate').forEach(el => {
    observer.observe(el);
  });


  // const sitemenu = document.querySelector('.animate');
  // sitemenu.addEventListener('mouseover', () => {
  //   sitemenu.style.background = 'rgb(231, 231, 231, .5)';
  // }, false);
  // sitemenu.addEventListener('mouseleave', () => {
  //   sitemenu.style.background = 'rgb(231, 231, 231)';
  // }, false);


  // const sitemenu1 = document.querySelector('.animate.delay1');
  // sitemenu1.addEventListener('mouseover', () => {
  //   sitemenu1.style.background = 'rgb(231, 231, 231, .5)';
  // }, false);
  // sitemenu1.addEventListener('mouseleave', () => {
  //   sitemenu1.style.background = 'rgb(231, 231, 231)';
  // }, false);

  // const sitemenu2 = document.querySelector('.animate.delay');
  // sitemenu2.addEventListener('mouseover', () => {
  //   sitemenu2.style.background = 'rgb(231, 231, 231, .5)';
  // }, false);
  // sitemenu2.addEventListener('mouseleave', () => {
  //   sitemenu2.style.background = 'rgb(231, 231, 231)';
  // }, false);
}