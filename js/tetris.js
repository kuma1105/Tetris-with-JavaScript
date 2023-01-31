// DOM
const playground = document.querySelector(".playground > ul");

// Setting
const GAME_ROWS = 20;
const GAME_COLS = 10;

// variable
let score = 0;
let duration = 500;
let downInterval;
let tempMovingItem; // 임시로 담아두는 역할

const BLOCKS = {
    tree: [
        [[0,0], [0,1], [1,1], [1,0]],
        [],
        [],
        []
    ]
}

const movingItem = {
    type: "tree",
    direction: 0,
    top: 0,
    left: 0,
}

// functions
function init() {
    tempMovingItem = {...movingItem};
    for (let i = 0; i < GAME_ROWS; i++) {
        prependNewLine()
    }
    renderBlocks();
}

function prependNewLine() {
    const li = document.createElement("li");
    const ul = document.createElement("ul");
    for (let k = 0; k < GAME_COLS; k++) {
        const matrix = document.createElement("li");
        ul.prepend(matrix);
    }
    li.prepend(ul);
    playground.prepend(li);
}

function renderBlocks() {
    const { type, direction, top, left } = tempMovingItem;
    
    BLOCKS[type][direction].forEach(block => {
        const x = block[0];
        const y = block[1];
        const target = playground.childNodes[y].childNodes[0].childNodes[x];
        target.classList.add(type);
    })
}

init();