import ReactDOM from "react-dom"
import Navbar from "./components/Navbar";
import Body from "./components/Body";

function App() {
    return (
    <>
        <Navbar />
        <Body />
    </>
    )
}

const app = App()
const elemento = document.querySelector(".root")
ReactDOM.render(app, elemento)