//console.dir(document)
//console.log(document.domain)
console.log(document.title)
document.title="novi sajt"
console.log(document.all)
console.dir(document.all[8])
document.all[8].textContent ="nesto durgo"
document.getElementById("main-title").textContent ="drugi naslov"
let mainTitle =document.getElementById("main-title");
mainTitle.textContent = "Trecinaslov    "
console.log( document.getElementsByClassName("list-item"))
let items = document.getElementsByClassName("list-item");
items[2].textContent = "zamena"
items[2].style.backgroundColor = "red"
for (let i=0 ; i< items.length ; i++) {
    if(i%2 == 0) {
        items[i]. style.backgroundColor ="grey"
    }
}