
import React from 'react'
import { render } from 'react-dom'
import App from './components/App'
import storeFactory from './store'

const store = storeFactory()

window.React = React
window.store = store

const reactContainer = document.getElementById('react-container')
render(<App store={store} />, reactContainer)
