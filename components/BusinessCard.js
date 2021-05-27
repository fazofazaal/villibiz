import Image from 'next/image'
import { chakra, Flex, Heading, Text, Box, Spacer, Stack, IconButton } from "@chakra-ui/react";
import { PhoneIcon, ChatIcon, } from "@chakra-ui/icons"
import { FaViber } from "react-icons/fa"

export default function BusinessCard(props) {

    const ChakraImage = chakra(Image, {
        baseStyle: { maxH: 120, maxW: 120, rounded: 'lg' },
        shouldForwardProp: (prop) => ['width', 'height', 'src', 'alt'].includes(prop),
    })

    return (
        <Box maxW="sm" minW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Flex direction="row" p="3">
                <ChakraImage
                    mr="4"
                    src={props.image}
                    alt={`Image of ${props.name}`}
                    width={120}
                    height={120}
                />
                <Spacer />
                <Flex direction="column" ml="4">
                    <Heading as="h3" size="md">{props.name}</Heading>
                    <Text>{props.bio}</Text>
                    <Spacer />
                    <Flex direction="row">
                        <Stack direction="row" spacing={3} ml="auto">
                            <IconButton bg="purple.100" color="purple" aria-label="Search database" icon={<FaViber />} />
                            <IconButton bg="blue.100" color="blue" aria-label="Search database" icon={<ChatIcon />} />
                            <IconButton bg="green.100" color="green" aria-label="Search database" icon={<PhoneIcon />} />
                        </Stack>
                    </Flex>
                </Flex>
            </Flex>
        </Box>
    );
}