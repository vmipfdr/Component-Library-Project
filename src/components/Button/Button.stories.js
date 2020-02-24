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
  ))
  .add("Pale Primary", () => <Button label="Primary" type="pale-primary" />)
  .add("Pale Danger", () => <Button label="Danger" type="pale-danger" />)
  .add("Pale Success", () => <Button label="Success" type="pale-success" />)
  .add("Pale Warning", () => <Button label="Warning" type="pale-warning" />)
  .add("Pale Default", () => <Button label="Default" type="pale-default" />)
  .add("Large Inverse Primary", () => (
    <Button label="Primary" type="inverse-primary" large />
  ))
  .add("Large Inverse Danger", () => (
    <Button label="Danger" type="inverse-danger" large />
  ))
  .add("Large Inverse Success", () => (
    <Button label="Success" type="inverse-success" large />
  ))
  .add("Large Inverse Warning", () => (
    <Button label="Warning" type="inverse-warning" large />
  ))
  .add("Large Inverse Default", () => (
    <Button label="Default" type="inverse-default" large />
  ))
  .add("Large Pale Primary", () => (
    <Button label="Primary" type="pale-primary" large />
  ))
  .add("Large Pale Danger", () => (
    <Button label="Danger" type="pale-danger" large />
  ))
  .add("Large Pale Success", () => (
    <Button label="Success" type="pale-success" large />
  ))
  .add("Large Pale Warning", () => (
    <Button label="Warning" type="pale-warning" large />
  ))
  .add("Large Pale Default", () => (
    <Button label="Default" type="pale-default" large />
  ))
  .add("Add To Cart", () => <Button label="Add To Cart" type="cart-text" />)
  .add("Add To Favorites", () => (
    <Button label="Add To Favorites" type="favorite-text" />
  ))
  .add("Cart", () => <Button label=" " type="cart" />)
  .add("Favorite", () => <Button label=" " type="favorite" />);
