// var rHeight =5;
// var colorEven = "orange";
// var colorOdd = "black";
// var symbol ="*";


function printRhombus(pHeight,symbol) {
    let rhombus = '';
    for (let i = 0; i < pHeight; i++) {
        rhombus += ' '.repeat(pHeight - i - 1) + symbol.repeat(2 * i + 1) + '\n';
    }
    for (let i = pHeight - 2; i >= 0; i--) {
        rhombus += ' '.repeat(pHeight - i - 1) + symbol.repeat(2 * i + 1) + '\n';
    }
    console.log(rhombus);
}
 
