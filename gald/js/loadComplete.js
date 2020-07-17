var sBrowser, sUsrAg = navigator.userAgent;

// The order matters here, and this may report false positives for unlisted browsers.

if (sUsrAg.indexOf("Firefox") > -1) {
  sBrowser = "Mozilla Firefox";
  // "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:61.0) Gecko/20100101 Firefox/61.0"
} else if (sUsrAg.indexOf("SamsungBrowser") > -1) {
  sBrowser = "Samsung Internet";
  // "Mozilla/5.0 (Linux; Android 9; SAMSUNG SM-G955F Build/PPR1.180610.011) AppleWebKit/537.36 (KHTML, like Gecko) SamsungBrowser/9.4 Chrome/67.0.3396.87 Mobile Safari/537.36
} else if (sUsrAg.indexOf("Opera") > -1 || sUsrAg.indexOf("OPR") > -1) {
  sBrowser = "Opera";
  // "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.102 Safari/537.36 OPR/57.0.3098.106"
} else if (sUsrAg.indexOf("Trident") > -1) {
  sBrowser = "Microsoft Internet Explorer";
  // "Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; Zoom 3.6.0; wbx 1.0.0; rv:11.0) like Gecko"
} else if (sUsrAg.indexOf("Edge") > -1) {
  sBrowser = "Microsoft Edge";
  // "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.36 Edge/16.16299"
} else if (sUsrAg.indexOf("Chrome") > -1) {
  sBrowser = "Google Chrome or Chromium";
  // "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/66.0.3359.181 Chrome/66.0.3359.181 Safari/537.36"
} else if (sUsrAg.indexOf("Safari") > -1) {
  sBrowser = "Apple Safari";
  // "Mozilla/5.0 (iPhone; CPU iPhone OS 11_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/11.0 Mobile/15E148 Safari/604.1 980x1306"
} else {
  sBrowser = "android";
}

if (sBrowser == "android") {
    var menu = document.querySelectorAll("menu")
    for (let index = 0; index < menu.length; index++) {
        const element = menu[index];

        element.children[1] = "android"
        
    }
}

alert(navigator.appVersion);



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



