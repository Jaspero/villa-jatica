<script>

    import { onMount } from 'svelte';

</script>





<style>

p {
    color: #6d6d6d;
}


</style>





<section class="footer bg-warn">
<div class="grid jc-between ai-center">
    <div class="col-6 ta-center">
        <p>Copyright <span id="copyright"><script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))</script></span> Villa Jatica</p>
    </div>
<div class="col-6 ta-center">
    <p>Made by <span class="c-accent"><i>Jaspero</i></span> </p>
</div>
</div>
</section>