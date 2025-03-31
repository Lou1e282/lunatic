function loadContentFromJSON(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const html = `
          <article>
            <h2>${data.title}</h2>
            <p><strong>By:</strong> ${data.author} | <em>${data.date}</em></p>
            <div>${data.body}</div>
          </article>
        `;
        document.getElementById('main-content').innerHTML = html;
        window.history.pushState(null, '', '#' + url);
      })
      .catch(() => {
        document.getElementById('main-content').innerHTML = '<p>Article not found.</p>';
      });
  }
  