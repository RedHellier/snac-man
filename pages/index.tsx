import Panel from './panel';
import localFont from 'next/font/local'
import clsx from "clsx";

const pacmanFont = localFont({src:'../public/emulogic-font/Emulogic-zrEw.ttf'})

export default function Page() {

    return (
        <div className={clsx('flex flex-row justify-center items-center h-screen bg-black text-white',pacmanFont.className)}>
            <div></div>
            <Panel />
            <div></div>
        </div>

    )
}