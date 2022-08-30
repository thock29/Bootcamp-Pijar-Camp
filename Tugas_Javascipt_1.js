//Tugas Javascipt
//Method pada Javascript

//1. .toString() -> Digunakan untuk merubah type data apapun menjadi 'String'
let identitas = ["nama", "saya", "wachid"];
console.log(identitas);
console.log(identitas.toString());

//2. .sort() -> Digunakan untuk mengurutkan elemen dari array
let nama = ["Verdy", "Nanang", "Ayis", "Apri", "Rizki"];
nama.sort();
console.log(`Urutan Nama : 
${nama.toString()}`);

//3. .push() -> Digunakan untuk menambahkan elemen dari array
let hewan = ["kucing", "anjing", "kelinci"];
hewan.push("harimau");
console.log(hewan);

//4. pop() -> Digunakan untuk mengurangi elemen dari array dimulai dari index terakhir array
hewan.pop();
hewan.pop();
console.log(hewan);

//5. .slice() -> Digunakan untuk memotong array menjadi array baru
let array1 = [1, 2, 3, 4, "a", "b", "c"];
let array2 = array1.slice(3);
console.log(array1);
console.log(array2);

//6. .splice() -> Digunakan untuk memotong array,menambah elemen array atau keduanya
let arr1 = [1, 2, 3, 4, "a", "b", "c", "d", "e"];
let arr2 = arr1.splice(1, 4);
console.log(arr1);
console.log(arr2);

//7. .charAt(); -> Digunakan untuk mengambil sebuah karakter dar string
let bootcamp = "Pijar Camp";
bootcamp = bootcamp.charAt(3);
console.log(bootcamp);

//8. .indexOf() -> digunakan untuk mencari karakter atau kata dalam string
let kalimat = "aku sedang belajar aksara";
kalimat = kalimat.indexOf("ak", 3);
console.log(kalimat);

//9. trim() -> digunakan untuk membuang bagian spasi diawal dan akhir string
let nama2 = " Wachid Nur Afif";
nama2 = nama2.trim();
console.log(nama2);

//10. toLowerCase() -> digunakan untuk mengubah String menjadi huruf kecil.
let kalimat2 = "BeLaJAr jAvaSCript";
kalimat2 = kalimat2.toLowerCase();
console.log(kalimat2);
