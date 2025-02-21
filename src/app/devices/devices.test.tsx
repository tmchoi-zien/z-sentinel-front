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
import { useRouter } from "next/navigation";
import { ROUTE } from "@/constants/common";

const m = TEXT["devices"];
const t = TEST["pages"]["devices"];

jest.mock("./logic");
jest.mock("next/navigation");

const pushMock = jest.fn();

describe(`${t["title"]}`, () => {
  (DevicesLogic as jest.Mock).mockReturnValue({});
  (useRouter as jest.Mock).mockReturnValue({
    push: pushMock,
  });
  render(<Devices />);

  test("title 표출", () => {
    expect(screen.getByText(m["title"])).toBeInTheDocument();
  });

  test("TABLE: Devices", () => {
    const ele = screen.getByTestId(t["table-devices"]);
    expect(ele).toBeInTheDocument();

    // 컬럼 조회
    m["table-columns"].forEach((column) => {
      expect(ele).toHaveTextContent(column);
    });
    // 로우 클릭 시 디테일 페이지 이동
    const rowItem = within(ele).getByText("1");
    fireEvent.click(rowItem);
    expect(pushMock).toHaveBeenCalledWith(`${ROUTE.DEVICES}/mock.idx`);
  });
});
