import React, { useState, useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import classes from "./Left.module.css";
import { useFieldArray, useForm } from "react-hook-form";
import { ResumeContext } from "../../contexts/ResumeContext";

function Education() {
  const { content, updateEducationData, removeFakeData } = useContext(
    ResumeContext
  );
  const [btnText, setBtnText] = useState("Add");

  const { register,control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    removeFakeData();
    updateEducationData(data);
    setBtnText("Update");
  };

  const { fields, append, remove } = useFieldArray({
    control,
    name: "education",
  });


  return (
    <div className="">
      <h2>Education</h2>
      <form
        className={classes.formStyle}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        {fields.map((item, index) => (
          <div key={index}>
            <h4>Education {index + 1}</h4>

            <TextField
              id="outlined-basic"
              label="Institution"
              name={`education[${index}].institution`}
              variant="outlined"
              defaultValue={content.education.institution}
              inputRef={register}
              // onChange={handleSubmit(onSubmit)}
              style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            />

            <TextField
              id="outlined-basic"
              label="City, State, Country"
              name={`education[${index}].city`}
              variant="outlined"
              defaultValue={content.education.city}
              inputRef={register}
              // onChange={handleSubmit(onSubmit)}
              style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            />

            <TextField
              id="outlined-basic"
              label="Major"
              name={`education[${index}].major`}
              variant="outlined"
              defaultValue={content.education.major}
              inputRef={register}
              // onChange={handleSubmit(onSubmit)}
              style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            />

            <TextField
              id="outlined-basic"
              label="Graduation Year"
              name={`education[${index}].gradYear`}
              variant="outlined"
              defaultValue={content.education.gradYear}
              inputRef={register}
              // onChange={handleSubmit(onSubmit)}
              style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            />

            <TextField
              id="outlined-basic"
              label="Additional Info"
              name={`education[${index}].additional`}
              variant="outlined"
              defaultValue={content.education.additional}
              inputRef={register}
              // onChange={handleSubmit(onSubmit)}
              style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            />

            <Button
              variant="contained"
              color="secondary"
              type="button"
              onClick={() => remove(index)} // Remove entire experience
              style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
            >
              Remove Education
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
          Add New Education
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

export default Education;
