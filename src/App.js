
import React, {Component} from 'react';
import './App.css';
import {Link, Switch, Route, withRouter} from 'react-router-dom';

import About from './components/About';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      page:"about"
    }
  }

  componentDidMount(){
    // this.props.history.push(`/${this.state.page}`)
  }

  render(){
    return (
      <div className="App">
        <header>
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
            <Route path="/projects">

            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </main>

      </div>
    );
  }

}

export default withRouter(App);
