import React, { useEffect, useState } from "react";

import styles from "./Editor.module.css";
import ControlInput from "../ControlInput/ControlInput";
import { X } from "react-feather";

function Editor(props) {
  const sections = props.sections;
  const information = props.information;

  const [activeSectionKey, setActiveSectionKey] = useState(
    Object.keys(sections)[0]
  );
  const [activeInformation, setactiveInformation] = useState(
    information[sections[Object.keys(sections)[0]]]
  );
  const [activeDetailIndex, setActiveDetailIndex] = useState(0);

  const [sectionTitle, setsectionTitle] = useState(
    sections[Object.keys(sections)[0]]
  );
  const [values, setValues] = useState({
    name: activeInformation?.detail?.name || "",
    title: activeInformation?.detail?.title || "",
    linkedin: activeInformation?.detail?.linkedin || "",
    github: activeInformation?.detail?.github || "",
    phone: activeInformation?.detail?.phone || "",
    email: activeInformation?.detail?.email || "",
  });

  const handlePointUpdate = (value, index) => {
    const tempValues = { ...value };
    if (!Array.isArray(tempValues.points)) tempValues.points = [];
    tempValues.points[index] = value;
    setValues(tempValues);
  };

  // Work Exp

  const workExpBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <ControlInput
          label="Title"
          placeholder="Enter title eg. Software Developer"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <ControlInput
          label="Company Name"
          placeholder="Enter company name eg. Meta"
          value={values.comapnyName}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, comapnyName: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <ControlInput
          label="Certificate Link"
          placeholder="Enter certificate link"
          value={values.certificateLink}
          onChange={(event) =>
            setValues((prev) => ({
              ...prev,
              certificateLink: event.target.value,
            }))
          }
        />
        <ControlInput
          label="Location"
          placeholder="Enter the location eg. Remote"
          value={values.location}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, location: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <ControlInput
          label="Start Date"
          placeholder="Enter the start date"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />

        <ControlInput
          label="End Date"
          placeholder="Enter the end date"
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>

      <div className={styles.column}>
        <label>Enter work description</label>
        <ControlInput
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <ControlInput
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <ControlInput
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
      </div>
    </div>
  );

  const projectsBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <ControlInput
          label="Title"
          placeholder="Enter title eg. Chat app"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <ControlInput
          label="Overview"
          placeholder="Enter the overview of the project"
          value={values.overview}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, overview: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <ControlInput
          label="Deployed Link"
          placeholder="Enter deployed link"
          value={values.link}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, link: event.target.value }))
          }
        />
        <ControlInput
          label="Github Link"
          placeholder="Enter github link"
          value={values.github}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>
      <div className={styles.column}>
        <label>Enter work description</label>
        <ControlInput
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <ControlInput
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <ControlInput
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <ControlInput
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );

  // Education

  const educationBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <ControlInput
          label="Title"
          placeholder="Enter title eg. B.Tech"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
        <ControlInput
          label="University/College Name"
          placeholder="Enter your university or college name"
          value={values.college}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, college: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <ControlInput
          label="Start Date"
          placeholder="Enter start date of your education"
          value={values.startDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, startDate: event.target.value }))
          }
        />
        <ControlInput
          label="End Date"
          placeholder="Enter end date of your education"
          value={values.endDate}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, endDate: event.target.value }))
          }
        />
      </div>
    </div>
  );

  // BasicInfo

  const basicInfoBody = (
    <div className={styles.detail}>
      <div className={styles.row}>
        <ControlInput
          label="Name"
          placeholder="Enter name eg. Sam"
          value={values.name}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <ControlInput
          label="Title"
          placeholder="Enter your title eg. Full Stact Developer"
          value={values.title}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, title: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <ControlInput
          label="Linkedin Link"
          placeholder="Enter your linkedin profile link"
          value={values.linkedin}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, linkedin: event.target.value }))
          }
        />
        <ControlInput
          label="Github Link"
          placeholder="Enter enter your github profile link"
          value={values.github}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, github: event.target.value }))
          }
        />
      </div>
      <div className={styles.row}>
        <ControlInput
          label="Email"
          placeholder="Enter your email"
          value={values.email}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <ControlInput
          label="Contact number"
          placeholder="Enter enter your contact number"
          value={values.phone}
          onChange={(event) =>
            setValues((prev) => ({ ...prev, phone: event.target.value }))
          }
        />
      </div>
    </div>
  );

  // Achievement

  const achievementBody = (
    <div className={styles.detail}>
      <div className={styles.column}>
        <label>Enter work description</label>
        <ControlInput
          placeholder="Line 1"
          value={values.points ? values.points[0] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 0)}
        />
        <ControlInput
          placeholder="Line 2"
          value={values.points ? values.points[1] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 1)}
        />
        <ControlInput
          placeholder="Line 3"
          value={values.points ? values.points[2] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 2)}
        />
        <ControlInput
          placeholder="Line 4"
          value={values.points ? values.points[3] : ""}
          onChange={(event) => handlePointUpdate(event.target.value, 3)}
        />
      </div>
    </div>
  );

  //Summary

  const summaryBody = (
    <div className={styles.detail}>
      <ControlInput
        label="Summary"
        placeholder="Enter your objective"
        value={values.summary}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, summary: event.target.value }))
        }
      />
    </div>
  );

  //Other

  const otherBody = (
    <div className={styles.detail}>
      <ControlInput
        label="Other"
        placeholder="Enter more"
        value={values.other}
        onChange={(event) =>
          setValues((prev) => ({ ...prev, other: event.target.value }))
        }
      />
    </div>
  );

  const generateBody = () => {
    switch (sections[activeSectionKey]) {
      case sections.workExp:
        return workExpBody;
      case sections.projects:
        return projectsBody;
      case sections.education:
        return educationBody;
      case sections.basicInfo:
        return basicInfoBody;
      case sections.achievement:
        return achievementBody;
      case sections.summary:
        return summaryBody;
      case sections.other:
        return otherBody;
      default:
        return null;
    }
  };

  const handleSubmission = () => {
    switch (sections[activeSectionKey]) {
      case sections.basicInfo: {
        const tempDetail = {
          name: values.name,
          title: values.title,
          linkedin: values.linkedin,
          github: values.github,
          email: values.email,
          phone: values.phone,
        };

        props.setInformation((prev) => ({
          ...prev,
          [sections.basicInfo]: {
            ...prev[sections.basicInfo],
            detail: tempDetail,
            sectionTitle,
          },
        }));

        break;
      }
      case sections.workExp: {
        const tempDetail = {
          certificateLink: values.certificateLink,
          title: values.title,
          startDate: values.startDate,
          endDate: values.endDate,
          comapnyName: values.comapnyName,
          location: values.location,
          points: values.points,
        };
        const tempDetails = [...information[sections.workExp]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.workExp]: {
            ...prev[sections.workExp],
            details: tempDetail,
            sectionTitle,
          },
        }));

        break;
      }
      case sections.projects: {
        const tempDetail = {
          link: values.link,
          title: values.title,
          overview: values.overview,
          github: values.github,
          points: values.points,
        };
        const tempDetails = [...information[sections.projects]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.projects]: {
            ...prev[sections.projects],
            details: tempDetail,
            sectionTitle,
          },
        }));

        break;
      }
      case sections.education: {
        const tempDetail = {
          title: values.title,
          college: values.college,
          startDate: values.startDate,
          endDate: values.endDate,
        };
        const tempDetails = [...information[sections.education]?.details];
        tempDetails[activeDetailIndex] = tempDetail;

        props.setInformation((prev) => ({
          ...prev,
          [sections.education]: {
            ...prev[sections.education],
            details: tempDetail,
            sectionTitle,
          },
        }));

        break;
      }
      case sections.achievement: {
        const tempPoints = values.points;

        props.setInformation((prev) => ({
          ...prev,
          [sections.achievement]: {
            ...prev[sections.achievement],
            points: tempPoints,
            sectionTitle,
          },
        }));

        break;
      }
      case sections.summary: {
        const tempDetail = values.summary;

        props.setInformation((prev) => ({
          ...prev,
          [sections.summary]: {
            ...prev[sections.summary],
            detail: tempDetail,
            sectionTitle,
          },
        }));

        break;
      }
      case sections.other: {
        const tempDetail = values.other;

        props.setInformationother((prev) => ({
          ...prev,
          [sections.other]: {
            ...prev[sections.other],
            detail: tempDetail,
            sectionTitle,
          },
        }));

        break;
      }
      default:
        break;
    }
  };

  useEffect(() => {
    const activeInfo = information[sections[activeSectionKey]];
    setactiveInformation(activeInfo);
    setsectionTitle(sections[activeSectionKey]);
    setActiveDetailIndex(0);
    setValues({
      name: activeInfo?.detail?.name || "",

      overview: activeInfo?.details
        ? activeInfo.details[0]?.overview || ""
        : "",
      link: activeInfo?.details ? activeInfo.details[0]?.link || "" : "",
      certificateLink: activeInfo?.details
        ? activeInfo.details[0]?.certificateLink || ""
        : "",
      comapnyName: activeInfo?.details
        ? activeInfo.details[0]?.comapnyName || ""
        : "",
      location: activeInfo?.details
        ? activeInfo.details[0]?.location || ""
        : "",
      startDate: activeInfo?.details
        ? activeInfo.details[0]?.startDate || ""
        : "",
      endDate: activeInfo?.details ? activeInfo.details[0]?.endDate || "" : "",
      points: activeInfo?.details
        ? activeInfo.details[0]?.points
          ? [activeInfo.details[0]?.points]
          : ""
        : activeInfo?.points
        ? [...activeInfo.points]
        : "",

      title: activeInfo?.details
        ? activeInfo.details[0]?.title || ""
        : activeInfo.detail?.title || "",

      linkedin: activeInfo?.detail?.linkedin || "",

      github: activeInfo?.details
        ? activeInfo.details[0]?.github || ""
        : activeInfo.detail?.github || "",

      phone: activeInfo?.detail?.phone || "",
      email: activeInfo?.detail?.email || "",

      summary: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
      other: typeof activeInfo?.detail !== "object" ? activeInfo.detail : "",
    });
  }, [activeSectionKey, information, sections]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        {Object.keys(sections)?.map((key) => (
          <div
            className={`${styles.section} ${
              activeSectionKey === key ? styles.active : ""
            }`}
            key={key}
            onClick={() => setActiveSectionKey(key)}
          >
            {sections[key]}
          </div>
        ))}
      </div>

      <div className={styles.body}>
        <ControlInput
          label="Title:"
          placeholder="Enter section here"
          value={sectionTitle}
          onChange={(event) => setsectionTitle(event.target.value)}
        />

        <div className={styles.chips}>
          {activeInformation?.details
            ? activeInformation?.details?.map((item, index) => (
                <div
                  className={`${styles.chip} ${
                    activeDetailIndex === index ? styles.active : ""
                  }`}
                  key={item.title + index}
                  onClick={() => setActiveDetailIndex(index)}
                >
                  <p>
                    {sections[activeSectionKey]} {index + 1}
                  </p>
                  <X />
                </div>
              ))
            : ""}
        </div>

        {generateBody()}
        <button onClick={handleSubmission}>Save</button>
      </div>
    </div>
  );
}

export default Editor;
