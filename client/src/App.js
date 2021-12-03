
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Landingpage from './Screen/Landingpage';
import LoginScreen from './Screen/LoginScreen';
import RegisterScreen from './Screen/RegisterScreen';
import {BrowserRouter as Router,Route} from "react-router-dom"
import CreateNote from "./Screen/CreateNote";
import SingleNote from './Screen/SingleNote';
import ProfileScreen from "./Screen/ProfileScreen";
import { useState } from "react";
import Mynotes from './Screen/Mynotes';

function App() {
  
  const [search, setSearch] = useState("");
  return (
    <Router>
    <Header setSearch={(s) => setSearch(s)}/>
    <main>
    <Route exact path='/' component={Landingpage}/>
    <Route exact path='/login' component={LoginScreen}/>
    <Route exact path='/profile' component={ProfileScreen}/>
    <Route exact path='/register' component={RegisterScreen}/>
    <Route exact path='/createnote' component={CreateNote}/>
    <Route exact path='/note/:id' component={SingleNote}/>
    <Route path="/notes" component={({ history }) => (
            <Mynotes search={search} history={history} />)} />
          
    </main>
    <Footer/>
    </Router>
  );
}

export default App;
