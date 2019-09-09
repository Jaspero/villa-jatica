

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
        <h1 class="c-light">KEY FEATURES</h1>
    </div>
    <div class="grid m-t-s">
        <div class="col-3 ta-center col-xs-12">
            <div class="bg-light br-rounded p-a-s font-secondary feature">
               <img src="assets/icons/location.svg" class="m-t-m" alt="Location">
               <p class="m-t-s"><i>{feature}</i></p>
            </div>
        </div>
        <div class="col-3 ta-center col-xs-12">
            <div class="bg-light br-rounded p-a-s font-secondary feature">
               <img src="assets/icons/bedroom.svg" class="m-t-m" alt="Bedroom">
               <p class="m-t-s"><i>{feature2}</i></p>
            </div>
        </div>
        <div class="col-3 ta-center col-xs-12">
            <div class="bg-light br-rounded p-a-s font-secondary feature">
               <img src="assets/icons/bathroom.svg" class="m-t-m" alt="bathroom">
               <p class="m-t-s"><i>{feature3}</i></p>
            </div>
        </div>
        <div class="col-3 ta-center col-xs-12">
            <div class="bg-light br-rounded p-a-s font-secondary feature">
               <img src="assets/icons/kitchen.svg" class="m-t-m" alt="Location">
               <p class="m-t-s"><i>{feature4}</i>/p>
            </div>
        </div>
    </div>
</section>