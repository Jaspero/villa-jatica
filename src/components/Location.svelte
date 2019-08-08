
<script>

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

.visible {
display: block;
}


</style>


<section id="location" class="m-y-l">
    <div class="grid">
        <div class="col-6 col-s-12">
            <h1 class="c-dark relative p-b-s m-y-m headline">LOCATION</h1>
            <p class="ta-justify font-secondary">Villa Jatica is located in the Southern Dalmatia, on the slopes of Biokovo Mountain. Perched on the heights above the village of Zaostrog, the villa offers fantastic view of the Adriatic Sea, the tip of Pelješac peninsula, and the islands of Korčula and Hvar. It is a perfect quiet getaway to leave the world behind and truly unwind in wilderness and natural beauty of this remote destination, yet to pamper yourself in complete comfort and luxury the house offers.</p>
        </div>
        <div class="col-5 col-s-12 ta-center relative">
            <img src="assets/images/map.png" alt="map">
            <div class="location flex ai-center">
                <img src="assets/images/map-location.png" alt="">
                <span class="c-accent m-l-s">Explore the map</span>
            </div>
        </div>

        <div class="col-8 flex  m-t-l col-s-12">
            <div class="col-6 br-circle bg-1 col-xs-12">

            </div>
            <div class="col-6 br-circle bg-2 m-l-m col-xs-12">

            </div>
        </div>
        <div class="col-4 m-t-l col-s-12">
            <h5>LOCAL AREA</h5>
            <p class="font-secondary m-y-s">If you feel like sightseeing, you can choose from a number of exciting places whether you decide to drive up north towards the town of Split or down south towards the town of Dubrovnik. If you choose to visit Split, you will pass through beautiful small coastal places, as well as the town of Makarska and Omiš, both well worth of sightseeing. Also, you can visit the sunniest island of Hvar since ferry port Drvenik is merely several minutes drive from Zaostrog.</p>
            <p class="m-t-s hide-l">If you choose to go south, after a short drive you will reach the ferry port Ploče, connecting the mainland with the tip of Pelješac peninsula. Well-known for its wine and vineyards, especially one of the best and most intriguing Croatian wine sort Plavac Mali, Pelješac peninsula is certainly a Southern Dalmatian attraction.</p>
            <p class="p-y-s hide-l">You can also visit the town of Ston, famous for the remnants of medieval defensive walls, a historical monument of distant past often called "the European Walls of China," winding for 5 kilometres all the way to Mali Ston, a village famous for its seashell cuisine, especially oysters and mussels. A trip to the south will bring you to the town of Dubrovnik, certainly the most famous Croatian spot on global scale, as well as UNESCO World Heritage Site.</p>
            {#if readMore}
            <a on:click={expandText} class="c-accent"><i>...Read more</i></a>
            {:else}
            <a on:click={showLess} class="c-accent">
            Show less
            </a>
            {/if}
        </div>

    </div>
</section>