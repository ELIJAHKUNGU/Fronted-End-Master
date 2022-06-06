fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data = data.map(data => {
            const { id, title, thumbnailUrl } = data;
            return `<li>
           <a href="${id}">
           <span>${title}</span>
           <img src="${thumbnailUrl}" alt="${title}">
           </a>
           </li>`
        }).join('');
        document.getElementById('response').innerHTML = data;
    })