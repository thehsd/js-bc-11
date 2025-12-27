// sum minus 

var numberOne = 3;
var numberTwo = 3;
// numberTwo = numberOne + numberTwo;
// numberOne -= numberTwo
// console.log(numberOne)

// console.log(numberOne >= numberTwo);
// console.log(numberOne >= numberTwo);

var hasCar = true;
var hasJob = false;

// console.log(1 && null && '33');
// console.log(Boolean('' && 'false' && 0));


// console.log(hasCar && hasJob);
// console.log(hasCar || hasJob);




var user = {
    firstName: 'Alex',
    lastName: 'Smith',
    age: 17,
    isAdmin: false,
    friends: ['John', 'Mike', 'Mary'],
    address: {
        city: 'New York',
        zipCode: '10001'
    }
};


// if (user.age > 18) {
//     console.log('user can...');

// } else {
//     console.log('user can not ...');
// }

// console.log('end');


var students = [
    {
        fullName: 'Alex Smith',
        score: 42,
    },
    {
        fullName: 'John Doe',
        score: 6,
    },
    {
        fullName: 'gabriel Doe',
        score: 2,
    },
]

// var totalScores = students[0].score + students[1].score
//     + students[2].score
// console.log(totalScores)

// if (totalScores >= 50) {
//     console.log('total score more than 50');
// } else {
//     console.log('total score less than 50');
// }



var users = [
    {
        username: 'alex',
        age: 12
    },
    {
        username: 'sara',
        age: 44,
    },
    {
        username: 'ignat',
        age: 22
    }
]


var condition = users[0].age > 18 && users[1].age > 18 && users[2].age > 18

if (condition) {
    console.log('users can take a driving test')
} else {
    console.log("users can't take a driving test");

}
//  all user age bigger than 18 > users can take a driving test || users can not take a driving test 

//  > <
//  logical  && ||

// console.log(true && true);


var humans = [
    {}, {}
]

// name, age, jobs[], gender 'male' | 'female', hasCar
// حداقل یکی از انسان ها شغل داشته باشه
// حداقل یکی از انسان ها ماشین داشته باشه
// هر دو باید سنشون بیشتز از ۱۸ باشه
// این دوتا میتونن ازدواج کنن
// نمیتونن