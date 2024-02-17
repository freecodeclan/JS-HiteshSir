let fetchBtn = document.querySelector("#fetchBtn");
fetchBtn.addEventListener("click", butttonClickHandler);

function butttonClickHandler() {
  console.log("Button Clicked");

  //-- Instantiate/Create an xhr object
  const xhr = new XMLHttpRequest();

  //-- Open the object
  xhr.open("GET", "harsh.txt", true); //-- Here 'true' stands for Asynchronous

  xhr.onreadystatechange = function () {
    console.log(xhr.readyState);
    if (xhr.readyState === 4) {
      console.log(this.responseText);
    }
  };

  //-- What to do on progress --- Optional
  xhr.onprogress = function () {
    console.log("On Progress");
  };

  //-- What to do when response is ready
  // xhr.onload = function () {
  //   console.log(this.responseText);
  // };

  //-- Send the request
  xhr.send();
}
