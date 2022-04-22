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
