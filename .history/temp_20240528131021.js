let points = 0
let tracker = document.getElementById("tracker")
let pillow = 0
let pillowtracker = document.getElementById("dynamite")
let knife = 0
let knifeAmmount = document.getElementById("knife")
let bomb = 0
let bombAmmount = document.getElementById("bomb")
let missile = 0
let badAmmount = document.getElementById("missile")
let ac = 0
let acAmount = document.getElementById("nuke")
let cps = 0
let cpsAmmount = document.getElementById("cps")

function increasePoints() {
    points = points + 1 + (knife * .2)
    tracker.innerText = points.toFixed(2) + " Deaths"
}
function purchaseKnife() {
    if (points >= 10) {
        points = points - 10
        tracker.innerText = points.toFixed(2) + " Deaths"
        knife = knife + 1
        knifeAmmount.innerText = knife + " Knives Owned"
    } else {
        alert("Not enough deaths! You need at least 10 deaths to buy a Knife")
    }
}
function purchaseDynamite() {
    if (points >= 50) {
        points = points - 50
        tracker.innerText = points.toFixed(2) + " Deaths"
        dynamite = dynamite + 1
        dynamiteAmmount.innerText = dynamite + " Dynamite Owned"
    } else {
        alert("Not enough deaths! You need at least 50 deaths to buy Dynamite")
    }
}
function purchaseBomb() {
    if (points >= 250) {
        points = points - 250
        tracker.innerText = points.toFixed(2) + " Deaths"
        bomb = bomb + 1
        bombAmmount.innerText = bomb + " Bombs Owned"
    } else {
        alert("Not enough deaths! You need at least 250 deaths to buy Bombs")
    }
}
function purchaseMissile() {
    if (points >= 500) {
        points = points - 500
        tracker.innerText = points.toFixed(2) + " Deaths"
        missile = missile + 1
        missileAmmount.innerText = missile + " Missiles Owned"
    } else {
        alert("Not enough deaths! You need at least 500 deaths to buy Missiles")
    }
}
function purchaseNuke() {
    if (points >= 1000) {
        points = points - 1000
        tracker.innerText = points.toFixed(2) + " Deaths"
        nuke = nuke + 1
        nukeAmount.innerText = nuke + " Nukes Owned"
    } else {
        alert("Not enough deaths! You need at least 10000 deaths to buy Nukes")
    }
}
function gameLoop() {
    points = points + (1 * dynamite) + (5 * bomb) + (10 * missile) + (25 * nuke) 
    cps = (1 * dynamite) + (5 * bomb) + (10 * missile) + (25 * nuke) 
    tracker.innerText = points.toFixed(2) + " Deaths"
    cpsAmmount.innerText = cps + " deaths per second"
}
setInterval(gameLoop, 1000)