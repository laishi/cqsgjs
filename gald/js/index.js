


var svgviewbox = document.getElementById("svgviewbox");
var curveBg = document.getElementById("curveBg");
var navPath = document.getElementById("navPath");
var textPath = document.getElementById("textPath");


var menuhome = document.querySelector(".menuhome")
var menuprojects = document.querySelector(".menuprojects")
var menuserver = document.querySelector(".menuserver")
var menuflow = document.querySelector(".menuflow")
var menuabout = document.querySelector(".menuabout")

var menus = document.querySelector(".menus")

var strokeWidth = 3


// FUNCTIONS

function setviewbox(el) {
    el.setAttribute("viewBox", "0 0 " + document.body.clientWidth + " " + (window.innerHeight / 2 + strokeWidth));
}

function setpath(el) {
    el.setAttribute("d",
        "M 0 " + (window.innerHeight / 2 - 100) + " C 0 " + (window.innerHeight / 2 - 100) + " " + (document.body.clientWidth / 5) + " " + (window.innerHeight / 2) + " " + (document.body.clientWidth / 2) + " " + (window.innerHeight / 2) + " " + (document.body.clientWidth - document.body.clientWidth / 5) + " " + (window.innerHeight / 2) + " " + document.body.clientWidth + " " + (window.innerHeight / 2 - 100) + " " + document.body.clientWidth + " " + (window.innerHeight / 2 - 100) + " V 0 H 0 Z");
}

function setNavPath(el) {
    el.setAttribute("stroke-width", strokeWidth);
    el.setAttribute("stroke-linecap", "square");    
    el.setAttribute("d", curveBg.getAttribute("d").split(" V")[0])
        
    // el.setAttribute("transform", "translate(0, " + -strokeWidth / 1 + ")");
}

function navToCurve(el, navSpace) {

    if (!navSpace) {
        navSpace = 1   //0.6~2
    }



    var navs = el.children;
    var navPathData = navPath.getAttribute("d")
    for (var index = 0; index < navs.length; index++) {
        navs[index].style.offsetPath = "path('" + navPathData + "')"
        navs[index].style.offsetDistance = ((index * 10) * navSpace) + ((100 - (navs.length - 1) * navSpace * 10) / 2) + "%"
    }
}

function headerImgCenter() {
    var jzimg = document.getElementsByClassName("jzimg")[0]

    var jzimgH = jzimg.getAttribute("height")

    jzimg.setAttribute("y", (window.innerHeight/2-jzimgH)/2)    
}


