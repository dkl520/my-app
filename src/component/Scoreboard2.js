import { useState } from "react";

let scores = [
    { name: "Sarah", score: 0 },
    { name: "Taylor", score: 0 },
]

export default function Scoreboard2() {
    let [index, setIndex] = useState(0);
    let [scoreAll, setScores] = useState(scores);

    const handleIncrement = () => {
      
        let newSc = scoreAll.map((sc, i) => {
            if (index == i) {
                return { ...sc, score: sc.score + 1 };
            }
            return sc;
        })
        setScores(newSc);

    };
    const togglePlayer = () => {
        setIndex(index ^ 1);

    }
    let currentPlayer = scoreAll[index];
    return (
        <div>
            <div>
                <span> {currentPlayer.name}的分数{currentPlayer.score}  </span>
                <button onClick={handleIncrement}>加一</button>
            </div>
            <button onClick={togglePlayer}>下一位玩家</button>

        </div>
    )




}