// Add your functions and code here
let kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten(name){
  kittens.pop(name);
  return kittens
}

function destructivelyRemoveFirstKitten(name){
  kittens.shift(name);
  return kittens
}

function appendKitten(name){
  var cats = [...kittens,name];
  return cats
}

function prependKitten(name){
  var cats = [name,...kittens];
  return cats
}

function removeLastKitten(){
  kittens.slice(0,kittens.lenght-1);
  return kittens
}
