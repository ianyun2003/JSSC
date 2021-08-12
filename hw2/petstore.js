/**
 * This function should calculate the total amount of pet food that should be
 * ordered for the upcoming week.
 * @param numAnimals the number of animals in the store
 * @param avgFood the average amount of food (in kilograms) eaten by the animals
 * 				each week
 * @return the total amount of pet food that should be ordered for the upcoming
 * 				 week, or -1 if the numAnimals or avgFood are less than 0 or non-numeric
 */
function calculateFoodOrder(numAnimals, avgFood) {
    if (numAnimals < 0 || avgFood < 0 || typeof (numAnimals) !== "number" || typeof (avgFood) !== "number") {
        return -1
    } else {
        return avgFood * numAnimals
    }
}

/**
 * Determines which day of the week had the most nnumber of people visiting the
 * pet store. If more than one day of the week has the same, highest amount of
 * traffic, an array containing the days (in any order) should be returned.
 * (ex. ["Wednesday", "Thursday"]). If the input is null or an empty array, the function
 * should return null.
 * @param week an array of Weekday objects
 * @return a string containing the name of the most popular day of the week if there is only one most popular day, and an array of the strings containing the names of the most popular days if there are more than one that are most popular
 */
// var w = [{ name: 'Monday', traffic: 10 },
// { name: 'Tuesday', traffic: 4000 },
// { name: 'Wednesday', traffic: 4000 },
// { name: 'Thurs', traffic: 390 },
// { name: 'Fri', traffic: 390 },
// { name: 'Sat', traffic: 4000 }]
// console.log(mostPopularDays(w))

function mostPopularDays(week) {
    // IMPLEMENT THIS FUNCTION!
    if (week == null || week.length == 0) {
        return null;
    } else {
        //bubble sort
        for (var j = 0; j < week.length; j++) {
            for (var i = 0; i < week.length - 1; i++) {
                if (week[i].traffic < week[i + 1].traffic) {
                    var temp = week[i]
                    week[i] = week[i + 1]
                    week[i + 1] = temp
                }
            }
        }
        //handle tie
        var tie = []
        var count = 1
        for (var x = 0; x < week.length - 1; x++) {
            if (week[0].traffic == week[x + 1].traffic) {
                count += 1
            }
        }

        //handle for output return
        if (count == 1) {
            return week[0].name
        } else {
            for (var z = 0; z < count; z++) {
                tie.push(week[z].name)
            }
            return tie
        }

    }


}


/**
 * Given three arrays of equal length containing information about a list of
 * animals - where names[i], types[i], and breeds[i] all relate to a single
 * animal - return an array of Animal objects constructed from the provided
 * info.
 * @param names the array of animal names
 * @param types the array of animal types (ex. "Dog", "Cat", "Bird")
 * @param breeds the array of animal breeds
 * @return an array of Animal objects containing the animals' information, or an
 *         empty array if the array's lengths are unequal or zero, or if any array is null.
 */
function createAnimalObjects(names, types, breeds) {
    // IMPLEMENT THIS FUNCTION!

}

/////////////////////////////////////////////////////////////////
//
//  Do not change any code below here!
//
/////////////////////////////////////////////////////////////////


/**
 * A prototype to create Weekday objects
 */
function Weekday(name, traffic) {
    this.name = name;
    this.traffic = traffic;
}

/**
 * A prototype to create Item objects
 */
function Item(name, barcode, sellingPrice, buyingPrice) {
    this.name = name;
    this.barcode = barcode;
    this.sellingPrice = sellingPrice;
    this.buyingPrice = buyingPrice;
}
/**
 * A prototype to create Animal objects
 */
function Animal(name, type, breed) {
    this.name = name;
    this.type = type;
    this.breed = breed;
}


/**
 * Use this function to test whether you are able to run JavaScript
 * from your browser's console.
 */
function helloworld() {
    return 'hello world!';
}