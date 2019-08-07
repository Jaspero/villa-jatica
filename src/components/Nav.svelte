<script>
	export let segment;

	function activeHeader() {
	const headerEl = document.querySelector('#header');
	const activeEl = headerEl.pageYOffset;

   if (activeEl.pageYOffset > active) {
     headerEl.classList.add("active");
   } else {
     headerEl.classList.remove("active");
   }

	}
</script>

<style>


</style>

