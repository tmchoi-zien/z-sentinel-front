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
  (HomeLogic as jest.Mock).mockReturnValue({});
  render(<Home />);
  // beforeEach(() => {
  // });

  test("title 표출", () => {
    expect(screen.getByText(m["title"])).toBeInTheDocument();
  });

  // 상단 Tiles
  test("TILE: 디바이스 수", () => {
    const ele = screen.getByTestId(t["tile-devices"]);
    expect(ele).toBeInTheDocument();
    // 데이터 있을 때 조회
    expect(false).toBe(true);
    // 디바이스 수
    if (false) {
      expect(within(ele).getByText(``)).toBeInTheDocument();
    }
    // 연결된 디바이스 수
    if (false) {
      expect(within(ele).getByText(``)).toBeInTheDocument();
    }
    // 미연결된 디바이스 수
    if (false) {
      expect(within(ele).getByText(``)).toBeInTheDocument();
    }
  });

  test("TILE: 위험도 수준", () => {
    const ele = screen.getByTestId(t["tile-infra-security-level"]);
    expect(ele).toBeInTheDocument();
    // 데이터 있을 때 조회
    expect(false).toBe(true);
    // 전체 보안 수준
    if (false) {
      expect(within(ele).getByText(``)).toBeInTheDocument();
    }
  });

  test("TILE: High risk devices", () => {
    const ele = screen.getByTestId(t["tile-high-risk-devices"]);
    expect(ele).toBeInTheDocument();
    // 데이터 있을 때 조회
    expect(false).toBe(true);
    // 전체 보안 수준
    if (false) {
      expect(within(ele).getByText(``)).toBeInTheDocument();
    }
  });

  test("TILE: Security alerts", () => {
    const ele = screen.getByTestId(t["tile-security-alerts"]);
    expect(ele).toBeInTheDocument();
    // 데이터 있을 때 조회
    expect(false).toBe(true);
    // 전체 보안 수준
    if (false) {
      expect(within(ele).getByText(``)).toBeInTheDocument();
    }
  });

  // 중단 차트
  test("CHART: Week divce", () => {
    const ele = screen.getByTestId(t["chart-week-device"]);
    expect(ele).toBeInTheDocument();
    // 데이터 있을 때 조회
    expect(false).toBe(true);
    // 전체 보안 수준
    if (false) {
      expect(within(ele).getByText(``)).toBeInTheDocument();
    }
  });

  test("CHART: Vulnerabilities", () => {
    const ele = screen.getByTestId(t["chart-vulnerabilities"]);
    expect(ele).toBeInTheDocument();
    // 데이터 있을 때 조회
    expect(false).toBe(true);
    // 전체 보안 수준
    if (false) {
      expect(within(ele).getByText(``)).toBeInTheDocument();
    }
  });

  test("CHART: Security alert", () => {
    const ele = screen.getByTestId(t["chart-security-alert"]);
    expect(ele).toBeInTheDocument();
    // 데이터 있을 때 조회
    expect(false).toBe(true);
    // 전체 보안 수준
    if (false) {
      expect(within(ele).getByText(``)).toBeInTheDocument();
    }
  });

  // 하단 view
  test("LIST: Security alert", () => {
    const ele = screen.getByTestId(t["list-security-alert"]);
    expect(ele).toBeInTheDocument();
    // 데이터 있을 때 조회
    expect(false).toBe(true);
    // 전체 보안 수준
    if (false) {
      expect(within(ele).getByText(``)).toBeInTheDocument();
    }
  });

  test("GRAPH: Security alert", () => {
    const ele = screen.getByTestId(t["graph-security-alert"]);
    expect(ele).toBeInTheDocument();
    // 데이터 있을 때 조회
    expect(false).toBe(true);
    // 전체 보안 수준
    if (false) {
      expect(within(ele).getByText(``)).toBeInTheDocument();
    }
  });
});
