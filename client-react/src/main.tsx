import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';  
import store from './redux/store';  
import AppContainer from './containers/AppContainer';  

const rootElement = document.getElementById('root')!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <Provider store={store}>  
    <BrowserRouter>  
      <AppContainer />  
    </BrowserRouter>
  </Provider>
);
