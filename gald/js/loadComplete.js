var cardSlider = document.querySelectorAll(".cardSlider")
for (let index = 0; index < cardSlider.length; index++) {
    var element = cardSlider[index];
    var imgtitle = imageData[index].imgtitle
    var imgsrc = imageData[index].imgsrc

    for (let i = 0; i < imgsrc.length; i++) {
        var imgurl = imgsrc[i];
        
        var imgdiv = document.createElement("div")
        imgdiv.classList.add("card__img")
        imgdiv.style.backgroundImage = 'url(./' + imgurl + ')'
        element.append(imgdiv)            
    }        
}



function creatImgDots(params) {
    var girdImgs = document.querySelectorAll(".girdImgs")

 
    

    for (let index = 0; index < girdImgs.length; index++) {
        var element = girdImgs[index];
        var gridImg = element.children[0].children

        var imgDots = document.createElement("div")
        imgDots.classList.add("imgDots")

        for (let i = 0; i < gridImg.length; i++) {
            var imgDot = document.createElement("div")
            imgDot.classList.add("imgDot")           

            imgDots.append(imgDot)



            
            var dotImg = gridImg[i].style.backgroundImage  
            imgDot.style.backgroundImage = dotImg

            imgDot.addEventListener('click', function (event) {
                event.stopPropagation()

                var cardSliderImgs = this.parentElement.parentElement.children[0]                
                var cardSliderImg = cardSliderImgs.children

                for (let index = 0; index < cardSliderImg.length; index++) {
                    var element = cardSliderImg[index];
                    element.style.opacity = 0                    
                }

                
                dotbgimg = this.style.backgroundImage.replace("small121x75", "middle1024x735")   
                console.log(dotbgimg)

                cardSliderImgs.style.backgroundImage = dotbgimg




            }, false)


     
        }

        element.append(imgDots)        
    }



    // var imgDots = document.createElement("div")
    // imgDots.classList.add("imgDots")

}






creatImgDots()











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



