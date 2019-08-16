

<script>

    const interiorSlider = [
        'assets/images/interior2.jpg',
        'assets/images/interior3.jpg',
        'assets/images/interior4.jpg'
    ];

    let activeIndex = 0;


    function slideRightInterior() {
        const imageSlider = document.querySelector('#slider-image-interior');

        if (activeIndex < interiorSlider.length - 1) {
            activeIndex++
        } else {
            activeIndex = 0;
        }
        imageSlider.src = interiorSlider[activeIndex]
    }


    function slideLeftInterior() {
        const imageSlider = document.querySelector('#slider-image-interior');

        if (activeIndex > 0) {
            activeIndex--;
        } else {
            activeIndex = interiorSlider.length - 1;
        }
        imageSlider.src = interiorSlider[activeIndex]
    }

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



</style>



<section id="interior" class="z-index">
<div class="grid m-y-l">
    <div class="col-12 ta-left">
        <h1 class="headline relative c-dark p-b-s">Interior</h1>
    </div>
    <div class="flex w-full jc-between fw-wrap z-index">
        <div class="col-5 col-s-12">
            <img src="assets/images/interior.jpg" alt="Interior from outside" class="image">
        </div>
        <div class="col-7 flex fw-wrap col-s-12">
                <h5 class="c-dark m-t-s  ta-left">BEAUTY OF MINIMALISM</h5>
                <p class="font-secondary m-y-s">The interior of the house is all new and contemporary, with carefully chosen furniture and unobtrusive colours. The open plan upper floor with kitchen, dining room, and living room is spacious and with its four French windows offering wonderful views of the sea, the entire section is full of light throughout the day.</p>
                <div class="expand">
                    <p class="font-secondary">In the kitchen, one will find all the necessary appliances and gadgets needed for a home cooked meal. The dining section has a table that seats 6 people, and its abundant daylight comes through a glass wall that leads to the balcony facing west, equipped with beautiful comfortable lounges for relaxation in the setting sun.</p>
                    <p class="font-secondary m-y-s">There is absolute formative minimalism throughout the house, not to disturb the beauty of the very construction. Thus, all the installations, from stone washbasin to glass shelves, carefully chosen lighting or flooring, custom made dining table or wardrobes are all the result of contemplation with aim to provide luxury and at the same time not impose any overwhelming contents on your holidays.</p>
                </div>
                {#if readMore}
                <a on:click={expandText} class="c-accent"><i>...Read more</i></a>
                {:else}
                <a on:click={showLess} class="c-accent">
                Show less
                </a>
                {/if}
            <div class="gallery m-t-m w-full relative">
            <img src="assets/icons/left-arrow.svg" on:click={slideLeftInterior} class="left">
            <img id="slider-image-interior" src={interiorSlider[0]} alt="" class="w-full obj-cover" style="height: 500px">
            <img src="assets/icons/right-arrow.svg" on:click={slideRightInterior} class="right">
            </div>
        </div>
    </div>
    <div class="col-8 flex m-t-l col-s-12 fw-wrap circle-container z-index">
        <div class="col-6 br-circle interior-1 col-xs-12">
        </div>
        <div class="col-6 br-circle interior-2 m-l-m col-xs-12">
        </div>
    </div>
    <div class="col-4 m-t-l col-s-12">
        <h5>BEDROOMS</h5>
        <p class="font-secondary m-y-s">The lower floor accommodates three bedrooms: one double master bedroom and two single bedrooms (with extra bed available in each), bathroom and two toilettes. Furniture is custom made and charming, enabling sufficient space for belongings. The master bedroom has direct access to the terrace and swimming pool, a lovely detail for your pleasure!</p>
     </div>
</div>
</section>
