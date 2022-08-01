const cat = {
  name: "Fred",
  nickname: "Flooficus",
  age: 5,
  isSleeping: true,
  favoriteToys: ["spring", "ping pong balls", "bird stuffy"],
  pet: function () {
    return "purrrrrr";
  },
  play: function () {
    this.isSleeping = false;
    return `${this.nickname} is awake and playing!`;
  }
};

// change existing properties of an object
cat.isSleeping = false;
cat["color"] = "orange";

console.log(cat);
console.log(cat.play());

// console.log(cat.nickname);

// console.log(cat.favoriteToys[2]);

// console.log(cat["name"]);

// Compound Assigment Operators //

let paperclips = 10;
paperclips += 2;
console.log(paperclips);

// or //

// let paperclips = 10;
// paperclips = paperclips + 2;
// console.log(paperclips);
