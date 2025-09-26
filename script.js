function secondLargest(arr) {
const max = arr.reduce((a, b) => Math.max(a, b), -Infinity);

let fil = arr.filter(filterarr)
function filterarr(ar){
   return ar < max
}
let numbertwomax=fil.reduce((a, b) => Math.max(a, b), -Infinity);
return numbertwomax
}
console.log(secondLargest([1, 2, 3, 4]))