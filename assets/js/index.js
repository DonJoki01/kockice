window.onload=function(){
    let izbor = document.querySelector("#izbor")
    const izborKartice=[
        {naslov:'Zabava sa porodicom',ikonica:'fa-solid fa-people-roof',opis:'Od kooperativnih porodičnih avantura do takmičarskih strateških igara, naš izbor je savršen za okupljanje za stolom i stvaranje trajnih uspomena.'},
        {naslov:'Solo avantura',ikonica:'fa-solid fa-horse',opis:'Uronite u bogate, impresivne svetove uz naš asortiman solo igara. Savršeno za lični izazov ili opuštajući način da se odmorite.'},
        {naslov:'Igre za društvo',ikonica:'fa-solid fa-champagne-glasses',opis:'Pojačajte svoja druženja smehom i uzbuđenjem. Otkrijte igre dizajnirane da dovedu do zabave u svakom grupnom okupljanju'}
    ]
    let izborSadrzaj = ''
    for (let kartica of izborKartice){
        izborSadrzaj+=`<div class="col-lg-4 col-sm-12">
          <div class="karticaIzbor m-3 p-3 rounded d-flex flex-column h-100">
            <p class="h1"><i class="${kartica.ikonica}"></i></p>
            <h4 class="my-xl-3 my-l-2 my-1">${kartica.naslov}</h4>
            <p>
              ${kartica.opis}
            </p>
          </div>
        </div>`
    }
    izbor.innerHTML=izborSadrzaj
}

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
const brojTelefonaRegex=/^(\+3816|06)[0-9]{7,8}$/
const imeRegex = /^([A-ZŠĐČĆŽ][a-zšđčćž]+)(\s[A-ZŠĐČĆŽ][a-zšđčćž]+)+$/;
const indeksRegex = /^[1-9]\d{0,2}\/(1[6-9]|2[0-5])$/
const emailRegex = /^[a-z]+\.[a-z]+\.\d{1,3}\.\d{1,2}@ict\.edu\.rs$/;
let ime = document.getElementById("ime")
ime.addEventListener("blur", function(){
  netacnaValidacija(ime,imeRegex)
})
let brojTelefona = document.getElementById("brojTelefona")
brojTelefona.addEventListener("blur", function(){
  netacnaValidacija(brojTelefona,brojTelefonaRegex)
})
let email = document.getElementById("email")
email.addEventListener("blur", function(){
 
  netacnaValidacija(email,emailRegex)
  let brIndeksa = email.value.split("@")[0].split(".")[2] +"/" +email.value.split("@")[0].split(".")[3]
  console.log(brIndeksa)
  let select = document.querySelector("select")
  if(emailRegex.test(email.value)){
    select.removeAttribute("disabled")
    let option = document.createElement("option");
    option.value = brIndeksa;       
    option.textContent = brIndeksa; 
    select.options[1]=option;
  } else {
    select.setAttribute("disabled", "disabled")
    select.selectedIndex=0
    if (select.selectedIndex==0){select.setAttribute("style", "border:1px solid #ced4da")}
  }
})
let indeks = document.getElementById("indeks")
indeks.addEventListener("blur", function(){
  netacnaValidacija(indeks,indeksRegex)
})
const prijavaTurnir= document.getElementById("prijavaTurnir")
prijavaTurnir.addEventListener("click", function(){
  netacnaValidacija(indeks,indeksRegex)
  netacnaValidacija(brojTelefona,brojTelefonaRegex)
  netacnaValidacija(ime,imeRegex)
  netacnaValidacija(email,emailRegex)
})
  $(function() {
    $(".rslides").responsiveSlides();
  });
