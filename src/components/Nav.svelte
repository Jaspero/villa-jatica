<script>
	export let segment;
</script>

<style>

.header {
    top: 0;
    background: white;
    box-shadow: 0px 5px 10px rgba(0,0,0,0.1);
}

</style>

<nav class="header p-y-s">
    <div class="grid">
		<a class='{segment === undefined ? "selected" : ""}' href='.'>HOME</a>
		<a href='#location' class="m-x-s">lOCATION</a>
		<a href=''>THE HOUSE</a>
		<a href=''class="m-x-s">INTERIOR</a>
		<a href='.'>INDULGE</a>
		<a href='#price'class="m-x-s">PRICE</a>
		<a href='.'>CONTACT</a>
		<a class='m-x-s{segment === "book" ? "selected" : ""}' href='book'>BOOK NOW</a>
		<a class='{segment === "gallery" ? "selected" : ""}' href='gallery'>SHOW GALLERY</a>
    </div>
</nav>