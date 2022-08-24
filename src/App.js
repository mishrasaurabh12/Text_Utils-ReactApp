import { useState } from "react";
import "./App.css";
import Alert from "./Components/Alert";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textarea from "./Components/Textarea";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
      console.log('timeout starting')
    }, 1500);
  };
  const removeClasses=()=>{
    document.body.classList.remove('light');
    document.body.classList.remove('dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');

  }
  let test;
  const newToggleMode = (cls) => {
    if (test !== 1) {
      removeClasses();
      document.body.classList=('bg-' + cls);
    }
  }
  const toggleMode = (cls) => {
    if (mode === "light") {
      removeClasses();
      // document.body.classList.add('bg-'+cls);
      test = 1;
      setMode("dark");
      document.body.style.backgroundColor = "rgb(4,5,48)";
      showAlert("Dark mode has been enbled", "success");
      document.title = "Text Utils-Dark Mode";
    } else {
      removeClasses();
      // document.body.classList.add('bg-'+cls);
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enbled", "success");
      document.title = "Text Utils-Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Text Utils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          newToggleMode={newToggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            <Route exact path="/">
              <About mode={mode} />
            </Route>
            <Route exact path="/about">
              <Textarea
                heading="Try - TextUtils Wordcounter,Charactercounter,Remove extra spaces"
                mode={mode}
                showAlert={showAlert}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}
export default App;
