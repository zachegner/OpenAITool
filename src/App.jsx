import { Container, Box } from "@chakra-ui/react"
import { useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import TextInput from "./components/TextInput"
import KeywordsModal from "./components/KeywordsModal"

const App = () => {
  const [keywords, setKeywords] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const extractKeywords = async (text) => {
    setLoading(true)
    setIsOpen(true)

    console.log(typeof text)

    const options= {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        // messages: `Extract keywords from this text. Make the first letter of each word uppercase and seperate with commas\n\n\ ${text}`,
        messages: [
          {"role": "system", "content": "You a fitness and healthcare expert.  The user can ask you any question pertaining to fitness or health, but if they ask anything else, tell them you are sorry and cannot answer any questions that do not have to do with fitness or health."},
          {"role": "user", "content": `${text}`},
        ],
        temperature: 0.6,
        max_tokens: 100,
        frequency_penalty: 0.8
      })
    }
    const response = await fetch(import.meta.env.VITE_OPENAI_API_URL, options)
    console.log(response)

    const json = await response.json()

    console.log(json)
    const data = json.choices[0].message.content

    console.log(data)
    setKeywords(data)
    setLoading(false)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    <Box bg='blue.800' color='white' height='100vh' paddingTop={130}>
      <Container maxW='3xl' centerContent>
        <Header />
        <TextInput extractKeywords={extractKeywords} />
        <Footer />
      </Container>
      <KeywordsModal keywords={keywords} loading={loading} isOpen={isOpen} closeModal={closeModal} />
    </Box>
  )
}

export default App