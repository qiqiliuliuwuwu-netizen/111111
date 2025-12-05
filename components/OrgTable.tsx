import React from 'react';
import { TableRow, LayerType } from '../types';
import { TabType } from '../App';
import { DEPARTMENTS } from '../constants';

interface OrgTableProps {
  data: TableRow[];
  setData: React.Dispatch<React.SetStateAction<TableRow[]>>;
  activeTab: TabType;
  onAddRow: (layer: LayerType) => void;
  onDeleteRow: (id: string) => void;
}

const OrgTable: React.FC<OrgTableProps> = ({ data, setData, activeTab, onAddRow, onDeleteRow }) => {
  const handleInputChange = (id: string, field: keyof TableRow, value: any) => {
    setData(prev => prev.map(row => row.id === id ? { ...row, [field]: value } : row));
  };

  const getLayerRows = (layer: LayerType) => data.filter(r => r.layer === layer);

  // Standard Input: Visible border and background to indicate editability
  const renderInput = (row: TableRow, field: keyof TableRow, className = "", placeholder = "") => (
    <input
      type="text"
      value={row[field] as string}
      placeholder={placeholder}
      onChange={(e) => handleInputChange(row.id, field, e.target.value)}
      className={`w-full bg-white px-3 py-1.5 text-[13px] text-gray-700 placeholder-gray-400 rounded-sm border border-gray-300 hover:border-blue-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all shadow-sm ${className}`}
    />
  );

  const renderSelect = (row: TableRow, field: keyof TableRow, options: string[]) => (
    <div className="relative group/select w-full">
      <select
        value={row[field] as string}
        onChange={(e) => handleInputChange(row.id, field, e.target.value)}
        className="w-full appearance-none bg-white px-3 py-1.5 text-[13px] text-gray-700 rounded-sm border border-gray-300 hover:border-blue-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 outline-none transition-all cursor-pointer shadow-sm pr-6"
      >
        <option value="" className="text-gray-300">选择部门</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
       {/* Custom Arrow - Always visible */}
      <div className={`pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500`}>
        <svg className="h-3 w-3 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );

  const renderCheckbox = (row: TableRow, field: keyof TableRow) => (
    <div className="flex justify-center items-center h-full">
      <input
        type="checkbox"
        checked={row[field] as boolean}
        onChange={(e) => handleInputChange(row.id, field, e.target.checked)}
        className="w-4 h-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500/30 focus:ring-offset-0 cursor-pointer transition-colors hover:border-blue-400"
      />
    </div>
  );

  const layers = [LayerType.DECISION, LayerType.MANAGEMENT, LayerType.OPERATION];
  const totalRowsWithFooters = data.length + 3;

  return (
    <div className="overflow-hidden shadow-sm border border-gray-200 bg-white rounded-md">
      <table className="min-w-max w-full border-collapse">
        <thead>
          <tr className="bg-[#f7f8fa] text-gray-700 font-semibold border-b border-gray-200">
            {/* Sticky Headers for Context */}
            <th className="p-3 text-xs font-bold text-gray-600 w-12 sticky left-0 z-10 bg-[#f7f8fa] border-r border-gray-200 text-center">类型</th>
            <th className="p-3 text-xs font-bold text-gray-600 w-24 sticky left-12 z-10 bg-[#f7f8fa] border-r border-gray-200 text-center">层级</th>

            {/* Management Columns */}
            {activeTab === 'management' && (
              <>
                <th className="p-3 text-xs border-r border-gray-200 text-left min-w-[160px]">部门配置</th>
                <th className="p-3 text-xs border-r border-gray-200 text-left min-w-[140px]">部门核心职责</th>
                <th className="p-3 text-xs border-r border-gray-200 text-left min-w-[120px]">岗位名称</th>
                <th className="p-3 text-xs border-r border-gray-200 text-left min-w-[90px]">职级</th>
                <th className="p-3 text-xs border-r border-gray-200 text-left min-w-[120px]">人员名单/数量</th>
                <th colSpan={2} className="p-0 border-r border-gray-200 min-w-[120px]">
                  <div className="h-full flex flex-col">
                    <div className="flex-1 border-b border-gray-200 py-1.5 flex items-center justify-center text-xs">建造师资质</div>
                    <div className="flex h-8 bg-white">
                      <span className="w-1/2 border-r border-gray-200 flex items-center justify-center text-[11px] text-gray-500">一级</span>
                      <span className="w-1/2 flex items-center justify-center text-[11px] text-gray-500">二级</span>
                    </div>
                  </div>
                </th>
                <th className="p-3 text-xs border-r border-gray-200 text-left min-w-[240px]">岗位职责描述</th>
                <th className="p-3 text-xs border-r border-gray-200 w-12 text-center">启用</th>
              </>
            )}

            {/* Technical Columns */}
            {activeTab === 'technical' && (
              <>
                <th className="p-3 text-xs border-r border-gray-200 text-left min-w-[160px]">部门配置</th>
                <th className="p-3 text-xs border-r border-gray-200 text-left min-w-[140px]">部门职责</th>
                <th className="p-3 text-xs border-r border-gray-200 text-left min-w-[90px]">职级</th>
                <th className="p-3 text-xs border-r border-gray-200 text-left min-w-[120px]">岗位名称</th>
                <th className="p-3 text-xs border-r border-gray-200 text-left min-w-[120px]">人员名单/数量</th>
                <th colSpan={4} className="p-0 border-r border-gray-200 min-w-[200px]">
                  <div className="h-full flex flex-col">
                    <div className="flex-1 border-b border-gray-200 py-1.5 flex items-center justify-center text-xs">工程师职称</div>
                    <div className="flex h-8 bg-white">
                      <span className="w-1/4 border-r border-gray-200 flex items-center justify-center text-[10px] text-gray-500">初级</span>
                      <span className="w-1/4 border-r border-gray-200 flex items-center justify-center text-[10px] text-gray-500">中级</span>
                      <span className="w-1/4 border-r border-gray-200 flex items-center justify-center text-[10px] text-gray-500">高级</span>
                      <span className="w-1/4 flex items-center justify-center text-[10px] text-gray-500">特级</span>
                    </div>
                  </div>
                </th>
                <th className="p-3 text-xs border-r border-gray-200 text-left min-w-[240px]">岗位职责描述</th>
                <th className="p-3 text-xs border-r border-gray-200 w-12 text-center">启用</th>
              </>
            )}

            {/* Business Columns */}
            {activeTab === 'business' && (
              <>
                <th className="p-3 text-xs border-r border-gray-200 text-left min-w-[160px]">部门配置</th>
                <th className="p-3 text-xs border-r border-gray-200 text-left min-w-[140px]">部门职责</th>
                <th className="p-3 text-xs border-r border-gray-200 text-left min-w-[90px]">职级</th>
                <th className="p-3 text-xs border-r border-gray-200 text-left min-w-[120px]">岗位名称</th>
                <th className="p-3 text-xs border-r border-gray-200 text-left min-w-[120px]">人员名单/数量</th>
                <th colSpan={4} className="p-0 border-r border-gray-200 min-w-[200px]">
                   <div className="h-full flex flex-col">
                    <div className="flex-1 border-b border-gray-200 py-1.5 flex items-center justify-center text-xs">业务职称</div>
                    <div className="flex h-8 bg-white">
                      <span className="w-1/4 border-r border-gray-200 flex items-center justify-center text-[10px] text-gray-500">初级</span>
                      <span className="w-1/4 border-r border-gray-200 flex items-center justify-center text-[10px] text-gray-500">中级</span>
                      <span className="w-1/4 border-r border-gray-200 flex items-center justify-center text-[10px] text-gray-500">高级</span>
                      <span className="w-1/4 flex items-center justify-center text-[10px] text-gray-500">特级</span>
                    </div>
                  </div>
                </th>
                <th className="p-3 text-xs border-r border-gray-200 text-left min-w-[240px]">岗位职责描述</th>
                <th className="p-3 text-xs border-r border-gray-200 w-12 text-center">启用</th>
              </>
            )}
             <th className="p-3 text-xs font-bold text-gray-600 w-16 text-center bg-[#f7f8fa]">操作</th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {layers.map((layer) => {
            const rows = getLayerRows(layer);
            return (
              <React.Fragment key={layer}>
                {rows.map((row, index) => (
                  <tr key={row.id} className="hover:bg-blue-50/20 text-[13px] border-b border-gray-100 group/row transition-colors">
                    
                    {/* Fixed Columns - Vertical Text */}
                    {layer === LayerType.DECISION && index === 0 && (
                      <td rowSpan={totalRowsWithFooters} className="border-r border-gray-200 bg-white text-center font-medium text-xs w-12 writing-vertical py-6 px-2 text-gray-400 select-none">
                        配置标准详解
                      </td>
                    )}
                    
                    {index === 0 && (
                      <td rowSpan={rows.length + 1} className="border-r border-gray-200 bg-[#fcfdfe] text-center font-bold text-xs px-2 text-gray-700">
                        {layer}
                      </td>
                    )}

                    {/* Management Data Cells */}
                    {activeTab === 'management' && (
                      <>
                        <td className="border-r border-gray-100 p-2">{renderSelect(row, 'mgmt_dept', DEPARTMENTS)}</td>
                        <td className="border-r border-gray-100 p-2">{renderInput(row, 'mgmt_resp')}</td>
                        <td className="border-r border-gray-100 p-2">{renderInput(row, 'mgmt_post', 'font-medium text-blue-900', '输入岗位')}</td>
                        <td className="border-r border-gray-100 p-2">{renderInput(row, 'mgmt_rank')}</td>
                        <td className="border-r border-gray-100 p-2 bg-gray-50/30">{renderInput(row, 'mgmt_count')}</td>
                        <td className="border-r border-gray-100 p-2 text-center">{renderCheckbox(row, 'mgmt_constructor_l1')}</td>
                        <td className="border-r border-gray-100 p-2 text-center">{renderCheckbox(row, 'mgmt_constructor_l2')}</td>
                        <td className="border-r border-gray-100 p-2">
                          {renderInput(row, 'mgmt_post_resp')}
                        </td>
                        <td className="border-r border-gray-100 p-2 text-center bg-gray-50/20">{renderCheckbox(row, 'mgmt_selected')}</td>
                      </>
                    )}

                    {/* Technical Data Cells */}
                    {activeTab === 'technical' && (
                      <>
                        <td className="border-r border-gray-100 p-2">{renderSelect(row, 'tech_dept', DEPARTMENTS)}</td>
                        <td className="border-r border-gray-100 p-2">{renderInput(row, 'tech_resp')}</td>
                        <td className="border-r border-gray-100 p-2">{renderInput(row, 'tech_rank')}</td>
                        <td className="border-r border-gray-100 p-2">{renderInput(row, 'tech_post', 'font-medium text-blue-900', '输入岗位')}</td>
                        <td className="border-r border-gray-100 p-2 bg-gray-50/30">{renderInput(row, 'tech_count')}</td>
                        <td className="border-r border-gray-100 p-2 text-center">{renderCheckbox(row, 'tech_eng_junior')}</td>
                        <td className="border-r border-gray-100 p-2 text-center">{renderCheckbox(row, 'tech_eng_mid')}</td>
                        <td className="border-r border-gray-100 p-2 text-center">{renderCheckbox(row, 'tech_eng_senior')}</td>
                        <td className="border-r border-gray-100 p-2 text-center">{renderCheckbox(row, 'tech_eng_special')}</td>
                        <td className="border-r border-gray-100 p-2">
                           {renderInput(row, 'tech_post_resp')}
                        </td>
                        <td className="border-r border-gray-100 p-2 text-center bg-gray-50/20">{renderCheckbox(row, 'tech_selected')}</td>
                      </>
                    )}

                    {/* Business Data Cells */}
                    {activeTab === 'business' && (
                      <>
                        <td className="border-r border-gray-100 p-2">{renderSelect(row, 'biz_dept', DEPARTMENTS)}</td>
                        <td className="border-r border-gray-100 p-2">{renderInput(row, 'biz_resp')}</td>
                        <td className="border-r border-gray-100 p-2">{renderInput(row, 'biz_rank')}</td>
                        <td className="border-r border-gray-100 p-2">{renderInput(row, 'biz_post', 'font-medium text-blue-900', '输入岗位')}</td>
                        <td className="border-r border-gray-100 p-2 bg-gray-50/30">{renderInput(row, 'biz_count')}</td>
                        <td className="border-r border-gray-100 p-2 text-center">{renderCheckbox(row, 'biz_title_junior')}</td>
                        <td className="border-r border-gray-100 p-2 text-center">{renderCheckbox(row, 'biz_title_mid')}</td>
                        <td className="border-r border-gray-100 p-2 text-center">{renderCheckbox(row, 'biz_title_senior')}</td>
                        <td className="border-r border-gray-100 p-2 text-center">{renderCheckbox(row, 'biz_title_special')}</td>
                        <td className="border-r border-gray-100 p-2">
                           {renderInput(row, 'biz_post_resp')}
                        </td>
                        <td className="border-r border-gray-100 p-2 text-center bg-gray-50/20">{renderCheckbox(row, 'biz_selected')}</td>
                      </>
                    )}
                    
                    {/* Delete Action Cell */}
                    <td className="p-2 text-center">
                      <button 
                        onClick={() => onDeleteRow(row.id)}
                        className="text-gray-400 hover:text-red-500 p-1.5 rounded hover:bg-red-50 transition-colors opacity-0 group-hover/row:opacity-100"
                        title="删除此行"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
                
                {/* Add Row Button - Footer for each Layer Group */}
                <tr className="bg-[#fafbfc] border-b border-gray-200">
                  <td colSpan={
                     (activeTab === 'management' ? 9 : 11) + 1 
                  } className="p-0 border-r border-gray-200">
                    <button 
                      onClick={() => onAddRow(layer)}
                      className="w-full py-2 flex items-center justify-center gap-2 text-xs text-gray-400 hover:text-blue-600 hover:bg-blue-50/50 transition-all font-medium"
                    >
                      <div className="w-4 h-4 rounded-full border border-current flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-2.5 h-2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                      </div>
                      添加 {layer} 岗位
                    </button>
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default OrgTable;