import { Dropdown } from "semantic-ui-react"; //dropdown import krwaya hai semantic ui ka
import "semantic-ui-css/semantic.min.css";
const countryOptions = [
  { key: "a", value: "Physics", text: "Physics" }, //yha pe mene values de di jo jo mene data dikhana hai dropdown m
  { key: "b", value: "Chemistry", text: "Chemistry" },
  { key: "c", value: "Mathematics", text: "Mathematics" },
  { key: "d", value: "Computer", text: "Computer" },
  { key: "e", value: "Hindi", text: "Hindi" },
  { key: "f", value: "Zoology", text: "Zoology" },
  { key: "g", value: "Botany", text: "Botany" },
  { key: "h", value: "Geography", text: "Geography" },
];
const CustomDropdown = ({ placeholder, name, errors, setValue }) => {
  //destructor kr rha hai receive kr re hai hook bali file se
  const Change = (e, { name, value }) => {
    //change handle kr rha hai jaise 10 likha toh  manually change ho ra  hai 10
    setValue(name, value); //input ki value change krne k liye
  };
  return (
    <>
      <label>Department</label>
      <Dropdown
        name={name}
        fluid
        selection
        options={countryOptions}
        placeholder={placeholder}
        onChange={Change}
      />
      {errors[name]?.type === "required" && <p>Please select a {name}</p>}{" "}
    </>
  );
};
export default CustomDropdown;
