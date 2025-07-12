// Smooth Scroll with Scrub ScrollTrigger fix
function SmoothScroll(){
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true,
    
      // for tablet smooth
      tablet: { smooth: true },
    
      // for mobile
      smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      }
});
}
SmoothScroll();

let page3 = document.querySelector("#page3");
let page3Cursor = document.querySelector("#cursor");
let mainWrapper = document.querySelector("#main");

page3.addEventListener('mousemove', (event) => {
    gsap.to(page3Cursor,{
        x: event.clientX + "px",
        y: event.clientY + "px",
    })
});

page3.addEventListener('mouseenter', () => {
    gsap.to(page3Cursor,{
        opacity: 0.5,
        scale: 1,
    })
});

page3.addEventListener('mouseleave', () => {
    gsap.to(page3Cursor,{
        opacity: 0,
        scale: 0,
    })
});

// Underline in nav items
let navBox = document.querySelectorAll("#nav-box");

navBox.forEach((box)=>{
    box.addEventListener('mouseenter',()=>{
        box.querySelector(".underline").style.left = "-5vw";
        setTimeout(()=>{
            box.querySelector("a").style.color = "gray";
            box.querySelector(".underline").style.left = "0vw";
            box.querySelector(".underline").style.width = "100%";
        },100)
    });
});

navBox.forEach((box)=>{
    box.addEventListener('mouseleave',()=>{
        box.querySelector("a").style.color = "#000";
        if(box===navBox[1])
        box.querySelector(".underline").style.left = "5vw";
        else if(box===navBox[2])
        box.querySelector(".underline").style.left = "3vw";
        else if(box===navBox[0])
        box.querySelector(".underline").style.left = "2vw";
        box.querySelector(".underline").style.width = "0%";
    });
});

// Underline in Page2 section element
let anchor1 = document.querySelector("#page2 #section-right a");
anchor1.addEventListener('mouseenter',()=>{
    gsap.to("#page2 #section-right .underline",{
        x: "40vw",
        duration: 1,
    });
    setTimeout(()=>{
        document.querySelector("#page2 #section-right .underline").style.backgroundColor = "#000";
    },600)
});

anchor1.addEventListener('mouseleave',()=>{
    gsap.to("#page2 #section-right .underline",{
        x: "0%",
        duration: 0.5,
    });
    setTimeout(()=>{
        document.querySelector("#page2 #section-right .underline").style.backgroundColor = "#f0f0f0";
    },600)
})

// Underline in Page5 section element
let anchor2 = document.querySelector("#p5-left a");
anchor2.addEventListener('mouseenter',()=>{
    gsap.to("#p5-left .underline",{
        x: "40vw",
        duration: 0.6,
    });
    setTimeout(()=>{
        document.querySelector("#p5-left .underline").style.backgroundColor = "#000";
    },600)
});

anchor2.addEventListener('mouseleave',()=>{
    gsap.to("#p5-left .underline",{
        x: "0%",
        duration: 0.5,
    });
    setTimeout(()=>{
        document.querySelector("#p5-left .underline").style.backgroundColor = "#f0f0f0";
    },600)
})

// Menu Button becomes a Cross and Menu opens up
let menuBtn = document.getElementById("menu-button");
menuBtn.addEventListener("click", function() {
    document.querySelector(".go3668395055").classList.toggle("crossed");

    if(document.querySelector(".go3668395055").classList.contains("crossed"))
    {
        console.log("hi");
        document.querySelector("#nav-left svg").style.color = "#fff";
        document.querySelectorAll("#nav-box a").forEach((anchor)=>{
            anchor.style.color = "#fff";
        })
        
        document.querySelectorAll(".go3668395055 .line").forEach((line)=>{
            line.style.backgroundColor = "#fff";
        })

        document.querySelector("#cart-button").style.color = "#fff";
        
        gsap.to("#more-details",{
            top: "0%",
            duration: 1,
            ease: Power4.InOut
        })
    }
    else{

        document.querySelector("#nav-left svg").style.color = "#000";
        document.querySelectorAll("#nav-box a").forEach((anchor)=>{
            anchor.style.color = "#000";
        })
        
        document.querySelectorAll(".go3668395055 .line").forEach((line)=>{
            line.style.backgroundColor = "#000";
        })

        document.querySelector("#cart-button").style.color = "#000";

        gsap.to("#more-details",{
            top: "-30%",
            duration: 1,
            ease: Power4.InOut
        })
    }
});


