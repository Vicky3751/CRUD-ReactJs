import { BrowserRouter, Switch, Route } from "react-router-dom";
import View from "./components/View";
import Viewone from "./components/Viewone";
import Update from "./components/Update";
import Pagenotfound from "./components/Pagenotfound";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={View}/>
          <Route exact path="/viewone/:id" component={Viewone}/>
          <Route exact path="/update/:id" component={Update}/>
          <Route  path="/" component={Pagenotfound}/>
        </Switch>
      </BrowserRouter>
      
    </>
  );
}

export default App;
