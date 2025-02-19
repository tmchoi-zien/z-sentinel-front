import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";

import TEST from "@/locale/ko/test-id.json";
import TEXT from "@/locale/ko/page.json";
import HomeLogic from "./logic";
import Home from "./page";

const m = TEXT["home"];
const t = TEST["pages"]["home"];

jest.mock("./logic");

describe(`${t["title"]}`, () => {
  beforeEach(() => {
    (HomeLogic as jest.Mock).mockReturnValue({});
    render(<Home />);
  });

  test("title 표출", () => {
    expect(screen.getByText(m["title"])).toBeInTheDocument();
  });
});
