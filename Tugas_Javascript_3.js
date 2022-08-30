//Tugas Javascript 3

const seleksiNilai = (nilaiAwal, nilaiAkhir, dataArray) => {
  const cekArray = dataArray.some((item) => {
    return typeof item !== "number";
  });
  // revisi: validasi awal masih banyak penggunaan nested if
  if (
    !(
      typeof nilaiAwal === "number" &&
      typeof nilaiAkhir === "number" &&
      cekArray == false
    )
  ) {
    return console.log(
      `Input salah, silakan inpukan kembali :\nInput harus berupa 'number'`
    );
  }
  if (nilaiAwal > nilaiAkhir) {
    return console.log("Nilai akhir harus lebih besar dar nilai awal");
  }
  if (dataArray.length < 5) {
    return console.log("Jumlah angka dalam dataArray harus lebih dari 5");
  }

  let compare = [];
  for (let i = 0; i < dataArray.length; i++) {
    if (nilaiAwal < dataArray[i] && nilaiAkhir > dataArray[i]) {
      compare.push(dataArray[i]);
    }
  }
  if (compare.length == 0) {
    console.log("Nilai tidak ditemukan");
  } else {
    compare.sort(function (a, b) {
      return a - b;
    });
    console.log(compare);
  }
};
seleksiNilai(1, 4, [1, 12, 3, 0, 5, 10]);
