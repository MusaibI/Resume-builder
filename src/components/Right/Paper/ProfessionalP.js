import React, { useContext } from "react";
import classes from "./Template.module.css";
import { ResumeContext } from "../../../contexts/ResumeContext";

function ProfessionalP() {
  const { content, control, contentFake } = useContext(ResumeContext);

  // If the "control" is TRUE - use "Fake State" to show the example on the page
  const contentUse = control ? contentFake : content;

  // If there is no data, the Title of the section will not be displayed
  const title =
    contentUse.professional && contentUse.professional.length > 0 ? (
      <h3>
        <strong>Professional Experience</strong>
      </h3>
    ) : (
      ""
    );

  return (
    <div className={classes.professionalResume}>
      {title}
      {contentUse?.professional?.map((item, idx) => (
        <div key={idx}>
          <p>
            <strong>{item.company}</strong> {item.location}
          </p>
          <p>
            {item.position} | {item.start} - {item.end}
          </p>
          <ul>
            {/* Iterate over each description item and display it as a list */}
            {item.description && item.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default ProfessionalP;
