<script>
    import Location from '../components/Location.svelte';
    import Features from '../components/Features.svelte';
    import House from '../components/House.svelte';
    import Interior from '../components/Interior.svelte';
    import Indulge from '../components/Indulge.svelte';
    import Contact from '../components/Contact.svelte';
    import Parallax from '../components/Parallax.svelte';
    import Footer from '../components/Footer.svelte';
    import Price from '../components/Price.svelte';



    let src = 'assets/images/header-bg.jpg';
</script>


<style>

 .hero {
    background-image: url("../../header-bg.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100vw;
    height: 100vh;
 }
 h1 {
 font-size: 80px;
 }

</style>

<svelte:head>
	<title>Villa Jatica</title>
</svelte:head>


<div class="wrapper">
<div class="hero flex ai-center jc-center c-light fd-col">
    <h1>VILLA JATICA</h1>
    <h2><i>Luxury in the Wilderness</i></h2>
</div>
    <Location/>
    <Features/>
    <House/>
    <Parallax/>
    <Interior/>
    <Indulge/>
    <Price />
    <Contact />
</div>


