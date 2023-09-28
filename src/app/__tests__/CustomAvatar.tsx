import { render } from "@testing-library/react";
import CustomAvatar from "./CustomAvatar";

describe("CustomAvatar", () => {
  test("renders a CustomAvatar", () => {
    const { getByTestId, container } = render(<CustomAvatar />);

    const target = getByTestId("custom-avatar");
    console.log(target);
    console.log(container.innerHTML);

    expect(target).toBeInTheDocument();
  });
});

