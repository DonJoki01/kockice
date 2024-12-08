
let igre = document.querySelector("#igre");
let zanrovi = document.querySelector("#zanrovi"); 
let pretraga = document.getElementById("pretraga");

let sadrzajIgre = "";
for (const proizvod of proizvodi) {
  sadrzajIgre += `<div class="col-xxl-3 col-lg-4  col-sm-6 mx-auto drzacDodavanje">
                    <div class="card karticaIgre p-3 p-lg-1 my-3 mx-1 karticaDodaj">
                      <img
                        src="assets/img/${proizvod.img}"
                        class="card-img-top img-fluid"
                        alt="${proizvod.ime}"
                      />
                      <div class="card-body tekst p-lg-2">
                        <div>
                          <h5 class="card-title h5">${proizvod.ime}</h5>
                        </div>
                        <div class="d-flex justify-content-between align-items-end">
                          <p class="card-text fs-6 text-secondary">${proizvod.zanr}</p>
                          <p class="text-success-emphasis">${proizvod.cena} RSD</p>
                        </div>
                        <div>
                          <button class="btn btn-dark d-block w-100 dodaj">
                            Dodaj <i class="fa-solid fa-cart-shopping"></i> 
                          </button>
                        </div>
                      </div>
                    </div>
                    <span class="dodavanjeKorpa rounded-pill">Proizvod je uspešno dodat u korpu</span>
                  </div>`;
}
igre.innerHTML = sadrzajIgre;
function potvrdaDodavanja(){
  $(document).ready(function () {
    $(".dodaj").on("click", function () {
        const dodavanjeKorpa = $(this).closest(".drzacDodavanje").find(".dodavanjeKorpa");
        dodavanjeKorpa.fadeIn(300, function () {
            setTimeout(function () {
                dodavanjeKorpa.fadeOut(300);
            }, 700);
        });
    });
  });
}
potvrdaDodavanja()

let zanroviSadrzaj = `<li class="list-group-item"><h3 class="fs-4">Žanr</h3></li>`;
for (const zanr of zanroviNiz) {
  zanroviSadrzaj += `<li class="list-group-item">
                      <input type="checkbox" name="${zanr.id}" id="${zanr.id}" class="zanr"/>
                      <label for="${zanr.id}">${zanr.ime}</label>
                    </li>`;
}
zanrovi.innerHTML = zanroviSadrzaj;

let zanrCheckbox = document.querySelectorAll(".zanr");
function primeniFiltere() {
  let searchText = pretraga.value.toLowerCase();

  let aktivniFilteri = Array.from(zanrCheckbox)
    .filter((cb) => cb.checked)
    .map((cb) => cb.id);

  let filtriraniProizvodi = proizvodi.filter((proizvod) => {
    let imeProizvodaOdgovara = proizvod.ime.toLowerCase().includes(searchText);
    let zanrProizvodaOdgovara =
      aktivniFilteri.length === 0 ||
      aktivniFilteri.includes(proizvod.zanr.toLowerCase());
    return imeProizvodaOdgovara && zanrProizvodaOdgovara;
  });

  let sadrzajFiltriraneIgre = "";
  for (const filtriran of filtriraniProizvodi) {
    sadrzajFiltriraneIgre += `<div class="col-xxl-3 col-lg-4  col-sm-6 mx-auto drzacDodavanje">
                    <div class="card karticaIgre p-3 p-lg-1 my-3 mx-1 karticaDodaj">
                      <img
                        src="assets/img/${filtriran.img}"
                        class="card-img-top img-fluid"
                        alt="${filtriran.ime}"
                      />
                      <div class="card-body tekst p-lg-2">
                        <div>
                          <h5 class="card-title h5">${filtriran.ime}</h5>
                        </div>
                        <div class="d-flex justify-content-between align-items-end">
                          <p class="card-text fs-6 text-secondary">${filtriran.zanr}</p>
                          <p class="text-success-emphasis">${filtriran.cena} RSD</p>
                        </div>
                        <div>
                          <button class="btn btn-dark d-block w-100 dodaj">
                            Dodaj <i class="fa-solid fa-cart-shopping"></i> 
                          </button>
                        </div>
                      </div>
                    </div>
                    <span class="dodavanjeKorpa rounded-pill">Proizvod je uspešno dodat u korpu</span>
                  </div>`;
  }

  igre.innerHTML =
    filtriraniProizvodi.length > 0
      ? sadrzajFiltriraneIgre
      : '<h3 class="mt-3">Nema proizvoda koji odgovaraju kriterijumima.</h3>';
  dodajEventeNaKartice(); 
  potvrdaDodavanja()
}

