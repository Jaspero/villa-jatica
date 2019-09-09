<script>
    export let house;
    export let expand;
    export let outdoor;
    export let outdoorExpand;
    export let outdoorExpand1;
    export let slider = [];


    import Carousel from '@beyonk/svelte-carousel'
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


.right {
    right: -75px;}
          @media (max-width: 1270px) {
            .right {
                right: 0; } }
.left {
    left: -75px;}
          @media (max-width: 1270px) {
            .left {
                left: 0; } }


.grid {
  max-width: 1200px;
}

</style>



<section id="house" class="relative">
<div class="grid m-y-l">
    <div class="col-12 ta-left">
        <h1 class="headline relative c-dark p-b-s">House</h1>
    </div>
    <div class="flex  w-full jc-between fw-wrap">
        <div class="col-5 col-s-12">
            <img src="assets/images/blue-doors.jpg" alt="House exterior" class="image">
        </div>
        <div class="col-7 flex fw-wrap col-s-12">
                <h5 class="c-dark m-t-s ta-left">AWESOME PLACE TO ENJOY</h5>
                <p class="font-secondary italic-text m-y-s">{house}</p>
                <div class="expand italic-text">
                <p class="font-secondary">{expand}</p>
                </div>
                {#if readMore}
                <a on:click={expandText} class="c-accent m-t-s font-secondary"><i>...Read more</i></a>
                {:else}
                <a on:click={showLess} class="c-accent m-t-s">
                Show less
                </a>
                {/if}
            <div class="m-t-m w-full relative">
                <Carousel perPage="{1}" class="relative">
                    <span class="control left" slot="left-control">
                        <img src="assets/icons/left-arrow.svg">
                    </span>
                        {#each slider as slide}
                                 <img src="{slide}" alt="Gallery view" class="obj-cover  gallery-image">
                        {/each}
                    <span class="control right" slot="right-control">
                        <img src="assets/icons/right-arrow.svg">
                    </span>
                </Carousel>
            </div>
        </div>
    </div>
    <div class="flex jc-between w-full m-t-m ai-center fw-wrap">
        <div class="col-7 col-s-12 ta-center">
            <img src="assets/images/group.png" alt="Group fo exterior pictures">
        </div>
        <div class="col-5 col-s-12">
            <h5>OUTDOOR PLEASURE</h5>
            <p class="m-y-s italic-text font-secondary">{outdoor}</p>
            <div class="expand italic-text font-secondary">
            <p class="">{outdoorExpand}</p>
            <p class=" m-y-s">{outdoorExpand1}</p>
            </div>
            {#if readMore}
            <a on:click={expandText} class="c-accent font-secondary"><i>...Read more</i></a>
            {:else}
            <a on:click={showLess} class="c-accent font-secondary"><i>
            Show less
            </i>
            </a>
            {/if}
        </div>
    </div>
</div>
</section>
