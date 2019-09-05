

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
            <div class="bg-light br-rounded p-a-s feature">
               <img src="assets/icons/location.svg" class="m-t-m" alt="Location">
               <p class="m-t-s">{feature}</p>
            </div>
        </div>
        <div class="col-3 ta-center col-xs-12">
            <div class="bg-light br-rounded p-a-s feature">
               <img src="assets/icons/bedroom.svg" class="m-t-m" alt="Bedroom">
               <p class="m-t-s">{feature2}</p>
            </div>
        </div>
        <div class="col-3 ta-center col-xs-12">
            <div class="bg-light br-rounded p-a-s feature">
               <img src="assets/icons/bathroom.svg" class="m-t-m" alt="bathroom">
               <p class="m-t-s">{feature3}</p>
            </div>
        </div>
        <div class="col-3 ta-center col-xs-12">
            <div class="bg-light br-rounded p-a-s feature">
               <img src="assets/icons/kitchen.svg" class="m-t-m" alt="Location">
               <p class="m-t-s">{feature4}</p>
            </div>
        </div>
    </div>
</section>