import React from "react";
import { render } from "./utils/test-utils";
import App from "./App";

test("App renders with correct name in header", () => {
  const { getByTestId } = render(<App />);
  const username = getByTestId("username");
  expect(username).toHaveTextContent("Mark");
});
