
<script>

    import { fade } from 'svelte/transition';

</script>

<style>

.col-7 {
    background-image: url("../../assets/images/exterior-1.jpg");
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


input {
    background: white;
    border: none;
    padding: 8px;
    display: inline-block;
    width: 100%;
    outline: none;
    font-size: 1.5rem;
    font-family: "Georgia",sans-serif;
    font-weight: 300;
}

.b-0 {
    border: none;
}




</style>



<svelte:head>
	<title>Book now</title>
</svelte:head>

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
            <div class="field m-y-s">
                <label for="check" class="c-dark"><i>Check in/Check out</i></label>
                <input class="w-full" type="text" name="check">
            </div>
            <div class="field">
                <label for="name" class="c-dark">Full name*</label>
                <input class="w-full" type="text" name="name" id="name">
            </div>
            <div class="field m-y-s">
                <label for="email" class="c-dark">Email*</label>
                <input class="w-full" type="text" name="email" id="email">
            </div>
            <div class="field">
                <label for="phone" class="c-dark">Phone*</label>
                <input class="w-full" type="text" name="phone" id="phone">
            </div>
            <div class="field m-y-s">
                <label for="people" class="c-dark">People*</label>
                <input class="w-full" type="text" name="people" id="people">
            </div>
            <div class="field">
                <label for="message" class="c-dark">Additional Information</label>
                <textarea name="message" id="message" cols="30" rows="10" class="w-full b-0"></textarea>
            </div>
            <div class="w-full ta-left m-t-s">
                 <button class="btn bg-accent br-rounded">SEND MESSAGE</button>
            </div>
        </div>
        <div class="col-7 relative flex jc-center ai-center hide-s">
            <h2 class="c-light z-index">BOOK NOW</h2>
        </div>
    </div>
</section>