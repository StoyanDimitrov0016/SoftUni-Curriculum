function getArticleGenerator(articles) {
    const div = document.querySelector('#content');

    return function () {
        const articleContent = articles.shift();

        if (articleContent != undefined) {
            const article = document.createElement('article');
            article.textContent = articleContent;
            div.appendChild(article);
        }
    }
}
