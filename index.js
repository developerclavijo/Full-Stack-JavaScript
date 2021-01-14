//Destructuración

let miObjeto = {
    a: 1,
    b: 2,
    c: "Hola",
    d: function () {
        console.info("Hehe")
    }
};

console.info(miObjeto);

let {
    a,
    b,
    c,
    d
} = miObjeto;

console.info(a);
console.info(b);
console.info(c);
console.info(d);