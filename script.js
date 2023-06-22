// mobile nav bar
const doc = document;
const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

menuOpen.addEventListener("click", () => {
  overlay.classList.add("overlay--active");
});

menuClose.addEventListener("click", () => {
  overlay.classList.remove("overlay--active");
});

//Dog Calculator 2
$('.num-age').keyup(function(e) {
  var num, smallAge;

  num = $(this).val();

  if (!$.isNumeric(num)) {
    return;
  }

  smallAge = (num * 7) + " years old in dog years!";

  $('.total-small-dog').html(smallAge);
});


