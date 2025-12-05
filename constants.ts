import { LayerType, TableRow } from './types';

export const DEPARTMENTS = [
  "项目部",
  "工程管理部",
  "质量管理部",
  "安全管理部",
  "财务部",
  "综合办公室",
  "工程技术部",
  "安全生产部",
  "合约商务部",
  "成本部",
  "物资保障部",
  "机电设备部",
  "测量班组",
  "试验室",
  "资料室",
  "消防部",
  "暖通部",
  "弱电部",
  "幕墙部",
  "水电部",
  "市政部",
  "园林部",
  "绿化部",
  "防水部",
  "装修部",
  "土建队",
  "钢筋班组",
  "木工班组",
  "混凝土班组",
  "架子工班组",
  "泥工班组",
  "抹灰班组",
  "砌筑班组",
  "其他"
];

const createEmptyRow = (id: string, layer: LayerType, overrides: Partial<TableRow> = {}): TableRow => ({
  id,
  layer,
  mgmt_dept: '', mgmt_resp: '', mgmt_post: '', mgmt_rank: '', mgmt_count: '', mgmt_constructor_l1: false, mgmt_constructor_l2: false, mgmt_post_resp: '', mgmt_selected: false,
  tech_dept: '', tech_resp: '', tech_rank: '', tech_post: '', tech_count: '', tech_eng_junior: false, tech_eng_mid: false, tech_eng_senior: false, tech_eng_special: false, tech_post_resp: '', tech_selected: false,
  biz_dept: '', biz_resp: '', biz_rank: '', biz_post: '', biz_count: '', biz_title_junior: false, biz_title_mid: false, biz_title_senior: false, biz_title_special: false, biz_post_resp: '', biz_selected: false,
  ...overrides
});

export const INITIAL_DATA: TableRow[] = [
  // Decision Layer
  createEmptyRow('1', LayerType.DECISION, {
    mgmt_dept: '项目部', mgmt_post: '项目负责人', mgmt_rank: '总监', mgmt_count: '1.张松涛', mgmt_constructor_l1: true,
    tech_dept: '项目部', tech_rank: '经理', tech_post: '技术负责人', tech_count: '1.姓名',
    biz_dept: '合约商务部', biz_rank: '经理', biz_post: '合同管理员', biz_count: '1.姓名'
  }),
  createEmptyRow('2', LayerType.DECISION, {
    mgmt_dept: '项目部', mgmt_post: '施工管理',
    biz_dept: '成本部'
  }),

  // Management Layer
  createEmptyRow('3', LayerType.MANAGEMENT, {
    mgmt_dept: '工程管理部', mgmt_post: '施工员', mgmt_selected: true,
    tech_dept: '工程技术部', tech_post: '测量员', tech_selected: true,
    biz_dept: '物资保障部', biz_post: '采购员'
  }),
  createEmptyRow('4', LayerType.MANAGEMENT, {
    mgmt_dept: '质量管理部', mgmt_post: '质量员', mgmt_selected: true,
    tech_dept: '资料室', tech_post: '资料员', tech_selected: true,
    biz_dept: '物资保障部', biz_post: '材料员', biz_selected: true
  }),
  createEmptyRow('5', LayerType.MANAGEMENT, {
    mgmt_dept: '安全管理部', mgmt_post: '安全员', mgmt_selected: true,
    tech_dept: '安全生产部', tech_post: '标准员', tech_selected: true,
    biz_dept: '机电设备部', biz_post: '机械员'
  }),

  // Operation Layer
  createEmptyRow('12', LayerType.OPERATION, { mgmt_dept: '消防部', tech_dept: '消防部', biz_dept: '消防部' }),
  createEmptyRow('13', LayerType.OPERATION, { mgmt_dept: '暖通部', tech_dept: '暖通部', biz_dept: '暖通部' }),
  createEmptyRow('14', LayerType.OPERATION, { mgmt_dept: '弱电部', tech_dept: '弱电部', biz_dept: '弱电部' }),
  createEmptyRow('15', LayerType.OPERATION, { mgmt_dept: '幕墙部', tech_dept: '幕墙部', biz_dept: '幕墙部' }),
  createEmptyRow('16', LayerType.OPERATION, { mgmt_dept: '水电部', tech_dept: '水电部', biz_dept: '水电部' }),
  createEmptyRow('17', LayerType.OPERATION, { mgmt_dept: '市政部', tech_dept: '市政部', biz_dept: '市政部' }),
  createEmptyRow('18', LayerType.OPERATION, { mgmt_dept: '园林部', tech_dept: '园林部', biz_dept: '园林部' }),
  createEmptyRow('19', LayerType.OPERATION, { mgmt_dept: '绿化部', tech_dept: '绿化部', biz_dept: '绿化部' }),
  createEmptyRow('20', LayerType.OPERATION, { mgmt_dept: '防水部', tech_dept: '防水部', biz_dept: '防水部' }),
  createEmptyRow('21', LayerType.OPERATION, { mgmt_dept: '木工班组', tech_dept: '木工班组', biz_dept: '木工班组' }),
  createEmptyRow('22', LayerType.OPERATION, { mgmt_dept: '钢筋班组', tech_dept: '钢筋班组', biz_dept: '钢筋班组' }),
  createEmptyRow('23', LayerType.OPERATION, { mgmt_dept: '架子工班组', tech_dept: '架子工班组', biz_dept: '架子工班组' }),
  createEmptyRow('24', LayerType.OPERATION, { mgmt_dept: '泥工班组', tech_dept: '泥工班组', biz_dept: '泥工班组' }),
  createEmptyRow('25', LayerType.OPERATION, { mgmt_dept: '抹灰班组', tech_dept: '抹灰班组', biz_dept: '抹灰班组' }),
  createEmptyRow('26', LayerType.OPERATION, { mgmt_dept: '混凝土班组', tech_dept: '混凝土班组', biz_dept: '混凝土班组' }),
  createEmptyRow('27', LayerType.OPERATION, { mgmt_dept: '砌筑班组', tech_dept: '砌筑班组', biz_dept: '砌筑班组' }),
];