import { TextField, Button, IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useFieldArray } from "react-hook-form";
import React from "react";

function DescriptionFields({ control, register, experienceIndex }) {
    const { fields: descriptionFields, append: appendDescription, remove: removeDescription } = useFieldArray({
      control,
      name: `professionalExperience[${experienceIndex}].description`,
    });
  
    return (
      <div>
        {descriptionFields.map((field, idx) => (
          <div key={field.id} style={{ display: "flex", alignItems: "center" }}>
            <TextField
              label={`Description ${idx + 1}`}
              name={`professionalExperience[${experienceIndex}].description[${idx}]`}
              defaultValue={field.value}
              variant="outlined"
              inputRef={register()}
              multiline
              style={{ marginTop: 12, marginLeft: 8, marginRight: 8, flex: 1 }}
            />
            <IconButton
              aria-label="delete"
              onClick={() => removeDescription(idx)} // Remove specific description
              style={{ marginTop: 12 }}
            >
              <DeleteIcon />
            </IconButton>
          </div>
        ))}
        <Button
          variant="contained"
          color="primary"
          type="button"
          onClick={() => appendDescription("")} // Add a new description
          style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
        >
          Add Description
        </Button>
      </div>
    );
  }  

export default DescriptionFields;