//Tugas Javascript 2
let nameArray= ["Abigail", "Alexandra", "Alison",
"Amanda", "Angela", "Bella",
"Carol", "Caroline", "Carolyn",
"Deirdre", "Diana", "Elizabeth",
"Ella", "Faith", "Olivia", "Penelope"];
const search = function(find,limit,batas){
    let hasil = [];
    if(find.length == 0){
        console.log('Silakan masukkan input kata yang akan dicari');
    }else{
        if(typeof find === 'string'&& typeof limit === 'number'){
            nameArray = nameArray.join(',').toLowerCase().split(',');
            for (let i=0;i < nameArray.length;i++){
                if(nameArray[i].includes(find.toLowerCase())) {
                    hasil.push(nameArray[i]);   
                }
            } 
            return (batas(hasil,limit));
        }else{
            console.log(`Input salah, silakan inputkan kembali :\
            \nInput ke 1 harus 'String' dan input ke 2 harus 'Number'`);               
        }
    }    
 }
const callback = (hasil,limit)=>{
    let output =[];
    if(hasil.length<limit){
        limit = hasil.length;
    } 
    for(let i = 0;i<limit;i++){    
            output.push(hasil[i]);
    }
    if(output.length == 0){
        console.log('Nama tidak ditemukan')
    }else{
        const capitalize = output.map(huruf =>
        huruf.charAt(0).toUpperCase() + huruf.substr(1))
    return console.log(capitalize);
    }
}
search('la',3,callback);
