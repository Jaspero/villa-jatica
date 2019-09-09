<script context="module">
	export function preload({}) {
		return this.fetch('gallery.json')
				.then(r => r.json());
	}
</script>

<script>
   import Carousel from '@beyonk/svelte-carousel'
   import { fade, fly } from 'svelte/transition';


    export let galleries = [];
    let selected = galleries[0].gallery;

    let slides = galleries;
    let galleryOpen = null;


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


    .col-6 {
        cursor: pointer;
    }
.active {
 border: 3px solid red;
}




</style>

<svelte:head>
    <title>Gallery | Villa Jatica</title>
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
        {#each galleries as gallery, i}
            <div class="col-6 col-m-12">
                <div class="h-full w-full" class:active="{gallery}" on:click={() => selected = gallery.gallery}>
                    <div class="preview">
                        <img src="{gallery.gallery}" alt="Gallery preview" class="obj-cover preview-img">
                    </div>
                    <div class="bg-light w-full p-a-xs">
                        <p class="ta-center"><i>{gallery.name}</i></p>
                    </div>
                </div>
            </div>
        {/each}
    </div>


    <div class="col-12">
        <button class="album-open w-full show-xs btn bg-accent m-b-m"on:click={albumsMenu}>Choose gallery</button>
            <div class="exterior-container">
                <div class="grid">
                    <div class="col-12 flex fw-wrap">
                        {#each selected as select}
                        <div class="col-4 col-s-6 col-xs-12">
                          <img src="{select}" alt="Gallery preview" class="obj-cover exterior-image w-full" on:click={() => galleryOpen = selected}>
                             </div>
                          {/each}
                    </div>
                </div>
            </div>
        </div>
    </div>


{#if galleryOpen}
<div class="gallery-backdrop" in:fade="{{duration: 200}}" out:fade="{{duration: 200}}">
    <div class="gallery-wrapper relative ai-center jc-center" in:fly="{{y: 200, duration: 600}}">
        <div class="gallery-view flex ai-center jc-center">
            <Carousel perPage="{1}" class="relative">
                  <span class="control left" slot="left-control">
                    <img src="assets/icons/gallery-arrow-left.svg" alt="">
                  </span>
                  {#each selected as select}
                      <div class="slide-content ta-center">
                          <img src="{select}" alt="Gallery view" class="obj-cover  gallery-image">
                      </div>
                  {/each}
                  <span class="control right" slot="right-control">
                    <img src="assets/icons/gallery-arrow-right.svg" alt="">
                  </span>
            </Carousel>
        </div>
        <div class="close-gallery">
            <img src="assets/icons/cancel.svg" alt="Close gallery" on:click={() => galleryOpen = null}>
        </div>
    </div>
</div>
{/if}


