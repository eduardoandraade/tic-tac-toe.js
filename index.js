const boardRegions = document.querySelectorAll('#gameBoard span')
let virtualBoard = []
let turnPlayer = ''

function updateTitle() {
    const playerInput = document.getElementById(turnPlayer)
    document.getElementById('turnPlayer').innerText = playerInput.value
}

function initializeGame() {
    virtualBoard = [['', '',''],['', '',''],['', '','']]
    turnPlayer = 'player1'
    document.querySelector('h2').innerHTML = '<h2>Vez do Jogador: <span id="turnPlayer"></span></h2>'
    updateTitle()
    boardRegions.forEach(function (element) {
        element.classList.remove('win')
        element.innerText = ''
        element.addEventListener('click', handleBoardClick)
    })
}

function disableRegion(element) {
    element.style.cursor = 'default'
    element.removeEventListener('click', handleBoardClick)
}

function handleBoardClick(ev) {
    const span = ev.currentTarget
    const region = span.dataset.region // N.N
    const rowColumnPair = region.split('.') // ["N", "N"]
    const row = rowColumnPair[0]
    const column = rowColumnPair[1]

    if (turnPlayer === 'player1') {
        span.innerText = 'X'
        virtualBoard[row][column] = 'X'
    } else {
        span.innerText = 'O'
        virtualBoard[row][column] = 'O'
    }
    
    console.clear()
    console.table(virtualBoard)
    disableRegion(span)
}

document.getElementById('start').addEventListener('click', initializeGame)