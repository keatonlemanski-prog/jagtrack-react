import { useState, useRef, useEffect } from 'react'
import { Container, Title, Textarea, Button, Paper, Text, Group } from '@mantine/core'
import { HfInference } from '@huggingface/inference'
import './AIChatPage.css'




function AIChatPage() {
  // STATE MANAGEMENT (replaces vanilla JS DOM manipulation)
  // This array stores all chat messages
  const [messages, setMessages] = useState([])


  // This stores what the user is currently typing
  const [userInput, setUserInput] = useState('')


  // This tracks if the AI is currently responding
  const [isLoading, setIsLoading] = useState(false)


  // REF FOR AUTO-SCROLL (like getElementById but the React way)
  const chatDisplayRef = useRef(null)




  // ALWAYS USE DEMO MODE - No API required!
  // This ensures all students can complete the assignment without API issues
  // For real AI responses, see the Extra Credit section in the instructions
  const FORCE_DEMO_MODE = true




  // GET API KEY FROM ENVIRONMENT VARIABLE (only used if FORCE_DEMO_MODE is false)
  const API_KEY = import.meta.env.VITE_HF_API_KEY
  const hf = API_KEY ? new HfInference(API_KEY) : null




  // AUTO-SCROLL TO BOTTOM WHEN NEW MESSAGES ARRIVE
  // useEffect runs code after the component updates
  useEffect(() => {
    if (chatDisplayRef.current) {
      chatDisplayRef.current.scrollTop = chatDisplayRef.current.scrollHeight
    }
  }, [messages]) // Run this whenever messages change




  // FUNCTION TO SEND MESSAGE TO AI
  const handleSendMessage = async () => {
    // Don't send empty messages
    if (!userInput.trim()) return




    const question = userInput
    setUserInput('')
    addMessage(question, true)
    setIsLoading(true)




    // DEMO MODE: Always use demo responses (safe, reliable, no API needed)
    if (FORCE_DEMO_MODE || !API_KEY) {
      setTimeout(() => {
        const demoResponses = [
          "I can help you understand that topic! This is demo mode - it demonstrates how the AI chat interface works.",
          "That's a great question! In demo mode, I provide simulated responses to show how the chat works.",
          "I'd love to help with that! This is demo mode, which lets you test the chat interface. For real AI responses, check out the Extra Credit section in your instructions.",
          "Great question! This chat is running in demo mode, which means you can explore the interface without needing API access.",
          "That's an interesting topic! Demo mode provides example responses so you can complete the assignment without API complications."
        ]
        const randomResponse = demoResponses[Math.floor(Math.random() * demoResponses.length)]
        addMessage(`[DEMO MODE] ${randomResponse}`, false)
        setIsLoading(false)
      }, 1000)
      return
    }




    // Real AI code (only runs if FORCE_DEMO_MODE is set to false)
    // Students: See Extra Credit section to enable this




    try {
      // Try Hugging Face API
      const response = await hf.textGeneration({
        model: "distilgpt2",
        inputs: `Question: ${question}\nAnswer:`,
        parameters: {
          max_new_tokens: 150,
          temperature: 0.8,
          top_p: 0.95,
          return_full_text: false
        }
      })




      if (response && response.generated_text) {
        addMessage(response.generated_text, false)
      } else {
        addMessage('Sorry, I could not generate a response. The AI Chat is in demo mode.', false, true)
      }




    } catch (error) {
      console.error('Error:', error)
      // Fallback to demo mode if API fails
      addMessage(
        `[DEMO MODE] I understand you're asking about "${question.substring(0, 50)}...". ` +
        `Note: Hugging Face's free API has restrictions. This is a demo response. ` +
        `For full AI responses, you may need to upgrade your Hugging Face account or use a different AI service.`,
        false
      )
    } finally {
      setIsLoading(false)
    }
  }




  // FUNCTION TO ADD MESSAGE TO STATE
  // Replaces: chatDisplay.appendChild(messageDiv)
  const addMessage = (content, isUser = false, isError = false) => {
    setMessages(prev => [...prev, { content, isUser, isError }])
  }




  // USE TEMPLATE BUTTON
  const useTemplate = () => {
    setUserInput('Help me understand [topic] for my [class name] class')
  }




  // HANDLE ENTER KEY TO SEND
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }




  // RENDER THE COMPONENT
  return (
    <Container size="md" py="xl">
      <div className="chat-container-page">
        <Title order={2} ta="center" mb="md">AI Chat Assistant</Title>




        {/* CHAT DISPLAY AREA */}
        <Paper
          shadow="sm"
          p="md"
          radius="md"
          withBorder
          className="chat-display"
          ref={chatDisplayRef}
        >
          {messages.length === 0 ? (
            // Welcome message when no messages yet
            <Text c="dimmed" ta="center" fs="italic" p="xl">
              👋 Welcome! Ask me anything to get started.
            </Text>
          ) : (
            // Map over messages array to render each message
            messages.map((msg, index) => (
              <Paper
                key={index}
                p="md"
                radius="md"
                className={msg.isUser ? 'user-message' : (msg.isError ? 'error-message' : 'ai-message')}
              >
                {msg.content}
              </Paper>
            ))
          )}
        </Paper>




        {/* SUGGESTED QUESTION TEMPLATE */}
        <Paper
          shadow="sm"
          p="md"
          radius="md"
          withBorder
          mt="md"
          style={{ backgroundColor: '#f0f9ff', borderColor: '#3b82f6' }}
        >
          <Text size="sm" fw={600} c="#1e40af" mb="xs">
            💡 Suggested Question Template:
          </Text>
          <Paper
            p="sm"
            radius="md"
            mb="sm"
            style={{ backgroundColor: 'white', border: '1px solid #bfdbfe' }}
          >
            <Text fs="italic" c="dimmed">
              Help me understand [topic] for my [class name] class
            </Text>
          </Paper>
          <Button size="sm" onClick={useTemplate}>Use This Template</Button>
        </Paper>




        {/* INPUT AREA */}
        <Group mt="md" align="flex-end">
          <Textarea
            flex={1}
            placeholder="Type your question here..."
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyDown}
            minRows={3}
            disabled={isLoading}
          />
          <Button
            onClick={handleSendMessage}
            disabled={isLoading || !userInput.trim()}
          >
            {isLoading ? 'Thinking...' : 'Send'}
          </Button>
        </Group>
      </div>
    </Container>
  )
}




export default AIChatPage
