import React, { Component } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import routes from './Routes';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <Router >
        <div>
          {/* menu, slider */}
          <Header />
          {/*end menu, slider */}
          <section>
            {this.showItem(routes)}
          </section>
          {/* Footer */}
          <Footer />
          {/* Footer */}
          {/* Optional JavaScript */}
          {/* jQuery first, then Popper.js, then Bootstrap JS */}
          {/* JQuery */}
        </div>
      </Router>
    );
  }
  showItem = (routes) => {
    var result = null;
    if(routes.length >0){
      result = routes.map((route,index) =>{
        return <Route key={index} path={route.path} exact={route.exact} component={route.main} /> 
      })
    }
    return <Switch >{result}</Switch>
  };
}

export default App;