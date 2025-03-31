// js/loadContent.js

function loadContent(page) {
    fetch(page)
      .then(res => res.text())
      .then(html => {
        document.getElementById('real-content').innerHTML = html;
        window.history.pushState(null, '', '#' + page);
      })
      .catch(err => {
        document.getElementById('real-content').innerHTML = '<p>Error loading page.</p>';
      });
  }
  
  // Optional: handle back/forward navigation
  window.addEventListener('popstate', () => {
    const page = location.hash.substring(1) || 'home.html';
    loadContent(page);
  });
  