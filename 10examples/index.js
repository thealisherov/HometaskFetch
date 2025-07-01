// // 1---------
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Mission complicated");
//   }, 2000);
// });

// promise1
//   .then((res) => console.log(res))
//   .catch(() => {
//     setTimeout(() => {
//       console.log("Sorry something went wrong");
//     }, 2000);
//   })
//   .finally(() => console.log("Mission done"));

// // 2-----------
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let data = true;
//     if (data) resolve("Successfully loaded");
//     else reject("Problem with downloading ");
//   }, 1000);
// });

// promise2
//   .then((res) => {
//     setTimeout(() => {
//       console.log(res);
//     }, 1000);
//   })
//   .catch((reject) => {
//     setTimeout(() => {
//       console.log(reject);
//     }, 3000);
//   });
// // 3----------

// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let Api = false;
//     if (Api) resolve("It's working succesfully");
//     else reject("ERROR");
//   }, 1000);
// })
//   .then((res) => {
//     setTimeout(() => {
//       console.log(res);
//     }, 1000);
//   })
//   .catch((reject) => {
//     setTimeout(() => {
//       console.log(reject);
//     }, 2000);
//   });

// // 4------------------
// const promise4 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("Xatolik yuz berdi keyinroq qaytadan urinib ko'ring!");
//   }, 1000);
// })
//   .then((res) => {
//     setTimeout(() => {
//       console.log(res);
//     }, 1000);
//   })
//   .catch((rej) => {
//     console.log(rej);
//   });
// // 5------
// let baseURL = "https://dummyjson.com/products";
// fetch(baseURL)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("Ma'lumotlarni yuklashda xatolik");
//     }
//   })
//   .then((res) => {
//     res.products.forEach((product) => {
//       console.log(product.title);
//     });
//   })
//   .catch((reject) => {
//     console.log(reject);
//   });

// // 6----------------

// fetch(baseURL)
//   .then((response) => {
//     if (response.ok) {
//       return response.json();
//     } else {
//       throw new Error("Sorry something went wrong");
//     }
//   })
//   .then((data) => {
//     data.products.forEach((product) => {
//       console.log(product.id);
//     });
//   })
//   .catch((Error) => {
//     setTimeout(() => {
//       console.log(Error.message);
//     }, 2000);
//   });

// Async await
// 1-------------
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Hello");
//   }, 1000);
// })

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("World");
//   }, 2000);
// });

// async function show(params) {
//   let First = await p1;
//   console.log(First);
//   let second = await p2;
// console.log(second);
// };

// show()

// 2----------
// let Ism = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let name = "John";
//     if (name) resolve(name);
//     else reject("No name found");
//   }, 1000);
// });

// let Familiya = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let secondName = "Doe";
//     if (secondName) {
//       resolve(secondName)
//     }else reject("SecondName not found");
//   }, 2000);
// });

// async function display(params) {
//  let name = await Ism;
//  console.log(name);
// let secondName= await Familiya;
// console.log(secondName);
// }
// display()

// let baseURL = "https://dummyjson.com/products";

// const productTitle = () => {
//   return fetch(baseURL)
//     .then((response) => {
//       if (response) {
//         return response.json();
//       } else throw new Error("Ma'lumotlarni yuklashda xatoilik");
//     })
//     .then((data) => {
//       data.products.forEach((product) => {
//         setTimeout(() => {
//           console.log(product.title);
//         }, 2000);
//       });
//     })
//     .catch((Error) => {
//       setTimeout(() => {
//         console.log(Error);
//       }, 3000);
//     });
// };

// const productID = () => {
//   return fetch(baseURL)
//     .then((response) => {
//       if (response) {
//         return response.json();
//       } else throw new Error("Ma'lumotlarni yuklashda xatoilik");
//     })
//     .then((data) => {
//       data.products.forEach((product) => {
//         setTimeout(() => {
//           console.log(product.id);
//         }, 2000);
//       });
//     })
//     .catch((Error) => {
//       setTimeout(() => {
//         console.log(Error);
//       }, 3000);
//     });
// };
// async function displayData() {
//   await productTitle();
//   await productID();
// }

// displayData();


// promise methods

// promise all
let username = new Promise((resolve, reject) => {
  setTimeout(() => {
    let name = "@jhon123";
    // Tasodifiy xatoni tekshiradigan misol
    if (!name) {
      reject("Something went wrong");
    } else {
      resolve(name);
    }
  }, 2000);
});

let userID = new Promise((resolve, reject) => {
  setTimeout(() => {
    let id = "123";
    if (!id) {
      reject("Something went wrong");
    } else {
      resolve(id);
    }
  }, 2000);
});

let status = new Promise((resolve, reject) => {
  setTimeout(() => {
    let stat = "active";
    if (!stat) {
      reject("Something went wrong");
    } else {
      resolve(stat);
    }
  }, 2000);
});

let all = Promise.all([username, userID, status])
  .then(([name, id, stat]) => {
    console.log("Username:", name);
    console.log("User ID:", id);
    console.log("Status:", stat);
  })
  .catch((error) => {
    console.log("Xatolik:", error);
  });
