import React, { useState } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

//Root reducer
import rootReducer from "./store/reducers";

//CSS Style
import * as s from "./App.styled";

//Layout
import Header from "./layout/Header/Header";
import MainView from "./layout/MainView/MainView";
import { Sidebar } from "./layout/Sidebar/Sidebar";
import Footer from "./layout/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
function App() {
  return (
    <Provider store={store}>
      <Router basename="/simple-react-project">
        <s.App>
          <Header />

          <s.ContentContainer>
            <s.Content>
              <Sidebar />
              <MainView />
            </s.Content>
          </s.ContentContainer>
          <Footer />
        </s.App>
      </Router>
    </Provider>
  );
}
export default App;
