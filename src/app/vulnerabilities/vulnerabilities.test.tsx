import {
  fireEvent,
  render,
  screen,
  waitFor,
  within,
} from "@testing-library/react";

import TEST from "@/locale/ko/test-id.json";
import TEXT from "@/locale/ko/page.json";
import VulnerabilitiesLogic from "./logic";
import Vulnerabilities from "./page";
import { mkConfig, generateCsv, download } from "export-to-csv";
import { useQuery } from "react-query";
import Provider from "@/components/Provider";

const m = TEXT["vulnerabilities"];
const t = TEST["pages"]["vulnerabilities"];

const MOCK = {
  content: [
    {
      idx: 5,
      workType: "New",
      infraWorkIdx: 46,
      pentestWorkIdx: 8,
      name: "점검 완료 테스트",
      projectName: null,
      securityPortalPk: null,
      year: 2025,
      status: "I",
      sso1SaUser: "mk.son",
      sso1Name: "손민경",
      sso1PositionLevel: "팀장",
      sso2SaUser: null,
      sso2Name: null,
      sso2PositionLevel: null,
      sso3SaUser: null,
      sso3Name: null,
      sso3PositionLevel: null,
      sso4SaUser: null,
      sso4Name: null,
      sso4PositionLevel: null,
      openDay: "02/28 (금)",
      dueDay: null,
      infraRequestDay: "02/19 (수)",
      pentestRequestDay: "02/19 (수)",
      inspectionManagerI: "김민경",
      inspectionManagerP: "김민경",
      infraStatus: "P",
      pentestStatus: "I",
      infraReportName:
        "20250219_zien-VMware-Virtual-Platform(MySQL)_인프라_점검결과보고서_v1.0",
      pentestReportName:
        "20250219_점검_완료_테스트_웹_모의해킹_결과보고서_v1.0",
      infraWeeknessSang: 0,
      infraWeeknessJung: 1,
      infraWeeknessHa: 0,
      infraRemindSang: 0,
      infraRemindJung: 1,
      infraRemindHa: 0,
      pentestWeeknessSang: 0,
      pentestWeeknessJung: 0,
      pentestWeeknessHa: 0,
      pentestRemindSang: 0,
      pentestRemindJung: 0,
      pentestRemindHa: 0,
      infraCount: 1,
      pentestCount: 1,
      infraIsTemporary: false,
      pentestIsTemporary: false,
    },
    {
      idx: 4,
      workType: "New",
      infraWorkIdx: 44,
      pentestWorkIdx: 6,
      name: "4차 테스트",
      projectName: null,
      securityPortalPk: null,
      year: 2025,
      status: "I",
      sso1SaUser: "mk.son",
      sso1Name: "손민경",
      sso1PositionLevel: "팀장",
      sso2SaUser: null,
      sso2Name: null,
      sso2PositionLevel: null,
      sso3SaUser: null,
      sso3Name: null,
      sso3PositionLevel: null,
      sso4SaUser: null,
      sso4Name: null,
      sso4PositionLevel: null,
      openDay: "02/28 (금)",
      dueDay: null,
      infraRequestDay: "02/18 (화)",
      pentestRequestDay: "02/18 (화)",
      inspectionManagerI: "김민경",
      inspectionManagerP: "김민경",
      infraStatus: "P",
      pentestStatus: "I",
      infraReportName:
        "20250218_WIN-O5OEBIV2BP0(MSSQL)_인프라_점검결과보고서_v1.0",
      pentestReportName: "20250218_4차_테스트_웹_모의해킹_결과보고서_v1.0",
      infraWeeknessSang: 32,
      infraWeeknessJung: 37,
      infraWeeknessHa: 12,
      infraRemindSang: 32,
      infraRemindJung: 37,
      infraRemindHa: 12,
      pentestWeeknessSang: 0,
      pentestWeeknessJung: 0,
      pentestWeeknessHa: 0,
      pentestRemindSang: 0,
      pentestRemindJung: 0,
      pentestRemindHa: 0,
      infraCount: 11,
      pentestCount: 1,
      infraIsTemporary: false,
      pentestIsTemporary: false,
    },
    {
      idx: 3,
      workType: "New",
      infraWorkIdx: 26,
      pentestWorkIdx: 7,
      name: "3차 테스트",
      projectName: null,
      securityPortalPk: null,
      year: 2025,
      status: "RI",
      sso1SaUser: "mk.son",
      sso1Name: "손민경",
      sso1PositionLevel: "팀장",
      sso2SaUser: null,
      sso2Name: null,
      sso2PositionLevel: null,
      sso3SaUser: null,
      sso3Name: null,
      sso3PositionLevel: null,
      sso4SaUser: null,
      sso4Name: null,
      sso4PositionLevel: null,
      openDay: "02/17 (월)",
      dueDay: null,
      infraRequestDay: "02/17 (월)",
      pentestRequestDay: null,
      inspectionManagerI: "김민경",
      inspectionManagerP: "",
      infraStatus: "I",
      pentestStatus: "R",
      infraReportName:
        "20250217_WIN-644B16CD7GE(MySQL)_인프라_점검결과보고서_v1.0",
      pentestReportName: "",
      infraWeeknessSang: 13,
      infraWeeknessJung: 21,
      infraWeeknessHa: 5,
      infraRemindSang: 13,
      infraRemindJung: 21,
      infraRemindHa: 5,
      pentestWeeknessSang: 0,
      pentestWeeknessJung: 0,
      pentestWeeknessHa: 0,
      pentestRemindSang: 0,
      pentestRemindJung: 0,
      pentestRemindHa: 0,
      infraCount: 11,
      pentestCount: 1,
      infraIsTemporary: false,
      pentestIsTemporary: true,
    },
    {
      idx: 2,
      workType: "New",
      infraWorkIdx: 12,
      pentestWorkIdx: 5,
      name: "2차 테스트",
      projectName: null,
      securityPortalPk: null,
      year: 2025,
      status: "I",
      sso1SaUser: "mk.son",
      sso1Name: "손민경",
      sso1PositionLevel: "팀장",
      sso2SaUser: null,
      sso2Name: null,
      sso2PositionLevel: null,
      sso3SaUser: null,
      sso3Name: null,
      sso3PositionLevel: null,
      sso4SaUser: null,
      sso4Name: null,
      sso4PositionLevel: null,
      openDay: "02/17 (월)",
      dueDay: null,
      infraRequestDay: "02/17 (월)",
      pentestRequestDay: "02/17 (월)",
      inspectionManagerI: "김민경",
      inspectionManagerP: "김민경",
      infraStatus: "I",
      pentestStatus: "I",
      infraReportName:
        "20250217_zien-VMware-Virtual-Platform(Oracle)_인프라_점검결과보고서_v1.0",
      pentestReportName:
        "20250217_2차_테스트_앱_테스트_모의해킹_결과보고서_v1.0",
      infraWeeknessSang: 25,
      infraWeeknessJung: 27,
      infraWeeknessHa: 10,
      infraRemindSang: 25,
      infraRemindJung: 27,
      infraRemindHa: 10,
      pentestWeeknessSang: 0,
      pentestWeeknessJung: 0,
      pentestWeeknessHa: 0,
      pentestRemindSang: 0,
      pentestRemindJung: 0,
      pentestRemindHa: 0,
      infraCount: 11,
      pentestCount: 2,
      infraIsTemporary: false,
      pentestIsTemporary: false,
    },
    {
      idx: 1,
      workType: "New",
      infraWorkIdx: 1,
      pentestWorkIdx: 3,
      name: "1차 테스트",
      projectName: null,
      securityPortalPk: null,
      year: 2025,
      status: "R",
      sso1SaUser: "mk.son",
      sso1Name: "손민경",
      sso1PositionLevel: "팀장",
      sso2SaUser: null,
      sso2Name: null,
      sso2PositionLevel: null,
      sso3SaUser: null,
      sso3Name: null,
      sso3PositionLevel: null,
      sso4SaUser: null,
      sso4Name: null,
      sso4PositionLevel: null,
      openDay: "03/11 (화)",
      dueDay: null,
      infraRequestDay: "02/14 (금)",
      pentestRequestDay: "02/17 (월)",
      inspectionManagerI: "이상준",
      inspectionManagerP: "김민경",
      infraStatus: "I",
      pentestStatus: "I",
      infraReportName:
        "20250214_zien-VMware-Virtual-Platform(Oracle)_인프라_점검결과보고서_v1.0",
      pentestReportName: "",
      infraWeeknessSang: 20,
      infraWeeknessJung: 15,
      infraWeeknessHa: 9,
      infraRemindSang: 20,
      infraRemindJung: 15,
      infraRemindHa: 9,
      pentestWeeknessSang: 0,
      pentestWeeknessJung: 0,
      pentestWeeknessHa: 0,
      pentestRemindSang: 0,
      pentestRemindJung: 0,
      pentestRemindHa: 0,
      infraCount: 11,
      pentestCount: 3,
      infraIsTemporary: false,
      pentestIsTemporary: false,
    },
  ],
  pageable: {
    sort: {
      sorted: true,
      unsorted: false,
    },
    pageSize: 10,
    pageNumber: 0,
    offset: 0,
    paged: true,
    unpaged: false,
  },
  last: true,
  totalPages: 1,
  totalElements: 5,
  size: 10,
  number: 0,
  sort: {
    sorted: true,
    unsorted: false,
  },
  first: true,
  numberOfElements: 5,
  empty: false,
};

