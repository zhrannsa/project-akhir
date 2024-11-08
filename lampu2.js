let animals = ['Kucing', 'Anjing', 'Burung', 'Ikan', 'Kelinci']; 
console.log('Array:', animals); 
 
 
console.log('Hewan Pertama:', animals[0]); 
console.log('Hewan Terakhir:', animals[animals.length - 1]); 
 
 
let numbers = [10, 20, 30, 40,]; 
console.log ('Array:', numbers); 
 
 
numbers.shift(); 
numbers.pop(); 
console.log('Array setelah penghapusan:',"Array", numbers); 
 
 
let colors = ['Merah', 'Biru', 'Hijau']; 
console.log('Array:', colors); 
 
 
colors.unshift('Kuning'); 
colors.push('Ungu'); 
console.log('Array setelah penambahan:','Array:', colors); 
 
 
let sum = 0; 
for (let i = 1; i <= 10; i++) { 
    console.log('Angka:', i); 
    sum += i; 
} 
console.log('Jumlah:', sum); 
 
 
console.log('Angka Genap:'); 
for (let i = 1; i <= 10; i++) { 
    if (i % 2 === 0) { 
        console.log(i); 
    } 
} 
 
 
console.log('Angka Ganjil:'); 
for (let i = 1; i <= 10; i++) { 
    if (i % 2 !== 0) { 
        console.log(i); 
    } 
}
function onLamp() {
    document
      .getElementById("image")
      .setAttribute("src", "https://www.w3schools.com/js/pic_bulbon.gif");
    document.getElementById("text").innerHTML = "Lampu Menyala";
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    document.getElementById("jam").innerHTML =
      "Menyala: " +
      hour +
      ":" +
      (minute < 10 ? "0" + minute : minute) +
      ":" +
      (second < 10 ? "0" + second : second);
    setTimeout(() => {
      document
        .getElementById("image")
        .setAttribute("src", "https://www.w3schools.com/js/pic_bulboff.gif");
      document.getElementById("text").innerHTML = "Lampu Mati";
      const date = new Date();
      const hour = date.getHours();
      const minute = date.getMinutes();
      const second = date.getSeconds();
      document.getElementById("jam").innerHTML =
        "Mati: " +
        hour +
        ":" +
        (minute < 10 ? "0" + minute : minute) +
        ":" +
        (second < 10 ? "0" + second : second);
    }, 3000);
  }