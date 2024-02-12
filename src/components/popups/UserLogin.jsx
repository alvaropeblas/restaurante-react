import React, { useRef, useState } from 'react';
import {
    Button,
    FormControl,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure
} from "@chakra-ui/react";
import { userLogin } from '../../services/user';
import { useUser } from '../hook/useUserAuth';
const UserLogin = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { login } = useUser()
    const initialRef = useRef(null);
    const finalRef = useRef(null);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleLogin = async () => {
        try {
            const userResponse = await userLogin(formData);
            const user = userResponse;
            onClose();
            login(user);
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    return (
        <>
            <Button onClick={onOpen} height="4vh">Login</Button>
            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Login</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <FormControl mt={4}>
                            <FormLabel>Email</FormLabel>
                            <Input
                                name="email"
                                placeholder='email@email.com'
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Password</FormLabel>
                            <Input
                                name="password"
                                placeholder='*********'
                                type="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={handleLogin}>
                            Login
                        </Button>
                        <Button onClick={onClose}>Cancelar</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default UserLogin;
