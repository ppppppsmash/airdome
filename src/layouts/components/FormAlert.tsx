import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react"

const FormAlert = ({ status, infoTitle, info } : { 
  status: "info" | "warning" | "success" | "error" | "loading" | undefined;
  infoTitle: string; info: string }) => {
  return (
    <Alert status={status}>
      <AlertIcon />
      <AlertTitle>{infoTitle}</AlertTitle>
      <AlertDescription>{info}</AlertDescription>
    </Alert>

  )
}

export default FormAlert;