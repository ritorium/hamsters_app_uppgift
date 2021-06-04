import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import Battle from "../pages/Battle";
import Gallery from "../pages/Gallery";
import Error from "../pages/Error";
import Statistics from "../pages/Statistics";
import History from "../pages/History";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/battle" component={Battle} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/statistics" component={Statistics} />
        <Route path="/history" component={History} />
        <Route path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  );
}
