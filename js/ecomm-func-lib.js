
function captMailList() {
  event.preventDefault();
  var emailaddr = document.mailingList.email.value;

  if (emailaddr=="") {
     console.log("Mailing list cannot be blank. Please enter a valid email address.");
  } else {
    console.log("Thanks for signing up for our mailing list, "+ emailaddr);
  }
}
