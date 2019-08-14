
<script>
    import { fade } from 'svelte/transition';

    export let tab = 0;

        function albumsMenu() {
          const albumsEl = document.querySelector('.albums');
          albumsEl.classList.toggle('active-albums');

          event.stopPropagation();

          window.addEventListener('click', (event => {
                     if (!albumsEl.contains(event.target)) {
                       albumsEl.classList.remove('active-albums');

                     }
                   }))
        }









</script>



<style>

.albums {
    background: #cccccc;
    align-content: flex-start;
}

.exterior {
    background-image: url("../../header-bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100px;
}

.interior {
    background-image: url("../../assets/images/house-interior.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100px;
}

.village{
    background-image: url("../../assets/images/village.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100px;
}

.details{
    background-image: url("../../assets/images/details.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100px;
}


.nature{
    background-image: url("../../assets/images/nature.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100px;
}

.photos{
    background-image: url("../../assets/images/photos.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 100px;
}

.col-6 {
    height: 150px;
    cursor: pointer;
}





</style>


<svelte:head>
	<title>Gallery</title>
</svelte:head>


<nav class="navbar p-y-s flex bg-warn ai-center z-index">
    <a href="#home" class="flex ai-center" transition:fade="">
        <img src="assets/icons/left.svg" alt="back" class="m-l-s">
        <p class="font-secondary m-l-s">Back</p>
    </a>
    <p class="c-accent m-l-l hide-s"><i>Beautifull galleries of our villa Jatica, from interior to exterior!</i></p>
</nav>

<div class="flex gallery-container">

    <div class="albums flex fw-wrap ac-flex col-4 col-s-6 hide-xs">
        <div class="col-6 col-s-12">
            <div class="h-full w-full " class:active="{tab === 0}" on:click={() => tab = 0}>
            <div class="exterior"></div>
            <div class="bg-light w-full p-a-xs">
                <p class="ta-center"><i>House exterior</i></p>
            </div>
            </div>
        </div>


        <div class="col-6 col-s-12">
            <div class="h-full w-full " class:active="{tab === 1}" on:click={() => tab = 1}>
            <div class="interior"></div>
            <div class="bg-light w-full p-a-xs">
                <p class="ta-center"><i>House interior</i></p>
            </div>
            </div>
        </div>

        <div class="col-6 col-s-12">
            <div class=" w-full h-full" class:active="{tab === 2}" on:click={() => tab = 2}>
            <div class="village"></div>
            <div class="bg-light w-full p-a-xs">
                <p class="ta-center"><i>The old village</i></p>
            </div>
            </div>
        </div>

        <div class="col-6 col-s-12">
            <div class=" w-full h-full" class:active="{tab === 3}" on:click={() => tab = 3}>
            <div class="details"></div>
            <div class="bg-light w-full p-a-xs">
                <p class="ta-center"><i>House details</i></p>
            </div>
            </div>
        </div>

        <div class="col-6 col-s-12">
            <div class=" w-full h-full" class:active="{tab === 4}" on:click={() => tab = 4}>
            <div class="nature"></div>
            <div class="bg-light w-full p-a-xs">
                <p class="ta-center"><i>Beautiful nature</i></p>
            </div>
        </div>
        </div>

        <div class="col-6 col-s-12">
            <div class=" w-full h-full" class:active="{tab === 5}" on:click={() => tab = 5}>
            <div class="photos"></div>
            <div class="bg-light w-full p-a-xs">
                <p class="ta-center"><i>Guest photos</i></p>
            </div>
        </div>
        </div>
    </div>
     <div class="col-12">
         <button class="album-open w-full show-xs btn bg-accent m-b-m"on:click={albumsMenu}>Choose gallery</button>
                        {#if tab === 0}
                        <div class="exterior-container">
                            <div class="grid jc-start">
                                <div class="col-3 col-s-6">
                                <div class="exterior-image w-full h-full"></div>
                                </div>
                                <div class="col-3 col-s-6">
                                <div class="exterior-image w-full h-full"></div>
                                </div>
                            </div>
                        </div>
                        {:else if tab === 1}
                        <div class="interior-container">
                            <div class="grid jc-start">
                                <div class="col-3 exterior-image">
                                </div>
                            </div>
                        </div>
                        {:else if tab === 2}
                        <div class="interior-container">
                            <div class="grid jc-start">
                                <div class="col-3">
                                    <img src="assets/images/village.jpg" alt="exterior" class="w-full">
                                </div>
                            </div>
                        </div>
                        {:else if tab === 3}
                        <div class="details-container">
                            <div class="grid jc-start">
                                <div class="col-3">
                                    <img src="assets/images/details.jpg" alt="exterior" class="w-full">
                                </div>
                            </div>
                        </div>
                        {:else if tab === 4}
                        <div class="nature-container">
                            <div class="grid jc-start">
                                <div class="col-3">
                                    <img src="assets/images/interior.jpg" alt="exterior" class="w-full">
                                </div>
                            </div>
                        </div>
                            {:else if tab === 5}
                            <div class="guest-container">
                                <div class="grid jc-start">
                                    <div class="col-3">
                                        <img src="assets/images/indulge.jpg" alt="exterior" class="w-full">
                                    </div>
                                </div>
                            </div>
                            {/if}
                    </div>
</div>