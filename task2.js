function processUsers(users) {

    function capitalizeName(name){
        return name.split(" ")
            .map(n => n.at(0).toUpperCase() + n.slice(1))
            .join(" ");
    }

    let totalScore = 0;

    const validUser = users.filter(user => user.age > 18).map(user => {
            const name = capitalizeName(user.name);
            let grade;

            switch (true) {
                case user.score > 90:
                    grade = "A";
                    break;
                case user.score > 75:
                    grade = "B";
                    break;
                case user.score > 60:
                    grade = "C";
                    break;
                default:
                    grade = "D";
            }

            totalScore += user.score;

            return {name,age: user.age,score: user.score,grade};
        });

    const averageScore=totalScore/validUser.length

    return {
        validUser,
        averageScore
    };
}

const users = [
  { name: "john doe", age: 17, score: 80 },
  { name: "alice smith", age: 22, score: 95 },
  { name: "alice smith", age: 22, score: 80 }
];

const result = processUsers(users);
console.log(result);