pretraga.addEventListener("input", primeniFiltere);
zanrCheckbox.forEach((checkbox) => {
  checkbox.addEventListener("change", primeniFiltere);
});
let karticaNiz = document.querySelectorAll(".karticaDodaj");
let pomerajuciTekst = document.querySelectorAll(".tekst");
console.log(pomerajuciTekst);
karticaNiz.forEach((kartica) => {
  kartica.addEventListener("mouseenter", function () {
    let indexKartice = Array.from(karticaNiz).indexOf(kartica);
    let computedStyle = window.getComputedStyle(pomerajuciTekst[indexKartice]);
    let matrix = new DOMMatrix(computedStyle.transform);
    
    let trenutnaY = matrix.m42; 
    pomerajuciTekst[indexKartice].animate(
      [
        { transform: `translateY(${trenutnaY}px)` }, 
        { transform: "translateY(-90%)" }, 
      ],
      {
        duration: 700, 
        iterations: 1, 
        fill: "forwards", 
      }
    );
  });

  kartica.addEventListener("mouseleave", function () {

    let indexKartice = Array.from(karticaNiz).indexOf(kartica);

    let computedStyle = window.getComputedStyle(pomerajuciTekst[indexKartice]);
    let matrix = new DOMMatrix(computedStyle.transform); 

    let trenutnaY = matrix.m42; 


    pomerajuciTekst[indexKartice].animate(
      [
        { transform: `translateY(${trenutnaY}px)` }, 
        { transform: "translateY(0)" }, 
      ],
      {
        duration: 700, 
        iterations: 1, 
        fill: "forwards",
      }
    );
  });
});

function dodajEventeNaKartice() {
  karticaNiz = document.querySelectorAll(".karticaDodaj");
  pomerajuciTekst = document.querySelectorAll(".tekst");
  dodajGrupa = document.querySelectorAll(".dodaj"); 

 
  karticaNiz.forEach((kartica, index) => {
    kartica.addEventListener("mouseenter", function () {
      let computedStyle = window.getComputedStyle(pomerajuciTekst[index]);
      let matrix = new DOMMatrix(computedStyle.transform);
      let trenutnaY = matrix.m42;
      pomerajuciTekst[index].animate(
        [
          { transform: `translateY(${trenutnaY}px)` },
          { transform: "translateY(-90%)" },
        ],
        {
          duration: 700,
          iterations: 1,
          fill: "forwards",
        }
      );
    });

    kartica.addEventListener("mouseleave", function () {
      let computedStyle = window.getComputedStyle(pomerajuciTekst[index]);
      let matrix = new DOMMatrix(computedStyle.transform);
      let trenutnaY = matrix.m42;

      pomerajuciTekst[index].animate(
        [
          { transform: `translateY(${trenutnaY}px)` },
          { transform: "translateY(0)" },
        ],
        {
          duration: 700,
          iterations: 1,
          fill: "forwards",
        }
      );
    });
  });
  
  dodajGrupa.forEach((dodaj) => {
    dodaj.addEventListener("click", function () {
      let imeProizvoda = dodaj.parentNode.parentNode.querySelector("h5").textContent;

      for (const proizvod of proizvodi) {
        if (imeProizvoda === proizvod.ime) {
          
          proizvodiUKorpi.push({
            ime: proizvod.ime,
            cena: proizvod.cena,
            cenaKaoInt: parseInt(proizvod.cena.replace(',', ''))
          });
          ukupnaCenaSadrzaj += proizvodiUKorpi[proizvodiUKorpi.length - 1].cenaKaoInt;
          ukupnaCena.innerHTML = ukupnaCenaSadrzaj.toLocaleString('en-US') + `<span class="maliRSD">RSD</span>`;
          ukupno.innerText = "Ukupno";
          break;
        }
      }
  
      osveziKorpu(); 
    });
  });
}
let korpa = document.querySelector("#korpa");
let dodajGrupa = document.querySelectorAll(".dodaj");
let proizvodiUKorpi = [];
let korpaSadrzaj = '';
let ukupnaCena = document.querySelector("#ukupnaCena");
let ukupnaCenaSadrzaj = 0;
let ukupno = document.querySelector("#ukupno");


