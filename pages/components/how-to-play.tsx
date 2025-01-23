import Image from "next/image";
import snakeIcon from '../../public/snake.png';
import ghostsIcon from '../../public/ghosts.png';
import foodsIcon from '../../public/foods.png';
import powerIcon from '../../public/power.png';

export default function HowToPlay() {
    return (
        <div className="flex flex-col justify-around h-full items-center text-center text-sm">
            <h1 className="text-base">HOW TO PLAY</h1>
            <p>Move SNAC-MAN <Image className="inline" src={snakeIcon} alt="snake-icon" width={20} height={20} /> with WASD / Arrow Keys </p>
            <p></p>
            <p>Eat Food <Image className="inline" src={foodsIcon} alt="foods-icon" width={80} height={20} /> to Grow Longer</p>
            <p></p>
            <p>If a Ghost <Image className="inline" src={ghostsIcon} alt="ghosts-icon" width={110} height={20} /> Hits your Head - GAME OVER</p>
            <p>If you hit your own Tail - GAME OVER</p>
            <p></p>
            <p>If a ghost hits your tail </p>
            <p>- You get chopped in half</p>
            <p></p>
            <p>Eat Power Ups <Image className="inline" src={powerIcon} alt="power-icon" width={20} height={20} /> to:</p>
            <p>- Eat Ghosts <Image className="inline" src={ghostsIcon} alt="ghosts-icon" width={110} height={20} /></p>
            <p>- Move Through Your Tail</p>
            <p></p>
        </div>
    );
}