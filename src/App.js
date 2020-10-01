import React from 'react';
import './config/ReactotronConfig'
import {Provider} from 'react-redux'
import store from './store'
import {BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import Header from './components/Header'
import GlobalStyles from './styles/global'
import {ToastContainer} from 'react-toastify'
function App() {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <Header></Header>
          <Routes/>
          <GlobalStyles/>
          <ToastContainer autoClose={30000}/>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