function osveziKorpu() {
  korpaSadrzaj = '';
  proizvodiUKorpi.forEach((proizvod, index) => {
    korpaSadrzaj += `<li class="list-group-item d-xl-flex d-lg-block d-md-flex justify-content-between relativniLI">
                      <p>${proizvod.ime}</p>
                      <p>${proizvod.cena}<span class="maliRSD">RSD</span></p>
                      <button class="obrisi" data-index="${index}">obriši</button>
                    </li>`;
  });
  korpa.innerHTML = korpaSadrzaj;

  let obrisiDugmici = document.querySelectorAll(".obrisi");
  obrisiDugmici.forEach((dugme) => {
    
    dugme.addEventListener("click", function () {
      let index = dugme.getAttribute("data-index");
      ukloniIzKorpe(index);
    });
  });
}

function ukloniIzKorpe(index) {
  let uklonjenaCena = proizvodiUKorpi[index].cenaKaoInt;
  proizvodiUKorpi.splice(index, 1);
  ukupnaCenaSadrzaj -= uklonjenaCena;
  
  osveziKorpu();
   ukupno.innerText = proizvodiUKorpi.length > 0 ? "Ukupno" : "Korpa je trenutno prazna";
   ukupnaCena.innerHTML = ukupnaCenaSadrzaj.toLocaleString('en-US') + `<span class="maliRSD">RSD</span>`;
   if(ukupnaCena.innerText=="0RSD"){
    ukupnaCena.innerText=""
   }
}


dodajGrupa.forEach((dodaj) => {
  dodaj.addEventListener("click", function () {
    let imeProizvoda = dodaj.parentNode.parentNode.querySelector("h5").textContent;

    for (const proizvod of proizvodi) {
      if (imeProizvoda === proizvod.ime) {
        proizvodiUKorpi.push({
          ime: proizvod.ime,
          cena: proizvod.cena,
          cenaKaoInt: parseInt(proizvod.cena.replace(',', ''))
        });
        ukupnaCenaSadrzaj += proizvodiUKorpi[proizvodiUKorpi.length - 1].cenaKaoInt;
        ukupnaCena.innerHTML = ukupnaCenaSadrzaj.toLocaleString('en-US') + `<span class="maliRSD">RSD</span>`;
        ukupno.innerText = "Ukupno";
        break;
      }
    }
    osveziKorpu(); 
    
  });
});



let paketomatForma=document.getElementById("paketomatForma")
const brojTelefonaRegex=/^(\+3816|06)[0-9]{7,8}$/
const imeRegex = /^([A-ZŠĐČĆŽ][a-zšđčćž]+)(\s[A-ZŠĐČĆŽ][a-zšđčćž]+)+$/;
const adresaRegex=/^[A-ZČĆŽŠĐ][A-ZČĆŽŠĐa-zčćžšđ\s]+\s*\d+[a-zA-Z]*$/
const postanskiBrojRegex=/^[1-9][0-9]{4}$/
const karticaRegex = /^(\d{4}\s?){3}\d{1,5}$/
const cvvRegex = /^[0-9]{3}$/
const datumIstekaRegex = /^(0[1-9]|1[0-2])\/\d{2}$/
function netacnaValidacija(polje, poljeRegex){
  if (!poljeRegex.test(polje.value)){
    polje.removeAttribute("style")
    polje.setAttribute("style", "border:1px solid red")
    polje.nextElementSibling.classList.remove("nevidljiv")
    polje.nextElementSibling.classList.add("m-0")
  } else {polje.removeAttribute("style");polje.setAttribute("style", "border:1px solid green")
    polje.nextElementSibling.classList.add("nevidljiv")
    polje.nextElementSibling.classList.remove("m-0")
  }
}
const gradovi = ["Beograd","Novi Sad","Niš","Kragujevac","Subotica","Zrenjanin","Pančevo","Čačak","Kruševac","Kraljevo","Novi Pazar","Smederevo","Leskovac","Valjevo",
"Šabac"
];

