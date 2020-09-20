import React from "react";
// import ReactDOM from "react-dom";
import { MemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import App from "./App";

test("It should render Correctly", () => {
  const div = React.createElement("div");
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>,
    div
  );
});
