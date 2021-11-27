import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import NotFound from './Components/NotFound/NotFound';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import AuthProviders from './Context/AuthProviders';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AddNewService from './Components/Services/AddNewService';
import MyPlan from './Components/Services/MyPlan';
import HomeServices from './Components/Home/HomeServices';
import AllPlan from './Components/Services/AllPlan';
import OnlyMyPlan from './Components/Services/OnlyMyPlan';
import Blogs from './Components/Blogs/Blogs';
function App() {
  return (
    <div className="App">
      <AuthProviders>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home>
              </Home>
              <HomeServices></HomeServices>
            </Route>
            <Route path='/home'>
              <Home>
              </Home>
              <HomeServices></HomeServices>
            </Route>
            <PrivateRoute path="/serivces">
              <Services></Services>
            </PrivateRoute>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/addnewservice">
              <AddNewService>

              </AddNewService>
            </Route>
            <Route path="/alluserplan">
              <AllPlan></AllPlan>
            </Route>
            <Route path="/myplan/:id">
              <MyPlan></MyPlan>
            </Route>
            <Route path="/Onlymyplan">
              <OnlyMyPlan></OnlyMyPlan>
            </Route>
            <Route path="/blog">
              <Blogs></Blogs>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProviders>
    </div>
  );
}

export default App;
