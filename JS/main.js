let grade = 0;
function rating(scale) {
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
}

function submit() {
  let html = `
    <div class="main-js">
      
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
      
    </div>`;

  document.querySelector(".main").innerHTML = html;
}
