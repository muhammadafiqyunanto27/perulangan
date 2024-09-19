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