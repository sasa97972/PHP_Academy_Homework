window.addEventListener("load", init, false);

function init () {
	api.start();
}

var api = {

	start: function () {
		this.url = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&apiKey=ca473cb09a264124a90c46ec1689f664";
		this.xhttp = new XMLHttpRequest();
		this._getAPI();
	},


	_getAPI: function () {
		this.xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
			var data = JSON.parse(api.xhttp.responseText).articles;
			var posts = data.map(api._prepareData);
			console.log(posts);
			api._getTemplate(posts);
		  }
		};
		this.xhttp.open("GET", this.url, true);
		this.xhttp.send();
	},

	_prepareData: function (post) {
		return {
			link: post.url,
			img: post.urlToImage,
			description: post.description,
			title: post.title,
			date: post.publishedAt
		}
	},

	_getTemplate: function(posts) {
		var template = posts.reduce(function(tmpl, post){
			tmpl +=  `<div class="post">
							<h2 class="post__title">${post.title}</h2>
							<img class="post__image" src=${post.img}>
							<p class="post__description">${post.description}</p>
							<a class="post__link" href=${post.link}>Read more</a>
							<p class="post__date"> Publication date: ${post.date}</p>
							<hr> <br> <br>
						</div>
					 `;
				return tmpl;
		}, '');
		document.getElementById('api__articles').innerHTML = template;
	}
	
}