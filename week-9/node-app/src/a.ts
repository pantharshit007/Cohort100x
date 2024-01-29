function isLegal(age:number):boolean {
    if (age >= 18) return true;
    else return false;
}

const a = isLegal(20);
console.log(a);