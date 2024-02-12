
import { useState, useContext, useEffect } from 'react';
import React from 'react'
import dayGridPlugin from '@fullcalendar/daygrid'
import FullCalendar from '@fullcalendar/react';
import interactionPlugin from "@fullcalendar/interaction"
import { Box, Button, Flex, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import { formatDate } from '@fullcalendar/core';
import { useUser } from '../hook/useUserAuth';

const Reservas = () => {
    const [date, setDate] = useState()
    const [time, setTime] = useState()
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const { user } = useUser();

    useEffect(() => {
        if (user.isAuthenticated) {
            setName(user.name);
            setEmail(user.email);
        }
    }, [user]);
    const handleDateClick = (info) => {
        if (info.date <= Date.now()) {
            alert("Seleccione una fecha actual")
        } else {
            setDate(info.date)
            let date = new Date()
            let currentTime = date.getHours() + ":" + date.getMinutes()
            setTime(currentTime)
            console.log(time)
        }
    };


    return (
        <div className='grid grid-cols-2 grid-rows-1 h-screen bg-TERCIARY calendar'>

            <div className='flex justify-center items-center h-screen w-[60vw] '>
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin]}
                    height='70vh'
                    dateClick={handleDateClick}
                    events={[
                        { title: 'Reserva', date: date }
                    ]}
                />
            </div>
            <Flex width="full" align="center" justifyContent="center"  >
                <Box height={"80vh"} p={8} maxWidth={"500px"} borderWidth={1} borderRadius={8} boxShadow="lg">
                    <Box textAlign="center">
                        <Heading>Reserva</Heading>
                    </Box>
                    <Box my={4} textAlign="left">
                        <FormControl>
                            <FormLabel>Email</FormLabel>
                            <Input type="email" placeholder="test@test.com" value={email} />
                        </FormControl>
                        <FormControl mt={6}>
                            <FormLabel>Nombre</FormLabel>
                            <Input type="text" placeholder="username" value={name} />
                        </FormControl>
                        <FormControl mt={6}>
                            <FormLabel>Dia</FormLabel>
                            <Input type="text" value={formatDate(date)} />
                        </FormControl>
                        <FormControl mt={6}>
                            <FormLabel>Hora</FormLabel>
                            <Input type="text" />
                        </FormControl>
                        <Button width="full" mt={4} type="submit">
                            Reservar
                        </Button>
                    </Box>
                </Box>
            </Flex>
        </div>
    );

}


export default Reservas