// Video Div Animations
let playBtn = document.querySelector("#play");
let videoContainer = document.querySelector("#video-container");
let video = document.querySelector("#video-container video");

videoContainer.addEventListener('mouseenter',()=>{
    gsap.to(playBtn,{
        opacity: 1,
        scale: 1,
    });
});

videoContainer.addEventListener('mousemove',(event)=>{
    gsap.to(playBtn,{
        x: (event.x-10),
        y: (event.y-10)
    });
});

videoContainer.addEventListener('click',()=>{
    if(video.muted==false)
    {
        video.muted = true;
        playBtn.textContent = "Play"
    }
    else
    {
        video.muted = false;
        playBtn.textContent = "Mute"
    }
});

videoContainer.addEventListener('mouseleave',()=>{
    gsap.to(playBtn,{
        opacity: 0,
        scale: 0,
    });
});

// Expandable Div in Page2
let shopDivs = document.querySelectorAll("#shop-div");

shopDivs.forEach((div) => {
    div.addEventListener('mouseenter', () => {
        div.querySelector(".expandable-part").classList.add('active');
    });

    div.addEventListener('mouseleave', () => {
        div.querySelector(".expandable-part").classList.remove('active');
    });
});

// Expandable form in Testimonials Part
let reviewBtn = document.querySelector("#send-mesg button");
let mainContainer = document.querySelector("#main");
let sendMesg = document.querySelector("#send-mesg");

reviewBtn.addEventListener('click', () => {
    document.querySelector('#testimonial-text .expandable-part').classList.add('active');
});

mainContainer.addEventListener('click', (event) => {
    let testiExpPart = document.querySelector('#testimonial-text .expandable-part');
    
    if (testiExpPart.classList.contains('active') && !sendMesg.contains(event.target)) {
        testiExpPart.classList.remove('active');
    }
});

// Convert images to links at Page3
let p3Images = document.querySelectorAll("#page3 img");
let urlArr1 = ["https://twogood.com.au/shop/change-the-course-cook-kit","https://twogood.com.au/shop/the-cookbook-duo","https://twogood.com.au/shop/two-hugs-candle","https://twogood.com.au/shop/the-good-nights-sleep-care-pack"];
for (let i = 0; i < p3Images.length; i++) 
{
    p3Images[i].addEventListener('click',()=>{
        window.location.href = urlArr1[i];
    });
    
}

// Convert images to links at expandable child in Page2
let expChildImg = document.querySelectorAll("#exp-child img");
let urlArr2 = ["https://twogood.com.au/shop/messina-x-two-good-to-miss-chocolate-brownie-bar","https://twogood.com.au/shop/the-inside-scoop-good-feels-cracker-set","https://twogood.com.au/shop/the-candle-lit-dinner-kit","https://twogood.com.au/shop/a-real-good-cuppa-t-totaler-x-two-good-native-tea","https://twogood.com.au/shop/cleanse-nourish-hand-wash","https://twogood.com.au/shop/nourish-soothe-hand-lotion"];
for (let i = 0; i < p3Images.length; i++) 
{
    expChildImg[i].addEventListener('click',()=>{
        window.location.href = urlArr2[i];
    });
    
}

// Testimonial Details Animations

let quoteAnimationImg = document.createElement('img');
let testimonialDetails = document.querySelectorAll("#testimonial-details");
let mainText = document.querySelector("#main-text");


quoteAnimationImg.src = './assets/media/quote-animation.svg';
quoteAnimationImg.alt = 'quote-animation';

let diff=0;
let currentIndex,prevIndex=1,temp=0,timesBeginExecuted=0;

