import React from "react";
import ReactDOM from 'react-dom'
import { render } from "@testing-library/react";
import App from "./App";

test("It should render Correctly", () => {
  const div = React.createElement('div')
  render(<App/>,div)
});
