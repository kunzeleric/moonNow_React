import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header/Header'
import MainSection from './components/MainSection/MainSection'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <MainSection/>
  </React.StrictMode>,
)