const inputTextNiz=["ime", "brojTelefona", "adresa","postanskiBroj", "brojKartice", "CVV", "datumIsteka"]
const inputLabelNiz=["Ime i prezime", "Broj telefona","Adresa", "Poštanski broj", "Broj kartice", "CVV", "Datum isteka kartice"]
const paketomatRadio = document.getElementById(paketomat)
paketomat.addEventListener("change", function(){
  kucaForma.innerHTML=''
    paketomatForma.innerHTML= `<label for="ime">Ime i prezime</label>
    <input type="text" class="form-control" id="ime" name="ime">
    <p class="greska nevidljiv">Ime i prezime moraju počinjati velikim slovom</p>
    <label for="brojTelefona">Broj telefona</label>
    <input type="text" class="form-control" id="brojTelefona" name="brojTelefona">
    <p class="greska nevidljiv">Broj mora početi sa +381 ili 06</p>
    <label for="grad">Grad</label>
    <select name="grad" id="grad" class="form-select">
    <option value="0">Izaberite</option>
    </select>
    <p class="greska nevidljiv">Grad mora biti izabran</p>
    <label for="adresa">Adresa</label>
    <input type="text" class="form-control" id="adresa" name="adresa" disabled="disabled">
    <p class="greska nevidljiv">Ulica i broj</p>
    <label for="postanskiBroj">Poštanski broj</label>
    <input type="text" class="form-control" id="postanskiBroj" name="postanskiBroj">
    <p class="greska nevidljiv">Mora imati tačno 5 cifara, ne sme početi nulom</p>
    <label for="brojKartice">Broj kartice</label>
    <input type="text" class="form-control" id="brojKartice" name="brojKartice">
    <p class="greska nevidljiv">Netačan broj kartice</p>
    <label for="CVV">CVV</label>
    <input type="text" class="form-control" id="CVV" name="CVV">
    <p class="greska nevidljiv">Mora imati tačno 3 cifre</p>
    <label for="datumIsteka">Datum isteka kartice</label>
    <input type="text" class="form-control" id="datumIsteka" name="datumIsteka">
    <p class="greska nevidljiv">Format datuma MM/YY</p>
    <p class="m-0 p-0 h6 text-success-emphasis">Nakon uspešne kupovine stranica će se osvežiti</p>
    <button class="btn btn-dark d-block w-100" id="zavrsi" type="button">
    Završi kupovinu
    </button>`
    let ime = document.getElementById("ime")
    ime.addEventListener("blur", function(){
      netacnaValidacija(ime,imeRegex)
    })
    let brojTelefona = document.getElementById("brojTelefona")
    brojTelefona.addEventListener("blur", function(){
      netacnaValidacija(brojTelefona,brojTelefonaRegex)
    })
    let adresa = document.getElementById("adresa")
    adresa.addEventListener("blur", function(){
      netacnaValidacija(adresa,adresaRegex)
    })
    let postanskiBroj= document.getElementById("postanskiBroj")
    postanskiBroj.addEventListener("blur", function(){
      netacnaValidacija(postanskiBroj,postanskiBrojRegex)
    })
    let kartica= document.getElementById("brojKartice")
    kartica.addEventListener("blur", function(){
      netacnaValidacija(kartica,karticaRegex)
    })
    let cvv= document.getElementById("CVV")
    cvv.addEventListener("blur", function(){
      netacnaValidacija(cvv,cvvRegex)
    })
    let datumIsteka = document.getElementById("datumIsteka")
    datumIsteka.addEventListener("blur", function(){
      netacnaValidacija(datumIsteka,datumIstekaRegex)
    })
    let select = document.getElementById("grad")
  gradovi.forEach((grad,index) => {
    const option = document.createElement("option");
    option.value = index + 1; 
    option.textContent = grad; 
    select.appendChild(option);
  });
  proveriGrad()
  let dugme=document.getElementById("zavrsi")
  dugme.addEventListener("click", function(){
    if(grad.value==0){
      grad.removeAttribute("style")
      grad.setAttribute("style", "border:1px solid red")
      grad.nextElementSibling.classList.remove("nevidljiv")
      grad.nextElementSibling.classList.add("m-0")
    } else {grad.removeAttribute("style");grad.setAttribute("style", "border:1px solid green")}
    function proveraPaketomat(){
      netacnaValidacija(ime,imeRegex)
      netacnaValidacija(brojTelefona,brojTelefonaRegex)
      netacnaValidacija(adresa,adresaRegex)
      netacnaValidacija(postanskiBroj,postanskiBrojRegex)
      netacnaValidacija(kartica,karticaRegex)
      netacnaValidacija(cvv,cvvRegex)
      netacnaValidacija(datumIsteka,datumIstekaRegex)
    }
    proveraPaketomat()
    if (document.querySelectorAll(".nevidljiv").length >= 8) {
      console.log(document.querySelectorAll(".nevidljiv").length)
      location.reload()
  }
  })
})
                