jest.mock("./logic");
jest.mock("react-query", () => ({
  ...jest.requireActual("react-query"),
  useQuery: jest.fn(),
}));
jest.mock("export-to-csv", () => ({
  mkConfig: jest.fn(),
  generateCsv: jest.fn(),
  download: jest.fn(),
}));

describe(`${t["title"]}`, () => {
  (useQuery as jest.Mock).mockReturnValue({
    data: MOCK,
    isLoading: false,
    isError: false,
    isRefetching: false,
  });
  (VulnerabilitiesLogic as jest.Mock).mockReturnValue({});
  render(
    <Provider>
      <Vulnerabilities />
    </Provider>,
  );

  test("title 표출", () => {
    expect(screen.getByText(m["title"])).toBeInTheDocument();
  });

  test("TAB: Overview", () => {
    expect(screen.getByTestId(t["tab-overview"])).toBeInTheDocument();
  });

  // Overview 탭
  test("CHART: 위험도 수준 표출", () => {
    const ele = screen.getByTestId(t["tile-infra-security-level"]);
    expect(ele).toBeInTheDocument();
    // 값 표출
    if (false) {
      expect(ele).toHaveTextContent(``);
    }
  });

  test("TILE: High risk devices", () => {
    const ele = screen.getByTestId(t["tile-high-risk-devices"]);
    expect(ele).toBeInTheDocument();
    // 값 표출
    if (false) {
      expect(ele).toHaveTextContent(``);
    }
  });

  test("TILE: Devices by level", () => {
    const ele = screen.getByTestId(t["tile-devices-by-level"]);
    expect(ele).toBeInTheDocument();
    // 값 표출
    if (false) {
      expect(ele).toHaveTextContent(``);
    }
  });

  test("CHART: vulnerabilities", () => {
    const ele = screen.getByTestId(t["chart-vulnerabilities"]);
    expect(ele).toBeInTheDocument();
    // 값 표출
    if (false) {
      expect(ele).toHaveTextContent(``);
    }
  });

  test("CHART: security", () => {
    const ele = screen.getByTestId(t["chart-security"]);
    expect(ele).toBeInTheDocument();
    // 값 표출
    if (false) {
      expect(ele).toHaveTextContent(``);
    }
  });

  test("CHART: Vuln models", () => {
    const ele = screen.getByTestId(t["chart-vuln-models"]);
    expect(ele).toBeInTheDocument();
    // 값 표출
    if (false) {
      expect(ele).toHaveTextContent(``);
    }
  });

  test("CHART: Device type", () => {
    const ele = screen.getByTestId(t["chart-device-type"]);
    expect(ele).toBeInTheDocument();
    // 값 표출
    if (false) {
      expect(ele).toHaveTextContent(``);
    }
  });

  test("CHART: Vuln manufacturer", () => {
    const ele = screen.getByTestId(t["chart-vuln-manufacturer"]);
    expect(ele).toBeInTheDocument();
    // 값 표출
    if (false) {
      expect(ele).toHaveTextContent(``);
    }
  });

  test("TAB: Vulnerabilities", () => {
    const tab = screen.getByTestId(t["tab-vulnerabilities"]);
    expect(tab).toBeInTheDocument();
    fireEvent.click(tab);
  });

  // Vulnerabilities 탭

  test("TABLE: Vulnerabilities", () => {
    const ele = screen.getByTestId(t["table-vuln"]);
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
});
