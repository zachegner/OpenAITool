import { useState } from "react"
import { Textarea, Button, useToast } from "@chakra-ui/react"

const TextInput = ({ extractAnswers }) => {
  const [text, setText] = useState('')

  const toast = useToast();

  const submitText = () => {
    if (text === '') {
      toast({
        title: 'Text field is empty',
        description: 'Please enter a question',
        status: 'error',
        duration: 3000,
        isCloseable: false
      })
    } else {
      extractAnswers(text)
    }
  }

  return (
    <>
      <Textarea
        bg='blue.500'
        color='white'
        padding={4}
        marginTop={6}
        height={200}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <Button
        bg='blue.400'
        color='white'
        marginTop={4}
        width='100%'
        _hover={{ bg: 'blue.500' }}
        onClick={submitText}
      >
        Ask Question
      </Button>
    </>
  )
}

export default TextInput