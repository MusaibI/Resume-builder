import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import { useForm, useFieldArray } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";
import classes from "./Left.module.css";
import DescriptionFields from "./DescirptionFields";

function Professional() {
  const { content, 
    updateProfessionalData,
    removeFakeData,
    control: theControl,
    contentFake } = useContext(ResumeContext);
  const [btnText, setBtnText] = useState("Add");

  let contentUse = theControl ? contentFake : content;

  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      professionalExperience: contentUse.professional || [], // default value
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "professionalExperience",
  });

  const onSubmit = (data) => {
    console.log("Submitted data", data.professionalExperience);
    removeFakeData();
    updateProfessionalData(data.professionalExperience);
    setBtnText("Update");
  };

  return (
    <div className="professional-form">
      <h2>Professional Experience</h2>
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        {fields.map((item, index) => (
          <div key={item.id}>
            <h4>Company {index + 1}</h4>
            <TextField
              label="Company"
              name={`professionalExperience[${index}].company`}
              defaultValue={item.company}
              variant="outlined"
              inputRef={register()}
              style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            />

            <TextField
              label="City, State, Country"
              name={`professionalExperience[${index}].location`}
              defaultValue={item.location}
              variant="outlined"
              inputRef={register()}
              style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            />

            <TextField
              label="Position"
              name={`professionalExperience[${index}].position`}
              defaultValue={item.position}
              variant="outlined"
              inputRef={register()}
              style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            />

            <TextField
              label="Start MM/YYYY"
              name={`professionalExperience[${index}].start`}
              defaultValue={item.start}
              variant="outlined"
              inputRef={register()}
              style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            />

            <TextField
              label="End MM/YYYY"
              name={`professionalExperience[${index}].end`}
              defaultValue={item.end}
              variant="outlined"
              inputRef={register()}
              style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            />

            {/* Description Field Array for each Experience */}
            <DescriptionFields
              control={control}
              register={register}
              experienceIndex={index}
            />

            <Button
              variant="contained"
              color="secondary"
              type="button"
              onClick={() => remove(index)} // Remove entire experience
              style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            >
              Remove Experience
            </Button>

            <hr />
          </div>
        ))}

        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={() => append()} // Add a new experience
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        >
          Add New Experience
        </Button>

        <Button
          variant="contained"
          color="secondary"
          type="submit"
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        >
          {btnText}
        </Button>
      </form>
    </div>
  );
}
export default Professional;
