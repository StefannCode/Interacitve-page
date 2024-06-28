let grade = 0;
let selectedButton = null;
let isClicked = false;

/*const clickedButton = document.querySelector(
    `.buttonelement:nth-child(${scale})`
  );*/

const clickedButton = document.querySelectorAll(".buttonelement");
clickedButton.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonClicked = button.dataset.ratingButton;
    console.log(button);

    if (selectedButton === button) {
      selectedButton.classList.remove("active");
      selectedButton = null;
      grade = 0;
      isClicked = false;
    } else {
      button.classList.add("active");
    }
    if (selectedButton) {
      selectedButton.classList.remove("active");
    }

    selectedButton = button;
    grade = buttonClicked;
    isClicked = true;
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

function isChecked() {
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
}
