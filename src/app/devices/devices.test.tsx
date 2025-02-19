import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";

import TEST from "@/locale/ko/test-id.json";
import TEXT from "@/locale/ko/page.json";
import DevicesLogic from "./logic";
import Devices from "./page";

const m = TEXT["devices"];
const t = TEST["pages"]["devices"];

jest.mock("./logic");

describe(`${t["title"]}`, () => {
  beforeEach(() => {
    (DevicesLogic as jest.Mock).mockReturnValue({});
    render(<Devices />);
  });

  test("title 표출", () => {
    expect(screen.getByText(m["title"])).toBeInTheDocument();
  });
});
