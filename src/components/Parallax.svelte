
<script>

    export let feature;
    export let feature2;
    export let feature3;
    export let feature4;

</script>

<style>

.grid {
  max-width: 1200px;
}
.col-3,h1 {
z-index: 3;
}


</style>

<section class="features relative p-y-l">
    <div class="col-12 ta-center relative">
        <h1 class="c-light ta-center">ADDITIONAL FEATURES</h1>
    </div>
    <div class="grid m-t-s">
        <div class="col-3 col-xs-12 ta-center">
            <div class="bg-light br-rounded p-a-s font-secondary feature">
               <img src="assets/icons/router.svg" class="m-t-m" alt="Router">
               <p class="m-t-s"><i>{feature}</i></p>
            </div>
        </div>
        <div class="col-3 col-xs-12 ta-center">
            <div class="bg-light br-rounded p-a-s feature italic-text font-secondary">
               <img src="assets/icons/washing-machine.svg" class="m-t-m" alt="washing-machine">
               <p class="m-t-s"><i>{feature2}</i></p>
            </div>
        </div>
        <div class="col-3 col-xs-12 ta-center">
            <div class="bg-light br-rounded p-a-s feature font-secondary">
               <img src="assets/icons/swimming.svg" class="m-t-m" alt="swimming">
               <p class="m-t-s"><i>{feature3}</i></p>
            </div>
        </div>
        <div class="col-3 col-xs-12 ta-center">
            <div class="bg-light br-rounded p-a-s feature font-secondary">
               <img src="assets/icons/cleaning.svg" class="m-t-m" alt="cleaning">
               <p class="m-t-s"><i>{feature4}</i></p>
            </div>
        </div>
    </div>
</section>
