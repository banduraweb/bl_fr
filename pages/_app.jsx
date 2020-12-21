import React from 'react';
import App from 'next/app';
import {Provider} from 'react-redux';
import Theme from '../DefaultTheme/defaultTheme';
import 'react-quill/dist/quill.snow.css';
import 'react-toastify/dist/ReactToastify.css';
import './global.css'

import withReduxStore from '../lib/with-redux-store'

class MyApp extends App {
  render() {
    const { Component, pageProps, reduxStore } = this.props;
    return (
      <Provider store={reduxStore}>
        <Theme>
        <Component {...pageProps} />
        </Theme>
      </Provider>
    )
  }
}

export default withReduxStore(MyApp)

