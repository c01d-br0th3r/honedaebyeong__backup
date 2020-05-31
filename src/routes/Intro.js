import React, { useEffect } from "react";
import "./Intro.css";

const Intro = () => {
  function init() {
    let yOffset = 0;
    let prevScrollHeight = 0;
    let currentScene = 0;
    let enterNewScene = false;

    const sceneInfo = [
      {
        type: "sticky",
        heightNum: 4,
        scrollHeight: 0,
        objs: {
          container: document.querySelector("#scroll-section-0"),
          messageA: document.querySelector("#scroll-section-0 .main-message.a"),
          messageB: document.querySelector("#scroll-section-0 .main-message.b"),
          messageC: document.querySelector("#scroll-section-0 .main-message.c"),
          canvas: document.querySelector("#video-canvas-0"),
          context: document.querySelector("#video-canvas-0").getContext("2d"),
          videoImages: [],
        },
        values: {
          videoImageCount: 401,
          imageSequence: [0, 400],
          canvas_opacity: [1, 0, { start: 0.9, end: 1 }],
          messageA_opacity_in: [0, 1, { start: 0.1, end: 0.2 }],
          messageB_opacity_in: [0, 1, { start: 0.3, end: 0.4 }],
          messageC_opacity_in: [0, 1, { start: 0.5, end: 0.6 }],
          messageA_opacity_out: [1, 0, { start: 0.25, end: 0.3 }],
          messageB_opacity_out: [1, 0, { start: 0.45, end: 0.5 }],
          messageC_opacity_out: [1, 0, { start: 0.65, end: 0.7 }],
          messageA_translateY_in: [20, 0, { start: 0.1, end: 0.2 }],
          messageB_translateY_in: [20, 0, { start: 0.3, end: 0.4 }],
          messageC_translateY_in: [20, 0, { start: 0.5, end: 0.6 }],
          messageD_translateY_in: [20, 0, { start: 0.7, end: 0.8 }],
          messageA_translateY_out: [0, -20, { start: 0.25, end: 0.3 }],
          messageB_translateY_out: [0, -20, { start: 0.45, end: 0.5 }],
          messageC_translateY_out: [0, -20, { start: 0.65, end: 0.7 }],
        },
      },
      {
        type: "normal",
        heightNum: 4,
        scrollHeight: 0,
        objs: {
          container: document.querySelector("#scroll-section-1"),
        },
        values: {},
      },
    ];

    function setCanvasImage() {
      let imgElem;
      for (let i = 0; i < 10; i++) {
        imgElem = new Image();
        //imgElem.src = `../images/LogoImage.png`;
        imgElem.src = `/images/images_0000${i}.jpg`;
        sceneInfo[0].objs.videoImages.push(imgElem);
      }
      for (let i = 10; i < 100; i++) {
        imgElem = new Image();
        //imgElem.src = `../images/LogoImage.png`;
        imgElem.src = `/images/images_000${i}.jpg`;
        sceneInfo[0].objs.videoImages.push(imgElem);
      }
      for (let i = 100; i <= 400; i++) {
        imgElem = new Image();
        //imgElem.src = `../images/LogoImage.png`;
        imgElem.src = `/images/images_00${i}.jpg`;
        sceneInfo[0].objs.videoImages.push(imgElem);
      }
    }
    setCanvasImage();
    function calcValues(values, currentYOffset) {
      let ret;
      const scrollHeight = sceneInfo[currentScene].scrollHeight;
      const scrollRatio = currentYOffset / scrollHeight;
      if (values.length === 3) {
        const partScrollStart = scrollHeight * values[2].start;
        const partScrollEnd = scrollHeight * values[2].end;
        const partScrollHeight = partScrollEnd - partScrollStart;
        if (
          currentYOffset >= partScrollStart &&
          currentYOffset <= partScrollEnd
        ) {
          ret =
            ((currentYOffset - partScrollStart) / partScrollHeight) *
              (values[1] - values[0]) +
            values[0];
        } else if (currentYOffset < partScrollStart) {
          ret = values[0];
        } else if (currentYOffset > partScrollEnd) {
          ret = values[1];
        }
      } else {
        ret = scrollRatio * (values[1] - values[0]) + values[0];
      }
      return ret;
    }

    function playAnimation() {
      const objs = sceneInfo[currentScene].objs;
      const values = sceneInfo[currentScene].values;
      const currentYOffset = yOffset - prevScrollHeight;
      const scrollHeight = sceneInfo[currentScene].scrollHeight;
      const scrollRatio = currentYOffset / scrollHeight;
      switch (currentScene) {
        case 0:
          let sequence = Math.round(
            calcValues(values.imageSequence, currentYOffset)
          );
          console.log(objs.videoImages[sequence]);
          objs.context.drawImage(objs.videoImages[sequence], 0, 0);
          objs.canvas.style.opacity = calcValues(
            values.canvas_opacity,
            currentYOffset
          );
          let messageA_translateY_in = calcValues(
            values.messageA_translateY_in,
            currentYOffset
          );
          let messageA_translateY_out = calcValues(
            values.messageA_translateY_out,
            currentYOffset
          );
          if (scrollRatio <= 0.22) {
            objs.messageA.style.opacity = calcValues(
              values.messageA_opacity_in,
              currentYOffset
            );
            objs.messageA.style.transform = `translateY(${messageA_translateY_in}%)`;
          } else {
            objs.messageA.style.opacity = calcValues(
              values.messageA_opacity_out,
              currentYOffset
            );
            objs.messageA.style.transform = `translateY(${messageA_translateY_out}%)`;
          }
          if (scrollRatio <= 0.42) {
            // in
            objs.messageB.style.opacity = calcValues(
              values.messageB_opacity_in,
              currentYOffset
            );
            objs.messageB.style.transform = `translate3d(0, ${calcValues(
              values.messageB_translateY_in,
              currentYOffset
            )}%, 0)`;
          } else {
            // out
            objs.messageB.style.opacity = calcValues(
              values.messageB_opacity_out,
              currentYOffset
            );
            objs.messageB.style.transform = `translate3d(0, ${calcValues(
              values.messageB_translateY_out,
              currentYOffset
            )}%, 0)`;
          }

          if (scrollRatio <= 0.62) {
            // in
            objs.messageC.style.opacity = calcValues(
              values.messageC_opacity_in,
              currentYOffset
            );
            objs.messageC.style.transform = `translate3d(0, ${calcValues(
              values.messageC_translateY_in,
              currentYOffset
            )}%, 0)`;
          } else {
            // out
            objs.messageC.style.opacity = calcValues(
              values.messageC_opacity_out,
              currentYOffset
            );
            objs.messageC.style.transform = `translate3d(0, ${calcValues(
              values.messageC_translateY_out,
              currentYOffset
            )}%, 0)`;
          }
          break;
        case 1:
          break;
      }
    }

    function scrollLoop() {
      enterNewScene = false;
      prevScrollHeight = 0;
      for (let i = 0; i < currentScene; i++) {
        prevScrollHeight += sceneInfo[i].scrollHeight;
      }
      if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
        currentScene++;
        enterNewScene = true;
        document.body.setAttribute("id", `show-scene-${currentScene}`);
      }

      if (yOffset < prevScrollHeight) {
        if (currentScene === 0) return;
        currentScene--;
        enterNewScene = true;
        document.body.setAttribute("id", `show-scene-${currentScene}`);
      }

      if (enterNewScene) return;

      playAnimation();
    }

    function setLayout() {
      for (let i = 0; i < sceneInfo.length; i++) {
        /*if (sceneInfo[i].type === "sticky") {
          sceneInfo[i].scrollHeight =
            window.innerHeight * sceneInfo[i].heightNum;
        } else if (sceneInfo[i].type === "normal") {
          sceneInfo[i].scrollHeight = sceneInfo[i].objs.container.offsetHeight;
        }*/
        sceneInfo[i].scrollHeight = window.innerHeight * sceneInfo[i].heightNum;
        sceneInfo[
          i
        ].objs.container.style.height = `${sceneInfo[i].scrollHeight}px`;
      }
      yOffset = window.pageYOffset;
      let totalScrollHeight = 0;
      for (let i = 0; i < sceneInfo.length; i++) {
        totalScrollHeight += sceneInfo[i].scrollHeight;
        if (yOffset > totalScrollHeight) {
          currentScene = i;
          break;
        }
      }
      document.body.setAttribute("id", `show-scene-${currentScene}`);
      const heightRatio = window.innerHeight / 720;
      sceneInfo[0].objs.canvas.style.transform = `translate3d(-50%, -50%, 0) scale(${heightRatio})`;
    }
    setLayout();
    window.addEventListener("resize", setLayout);
    window.addEventListener("scroll", () => {
      yOffset = window.pageYOffset;
      scrollLoop();
    });
  }
  useEffect(() => {
    init();
  }, []);
  return (
    <div id="wrapper">
      <section className="scroll-section" id="scroll-section-0">
        <h1>홍대병</h1>
        <div className="sticky-elem sticky-elem-canvas">
          <canvas id="video-canvas-0" width="1280" height="720"></canvas>
        </div>
        <div className="sticky-elem main-message a">
          <p>
            개성[個性]:
            <br />
            다른 사람이나 개체와 구별되는 고유의 특성
          </p>
        </div>
        <div className="sticky-elem main-message b">
          <p>
            자신을 표현할 수 있는
            <br />
            가장 확실한 방법, 패션
          </p>
        </div>
        <div className="sticky-elem main-message c">
          <p>
            전 세계의 옷을
            <br />
            홍대병에서 만나보세요.
          </p>
        </div>
      </section>
      <section className="scroll-section" id="scroll-section-1">
        <p className="description">
          <strong>보통 스크롤 영역</strong> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Nostrum, obcaecati ab natus iure
          voluptas mollitia, ex dolorem, delectus doloribus ratione illum quae
          officia dolore laborum voluptate. Quis accusantium ratione quisquam
          voluptatem sunt veniam quibusdam, vel nihil facilis distinctio vitae
          quos voluptas aliquid eveniet modi tenetur rerum voluptate sint
        </p>
      </section>
    </div>
  );
};

export default Intro;
