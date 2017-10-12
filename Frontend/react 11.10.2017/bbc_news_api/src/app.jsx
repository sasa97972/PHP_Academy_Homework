import React, {Component} from 'react';

export default class App extends Component {
    render() {
        return (
            <div>
                <NewsList/>
            </div>
        );
    }
};

const Post = (props) => {
    return(
        <div className="post">
            <h2 className="post__title">{props.post.title}</h2>
            <div className="post__image-wrap"><img className="post__image" src={props.post.img}/></div>
            <p className="post__description">{props.post.description}</p>
            <div className="post__info">
                <a className="post__link" href={props.post.link}>Read more</a>
                <p className="post__date"> Publication date: {props.post.date}</p>
            </div>
        </div>
    );
};

class NewsList extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            news: [],
            searchString: "",
            message: "Идет загрузка новостей..."
        });
    }
    handleChange(e){
        this.setState({searchString: e.target.value});
    }
    componentDidMount() {
        const self = this;
        const url = "https://newsapi.org/v1/articles?source=bbc-news&sortBy=top&" +
            "apiKey=73b5567dd14c4d65b6fa10c4eb35cf1b";

        $.ajax({
            method: "GET",
            url: url,
            dataType: "json"
        }).done(function( result ) {
            const news = result.articles.map((post) => {
                return {
                    link: post.url,
                    img: post.urlToImage,
                    description: post.description,
                    title: post.title,
                    date: post.publishedAt
                };

            });
            self.setState({ news: news, message: "По вашему запросу ничего не найдено" });
        });
    }
    render() {
        let news = this.state.news,
              searchString = this.state.searchString.trim().toLowerCase();

        if(searchString.length > 0){
            news = news.filter(function(post){
                return post.title.toLowerCase().match( searchString );
            });
        }

        return(
            <div>
                <p className="search">
                    <label htmlFor="search" className="search__label">Search news: </label>
                    <input type="text" id="search" className="search__input" value={this.state.searchString} onChange={(e) => this.handleChange(e)}/>
                </p>
                {news.length > 0 ?
                    <div className="post__wrapper">
                        {news.map((post, index) => <Post key={index} post={post}/>)}
                    </div>
                    :
                    <h2>{this.state.message}</h2>
                }
            </div>
        );
    }
}