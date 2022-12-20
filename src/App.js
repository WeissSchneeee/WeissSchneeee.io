//import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom";
import { Intro } from "./intro/component/Intro";


function App() {
  return(
  <div className="App">
  {/* <nav>
    <ul>
      <li>
        <Link to = '/'> Sign In</Link>
      </li>
    </ul>
  </nav> */}
  <Routes>
    <Route path="/" element={<Intro/>}/>
  </Routes>
  </div>
  )
}

export default App;
