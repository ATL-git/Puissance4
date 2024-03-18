let array = [
    ["3", "3", "3", "3", "3", "3", "3"],
    ["0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0"],
    ["0", "0", "0", "0", "0", "0", "0"]]


const tabContainer = document.querySelector('#tabContainer')
const yellowscore = document.querySelector('.yellowscore')
const redscore = document.querySelector('.redscore')
const joueur = document.querySelector('.joueur')
const bot = document.querySelector('.bot')
let lap = 1
let redScore = 0
let yellowScore = 0
let gameOver = false
let cpuMode = false

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function mapAffich() {

    tabContainer.innerHTML = ""
    array.forEach((rows) => {
        let column = document.createElement('div')
        column.classList.add("column")
        tabContainer.appendChild(column)

        rows.forEach((cell, i) => {
            let lign = document.createElement('div')
            lign.classList.add('cell')
            column.appendChild(lign)

            switch (cell) {
                case "1":
                    const imageJaune = document.createElement('img')
                    imageJaune.classList.add('jaune')
                    lign.appendChild(imageJaune)
                    imageJaune.src = `/assets/image/jetonJaune.jpg`
                    break
                case "2":
                    const imageRouge = document.createElement('img')
                    imageRouge.classList.add('rouge')
                    lign.appendChild(imageRouge)
                    imageRouge.src = `/assets/image/jetonRouge.jpg`

                    break
                case "3":

                    const image = document.createElement('img')
                    image.addEventListener('click', () => {
                        gravity(i)
                    })
                    image.classList.add('fleche')
                    lign.appendChild(image)
                    image.src = `/assets/image/flechebas0.png`


                    break

            }
        });

    });

}

function gravity(j) {

    if (gameOver == false) {
        if (lap % 2 == 0) {
            if (array[1][j] == "0") {
                array[1][j] = "1"

            }
            for (let i = 1; i < array.length; i++) {


                if (array[i + 1] && array[i + 1][j] == "0") {
                    array[i][j] = "0"
                    array[i + 1][j] = "1"
                }

            }
            mapAffich()
            lap++
        } else {

            if (array[1][j] == "0") {
                array[1][j] = "2"

            }
            for (let i = 1; i < array.length; i++) {

                if (array[i + 1] && array[i + 1][j] == "0") {
                    array[i][j] = "0"
                    array[i + 1][j] = "2"

                }

            }
            if (cpuMode === true) {
                lap++
                gravity(random(0, 6))
                lap++
            }
            mapAffich()
            lap++
        }
        win()
    }


}

function win() {


    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j + 3] && array[i][j] != "0") {

                if (array[i][j] == array[i][j + 1] && array[i][j + 1] == array[i][j + 2] && array[i][j + 2] == array[i][j + 3]) {
                    if (array[i][j + 1] == "1") {
                        yellowScore++
                        yellowscore.textContent = `Score pion jaune = ${yellowScore}`
                        document.querySelector(".win").textContent = `Les jetons jaunes ont gagner , +1 points pour eux !`
                        gameOver = true


                    } else if (array[i][j + 1] == "2") {
                        redScore++
                        redscore.textContent = `Score pion rouge = ${redScore}`
                        document.querySelector(".win").textContent = `Les jetons rouges ont gagner , +1 points pour eux !`
                        gameOver = true
                    }

                }

            }
            if (array[i + 3] && array[i + 3][j] != "0") {
                if (array[i][j] == array[i + 1][j] && array[i + 1][j] == array[i + 2][j] && array[i + 2][j] == array[i + 3][j]) {
                    console.log("win");
                    if (array[i + 1][j] == "1") {
                        yellowScore++
                        yellowscore.textContent = `Score pion jaune = ${yellowScore}`
                        document.querySelector(".win").textContent = `Les jetons jaunes ont gagner , +1 points pour eux !`
                        gameOver = true
                    } else if (array[i + 1][j] == "2") {
                        redScore++
                        redscore.textContent = `Score pion rouge = ${redScore}`
                        document.querySelector(".win").textContent = `Les jetons rouges ont gagner , +1 points pour eux !`
                        gameOver = true
                    }
                }

            }
            if (array[i + 3] && array[i + 3][j + 3] && array[i][j] != "0") {
                if (array[i][j] == array[i + 1][j + 1] && array[i + 1][j + 1] == array[i + 2][j + 2] && array[i + 2][j + 2] == array[i + 3][j + 3]) {
                    console.log("win");
                    if (array[i + 1][j + 1] == "1") {
                        yellowScore++
                        yellowscore.textContent = `Score pion jaune = ${yellowScore}`
                        document.querySelector(".win").textContent = `Les jetons jaunes ont gagner , +1 points pour eux !`
                        gameOver = true
                    } else if (array[i + 1][j + 1] == "2") {
                        redScore++
                        redscore.textContent = `Score pion rouge = ${redScore}`
                        document.querySelector(".win").textContent = `Les jetons rouges ont gagner , +1 points pour eux !`
                        gameOver = true
                    }
                }

            }
            if (array[i + 3] && array[i + 3][j - 3] && array[i][j] != "0") {
                if (array[i][j] == array[i + 1][j - 1] && array[i + 1][j - 1] == array[i + 2][j - 2] && array[i + 2][j - 2] == array[i + 3][j - 3]) {
                    console.log("win");
                    if (array[i + 1][j - 1] == "1") {
                        yellowScore++
                        yellowscore.textContent = `Score pion jaune = ${yellowScore}`
                        document.querySelector(".win").textContent = `Les jetons jaunes ont gagner , +1 points pour eux !`
                        gameOver = true
                    } else if (array[i + 1][j - 1] == "2") {
                        redScore++
                        redscore.textContent = `Score pion rouge = ${redScore}`
                        document.querySelector(".win").textContent = `Les jetons rouges ont gagner , +1 points pour eux !`
                        gameOver = true
                    }
                }

            }
        }
    }
}

function restart() {
    lap = 1
    document.querySelector(".win").textContent = ""
    gameOver = false
    array = [
        ["3", "3", "3", "3", "3", "3", "3"],
        ["0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0"]]

    mapAffich()

}
function resetScore() {
    redScore = 0
    yellowScore = 0
    redscore.textContent = `Score pion rouge = ${redScore}`
    yellowscore.textContent = `Score pion jaune = ${yellowScore}`

}
joueur.addEventListener('click', () => {
    cpuMode = false
    lap = 1
    document.querySelector(".win").textContent = ""
    gameOver = false
    array = [
        ["3", "3", "3", "3", "3", "3", "3"],
        ["0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0"]]

    mapAffich()

})
bot.addEventListener('click', () => {
    cpuMode = true
    lap = 1
    document.querySelector(".win").textContent = ""
    gameOver = false
    array = [
        ["3", "3", "3", "3", "3", "3", "3"],
        ["0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0"],
        ["0", "0", "0", "0", "0", "0", "0"]]

    mapAffich()

})
mapAffich()