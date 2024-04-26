let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
  };
  
  // Ubahlah data  tersebut menggunakan spread operator menjadi:
  let newData = {
    ...data,
    // Ganti dengan nama
    name: "Gilang Arya Permana", 
    // Ganti dengan email 
    email: "gilanganteng@gmail.com", 
    // Ganti dengan hobi
    hobby: "making electronic music , game",
  };
  
  //Ambilah data “street dan city” tersebut menggunakan destructuring
  const { address: { street, city } } = newData;
  
  console.log(newData);
  console.log("Street:", street , ", City:", city);