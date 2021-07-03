import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'; 
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import CountryDetail from './components/CountryDetail/CountryDetail';
import { 

  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Header></Header>
     
      <Switch>
         <Route path ='/home'>
         <Home></Home> 
         </Route>
         <Route path ='/country/:countryName'>
            <CountryDetail></CountryDetail>
         </Route>
         <Route exact path = '/'>
           <Home></Home>
         </Route>
         <Route path = '*'>
           <NotFound></NotFound>
         </Route>
      </Switch>
    </Router>
  );
}

export default App;
