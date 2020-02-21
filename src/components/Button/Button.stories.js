import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module)
  .add("Primary", () => <Button label="Primary" type="primary" />)
  .add("Danger", () => <Button label="Danger" type="danger" />)
  .add("Success", () => <Button label="Success" type="success" />)
  .add("Warning", () => <Button label="Warning" type="warning" />)
  .add("Default", () => <Button label="Default" type="default" />)
  .add("Large Primary", () => (
    <Button label="Large Primary" type="primary" large />
  ))
  .add("Large Danger", () => (
    <Button label="Large Danger" type="danger" large />
  ))
  .add("Large Success", () => (
    <Button label="Large Success" type="success" large />
  ))
  .add("Large Warning", () => (
    <Button label="Large Warning" type="warning" large />
  ))
  .add("Large Default", () => (
    <Button label="Large Default" type="default" large />
  ))
  .add("Inverse Primary", () => (
    <Button label="Primary" type="inverse-primary" />
  ))
  .add("Inverse Danger", () => <Button label="Danger" type="inverse-danger" />)
  .add("Inverse Success", () => (
    <Button label="Success" type="inverse-success" />
  ))
  .add("Inverse Warning", () => (
    <Button label="Warning" type="inverse-warning" />
  ))
  .add("Inverse Default", () => (
    <Button label="Default" type="inverse-default" />
  ));
