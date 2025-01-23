// pages/index.js
import { useState } from "react";

export default function EndScreen({ finalScore } : { finalScore : number }) {
    const [inputUser, setInputUser] = useState("");
    const [responseMsg, setResponseMsg] = useState("");
    const [scoreSaved, setScoreSaved] = useState(false);
    const [showResponseMsg, setShowResponseMsg] = useState(false);

    const handleSaveData = async () => {
        const response = await fetch("/api/saveScore", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ user: inputUser, score: finalScore }),
        });

        if (response.ok) {
            setInputUser("");
            setScoreSaved(true);
        }

        setResponseMsg(await response.json());
        setShowResponseMsg(true);
        
    };

    return (
        <div className="flex flex-col justify-around items-center h-full">
            <div className="h-1/5 flex flex-col justify-center items-center">
                INPUT USERNAME: 
                <input className="bg-black text-center text-white w-[50px]" type="text" value={inputUser} placeholder="NEW" maxLength={3} required onChange={(e) => setInputUser(e.target.value)} />
            </div>
            <p className="">Score: {finalScore}</p>
            {!scoreSaved && (<button className='h-1/5 hover:text-lg transition-all ease-in duration-250' onClick={handleSaveData}>Save Score</button>)}
            {showResponseMsg && (<p className="h-1/5 text-center text-sm">{responseMsg}</p>)}
        </div>
    );
}