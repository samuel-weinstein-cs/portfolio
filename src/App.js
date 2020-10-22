
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
          image:"/images/wordsperminute-cropped.png",
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
        </header>
        <main>
          <About />
          <h1 className="section-header">Projects</h1>
          {this.state.projects.map((project,key)=>(
              <Project project={project} key={key}/>
            ))
          }

          <Skills />
        </main>

      </div>
    );
  }

}

export default withRouter(App);
