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
  (SecurityAlertDetailLogic as jest.Mock).mockReturnValue({});
  render(<SecurityAlertDetail />);

  test("title 표출", () => {
    expect(screen.getByText(m["title"])).toBeInTheDocument();
  });

  test("AREA: Header", () => {
    const area = screen.getByTestId(t["area-header"]);

    expect(within(area).getByTestId(t["icon-priority"])).toBeInTheDocument();
    expect(area).toHaveTextContent(`alert 명`);
  });

  test("AREA: Info", () => {
    const area = screen.getByTestId(t["area-info"]);

    expect(area).toHaveTextContent(`date`);
    expect(area).toHaveTextContent(`rule`);
    expect(area).toHaveTextContent(`priority`);
    expect(area).toHaveTextContent(`src ip`);
    expect(area).toHaveTextContent(`src port`);
    expect(area).toHaveTextContent(`dst ip`);
    expect(area).toHaveTextContent(`dst port`);
  });

  test("AREA: Description", () => {
    const area = screen.getByTestId(t["area-description"]);

    expect(area).toHaveTextContent(`description`);
  });
});
