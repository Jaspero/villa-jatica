

<script>
        import Carousel from '@beyonk/svelte-carousel'

    export let interior;
    export let interiorExpand;
    export let interiorExpandable;
    export let interiorBedroom;


    const slides = [
        'assets/images/interior/interior-1.jpg',
        'assets/images/interior/interior-2.jpg',
        'assets/images/interior/interior-3.jpg',
        'assets/images/interior/interior-4.jpg',
        'assets/images/interior/interior-5.jpg'
    ];


    let readMore = true;

    function expandText() {
      readMore = false;
      const hiddenEl = document.querySelectorAll('.expand');

      hiddenEl.forEach(val => {
          val.classList.remove('expand');
          val.classList.add('visible');
      });
    }

    function showLess() {

        readMore = true;

      const visibleEl = document.querySelectorAll('.visible');

            visibleEl.forEach(val => {
                val.classList.add('expand');
                val.classList.remove('visible');
            });
    }

</script>

<style>

.grid {
  max-width: 1200px;
}

.interior-1 {
      background-image: url("../../assets/images/interior2.jpg");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      width: 300px;
      height: 300px;
}
.interior-2 {
      background-image: url("../../assets/images/interior4.jpg");
      background-repeat: no-repeat;
      background-position: center center;
      background-size: cover;
      width: 300px;
      height: 300px;
}

.right {
    right: -75px;}
          @media (max-width: 1270px) {
            .right {
              right: 0px } }
.left {
    left: -75px;}
      @media (max-width: 1270px) {
        .left {
          left: 0px } }



</style>



<section id="interior" class="relative">
<div class="grid m-y-l">
    <div class="col-12 ta-left">
        <h1 class="headline relative c-dark p-b-s">Interior</h1>
    </div>
    <div class="flex w-full jc-between fw-wrap">
        <div class="col-5 col-s-12">
            <img src="assets/images/interior.jpg" alt="Interior from outside" class="image">
        </div>
        <div class="col-7 flex fw-wrap col-s-12">
                <h5 class="c-dark m-t-s  ta-left">BEAUTY OF MINIMALISM</h5>
                <p class="font-secondary m-y-s italic-text">{interior}</p>
                <div class="expand font-secondary italic-text">
                    <p>{interiorExpand}</p>
                    <p class="m-y-s">{interiorExpandable}</p>
                </div>
                {#if readMore}
                <a on:click={expandText} class="c-accent"><i>...Read more</i></a>
                {:else}
                <a on:click={showLess} class="c-accent">
                Show less
                </a>
                {/if}
            <div class="m-t-m w-full relative">
                 <Carousel perPage="{1}" class="relative">
                    <span class="control left" slot="left-control">
                        <img src="assets/icons/left-arrow.svg">
                    </span>
                        {#each slides as slide}
                            <img  src={slide} id="slider-image" alt="" class="w-full obj-cover" style="height: 500px">
                        {/each}

                    <span class="control right" slot="right-control">
                        <img src="assets/icons/right-arrow.svg">
                    </span>
                 </Carousel>
            </div>
        </div>
    </div>
    <div class="w-full flex ai-center fw-wrap">
        <div class="col-8 flex m-t-l col-s-12 fw-wrap circle-container">
            <div class="col-6 br-circle interior-1 col-xs-12">
            </div>
            <div class="col-6 br-circle interior-2 m-l-m col-xs-12">
            </div>
        </div>
        <div class="col-4 m-t-l col-s-12">
            <h5 class="w-full">BEDROOMS</h5>
            <p class="font-secondary italic-text m-y-s">{interiorBedroom}</p>
         </div>
     </div>
</div>
</section>
