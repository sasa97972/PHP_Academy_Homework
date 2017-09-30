import React from 'react';
import ReactDOM from 'react-dom';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    renderLink(number, index) {
        return(
            <li key={index} className="nav-item">
                <a className="nav-link" href="#">Link{number}</a>
            </li>
        );
    }

    render() {
       return(
           <nav className="navbar navbar-expand-md fixed-top navbar-dark bd-navbar">
               <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_collapse" aria-controls="navbar_collapse" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"/>
               </button>
               <div className="collapse navbar-collapse flex-row" id="navbar_collapse">
                   <a className="navbar-brand" href="#">Site<span className="hero">L</span>ogo</a>
                   <ul className="navbar-nav mr-auto">
                       {this.props.option.map((a,b) => this.renderLink(a,b))}
                   </ul>
               </div>
           </nav>
       );
    }
}
class ThumbnailList extends React.Component {
    constructor(props) {
        super(props);
    }

    renderBadge(title, number) {
        return (
            <button className="btn btn-primary" type="button">
                {title} <span className="badge">{number}</span>
            </button>
        );
    }

    renderThumbnail(props, index) {
        return <div key={index} className="card col-sm-6 col-md-4">
            <div className="thumbnail">
                <img src={props.imageUrl} alt="..."/>
                <div className="caption">
                    <h3>{props.header}</h3>
                    <p>{props.description}</p>
                    <p className="btn_down">
                        {this.renderBadge(props.title, props.number)}
                    </p>
                </div>
            </div>
        </div>
    }

    render() {
        const list = this.props.option.map((a,b) => this.renderThumbnail(a,b));
        return (
            <div className="container">
                <div className="row">
                    {list}
                </div>
            </div>
        );
    }
}
class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <footer className="footer fixed-bottom">
                <a className="github" href={this.props.option.link}>Github</a>
                <p className="email">{this.props.option.email}</p>
            </footer>
        );
    }
}
class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Header option={this.props.options.headerData}/>
                <ThumbnailList option={this.props.options.thumbnailData}/>
                <Footer option={this.props.options.footerData}/>
            </div>
        );
    }
}

const options = {
    thumbnailData:  [{
        title: 'Show Courses',
        number: 12,
        header: 'Learn React',
        description: 'React is a fantastic new front end library for rendering web pages. React is a fantastic new front end library for rendering web pages.',
        imageUrl: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'
    },{
        title: 'Show Courses',
        number: 25,
        header: 'Learn Gulp',
        description: 'Gulp will speed up your development workflow.  Gulp will speed up your development workflow.  Gulp will speed up your development workflow.',
        imageUrl: 'http://brunch.io/images/others/gulp.png'
    }],
    headerData: [1,2,3,4,5,6],
    footerData: {
        email: 'sasa97973@yandex.ru',
        link: 'https://github.com/sasa97972',
    },
};

ReactDOM.render(
    <App options={options}/>,
    document.querySelector('.container')
);