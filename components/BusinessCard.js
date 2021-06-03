import Image from "next/image";
import {
  chakra,
  Flex,
  Heading,
  Text,
  Box,
  Spacer,
  Stack,
  IconButton,
  Link,
} from "@chakra-ui/react";
import { PhoneIcon, ChatIcon } from "@chakra-ui/icons";
import { FaViber } from "react-icons/fa";

export default function BusinessCard(props) {
  const ChakraImage = chakra(Image, {
    baseStyle: { maxH: 120, maxW: 120, rounded: "lg" },
    shouldForwardProp: (prop) =>
      ["width", "height", "src", "alt"].includes(prop),
  });

  return (
    <Box
      maxW="sm"
      minW="sm"
      borderRadius="2xl"
      overflow="hidden"
      bgColor="white"
      boxShadow="sm"
    >
      <Flex direction="row" p="3" w="100%">
        <ChakraImage
          mr="4"
          src={props.image}
          alt={`Image of ${props.name}`}
          width={120}
          height={120}
          borderRadius={'xl'}
        />
        {/* <Spacer /> */}
        <Flex direction="column" ml="6" w="100%">
          <Heading as="h3" size="md">
            {props.name}
          </Heading>
          <Text>{props.description}</Text>
          <Spacer />
          <Flex direction="row">
            <Stack direction="row" spacing={3} ml="auto">
              <Link
                href={`viber://chat/?number=%2B960${props.phone}`}
              >
                <IconButton
                  bg="purple.100"
                  color="purple"
                  aria-label="Message on Viber"
                  icon={<FaViber />}
                />
              </Link>
              <Link
                href={`sms:+960${props.phone}`}
              >
                <IconButton
                  bg="blue.100"
                  color="blue"
                  aria-label="Send SMS"
                  icon={<ChatIcon />}
                />
              </Link>
              <Link
                href={`tel:+960${props.phone}`}
              >
                <IconButton
                  bg="green.100"
                  color="green"
                  aria-label="Make a phone call"
                  icon={<PhoneIcon />}
                />
              </Link>
            </Stack>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}
