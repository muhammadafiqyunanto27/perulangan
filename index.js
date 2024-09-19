// Optional Chaining(?)
const user = {
    addres: {
        city: "solo"
    }

}

const city = user?.addres?.city

if (!city) {
    console.log("Kota tidak di temukan")
} else {
    console.log("city di temukan:",city)
}

const newCity = city ?? "Online"
console.log("Kota:",newCity)


// recursion functiom

function factorial(n) {
    if  (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5))

// Matrix

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
]

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++){
        console.log(matrix[i][j])
    }
}