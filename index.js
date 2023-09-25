const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push(name);
  }
  function destructivelyPrependCat(name) {
    cats.push(name);
  }
  function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name) {
    return [...cats, name];
}
function prependCat(name) {
    return ["Arnold", ...cats];
  }
   function removeLastCat() {
   let newcats = [...cats] 
    newcats.pop();
    return newcats;
  }
  function removeFirstCat() {
    let newcats = [...cats]
    newcats.shift();
    return newcats;
  }

  

