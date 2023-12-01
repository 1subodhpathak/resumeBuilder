import React, { useEffect, useState } from "react";
import { ArrowDown } from "react-feather";

import styles from "./Body.module.css";
import Editor from "../Editio/Editor";

function Body() {
  const colors = ["239ce2", "#48bb78", "#0000ff", "#a0aec0", "#ed8936"];

  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    projects: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };

  const [resumeInformation, setresumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.projects]: {
      id: sections.projects,
      sectionTitle: sections.projects,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  useEffect(() => {
    console.log(resumeInformation);
  }, [resumeInformation]);

  return (
    <div className={styles.container}>
      <p className={styles.heading}>Resume Builder</p>
      <div className={styles.toolbar}>
        <div className={styles.colors}>
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={styles.color}
            />
          ))}
        </div>
        <button>
          Download <ArrowDown />
        </button>
      </div>
      <div className={styles.main}>
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setresumeInformation}
        />
      </div>
    </div>
  );
}

export default Body;
