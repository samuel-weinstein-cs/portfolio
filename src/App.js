
import React, {Component} from 'react';
import './App.css';
import {Link, Switch, Route, withRouter} from 'react-router-dom';

import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      page:"about",
      projects:[
        {
          title:"Words Per Minute",
          description:"Words Per Minute is a typing game that allows users to measure how fast they can type challenging words. This project uses an API to fetch the words and definitions.",
          image:"https://i.imgur.com/9HMU1Hc.png",
          url:"http://wordsperminute.surge.sh"
        },
        {
          title:"Open Movie Database",
          description:"Open Movie database is an app where users can search a database of movies, tv shows, and video games. The app then displays information about the movie. This project uses an API and React.js.",
          image:"https://i.imgur.com/31rP9Pm.png",
          url:"http://openmoviedatabase.surge.sh"
        },
        {
          title:"Evently",
          description:"Evently is a website designed for allowing users to create, view, and attend events in their local area. Users can access a database of events created by other users and notify others that they are attending an event.",
          image:"https://i.imgur.com/TO64xuD.png",
          url:"http://eventlynyc.surge.sh"
        },

      ]
    }
  }

  componentDidMount(){
    console.log(this.props.location.pathname);
  }

  render(){
    return (
      <div className="App">
        <header >
          <h1>Sam Weinstein</h1>
          <nav>
            <Link
              to="/projects"
              onClick={()=>{
                this.setState({page:'projects'})
              }}
              className={this.state.page==='projects'?"selected":undefined}
              >
              <span>Projects</span>
            </Link>
            <Link
              to="/about"
              onClick={()=>{
                this.setState({page:'about'})
              }}
              className={this.state.page==='about'?"selected":undefined}
              >
              <span>About</span>
            </Link>
            <Link
              to="/skills"
              onClick={()=>{
                this.setState({page:'skills'})
              }}
              className={this.state.page==='skills'?"selected":undefined}
              >
              <span>Skills</span>
            </Link>
          </nav>
        </header>
        <main>
          <Switch>
            <Route path="/about">
              <About />

            </Route>
            <Route path="/skills">
              <Skills />
            </Route>
            <Route path="/projects">
              {this.state.projects.map((project,key)=>(
                  <Project project={project} key={key}/>
                ))
              }
            </Route>

          </Switch>
        </main>

      </div>
    );
  }

}

export default withRouter(App);
