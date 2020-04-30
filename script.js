let scores = [
    {
        name: "Jane",
        score: 95,
        date: "2020-01-24",
        passed: true,
    },
    {
        name: "Joe",
        score: 77,
        date: "2018-05-14",
        passed: true,
    },
    {
        name: "Jack",
        score: 59,
        date: "2019-07-05",
        passed: false,
    },
    {
        name: "Jill",
        score: 88,
        date: "2020-04-22",
        passed: true,
    }
];

//console.log(scores[3])

function addScore(array, newName, newScore, newDate) {
    let newObj =
    {
        name: newName,
        score: newScore,
        date: newDate,
        passed: newScore >= 60,


    };

    array.push(newObj);
};

addScore(scores, "James", 99, "2019-05-23");
console.log(scores)

function deleteScoreByIndex(array, index) {
    array.splice(index, 1);
};

function deleteScoreByName(name, array) {
    let index = array.findIndex(person => {
        return person.name === name;
    });
    array.splice(index, 1);

};

const editScore = (array, index, score) => {
    array[index].score = score;
    array[index].passed = score >= 60;
}

const findScoreByName = (array, name) => {
    return array.find(person => {
        return person.name === name;
    })
}

const findLowestScore = (array) => {
    let lowestScore = array[0];
    array.forEach(person => {
        if (person.score < lowestScore.score) {
            lowestScore = person;

        }
    })
    return lowestScore.score;
}

const findAverageQuizScore = (array) => {
    let total = 0
    for (let person of array) {
        total += person.score;
    }
    return total / array.length
}

const filterScores = (array, property, value) => {
    return array.filter(person => {
        return person[property] === value;
    })
}

function sortScoresAsc(array) { }

function sortScoresDsc(array) { }