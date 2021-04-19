import { hot } from "react-hot-loader/root";
import ReactDOM from "react-dom";
import App from './App';
// import 'antd/dist/antd.css'
import "tailwindcss/tailwind.css"

const HotApp = hot(App)
ReactDOM.render(<HotApp />, document.getElementById("app"));
