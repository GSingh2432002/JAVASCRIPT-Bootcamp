// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB Connected`);
})();

((name) => {
    console.log(`DB Connected Successfully!${name}`);
})(" I Love You")
