import logo from "./logo.svg";
import * as styles from "./App.css.ts";
import { Carousel } from "antd";
import "./App.css";
import spiritedaway from "./assets/spiritedaway/spiritedaway.mp4";
import harrypotter from "./assets/harrypotter/harrypotter.mp4";
import marnie from "./assets/marnie/marnie.mp4";
import frozen from "./assets/frozen/frozen.mp4";
import spiritedaway0 from "./assets/spiritedaway/0.jpeg";
import spiritedaway1 from "./assets/spiritedaway/1.jpeg";
import spiritedaway2 from "./assets/spiritedaway/2.jpeg";

function App() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

  return (
    <div className={styles.app}>
      <h1>StyleScape: Stylized and Depth-Consistent 3D Scene Generation</h1>
      <h2>CS 231n Project Page</h2>
      <div className={styles.nameContainer}>
        <div className={styles.nameDiv}>
          <h3>Emily Zhang</h3>
          <code>emily49@stanford.edu</code>
        </div>
        <div className={styles.nameDiv}>
          <h3>Chetan Nair</h3>
          <code>cnair@stanford.edu</code>
        </div>
      </div>
      <div>
        <h2>Abstract</h2>
        <div className={styles.abstract}>
          In this paper, we propose a method for 3D-scene generation to create diverse, visually
          appealing, and infinite walkthroughs of specific films. Our approach builds on the
          SceneScape pipeline and leverages Dreambooth to train Stable Diffusion models for
          few-shot, scene-driven generation of novel views with consistent characters, settings, and
          styles. We also utilize ControlNet to effectively condition these models for inpainting
          tasks, thereby ensuring both structurally and contextually coherent generated scenes. We
          conducted experiments on four stylistically distinct films, and our method outperforms the
          baseline on both quantitative aesthetic metrics and qualitative human evaluations, based
          on content and style resemblance with the target film.
        </div>
      </div>
      <Carousel className={styles.carousel} afterChange={onChange}>
        <div className={styles.contentStyle}>
          <h2>
            Train from <span className={styles.italic}>Spirited Away</span>
          </h2>
          <div className={styles.carouselContentFlex}>
            <div>
              <h3>Dreambooth images:</h3>
              {/* <Image src={spiritedaway0} width="30%" /> */}
              Training prompt: <span className={styles.italic}>A photo of sks spiritedaway</span>
            </div>
            <div>
              <video src={spiritedaway} width="90%" controls="controls" autoplay="true" />
            </div>
          </div>
        </div>
        <div className={styles.contentStyle}>
          <h2>
            The Great Hall from{" "}
            <span className={styles.italic}>Harry Potter and the Sorcerer's Stone</span>
          </h2>
          <div className={styles.carouselContentFlex}>
            <div>
              <h3>Dreambooth images:</h3>
            </div>
            <div>
              <video src={harrypotter} width="90%" controls="controls" autoplay="true" />
            </div>
          </div>
        </div>
        <div className={styles.contentStyle}>
          <h2>
            Anna's room from <span className={styles.italic}>When Marnie Was There</span>
          </h2>
          <div className={styles.carouselContentFlex}>
            <div>Dreambooth images:</div>
            <div>
              <video src={marnie} width="90%" controls="controls" autoplay="true" />
            </div>
          </div>
        </div>
        <div className={styles.contentStyle}>
          <h2>
            Arendelle Castle from <span className={styles.italic}>Frozen</span>
          </h2>
          <div className={styles.carouselContentFlex}>
            <div>Dreambooth images:</div>
            <div>
              <video src={frozen} width="90%" controls="controls" autoplay="true" />
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default App;
