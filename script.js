function loadingAnimation() {
  let tl = gsap.timeline();

  tl.from(".line h1", {
    y: 150,
    stagger: 0.25,
    duration: 0.6,
    delay: 0.5,
  });

  tl.from("line1-part1, .line h2", {
    opacity: 0,
    onStart: function () {
      let h5Timer = document.querySelector("#line1-part1 h5");
      let grow = 0;
      setInterval(function () {
        if (grow < 100) {
          h5Timer.innerHTML = grow++;
        } else {
          grow = 100;
          h5Timer.innerHTML = grow;
        }
      }, 20);
    },
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.3,
    delay: 4,
  });

  tl.from("#page1", {
    delay: 0.1,
    y: 1200,
    opacity: 0,
    duration: 0.5,
    ease: Power4,
  });

  tl.to("#loader", { display: "none" });
  tl.from("#hero1 h1,#hero2 h1,#hero3 h2, #hero3 h3, #hero4 h1", {
    y: 120,
  });
}

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", { left: dets.x, top: dets.y });
  });

  Shery.makeMagnet("#nav-part2 h4");
}

loadingAnimation();
cursorAnimation();
// moving custom cursor with mouse movement.
