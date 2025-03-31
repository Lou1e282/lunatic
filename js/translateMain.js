let translated = false;

document.getElementById('translate-toggle').addEventListener('click', (e) => {
  e.preventDefault(); // prevent page reload
  const data = JSON.parse(document.getElementById('translation-data').textContent);

  const navLabels = ['home', 'articles', 'interviews', 'events', 'rip', 'playlists', 'info'];
  const navText = {
    en: ['Home', 'Articles', 'Interviews', 'Events', 'RIP', 'Playlists', 'Info'],
    zh: navLabels.map(key => data.nav[key])
  };

  document.title = translated ? "Lunatic Webzine" : data.title;

  // Update nav menu (first 7 items)
  const navLinks = document.querySelectorAll('.main-nav ul li a');
  navLinks.forEach((link, i) => {
    if (i < 7) link.textContent = translated ? navText.en[i] : navText.zh[i];
  });

  // Search Box
  document.querySelector('.search-box h3').textContent = translated ? "Search" : data.search.title;
  document.querySelector('.search-box input').placeholder = translated ? "Search..." : data.search.placeholder;
  const select = document.querySelector('.search-box select');
  const enOptions = ["All categories", "Articles", "Interviews", "Events", "Photos", "Interviews"];
  const zhOptions = [
    data.search.categories.all,
    data.search.categories.albums,
    data.search.categories.compilations,
    data.search.categories.dvds,
    data.search.categories.zines,
    data.search.categories.interviews
  ];
  for (let i = 0; i < select.options.length; i++) {
    select.options[i].textContent = translated ? enOptions[i] : zhOptions[i];
  }
  document.querySelector('.search-box button').textContent = translated ? "Go!" : data.search.button;

  // Categories
  document.querySelector('.categories h3').textContent = translated ? "Categories" : data.categories.title;
  const catItems = document.querySelectorAll('.categories ul li a');
  const enCats = ["Articles", "Interviews", "Events", "Articles (34)", "Photos", "Playlists (23)", "RIP (xxx)"];
  const zhCats = [
    data.categories.articles,
    data.categories.interviews,
    data.categories.events,
    data.categories.articlesCount,
    data.categories.photos,
    data.categories.playlists,
    data.categories.rip
  ];
  catItems.forEach((link, i) => {
    link.textContent = translated ? enCats[i] : zhCats[i];
  });

  // Latest Updates
  document.querySelector('.latest-updates h3').textContent = translated ? "Latest Updates" : data.latestUpdates.title;
  const updates = document.querySelectorAll('.latest-updates ul li a');
  const enUpdates = [
    "Mar 18, 2025 - New Interview Posted",
    "Mar 17, 2025 - Album Review",
    "Mar 15, 2025 - Tourdates Updated"
  ];
  const zhUpdates = [
    data.latestUpdates.update1,
    data.latestUpdates.update2,
    data.latestUpdates.update3
  ];
  updates.forEach((link, i) => {
    link.textContent = translated ? enUpdates[i] : zhUpdates[i];
  });

  // Footer
  const footer = document.querySelector('.site-footer p');
  footer.innerHTML = translated
    ? `&copy; 2025 Lunatic Webzine. All rights reserved. 
       | <a href="#">Privacy Policy</a> | <a href="#">Cookie Settings</a>`
    : `
      ${data.footer.copyright}
      | <a href="#">${data.footer.privacyPolicy}</a>
      | <a href="#">${data.footer.cookieSettings}</a>
    `;

  translated = !translated;
});