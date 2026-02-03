import React, { createContext, useContext, useState, useCallback } from 'react'

const ChatContext = createContext(null)

export function ChatProvider({ children }) {
  const [activeChat, setActiveChat] = useState(null)
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [chatHistory, setChatHistory] = useState([])
  const [allUsers, setAllUsers] = useState([])

  const openChat = useCallback((user) => {
    setActiveChat(user)
    setIsChatOpen(true)
    setChatHistory((prev) => {
      const exists = prev.some((c) => c.id === user.id)
      if (exists) return prev
      return [...prev, { ...user, messages: [] }]
    })
  }, [])

  const closeChat = useCallback(() => {
    setIsChatOpen(false)
    setActiveChat(null)
  }, [])

  const sendMessage = useCallback(
    (text) => {
      if (!activeChat) return
      setChatHistory((prev) =>
        prev.map((chat) =>
          chat.id === activeChat.id
            ? { ...chat, messages: [...(chat.messages || []), { sender: 'me', text }] }
            : chat
        )
      )
    },
    [activeChat]
  )

  const switchChat = useCallback((chat) => {
    setActiveChat(chat)
  }, [])

  const value = {
    activeChat,
    chatHistory,
    isChatOpen,
    closeChat,
    sendMessage,
    switchChat,
    openChat,
    allUsers,
    setAllUsers,
  }

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>
}

export function useChat() {
  const ctx = useContext(ChatContext)
  if (!ctx) throw new Error('useChat must be used within ChatProvider')
  return ctx
}
