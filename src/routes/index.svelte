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

    let segment;

    function activeHeader() {

        const headerEl = document.querySelector('#header');
        const hambEl   = document.querySelectorAll('.line');
        const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
        const indexEl = document.querySelector ('.bla-bla');

        if (scrollTop === 0) {
            headerEl.classList.remove('header-active');
                hambEl.forEach(val => {
                    val.classList.remove('line-active');
                        });
        } else {
            headerEl.classList.add('header-active');
                hambEl.forEach(val => {
                    val.classList.add('line-active');
                        });
        }}

        function mobileMenu () {
             const hamburgerMenu = document.querySelector('.hamburger');
             hamburgerMenu.classList.toggle('open');

             const menuActive = document.querySelector('.mobile-menu');
             menuActive.classList.toggle('active-mobile');
             event.stopPropagation();

               window.addEventListener('click', (event => {
                 if (!menuActive.contains(event.target)) {
                   menuActive.classList.remove('active-mobile');
                   hamburgerMenu.classList.remove('open');
                 }
               }))

        }

    if (process.browser) {
    window.onscroll = (() => {
        activeHeader();
    });
    }

</script>



<style>



    .hero {
        background-image: url("../../header-bg.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        width: 100vw;
        height: 100vh;
        background-attachment: fixed;
    }

    .gallery {
        position: fixed;
        right: 0;
        top: 7rem;
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
		<a class='{segment === undefined ? "selected" : ""} underline' href='.'>HOME</a>
		</span>
        <span class="link-wrapper flex">
		    <a href='#location' class="m-x-m underline">LOCATION</a>
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
        </div>
        <div class="mobile-menu flex fd-col jc-center ai-center">
        <span class="link-wrapper flex">
		<a class='{segment === undefined ? "selected" : ""} mobile-link m-t-xl' href='.'>HOME</a>
		</span>
            <span class="link-wrapper flex">
		<a href='#location' class="m-x-m m-y-m mobile-link">LOCATION</a>
		</span>
            <span class="link-wrapper flex">
		<a href='#house' class="mobile-link">THE HOUSE</a>
		</span>
            <span class="link-wrapper flex">
		<a href='#interior'class="m-x-m m-y-m mobile-link">INTERIOR</a>
		</span>
            <span class="link-wrapper flex">
		<a href='#indulge' class="mobile-link">INDULGE</a>
		</span>
            <span class="link-wrapper flex">
		<a href='#price'class="m-x-m m-y-m mobile-link">PRICE</a>
		</span>
            <span class="link-wrapper flex">
		<a href='#contact' class="mobile-link">CONTACT</a>
		</span>
            <a class='m-x-m{segment === "book" ? "selected" : ""} br-pill c-light bg-accent p-a-xs p-x-s m-y-m' href='book' transition:fade="">BOOK NOW</a>
        </div>
            <a class='{segment === "gallery" ? "selected" : ""} gallery font-secondary' href='gallery' transition:fade="" ><i>Show gallery</i></a>
            <div class="show-s  hamburger relative"on:click={mobileMenu} transition:fade>
                <div class="relative w-full h-full">
                  <span class="line"></span>
                  <span class="line m-y-s"></span>
                  <span class="line"></span>
                </div>
            </div>
    </nav>
    <div class="hero flex ai-center jc-center c-light fd-col col-m-12 ta-center">
        <div class="col-12 m-t-xl">
            <h1 class="heading">VILLA JATICA</h1>
            <h2 class="m-t-s"><i>Luxury in the Wilderness</i></h2>
        </div>
    </div>
    <Location/>
    <Features/>
    <House/>
    <Parallax/>
    <Interior/>
    <Indulge/>
    <Price />
    <Contact />
    <Footer/>
</div>


