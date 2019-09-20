
<script>
    import Carousel from '@beyonk/svelte-carousel'

    export let indulge;
    export let indulgeExpand;
    export let indulgeExpand1;
    export let indulgeSlider = [];

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

</style>



<section id="indulge" class="relative bg-light">
<div class="grid p-y-l">
        <div class="col-12 ta-left">
            <h1 class="headline relative c-dark p-b-s">INDULGE</h1>
        </div>
        <div class="flex w-full jc-between fw-wrap">
        <div class="col-5 col-s-12">
            <img src="assets/images/indulge.jpg" alt="House exterior" class="image">
        </div>
        <div class="col-7 flex fd-col col-s-12">
                <h5 class="c-dark m-t-s  ta-left">Enjoy in beautiful nature and delicious food</h5>
                <p class="font-secondary italic-text m-y-s">{indulge}</p>
               <div class="expand font-secondary italic-text">
                <p>{indulgeExpand}</p>
                <p class=" m-y-s">{indulgeExpand1}</p>
                <p>Restaurant <b class="c-dark"><a href="http://www.restaurant-jeny.hr/contact.html">Jeny</a> </b> in Gornji Tučepi</p>
                <p class=" m-y-s">Restaurant <b class="c-dark"><a href="https://www.bota-sare.hr/">Bota Šare</a></b> in Mali Sotin</p>
                <p class=" m-b-s">Restaurant <b class="c-dark"><a href="http://www.ranc-tucepi.hr/">Ranč</a></b> in Tučepi</p>
                </div>
                {#if readMore}
                <a on:click={expandText} class="c-accent m-t-s font-secondary" ><i>...Read more</i></a>
                {:else}
                <a on:click={showLess} class="c-accent font-secondary"><i>
                Show less
                </i>
                </a>
                {/if}

            <div class="m-t-m w-full relative">
                <Carousel perPage="{1}" class="relative">
                    <span class="control flex ai-center jc-center" slot="left-control">
                        <img src="assets/icons/left-arrow.svg">
                    </span>
                        {#each indulgeSlider as slide}
                            <img src="{slide}" alt="Gallery view" class="obj-cover  gallery-image">
                        {/each}
                <span class="control flex ai-center jc-center" slot="right-control">
                        <img src="assets/icons/right-arrow.svg">
                    </span>
                </Carousel>
            </div>
        </div>
    </div>

</div>
</section>