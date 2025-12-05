import React, { useState } from 'react';
import OrgTable from './components/OrgTable';
import { Sidebar } from './components/Sidebar';
import { TopHeader } from './components/TopHeader';
import { INITIAL_DATA } from './constants';
import { TableRow, LayerType } from './types';

export type TabType = 'management' | 'technical' | 'business';

const App: React.FC = () => {
  const [data, setData] = useState<TableRow[]>(INITIAL_DATA);
  const [activeTab, setActiveTab] = useState<TabType>('management');

  const tabs = [
    { id: 'management', label: '管理岗配置' },
    { id: 'technical', label: '技术岗配置' },
    { id: 'business', label: '业务岗配置' },
  ] as const;

  const handleExport = () => {
    const headers = ['Layer', 'Mgmt Dept', 'Mgmt Post', 'Tech Dept', 'Tech Post', 'Biz Dept', 'Biz Post'];
    const csvContent = "data:text/csv;charset=utf-8," 
      + headers.join(",") + "\n"
      + data.map(row => {
          return [row.layer, row.mgmt_dept, row.mgmt_post, row.tech_dept, row.tech_post, row.biz_dept, row.biz_post].join(",");
      }).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "org_structure.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAddRow = (layer: LayerType) => {
    const newId = Date.now().toString();
    const newRow: TableRow = {
      id: newId,
      layer,
      mgmt_dept: '', mgmt_resp: '', mgmt_post: '', mgmt_rank: '', mgmt_count: '', mgmt_constructor_l1: false, mgmt_constructor_l2: false, mgmt_post_resp: '', mgmt_selected: false,
      tech_dept: '', tech_resp: '', tech_rank: '', tech_post: '', tech_count: '', tech_eng_junior: false, tech_eng_mid: false, tech_eng_senior: false, tech_eng_special: false, tech_post_resp: '', tech_selected: false,
      biz_dept: '', biz_resp: '', biz_rank: '', biz_post: '', biz_count: '', biz_title_junior: false, biz_title_mid: false, biz_title_senior: false, biz_title_special: false, biz_post_resp: '', biz_selected: false,
    };
    
    const lastIndex = data.findLastIndex(row => row.layer === layer);
    if (lastIndex === -1) {
      setData(prev => [...prev, newRow]);
    } else {
      setData(prev => {
        const newData = [...prev];
        newData.splice(lastIndex + 1, 0, newRow);
        return newData;
      });
    }
  };

  const handleDeleteRow = (id: string) => {
    if (window.confirm('确定要删除此行吗？')) {
      setData(prev => prev.filter(row => row.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5] font-sans text-gray-800">
      <Sidebar />
      <TopHeader />
      
      {/* Main Layout Offset for Sidebar and Header */}
      <div className="pl-64 pt-14 transition-all duration-300 ease-in-out">
        <div className="p-5 max-w-full">
          
          {/* Breadcrumbs */}
          <div className="flex items-center text-sm text-gray-500 mb-4">
             <span className="hover:text-blue-600 cursor-pointer transition-colors">首页</span>
             <span className="mx-2 text-gray-300">/</span>
             <span className="hover:text-blue-600 cursor-pointer transition-colors">组织架构</span>
             <span className="mx-2 text-gray-300">/</span>
             <span className="text-gray-900 font-medium">配置管理</span>
          </div>

          {/* The "Red Box" Content Area - White Card */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 min-h-[calc(100vh-140px)] flex flex-col">
            
            {/* Inner Header */}
            <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-white rounded-t-lg">
              <div className="flex items-center">
                 <div className="h-4 w-1 bg-blue-600 rounded-full mr-3"></div>
                 <h1 className="text-base font-bold text-gray-800 leading-none">
                  组织架构部门设置及岗位配置
                </h1>
                <span className="ml-4 text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  当前版本: V2.4
                </span>
              </div>
              
              <div className="flex gap-3">
                <button 
                  onClick={handleExport}
                  className="flex items-center gap-1.5 text-xs px-4 py-2 bg-white border border-gray-200 text-gray-600 hover:text-blue-600 hover:border-blue-600 rounded transition-all shadow-sm"
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                  导出数据
                </button>
              </div>
            </div>

            {/* Inner Content Padding */}
            <div className="p-6 space-y-6 flex-1 bg-white rounded-b-lg">
              
              {/* Tab Navigation - Modern B-end Style */}
              <div className="flex border-b border-gray-200">
                {tabs.map((tab) => {
                  const isActive = activeTab === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id as TabType)}
                      className={`relative mr-6 py-3 text-sm font-medium transition-colors ${
                        isActive 
                          ? `text-blue-600` 
                          : `text-gray-600 hover:text-gray-900`
                      }`}
                    >
                      {tab.label}
                      {isActive && (
                        <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-600 rounded-t-sm"></span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* The Org Table */}
              <OrgTable 
                data={data} 
                setData={setData} 
                activeTab={activeTab} 
                onAddRow={handleAddRow}
                onDeleteRow={handleDeleteRow}
              />
              
              {/* Footer Actions */}
              <div className="pt-4 flex items-center gap-4 justify-end border-t border-gray-100 mt-4">
                 <span className="text-xs text-gray-400 mr-auto">数据最后自动保存于 10:42</span>
                 <button className="px-5 py-2 bg-white border border-gray-300 text-gray-600 text-sm rounded hover:bg-gray-50 hover:text-gray-900 transition-colors">
                  重置
                </button>
                <button className="px-6 py-2 bg-blue-600 text-white text-sm rounded shadow-sm hover:bg-blue-700 transition-all hover:shadow">
                  保存所有配置
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;