import styled from "@emotion/styled";
import { Button, Box, Typography } from "@mui/material";

export const ContactContainer = styled(Box)(() => ({
    width: 'auto',
    display: "flex",
    justifyContent: "center",
    alignItems: "center", 
    flexDirection: "column" as const,
    marginTop: '70px',
    padding: "20px"
}))

export const ContactTitle = styled(Typography)(() => ({
    fontSize: "46px",
    fontWeight:"bold"
}))

export const ContactBody = styled(Typography)(() => ({
    fontSize: "16px",
    paddingBottom: "20px"
}))

export const ProjectsButton = styled(Button)(() => ({
    fontWeight: 'bold',
    fontSize: '16px',
    color: "white",
    backgroundColor: "black",
    lineHeight: '18px',
    marginTop: "15px",
    padding: "15px 80px",
}))