
<script>
    import { fade } from 'svelte/transition';
    import { fly } from 'svelte/transition';

    export let location;
    export let area;
    export let expand;
    export let expandArea;

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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.bg-1 {
    width: 300px;
    height: 300px;
    background-image: url("../../localarea1.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}

.bg-2 {
    width: 300px;
    height: 300px;
    background-image: url("../../localarea2.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

.location {
    position:absolute;
    top:67%;
    left: 55%;
}



</style>


<section id="location" class="m-y-l relative">
    <div class="grid">
        <div class="col-6 col-s-12 ">
            <h1 class="c-dark relative p-b-s m-y-m headline">LOCATION</h1>
            <p class="ta-justify italic-text font-secondary">{location}</p>
        </div>
        <div class="col-5 col-s-12 ta-center relative">
            <img src="assets/images/map.png" alt="map">
            <div class="location flex ai-center">
                <img src="assets/images/map-location.png" alt="">
                <span class="c-accent m-l-s">Explore the map</span>
            </div>
        </div>

        <div class="col-8 flex  m-t-l col-s-12 circle-container fw-wrap ">
            <div class="col-6 br-circle bg-1 col-xs-12">

            </div>
            <div class="col-6 br-circle bg-2 m-l-m col-xs-12">

            </div>
        </div>
        <div class="col-4 m-t-l col-s-12">
            <h5>LOCAL AREA</h5>
            <p class="font-secondary italic-text m-y-s">{area}</p>
            <div class="expand italic-text font-secondary">
                <p  class="m-t-s">{expand}</p>
                <p class="m-y-s">{expandArea}</p>
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
</section>