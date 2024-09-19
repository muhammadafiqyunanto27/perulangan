
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  /* Output :
    2
    4
    6
    8
    10
    12
    14
    16
    18
    20
  */


    const a = 10;
    const b = 25;
    const c = 15;
    
    let terbesar;
    if (a > b && a > c) {
      terbesar = a;
    } else if (b > a && b > c) {
      terbesar = b;
    } else {
      terbesar = c;
    }
    
    console.log(`Bilangan terbesar adalah ${terbesar}`);
    /* Output: Bilangan terbesar adalah 25
    */



const angka = 5;
for (let i = 1; i <= 10; i++) {
  console.log(`${angka} x ${i} = ${angka * i}`);
}
    /* Output:
        5 x 1 = 5
        5 x 2 = 10
        5 x 3 = 15
        5 x 4 = 20
        5 x 5 = 25
        5 x 6 = 30
        5 x 7 = 35
        5 x 8 = 40
        5 x 9 = 45
        5 x 10 = 50
    */



const bilangan = 12345;
let jumlahDigit = 0;
let temp = bilangan;

while (temp > 0) {
  temp = Math.floor(temp / 10);
  jumlahDigit++;
}

console.log(`Jumlah digit dari ${bilangan} adalah ${jumlahDigit}`);
/* Output : Jumlah digit dari 12345 adalah 5
*/



const tahun = 2024;

if ((tahun % 4 === 0 && tahun % 100 !== 0) || (tahun % 400 === 0)) {
  console.log(`${tahun} adalah tahun kabisat.`);
} else {
  console.log(`${tahun} bukan tahun kabisat.`);
}

//Output: 2024 adalah tahun kabisat.



const n = 5;
let faktorial = 1;

for (let i = 1; i <= n; i++) {
  faktorial *= i;
}

console.log(`Faktorial dari ${n} adalah ${faktorial}`);

// Output: Faktorial dari 5 adalah 120



const jumlahBilangan = 10;
let a1 = 0, b1 = 1;

for (let i = 0; i < jumlahBilangan; i++) {
  console.log(a1);
  let temp = a1;
  a1 = b1;
  b1 = temp + b1;
}

/* Output   0
            1
            1
            2
            3
            5
            8
            13
            21
            34
*/



const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let jumlahGenap = 0;

for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    jumlahGenap += array[i];
  }
}

console.log(`Jumlah bilangan genap adalah ${jumlahGenap}`);

// Output: Jumlah bilangan genap adalah 30



const tinggi = 5;

for (let i = 1; i <= tinggi; i++) {
  let baris = '';
  for (let j = 1; j <= i; j++) {
    baris += '*';
  }
  console.log(baris);
}

// Output: 
/* 
    *
    **
    ***
    ****
    *****
*/



const nilai = [80, 90, 85, 70, 95];
let total = 0;

for (let i = 0; i < nilai.length; i++) {
  total += nilai[i];
}

const rataRata = total / nilai.length;
console.log(`Rata-rata nilai adalah ${rataRata}`);

// Output: Rata-rata nilai adalah 84


// genereator string acak

function generateRandomString(length) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      result += chars[randomIndex];
    }
  
    return result;
  }
  
  console.log(generateRandomString(10)); // Menghasilkan string acak dengan 10 karakter
//   Output: MQYMZFBNXK



// Latihan dengan input 

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// function askQuestion(query) {
//   return new Promise((resolve) => rl.question(query, resolve));
// }

// (async () => {  
//   number = await askQuestion('Masukkan nama Anda: ');

//   console.log(`Selamat Siang ${number}.`);
//   rl.close();
// })();

/*
    Masukkan nama Anda: jhon
    Selamat Siang jhon.
*/