// Function to add event listeners to a testimonial-details element
function addEventListenersToTestimonialDetails(det,index) {
    det.addEventListener('mouseenter', (event) => {
        det.querySelectorAll("#name h2").forEach((h2) => {
            if (!det.classList.contains('active'))
                h2.classList.add('active');
        });
    });
    det.addEventListener('mouseleave', (event) => {
        det.querySelectorAll("#name h2").forEach((h2) => {
            h2.classList.remove('active');
        });
    });
    det.addEventListener('click', (event) => {
        testimonialDetails = document.querySelectorAll("#testimonial-details");
        for(let i=0;i<testimonialDetails.length;i++)
        {
            if(testimonialDetails[i].contains(quoteAnimationImg))
            {
                prevIndex = i;
                testimonialDetails[i].removeChild(quoteAnimationImg);
                testimonialDetails[i].classList.remove('active');
            }
                testimonialDetails[i].querySelector("#round").style.backgroundColor = "#f0f0f0";
        }
        quoteAnimationImg.style.width = "0";
        det.classList.add('active');
        det.querySelector("#round").style.backgroundColor = "#000";
        det.appendChild(quoteAnimationImg);
        gsap.to(quoteAnimationImg,{
            width: "100px",
            duration: 0.3,
        });
        let detIndexFromDataAttr = Number.parseInt(det.getAttribute('data-index'));
        console.log("Index from data-index attribute",detIndexFromDataAttr);
        currentIndex = index ?? detIndexFromDataAttr;
        if(currentIndex >=11)
        {
            addTestimonialstoEnd();
        }
        if(currentIndex <= 1)
        {
            addTestimonialstoBeginning();
        }
        diff = diff + (currentIndex - prevIndex);
        if(diff>8)
        diff=2;
        if(diff<-8)
        diff=-2;
        console.log("These are currentIndex, prevIndex and diff",currentIndex,prevIndex,diff);
        gsap.to("#testimonial-details",{
            x: (diff * -15) + "vw",
            duration: 1,
            delay: 0.1,
            ease: Power3.Out
        });
        mainText.innerHTML = testiArr[currentIndex];
        gsap.from("#main-text div span",{
            duration: 0.6,
            delay: 0.2,
            y: "16vw",
            ease: Power2.InOut,
        })
        temp = currentIndex;
        currentIndex = prevIndex;
        prevIndex = temp;
    });
}

// Original event listeners setup
testimonialDetails.forEach((det, index) => {
    addEventListenersToTestimonialDetails(det,index);
});

// Function to add new testimonial-details to the end
function addTestimonialstoEnd() {
    let nameArr = ["Cartier", "Felicity T", "Barbara", "Salesforce", "Benita C", "Richard"];
    for (let i = 1; i <= 6; i++) {
        let testiDetailsDiv = document.createElement("div");
        testiDetailsDiv.id = "testimonial-details";
        testiDetailsDiv.setAttribute('data-index', i-1);
        testiDetailsDiv.innerHTML =
            `
        <div id="round"></div>
        <div id="name">
            <h2>m// 00${i}</h2>
            <h2>${nameArr[i]}.</h2>
       </div>
        `;
        document.querySelector("#testimonial-div").appendChild(testiDetailsDiv);

        // Add event listeners to the newly created element
        addEventListenersToTestimonialDetails(testiDetailsDiv);
    }
}

// Function to add new testimonial-details to the beginning
function addTestimonialstoBeginning() {

    let nameArr = ["Lukus W", "Annabel", "Barbara", "Diane M", "Holly, Purpose Conference", "Hanadi K", "WiseTech", "Australian Chamber Orchestra", "Alix G", "Amazon"];
    for (let i = 19, j = 0; i >= 14; i--) {
        let testiDetailsDiv = document.createElement("div");
        testiDetailsDiv.id = "testimonial-details";
        testiDetailsDiv.setAttribute('data-index', i-1);
        testiDetailsDiv.innerHTML =
            `
        <div id="round"></div>
        <div id="name">
            <h2>m// 00${i}</h2>
            <h2>${nameArr[j]}.</h2>
       </div>
        `;
        j++;
        let firstChild = document.querySelector("#testimonial-div").firstChild;
        document.querySelector("#testimonial-div").insertBefore(testiDetailsDiv, firstChild);

        // Add event listeners to the newly created element
        addEventListenersToTestimonialDetails(testiDetailsDiv);

    }
}


////////////////////////////////////////////////////////

// Normal Animations

// Page 1

const tl1 = gsap.timeline();

tl1.from("#nav-left",{
    y: 90,
    opacity: 0,
    stagger: 0.3,
    duration: 1,
});
tl1.from("#nav-box, nav button",{
    y: 90,
    opacity: 0,
    stagger: 0.2,
    duration: 1,
});

tl1.from("#page1 h1",{
    y: 100,
    stagger: 0.4,
    opacity: 0,
    delay: 0.2,
    duration: 1
});

