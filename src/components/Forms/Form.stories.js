import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Form";
import Select from "./Select";
import Counter from "./Counter";

storiesOf("Form", module)
  .add("Small Email", () => <Input label="Email" size="small" />)
  .add("Medium Email", () => <Input label="Email" size="medium" />)
  .add("Large Email", () => <Input label="Email" size="large" />)
  .add("Small Select", () => <Select label="Select" size="small" />)
  .add("Medium Select", () => <Select label="Select" size="medium" />)
  .add("Large Select", () => <Select label="Select" size="large" />)
  .add("Small Shaded Select", () => (
    <Select label="Select" size="small" type="shaded" />
  ))
  .add("Medium Shaded Select", () => (
    <Select label="Select" size="medium" type="shaded" />
  ))
  .add("Large Shaded Select", () => (
    <Select label="Select" size="large" type="shaded" />
  ))
  .add("Counter", () => <Counter />);
