import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/home-page/home-page';
import AboutPage from './pages/about-page/about-page';
import ContactPage from './pages/contact-page/contact-page';
import NotFound from './pages/not-found-page/not-found-page';
import Header from './components/header/header';
import moon from './assets/images/moon.png';
import './App.scss';

const App = () => {
  return (
    <div className='App'>
      <div className='background'>
        <div className='black-space' />
        <div className='stars' />
        <img src={moon} alt='Moon' className='moon' />
        <div className='clouds' />
      </div>

      <Header className='header' />
      <Switch className='page'>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/contact' component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
