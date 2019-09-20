<script>
import { fade } from 'svelte/transition';
 import { form } from 'svelte-forms';

    if (process.browser) {
        flatpickr(document.getElementById('Date'), {
                dateFormat: "Y-m-d",
                mode: "range",
        });
    }


function validation() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var people = document.getElementById('people').value;
  var error = document.querySelectorAll('error-message');
  var text;
  
  
  if (name.length <6 ) {
      text = "Please enter valid name";
      error.innerHTML = text;
      return false;
  }
    if (isNaN(phone)|| phone.length != 10) {
        text = text.innerHTML = "Please enter valid phone";
        return false;
    }
      if (email.indexOf("@" === -1 || email.length < 6)) {
          text = "Please enter valid email";
          error.innerHTML = text;
          return false;
      }

    return false;
}






</script>

<svelte:head>
    <title>Book Now | Villa Jatica</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/flatpickr/dist/flatpickr.min.css">
    <script src="https://cdn.jsdelivr.net/npm/flatpickr"></script>
</svelte:head>

<style>

.col-7 {
    background-image: url("../../assets/images/exterior.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: calc(100vh - 55px);
}

.col-7:after {
    content: "";
    background: #002;
    opacity: .6;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}


.input,textarea{
    font-size: 15px;
    background: white;
    border: none;
    padding: 10px;
    display: inline-block;
    width: 100%;
    outline: none;
    font-family: "Georgia",sans-serif;
    font-weight: 300;
}

select  {
    -webkit-appearance: none;
}

.b-0 {
    border: none;
}

.error-message {
    color: red;
}


</style>

<nav class="navbar p-y-s flex bg-warn ai-center">
    <a href="#home" class="flex ai-center" transition:fade="">
        <img src="assets/icons/left.svg" alt="back" class="m-l-s">
        <p class="font-secondary m-l-s">Back</p>
    </a>
    <p class="c-accent m-l-l hide-s"><i>Book your stay now and enjoy in our beautifull villa Jatica!</i></p>
</nav>
<section class="book bg-primary">
    <div class="flex jc-center fw-wrap form-container">
        <div class="col-5 bg-primary p-a-l col-s-12">
            <p class="c-dark">Please use the contact form below to send us your booking request. We will get back with you with confirmation promptly (during local working hours).</p>
            <form id="form" class="w-full" on:submit|preventDefault={validation}>
            <div class="field m-y-s">
                <label for="Date" class="c-dark"><i>Check in/Check out</i></label>
                <input class="w-full input"  id="Date">
            </div>
            <div class="field">
                <label for="name" class="c-dark"><i>Full name*</i></label>
                <input class="w-full input" id="name">
                <span class="error-message"></span>
            </div>
            <div class="field m-y-s">
                <label for="email" class="c-dark"><i>Email*</i></label>
                <input class="w-full input" id="email">
            </div>
            <div class="field">
                <label for="phone" class="c-dark"><i>Phone*</i></label>
                <input class="w-full input" id="phone">
            </div>
            <div class="field m-y-s">
                <label for="people" class="c-dark"><i>People*</i></label>
                <select  id="people" class="c-dark input w-full">
                    <option style="display: none"></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
            </div>
            <div class="field">
                <label for="message" class="c-dark"><i>Additional Information</i></label>
                <textarea  id="message" cols="30" rows="10" class="w-full b-0"></textarea>
            </div>
            <div class="w-full ta-left m-t-s">
                 <button class="btn bg-accent br-rounded">SEND MESSAGE</button>
            </div>
            </form>
            <div class="grid">
adsa
            </div>
        </div>
        <div class="col-7 relative flex jc-center ai-center hide-s">
            <h2 class="c-light z-index">BOOK NOW</h2>
        </div>
    </div>
</section>
