import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";

import TEST from "@/locale/ko/test-id.json";
import TEXT from "@/locale/ko/modal.json";
import SecurityAlertDetailLogic from "./logic";
import SecurityAlertDetail from "./modal";

const m = TEXT["security-alert-detail"];
const t = TEST["modals"]["security-alert-detail"];

jest.mock("./logic");

describe(`${t["title"]}`, () => {
  beforeEach(() => {
    (SecurityAlertDetailLogic as jest.Mock).mockReturnValue({});
    render(<SecurityAlertDetail />);
  });

  test("title 표출", () => {
    expect(screen.getByText(m["title"])).toBeInTheDocument();
  });
});
