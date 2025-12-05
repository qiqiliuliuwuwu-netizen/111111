import React from 'react';

// Icon Helper Component
const Icon: React.FC<{ d: string; className?: string }> = ({ d, className = "w-4 h-4" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

const MenuItem = ({ iconPath, label, hasSubmenu = false, active = false, expanded = false }: any) => (
  <div className={`flex items-center px-4 py-3 cursor-pointer text-[13px] transition-all duration-200 group relative ${active ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}>
    {active && <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>}
    <span className={`mr-3 transition-colors ${active ? 'text-blue-600' : 'text-gray-400 group-hover:text-blue-600'}`}>
      <Icon d={iconPath} className="w-[18px] h-[18px]" />
    </span>
    <span className="flex-1 tracking-wide">{label}</span>
    {hasSubmenu && (
      <svg className={`w-3 h-3 text-gray-400 transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    )}
  </div>
);

const SubMenuItem = ({ label, active = false }: any) => (
  <div className={`pl-[3.25rem] pr-4 py-2.5 text-[13px] cursor-pointer transition-colors flex items-center ${active ? 'text-blue-600 font-medium' : 'text-gray-500 hover:text-blue-600'}`}>
    <div className={`w-1.5 h-1.5 rounded-full mr-2.5 transition-colors ${active ? 'bg-blue-600' : 'bg-transparent group-hover:bg-gray-300'}`}></div>
    {label}
  </div>
);

export const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white h-screen shadow-[1px_0_5px_rgba(0,0,0,0.03)] flex flex-col fixed left-0 top-0 z-30 overflow-y-auto border-r border-gray-200 font-sans">
      {/* Logo Area */}
      <div className="h-14 flex items-center px-5 border-b border-gray-100 flex-shrink-0 bg-white">
        <div className="flex items-center gap-3">
           <div className="bg-blue-600 text-white flex items-center justify-center w-7 h-7 rounded text-xs font-bold shadow-sm shadow-blue-200">知</div>
           <span className="text-gray-800 font-bold text-sm tracking-tight">建设项目全生命周期</span>
        </div>
      </div>

      {/* Menu Items */}
      <div className="flex-1 py-4 custom-scrollbar">
        <div className="px-4 mb-2 text-xs font-bold text-gray-400 uppercase tracking-wider">常用应用</div>
        <MenuItem 
          iconPath="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
          label="工作台" 
        />
        <MenuItem 
          iconPath="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
          label="知识库" 
          hasSubmenu 
        />
        <MenuItem 
          iconPath="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" 
          label="客户管理" 
          hasSubmenu 
        />
        
        {/* Active Section */}
        <div className="mt-2 mb-2">
          <MenuItem 
            iconPath="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
            label="组织架构" 
            hasSubmenu 
            expanded 
            active 
          />
          <div className="bg-gray-50/60 pb-3 pt-1">
            <SubMenuItem label="部门及岗位配置" active />
            <SubMenuItem label="历史版本记录" />
            <SubMenuItem label="编制说明" />
          </div>
        </div>

        <div className="px-4 mt-6 mb-2 text-xs font-bold text-gray-400 uppercase tracking-wider">业务中心</div>

        <MenuItem 
          iconPath="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" 
          label="销售目标" 
          hasSubmenu 
        />
        <MenuItem 
          iconPath="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" 
          label="我的客户" 
          hasSubmenu 
        />
        <MenuItem 
          iconPath="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" 
          label="跟进记录" 
          hasSubmenu 
        />
        <MenuItem 
          iconPath="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
          label="售后管理" 
          hasSubmenu 
        />
        <MenuItem 
          iconPath="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" 
          label="商机管理" 
          hasSubmenu 
        />
        <MenuItem 
          iconPath="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
          label="投标管理" 
          hasSubmenu 
        />
        <MenuItem 
          iconPath="M13 10V3L4 14h7v7l9-11h-7z" 
          label="合同管理" 
          hasSubmenu 
        />
        <MenuItem 
          iconPath="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
          label="项目管理" 
          hasSubmenu 
        />
        <MenuItem 
          iconPath="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
          label="财务管理" 
          hasSubmenu 
        />
      </div>
    </div>
  );
};