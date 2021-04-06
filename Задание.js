var City1 = {
    name: "ГородN",
    populatuon: 10000000
}
var City2 = {
    name: "ГородМ",
    populatuon: 1e6
}
function getName() { return this.name; }

function ExportStr() {
    return this.name + '\n' + 'population=' + this.npopulation + '\n';
}

console.log(City1);
console.log(City2);
