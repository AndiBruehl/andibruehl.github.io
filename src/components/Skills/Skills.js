import React from "react";
import classes from "./Skills.module.css";
import PageHeader from "../PageHeader/PageHeader";
import codeThinking from "../../assets/codeThinking.svg";
import SkillList from "./SkillList";
import { skillData } from "./skillsData";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Skills = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="hidden"
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className={classes.Skills}
      id="skills"
    >
      <PageHeader title={"Meine Skills"} />

      <motion.div
        variants={textVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 0.3, ease: "easeInOut" }}
        className={classes.Paragraphs}
      >
        Ich liebe lebenslanges Lernen und genieße es, kontinuierlich neue Dinge
        zu entdecken!
        <br />
        <br />
        Im Laufe der Zeit habe ich mit verschiedenen Programmiersprachen,
        Toolkits, Frameworks und Bibliotheken gearbeitet, und einige davon
        beherrsche ich besser als andere.
        <br />
        <br />
        Dabei bin ich offen neue Techniken und Skills zu lernen!
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.8, delay: 1, ease: "easeInOut" }}
        className={classes.Container}
      >
        <img src={codeThinking} alt="CodeThinking" />
        <br />
        {skillData.map((skillGroup, index) => (
          <div className={classes.List} key={index}>
            <SkillList title={skillGroup.title} skills={skillGroup.skills} />
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
