// Ouvrir et fermer la boite de dialogue alert
var customDialog = document.getElementById('custom-dialog');
var OKDialogButton = document.getElementById('OK-dialog');
var closeDialogButton = document.getElementById('close-dialog');
var pcontexte = document.getElementById('contexte');
var h7texte = document.getElementById('boxTitle');
function alerteo(contexte){
     h7texte.textContent= "Le site "+ document.title +" veut dire:";
    pcontexte.textContent=contexte;
    customDialog.style.display = 'block';
    
 };

 //Boite de confirmation personnalisée
const confirmeo=(contexte,DoThisFunction)=>{
        h7texte.textContent= "Le site "+ document.title +" veut confirmer:";
        pcontexte.textContent=contexte;
        OKDialogButton.style.display = 'inline';
        customDialog.style.display = 'block';     
          
         OKDialogButton.onclick=() =>{
         OKDialogButton.style.display = 'none';
         customDialog.style.display = 'none';  
         DoThisFunction(true);    
        };      
        closeDialogButton.onclick=() => {
            customDialog.style.display = 'none';
            OKDialogButton.style.display = 'none';
            DoThisFunction(false);     
        };        
}
closeDialogButton.addEventListener('click', () => {
    customDialog.style.display = 'none';
});

//Montrer le bouton menu
var btn_menu=document.querySelector('.logo-menu');
var menu=document.querySelector('.nav-ul');

btn_menu.addEventListener('click', ()=>{
    menu.classList.toggle('active')
})

var all_links=document.querySelectorAll('.nav-li');
all_links.forEach(item=>{
    item.addEventListener('click',()=>{
        menu.classList.toggle('active')
    })
}) 

// WhiteMode
var btn=document.querySelector('.btnchangemode');
var section=document.querySelector('section');
var AllParagraphe=document.querySelectorAll('p');
var h3Section=section.querySelectorAll('h3');
var h5Section=section.querySelectorAll('h5');
var span=document.querySelectorAll('span');
var inputText=document.querySelectorAll('.input-text');
var navigation=document.querySelector('nav');
btn.addEventListener('click',changer_mode,false);
function changer_mode(e){
    if(e.target.click){
        document.body.classList.toggle('white-mode'); 
        section.classList.toggle('white-mode');
        AllParagraphe.forEach(item=>{
            item.classList.toggle('white-mode');
        }); 
        h3Section.forEach(item=>{
            item.classList.toggle('white-mode');
        });     h5Section.forEach(item=>{
             item.classList.toggle('white-mode');
         });
        span.forEach(item=>{
        item.classList.toggle('white-mode');});
        inputText.forEach(item=>{
        item.classList.toggle('white-mode');});
        navigation.classList.toggle('white-mode');
        if(btn.value=="Mode claire")
        {btn.value="Mode sombre";}
        else{btn.value="Mode claire";}

         // Supprimez la classe pour désactiver l'animation
        section.classList.remove("animation-active");

        // Réappliquez la classe après un court délai
        setTimeout(function() {
            section.classList.add("animation-active");
        }, 10);    
    }
}

//Faire changer la barre de navigation au scroll
window.addEventListener("scroll", function() {
    var navbar = document.querySelector("nav");
    var scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
});


//Boutton voir plus
var VP = document.querySelectorAll('.projet');
var isVisible = false;

var projets = [];
var suites = [];

for (var i = 1; i <= 4; i++) {
  projets.push(document.querySelector('#exp' + i));
  suites.push(document.querySelector('#suite' + i));
}

projets.forEach((projet, index) => {
  projet.addEventListener('click', () => {
    if (isVisible) {
      suites[index].style.display = "none";
      projet.textContent = "Voir plus";
    } else {
      suites[index].style.display = "block";
      projet.textContent = "Voir moins";
    }
    isVisible = !isVisible;
  }, false);
});


//Boutton Télécharger mon cv
var btnCV=document.getElementById("btn-CV");
var a=document.getElementById("download");
btnCV.addEventListener('click',()=>{


    
    confirmeo("Voulez-vous télécharger le CV de Joseph?", (Yes)=>{
    if(Yes){ window.location.href="./CV/CV_Joseph.pdf";}
 });
});


//Envoi d'Email avec API EmailJS
const contactVisitor = document.querySelector("#contact-user");
const phoneVisitor = document.querySelector("#phone-user");
const messageVisitor = document.querySelector("#message-user");
var btnenvoi=document.getElementById('btn');
btnenvoi.addEventListener('click',sendMail,false);

function sendMail(event){
    event.preventDefault();

    alerteo("Votre message est en cours d'envoi!");

    (function(){
        emailjs.init("b8Jfd-MOegfJvXMeC");
    })();

    var params={
        to_name: "tolotraadr@gmail.com",
        from_name: phoneVisitor.value,
        message: messageVisitor.value,
        subject: "PortfolioComment",
        reply_to: contactVisitor.value,   
    }

    var serviceId="service_aslf1z4";
    var templateId="template_t4qaj0n";

    emailjs.send(serviceId, templateId, params)
    .then(() => {
        contactVisitor.value="";
        messageVisitor.value="";
        phoneVisitor.value="";
        alerteo("Votre message est envoyé avec succés.\n \n Je vous recontacterai dès que possible. Merci!");
    })
    .catch((error)=>{alerteo("Une erreur se produite :"+error);});
}

