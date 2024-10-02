import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function EducationP() {
  const { content, control, contentFake } = useContext(ResumeContext);

  const contentUse = control ? contentFake : content;


  const title = contentUse.education && contentUse.education.length > 0 ? (
    <h3>
      <strong>Education</strong>
    </h3>
  ) : (
    ""
  );

  return (
    <div className={classes.professionalResume}>
      {title}
      {contentUse?.education?.map((item, idx) => (
        <div key={idx}>
          <p>
            <strong>{item.institution}</strong> {item.city}
          </p>
          <p>
            {item.major} {item.gradYear}
          </p>
          {item.additional && (
            <ul>
              <li>{item.additional}</li>
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

export default EducationP;
