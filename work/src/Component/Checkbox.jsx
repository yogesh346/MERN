import { Fragment } from "react";
import { Checkbox } from "semantic-ui-react";

function CustomCheckbox({ errors, name, trigger, setValue }) {
  // props destructur kr ra hai main  hook bali file se liya hai
  const handleChange = (event, { value }) => {
    //value change krne k liye function bnaya hai
    setValue(name, value); //setvalue hook bali file se aa ra hai or yha set kr rha hai
    trigger(name); // check hone lgta hai dubara agr koi field khali ha to usko bhro
  };
  return (
    <Fragment>
      <Checkbox
        name={name}
        value="Agree"
        onChange={handleChange}
        label="Please check and confirm your details before registration."
      />
      {errors.Terms && <p>Accept all Terms</p>}
    </Fragment>
  );
}
export default CustomCheckbox;
