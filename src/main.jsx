import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import CoursesProvider from './context/CoursesProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <CoursesProvider>
    <App />
    </CoursesProvider>
)
