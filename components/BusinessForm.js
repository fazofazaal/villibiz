import {
  VStack,
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
  Switch,
  Divider,
} from "@chakra-ui/react";
import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { AddIcon, CheckIcon } from "@chakra-ui/icons";

import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import FilePondPluginImageCrop from "filepond-plugin-image-crop";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginImageTransform from "filepond-plugin-image-transform";
import FilePondPluginFileRename from 'filepond-plugin-file-rename';

import "filepond/dist/filepond.min.css";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview, FilePondPluginImageTransform, FilePondPluginImageCrop, FilePondPluginImageResize, FilePondPluginFileRename);

import dashify from "dashify";

import { useState, useRef } from "react";

export default function BusinessForm(props) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [phone, setPhone] = useState("");
  const [allowViber, setAllowViber] = useState(false);
  const [allowSMS, setAllowSMS] = useState(true);
  const [images, setImages] = useState([]);

  const isInvalid = name === "" || category === "" || phone === "";

  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();

  // const handleChange = (event) =>
  //   setBusiness((business) => ({
  //     ...business,
  //     [event.target.name]: event.target.value,
  //   }));

  const handleSubmit = () => {
    // if (props.onChange) {
    //   props.onChange({ name, description, category, phone, allowViber, allowSMS});
    // }
    console.log(images[0].file);
  };

  return (
    <>
      <Button
        leftIcon={<AddIcon />}
        colorScheme="green"
        variant="solid"
        borderRadius="3xl"
        onClick={onOpen}
        boxShadow="md"
      >
        Add a business
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add business information</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Business Name</FormLabel>
              <Input
                onChange={(event) => setName(event.target.value)}
                value={name}
                ref={initialRef}
                placeholder="Business name"
                variant="filled"
              />
            </FormControl>
            <FormControl mt={4} isRequired>
              <FormLabel>Business Category</FormLabel>
              <Select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                placeholder="Select option"
                variant="filled"
              >
                <option value="shop">Shop</option>
                <option value="cafe">Café</option>
                <option value="restaurant">Restaurant</option>
                <option value="pharmacy">Pharmacy</option>
              </Select>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Business Description</FormLabel>
              <Input
                onChange={(event) => setDescription(event.target.value)}
                value={description}
                placeholder="Enter your business description here"
                variant="filled"
              />
            </FormControl>
            <Divider mt={6} />
            <FormControl mt={4} isRequired>
              <FormLabel>Phone Number</FormLabel>
              <InputGroup>
                <InputLeftAddon children="+960" border="none" />
                <Input
                  onChange={(event) => setPhone(event.target.value)}
                  value={phone}
                  type="tel"
                  placeholder="Phone Number"
                  variant="filled"
                />
              </InputGroup>
            </FormControl>
            <VStack mt={4} spacing="4">
              <FormControl
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                isDisabled={isInvalid}
              >
                <FormLabel mb={0}>Message via Viber</FormLabel>
                <Switch
                  colorScheme="purple"
                  isChecked={allowViber}
                  isDisabled={isInvalid}
                  onChange={() => setAllowViber(!allowViber)}
                />
              </FormControl>
              <FormControl
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                isDisabled={isInvalid}
              >
                <FormLabel mb={0}>Message via SMS</FormLabel>
                <Switch
                  colorScheme="blue"
                  isChecked={allowSMS}
                  isDisabled={isInvalid}
                  onChange={() => setAllowSMS(!allowSMS)}
                />
              </FormControl>
            </VStack>
            <Divider mt={6} />
            <FormControl mt={4} mb={4} isDisabled={isInvalid}>
              <FormLabel>Add business logo or photo</FormLabel>
              <FormHelperText>Image will be cropped to a 1:1 or square aspect ratio as seen in the upload preview below</FormHelperText>
            </FormControl>
            <FilePond
              disabled={isInvalid}
              files={images}
              onupdatefiles={setImages}
              allowMultiple={false}
              maxFiles={1}
              allowImageResize={true}
              imageResizeTargetWidth={100}
              allowImageCrop={true}
              imageCropAspectRatio={1}
              allowImageTransform={true}
              imageTransformOutputMimeType={'image/jpeg'}
              imageTransformOutputQuality={80}
              fileRenameFunction={(file) => `${dashify(name)}${file.extension}`}
              // imageCropAspectRatio="1:1"
              // imageResizeTargetWidth="200"
              // imageResizeTargetHeight="200"
              name="image"
              labelIdle='Drag & Drop your image or <span class="filepond--label-action">Browse</span>'
            />
          </ModalBody>
          <ModalFooter>
            <Button
              isLoading={props.isSubmitting}
              disabled={isInvalid}
              loadingText="Submitting"
              colorScheme={props.hasSubmitted ? "green" : "purple"}
              leftIcon={props.hasSubmitted ? <CheckIcon /> : null}
              mr={3}
              onClick={handleSubmit}
            >
              {props.hasSubmitted ? "Business Added" : "Save"}
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
