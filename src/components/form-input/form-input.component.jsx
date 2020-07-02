import React from "react";

import { Group, FormInputBox, Label } from "./form-input.styles";

const FormInput = ({ handelChange, label, ...otherProps }) => {
  console.log("QWERTY", otherProps);
  return (
    <Group>
      <FormInputBox onChange={handelChange} {...otherProps}></FormInputBox>
      <Label>{label}</Label>
    </Group>
  );
};

export default FormInput;
