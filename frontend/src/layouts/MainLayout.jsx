import React from 'react'
import Sidebar from '../ui/Sidebar'
import ChatBox from '../components/chat/ChatBox'

export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen bg-page-bg overflow-hidden">
      <Sidebar />
      <main className="flex-1 flex flex-col bg-page-bg overflow-y-auto">
        <div className="flex-1 p-8">{children}</div>
        <footer className="shrink-0 px-8 py-4 mt-auto border-t border-[#e6e6e6] bg-page-bg">
          <p className="m-0 text-xs text-[#666]">
            © 2013 Highly Succeed Inc. All rights reserved.
          </p>
        </footer>
      </main>
      <ChatBox />
    </div>
  )
}
