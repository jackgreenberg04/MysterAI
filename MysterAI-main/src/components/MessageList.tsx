import React from 'react'
import { useMessages } from 'utils/useMessages'

const MessagesList = () => {
  const { messages, isLoadingAnswer } = useMessages()

  // Function to render message content with Markdown-like code blocks
  const renderContent = (content: string) => {
    const segments = content.split(/(```[a-z]*\n[\s\S]*?\n```)/g)
    return segments.map((segment, index) => {
      if (segment.startsWith('```')) {
        const code = segment.replace(/```[a-z]*\n([\s\S]*?)\n```/, '$1')
        return (
          <pre
            key={index}
            style={{ backgroundColor: 'transparent', padding: '10px', borderRadius: '5px' }}
          >
            <code>{code}</code>
          </pre>
        )
      }
      return segment.split('\n').map((line, lineIndex) => (
        <React.Fragment key={lineIndex}>
          {line}
          <br />
        </React.Fragment>
      ))
    })
  }

  return (
    <div
      className="max-w-3xl mx-auto pt-8 p-12 rounded-lg border border-1 border-gray animatedBackground"
      style={{ maxHeight: '80vh', overflowY: 'auto' }}
    >
      {messages?.map((message, i) => {
        if (message.role === 'system') return null
        const isUser = message.role === 'user'

        return (
          <div
            id={`message-${i}`}
            className={`flex mb-4 fade-up ${isUser ? 'justify-end' : 'justify-start'} ${
              i === 1 ? 'max-w-md' : ''
            }`}
            key={i}
          >
            {!isUser && (
              <img
                src="https://www.teamsmart.ai/next-assets/team/ai.jpg"
                className="w-9 h-9 rounded-full"
                alt="avatar"
              />
            )}
            <div
              style={{
                maxWidth: 'calc(100% - 45px)'
              }}
              className={`group relative px-3 py-2 rounded-lg ${
                isUser
                  ? 'mr-2 bg-gradient-to-br from-orange-600 to-orange-500 text-white'
                  : 'ml-2 bg-gray-700 text-orange-500' // Made the non-user messages a bit darker for consistency
              }`}
            >
              {renderContent(message.content.trim())}
            </div>
            {isUser && (
              <img
                src="https://www.teamsmart.ai/next-assets/profile-image.png"
                className="w-9 h-9 rounded-full cursor-pointer"
                alt="avatar"
              />
            )}
          </div>
        )
      })}
      {isLoadingAnswer && (
        <div className="flex justify-start mb-4">
          <img
            src="https://www.teamsmart.ai/next-assets/team/ai.jpg"
            className="w-9 h-9 rounded-full"
            alt="avatar"
          />
          <div className="loader">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </div>
  )
}

export default MessagesList
