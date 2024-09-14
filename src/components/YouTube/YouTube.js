import PageHeader from "../PageHeader/PageHeader";
import classes from "./YouTube.module.css";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { youtubeData } from "./YouTubeData";

const containerStyles = {
  backgroundColor: "rgba(135, 206, 235, 0.5)",
  borderRadius: "20px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
  display: "flex",
  zIndex: 2,
};

const playBtnSvg = (url) => {
  return (
    <div
      className={classes.PlayButton}
      onClick={(e) => window.open(url, "_blank").focus()}
    >
      <motion.svg
        whileHover={{ scale: 1.3 }}
        height="50px"
        width="50px"
        version="1.1"
        id="Capa_1"
        viewBox="0 0 58.752 58.752"
        xmlSpace="preserve"
      >
        <g>
          <path
            d="M52.524,23.925L12.507,0.824c-1.907-1.1-4.376-1.097-6.276,0C4.293,1.94,3.088,4.025,3.088,6.264v46.205
                      c0,2.24,1.204,4.325,3.131,5.435c0.953,0.555,2.042,0.848,3.149,0.848c1.104,0,2.192-0.292,3.141-0.843l40.017-23.103
                      c1.936-1.119,3.138-3.203,3.138-5.439C55.663,27.134,54.462,25.05,52.524,23.925z M49.524,29.612L9.504,52.716
                      c-0.082,0.047-0.18,0.052-0.279-0.005c-0.084-0.049-0.137-0.142-0.137-0.242V6.263c0-0.1,0.052-0.192,0.14-0.243
                      c0.042-0.025,0.09-0.038,0.139-0.038c0.051,0,0.099,0.013,0.142,0.038l40.01,23.098c0.089,0.052,0.145,0.147,0.145,0.249
                      C49.663,29.47,49.611,29.561,49.524,29.612z"
            fill="#0027b2"
          />
        </g>
      </motion.svg>
    </div>
  );
};

const youtubeVideo = (url, thumbnail, description) => {
  return (
    <div
      className={classes.VideoContainer}
      style={{ ...containerStyles, marginBottom: "1%" }} // Reduced margin-bottom to 1%
    >
      <div className={classes.Thumbnail}>
        {playBtnSvg(url)}
        <img src={thumbnail} alt="thumbnail" />
      </div>
      <div className={classes.Text}>
        <p>{description}</p>
      </div>
    </div>
  );
};

const YouTube = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = useAnimation();
  const textAnimation = useAnimation();
  const videoAnimation = useAnimation();

  useEffect(() => {
    const animateInView = async () => {
      if (inView) {
        await animation.start({
          opacity: 1,
          transition: { duration: 0.5 },
        });
        await textAnimation.start({
          opacity: 1,
          transition: { delay: 0.3, duration: 0.5 },
        });
        await videoAnimation.start((i) => ({
          opacity: 1,
          transition: { delay: i * 0.3, duration: 0.5 },
        }));
      } else {
        animation.start({ opacity: 0 });
        textAnimation.start({ opacity: 0 });
        videoAnimation.start({ opacity: 0 });
      }
    };

    animateInView();
  }, [inView, animation, textAnimation, videoAnimation]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={classes.YouTube}
      id="youtube"
    >
      {/* Animate the PageHeader */}
      <motion.div initial={{ opacity: 0 }} animate={animation}>
        <PageHeader title={"YouTube"} />
      </motion.div>

      <div ref={ref} className={classes.YouTubeContent}>
        {/* Animate the paragraph text */}
        <motion.div
          className={classes.Paragraph}
          initial={{ opacity: 0 }}
          animate={textAnimation}
        >
          <p>
            Ich bin nun auch auf YouTube zu finden. Hier eine kleine Auswahl
            meiner bisherigen Videos.
          </p>
        </motion.div>

        {/* Animate the videos */}
        <motion.div
          className={classes.Videos}
          initial={{ opacity: 0 }}
          animate={videoAnimation}
        >
          {youtubeData.map((video, index) => (
            <motion.div
              custom={index}
              key={index}
              initial={{ opacity: 0 }}
              animate={videoAnimation}
            >
              {youtubeVideo(video.url, video.thumbnail, video.description)}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default YouTube;
