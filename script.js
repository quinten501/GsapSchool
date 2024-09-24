function animateMain() {
    let mainTimeline = gsap.timeline({
        paused: true,
        defaults: { duration: 1, ease: "power2.inOut" }
    });

    mainTimeline
        .add(circleEntry(), "start")
        .add(circleRotate(), "start+=0.5")
        .add(circleScale(), "start+=1")
        .add(circleBounce(), "start+=1.5")
        .add(circleColorChange(), "start+=2")
        .add(circleShake(), "start+=2.5");

    return mainTimeline;
}

function circleEntry() {
    let tl = gsap.timeline();
    tl.from("#circle1", { x: -200, opacity: 0 });
    tl.from("#circle2", { x: 200, opacity: 0 }, "-=0.5");
    tl.from("#circle3", { y: -200, opacity: 0 }, "-=0.5");
    return tl;
}

function circleRotate() {
    let tl = gsap.timeline();
    tl.to("#circle1", { rotation: 360 });
    tl.to("#circle2", { rotation: -360 }, "-=0.5");
    tl.to("#circle3", { rotation: 360 }, "-=0.5");
    return tl;
}

function circleScale() {
    let tl = gsap.timeline();
    tl.to("#circle4", { scale: 1.5, opacity: 1 });
    tl.to("#circle5", { scale: 0.5, opacity: 1 }, "-=0.5");
    tl.to("#circle6", { scale: 2, opacity: 1 }, "-=0.5");
    return tl;
}

function circleBounce() {
    let tl = gsap.timeline();
    tl.from("#circle4", { y: -100, ease: "bounce.out" });
    tl.from("#circle5", { y: -100, ease: "bounce.out" }, "-=0.5");
    tl.from("#circle6", { y: -100, ease: "bounce.out" }, "-=0.5");
    return tl;
}

function circleColorChange() {
    let tl = gsap.timeline();
    tl.to("#circle1", { backgroundColor: "#e74c3c" });
    tl.to("#circle2", { backgroundColor: "#f39c12" }, "-=0.5");
    tl.to("#circle3", { backgroundColor: "#2ecc71" }, "-=0.5");
    return tl;
}

function circleShake() {
    let tl = gsap.timeline();
    tl.to(".circle", { x: "+=10", repeat: 5, yoyo: true, duration: 0.1 });
    return tl;
}

let mainTimeline = animateMain();

document.getElementById("startBtn").addEventListener("click", () => mainTimeline.play());
document.getElementById("pauseBtn").addEventListener("click", () => mainTimeline.pause());
document.getElementById("reverseBtn").addEventListener("click", () => mainTimeline.reverse());
document.getElementById("restartBtn").addEventListener("click", () => mainTimeline.restart());
