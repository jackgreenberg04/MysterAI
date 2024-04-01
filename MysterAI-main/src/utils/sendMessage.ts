import { ChatCompletionRequestMessage } from 'openai'

export const sendMessage = async (messages: ChatCompletionRequestMessage[]) => {
  try {
    const response = await fetch('/api/createMessage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ messages })
    })

    if (!response.ok) {
      throw new Error('Failed to send message')
    }

    return await response.json()
  } catch (error) {
    console.error('Error sending message:', error)
    // Optionally rethrow the error to propagate it to the caller
    // throw error;
  }
}
