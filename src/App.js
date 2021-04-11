import "./App.scss";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/homepage/hompage.component.jsx";
import Form2 from "./component/form2/form2.component.jsx";
import ResultPage from "./pages/result/results.component";
function App() {
  return (
    <div className="App">
      <h1>ABC</h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/form2" component={Form2} />
        <Route exact path="/result" component={ResultPage} />
      </Switch>
    </div>
  );
}

export default App;
