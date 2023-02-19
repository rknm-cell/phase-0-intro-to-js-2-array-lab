// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];
function destructivelyAppendCat(){
    cats.push('Ralph');
}
function destructivelyPrependCat(){
    cats.unshift('Bob');
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    var newCats = cats.slice();
    newCats.push('Broom');
    return newCats;
}
function prependCat(name){
    var newCats = cats.slice();
    newCats.unshift('Arnold');
    return newCats;
}
function removeLastCat(){
    var newCats = cats.slice();
    newCats.pop();
    return newCats;
}
function removeFirstCat(){
    var newCats = cats.slice();
    newCats.shift();
    return newCats;
}
