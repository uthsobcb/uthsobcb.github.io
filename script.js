const blogContainer = document.getElementById('maincon');

const apiUrl = "https://dev.to/api/articles?username=uthsob_cb";

fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
        data.forEach((article) => {
            // Create elements for each article
            const articleElement = document.createElement('div');
            articleElement.classList.add('card');

            const titleElement = document.createElement('a');
            titleElement.href = article.url;
            titleElement.classList.add('blog-title');
            titleElement.textContent = article.title;

            const dateElement = document.createElement('small');
            dateElement.classList.add('blog-footer');
            dateElement.textContent = new Date(article.published_at).toLocaleDateString();

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = article.description;

            articleElement.appendChild(titleElement);
            articleElement.appendChild(dateElement);
            articleElement.appendChild(descriptionElement);

            blogContainer.appendChild(articleElement);
        });
    })
    .catch((err) => {
        console.log(err);
    });
