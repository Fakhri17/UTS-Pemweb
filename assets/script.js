String.prototype.EntoAr = function () {
  return this.replace(/\d/g, (d) => "٠١٢٣٤٥٦٧٨٩"[d]);
};
function changeToArabic(number) {
  return number.toString().EntoAr();
}

let mybutton = document.getElementById("btn-back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

(function () {
  var youtube = document.querySelectorAll(".youtube");

  for (var i = 0; i < youtube.length; i++) {
    var source =
      "https://images.unsplash.com/photo-1654429991781-ffb69148e4f5?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    var image = new Image();
    image.src = source;
    image.addEventListener(
      "load",
      (function () {
        youtube[i].appendChild(image);
      })(i)
    );

    youtube[i].addEventListener("click", function () {
      var iframe = document.createElement("iframe");

      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute(
        "src",
        "https://www.youtube.com/embed/" +
          this.dataset.embed +
          "?rel=0&showinfo=0&autoplay=1"
      );

      this.innerHTML = "";
      this.appendChild(iframe);
    });
  }
})();
