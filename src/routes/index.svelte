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
    import { fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    let segment

    function activeHeader() {

        const headerEl = document.querySelector('#header');
        const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;

        if (scrollTop === 0) {
            headerEl.classList.remove('header-active');
        } else {
            headerEl.classList.add('header-active');
        }}

        function mobileMenu () {
             const hamburgerMenu = document.querySelector('.hamburger');
             hamburgerMenu.classList.toggle('open');

        }

    window.onscroll = (() => {
        activeHeader();
    });

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

<svelte:head>
    <title>Villa Jatica</title>
</svelte:head>




<div class="wrapper relative">
    <nav class="header p-y-s" id="header">
        <div class="grid ai-center hide-s">
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
            <a class='m-x-m{segment === "book" ? "selected" : ""} br-pill c-light bg-accent p-a-xs p-x-s' href='book' transition:fade="">BOOK NOW</a>
            <a class='{segment === "gallery" ? "selected" : ""} gallery font-secondary' href='gallery' transition:fade="" >SHOW GALLERY</a>
        </div>
        <div class="mobile-menu flex fd-col jc-center ai-center hide-s">
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
            <a class='m-x-m{segment === "book" ? "selected" : ""} br-pill c-light bg-accent p-a-xs p-x-s' href='book' transition:fade="">BOOK NOW</a>
            <a class='{segment === "gallery" ? "selected" : ""} gallery font-secondary' href='gallery' transition:fade="" >SHOW GALLERY</a>
        </div>
            <div class="show-s flex fd-col ai-center jc-center hamburger relative"on:click={mobileMenu}>
              <span class="line"></span>
              <span class="line m-y-s"></span>
              <span class="line"></span>
            </div>
    </nav>
    <div class="hero flex ai-center jc-center c-light fd-col col-m-12 ta-center">
        <h1 class="headline">VILLA JATICA</h1>
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


