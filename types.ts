export enum LayerType {
  DECISION = '决策层',
  MANAGEMENT = '管理层',
  OPERATION = '作业层',
}

export enum CategoryType {
  MANAGEMENT = 'Management',
  TECHNICAL = 'Technical',
  BUSINESS = 'Business',
}

export interface TableRow {
  id: string;
  layer: LayerType;
  
  // Management Section (Blue)
  mgmt_dept: string;
  mgmt_resp: string;
  mgmt_post: string;
  mgmt_rank: string;
  mgmt_count: string;
  mgmt_constructor_l1: boolean;
  mgmt_constructor_l2: boolean;
  mgmt_post_resp: string;
  mgmt_selected: boolean;

  // Technical Section (Orange)
  tech_dept: string;
  tech_resp: string;
  tech_rank: string;
  tech_post: string;
  tech_count: string;
  tech_eng_junior: boolean;
  tech_eng_mid: boolean;
  tech_eng_senior: boolean;
  tech_eng_special: boolean;
  tech_post_resp: string;
  tech_selected: boolean;

  // Business Section (Green)
  biz_dept: string;
  biz_resp: string;
  biz_rank: string;
  biz_post: string;
  biz_count: string;
  biz_title_junior: boolean;
  biz_title_mid: boolean;
  biz_title_senior: boolean;
  biz_title_special: boolean;
  biz_post_resp: string;
  biz_selected: boolean;
}

export type OrgData = TableRow[];