import Header from "./Components/Header/Header";
import Card from "./Components/ProductCard/Card";
import Navbar from "./Navbar";
import { Route, Switch } from "react-router-dom";
import "./index.css";

function App() {
  // return (
  //   <h1 className="text-3xl font-bold underline">
  //     Hello world!
  //   </h1>
  // )

  return (
    <>
      <Switch>
        <Route exact path="/">
          <Header />
          <Card />
        </Route>

        <Route exact path="/cart">
          <Navbar text={"This is Cart Page"} />
        </Route>

        <Route exact path="/orders">
          <Navbar text={"This is Orders Page"} />
        </Route>

      </Switch>
    </>
  );
}

export default App;
