var t1 = gsap.timeline()

t1.from(".loader h2",{
    x:40,
    opacity:0,
    stagger: 0.4,
    duration:2
})
t1.to(".loader h2",{
    x:-40,
    opacity:0,
    stagger: 0.2,
    duration: 1
})
t1.to(".loader",{
    opacity:0
})
t1.from(".header",{
    y:50,
    opacity:0,
    stagger: 0.3,
    duration: 0.5,
    delay:-0.5
})
t1.from(".content",{
    y:50,
    opacity:0,
    stagger: 0.3,
    duration: 0.5,
    delay:-0.1
    
})
// t1.from(".nav",{
//     y:50,
//     opacity:0,
//     stagger: 0.3,
//     duration: 0.5,
//     delay:-0.3
// })


t1.to(".loader",{
    display:"none"
})