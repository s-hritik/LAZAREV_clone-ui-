let nav = document.querySelector("nav")
nav.addEventListener("mouseenter",()=>{
let t= gsap.timeline()
t.to(".navbottom",{
    height:"20vh",
    duration:0.5
})
t.to(".navbar h5",{
    display:"block",
    duration:0.1,
    opacity:100
})
t.to(".navbar h5 span",{
    y:0,
    // duration:0.3,
    Stagger:{
        amount:0.5
    }
})
})
nav.addEventListener("mouseleave",()=>{
let t= gsap.timeline()
 t.to(".navbar h5 span",{
    y:25,
    Stagger:{
        amount:0.2
    }
})
t.to(".navbar h5",{
    display:"none",
    // opacity:0,
    duration:0.1
})
t.to(".navbottom",{
    height:0,
    duration:0.1
})
})

let videopage = document.querySelector(".page3-c")
let video = document.querySelector(".page3 video")
 
videopage.addEventListener("click",()=>{
    video.play()
    gsap.to(video,{
        transform: "scaleX(0.7) scale(0)",
        opacity:1,
        borderRadius:"30px"
    })
})
video.addEventListener("click",()=>{
    video.pause()
    gsap.to(video,{
        transform:"scaleX(0) scaleY(0)",
        opacity:0,
        borderRadius:0
    })
})
