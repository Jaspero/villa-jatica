

<script >
    export let lowPrice;
    export let highPrice;



</script>


<style>

.br-circle {
     margin: 0 auto;
     width: 25px;
}

.border {
    border-bottom: 1px solid #002;
    border-top: 1px solid #002;
}

.fw-100 {
    font-weight: 100;
}

.price-card {
    height: 365px;
}

.date {
    height:200px;
}

p {
    font-family: "Georgia", sans-serif;
}

.price {
    font-size: 60px;
    font-weight: 600;
    text-shadow: 0px 10px 20px rgba(0,0,0,0.2);
}
</style>

<section id="price" class="bg-overlay relative features p-y-l">
    <div class="grid">
        <div class="col-12 ta-center relative">
            <h1 class="c-light z-index m-t-l">PRICE</h1>
        </div>
        <div class="col-4 z-index col-xs-12 col-m-6">
            <div class="price-card bg-light flex fd-col jc-center">
            <div class="date flex fd-col jc-end">
                <div class="flex ai-center">
                    <div class="ta-center col-5">
                        <h5 class="c-warn">1st</h5>
                         <p class="c-warn font-secondary"><i>January</i></p>
                    </div>
                    <div class="col-2">
                          <div class="br-circle bg-warn flex jc-center ai-center">
                            <p class="c-light">to</p>
                          </div>
                    </div>
                    <div class="col-5 ta-center to">
                         <h5 class="c-warn">31st</h5>
                         <p class="c-warn"><i>May</i></p>
                    </div>
                </div>
                <div class="flex ai-center">
                    <div class="ta-center col-5">
                         <h5 class="c-warn">1st</h5>
                         <p class="c-warn"><i>October</i></p>
                    </div>
                    <div class="col-2">
                       <div class="br-circle bg-warn flex jc-center ai-center">
                           <p class="c-light">to</p>
                       </div>
                    </div>
                    <div class="col-5 ta-center to">
                        <h5 class="c-warn">31st</h5>
                        <p class="c-warn"><i>December</i></p>
                    </div>
                </div>
                </div>
                <div class="ta-center border">
                    <h1 class="fw-100 p-y-s">Low-Season</h1>
                </div>
                <div class="ta-center">
                      <h1 class=" p-y-s price">{lowPrice}€</h1>
                      <p class="m-b-xs"><i>Per day</i></p>
                </div>
            </div>
        </div>
        <div class="col-4 z-index col-xs-12 col-m-6">
            <div class="price-card bg-light flex fd-col jc-center">
                <div class="flex ai-center date">
                     <div class="ta-center col-5">
                         <h5 class="c-warn">1st</h5>
                         <p class="c-warn"><i>June</i></p>
                     </div>
                     <div class="col-2">
                        <div class="br-circle bg-warn flex jc-center ai-center">
                           <p class="c-light">to</p>
                        </div>
                     </div>
                     <div class="col-5 ta-center">
                       <h5 class="c-warn">30th</h5>
                       <p class="c-warn"><i>September</i></p>
                     </div>
                </div>
                <div class="ta-center border">
                     <h1 class="fw-100 p-y-s">High-Season</h1>
                </div>
                <div class="ta-center">
                     <h1 class=" p-y-s price">{highPrice}€</h1>
                     <p class="m-b-xs"><i>Per day</i></p>
                </div>
            </div>
        </div>
    </div>
</section>