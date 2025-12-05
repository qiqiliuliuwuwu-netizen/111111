import React from 'react';

// Icon Helper Component
const Icon: React.FC<{ d: string; className?: string }> = ({ d, className = "w-5 h-5" }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d={d} />
  </svg>
);

export const TopHeader: React.FC = () => {
  return (
    <div className="h-14 bg-white shadow-sm flex items-center justify-between px-6 fixed top-0 right-0 left-64 z-20 border-b border-gray-200 font-sans">
      <div className="flex items-center gap-6">
        <button className="text-gray-400 hover:text-blue-600 transition-colors p-1 rounded-md hover:bg-gray-50">
           <Icon d="M4 6h16M4 12h16M4 18h16" className="w-5 h-5" />
        </button>
        
        <div className="flex items-center gap-8 text-[13px] text-gray-600">
          <div className="flex items-center gap-2 cursor-pointer group transition-colors">
            <span className="text-gray-400 group-hover:text-blue-600">
              <Icon d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </span>
            <span className="font-medium text-gray-700 group-hover:text-blue-600">我的工作台</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer group transition-colors">
            <span className="text-gray-400 group-hover:text-blue-600">
              <Icon d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </span>
            <span className="group-hover:text-blue-600">团队看板</span>
            <svg className="w-3 h-3 text-gray-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
          <div className="flex items-center gap-2 cursor-pointer group transition-colors">
            <span className="text-gray-400 group-hover:text-blue-600">
              <Icon d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </span>
            <span className="group-hover:text-blue-600">BI看板</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
         <div className="flex items-center gap-3 pr-4 border-r border-gray-100">
           <button className="relative text-gray-400 hover:text-blue-600 transition-colors">
              <Icon d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-500 transform translate-x-1/4 -translate-y-1/4"></span>
           </button>
           <button className="text-gray-400 hover:text-blue-600 transition-colors">
              <Icon d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
           </button>
         </div>

         <div className="flex items-center gap-3 pl-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 overflow-hidden border border-blue-200 cursor-pointer hover:ring-2 hover:ring-blue-100 transition-all">
                <span className="text-xs font-bold">Admin</span>
            </div>
            <div className="cursor-pointer text-gray-400 hover:text-blue-600 transition-colors">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
            </div>
         </div>
      </div>
    </div>
  );
};