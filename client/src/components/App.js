import React, { Component } from 'react';
// import { ConnectedRouter } from 'react-router-redux'; //eslint-disable-line
import { Provider } from 'react-redux';
import CustomRoutes from "../Routes";
import { HashRouter } from "react-router-dom"; //eslint-disable-line
import {store} from "../store/configureStore"
// import { persistStore } from 'redux-persist'
// import { PersistGate } from 'redux-persist/integration/react'
import ScrollToTop from "./Common/ScrollToTop";
export default class App extends Component {
  render() {
    // const { store, history } = this.props; //eslint-disable-line
    // let persistor = persistStore(store)
    return (
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
          {/* <ConnectedRouter history={history}>
              <ScrollToTop>
                <CustomRoutes />
              </ScrollToTop>
          </ConnectedRouter> */}
          <HashRouter>
            <ScrollToTop>
              <CustomRoutes />
            </ScrollToTop>
          </HashRouter>
        {/* </PersistGate> */}
      </Provider>
    );
  }
}

