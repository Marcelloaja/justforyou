// Just started doing this today so lots of redundancy in the code...
/**
 * RESPONSIVE PC
 */

const pills = Array.from(document.querySelectorAll(".three-half"));

const burst = new mojs.Burst({
  radius: { 0: Math.floor(Math.random() * 50) + 100 },
  left: "50%",
  top: "47%",
  rotate: { 0: 90 },
  opacity: { 1: 0 },
  children: {
    fill: { "#e7dd4b": "#e7dd4b" },
  },
  count: 20,
});

const timeline = gsap.timeline();
timeline
  .to(pills, {
    left: 0,
    duration: 1.5,
  })
  .to(
    "h2:nth-of-type(1)",
    {
      "--t": 0,
      duration: 1.5,
    },
    "0.2"
  )
  .to(pills, {
    y: "12.5vh",
    rotate: 180,
  })
  .to(pills, { left: "initial", right: 0, duration: 1.5 })
  .to(
    "h2:nth-of-type(2)",
    {
      "--t": 0,
      duration: 1.5,
    },
    "=-1.3"
  )
  .to(
    "h2:nth-of-type(3)",
    {
      "--t": 0,
      duration: 1.5,
    },
    "=-1.3"
  )  
  .to(pills, {
    y: "31vh",
    rotate: 0,
  })
  .to(pills, { right: "calc(50% - 40px)" })
  .to(pills, { width: 32, x: -24, onComplete: () => burst.replay() })
  .to(pills, {
    y: "45vh",
    delay: 0.6,
  })
  .to(pills, {
    width: 500,
    height: 100,
    x: 200,
  })
  .from("h1 span", {
    y: 100,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
    ease: "elastic.out(1.2, 0.4)",
  })
  // .to('h1 span:nth-of-type(1)',{
  //   x:-40,
  //   reverse:true
  // }).to('h1 span',{
  //   x:40,
  //   stagger:0.3
  // })
  .to(pills, {
    rotate: 15,
  })
  .to(
    "h1",
    {
      rotate: 15,
    },
    "=-0.5"
  )
  .to("h1 span:nth-of-type(9)", {
    x: 0,
    opacity: 0,
  })
  .to(pills, {
    rotate: 0,
  })
  .to(
    "h1",
    {
      rotate: 0,
    },
    "=-0.5"
  )
  .to("h1", {
    color: "#e7dd4b",
  })

  // Kuning"
  .to(pills, {
    width: 10,
    height: 10,
    x: 60, //66
    y: "54.5vh", //50vh
  });
