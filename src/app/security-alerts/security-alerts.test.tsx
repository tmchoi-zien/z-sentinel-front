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
import Provider from "@/components/Provider";
import { ROUTE } from "@/constants/common";
import { useRouter } from "next/navigation";

const m = TEXT["security-alerts"];
const t = TEST["pages"]["security-alerts"];

jest.mock("./logic");
jest.mock("next/navigation");

const pushMock = jest.fn();

describe(`${t["title"]}`, () => {
  beforeEach(() => {
    (SecurityAlertsLogic as jest.Mock).mockReturnValue({});
    (useRouter as jest.Mock).mockReturnValue({
      push: pushMock,
    });
    render(
      <Provider>
        <SecurityAlerts />
      </Provider>,
    );
  });

  test("title 표출", () => {
    expect(screen.getByText(m["title"])).toBeInTheDocument();
  });

  // Graph 탭
  test("TAB: Graph", () => {
    expect(screen.getByTestId(t["tab-graph"])).toBeInTheDocument();
  });

  test("Graph: Security alerts", () => {
    const graph = screen.getByTestId(t["graph-security-alerts"]);
    expect(graph).toBeInTheDocument();

    // 노드 클릭 시 모달 발생
    // fireEvent.click(ele);
    // const modal = screen.getByTestId(TEST["modals"]["security-alert-detail"]["test-name"]);
    // expect(modal).toBeInTheDocument();
    expect(true).toBe(false);
  });

  test("TAB: Security alerts", () => {
    const tab = screen.getByTestId(t["tab-security-alerts"]);
    expect(tab).toBeInTheDocument();
    fireEvent.click(tab);
  });

  test("TABLE: Security alerts", () => {
    const ele = screen.getByTestId(t["table-security-alerts"]);
    expect(ele).toBeInTheDocument();

    // 컬럼 조회
    m["table-columns"].forEach((column) => {
      expect(ele).toHaveTextContent(column);
    });
    // 로우 클릭 시 디테일 페이지 이동
    const rowItem = within(ele).getByText("1");
    fireEvent.click(rowItem);
    expect(pushMock).toHaveBeenCalledWith(`${ROUTE.SECURITY_ALERTS}/mock.idx`);
  });
});
