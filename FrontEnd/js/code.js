const galleryHtml= document.querySelector(".gallery");
const formloginHtml= document.getElementById("formlogin")
const btnloginHtml= document.getElementById("btnlogin")
await init() 
console.log(allWorks)
function showGallery(arrayOfWorks){
    let works=""
 arrayOfWorks.map((work)=> {
    works +=`
            <figure>
				<img src="${work.imageUrl}" alt="Abajour Tahina">
				<figcaption> ${work.title}</figcaption>
			</figure>
    `
 })  
 galleryHtml.innerHTML=works
}
showGallery(allWorks);