














document.addEventListener("DOMContentLoaded", () => {

    var projectImgs = document.querySelectorAll(".card__img")
    var gridImg = document.querySelectorAll(".gridImg")




    

    

    imgRename1024(projectImgs)
    // imgRename1024(gridImg)



    
    
    // var cards = document.querySelectorAll(".card")

    // cards.forEach(element => {
        
    //     element.addEventListener('click', function (event) {
    //         var reimg = element.children[0].children[0].children
    //         imgRename1920(reimg)
    //         console.log(reimg)
    //     })
    // });




    

    

});


function imgRename1024(who) {

    for (let index = 0; index < who.length; index++) {
        const element = who[index];
        var thumbnail = element.style.backgroundImage
        var projectImg = thumbnail.replace("small121x75", "middle1024x735")
        element.style.backgroundImage = projectImg
        
    }
}
function imgRename1920(who) {

    for (let index = 0; index < who.length; index++) {
        const element = who[index];
        var thumbnail = element.src
        var projectImg = thumbnail.replace("middle1024x735", "large1920x1190")
        element.src = projectImg
        
    }
}



