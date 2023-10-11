import { Box, Image, Text, Flex, Link } from '@chakra-ui/react'
import logo from '../assets/openai.png'
import webLogo from '../assets/webLogo.ico'

const Footer = () => {
  return (
    <Box marginTop={50}>
      <Flex justifyContent='center' alignItems='center'>
        <Image src={logo} marginRight={1}></Image>
        <Text>Powered By OpenAi</Text>
      </Flex>
      <Link href='https://zachegner.com' isExternal>
        <Flex justifyContent='center' alignItems='center'>
          <Image src={webLogo} marginRight={1} width={6}></Image>
          <Text>Designed by Zach Egner</Text>
        </Flex>
      </Link>
      <Flex justifyContent='center' alignItems='center'>
          <Text>This app is intended for demo purposes only. Contact for a customized chatbot.</Text>
        </Flex>
    </Box>
  )
}

export default Footer