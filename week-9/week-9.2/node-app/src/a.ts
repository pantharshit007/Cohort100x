interface User{
    fname: string,
    lname: string,
    age: number,
    email?: string,
}

function isLegal(user:User){
    if (user.age >= 18) return true;
    else return false;
}   
isLegal({
    fname: "harshit",
    lname: "pant",
    age: 18
})