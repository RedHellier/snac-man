import { JSX, useEffect, useState } from 'react';
import EndScreen from './components/end-screen'
import GameCanvas from './components/game-canvas';
import MainMenu from './components/main-menu';
import HowToPlay from './components/how-to-play';
import Scores from './components/scores';
import clsx from 'clsx';

interface PANEL {
    name: string,
    component: JSX.Element,
    height: number
}

interface NAV {
    accessedFrom: Array<string>,
    destination: PANEL,
    buttons: Array<string>
}

interface NAV_PATHS {
    [key: string]: NAV
}

interface BUTTON {
    keyBind: string,
    text: string
}

interface BUTTON_LIST {
    [key: string]: BUTTON
}

export default function Panel() {
    const [panel,setPanel] = useState({name:"MainMenu",component:<MainMenu/>,height:1});
    const [buttons,setButtons] = useState(['how','play','scores']);
    const [score,setScore] = useState(0);
    const [gameEnded,setGameEnded] = useState(false);

    function endGame(finalScore : number) {
        setScore(finalScore)
        setGameEnded(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const keyNavigation : NAV_PATHS = {
        Enter:{accessedFrom:["MainMenu","EndScreen"],destination:{name:"GameCanvas",component:<GameCanvas endGame={endGame}/>,height:5},buttons:[]},
        KeyH:{accessedFrom:["MainMenu"],destination:{name:"HowToPlay",component:<HowToPlay/>,height:4},buttons:['main']},
        KeyS:{accessedFrom:["MainMenu"],destination:{name:"Scores",component:<Scores/>,height:3},buttons:['main']},
        Escape:{accessedFrom:["EndScreen","HowToPlay","Scores"],destination:{name:"MainMenu",component:<MainMenu/>,height:1},buttons:['how','play','scores']},
        endGame:{accessedFrom:["GameCanvas"],destination:{name:"EndScreen",component:<EndScreen finalScore={ score }/>,height:3},buttons:['play','main','scores']} // Temporary Nav to get to end screen
    }

    const buttonList : BUTTON_LIST = {
        play:{keyBind:'Enter',text:'NEW GAME'},
        how:{keyBind:'KeyH',text:'HOW TO PLAY'},
        scores:{keyBind:'KeyS',text:'HIGHSCORES'},
        main:{keyBind:'Escape',text:'MAIN MENU'},
    }

    function navigateToPanel(panelInfo : NAV) {
        setPanel(panelInfo.destination);
        setButtons(panelInfo.buttons);
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
    function keyDown(event : KeyboardEvent) {
        const panelInfo : NAV = keyNavigation[event.code];

        if (panelInfo !== undefined && panelInfo.accessedFrom.includes(panel.name)) {
            navigateToPanel(panelInfo)
        }

    }

    useEffect(()=>{
        document.addEventListener("keydown", keyDown)
        if(gameEnded) {
            setGameEnded(false);
            navigateToPanel(keyNavigation['endGame']);
        }
        return ()=>{
          document.removeEventListener("keydown", keyDown)
        }
      }, [gameEnded, keyDown, keyNavigation])

    return (
        <div className="h-[800px] flex flex-col justify-center">
            <div className={clsx(`flex flex-col justify-around w-[580px] h-${panel.height}/5`)}>{panel.component}</div>
            {buttons.length > 0 && <div className='w-[580px] h-[100px] flex justify-around bg-black'>
                {
                buttons.map((b : string) => (
                    <button key={b} className='w-1/3 text-sm hover:text-base transition-all ease-in duration-250' onClick={()=>navigateToPanel(keyNavigation[`${buttonList[b].keyBind}`])}>{buttonList[b].text}</button>
                ))
                }
            </div>}
        </div>
    );
}