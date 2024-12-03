import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "../components/Button/Button";

describe("Button Component", () => {
  test("renders dark solid button", () => {
    render(<Button>Dark Solid Button</Button>);
    const button = screen.getByText("Dark Solid Button");
    expect(button.classList).toContain("storybook-button--dark-solid");
  });

  test("renders dark outlined button", () => {
    render(<Button outlined>Dark Outlined Button</Button>);
    const button = screen.getByText("Dark Outlined Button");
    expect(button.classList).toContain("storybook-button--dark-outlined");
  });

  test("renders green solid button", () => {
    render(<Button variant="green">Green Solid Button</Button>);
    const button = screen.getByText("Green Solid Button");
    expect(button.classList).toContain("storybook-button--green-solid");
  });

  test("renders green outlined button", () => {
    render(
      <Button variant="green" outlined>
        Green Outlined Button
      </Button>,
    );
    const button = screen.getByText("Green Outlined Button");
    expect(button.classList).toContain("storybook-button--green-outlined");
  });
});
