const container = document.querySelector(".userlist");
const API = "https://dummyjson.com/users";
window.addEventListener("DOMContentLoaded", () => {
  fetch(API)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      data.users.forEach((user) => {
        let div = document.createElement("div");
        div.setAttribute("class", "userDiv");
        div.innerHTML = `
      <div class="userImg">
      <img src="${user.image}" alt="">
    </div>
    <div class="userData">
      <div class="fullname">
        <div class="names"><span class="label">Ism:</span> ${user.firstName}</div>
        <div class="names"><span class="label">Familiya:</span> ${user.lastName}</div>
        <div class="names"><span class="label">Otasining ismi:</span> ${user.maidenName}</div>
      </div>
      <div class="details">
        <div class="detail"><span class="label">Yosh:</span> ${user.age}</div>
        <div class="detail"><span class="label">Tug‘ilgan sana:</span> ${user.birthDate}</div>
        <div class="detail"><span class="label">Jinsi:</span> ${user.gender}</div>
      </div>
      <div class="contacts">
        <div class="contact"><span class="label">Email:</span> ${user.email}</div>
        <div class="contact"><span class="label">Telefon:</span> ${user.phone}</div>
      </div>
    </div>
            `;

        container.appendChild(div);
      });
    })
    .catch("Foydalanuvchilarnin ma'lumotlarini yuklashda hatolik yuz berdi");

  // border
});
