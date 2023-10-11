import { Heading, Image, Text } from '@chakra-ui/react'
import logo from '../assets/fitness.ico'

const Header = () => {
  return (
    <>
      <Image src={logo} alt='logo' width={100} marginBottom='1rem' />
      <Heading color='white' marginBottom='1rem'>
        Fitness Expert
      </Heading>
      <Text>
        Ask a fitness related question. This chatbot will not answer beyond the scope of fitness.
      </Text>
    </>
  )
}

export default Header