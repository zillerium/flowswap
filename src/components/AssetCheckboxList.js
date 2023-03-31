import React from "react";
import { Form } from "react-bootstrap";

const AssetCheckboxList = ({ checkboxes }) => {
  return (
    <div>
      {checkboxes.map((checkbox, index) => (
        <Form.Check
	      reverse
          key={index}
          type="checkbox"
          label={checkbox.label}
          checked={checkbox.checked}
          readOnly
        />
      ))}
    </div>
  );
};

export default AssetCheckboxList;
