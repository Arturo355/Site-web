var listeMusique = ["playlist/Parsifal.mp3" , "playlist/Moldau.mp3","playlist/Dir-Jehova.mp3" , "playlist/Gavotte.mp3" , "playlist/Nocturne.mp3" , 
"playlist/Nadir.mp3" , "playlist/Pastoral.mp3" , "playlist/Fate.mp3" , "playlist/Freiyheit.mp3" , "playlist/Funebre.mp3"  ]

var listeImage = ["Media/Photo1.jpg" , "Media/Photo2.jpg" , "Media/Photo3.jpg" , "Media/Photo3.jpg" ,
 "Media/Photo3.jpg" , "Media/Photo3.jpg", "Media/Photo3.jpg" , "Media/Photo3.jpg" , "Media/Photo3.jpg" , "Media/Photo3.jpg" , "Media/Photo3.jpg"]


 function change(index) {
    // Récupérez l'image correspondante
    var image = document.querySelector("#" + images[index]);

    // Changez le style CSS de l'image pour qu'elle occupe 100% de l'écran
    image.style.width = "100%";
    image.style.height = "100vh";}


    
var lecteur = new Audio () ; 
lecteur.play()

var boutonPlay = document.querySelector('#play')
boutonPlay.addEventListener("click",function (){
lecteur.play()

}) 


var boutonPause = document.querySelector("#pause")
boutonPause.addEventListener("click",function (){
      lecteur.pause()
})
    gsap.from("#img-parallels", { duration:2,opacity:0,});











//animation playlist //
document.querySelector('.Home').addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('#Page1').scrollIntoView({ behavior: 'smooth' });
  });
  
  document.querySelector('.About').addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('#Page2').scrollIntoView({ behavior: 'smooth' });
  });
  
  document.querySelector('.Music').addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector('#Page3').scrollIntoView({ behavior: 'smooth' });
  });
  
  //switch entre les pages //


 
let elements5 = ["#Logo-Cristian", "#homeLink", "#aboutLink", "#musicLink", "#Fond-page1", "#Titre",  "#img-christian", "#img-christian-about", "#sous-titre-page2", "#Premier-paragraphe", "#Deuxieme-paragraphe", "#img-parallels", "#Nom-album", "#Parsifal", "#Parsifal-temps", "#Moldau", "#Moldau-temps", "#Dir-Jehova", "#Dir-Jehova-temps", "#Gavotte", "#Gavotte-temps", "#Nocturne", "#Nocturne-temps", "#Nadir", "#Nadir-temps", "#Pastoral",
 "#Pastoral-temps", "#Fate", "#Fate-temps", "#Freiyheit", "#Freiyheit-temps", "#Funebre", "#Funebre-temps"];

  elements5.forEach((element5) => {
      gsap.set(element5, { autoAlpha: 0, y: -10 });
  
      ScrollTrigger.create({
          trigger: element5,
          start: "top 80%",  
          end: "top 25%",  
          onEnter: () => gsap.fromTo(element5,
              { autoAlpha: 0, y: -15 },
              { autoAlpha: 1, y: 0, duration: 1.5,}
          ),
         
      });
  });
  //animation que chaque élément apparait  //





// Pause et play //
function change(param) {
    lecteur.src = listeMusique[param];
    lecteur.play();
    var images = document.querySelector("#img-parallels");
    images.src = listeImage[param];
    gsap.from("#img-parallels", { duration: 2, opacity: 0, });
}
;
var musique1 = document.querySelector("#Parsifal");
musique1.addEventListener("click", function () {
    change(0);



});
var musique2 = document.querySelector("#Moldau");
musique2.addEventListener("click", function () {
    change(1);

});
var musique3 = document.querySelector("#Dir-Jehova");
musique3.addEventListener("click", function () {
    change(2);


});
var musique4 = document.querySelector("#Gavotte");
musique4.addEventListener("click", function () {
    change(3);


});
var musique5 = document.querySelector("#Nocturne");
musique5.addEventListener("click", function () {
    change(4);


});
var musique6 = document.querySelector("#Nadir");
musique6.addEventListener("click", function () {
    change(5);


});
var musique7 = document.querySelector("#Pastoral");
musique7.addEventListener("click", function () {
    change(6);


});
var musique8 = document.querySelector("#Fate");
musique8.addEventListener("click", function () {
    change(7);


});
var musique9 = document.querySelector("#Freiyheit");
musique9.addEventListener("click", function () {
    change(8);


});
var musique10 = document.querySelector("#Funebre");
musique10.addEventListener("click", function () {
    change(9);


});

var boutonParallels = document.querySelector("#Nom-album");
boutonParallels.addEventListener("click", function () {
    lecteur.pause();
    var images = document.querySelector("#img-parallels");
    images.src = "Media/Parallels.jpg"; 
    gsap.from("#img-parallels", { duration:2,opacity:0,});
});





















