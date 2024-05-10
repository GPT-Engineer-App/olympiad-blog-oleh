import { Container, Heading, Text, VStack, Image, Box, Link } from "@chakra-ui/react";
import { FaMedal } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" p={4}>
      <VStack spacing={8}>
        <Box textAlign="center">
          <Heading as="h1" size="2xl" mb={4}>
            Oleh Naver: IOI 2022 Gold Medalist
          </Heading>
          <Icon as={FaMedal} w={10} h={10} color="yellow.400" />
        </Box>
        <Image src="https://images.unsplash.com/photo-1640942468077-cf60c4e3787f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxPbGVoJTIwTmF2ZXIlMjBJT0klMjAyMDIyfGVufDB8fHx8MTcxNTM0OTk0Nnww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="lg" />
        <Text fontSize="xl" textAlign="justify">
          Oleh Naver, a prodigious talent in the field of computer science, clinched the gold medal at the prestigious International Olympiad in Informatics (IOI) in 2022. His remarkable problem-solving skills and innovative approaches to complex algorithms set him apart from competitors, earning him top honors at the global event.
        </Text>
        <Text fontSize="xl" textAlign="justify">
          The IOI is one of the most recognized computer science competitions in the world, drawing participants from over 80 countries. Competitors face challenging problems that test their understanding of algorithms, programming, and critical thinking. Oleh's performance not only showcased his technical prowess but also placed him as a leading figure among young programmers worldwide.
        </Text>
        <Text fontSize="xl" textAlign="justify">
          Oleh's journey to the IOI gold medal was supported by his dedication to mastering the fundamentals of computer science, as well as his participation in numerous national and international contests. His achievement serves as an inspiration to aspiring computer scientists and highlights the importance of perseverance and passion in achieving excellence.
        </Text>
        <Link href="https://www.recursivedragon.com" isExternal color="blue.500">
          Visit Recursive Dragon
        </Link>
      </VStack>
    </Container>
  );
};

export default Index;
