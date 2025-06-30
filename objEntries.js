const glass = {
    name: 'melamine',
    color: 'green',
    price: 12, 
    isCleaned: true
}
console.log(glass);

const myKeys = Object.keys(glass);
console.log(myKeys);

const myValues = Object.values(glass);
console.log(myValues);

const myEntries = Object.entries(glass);
console.log(myEntries);

// delete glass.isCleaned;
// console.log(glass);

// vejaila delete using destructure
const {isCleaned, ...shortGlass} = glass;
console.log(shortGlass);

// freeze
Object.freeze(glass);
glass.source = 'bangladesh';
delete glass.name;
console.log(glass);

// seal
Object.seal(glass);
glass.source = 'bangladesh';
glass.price = 100;
delete glass.name;
console.log(glass);


/* array of array, two dimensional array

[
  [ 'name', 'melamine' ],
  [ 'color', 'green' ],
  [ 'price', 12 ],
  [ 'isCleaned', true ]
]

 */