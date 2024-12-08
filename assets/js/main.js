  const clanoviMenija = [
    { putanja: "index.html", ikonica: "fa-house", tekst: "Početna" },
    { putanja: "igre.html", ikonica: "fa-dungeon", tekst: "Igre" },
    { putanja: "trending.html", ikonica: "fa-fire", tekst: "Trending" },
    { putanja: "autor.html", ikonica: "fa-user-graduate", tekst: "Autor" },
  ];
  const clanoviDodatniSadrzaj=[
    { putanja: "rss.xml", ikonica: "fa-rss", tekst: "Rss" },
    { putanja: "sitemap.xml", ikonica: "fa-sitemap", tekst: "Sitemap" },
    { putanja: "dokumentacija.pdf", ikonica: "fa-file", tekst: "Dokumentacija" },
  ]
  const proizvodi = [
    { ime: "Cyclades", zanr: "Fantazija", cena: "6,000", img: "cyclades.png", popust:0 },
    { ime: "Jednorozi", zanr: "Strategija", cena: "2,600", img: "jednorozi.png", popust:1 },
    { ime: "Gloomhaven", zanr: "Strategija", cena: "21,500", img: "gloom.png", popust:0  },
    { ime: "Ticket to ride", zanr: "Razvojna", cena: "3,200", img: "ticket.png", popust:0  },
    { ime: "Osvajač", zanr: "Strategija", cena: "1,100", img: "osvajac.png", popust:0  },
    { ime: "Voidfall", zanr: "Razvojna", cena: "15,000", img: "voidfall.png", popust:0  },
    { ime: "Wingspan", zanr: "Strategija", cena: "7,500", img: "wingspan.png", popust:0  },
    { ime: "Living Forest", zanr: "Razvojna", cena: "5,400", img: "forest.png", popust:1 },
    { ime: "Hues&Cues", zanr: "Co-op", cena: "4,000", img: "hues.png", popust:1 },
    { ime: "Azul", zanr: "Strategija", cena: "1,600", img: "azul.png", popust:0 },
    { ime: "Santorini", zanr: "Strategija", cena: "2,700", img: "santorini.png", popust:1 },
    {
      ime: "Betrayal",
      zanr: "Co-op",
      cena: "6,800",
      img: "betrayal-shop.png",
      popust:0 
    },
    { ime: "Dixit", zanr: "Fantazija", cena: "4,100", img: "dixit.png", popust:0  },
    {
      ime: "Mysterium",
      zanr: "Co-op",
      cena: "3,800",
      img: "mysterium.png", popust:0 
    },
    { ime: "Cascadia", zanr: "Strategija", cena: "5,500", img: "cascadia.png", popust:0  },
  ];
  
  const zanroviNiz = [
    { ime: "Strategija", id: "strategija" },
    { ime: "Fantazija", id: "fantazija" },
    { ime: "Razvojna", id: "razvojna" },
    { ime: "Co-op", id: "co-op" },
    { ime: "Porodične", id: "porodicna" },
    { ime: "Trivija", id: "trivija" },
  ];
  
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
                    <a href="${clan.putanja}" target="_blank" class="nav-link p-0 text-muted">${clan.tekst}</a>
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
  
  



