
<script context="module">
	export function preload({}) {
		return this.fetch('home.json')
				.then(r => r.json());
	}
</script>




<script>

    export  let home = 0;

    import Carousel from '@beyonk/svelte-carousel'
    let readMore = true;
    const slides = [
        'assets/images/exterior/exterior.jpg',
        'assets/images/exterior/exterior-2.jpg',
        'assets/images/exterior/exterior-3.jpg',
        'assets/images/exterior/exterior-4.jpg',
        'assets/images/exterior/exterior-5.jpg',
    ];

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
                <p class="font-secondary italic-text m-y-s">With its spectacular views of the sea and islands, the mountain and blue Mediterranean skies, this newly renovated house is a combination of traditional Dalmatian architecture and modern interventions, built with respect for and appreciation of the tradition, thus resulting in a new construction having that charming old Dalmatian feel. The exterior stones in warm light beige tone and blue window shutters are in complete harmony with the blue sea, rocky mountain and the surrounding Mediterranean vegetation.</p>
                <div class="expand italic-text">
                <p class="font-secondary">You can also visit the town of Ston, famous for the remnants of medieval defensive walls, a historical monument of distant past often called "the European Walls of China," winding for 5 kilometres all the way to Mali Ston, a village famous for its seashell cuisine, especially oysters and mussels. A trip to the south will bring you to the town of Dubrovnik, certainly the most famous Croatian spot on global scale, as well as UNESCO World Heritage Site.</p>
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
    <div class="flex jc-between w-full m-t-m ai-center fw-wrap">
        <div class="col-7 col-s-12 ta-center">
            <img src="assets/images/group.png" alt="Group fo exterior pictures">
        </div>
        <div class="col-5 col-s-12">
            <h5>OUTDOOR PLEASURE</h5>
            <p class="m-y-s italic-text font-secondary">The exterior extends on three levels. The swimming pool (4.5x7.5m) with endless view is accompanied by a roofed terrace and lounges, as well as two swings.</p>
            <div class="expand italic-text font-secondary">
            <p class="">The sunny terrace or pool lounge with open fireplace table is on the level below, and in deep shade, beneath the house, there is an unexpected jewel - fully equipped outdoor kitchen with dining table made of stone seating 12 people, small garden with culinary herbs, large stone masonry barbecue and even more, a tavern having fully equipped kitchenette with dishwasher, double fridge with ice maker and dining table seating 8 people.</p>
            <p class=" m-y-s">The entire section of the outdoor kitchen is roofed, therefore protected from the midday sunlight and an excellent choice for dining outside.</p>
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
