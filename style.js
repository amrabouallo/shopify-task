function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))
  {
    return (true)
  }
    alert("You have entered an invalid email address!")
    return (false)
}
function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}
}
const emailInput = document.getElementById('email');
const emailFeedback = document.getElementById('email-feedback');

function validateEmail() {
  const email = emailInput.value;
  if (!email || !email.includes('@') || !email.includes('.')) {
    emailInput.classList.add('invalid');
    emailFeedback.textContent = 'Please enter a valid email address.';
    return false;
  } else {
    emailInput.classList.remove('invalid');
    emailFeedback.textContent = '';
    return true;
  }
}

emailInput.addEventListener('input', validateEmail);