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
  return (
    <Modal isOpen={isOpen} onClose={closeModal}>
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
            <Text>
              {answers}
            </Text>
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