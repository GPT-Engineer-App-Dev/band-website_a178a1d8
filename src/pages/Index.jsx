import { Box, Flex, Heading, Text, Button, Image, VStack, Link } from "@chakra-ui/react";
import { FaTicketAlt, FaInstagram, FaTwitter, FaFacebookF, FaSpotify } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex direction="column" align="center" m={8}>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiYW5kJTIwb24lMjBzdGFnZXxlbnwwfHx8fDE3MTM0MTkzNTB8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Band Image" mb={4} />
        <Heading as="h1" size="xl" mb={2}>
          The Echoes
        </Heading>
        <Text fontSize="lg" mb={4}>
          Join us on our world tour 2023!
        </Text>
        <Button leftIcon={<FaTicketAlt />} colorScheme="teal" variant="solid">
          Get Tickets
        </Button>
      </Flex>

      <VStack spacing={4} mt={10} align="center">
        <Heading as="h2" size="lg">
          Tour Dates
        </Heading>
        <Text>Los Angeles - 20th July</Text>
        <Text>New York - 5th August</Text>
        <Text>London - 15th August</Text>
        <Text>Tokyo - 1st September</Text>
      </VStack>

      <Flex justify="center" mt={10} mb={4}>
        <Link href="https://instagram.com" isExternal mx={2}>
          <FaInstagram size="2em" />
        </Link>
        <Link href="https://twitter.com" isExternal mx={2}>
          <FaTwitter size="2em" />
        </Link>
        <Link href="https://facebook.com" isExternal mx={2}>
          <FaFacebookF size="2em" />
        </Link>
        <Link href="https://spotify.com" isExternal mx={2}>
          <FaSpotify size="2em" />
        </Link>
      </Flex>
    </Box>
  );
};

export default Index;
