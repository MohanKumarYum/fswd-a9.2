const avgSpeed = 600;

let airPlaneObj1 = {}, airPlaneObj2 = {}, airPlaneObj3 = {};

function airplane(model, seatingCapacity, maximumSpeed) {
    return {
        model: model,
        seatingCapacity: seatingCapacity,
        maximumSpeed: maximumSpeed,
        print() {
            console.log(`model: ${model}, seatingCapacity : ${seatingCapacity}, maximumSpeed: ${maximumSpeed}`);
            // console.log(`Airplane model ${model} has a seating capacity of ${seatingCapacity} and can travel at an average speed of ${avgSpeed}.`);
        }
    };
}
// Creating 3 Airplane Objects.

airPlaneObj1 = airplane("A220",300, 500);

airPlaneObj2 = airplane("A320",400, 600);

airPlaneObj3 = airplane("A420",500, 700);

// Invoking their print method to print the object.

airPlaneObj1.print();

airPlaneObj2.print();

airPlaneObj3.print();

// Increase seating capacity by 10.

airPlaneObj1.seatingCapacity += 10 ;

airPlaneObj2.seatingCapacity += 10;

airPlaneObj3.seatingCapacity += 10;

// Deleting maximumSpeed property.

delete airPlaneObj1.maximumSpeed;

delete airPlaneObj2.maximumSpeed;

delete airPlaneObj3.maximumSpeed;

// Adding new property Avg. Speed to all objects.

airPlaneObj1.averageSpeed = avgSpeed;

airPlaneObj2.averageSpeed = avgSpeed;

airPlaneObj3.averageSpeed = avgSpeed;

// Print the objects.

console.log(airPlaneObj1);

console.log(airPlaneObj2);

console.log(airPlaneObj3);





