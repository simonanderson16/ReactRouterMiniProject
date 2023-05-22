import ProjectLinks from "./ProjectLinks";
import {render} from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

export default function AppContainer() {
    return (
        <>
            <h1>React Router Mini Project</h1>
            <h4>By: Simon Anderson</h4>
            <div className="project-links">
            <a>Weather/News App</a>
            <a>Trivia App</a>
            <a>TicTacToe</a>
            </div>
            <hr></hr>
        </>
    );
}