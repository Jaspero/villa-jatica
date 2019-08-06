<script>
	export let segment;
</script>

<style>

.header {
    position: fixed;
    width: 100%;
    z-index: 23;
    top: 0;
    background: white;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
}

a {
    font-size: 13px;
}



</style>

<nav class="header p-y-s">
    <div class="grid">
		<a class='{segment === undefined ? "selected" : ""} underline link' href='.'>HOME</a>
		<a href='#location' class="m-x-s underline">lOCATION</a>
		<a href='#house' class="underline">THE HOUSE</a>
		<a href='#interior'class="m-x-s underline">INTERIOR</a>
		<a href='#indulge' class="underline">INDULGE</a>
		<a href='#price'class="m-x-s underline">PRICE</a>
		<a href='#contact' class="underline">CONTACT</a>
		<a class='m-x-s{segment === "book" ? "selected" : ""}' href='book'>BOOK NOW</a>
		<a class='{segment === "gallery" ? "selected" : ""}' href='gallery'>SHOW GALLERY</a>
    </div>
</nav>