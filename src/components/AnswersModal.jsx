import {
  Text,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  CircularProgress
} from '@chakra-ui/react'

const AnswersModal = ({ answers, loading, isOpen, closeModal }) => {
  const lines = answers.split('\n')

  return (
    <Modal isOpen={isOpen} onClose={closeModal} size={'xl'}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          Answer
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody display='flex' alignItems='center' justifyItems='center'>
          {loading ? (
            <CircularProgress isIndeterminate color='blue.300' />
          ) : (
            <div>
              {lines.map((line, index) => (
                <Text key={index}>{line == '' ? '~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~' : line}</Text>
              ))}
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={closeModal}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default AnswersModal