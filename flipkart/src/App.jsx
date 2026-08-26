import React from 'react'
import Demo from './component/Demo'
import UserContext from './context/userContext';
import { store } from './store/store';
import { Provider } from "react-redux";

function App() {
  return (
    <div>
        <Provider store={store}>
          <Demo/>
        </Provider>
    </div>
  )
}

export default App
