import { Button, TextArea } from '@apideck/components'
import { useState } from 'react'
import { useMessages } from 'utils/useMessages'

const MessageForm = () => {
  const [content, setContent] = useState('')
  const { addMessage } = useMessages()

  const handleSubmit = async (e?: any) => {
    e?.preventDefault()
    addMessage(content)
    setContent('')
  }

  return (
    <form
      className="relative mx-auto max-w-3xl rounded-t-xl bg-black animatedBackground"
      onSubmit={handleSubmit}
    >
      <div className="h-[130px] rounded-t-xl backdrop-blur border-t border-l border-r border-orange-500/10 bg-black/95 p-5">
        <label htmlFor="content" className="sr-only">
          Your message
        </label>
        <TextArea
          name="content"
          placeholder="Enter your message here..."
          rows={3}
          value={content}
          autoFocus
          className="!p-3 text-gray-200 border-0 ring-1 ring-orange-500/40 focus:ring-orange-500/80 focus:outline-none placeholder-gray-400 bg-gray-800/80 backdrop-blur shadow-none"
          onChange={(e: any) => setContent(e.target.value)}
        />
        <div className="absolute right-8 bottom-10">
          <div className="flex space-x-3">
            <Button
              className="bg-orange-500 hover:bg-orange-600 focus:ring-orange-500/50 text-black"
              type="submit"
              size="small"
            >
              Send
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4 ml-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default MessageForm
