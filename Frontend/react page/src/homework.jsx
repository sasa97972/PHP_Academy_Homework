import React from 'react';

const Link = (props) => {
    return(
        <li className="nav-item">
            <a className="nav-link" href="#">Link{props.number}</a>
        </li>
    );
};

class Header extends React.Component {
    constructor(props) {
        super(props);
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
                       {
                           this.props.option.map((number, index) => {
                               return <Link key={index} number={number} />
                           })
                       }
                   </ul>
               </div>
           </nav>
       );
    }
}

const Badge = (props) => {
    return (
        <button className="btn btn-primary" type="button">
            {props.title} <span className="badge">{props.number}</span>
        </button>
    );
};

const ThumbNail = (props) => {
    return (
        <div className="card col-sm-6 col-md-4">
            <div className="thumbnail">
                <img src={props.options.imageUrl} alt="..."/>
                <div className="caption">
                    <h3>{props.options.header}</h3>
                    <p>{props.options.description}</p>
                    <p className="btn_down">
                        <Badge title={props.options.title} number={props.options.number} />
                    </p>
                </div>
            </div>
        </div>
    );
};

class ThumbnailList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.props.option.map((item, index) => {
                        return <ThumbNail options={item} index={index} key={index}/>
                    })}
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

export default class App extends React.Component {
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