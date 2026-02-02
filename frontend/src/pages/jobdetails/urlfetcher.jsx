import React, { useState } from 'react'

export default function CopyUrlButton({ url }) {
  const initial = url || (typeof window !== 'undefined' && window.location.href) || ''
  const [value, setValue] = useState(initial)
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (e) {
      console.error('copy failed', e)
    }
  }

  return (
    <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        style={{ flex: 1, padding: '8px 10px', borderRadius: 8, border: '1px solid #e6e6e6' }}
      />
      <button
        onClick={handleCopy}
        style={{
          background: '#DAB619',
          color: '#fff',
          border: 'none',
          padding: '8px 12px',
          borderRadius: 8,
          minWidth: 80,
        }}
      >
        {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  )
}