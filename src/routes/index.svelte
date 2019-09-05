<script context="module">
	export function preload({}) {
		return this.fetch('index.json')
				.then(r => r.json());
	}
</script>

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

    export let home;
    console.log('home', home);
    let segment;

    function activeHeader() {

        const headerEl = document.querySelector('#header');
        const hambEl   = document.querySelectorAll('.line');
        const scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;


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

    p {
    font-size: 40px;
    }



</style>

<svelte:head>
    <title>Villa Jatica</title>
</svelte:head>

<div class="wrapper relative">
    <nav class="header p-y-s" id="header">
        <div class="grid ai-center hide-s">
        <span class="link-wrapper ">
		<a class='{segment === undefined ? "selected" : ""} underline' href='.'>HOME</a>
		</span>
        <span class="link-wrapper ">
		    <a href='#location' class="m-x-m underline">LOCATION</a>
		</span>
        <span class="link-wrapper ">
		    <a href='#house' class="underline">THE HOUSE</a>
		</span>
        <span class="link-wrapper ">
		    <a href='#interior'class="m-x-m underline">INTERIOR</a>
		</span>
        <span class="link-wrapper ">
		    <a href='#indulge' class="underline">INDULGE</a>
		</span>
        <span class="link-wrapper ">
		    <a href='#price'class="m-x-m underline">PRICE</a>
		</span>
         <span class="link-wrapper ">
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
    <div class="hero flex ai-end jc-center c-light col-m-12">
        <div class="col-12 m-b-xl ta-center">
            <h1 class="heading">{home.title}</h1>
            <p class="m-t-s"><i>{home.subTitle}</i></p>
        </div>
    </div>
    <Location location="{home.location}" area="{home.locationArea}" expand="{home.locationExpand}" expandArea="{home.locationExpandArea}"/>
    <Features/>
    <House house="{home.house}" expand="{home.houseExpand}" outdoor="{home.outdoor}" outdoorExpand="{home.outdoorExpand}" outdoorRead="{home.outdoorRead}"/>
    <Parallax/>
    <Interior interior="{home.interior}" interiorExpand="{home.interiorExpand}" interiorExpandable="{home.interiorExpandable}" interiorBedroom="{home.interiorBedroom}"/>
    <Indulge indulge="{home.indulge}" indulgeExpand="{home.indulgeExpand}" indulgeExpandable="{home.indulgeExpandable}"/>
    <Price lowPrice="{home.lowSeasonPrice}" highPrice="{home.highSeasonPrice}"/>
    <Contact />
    <Footer/>
</div>


