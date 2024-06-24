let grade = 0;
let selectedButton = null;
let isClicked = false;

//Kroz switch dobijem koja je ocena izabrana, grade mora da bude globalna varijabla da bih joj pristupio u drugoj funkciji
function rating(scale) {
  const clickedButton = document.querySelector(
    `.buttonelement:nth-child(${scale})`
  );

  if (selectedButton === clickedButton) {
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
  }
}

function isChecked() {
  if (!isClicked) {
    alert("You must select rating number");
    return false;
  } else {
    return true;
  }
}

/* Ovako sa DOM povezujes HTML i Java script, kad se klikne, u varijablu html se skaldiste html elementi sa novim klasama koje se posle stilizuju u CSSU.
  Na kraju samo sa query selector koji selektuje sa klasom div u htmlu se izbace novi elementi prakticno iz varijable*/
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
