import { Formik, Field } from "formik";
import { Box, Button, Flex, FormControl, FormLabel, FormErrorMessage, Input, VStack } from "@chakra-ui/react";

export default function StudentForm() {
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
          <Formik initialValues={{}} onSubmit={() => {}}>
            {({ handleSubmit, errors, touched }: any) => (
              <form onSubmit={handleSubmit}>
                <VStack spacing={4} align='flex-start'>
                  <div class='row' style={{ width: "100%" }}>
                    <div class='col s12 m6 l6'>
                      <FormControl>
                        <FormLabel htmlFor='email'>Email Address</FormLabel>
                        <Field as={Input} id='email' name='email' type='email' variant='filled' />
                      </FormControl>
                    </div>
                    <div class='col s12 m6 l6'>
                      <FormControl isInvalid={!!errors.password && touched.password}>
                        <FormLabel htmlFor='password'>Password</FormLabel>
                        <Field
                          as={Input}
                          id='password'
                          name='password'
                          type='text'
                          variant='filled'
                          validate={(value: any) => {
                            let error;

                            if (value.length < 6) {
                              error = "Password must contain at least 6 characters";
                            }

                            return error;
                          }}
                        />
                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                      </FormControl>
                    </div>
                  </div>
                  <Button type='button' colorScheme='purple' width='full'>
                    Thêm sinh viên
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
