//synchronous

// console.log(" I ");

// console.log(" eat ");

// console.log(" ice cream");

// console.log(" with a ");

// console.log("spoon ");

//Asynchronous

// console.log(" I ");

// console.log(" eat ");

// setTimeout(() => {
//   console.log(" ice cream");
// }, 4000);

// console.log(" with a ");

// console.log("spoon ");

//Callback functions
// function one(call_two) {
//   console.log("step 1 complete. please call step 2");

//   call_two();
// }

// function two() {
//   console.log("step 2");
// }

// one(two);

// Ice cream production
let stocks = {
  Fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (Fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.Fruits[Fruit_name]} was selected`);

    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("production has started");

    setTimeout(() => {
      console.log("the fruit has been chopped");

      setTimeout(() => {
        console.log(`${stocks.liquid[0]}and ${stocks.liquid[1]} was added`);

        setTimeout(() => {
          console.log("the machine was started");

          setTimeout(() => {
            console.log(`ice cream was placed on ${stocks.holder[0]} `);

            setTimeout(() => {
              console.log(`${stocks.toppings[0]} was added as toppings`);

              setTimeout(() => {
                console.log("serve ice cream");
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

order(0, production);
