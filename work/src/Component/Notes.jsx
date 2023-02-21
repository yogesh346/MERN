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
