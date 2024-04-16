import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; 
import './index.css';
import '../firebase.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter basename="/learnlingo">
      <App />
    </BrowserRouter>
  </Provider>
);