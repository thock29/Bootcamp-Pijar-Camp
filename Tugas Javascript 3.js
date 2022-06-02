//Tugas Javascript 3

const seleksiNilai = (nilaiAwal,nilaiAkhir,dataArray)=>{
    console.log(dataArray);
    let cekArray;
    for(let y=0;y<dataArray.length;y++){
        cekArray = typeof dataArray[y];
        console.log(cekArray)    
    }
        if(cekArray === 'number'){
            cekArray = true;
        }else{
            cekArray = false;
        }
    console.log(cekArray);
    if(typeof (nilaiAwal,nilaiAkhir) === 'number'&&cekArray==true){
        if(nilaiAwal<nilaiAkhir){
            if(dataArray.length > 5){
                let compare = [];
                for(let i=0;i<dataArray.length;i++){
                    if(nilaiAwal<dataArray[i] && nilaiAkhir>dataArray[i]){
                        compare.push(dataArray[i]);
                    }
                }
                if(compare.length ==0){
                    console.log('Nilai tidak ditemukan');
                }else{
                    compare.sort(function(a,b){
                        return a-b;
                    });
                console.log(compare);
                }
            }else{
                console.log('Jumlah angka dalam dataArray harus lebih dari 5');
            } 
        }else{
            console.log('Nilai akhir harus lebih besar dar nilai awal');
        }
    }else{
        console.log(`Input salah, silakan inpukan kembali :\
        \nInput harus berupa 'number'`);
    }
}
seleksiNilai(1,4,[false,10,2,1,0,5]);