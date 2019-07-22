<script>
    import Location from '../components/Location.svelte';
    import Features from '../components/Features.svelte';
    import House from '../components/House.svelte';
    import Interior from '../components/Interior.svelte';
    import Indulge from '../components/Indulge.svelte';
    import Contact from '../components/Contact.svelte';
    import Parallax from '../components/Parallax.svelte';


    let src = 'assets/images/header-bg.jpg';
</script>


<style>

 .hero {
    background-image: url("../../static/assets/images/header-bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
 }
 .grid {
 max-width: 2000px;
 }


.grid  {
 max-width: 100%;
}
</style>

<svelte:head>
	<title>Villa Jatica</title>
</svelte:head>


<div class="wrapper">
<div class="hero">
<img src="assets/images/header-bg.jpg" alt="intro image">
</div>
    <Location/>
    <Features/>
    <House/>
    <Parallax/>
    <Interior/>
</div>


