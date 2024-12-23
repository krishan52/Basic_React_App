import { useState } from "react";

export default function LudoBoard() {
    let [moves,setMoves] = useState({ blue:0, red:0, yellow:0, green:0});
    let [arr,setArr] = useState(["no moves"]);

    let updateBlue = () => {
        // moves.blue += 1;
        console.log(`Blue Moves: ${moves.blue}`);
        setMoves((preMoves) => {
            return {...preMoves,blue: preMoves.blue +1};
        });

        setArr(()=> {return [...arr,"blue moves"]});
    }

    let updateRed = () => {
        // moves.blue += 1;
        console.log(`Red moves: ${moves.red}`);
        setMoves((preMoves) => {
            return {...preMoves,red: preMoves.red +1};
        });
    }

    let updateYellow = () => {
        // moves.blue += 1;
        console.log(`Yellow moves: ${moves.yellow}`);
        setMoves((preMoves) => {
            return {...preMoves,yellow: preMoves.yellow +1};
        });
    }

    let updateGreen = () => {
        // moves.blue += 1;
        console.log(`Green moves: ${moves.green}`);
        setMoves((preMoves) => {
            return {...preMoves,green: preMoves.green +1};
        });
    }

    return (
        <div>
            <h2>
                Game Starts:
            </h2>

            <div className="board">
                <p>Blue moves: {moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlue} >+1</button>
                <p>Red moves: {moves.red}</p>
                <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
                <p>Yellow moves: {moves.yellow}</p>
                <button style={{backgroundColor:"yellow",color:"black"}} onClick={updateYellow}>+1</button>
                <p>Green moves: {moves.green}</p>
                <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
            </div>
        </div>
    );
}