import logo from './logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import GlobalStyle from './Style/GlobalStyle';
import Header from './Components/Header';
import React, {useState} from 'react';
import Main from './Components/Main';
import Footer from './Components/Footer/Footer';


function App() {
  const [theme, setTheme] = useState(false);
  return (
    <div className="App">
       <GlobalStyle/>
       <Header theme= {theme} setTheme = {setTheme} />
       <Main theme = {theme}/>
       <Footer theme = {theme}/>
    </div>
  );
}

export default App;
