import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    PinInput,
    PinInputField,
    useDisclosure,Button,HStack
} from '@chakra-ui/react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'

const Pin=()=> {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [value,setvalue]=useState();
    const navigate=useNavigate();
    const toast = useToast()
    
    const handleotp=()=>{
        if(value==='1234'){
            toast({
                title: `Payment successful`,
                status: "success",
                isClosable: true,
              })
            navigate("/")
            onClose();
        }
    }
   

    return (
        <>
            <Button colorScheme={"red"} onClick={onOpen} w="100%"   mt={4} _hover={StyleSheet={bgColor:"red"}}>Pay Now</Button>

            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Enter OTP</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <HStack >
                            {/* otp */}
                            <PinInput m={"auto"} otp onChange={(e)=>{setvalue(e)}}>
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                                <PinInputField />
                            </PinInput>
                        </HStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={ handleotp} m="auto">Verify</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default Pin;