import React from 'react';
import App from 'next/app';
import {Provider} from 'react-redux';
import withRedux from "next-redux-wrapper";
import Theme from '../DefaultTheme/defaultTheme';
import store from '../store/store';
import './global.css'

class MyApp extends App {

  static async getInitialProps({Component, ctx}) {
    const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

    //Anything returned here can be access by the client
    return {pageProps: pageProps};
  }

  render() {
    //Information that was returned  from 'getInitialProps' are stored in the props i.e. pageProps
    const {Component, pageProps} = this.props;

    return (
      <Provider store={store}>
        <Theme>
          <Component {...pageProps}/>
        </Theme>
      </Provider>
    );
  }

}
const makeStore = () => store;
export default withRedux(makeStore)(MyApp);
