export default function HandleKeyDown(keyCode : string) {
    const LEFT_KEY = 'ArrowLeft';
    const RIGHT_KEY = 'ArrowRight';
    const UP_KEY = 'ArrowUp';
    const DOWN_KEY = 'ArrowDown';
    const ENTER_KEY = 'Enter';
    return {up:(keyCode===UP_KEY),down:(keyCode===DOWN_KEY),right:(keyCode===RIGHT_KEY),left:(keyCode===LEFT_KEY),enter:(keyCode===ENTER_KEY)}

    // let dxStored : number = 0, dyStored : number = 0, startGame : boolean = false;
    // const LEFT_KEY = '37';
    // const RIGHT_KEY = '39';
    // const UP_KEY = '38';
    // const DOWN_KEY = '40';

    // const goingUp = dy === -1;
    // const goingDown = dy === 1;
    // const goingRight = dx === 1;
    // const goingLeft = dx === -1;

    // const keyPressed = key;

    // if (keyPressed === UP_KEY && !goingDown) {
    //     dxStored = 0;
    //     dyStored = -1;
    // }
    // if (keyPressed === RIGHT_KEY && !goingLeft) {
    //     dxStored = 1;
    //     dyStored = 0;
    //     if (gameState === "initialised") { startGame = true; }
    // }
    // if (keyPressed === DOWN_KEY && !goingUp) {
    //     dxStored = 0;
    //     dyStored = 1;
    // }
    // if (keyPressed === LEFT_KEY && !goingRight) {
    //     dxStored = -1;
    //     dyStored = 0;
    //     if (gameState === "initialised") { startGame = true; }
    // }

    // return {dxStored: dxStored, dyStored: dyStored, startGame: startGame}
};