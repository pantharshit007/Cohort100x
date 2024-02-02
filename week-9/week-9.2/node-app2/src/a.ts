function combine<T>(arr: T[]){
    return arr[0]
}

const elem = combine<Number>([1,2,3,4])
const elem1 = combine<string>(["one", "two", "three"])

// elem1.toUpperCase()
console.log(elem)
console.log(elem1.toUpperCase())
