import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";

import TEST from "@/locale/ko/test-id.json";
import TEXT from "@/locale/ko/page.json";
import DeviceDetailLogic from "./logic";
import DeviceDetail from "./page";

const m = TEXT["device-detail"];
const t = TEST["pages"]["device-detail"];

jest.mock("./logic");

describe(`${t["title"]}`, () => {
  beforeEach(() => {
    (DeviceDetailLogic as jest.Mock).mockReturnValue({});
    render(<DeviceDetail />);
  });

  test("title 표출", () => {
    expect(screen.getByText(m["title"])).toBeInTheDocument();
  });
});
