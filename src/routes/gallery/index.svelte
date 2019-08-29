<script context="module">
	export function preload({}) {
		return this.fetch('gallery.json')
				.then(r => r.json());
	}
</script>

<script>
   import { fade } from 'svelte/transition';

    export let galleries = [];
    let selected = galleries[0].gallery;


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

    function openGallery() {
        const closeEl = document.querySelector('.close-gallery');
        const backdropEl = document.querySelector('.gallery-backdrop');
        backdropEl.classList.toggle('active-gallery');

         closeEl.addEventListener('click', ()=> {
         if (!backdropEl.contains(closeEl.target)) {
            backdropEl.classList.remove('active-gallery');
            }
          })
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
                        {#each selected as gallery}
                          <img src="{gallery}" alt="Gallery preview" class="obj-cover m-a-s exterior-image" on:click={openGallery}>
                          {/each}
                        </div>

                    </div>
                    <div class="col-3 col-s-6 col-xs-12" on:click={openGallery}>
                        <div class=" w-full h-full"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<div class="gallery-backdrop">
    <div class="gallery-wrapper relative ai-center jc-center">
        <div class="gallery-view">
            <img src="assets/images/indulge.jpg" alt="exterior">
        </div>
        <div class="close-gallery">
            <img src="assets/icons/cancel.svg" alt="Close gallery">
        </div>
    </div>
</div>