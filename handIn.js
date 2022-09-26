//1
// What to wear
console.log("What to wear")

function clothesToWear (temperature) {
    if (temperature > 20) {
        return `Shorts & t-shirt`
    }
    else if (temperature < 20) {
        return`Hoodie & jeans`
    }
}

clothesToWear(15)

console.log(clothesToWear(22))


//2
//  part 1 Dice Game
console.log("Dice Game")

function diceGame (numberOfRolls) {
    for (let i = 0; i < numberOfRolls; i++) {
        let randomNumber = Math.floor(Math.random()*6) + 1
        if (randomNumber === 6) {
            console.log(`You hit ${randomNumber}!🥳 `)
        } else {
            console.log(`Your hit ${randomNumber} try again! 👎🏼`)
        }
    }
}

diceGame(5)


// part 2 Jackpot
console.log("Jackpot")

function jackpot(numberOfRolls) {
    let amountOfSixes = 0

    for (let i = 0; i < numberOfRolls; i++) {
        let randomNumber = Math.floor(Math.random() * 6) + 1;
        console.log(`You hit ${randomNumber}`)

        if (randomNumber === 6) {
            amountOfSixes++
            if (amountOfSixes === numberOfRolls) {
                console.log(`2x6! You hit jackpot! 🥳`)
            }
        }
    }
}

jackpot(2)

// 3

// Super forkert lavet - gik lidt død her

console.log("Build a sentiment analyser")

function SentimentAnalyser (text) {
    const positive = ["good", "happy", "awesome"]
    let lengthPositive = positive.length

    const negative = ["bad", "wierd", "downs"]
    let lengthNegative = negative.length

    let score = 0
    const split = text.split(" ")


    getScore = split > positive.count(2)
    getScore = split > negative.count(2)
    return getScore
}

console.log(SentimentAnalyser("I am happy and having an awesome day"))