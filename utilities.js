document.addEventListener("input", function () {
  const nameInput = document.getElementById("name").value.trim();
  const numberInput = document.getElementById("number").value.trim();
  const nextButton = document.getElementById("nextButton");

  if (nameInput !== "" && numberInput !== "") {
    nextButton.removeAttribute("disabled");
  } else {
    nextButton.disabled = true;
  }
});

function hideElementByID(e) {
  const element = document.getElementById(e);
  element.classList.add("hidden");
}
function showElementByID(e) {
  const element = document.getElementById(e);
  element.classList.remove("hidden");
}
function removeBackgroundByID(e) {
  const element = document.getElementById(e);
  element.classList.remove("bg-green-400");
}
function setBackgroundByID() {
  const element = document.getElementsByClassName();
  element.classList.add("bg-green-400");
}

const allBtn = document.getElementsByClassName("kbd");

let count2 = 40;
for (const btn of allBtn) {
  btn.addEventListener("click", function () {
    count2 = count2 - 1;
    setInnerText("seat-count-decressd", count2);
  });
}

let count = 0;
for (const btn of allBtn) {
  btn.addEventListener("click", function (e) {
    count = count + 1;
    const seatName = e.target.innerText;

    const seatClass = "Economy";
    const price = 500;
    const selectedSeat = document.getElementById("selected-seat");
    const li = document.createElement("li");
    const p = document.createElement("p");
    p.innerText = seatName;
    const p2 = document.createElement("p");
    p2.innerText = seatClass;
    const p3 = document.createElement("p");
    p3.innerText = price;
    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);

    if (count > 4) {
      alert("You have reachd the highest  limit ");
      return;
    }
    this.classList.add("bg-green-500");
    selectedSeat.appendChild(li);

    totalPrice("total-price", parseInt(price));

    grandTotalPrice();

    setInnerText("seat-count", count);
  });
}
function totalPrice(id, value) {
  const totalPrice = document.getElementById(id).innerText;

  const convertedPrice = parseInt(totalPrice);
  const sum = convertedPrice + parseInt(value);
  setInnerText(id, sum);
}
function grandTotalPrice() {
  const totalPrice = document.getElementById("total-price").innerText;
  const convertedPrice = parseInt(totalPrice);
  const couponInput = document.getElementById("coupon-input");
  const applyButton = document.getElementById("apply-button");
  applyButton.addEventListener("click", function () {
    const enteredCoupon = couponInput.value;
    if (enteredCoupon === "NEW15") {
      let discount = totalPrice * 0.15;
      let payment = convertedPrice - discount;
      setInnerText("grand-total", payment);
      alert("Coupon applied successfully!");
    } else if (enteredCoupon === "Couple 20") {
      let discount = totalPrice * 0.2;
      let payment = convertedPrice - discount;
      setInnerText("grand-total", payment);
      alert("Coupon applied successfully!");
    } else {
      setInnerText("grand-total", convertedPrice);
    }
  });
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