gsap.from("#video-container video",{
    scale: 0,
    duration: 2,
    y: 20,
    scrollTrigger:{
        trigger: "#video-container",
        scroller: "#main",
        ///markers: true,
        start: "top 50%",
        end: "center 0%"
    }
});

// Page2

const tl2 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page2",
        scroller: "#main",
        //markers: true,
        start: "top 50%",
        end: "bottom 0%"
    }
});

tl2.from("#page2-top-container h4:nth-child(1)",{
    x: -80,
    duration: 1,
});

tl2.from("#page2-top-container h4:nth-child(2)",{
    x: 80,
    duration: 1,
});

tl2.from(".p2-box",{
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.8
});

// Page2 Text Section

const tl3 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page2 section",
        scroller: "#main",
        //markers: true,
        start: "top 50%",
        end: "bottom 0%"
    }
});

tl3.from("#section-left",{
    duration:1,
    x: -90,
    opacity: 0,
    ease: Power3.InOut,
});

tl3.from("#section-right",{
    duration:1,
    x: 90,
    opacity: 0,
    ease: Power3.InOut,
});

// Page3

gsap.from("#showcase1",{
    y: 30,
    duration: 1,
    opacity: 0,
    ease: Power3.InOut,
    stagger: 0.3,
    scrollTrigger:{
        trigger: "#showcase1",
        scroller: "#main",
        //markers: true,
        start: "top 50%",
        end: "bottom 0%"
    }
});

gsap.from("#showcase2",{
    y: 30,
    duration: 1,
    opacity: 0,
    ease: Power3.InOut,
    stagger: 0.3,
    scrollTrigger:{
        trigger: "#showcase2",
        scroller: "#main",
        //markers: true,
        start: "top 50%",
        end: "bottom 0%"
    }
});

// Page4

const tl4 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page4",
        scroller: "#main",
        //markers: true,
        start: "top 50%",
        end: "bottom 0%"
    }
});

tl4.from("#page4-top-container h4:nth-child(1)",{
    x: -250,
    duration: 1.2,
});

tl4.from("#page4-top-container h4:nth-child(2)",{
    x: 250,
    duration: 1.2,
});

tl4.from("#testimonial-details, #testimonial-text",{
    y: 50,
    opacity: 0,
    duration: 1,
    stagger: 0.1
});

// Page5

const tl5 = gsap.timeline({
    scrollTrigger:{
        trigger: "#page5",
        scroller: "#main",
        //markers: true,
        start: "top 50%",
        end: "bottom 0%"
    }
});

tl5.from("#p5-left",{
    x: -150,
    opacity: 0,
    ease: Power3.InOut,
    duration: 1,
});

tl5.from("#p5-right img",{
    opacity: 0,
    duration: 1,
    ease: Power4.InOut
});

// Footer

const svgPaths = document.querySelectorAll('#footer-middle svg path');

// Create a GSAP timeline for SVG animation
const tlSVG = gsap.timeline();

// Set initial state for SVG paths (initially invisible)
gsap.set(svgPaths, { opacity: 0, scale: 0 });

// Add animations to the SVG timeline
tlSVG.to(svgPaths, {
  opacity: 1,
  scale: 1,
  duration: 1.2,
  stagger: 0.2,
  ease: 'power2.out', // Use a smoother easing function
  onComplete: () => {
    gsap.set(svgPaths, { opacity: 1 }); // Make SVG visible after animation is complete
  },
});

// Create main timeline tl6
const tl6 = gsap.timeline({
  scrollTrigger: {
    trigger: "footer",
    scroller: "#main",
    start: "top 50%",
    end: "bottom 0%",
    //markers: true
  }
});

// Add animations to tl6
tl6.from("#email-address-div", {
  x: -150,
  opacity: 0,
  ease: 'power3.out',
  duration: 1.5,
})
  .from(".newsletter-animation", {
    height: 0,
    opacity: 0,
    ease: 'power3.out',
    duration: 1,
  })
  .from("#footer-left", {
    x: -100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  })
  .add(tlSVG, '-=0.8');

tl6.from("#footer-right", {
    x: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  });

  tl6.from("#copyright-div, #footer-para", {
    y: -30,
    opacity: 0,
    ease: 'power3.out',
    duration: 1,
  });

