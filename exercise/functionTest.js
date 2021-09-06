function plus(a, b) {
  console.log(a + b);
}

function divide(a, b) {
  console.log(a / b);
}

const player = {
  name: "wook",
  sayHello: function (otherName) {
    console.log("hello " + otherName + " nice to meet you");
  },
};

plus(2, 5);
divide(98, 20);

player.sayHello("lyn");
