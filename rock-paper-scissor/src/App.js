import { useState, useRef } from "react";
import rock from "./assets/images/rock.png";
import paper from "./assets/images/paper.png";
import scissor from "./assets/images/scissor.png";
import "./App.css";

function App() {
    const data = [
        { ele: "Rock", img: rock },
        { ele: "Paper", img: paper },
        { ele: "Scissor", img: scissor }
    ]
    const [shuffle, setShuffle] = useState(false);
    const [CPU, setCPU] = useState({ ele: "", img: "" });
    const [user, setUser] = useState({ ele: "", img: "" });
    const cpuRef = useRef(null);
    const [winner, setWinner] = useState(null);

    const handleShuffle = () => {
        setWinner(null);

        setShuffle(true);
        cpuRef.current = setInterval(() => {
            const idxCPU = Math.ceil(Math.random() * 3) % 3;
            setCPU(data[idxCPU]);
        }, 100)
    }

    const handleSelection = (e) => {
        clearInterval(cpuRef.current);
        setShuffle(false);

        const idx = e.target.value === "Rock" ? 0 : e.target.value === "Paper" ? 1 : 2;
        const selectedUser = data[idx];
        setUser(selectedUser);
        handleResult(selectedUser, CPU);

    }

    const handleResult = () => {
        if ((user.ele === "Rock" && CPU.ele === "Scissor") || (user.ele === "Paper" && CPU.ele === "Rock") || (user.ele === "Scissor" && CPU.ele === "Paper")) {
            setWinner("User Wins");
            return;
        }

        if (CPU.ele === user.ele) {
            setWinner("Tie")
            return;
        }

        setWinner("CPU Wins");
        return;
    }

    return (
        <div className="App">
            <h1>Rock Paper and Scissors</h1>

            {winner ? (<h3>{winner}</h3>) : (<></>)}

            <div className="play-area">
                <div className="cpu">
                    <h3>CPU</h3>
                    <img src={CPU.img} alt={CPU.ele} />
                </div>

                <div className="user">
                    <h3>User</h3>
                    <img src={user.img} alt={user.ele} />
                </div>
            </div>

            <div className="buttons">
                {!shuffle ? (<button id="start-button" onClick={handleShuffle}>Start</button>) : (<div className="select-buttons">
                    <button id="rock-button" value="Rock" onClick={handleSelection}>Rock</button>
                    <button id="paper-button" value="Paper" onClick={handleSelection}>Paper</button>
                    <button id="scissor-button" value="Scissor" onClick={handleSelection}>Scissor</button>
                </div>)}
            </div>
        </div>
    );
}

export default App;
