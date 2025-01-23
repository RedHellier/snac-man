import { useEffect, useState } from "react";

type Highscore = {
  _id: string;
  user: string;
  score: number;
};

export default function Scores() {
    const [allData, setAllData] = useState([]);
    const [showAllData, setShowAllData] = useState(false); 

    const fetchAllData = async () => {
        const response = await fetch("/api/showScores");

        if (response.ok) {
            const data = await response.json();
            setAllData(data);
            setShowAllData(true);
        } else {
            alert("Failed to fetch data!");
        }
    };

    useEffect(() => {
        fetchAllData();
    }, [])

    return (
        <div className="flex flex-col justify-around items-center">
            {(showAllData && (
            <div>
                <h1 className="text-center text-2xl my-5">HIGHSCORES</h1>
                <div className="flex flex-row justify-between">
                    <ul className="">
                        {
                        allData.map((highscore : Highscore, index : number) => (
                            <li key={highscore._id} className="text-left mr-5">{index+1}. {highscore.user}</li>
                        ))
                        }
                    </ul>
                    <ul className="">
                        {
                        allData.map((highscore : Highscore) => (
                            <li key={highscore._id} className="text-right ml-5">{highscore.score}</li>
                        ))
                        }
                    </ul>
                </div>
            </div>)) || (<h1>LOADING . . . </h1>)}
        </div>
    );
}