let grade = 0;
let selectedButton = null;
let isClicked = false;

/*const clickedButton = document.querySelector(
    `.buttonelement:nth-child(${scale})`
  );*/

const clickedButtons = document.querySelectorAll(".buttonelement");

clickedButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonClicked = button.dataset.ratingButton;

    if (selectedButton === button) {
      // Ako je isto dugme ponovo kliknuto, toggle 'active' klasu
      button.classList.toggle("active");
      if (!button.classList.contains("active")) {
        // Ako je uklonjena 'active' klasa
        grade = 0;
        isClicked = false;
      } else {
        // Ako je dodata 'active' klasa
        grade = buttonClicked;
        isClicked = true;
      }
    } else {
      // Ako nije isto dugme, ukloni 'active' sa prethodnog i dodaj na trenutni
      if (selectedButton) {
        selectedButton.classList.remove("active");
      }
      button.classList.add("active");
      selectedButton = button;
      grade = buttonClicked;
      isClicked = true;
    }
  });
});

/*if (selectedButton === clickedButton) {
  selectedButton.classList.remove("active");
  selectedButton = null;
  grade = 0;
  isClicked = false;
} else {
  switch (scale) {
    case 1:
      grade = 1;
      break;
    case 2:
      grade = 2;
      break;
    case 3:
      grade = 3;
      break;
    case 4:
      grade = 4;
      break;
    case 5:
      grade = 5;
      break;
  }

  if (selectedButton) {
    selectedButton.classList.remove("active");
  }

  selectedButton = clickedButton;
  selectedButton.classList.add("active");
  isClicked = true;
}*/

/*function isChecked() {
  if (!isClicked) {
    alert("You must select rating number");
    return false;
  } else {
    return true;
  }
}

function submit() {
  if (!isChecked()) {
    return;
  }*/
/*function isChecked() {
  return isClicked; // Proverava da li je izabrana ocena
}*/

const submitBtn = document.querySelector(".submitButton-js");
submitBtn.addEventListener("click", () => {
  if (!isClicked) {
    alert("Morate izabrati ocenu.");
  } else {
    let html = `
    
      
    <div class="divforImage-js">
      <img src="Images/onlinepayment.png" alt="" />
    </div>
    <div class="forTextRatingNumbers">You selected ${grade} out of 5.</div>
    <div class="fortext1-js"><p class="text1-js">Thank you! </p></div>
    <div class="fortext2-js">
      <p class="text2-js">
        We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
      </p>
    </div>
  
`;

    document.querySelector(".main").innerHTML = html;
  }
});

/*function submit() {
  if (!isChecked()) {
    alert("Morate izabrati ocenu.");
    return;
  }

  let html = `
    
      
        <div class="divforImage-js">
          <img src="Images/onlinepayment.png" alt="" />
        </div>
        <div class="forTextRatingNumbers">You selected ${grade} out of 5.</div>
        <div class="fortext1-js"><p class="text1-js">Thank you! </p></div>
        <div class="fortext2-js">
          <p class="text2-js">
            We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
          </p>
        </div>
      
    `;

  document.querySelector(".main").innerHTML = html;
}*/
