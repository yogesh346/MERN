import { Fragment } from "react";
import { Form } from "semantic-ui-react";

function Notes({ register, errors }) {
  return (
    <Fragment>
      <Form.Field>
        <label>Notes:</label>
        <textarea {...register("Notes", { maxLength: 250 })} />
      </Form.Field>
      {errors.Notes?.type === "maxLength" && (
        <p>Please enter notes less than 250 characters!</p>
      )}
    </Fragment>
  );
}

export default Notes;

//<input type="text">	Displays a single-line text input field
//<input type="radio">	Displays a radio button (for selecting one of many choices)
//<input type="checkbox">	Displays a checkbox (for selecting zero or more of many choices)
//<input type="submit">	Displays a submit button (for submitting the form)
//<input type="button">	Displays a clickable button
