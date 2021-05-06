import Index from "./blocks/Sidebar/index.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Index} />
      </Switch>
    </Router>
  );
}

export default App;
