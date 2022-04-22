import './App.css';
import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LandingPage from './LandingPage/LandingPage';
import SignIn from './LandingPage/SignIn';
import SignUp from './LandingPage/SignUp';
import UserProvider from './Context/UserProvider';
import Homepage from './Store/Homepage';
import Cricket from './Cricket/Cricket';
import CricketDetail from './Cricket/CricketDetail';
import Badminton from './Badminton/Badminton';
import BadmintonDetail from './Badminton/BadmintonDetail';
function App()
 {
   
  return (
    <div className="App min-h-screen bg-[#F9FAFF]">


         <UserProvider>
         <Router>
 {
      <Switch>
      <Route path="/Homepage">
        <Homepage />
      </Route>
      <Route path="/SignIn">
        <SignIn />
      </Route>
      <Route path="/SignUp">
        <SignUp />
      </Route>
      <Route path="/Cricket">
        <Cricket />
      </Route>
     
      <Route path="/Badminton/:id">
        <BadmintonDetail />
      </Route>

      <Route path="/Badminton">
        <Badminton />
      </Route>
    

      

      <Route path="/:id">
        <CricketDetail />
      </Route>
   
      <Route path="/">
        <LandingPage />
      </Route>
    
      
    </Switch>              
 }    
 </Router>


         </UserProvider>
 
     </div>
  );
}

export default App;
