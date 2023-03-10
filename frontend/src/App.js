import React from "react";
import "./index.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import Home from "./views/homePage";
import Login from "./views/loginPage";
import Register from "./views/registerPage";
import ProtectedPage from "./views/ProtectedPage";
import Nothingpage from "./views/Nothingpage";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen overflow-hidden">
        <AuthProvider>
          <Navbar />
          <Switch>
            <PrivateRoute component={ProtectedPage} path="/protected" exact />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            {/* <PrivateRoute component={Home} path="/" /> */}
            <PrivateRoute component={Dashboard} path="/" />

            <Route path="*" component={Nothingpage} />
          </Switch>
        </AuthProvider>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
