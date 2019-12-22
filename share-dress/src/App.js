import React from 'react';
// import MainCarousel from './components/Main/MainCarousel';
import Boot from './components/testboot/Boot';
import MainNav from './components/MainNav/MainNav';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/MainNav/MainNav';
import Seoul from './components/routes/SeoulRoute';
import BootRoute from './components/routes/BootRoute';
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/main" component={BootRoute} />
        <Route exact path="/seoul" component={Seoul} />
      </Switch>
    </Router>

    // <>
    //   {/* <MainCarousel /> */}
    //   <MainNav />
    //   <Boot />
    // </>
  );
}
export default App;
