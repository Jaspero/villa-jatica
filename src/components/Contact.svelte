<style>

.grid {
    max-width: 1200px;
}

.contact-card {
    box-shadow: 0px 10px 20px rgba(0,0,0,0.1);
}

.contact {
    background: linear-gradient(180deg, #eee 50%, #fff 50%);
}

.contact-input {
    border: none;
    outline: none;
    border-bottom: 1px solid #ccc;
}

h1  {
    font-weight: 700;
}

</style>


<div class="wrapper relative">
<section class="contact p-y-xl" id="contact">
    <div class="grid">
         <div class="col-10 ta-left">
             <h1 class="c-dark p-y-m">CONTACT US</h1>
         </div>
            <div class="col-10">
            <div class="contact-card z-index bg-light flex">
                    <div class="col-8 flex fw-wrap col-s-12">
                        <div class="col-6 flex fd-col col-xs-12">
                           <label for="name" class="font-secondary"><i>Full Name</i></label>
                           <input type="text" name="name" id="name" class="contact-input p-y-s">
                        </div>
                        <div class="col-6 flex fd-col col-xs-12">
                            <label for="mail" class="font-secondary"><i>Email adress</i></label>
                            <input type="text" name="mail" id="mail" class="contact-input p-y-s">
                        </div>
                        <div class="col-12">
                            <label for="message" class="font-secondary"><i>Message</i></label>
                            <textarea name="message" id="message" cols="30" rows="10" class="contact-input w-full"></textarea>
                        </div>
                        <div class="col-12 ta-left">
                            <button class="br-rounded bg-accent btn">Send message</button>
                        </div>
                    </div>
                    <div class="col-4 bg-warn p-a-m ta-center col-s-12">
                        <h6 class="m-y-s">CONTACT INFORMATION</h6>
                        <div class="flex ai-start ta-left m-t-s">
                            <img src="assets/icons/adress.svg" alt="Adress">
                            <a href="" class="m-l-s">Staro selo - Despoti 4 Zaostrog, HR-21334, Croatia</a>
                        </div>
                        <div class="flex ai-start ta-left m-y-m">
                            <img src="assets/icons/phone-call.svg" alt="Adress">
                            <a href="" class="m-l-s"> +44 7398 112037</a>
                        </div>
                        <div class="flex ai-start ta-left">
                            <img src="assets/icons/mail.svg" alt="Adress">
                            <a href="mailto:info@villa-jatica.com" class="m-l-s">info@villa-jatica.com</a>
                        </div>
                    </div>
                </div>
            </div>
         </div>
</section>
</div>