function checkBrower() {

    console.log(navigator.userAgent.indexOf("iPhone") > -1)

    if (navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("iPhone") > -1) {

        
        
        var menu = document.getElementsByClassName("menu")
        var menuName = [ "项目", "服务", "首页", "流程", "联系"]

        for (let index = 0; index < menu.length; index++) {
            const element = menu[index];

            element.children[1].innerHTML = menuName[index]
            element.style.width = "72px"
            element.style.height = "72px"
            element.children[0].style.fontSize = "1.5rem" 
            element.children[1].style.fontSize = "1rem" 
        }

        navToCurve(menus, 1.8)
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

}


function createCardImg() {
    

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

}












// var sBrowser, sUsrAg = navigator.userAgent;

// if (sUsrAg.indexOf("Android") > -1) {
//     // Mozilla/5.0 (Linux; Android 5.0; SM-G900P Build/LRX21T) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.116 
//   sBrowser = "Android";
//   console.log(sBrowser)
  



// } else if (sUsrAg.indexOf("iPhone") > -1) {
//   sBrowser = "iPhone";
//   console.log(sBrowser)  
// }else {
//   sBrowser = "others";
//   console.log(sBrowser)
// }













// INIT VIEWBOX

setviewbox(svgviewbox)
setpath(curveBg)
setNavPath(navPath)

navToCurve(menus)
headerImgCenter()

createCardImg()

creatImgDots()
checkBrower()






var winw = document.body.clientWidth

// RESIZE WINDOW VIEWBOX

window.addEventListener('resize', reportWindowSize);
window.onresize = reportWindowSize;

function reportWindowSize() {

    setviewbox(svgviewbox)
    setpath(curveBg)
    setNavPath(navPath)
    navToCurve(menus)
}





var pageTip = document.querySelector(".pageTip")
// onscroll

var menuOffset = 0;


window.addEventListener("scroll", function (e) {

    var scrollPos = window.scrollY || window.pageYOffset // pageYOffset for ie

    var newcurvevaule = (window.innerHeight / 2) - (scrollPos / 1)

    var menuOffsetScroll = Math.min(menuOffset + scrollPos / document.body.clientWidth, 0.3)




    // MENU 间距

    var scrollPath = "M 0 " + (window.innerHeight / 2 - 100) + " C 0 " + (window.innerHeight / 2 - 100) + " " + (document.body.clientWidth / 5) + " " + newcurvevaule + " " + (document.body.clientWidth / 2) + " " + newcurvevaule + " " + (document.body.clientWidth - document.body.clientWidth / 5) + " " + newcurvevaule + " " + document.body.clientWidth + " " + (window.innerHeight / 2 - 100) + " " + document.body.clientWidth + " " + (window.innerHeight / 2 - 100) + " V 0 H 0 Z"

    if (scrollPos >= 0 && scrollPos < window.innerHeight) {

        curveBg.setAttribute("d", scrollPath)
        navPath.setAttribute("d", scrollPath.split(" V")[0])

        navToCurve(menus, 1 + scrollPos / 500)

        if (navigator.userAgent.indexOf("Android") > -1 || navigator.userAgent.indexOf("iPhone") > -1){
            navToCurve(menus, 1.8 + scrollPos / 500)
        }



        pageTip.style.top = Math.min(scrollPos * 2, window.innerHeight / 2 - pageTip.clientHeight) + "px"
    }

})





var clipImg = document.querySelectorAll(".clipImg")
var svgheader = document.getElementById("svgheader")

var mousex = 0;
var mousey = 0;


svgheader.addEventListener('mousemove', function (event) {


    mousex = event.offsetX - document.body.clientWidth / 2;
    mousey = event.offsetY - window.innerHeight / 2;

    poselevel01 = clipImg[2].getAttribute("x")




    clipImg[0].setAttribute("x", -mousex / 4 + 300)
    clipImg[1].setAttribute("x", -mousex / 3 - 300)

    clipImg[2].setAttribute("x", mousex / 50)
    clipImg[3].setAttribute("x", mousex / 9 - 100)

    clipImg[4].setAttribute("x", mousex / 8 - 400)
    clipImg[5].setAttribute("x", mousex / 8 + 400)

    clipImg[6].setAttribute("x", mousex / 7 + 0)

    clipImg[7].setAttribute("x", mousex / 5 + 320)
    clipImg[8].setAttribute("x", mousex / 5 - 320)


    clipImg[9].setAttribute("x", mousex / 3 + 200)
    clipImg[10].setAttribute("x", mousex / 2 - 200)







}, false);





// pages

navmenus = document.querySelectorAll(".menu")

var pages = document.querySelectorAll(".page")



function togglePageDown() {



    navmenus.forEach(function (item, index) {

        if (pages[index].classList.contains("pagedown")) {
            pages[index].classList.toggle("pagedown")
        }

        pages[index].addEventListener('transitionend', pagetransitionend)


    })
}

function pagetransitionend() {
}



var maskimghome = document.querySelector(".maskimghome")
var maskimgpage = document.querySelector(".maskimgpage")







navmenus.forEach(function (item, index) {

    item.addEventListener('click', function (event) {
        togglePageDown()

        pages[index].classList.toggle("pagedown");
    })


    item.addEventListener('mouseover', changePathText, false)

})


function changePathText() {
    var textPath = document.querySelector(".textPath")
    var text = textPath.innerHTML

    var classList = this.classList.value

    console.log(classList.value)
    console.log(typeof("classList"))


    if (classList.includes("menuprojects")) {
        
        textPath.innerHTML = "建筑夜景照明 / 城市景观照明 / 道路桥梁照明 / 商业家居照明 / 广场古建照明 / 迎春灯饰"
    }

    if (classList.includes("menuserver")) {
        
        textPath.innerHTML = "用专业水平打动您 用敬业态度感动您"
    }

    if (classList.includes("menuhome")) {
        
        textPath.innerHTML = "重庆光爱照明设计"
    }

    if (classList.includes("menuflow")) {
        
        textPath.innerHTML = "合理有序的流程设计  满足施工效益最大化"
    }

    if (classList.includes("menuabout")) {
        
        textPath.innerHTML = "TEL: 13640566324   EMail: 504677424@qq.com"
    }    
}



// For each panel
pages.forEach(page => {
    // On click, toggle open
    // page.addEventListener('click', toggleOpen)
    // After open is done toggling, toggle active
    page.addEventListener('transitionend', pageend)
})


function pageend(params) {
}

