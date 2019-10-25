// const a = {
//     a: 1,
//     b: 2,
// };

// const b = { 
//     ...a,
//     a: 13,
//     x: 23
// };

// b.a = 13;

// console.log(a);
// console.log(b);



function ClassP(val) {
    this.field = val;   
}
ClassP.prototype.print = function () {
    console.log(this.field);
}

const o = new ClassP(12);

console.log(o);
o.print();
