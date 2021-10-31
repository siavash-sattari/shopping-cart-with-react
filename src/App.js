import React from "react";
import {Route, Switch, Redirect} from "react-router";

// Components
import Store from "./components/Store";
import ProductDetails from "./components/ProductDetails";

// Context
import ProductContextProvider from "./context/ProductContextProvider";

function App() {
  return (
    <ProductContextProvider>
      <Switch>
        <Route path="/products/:id" component={ProductDetails} />
        <Route path="/products" component={Store} />
        <Redirect to="/products" />
      </Switch>
    </ProductContextProvider>
  );
}

export default App;
