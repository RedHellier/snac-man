import Image from "next/image";
import snacmanLogo from '../../public/snacman-logo.png';

export default function MainMenu() {
    return (
        <div className="flex flex-col justify-around items-center">
            <Image
                src={snacmanLogo}
                alt="snacman logo"
                width={370}
                height={85}
            />
        </div>
    );
}