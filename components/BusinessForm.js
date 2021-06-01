import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { AddIcon, CheckIcon } from "@chakra-ui/icons";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
} from "@chakra-ui/react";
import { useState, useRef } from "react";

export default function BusinessForm(props) {
  const [business, setBusiness] = useState({
    name: "",
    category: "",
    phone: "",
  });
  const isInvalid =
    business.name === "" || business.category === "" || business.phone === "";

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();

  const handleChange = (event) =>
    setBusiness((business) => ({
      ...business,
      [event.target.name]: event.target.value,
    }));

  const handleSubmit = () => {
    if (props.onChange) {
      props.onChange(business);
    }
  };

  return (
    <>
      <Button
        leftIcon={<AddIcon />}
        colorScheme="purple"
        variant="outline"
        onClick={onOpen}
      >
        Add new business
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add a new business</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Business Name</FormLabel>
              <Input
                name="name"
                onChange={handleChange}
                value={business.name}
                ref={initialRef}
                placeholder="First name"
              />
            </FormControl>
            <FormControl mt={4} isRequired>
              <FormLabel>Business Category</FormLabel>
              <Select
                name="category"
                onChange={handleChange}
                placeholder="Select option"
              >
                <option value="shop">Shop</option>
                <option value="cafe">Café</option>
                <option value="restaurant">Restaurant</option>
                <option value="pharmacy">Pharmacy</option>
              </Select>
            </FormControl>
            <FormControl mt={4} isRequired>
              <FormLabel>Phone Number</FormLabel>
              <InputGroup>
                <InputLeftAddon children="+960" />
                <Input
                  name="phone"
                  onChange={handleChange}
                  value={business.phone}
                  type="tel"
                  placeholder="phone number"
                />
              </InputGroup>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button
              isLoading={props.isSubmitting}
              disabled={isInvalid}
              loadingText="Submitting"
              colorScheme={ props.hasSubmitted ? 'green' : 'purple'}
              leftIcon={ props.hasSubmitted ? <CheckIcon /> : null }
              mr={3}
              onClick={handleSubmit}
            >
              { props.hasSubmitted ? 'Business Added' : 'Save'}
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
