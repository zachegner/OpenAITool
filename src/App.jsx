import { Container, Box } from "@chakra-ui/react"
import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import TextInput from "./components/TextInput"
import AnswersModal from "./components/AnswersModal"

const App = () => {
  const [answers, setAnswers] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const extractAnswers = async (text) => {
    setLoading(true)
    setIsOpen(true)

    //console.log(typeof text)
    //console.log(import.meta.env.VITE_OPENAI_API_KEY)

    const options= {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        // messages: `Extract answers from this text. Make the first letter of each word uppercase and seperate with commas\n\n\ ${text}`,
        messages: [
          {"role": "system", "content": "You a fitness and healthcare expert.  The user can ask you any question pertaining to fitness or health, but if they ask anything else, tell them you are sorry and cannot answer any questions that do not have to do with fitness or health."},
          {"role": "user", "content": `${text}`},
        ],
        temperature: 0.6,
        max_tokens: 300,
        frequency_penalty: 0.8
      })
    }
    const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options)
    //console.log(response)

    const json = await response.json()

    //console.log(json)
    const data = json.choices[0].message.content

    //console.log(data)
    setAnswers(data)
    setLoading(false)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Box bg='blue.700' color='white' height='100vh' paddingTop={130}>
      <Container maxW='3xl' centerContent bg='blue.700'>
        <Header />
        <TextInput extractAnswers={extractAnswers} />
        <Footer />
      </Container>
      <AnswersModal answers={answers} loading={loading} isOpen={isOpen} closeModal={closeModal} />
    </Box>
  )
}

export default App