function loadContentMulti(urls, targetId = 'main-content') {
    const target = document.getElementById(targetId);
    if (!target) return;
  
    urls.forEach(url => {
      fetch(url)
        .then(res => res.text())
        .then(html => {
          const wrapper = document.createElement('div');
          wrapper.innerHTML = html;
          target.appendChild(wrapper);
        })
        .catch(err => console.error(`Failed to load ${url}:`, err));
    });
  }
  