const navElement=document.querySelector('nav')
const menuIcon=document.querySelector('i')
let isClicked=false

navElement.style.display="none"

function handleClick(){
    if(isClicked){
        navElement.style.display="none"
        menuIcon.classList.remove('fa-x')
        isClicked=false
    }else{
        navElement.style.display="block"
        menuIcon.classList.add('fa-x')
        isClicked=true
    }
}


// function handleBodyClick(){
//     if(isClicked){
//         navElement.style.display="none"
//         menuIcon.classList.remove('fa-x')
//         isClicked=false
//     }
// }


// var videos = document.querySelectorAll('video');

// var options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 1
// };

// function handleIntersection(entries, observer) {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             videos.forEach(video => {
//                 if (video !== entry.target) {
//                     video.pause();
//                 }
//             });
//             entry.target.play();
//         } else {
//             entry.target.pause();
//         }
//     });
// }

// var observer = new IntersectionObserver(handleIntersection, options);

// videos.forEach(video => {
//     observer.observe(video);
// });
