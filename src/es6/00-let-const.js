var lastName = 'David';
lastName = 'Oscar';
console.log(lastName);

let fruit = 'Apple';
fruit = 'Kiwi';
console.log(fruit);

const animal = 'Dog';
animal = 'Cat'; // ERROR
console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = 'Apple';       // FUNCTION SCOPE
        let fruit2 = 'Kiwi';        // BLOCK SCOPE
        const fruit3 = 'Banana';    // BLOCK SCOPE
    }
    console.log(fruit1);
    console.log(fruit2); // ERROR
    console.log(fruit3); // ERROR
}

fruits();