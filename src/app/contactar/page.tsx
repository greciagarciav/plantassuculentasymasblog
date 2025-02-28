"use client"

import * as React from 'react';
import Container from "@/app/_components/container";
import { Intro } from "@/app/_components/intro";
import emailjs from '@emailjs/browser';
import { ContactContainer, ContactTitle, ContactBody } from './Contact.styled';
import { ProjectsButton } from "./Contact.styled"
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Contact = () => {  
    
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [stateMessage, setStateMessage] = React.useState('');

    const sendEmail = (e: any) => {
        e.persist();
        e.preventDefault();
        setIsSubmitting(true);
        emailjs
          .sendForm(
            'service_9srx5h7',
            'template_nciwoyr',
            e.target,
            '7zqC7iLg5huFQUcKu'
          )
          .then(
            (result) => {
              setStateMessage('Mensaje enviado!');
              setIsSubmitting(false);
              setTimeout(() => {
                setStateMessage('');
              }, 5000); // hide message after 5 seconds
            },
            (error) => {
              setStateMessage('Algo salió mal, intenta luego');
              setIsSubmitting(false);
              setTimeout(() => {
                setStateMessage('');
              }, 5000); // hide message after 5 seconds
            }
          );
        
        // Clears the form after sending the email
        e.target.reset();
      };

    return (
        <Container>
            <Intro />
            <ContactContainer sx={{textAlign: "center"}}>
            <ContactTitle>CONTACTAR</ContactTitle>
                <ContactBody>Contactate conmigo enviando el siguiente formulario. Me pondré en contacto contigo lo antes posible.</ContactBody>
                <Box onSubmit={sendEmail} component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1 },
                        display: "flex", flexDirection: "column", width: "100%", margin: "0px 10px"
                    }}
                    noValidate
                    autoComplete="off">
                    
                        <TextField fullWidth
                            required
                            type="text"
                            id="name"
                            label="Nombre"
                            name="to_name"                        
                        />
                        <TextField fullWidth
                            required
                            type="email"
                            id="email"
                            label="Correo"
                            name="from_name"                        
                        />                                      
                        <TextField fullWidth
                                required                           
                                id="message"
                                label="Mensaje"
                                name="message"
                                multiline
                                rows={5}                            
                        />
                        <ProjectsButton type="submit" variant="contained" disabled={isSubmitting}>SUBMIT</ProjectsButton>
                        {stateMessage && <p>{stateMessage}</p>}
                </Box>
            </ContactContainer>
        </Container>
        
      );
} 

export default Contact;