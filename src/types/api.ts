/**
 * API 관련된 타입을 정의한다.
 * get요청, post요청에 대한 데이터 타입 정의
 */

export interface ListType<T> {
  content: T[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface Pageable {
  sort: Sort;
  pageSize: number;
  pageNumber: number;
  offset: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort {
  sorted: boolean;
  unsorted: boolean;
}

export interface AssetType {
  idx: number;
  workType: string;
  infraWorkIdx: number;
  pentestWorkIdx: number;
  name: string;
  projectName: any;
  securityPortalPk: any;
  year: number;
  status: string;
  sso1SaUser: string;
  sso1Name: string;
  sso1PositionLevel: string;
  sso2SaUser: any;
  sso2Name: any;
  sso2PositionLevel: any;
  sso3SaUser: any;
  sso3Name: any;
  sso3PositionLevel: any;
  sso4SaUser: any;
  sso4Name: any;
  sso4PositionLevel: any;
  openDay: string;
  dueDay: any;
  infraRequestDay: string | null;
  pentestRequestDay?: string | null;
  inspectionManagerI: string | null;
  inspectionManagerP: string | null;
  infraStatus: string;
  pentestStatus: string;
  infraReportName: string;
  pentestReportName: string;
  infraWeeknessSang: number;
  infraWeeknessJung: number;
  infraWeeknessHa: number;
  infraRemindSang: number;
  infraRemindJung: number;
  infraRemindHa: number;
  pentestWeeknessSang: number;
  pentestWeeknessJung: number;
  pentestWeeknessHa: number;
  pentestRemindSang: number;
  pentestRemindJung: number;
  pentestRemindHa: number;
  infraCount: number;
  pentestCount: number;
  infraIsTemporary: boolean;
  pentestIsTemporary: boolean;
}
