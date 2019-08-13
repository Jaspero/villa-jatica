
<script>
    import { fade } from 'svelte/transition';

    export let tab = 0;
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

.small-gallery {
    border: none;
    outline: none;
    background: none;
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
    <div class="albums flex fw-wrap ac-flex col-4">
    <div class="grid">
              <div class="gg-tabs-buttons">
                <button class="gg-tabs-button" class:active="{tab === 0}" on:click={() => tab = 0}>High-throughput analyses</button>
                <button class="gg-tabs-button" class:active="{tab === 1}" on:click={() => tab = 1}>In depth glycoprofiling</button>
                <button class="gg-tabs-button" class:active="{tab === 2}" on:click={() => tab = 2}>Study design</button>
                <button class="gg-tabs-button" class:active="{tab === 3}" on:click={() => tab = 3}>Data analysis</button>
                <button class="gg-tabs-button" class:active="{tab === 4}" on:click={() => tab = 4}>Joint project development</button>
              </div>
</div>
        <div class="col-6">
            <button class="h-full w-full small-gallery" class:active="{tab === 0}" on:click={() => tab = 0}>
            <div class="exterior"></div>
            <div class="bg-light w-full p-a-xs">
                <p class="ta-center"><i>House exterior</i></p>
            </div>
            </button>
        </div>


        <div class="col-6">
            <button class="h-full w-full small-gallery" class:active="{tab === 1}" on:click={() => tab = 1}>
            <div class="interior"></div>
            <div class="bg-light w-full p-a-xs">
                <p class="ta-center"><i>House interior</i></p>
            </div>
            </button>
        </div>

        <div class="col-6">
            <button class="small-gallery w-full h-full" class:active="{tab === 2}" on:click={() => tab = 2}>
            <div class="village"></div>
            <div class="bg-light w-full p-a-xs">
                <p class="ta-center"><i>The old village</i></p>
            </div>
            </button>
        </div>

        <div class="col-6">
            <button class="small-gallery w-full h-full" class:active="{tab === 3}" on:click={() => tab = 3}>
            <div class="details"></div>
            <div class="bg-light w-full p-a-xs">
                <p class="ta-center"><i>House details</i></p>
            </div>
            </button>
        </div>

    <div class="col-6">
    <button class="small-gallery w-full h-full" class:active="{tab === 4}" on:click={() => tab = 4}>
    <div class="nature"></div>
    <div class="bg-light w-full p-a-xs">
        <p class="ta-center"><i>Beautiful nature</i></p>
    </div>
    </button>
    </div>

    <div class="col-6">
    <button class="small-gallery w-full h-full" class:active="{tab === 5}" on:click={() => tab = 5}>
    <div class="photos"></div>
    <div class="bg-light w-full p-a-xs">
        <p class="ta-center"><i>Guest photos</i></p>
    </div>
    </button>
    </div>
    </div>
     <div class="col-12">
                        {#if tab === 0}
                            <p>Immunoglobulin G (IgG) N-glycosylation analysis (analysis of total released N-glycans by UPLC-FLR and subclass-specific Fc N-glycopeptide analysis by LC-MS)</p>
                            <p>Plasma N-glycosylation analysis (analysis of total released N-glycans by UPLC-FLR)</p>
                        {:else if tab === 1}
                            <p>Analysis of released N-glycans</p>
                            <p>Site-specific N-glycosylation analysis</p>
                            <p>N-glycosylation site occupancy analysis</p>
                        {:else if tab === 2}
                            <p>Genos offers consultancies in study design, under the full or partial control of the experiment, for different fields of biomedicine. The mixture of expertise from Genos employees (biologists, pharmacist, chemists, statisticians and mathematicians) ensures the quality of the study design.</p>
                        {:else if tab === 3}
                            <p>Data analysis is an important aspect of the workflow Genos provides to the public. Since pure numbers, without thoughtful and meaningful explanation, are usually of little interest Genos invested significantly to its employee’s competence in statistics and computer science. Therefore, Genos now offers a wide range of statistical techniques from basic experimental methods of normalization or batch correction to standard topics like statistical inference or machine/statistical learning.</p>
                        {:else if tab === 4}
                            <h6>Cooperation and joint project development</h6>
                            <p>Genos is also an active research organization. On the basis of the recommendation of the National Science Council, the Ministry of Science, Education and Sports of the Republic of Croatia issued a permit that allowed Genos to formally register as a research organization in 2007. Genos currently participates in six FP7 projects (GlycoBioM, HighGlycan, IBD-BIOM, MIMOmics, Pain-OMICS and HTP-GlycoMet).</p>
                            <p>We are constantly in search of potential collaborative projects where we can contribute with our expertise in high-throughput glycomics and extensive experience of participation in large FP7 and H2020 consortia.</p>
                            {:else if tab === 5}
                            <h1 class="c-dark">alooooo</h1>
                        {/if}
                    </div>
</div>