<script>
	export let segment;

	function activeHeader() {
	const headerEl = document.querySelector('#header');
	const activeEl = header.pageYOffset;

   if (activeEl.pageYOffset > active) {
     headerEl.classList.add("active");
   } else {
     headerEl.classList.remove("active");
   }

	}
</script>

<style>

.gallery {
    position: fixed;
    right: 0;
    top: 10rem;
    background: #e4e4e4;
    box-shadow: 0px 10px 20px rgba(0,0,0,0.05);
    z-index: 10;
    color:black;
    border-radius: 30px 0 0 30px;
    padding: 20px;
    transition: all 0.3s ease;
}
.gallery:hover {
    padding-right: 3rem;
    background: #c7b38e;
    color: white;
}



a {
    font-size: 13px;
    color: white;
}




</style>

<nav class="header p-y-s" id="header" onscroll="activeHeader()">
    <div class="grid ai-center">
        <span class="link-wrapper flex">
		<a class='{segment === undefined ? "selected" : ""} underline ' href='.'>HOME</a>
		</span>
		<span class="link-wrapper flex">
		<a href='#location' class="m-x-m underline">lOCATION</a>
		</span>
		<span class="link-wrapper flex">
		<a href='#house' class="underline">THE HOUSE</a>
		</span>
		<span class="link-wrapper flex">
		<a href='#interior'class="m-x-m underline">INTERIOR</a>
		</span>
		<span class="link-wrapper flex">
		<a href='#indulge' class="underline">INDULGE</a>
		</span>
		<span class="link-wrapper flex">
		<a href='#price'class="m-x-m underline">PRICE</a>
		</span>
		<span class="link-wrapper flex">
		<a href='#contact' class="underline">CONTACT</a>
		</span>
		<a class='m-x-m{segment === "book" ? "selected" : ""} br-pill c-light bg-accent p-a-xs p-x-s' href='book'>BOOK NOW</a>
		<a class='{segment === "gallery" ? "selected" : ""} gallery font-secondary' href='gallery'>SHOW GALLERY</a>
    </div>
</nav>