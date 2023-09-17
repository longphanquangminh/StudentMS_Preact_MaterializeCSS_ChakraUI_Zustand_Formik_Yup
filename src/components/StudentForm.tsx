import { Formik, Field } from "formik";
import * as Yup from "yup";
import { Box, Button, Flex, FormControl, FormLabel, FormErrorMessage, Input, VStack } from "@chakra-ui/react";
import { addStudent } from "../zustand/studentStore";

export default function StudentForm() {
  const validationSchema = Yup.object().shape({
    studentId: Yup.string().min(1, "Student ID must contain at least 1 character").required("Student ID is required"),
    fullName: Yup.string().min(1, "Full name must contain at least 1 character").required("Full name is required"),
    phoneNumber: Yup.string()
      .test("len", "Phone number must be exactly 10 digits", (val: any) => val && val.length === 10 && /^\d+$/.test(val))
      .required("Phone number is required"),
    email: Yup.string().email("Invalid email address").required("Email is required"),
  });
  return (
    <>
      <div class='row'>
        <div class='input-field col s12 m12 l8'>
          <i class='material-icons prefix'>mode_edit</i>
          <input id='icon_prefix' type='text' />
          <label for='icon_prefix'>Search</label>
        </div>
        <div class='input-field col s12 m12 l4'>
          <button type='button' onClick={() => {}} class='waves-effect waves-light btn green col s12 m12 l3'>
            Search
          </button>
        </div>
      </div>
      <Flex align='center' justify='center'>
        <Box bg='white' p={6} rounded='md' w='full'>
          <Formik
            initialValues={{
              studentId: "",
              fullName: "",
              phoneNumber: "",
              email: "",
            }}
            onSubmit={values => {
              addStudent({
                id: values.studentId,
                studentId: values.studentId,
                name: values.fullName,
                email: values.email,
                phone: values.phoneNumber,
              });
            }}
            validationSchema={validationSchema}
          >
            {({ handleSubmit, errors, touched, isValid, dirty }: any) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align='flex-start'>
                  <div class='row' style={{ width: "100%" }}>
                    <div class='col s12 m6 l6'>
                      <FormControl isInvalid={!!errors.studentId && touched.studentId}>
                        <FormLabel htmlFor='studentId'>Student ID</FormLabel>
                        <Field as={Input} id='studentId' name='studentId' type='text' variant='filled' />
                        <FormErrorMessage>{errors.studentId}</FormErrorMessage>
                      </FormControl>
                    </div>
                    <div class='col s12 m6 l6'>
                      <FormControl isInvalid={!!errors.fullName && touched.fullName}>
                        <FormLabel htmlFor='fullName'>Full Name</FormLabel>
                        <Field as={Input} id='fullName' name='fullName' type='text' variant='filled' />
                        <FormErrorMessage>{errors.fullName}</FormErrorMessage>
                      </FormControl>
                    </div>
                  </div>
                  <div class='row' style={{ width: "100%" }}>
                    <div class='col s12 m6 l6'>
                      <FormControl isInvalid={!!errors.phoneNumber && touched.phoneNumber}>
                        <FormLabel htmlFor='phoneNumber'>Phone number</FormLabel>
                        <Field as={Input} id='phoneNumber' name='phoneNumber' type='text' variant='filled' />
                        <FormErrorMessage>{errors.phoneNumber}</FormErrorMessage>
                      </FormControl>
                    </div>
                    <div class='col s12 m6 l6'>
                      <FormControl isInvalid={!!errors.email && touched.email}>
                        <FormLabel htmlFor='email'>Email</FormLabel>
                        <Field as={Input} id='email' name='email' type='email' variant='filled' />
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                      </FormControl>
                    </div>
                  </div>
                  <Button type='submit' colorScheme='purple' isDisabled={!isValid || !dirty}>
                    Add student
                  </Button>
                </VStack>
              </form>
            )}
          </Formik>
        </Box>
      </Flex>
    </>
  );
}
