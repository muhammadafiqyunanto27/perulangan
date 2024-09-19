const readline = require('readline');  

const rl = readline.createInterface({  
  input: process.stdin,  
  output: process.stdout  
});  

const now = Date().toLocaleString()


const password = "123456"; // Password tetap  
let orders = []; // Array untuk menyimpan pesanan  
let nextOrderId = 1; // ID unik untuk pesanan berikutnya  

function askQuestion(query) {  
  return new Promise((resolve) => rl.question(query, resolve));  
}  

async function login() {  
  let userPassword = await askQuestion('Masukkan password: ');  

  if (userPassword === password) {  
    console.log("Login berhasil!\n");  
    showMenu();  
  } else {  
    console.log("Password salah, coba lagi.");  
    rl.close();  
  }  
}  

async function showMenu() {  
  console.log(`Waktu Login: ${now}`)
  console.log("===== MENU UTAMA =====");  
  console.log("1. Buat pesanan baru");  
  console.log("2. Lihat semua pesanan");  
  console.log("3. Perbarui pesanan");  
  console.log("4. Hapus pesanan");  
  console.log("5. Keluar");  
  console.log("======================");  

  const choice = await askQuestion('Pilih opsi: ');  
  handleMenu(choice);  
}  

async function createOrder() {  
  const orderDescription = await askQuestion('Masukkan deskripsi pesanan: ');  
  const newOrder = { id: nextOrderId++, description: orderDescription };  
  orders.push(newOrder);  
  console.log(`Pesanan baru telah dibuat dengan ID: ${newOrder.id} waktu: ${Date().toLocaleString()}`);  
  showMenu();  
}  

async function viewOrders() {  
  if (orders.length === 0) {  
    console.log("Tidak ada pesanan yang tersedia.");  
  } else {  
    console.log("===== DAFTAR PESANAN =====");  
    orders.forEach(order => {  
      console.log(`ID: ${order.id}, Deskripsi: ${order.description}`);  
    });  
    console.log("==========================");  
  }  
  showMenu();  
}  

async function updateOrder() {  
  const orderId = await askQuestion('Masukkan ID pesanan yang ingin diperbarui: ');  
  const order = orders.find(o => o.id == orderId);  

  if (order) {  
    const newDescription = await askQuestion('Masukkan deskripsi baru: ');  
    order.description = newDescription;  
    console.log(`Pesanan ID: ${orderId} telah diperbarui. ${Date().toLocaleString()}`);  
  } else {  
    console.log("Pesanan tidak ditemukan.");  
  }  
  showMenu();  
}  

async function deleteOrder() {  
  const orderId = await askQuestion('Masukkan ID pesanan yang ingin dihapus: ');  
  const orderIndex = orders.findIndex(o => o.id == orderId);  

  if (orderIndex !== -1) {  
    orders.splice(orderIndex, 1);  
    console.log(`Pesanan ID: ${orderId} telah dihapus.`);  
  } else {  
    console.log("Pesanan tidak ditemukan.");  
  }  
  showMenu();  
}  

async function handleMenu(choice) {  
  switch (choice) {  
    case '1':  
      await createOrder();  
      break;  
    case '2':  
      await viewOrders();  
      break;  
    case '3':  
      await updateOrder();  
      break;  
    case '4':  
      await deleteOrder();  
      break;  
    case '5':  
      console.log("Keluar dari aplikasi...");  
      rl.close();  
      break;  
    default:  
      console.log("Pilihan tidak valid.");  
      showMenu();  
  }  
}  

login();


// Tampilan Aplikasi dengan console
/* 
    Masukkan password: 123456

    setlah memasukan password maka langsung masuk ke halaman Menu utama

    Login berhasil!

Waktu Login: Thu Sep 19 2024 13:17:08 GMT+0700 (Waktu Indonesia Barat)
===== MENU UTAMA =====
1. Buat pesanan baru
2. Lihat semua pesanan
3. Perbarui pesanan
4. Hapus pesanan
5. Keluar
======================
Pilih opsi: 1

    Kemudian pilih opsi jika yang di pilih opsi 1 maka akan ke menu membuat pesanan baru seperti ini

Masukkan deskripsi pesanan:

    Kemudian input nama pesanan

Masukkan deskripsi pesanan: ayam goreng 

    lalu enter dan tampilan akan berubah menjadi seperti ini 

Pesanan baru telah dibuat dengan ID: 1 waktu: Thu Sep 19 2024 13:12:18 GMT+0700 (Waktu Indonesia Barat)
Waktu Login: Thu Sep 19 2024 13:17:08 GMT+0700 (Waktu Indonesia Barat)
===== MENU UTAMA =====
1. Buat pesanan baru
2. Lihat semua pesanan
3. Perbarui pesanan
4. Hapus pesanan
5. Keluar
======================
Pilih opsi: 2

    jika pilih opsi 2 akan menjadi seperti ini 


===== DAFTAR PESANAN =====
ID: 1, Deskripsi: ayam goreng
==========================
Waktu Login: Thu Sep 19 2024 13:17:08 GMT+0700 (Waktu Indonesia Barat)
===== MENU UTAMA =====
1. Buat pesanan baru
2. Lihat semua pesanan
3. Perbarui pesanan
4. Hapus pesanan
5. Keluar
======================
Pilih opsi: 3


    jika pilih opsi 3 maka akan ke menu memperbarui pesanan seperti ini


Masukkan ID pesanan yang ingin diperbarui: 1

    karena id pesanan hanya ada satu maka pilih 1

    lalu akan muncul tulisan ini 

Masukkan deskripsi baru:

    edit pesanan sesuai yang di inginkan misalkan yang tadinya ayam goreng kita ubah menjadi tahu goreng
    maka pesanan akan di perbarui dan tampilan akan menjadi seperti ini

Pesanan ID: 1 telah diperbarui. Thu Sep 19 2024 13:33:03 GMT+0700 (Waktu Indonesia Barat)
Waktu Login: Thu Sep 19 2024 13:30:52 GMT+0700 (Waktu Indonesia Barat)
===== MENU UTAMA =====
1. Buat pesanan baru
2. Lihat semua pesanan
3. Perbarui pesanan
4. Hapus pesanan
5. Keluar
======================
Pilih opsi: 4

    jika memilih opsi 4 atau menghapus pesanan maka akan muncul tulisan seperti ini 

Masukkan ID pesanan yang ingin dihapus: 1

    di sini kita tinggal menulis id yang ingin kita hapus misalkan 1
    maka pesanan yang telah kita pilih untuk di hapus maka akan terhapus dan tampilan akan jadi seperti ini 

Pesanan ID: 1 telah dihapus.
Waktu Login: Thu Sep 19 2024 13:30:52 GMT+0700 (Waktu Indonesia Barat)
===== MENU UTAMA =====
1. Buat pesanan baru
2. Lihat semua pesanan
3. Perbarui pesanan
4. Hapus pesanan
5. Keluar
======================
Pilih opsi: 5

jika pilih opsi 5 maka akan keluar dari aplikasi dan kembali ke tampilan gitbash awal dan semua pesanan akan di hapus

*/