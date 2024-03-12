import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from './pages/home/Home.tsx'
import './index.css'
import { Provider } from './Provider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <Home />
    </Provider>
  </React.StrictMode>
)
