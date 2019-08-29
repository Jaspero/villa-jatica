<script context="module">
	export function preload({}) {
		return this.fetch('gallery.json')
				.then(r => r.json());
	}
</script>

<script>
   import { fade, fly } from 'svelte/transition';

    export let galleries = [];
    let selected = galleries[0].gallery;
    let images = selected;



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
        let totalLengthRound;
        let select = 0;
        let galleryOpen = null;

        function nextSlide() {
            if (select< totalLengthRound - 1){
                select++;

            } else {
                select= 0;
            }
        }

        function prevSlide() {
           if (select> 0){
               select--;
           } else {
               select= totalLengthRound - 1;
           }
        }

</script>



<style>

    .albums {
        background: #cccccc;
        align-content: flex-start;
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
        {#each galleries as gallery}
            <div class="col-6 col-m-12 m-y-s">
                <div class="h-full w-full" on:click={() => selected = gallery.gallery}>
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
                    <div class="col-12 col-s-6 col-xs-12">
                        <div class="flex fw-wrap">
                        {#each selected as select}
                          <img src="{select}" alt="Gallery preview" class="obj-cover m-a-s exterior-image" on:click={() => galleryOpen = selected}>
                          {/each}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


{#if galleryOpen}
<div class="gallery-backdrop" in:fade="{{duration: 200}}" out:fade="{{duration: 200}}">
    <div class="gallery-wrapper relative ai-center jc-center" in:fly="{{y: 200, duration: 600}}">
        <div class="gallery-view flex ai-center jc-center">
                        {#each selected as select}
                          <img src="{select}" alt="Gallery view" class="obj-cover m-a-s exterior-image">
                          {/each}
                        </div>
        <div class="close-gallery">
            <img src="assets/icons/cancel.svg" alt="Close gallery" on:click={() => galleryOpen = null}>
        </div>
    </div>
</div>
{/if}