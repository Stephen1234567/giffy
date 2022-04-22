import {
  findByText,
  fireEvent,
  render,
  screen,
  waitForElement,
} from "@testing-library/react";
import App from "../App";

/*
test("home work as expect", async () => {
  const { container } = render(<App />);
  const gifLink = await wait(() => container.querySelector(".Gif-link"));
  expect(gifLink).toBeVisible();
});*/

test("home work as expected", async () => {
  render(<App />);
  const gifLink = await screen.findByRole("img");

  expect(gifLink).toBeVisible();
});

test("search form could be used", async () => {
  render(<App />);
  const input = await screen.findByRole("textbox");
  fireEvent.change(input, { target: { value: "Matrix" } });
});
