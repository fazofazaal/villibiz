import Image from "next/image";
import {
  chakra,
  Flex,
  Heading,
  Text,
  Box,
  IconButton,
  Link,
  Stack,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { PhoneIcon, ChatIcon } from "@chakra-ui/icons";
import { FaViber } from "react-icons/fa";

export default function BusinessCard(props) {
  const ChakraImage = chakra(Image, {
    baseStyle: { maxH: 120, maxW: 120, rounded: "xl" },
    shouldForwardProp: (prop) =>
      ["width", "height", "src", "alt"].includes(prop),
  });

  return (
    <Box
      maxW="sm"
      minW="sm"
      borderRadius="2xl"
      borderWidth="0.5px"
      borderColor="gray.100"
      overflow="hidden"
      bgColor="white"
      boxShadow="sm"
    >
      <Stack direction="row" p="3" w="100%">
        <ChakraImage
          mr="4"
          src={props.image}
          alt={`Image of ${props.name}`}
          width={120}
          height={120}
          borderRadius={"xl"}
        />
        <Stack direction="column" w="64%" pl={2}>
          <Heading as="h3" size="md">
            {props.name}
          </Heading>
          <Text fontSize="sm" h="100%">
            {/* {props.description} */}
            This is a dummy business that helps users steal money from the
          </Text>
          <Stack direction="row" spacing="3" justifyContent="flex-end">
            <Link href={`viber://chat/?number=%2B960${props.phone}`}>
              <IconButton
                bg="purple.100"
                color="purple"
                size="sm"
                aria-label="Message on Viber"
                icon={<FaViber />}
              />
            </Link>
            <Link href={`sms:+960${props.phone}`}>
              <IconButton
                bg="blue.100"
                color="blue"
                size="sm"
                aria-label="Send SMS"
                icon={<ChatIcon />}
              />
            </Link>
            <Link href={`tel:+960${props.phone}`}>
              <IconButton
                bg="green.100"
                color="green"
                size="sm"
                aria-label="Make a phone call"
                icon={<PhoneIcon />}
              />
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

{
  /* <VStack ml="6" w="60%">
  <VStack align="flex-start">
    <Heading as="h3" size="md">
      {props.name}
    </Heading>
    <Text>{props.description}</Text>
  </VStack>
  <HStack mt={4} spacing={3} ml="auto">
    
  </HStack>
</VStack>; */
}
