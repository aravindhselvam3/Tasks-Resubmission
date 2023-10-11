const myName = (function (name) {
    let a = name.split(" ");
    let b = a.map(word => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
    return b.join(" ");
})("aravindh is a good boy");

console.log(myName);