//1. Membuat Validasi Memasukkan Password

    
    // function askQuestion(query) {
    //   return new Promise((resolve) => rl.question(query, resolve));
    // }
    
    // (async () => {
    //   const correctPassword = "123456"; // Password yang benar
    
    //   const password = await askQuestion('Masukkan password Anda: ');
    
    //   if (password === correctPassword) {
    //     console.log("Password benar. Akses diterima.");
    //   } else {
    //     console.log("Password salah. Akses ditolak.");
    //   }
    
    //   rl.close();
    // })();

    // Output: Masukkan password Anda: 123456
    //Password benar. Akses diterima.


    //2. Membuat Generator dari Teks ke Arab

    // const readline = require('readline');
    
    // const rl = readline.createInterface({
    //   input: process.stdin,
    //   output: process.stdout
    // });
    
    // function askQuestion(query) {
    //   return new Promise((resolve) => rl.question(query, resolve));
    // }
    
    // (async () => {
    // const arabicMapping = {
    //   "a": "اَ", // Alif dengan fatha
    //   "b": "ب", // Ba
    //   "c": "ج", // Jim
    //   "d": "د", // Dal
    //   "e": "هَ", // Ha dengan fatha
    //   "f": "ف", // Fa
    //   "g": "غ", // Ghayn
    //   "h": "ح", // Ha
    //   "i": "يِ", // Ya dengan kasra
    //   "j": "يَ", // Ya dengan fatha
    //   "k": "ك", // Kaf
    //   "l": "ل", // Lam
    //   "m": "م", // Mim
    //   "n": "ن", // Nun
    //   "o": "و", // Waw
    //   "p": "ب", // Tidak ada padanan langsung, gunakan Ba
    //   "q": "ق", // Qaf
    //   "r": "ر", // Ra
    //   "s": "س", // Seen
    //   "t": "ت", // Ta
    //   "u": "وُ", // Waw dengan damma
    //   "v": "ف", // Tidak ada padanan langsung, gunakan Fa
    //   "w": "و", // Waw
    //   "x": "س", // Tidak ada padanan langsung, gunakan Seen
    //   "y": "ي", // Ya
    //   "z": "ز", // Zay
    //   " ": " ", // Spasi
    // };
    
    // // Fungsi untuk mengonversi teks Latin ke Arab dengan harokat
    // function textToArabicWithHarokat(text) {
    //   return text.split("").map(char => arabicMapping[char.toLowerCase()] || char).join("");
    // }
    
    // // Contoh penggunaan
    // const latinText = await askQuestion('Nama Anda: '); 
    // const arabicText = textToArabicWithHarokat(latinText);
    // console.log(`Teks dalam Arab: ${arabicText}`);
    //   rl.close();
    // })();

    // Output: Nama Anda: afiq
    //Teks dalam Arab: اَفيِق



    //3. Membuat Aplikasi Kalkulator

    // const readline = require('readline');
    
    // const rl = readline.createInterface({
    //   input: process.stdin,
    //   output: process.stdout
    // });
    
    // function askQuestion(query) {
    //   return new Promise((resolve) => rl.question(query, resolve));
    // }
    
    // (async () => {
    //   const num1 = parseFloat(await askQuestion('Masukkan angka pertama: '));
    //   const operator = await askQuestion('Masukkan operator (+, -, *, /): ');
    //   const num2 = parseFloat(await askQuestion('Masukkan angka kedua: '));
    
    //   let result;
    
    //   switch (operator) {
    //     case '+':
    //       result = num1 + num2;
    //       break;
    //     case '-':
    //       result = num1 - num2;
    //       break;
    //     case '*':
    //       result = num1 * num2;
    //       break;
    //     case '/':
    //       result = num1 / num2;
    //       break;
    //     default:
    //       console.log('Operator tidak valid');
    //       rl.close();
    //       return;
    //   }
    
    //   console.log(`Hasil: ${result}`);
    //   rl.close();
    // })();

    // Output:
    /*
        Masukkan angka pertama: 5
        Masukkan operator (+, -, *, /): -
        Masukkan angka kedua: 4
        Hasil: 1
    */


        //4. Membuat Chat GPT Sederhana
        //Ini hanya simulasi sederhana chat bot menggunakan Node.js.
        
            // const readline = require('readline');
            
            // const rl = readline.createInterface({
            //   input: process.stdin,
            //   output: process.stdout
            // });
            
            // function askQuestion(query) {
            //   return new Promise((resolve) => rl.question(query, resolve));
            // }
            
            // (async () => {
            //   const responseMap = {
            //     "halo": "Hai! Apa kabar?",
            //     "siapa kamu?": "Aku adalah bot sederhana.",
            //     "selamat tinggal": "Sampai jumpa lagi!"
            //   };
            
            //   while (true) {
            //     const question = await askQuestion('Anda: ');
            
            //     if (question === 'exit') {
            //       console.log("Bot: Sampai jumpa!");
            //       rl.close();
            //       break;
            //     }
            
            //     const response = responseMap[question] || "Maaf, saya tidak mengerti.";
            //     console.log(`Bot: ${response}`);
            //   }
            // })();

            /*
            Anda: halo
            Bot: Hai! Apa kabar?
            Anda: siapa kamu?
            Bot: Aku adalah bot sederhana.
            Anda: selamat tinggal
            Bot: Sampai jumpa lagi!
            Anda: apa
            Bot: Maaf, saya tidak mengerti.
            Anda: exit
            Bot: Sampai jumpa!
            */



            //5. Membuat Aplikasi ATM

            const readline = require('readline');
            
            const rl = readline.createInterface({
              input: process.stdin,
              output: process.stdout
            });
            
            let balance = 1000; // saldo awal
            
            function askQuestion(query) {
              return new Promise((resolve) => rl.question(query, resolve));
            }
            
            (async () => {
              console.log("Selamat datang di ATM");
            
              while (true) {
                console.log("Pilih opsi: 1. Cek Saldo 2. Tarik Uang 3. Setor Uang 4. Keluar");
                const choice = await askQuestion('Pilihan Anda: ');
            
                switch (choice) {
                  case '1':
                    console.log(`Saldo Anda: ${balance}`);
                    break;
                  case '2':
                    const withdrawAmount = parseFloat(await askQuestion('Masukkan jumlah tarik: '));
                    if (withdrawAmount > balance) {
                      console.log('Saldo tidak cukup.');
                    } else {
                      balance -= withdrawAmount;
                      console.log(`Anda menarik: ${withdrawAmount}. Saldo baru: ${balance}`);
                    }
                    break;
                  case '3':
                    const depositAmount = parseFloat(await askQuestion('Masukkan jumlah setor: '));
                    balance += depositAmount;
                    console.log(`Anda menyetor: ${depositAmount}. Saldo baru: ${balance}`);
                    break;
                  case '4':
                    console.log('Terima kasih telah menggunakan ATM kami.');
                    rl.close();
                    return;
                  default:
                    console.log('Pilihan tidak valid.');
                }
              }
            })();

            /*
                Selamat datang di ATM
                Pilih opsi: 1. Cek Saldo 2. Tarik Uang 3. Setor Uang 4. Keluar
                Pilihan Anda: 2
                Masukkan jumlah tarik: 100000\
                Saldo tidak cukup.
                Pilih opsi: 1. Cek Saldo 2. Tarik Uang 3. Setor Uang 4. Keluar
                Pilihan Anda: 100
                Pilihan tidak valid.
                Pilih opsi: 1. Cek Saldo 2. Tarik Uang 3. Setor Uang 4. Keluar
                Pilihan Anda: 1
                Saldo Anda: 1000
                Pilih opsi: 1. Cek Saldo 2. Tarik Uang 3. Setor Uang 4. Keluar
                Pilihan Anda: 3
                Masukkan jumlah setor: 50000000
                Anda menyetor: 50000000. Saldo baru: 50001000
                Pilih opsi: 1. Cek Saldo 2. Tarik Uang 3. Setor Uang 4. Keluar
                Pilihan Anda: 4
                Terima kasih telah menggunakan ATM kami.
            */