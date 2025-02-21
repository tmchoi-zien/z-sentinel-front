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
import Provider from "@/components/Provider";

const m = TEXT["device-detail"];
const t = TEST["pages"]["device-detail"];

jest.mock("./logic");

describe(`${t["title"]}`, () => {
  beforeEach(() => {
    (DeviceDetailLogic as jest.Mock).mockReturnValue({});
    render(
      <Provider>
        <DeviceDetail />
      </Provider>,
    );
  });

  test("title 표출", () => {
    expect(screen.getByText(m["title"])).toBeInTheDocument();
  });

  // Profile 탭
  test("TAB: Profile", () => {
    expect(screen.getByTestId(t["tab-profile"])).toBeInTheDocument();
  });

  test("AREA: Device information", () => {
    const area = screen.getByTestId(t["area-device-info"]);

    expect(area).toBeInTheDocument();
    expect(area).toHaveTextContent(`ip`);
    expect(area).toHaveTextContent(`mac`);
    expect(area).toHaveTextContent(`manufacturer`);
    expect(area).toHaveTextContent(`model`);
  });

  test("AREA: Firmware / OS Information", () => {
    const area = screen.getByTestId(t["area-firmware"]);

    expect(area).toBeInTheDocument();
    expect(area).toHaveTextContent(`firmware`);
    expect(area).toHaveTextContent(`os`);
    expect(area).toHaveTextContent(`os cpe`);
    expect(area).toHaveTextContent(`os family`);
  });

  test("AREA: SBOM", () => {
    const area = screen.getByTestId(t["area-sbom"]);
    expect(area).toBeInTheDocument();

    const ele = within(area).getByTestId(t["table-sbom"]);
    expect(ele).toBeInTheDocument();

    // 컬럼 조회
    m["table-columns"].forEach((column) => {
      expect(ele).toHaveTextContent(column);
    });
  });

  test("AREA: Service", () => {
    const area = screen.getByTestId(t["area-service"]);

    expect(area).toBeInTheDocument();
    expect(area).toHaveTextContent(`Admin Page`);
    expect(area).toHaveTextContent(`VNC`);
  });

  // Vulnerability 탭
  test("TAB: Vulnerability", () => {
    const tab = screen.getByTestId(t["tab-vulnerability"]);
    expect(tab).toBeInTheDocument();
    fireEvent.click(tab);
  });

  test("TILE: Device security level", () => {
    const tile = screen.getByTestId(t["tile-device-security-level"]);
    expect(tile).toBeInTheDocument();
    expect(tile).toHaveTextContent(`level`);
  });

  test("TILE: Device by level", () => {
    const tile = screen.getByTestId(t["tile-device-by-level"]);

    expect(tile).toBeInTheDocument();
    expect(tile).toHaveTextContent(`critical`);
    expect(tile).toHaveTextContent(`high`);
    expect(tile).toHaveTextContent(`medium`);
    expect(tile).toHaveTextContent(`low`);
  });

  test("TABLE: Vulnerability", () => {
    const tile = screen.getByTestId(t["tile-device-by-level"]);

    expect(tile).toBeInTheDocument();
    expect(tile).toHaveTextContent(`critical`);
    expect(tile).toHaveTextContent(`high`);
    expect(tile).toHaveTextContent(`medium`);
    expect(tile).toHaveTextContent(`low`);
  });

  test("TABLE: Vulnerabilities", () => {
    const ele = screen.getByTestId(t["table-vulnerability"]);
    expect(ele).toBeInTheDocument();

    // 컬럼 조회
    m["table-columns"].forEach((column) => {
      expect(ele).toHaveTextContent(column);
    });
    // 로우 클릭 시 디테일 페이지 이동
    const rowItem = within(ele).getByText("1");
    fireEvent.click(rowItem);
    expect(
      screen.getByTestId(TEST["modals"]["vulnerability-detail"]["test-name"]),
    ).toBeInTheDocument();
  });

  // Alert 탭
  test("TAB: Alert", () => {
    const tab = screen.getByTestId(t["tab-alert"]);
    expect(tab).toBeInTheDocument();
    fireEvent.click(tab);
  });

  test("AREA: Alert info", () => {
    const area = screen.getByTestId(t["area-alert-info"]);

    expect(area).toBeInTheDocument();
    expect(area).toHaveTextContent(`alert`);
    expect(area).toHaveTextContent(`traffic`);
    expect(area).toHaveTextContent(`anormaly`);
  });

  test("FUNCTION: Date range", () => {
    // 날짜 검색기능
    expect(true).toBe(false);
  });

  test("AREA: Alert info", () => {
    const area = screen.getByTestId(t["area-alert-info"]);

    expect(area).toBeInTheDocument();
    expect(area).toHaveTextContent(`alert`);
    expect(area).toHaveTextContent(`traffic`);
    expect(area).toHaveTextContent(`anormaly`);
  });

  test("AREA: Alerts", () => {
    const area = screen.getByTestId(t["area-alerts"]);

    expect(area).toBeInTheDocument();
    const row = within(area).getByText(`mock row`);
    fireEvent.click(row);
    expect(
      screen.getByTestId(TEST["modals"]["security-alert-detail"]["test-name"]),
    );
  });

  test("AREA: Network topology", () => {
    const area = screen.getByTestId(t["area-network-topology"]);
    expect(area).toBeInTheDocument();
  });

  test("CHART: IPs distribution", () => {
    const area = screen.getByTestId(t["chart-ips-distribution"]);
    expect(area).toBeInTheDocument();
  });

  test("CHART: Protocol distribution", () => {
    const area = screen.getByTestId(t["graph-protocol-distribution"]);
    expect(area).toBeInTheDocument();
  });

  test("CHART: warning", () => {
    const area = screen.getByTestId(t["graph-warning"]);
    expect(area).toBeInTheDocument();
  });
});
