import React from "react";
import { storiesOf } from "@storybook/react";
import Input from "./Form";
import Select from "./Select";
import Counter from "./Counter";
import Voucher from "./Voucher";
import Check from "./Check";

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
  .add("Counter", () => <Counter />)
  .add("Small Voucher", () => <Voucher label="Voucher Code" size="small" />)
  .add("Medium Voucher", () => <Voucher label="Voucher Code" size="medium" />)
  .add("Uncheck Primary", () => <Check label=" " type="primary" />)
  .add("Checked Primary", () => <Check label=" " type="primary" />)
  .add("Uncheck Default", () => <Check label=" " type="default" />)
  .add("Checked Default", () => <Check label=" " type="default" />);
