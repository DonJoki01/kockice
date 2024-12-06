  const clanoviMenija = [
    { putanja: "index.html", ikonica: "fa-house", tekst: "Početna" },
    { putanja: "igre.html", ikonica: "fa-dungeon", tekst: "Igre" },
    { putanja: "trending.html", ikonica: "fa-fire", tekst: "Trending" },
    { putanja: "autor.html", ikonica: "fa-user-graduate", tekst: "Autor" },
  ];
  const clanoviDodatniSadrzaj=[
    { putanja: "rss.xml", ikonica: "fa-rss", tekst: "Rss" },
    { putanja: "sitemap.xml", ikonica: "fa-sitemap", tekst: "Sitemap" },
    { putanja: "#", ikonica: "fa-file", tekst: "Dokumentacija" },
  ]
  let header = document.querySelector("nav")
  header.innerHTML=`<div class="container-fluid">
        <a class="navbar-brand mx-lg-5 p-1 fs-1" href="index.html"
          ><i class="fa-solid fa-dice"></i> Kockice
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end mx-lg-5 fs-4"
          id="navbarNav"
        >
          <ul class="navbar-nav" id="navigacioniMeni">
            
          </ul>
        </div>
      </div>`
  let meni = document.querySelector("#navigacioniMeni");
  sadrzajMenija = ""
  for (const clan of clanoviMenija) {
    if (clan.putanja == window.location.pathname.split('/')[1]) {
      sadrzajMenija += `<li class="nav-item mx-3"> <a class="nav-link active" aria-current="page" href="${clan.putanja}"><i class="fa-solid ${clan.ikonica} fs-5"></i> ${clan.tekst}</a>
        </li>`;
    } else {
      sadrzajMenija += `<li class="nav-item mx-3"> <a class="nav-link" aria-current="page" href="${clan.putanja}"><i class="fa-solid ${clan.ikonica} fs-5"></i> ${clan.tekst}</a>
        </li>`;
    }
  }
  meni.innerHTML = sadrzajMenija;
  
  let futer = document.querySelector("footer")
  futer.innerHTML=`       <div class="row">
          <div class="col-6 col-md-2 mb-3">
            <h5>Kockice</h5>
            <ul class="nav flex-column" id="futerMeni">
         
            </ul>
          </div>

          <div class="col-6 col-md-2 mb-3">
            <h5>Dodatni linkovi</h5>
            <ul class="nav flex-column" id="dodatniLinkovi">
  
            </ul>
          </div>

          <div class="col-md-5 offset-md-1 mb-3">
            <form>
              <h5>Budite u toku sa novim igrama</h5>
              <p>
                Pretplatite se na kanal kako biste uvek znali koje Vas nove igre
                očekuju
              </p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden"
                  >E-mail adresa</label
                >

                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="E-mail adresa"
                />


                <button class="btn btn-dark btn-reset" type="button" id="prijavaVesti">
                  Prijava
                </button>

              </div>
              <p id="potvrdaZaEmail"></P>
            </form>
          </div>
        </div>

        <div
          class="d-flex flex-column flex-sm-row justify-content-between border-top"
        >
          <p>© 2024 Kockice, Inc. All rights reserved.</p>
        </div>`
  let footerMeni = document.querySelector("#futerMeni")
  let footerMeniSadrzaj= ''
  let potvrdaZaEmail=document.getElementById("potvrdaZaEmail")
  const emailVestiRegex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|yahoo\.com|ict\.edu\.rs)$/
  let emailVesti = document.getElementById("newsletter1")
  const prijavaVesti= document.getElementById("prijavaVesti")
  prijavaVesti.addEventListener("click",function(){
    if(emailVestiRegex.test(emailVesti.value)){
      emailVesti.setAttribute("style", "border:1px solid green")
      potvrdaZaEmail.innerHTML="Uspešno ste se prijavili za vesti"
    } else{emailVesti.setAttribute("style", "border:1px solid red")
      potvrdaZaEmail.innerHTML="Proverite e-mail adresu"
    }
  })
  console.log(emailVesti)
  for (const clan of clanoviMenija){
    footerMeniSadrzaj +=`<li class="nav-item mb-2">
                <a href="${clan.putanja}" class="nav-link p-0 text-muted">${clan.tekst}</a>
              </li>`}
  footerMeni.innerHTML=footerMeniSadrzaj

    let dodatniLinkovi = document.querySelector("#dodatniLinkovi")
    let footerDodatniSadrzaj= ''
    for (const clan of clanoviDodatniSadrzaj){
        footerDodatniSadrzaj +=`<li class="nav-item mb-2">
                    <a href="${clan.putanja}" class="nav-link p-0 text-muted">${clan.tekst}</a>
                  </li>`}
    dodatniLinkovi.innerHTML = footerDodatniSadrzaj

    $(window).scroll(function() {
      if ($(this).scrollTop() > 500) {
          $(".scrollup").fadeIn(200).css({
              "pointer-events": "auto",
              "visibility": "visible"
          });
      } else {
          $(".scrollup").fadeOut(200).css({
              "pointer-events": "none",
              "visibility": "hidden"
          });
      }
  });
  
  $(".scrollup").click(function() {
      $("html, body").animate({
          scrollTop: 0
      }, 100);
      return false;
  });
  
  



