
export function genRandomColor() {
    return `rgb( ${randomNumber(255)}, ${randomNumber(255)}, ${randomNumber(255)})`;
}

export function genRandomPos() {
    return{
        left: `${randomNumber(100)}%`,
        top: `${randomNumber(100)}%`
    }
}

function randomNumber(max){
    return Math.floor(Math.random() * (max + 1));
}

