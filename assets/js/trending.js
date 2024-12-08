
$(document).ready(function() {
    $(".readMore").next("span").hide(); 
    $(".readMore").on("click", function() {
        const $span = $(this).next("span"); 
        $span.stop(true,true).slideToggle();    

        if ($(this).text() === "Saznaj više") {
            $(this).text("Sakrij");
        } else {
            $(this).text("Saznaj više");
        }
    });
});
// ${proizvod.img}
// ${proizvod.ime}
// ${proizvod.ime}
// ${proizvod.zanr}
// ${proizvod.cena}
let igreNaPopustu = document.getElementById("igreNaPopustu")
console.log(igreNaPopustu)
let igreNaPopustuSadrzaj=`<div class="text-center"><h2>Igre na popustu</h2></div>`
for (const proizvod of proizvodi){
    if (proizvod.popust==1){
        igreNaPopustuSadrzaj+=`<div class="col-xl-3 col-md-4 col-sm-6">
            <div class="card karticaIgre p-3 my-3 mx-1 karticaDodaj">
              <img
                src="assets/img/${proizvod.img}"
                class="card-img-top img-fluid"
                alt="${proizvod.img}"
              />
              <div class="card-body tekst px-sm-1">
                <div>
                  <h5 class="card-title h5">${proizvod.ime}</h5>
                </div>
                <div class="d-flex justify-content-between align-items-end">
                  <p class="card-text fs-6 text-secondary">${proizvod.zanr}</p>

                  <p class="text-success-emphasis h6">${proizvod.cena}RSD</p>
                </div>
              </div>
            </div>
          </div>`
    }
}
igreNaPopustu.innerHTML=igreNaPopustuSadrzaj