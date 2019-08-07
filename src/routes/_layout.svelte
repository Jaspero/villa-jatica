<script>
		import Nav from '../components/Nav.svelte';
    	import book from '../routes/book.svelte';

    	let segment


</script>

<style>

</style>

<Nav {segment}/>



<main>
	<slot></slot>
</main>