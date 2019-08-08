
<script >

    let readMore = true;

    function expandText() {
      readMore = false;
      const hiddenEl = document.querySelectorAll('.hide-l');

      hiddenEl.forEach(val => {
          val.classList.remove('hide-l')
          val.classList.add('visible');
      });
    }

    function showLess() {

        readMore = true;

      const visibleEl = document.querySelectorAll('.visible');

            visibleEl.forEach(val => {
                val.classList.add('hide-l')
                val.classList.remove('visible');
            });
    }


</script>

<style>

.grid {
  max-width: 1200px;
}

.left {
    cursor:pointer;
    position:absolute;
    top: 47%;
    left: -40px;
}
.right {
    cursor:pointer;
    position:absolute;
    top: 47%;
    right: -40px;
}

</style>



<section id="indulge">
<div class="grid m-y-l">
    <div class="col-12 ta-left">
        <h1 class="headline relative c-dark p-b-s">INDULGE</h1>
    </div>
    <div class="flex w-full jc-between fw-wrap">
    <div class="col-5 col-s-12">
        <img src="assets/images/indulge.jpg" alt="House exterior">
    </div>
    <div class="col-7 flex fd-col fw-wrap col-s-12">
            <h5 class="c-dark m-t-s  ta-left">Enjoy in beautiful nature and delicious foodY</h5>
            <p class="font-secondary m-y-s">Since the population mainly lives from farming and agriculture (apart from tourism), you will find an exquisite offer of traditionally prepared Dalmatian dishes, which includes fish and seafood from the day's catch, fresh meat from local farms, and home grown vegetables.</p>
            <p class="font-secondary hide-l ">You should not miss the restaurant Galeb  a family owned business offering the finest quality produce prepared in traditional style, with the best black risotto with cuttlefish and red prawn risotto in the region, prepared by old traditional receipt. Certainly do not miss their best chocolate walnut cake! There you will taste only daily offer of the fish hooked early in the morning, and the vegetables from their garden. There is also possibility for our guests to be provided with catering from the restaurant "Galeb" if you do not feel like cooking on your holidays or leaving your gorgeous Villa Jatica. </p>
            <p class="font-secondary hide-l m-y-s">For those who like to explore new places through local offer of food, there is a multitude of delightful taverns, restaurants and wine cellars offering local specialties, beautiful light and healthy Dalmatian meals, part of Mediterranean cuisine. For meat lovers, there is also an excellent offer of grilled highest quality meats from local farms. We can recommend a few spots in the vicinity we hope will be to your taste.</p>
            <p class="font-secondary hide-l">Restaurant <b>Jeny</b> in Gornji Tučepi</p>
            <p class="font-secondary hide-l m-y-s">Restaurant <b>Bota Šare</b> in Mali Sotin</p>
            <p class="font-secondary hide-l m-b-s">Restaurant <b>Ranč</b> in Tučepi</p>
            {#if readMore}
            <a on:click={expandText} class="c-accent m-t-s"><i>...Read more</i></a>
            {:else}
            <a on:click={showLess} class="c-accent">
            Show less
            </a>
            {/if}
        <div class="gallery m-t-m w-full relative">
            <img src="assets/icons/left-arrow.svg" class="left">
            <img src="assets/images/beach.jpg" alt="" class="w-full">
            <img src="assets/icons/right-arrow.svg" class="right">
        </div>
    </div>
    </div>

</div>
</section>