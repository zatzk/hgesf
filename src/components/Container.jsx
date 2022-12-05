import { Box } from '@chakra-ui/react'

export const Container = (props) => (
  <Box
    direction="column"
    alignItems="center"
    justifyContent="flex-start"
    bg="gray.70"
    {...props}
  />
)