let kucaForma=document.getElementById("kucaForma")
const kucaRadio = document.getElementById("kuca")
kuca.addEventListener("change", function(){
  if (kuca.checked){
    paketomatForma.innerHTML=''
    kucaForma.innerHTML= `<label for="ime">Ime i prezime</label>
    <input type="text" class="form-control" id="ime" name="ime">
    <p class="greska nevidljiv">Ime i prezime moraju počinjati velikim slovom</p>
    <label for="brojTelefona">Broj telefona</label>
    <input type="text" class="form-control" id="brojTelefona" name="brojTelefona">
    <p class="greska nevidljiv">Broj mora početi sa +381 ili 06</p>
    <label for="grad">Grad</label>
    <select name="grad" id="grad" class="form-select">
      <option value="0">Izaberite</option>
    </select>
    <p class="greska nevidljiv">Grad mora biti izabran</p>
    <label for="adresa">Adresa</label>
    <input type="text" class="form-control" id="adresa" name="adresa" disabled>
    <p class="greska nevidljiv">Ulica i broj</p>
    <div class="mt-3">
      <p>Način plaćanja</p>
      <div><input type="radio" id="kartica" name="placanje"><label for="kartica">Kreditna kartica</label></div>
    <div><input type="radio" id="kes" name="placanje"><label for="kes">Na adresi</label>
      <p class="greska nevidljiv" id="obavezanIzbor">Izaberite opciju</p>
    </div>
    </div>
    <div id="karticaDetalji"></div>
    <p class="m-0 p-0 h6 text-success-emphasis">Nakon uspešne kupovine stranica će se osvežiti</p>
    <button class="btn btn-dark d-block w-100" id="zavrsi" type="button">
    Završi kupovinu <span id="apsolutni" class="nevidljiv">Uspesno ste zavrsili kupovinu</span>
    </button>`
    const zavrsi = document.getElementById("zavrsi")
    console.log(zavrsi)
    proveriGrad()
    let kornisnikKarticom = document.getElementById("kartica")
    console.log(kornisnikKarticom)
    kornisnikKarticom.addEventListener("change", function(){
      obavezanIzbor.classList.add("nevidljiv")
    })
    let korisnikNaAdresi = document.getElementById("kes")
    korisnikNaAdresi.addEventListener("change", function(){
      obavezanIzbor.classList.add("nevidljiv")
    })
    let karticaDetalji = document.getElementById("karticaDetalji")
    let karticaDetaljiSadrzaj =`<label for="brojKartice">Broj kartice</label>
    <input type="text" class="form-control" id="brojKartice" name="brojKartice">
    <p class="greska nevidljiv">Netačan broj kartice</p>
    <label for="CVV">CVV</label>
    <input type="text" class="form-control" id="CVV" name="CVV">
    <p class="greska nevidljiv">Mora imati tačno 3 cifre</p>
    <label for="datumIsteka">Datum isteka kartice</label>
    <input type="text" class="form-control" id="datumIsteka" name="datumIsteka">
    <p class="greska nevidljiv">Format datuma MM/YY</p>`
    let karticaDetaljiPrazno = ""
    kornisnikKarticom.addEventListener("click", function(){
      karticaDetalji.innerHTML=karticaDetaljiSadrzaj
      let kartica= document.getElementById("brojKartice")
      kartica.addEventListener("blur", function(){
        netacnaValidacija(kartica,karticaRegex)
      })
      let cvv= document.getElementById("CVV")
      cvv.addEventListener("blur", function(){
        netacnaValidacija(cvv,cvvRegex)
      })
      let datumIsteka = document.getElementById("datumIsteka")
      datumIsteka.addEventListener("blur", function(){
        netacnaValidacija(datumIsteka,datumIstekaRegex)
      })
    })
    korisnikNaAdresi.addEventListener("click", function(){
      karticaDetalji.innerHTML=karticaDetaljiPrazno

    })
    let ime = document.getElementById("ime")
    ime.addEventListener("blur", function(){
      netacnaValidacija(ime,imeRegex)
    })
    brojTelefona.addEventListener("blur", function(){
      netacnaValidacija(brojTelefona,brojTelefonaRegex)
    })
    adresa.addEventListener("blur", function(){
      netacnaValidacija(adresa,adresaRegex)
    })
    grad.addEventListener("change", function(){
      if(grad.value!=0){
        adresa.removeAttribute("disabled")
      }else{
        adresa.setAttribute("disabled", "disabled")
      }
    })
    let select = document.getElementById("grad")
  gradovi.forEach((grad,index) => {
    const option = document.createElement("option");
    option.value = index + 1; 
    option.textContent = grad; 
    select.appendChild(option);
  });
  zavrsi.addEventListener("click", function(){
    function proveraKuca(){
      netacnaValidacija(ime,imeRegex)
      netacnaValidacija(brojTelefona,brojTelefonaRegex)
      netacnaValidacija(adresa,adresaRegex)
      if(grad.value==0){
        grad.removeAttribute("style")
        grad.setAttribute("style", "border:1px solid red")
        grad.nextElementSibling.classList.remove("nevidljiv")
        grad.nextElementSibling.classList.add("m-0")
      } else {grad.removeAttribute("style");grad.setAttribute("style", "border:1px solid green")}
    }
    proveraKuca()
    if(korisnikNaAdresi.checked==false&&kornisnikKarticom.checked==false){
      let obavezanIzbor = document.getElementById("obavezanIzbor")
      obavezanIzbor.classList.remove("nevidljiv")
    } else{
      if(kornisnikKarticom.checked){
        let kartica= document.getElementById("brojKartice")
        let cvv= document.getElementById("CVV")
        let datumIsteka= document.getElementById("datumIsteka")
        netacnaValidacija(kartica,karticaRegex)
        netacnaValidacija(cvv,cvvRegex)
        netacnaValidacija(datumIsteka,datumIstekaRegex)

      }
      obavezanIzbor.classList.add("nevidljiv")}
      if ((document.querySelectorAll(".nevidljiv").length >= 6 && korisnikNaAdresi.checked) || (document.querySelectorAll(".nevidljiv").length >= 9 && kornisnikKarticom.checked)) {
        console.log(document.querySelectorAll(".nevidljiv").length)
        location.reload()
    }
  })
  }})
function proveriGrad(){
  grad.addEventListener("change", function(){
    if(grad.value!=0){
      adresa.removeAttribute("disabled")
      grad.setAttribute("style", "border:1px solid green")
      grad.nextElementSibling.classList.add("nevidljiv")
      grad.nextElementSibling.classList.remove("m-0")
    }else{
      adresa.setAttribute("disabled", "disabled")
      grad.setAttribute("style", "border:1px solid red")
      grad.nextElementSibling.classList.remove("nevidljiv")
      grad.nextElementSibling.classList.add("m-0")
    }
  })
}

