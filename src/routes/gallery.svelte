
<script>
    import { fade } from 'svelte/transition';
</script>



<style>

.albums {
    width: 400px;
    position: fixed;
    left: 0;
    height: 100%;
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
    <p class="c-accent m-l-l"><i>Beautifull galleries of our villa Jatica, from interior to exterior!</i></p>
</nav>

<div class="flex">
    <div class="albums flex fw-wrap ac-flex">
    <div class="col-6">
        <div class="exterior"></div>
        <div class="bg-light w-full">
            <p class="ta-center"><i>House exterior</i></p>
        </div>
    </div>

    <div class="col-6">
        <div class="interior"></div>
        <div class="bg-light w-full">
            <p class="ta-center"><i>House interior</i></p>
        </div>
    </div>

    <div class="col-6">
        <div class="village"></div>
        <div class="bg-light w-full">
            <p class="ta-center"><i>The old village</i></p>
        </div>
    </div>

    <div class="col-6">
    <div class="details"></div>
    <div class="bg-light w-full">
        <p class="ta-center"><i>House details</i></p>
    </div>
    </div>

    <div class="col-6">
    <div class="nature"></div>
    <div class="bg-light w-full">
        <p class="ta-center"><i>Beautiful nature</i></p>
    </div>
    </div>

    <div class="col-6">
    <div class="photos"></div>
    <div class="bg-light w-full">
        <p class="ta-center"><i>Guest photos</i></p>
    </div>
    </div>
    </div>
</div>