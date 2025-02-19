import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";

import TEST from "@/locale/ko/test-id.json";
import TEXT from "@/locale/ko/page.json";
import SecurityAlertsLogic from "./logic";
import SecurityAlerts from "./page";

const m = TEXT["security-alerts"];
const t = TEST["pages"]["security-alerts"];

jest.mock("./logic");

describe(`${t["title"]}`, () => {
  beforeEach(() => {
    (SecurityAlertsLogic as jest.Mock).mockReturnValue({});
    render(<SecurityAlerts />);
  });

  test("title 표출", () => {
    expect(screen.getByText(m["title"])).toBeInTheDocument();
  });
});
