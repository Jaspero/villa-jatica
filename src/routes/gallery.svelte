
<script>

</script>



<style>

.albums {
    width: 400px;
    position: fixed;
    left: 0;
    top: 55px;
    height: 100%;
    background: #cccccc;
}

.exterior {
    background-image: url("../../assets/images/exterior-1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.album {
background: white;
height: 150px;
width: 100%;
}


</style>


<svelte:head>
	<title>Gallery</title>
</svelte:head>


<nav class="navbar p-y-s flex bg-warn ai-center z-index">
    <a href="#home" class="flex ai-center">
        <img src="assets/icons/left.svg" alt="back">
        <p class="font-secondary m-l-s">Back</p>
    </a>
    <p class="c-accent m-l-l"><i>Beautifull galleries of our villa Jatica, from interior to exterior!</i></p>
</nav>

<div class="flex">
    <div class="albums flex fw-wrap">
    <div class="album col-6">
        <div class="exterior">
            <p><i>House exterior</i></p>
        </div>
    </div>
    <div class="col-6 interior"></div>
    <div class="col-6 village"></div>
    <div class="col-6 house"></div>
    <div class="col-6 nature"></div>
    <div class="col-6 photos"></div>

    </div>
</div>