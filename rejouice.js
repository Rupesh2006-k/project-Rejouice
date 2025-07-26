/** @format */

function cursor() {
    // show reel create kiya hai
    let page2 = document.querySelector(".page2");
    let h1 = document.createElement("h1");
    h1.innerText = "Showreel";
    page2.prepend(h1);
  
    // cursor animation
  
    let play = document.querySelector(".page2 h5");
    page2.addEventListener("mousemove", function (dets) {
      const rect = page2.getBoundingClientRect();
      const x = dets.clientX - rect.left;
      const y = dets.clientY - rect.top;
      gsap.to(play, {
        x: x,
        y: y,
      });
    });
  
    page2.addEventListener("mouseenter", function () {
      gsap.to(play, {
        scale: 1,
        opacity: 1,
      });
    });
    page2.addEventListener("mouseleave", function () {
      gsap.to(play, {
        scale: 0,
        opacity: 0,
      });
    });
  
    // cursor click hone pr video play
    let reelFull = document.querySelector("#reel-full");
    let reel = document.querySelector(".reel");
  
    let flag = true;
    page2.addEventListener("click", function () {
      if (flag === true) {
        reel.style.display = "block";
        reelFull.play()
        play.innerHTML = '<i class="ri-pause-fill"></i>Pause Reel';
        flag = false;
      } else {
        reel.style.display = "none";
        play.innerHTML = '<i class="ri-play-reverse-fill"></i> Play Reel';
        flag = true;
      }
    });
  }
  cursor();
  
  // animation done
  // text animation up and down
  
  function videoAnimation() {
    let boxes = document.querySelectorAll(".box");
  
    // Array of overlay video paths
    let overlayVideos = [
      "./one.mp4", // box1
      "./two.mp4", // box3
      "./two.mp4", // box3
    ];
  
    boxes.forEach(function (box, index) {
      // create overlay wrapper
      let div = document.createElement("div");
      div.classList.add("overlay");
  
      // create video element
      let video = document.createElement("video");
      video.src = overlayVideos[index];
      video.autoplay = true;
      video.loop = true;
      video.muted = true;
      video.style.width = "100%";
      video.style.height = "100%";
      video.style.objectFit = "cover";
  
      div.appendChild(video); // add video to overlay
      box.appendChild(div); // add overlay to box
  
      const overlaySize = 120;
  
      box.addEventListener("mousemove", function (e) {
        const boxRect = box.getBoundingClientRect();
        const x = e.clientX - boxRect.left;
        const y = e.clientY - boxRect.top;
  
        let safeZone = 100;
  
        if (
          x > safeZone + overlaySize / 2 &&
          x < boxRect.width - safeZone - overlaySize / 2 &&
          y > safeZone + overlaySize / 2 &&
          y < boxRect.height - safeZone - overlaySize / 2
        ) {
          div.style.left = x - overlaySize / 2 + "px";
          div.style.top = y - overlaySize / 2 + "px";
          div.style.opacity = 1;
        } else {
          div.style.opacity = 0;
        }
      });
  
      box.addEventListener("mouseleave", function () {
        div.style.opacity = 0;
      });
    });
  }
  videoAnimation();
  
  function swiperjs() {
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
    });
  }
  swiperjs();
  
  // timeing clock
  function updateClock() {
    let now = new Date();
  
    let h = now.getHours().toString().padStart(2, "0");
    let m = now.getMinutes().toString().padStart(2, "0");
    let s = now.getSeconds().toString().padStart(2, "0");
  
    let period = "AM";
  
    if (h >= 12) {
      period = "PM";
    }
    h = h % 12;
    if (h === 0) {
      h = 12;
    }
  
    document.querySelectorAll(".time").forEach(function (el) {
      el.textContent = `${h}:${m}:${s} ${period}`;
    });
  }
  setInterval(updateClock, 1000);
  updateClock();
  
  // auto scrollbar
  function autoScrollSwiper() {
    const scrollbar = document.querySelector("#scrollbar .swiper");
    let scrollSpeed = 1; // px per frame
    let animationId;
    let isPaused = false;
  
    function scroll() {
      if (!isPaused) {
        scrollbar.scrollLeft += scrollSpeed;
        if (
          scrollbar.scrollLeft >=
          scrollbar.scrollWidth - scrollbar.clientWidth
        ) {
          scrollbar.scrollLeft = 0; // Loop scroll
        }
      }
      animationId = requestAnimationFrame(scroll);
    }
    // Start auto-scroll
    animationId = requestAnimationFrame(scroll);
    // Pause on hover
    scrollbar.addEventListener("mouseenter", function () {
      isPaused = true;
      cancelAnimationFrame(animationId);
    });
    // Resume when mouse leaves
    scrollbar.addEventListener("mouseleave", function () {
      isPaused = false;
      animationId = requestAnimationFrame(scroll);
    });
  }
  autoScrollSwiper();
  // portfolio page width animation
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(
    ".page7 .container",
    { width: "60%" }, // Start: 60%
    {
      width: "95%", // End: 90%
      scrollTrigger: {
        trigger: ".page7",
        start: "top 80%", // Jab page7 screen me enter kare
        end: "top 30%", // Jab page7 ka bottom center tak aaye
        scrub: 2, // Smooth scroll ke sath chale
        // markers: true        // (Enable if you want to debug)
      },
    },
  );
  
  // togale text animation
  function loaderAnimation(){
    
  let get = document.querySelector(".get");
  
  get.addEventListener("mousemove", function () {
    get.textContent = "About Us";
  });
  
  get.addEventListener("mouseleave", function () {
    get.textContent = "Get to know us";
  });
  
  //loader animation
  
  // Disable scroll initially
  document.body.classList.add("stop-scroll");
  
  let time = gsap.timeline();
  
  time.from("#loader h3", {
    x: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
  });
  
  time.to("#loader h3", {
    x: -40,
    opacity: 0,
    stagger: 0.1,
    duration: 1,
  });
  
  // 👇 This is the final exit animation (top to bottom with opacity 0)
  time.to("#loader", {
    y: "100%",      // 👈 Move from top to bottom
    opacity: 0,     // 👈 Fade out
    duration: 1.5,    // 👈 You can adjust duration as needed
    ease: "power2.inOut",
    onComplete: function () {
      document.body.classList.remove("stop-scroll");
      document.getElementById("loader").style.display = "none"; // Optional safety
    },
  });
  
  box.addEventListener("mousemove", function (e) {
    const boxRect = box.getBoundingClientRect();
    const x = e.clientX - boxRect.left;
    const y = e.clientY - boxRect.top;
  
    let safeZone = 100;
  
    if (
      x > safeZone + overlaySize / 2 &&
      x < boxRect.width - safeZone - overlaySize / 2 &&
      y > safeZone + overlaySize / 2 &&
      y < boxRect.height - safeZone - overlaySize / 2
    ) {
      gsap.to(div, {
        left: x - overlaySize / 2,
        top: y - overlaySize / 2,
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    } else {
      gsap.to(div, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  });
  
  }
   loaderAnimation()