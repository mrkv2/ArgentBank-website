import ReactDOM from "react-dom/client"
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "./redux/store/store.js"

import App from "./App.jsx"
import "./assets/style/main.scss"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)