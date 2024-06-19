import { Container, Text, VStack, Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="blue.500" color="white" padding="1.5rem" justifyContent="space-between">
        <Box fontWeight="bold">MyApp</Box>
        <Box>
          <Link as={RouterLink} to="/" margin="0 1rem" color="white">
            Home
          </Link>
          <Link as={RouterLink} to="/about" margin="0 1rem" color="white">
            About
          </Link>
          <Link as={RouterLink} to="/csv-editor" margin="0 1rem" color="white">
            CSV Editor
          </Link>
        </Box>
      </Flex>
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Text fontSize="2xl">Your Blank Canvas</Text>
          <Text>Chat with the agent to start making edits.</Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;