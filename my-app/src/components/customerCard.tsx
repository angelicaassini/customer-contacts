import Image from 'next/image';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import iCustomer from '@/types';


const CustomerCard = ({name,CNPJ,image_url,contacts} : iCustomer) => {
    return (
        <Center p={10}>
        <Box
          maxW={'445px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.900')}
          boxShadow={'2xl'}
          rounded={'md'}
          p={6}
          overflow={'hidden'}>
          <Box
            h={'210px'}
            bg={'gray.100'}
            mt={-6}
            mx={-6}
            mb={6}
            pos={'relative'}>
            <Center p={3}>
            <Image
                width={150}
                height={150}
                src={
                    image_url!
                }
                alt={name}
                />
            </Center>    
          </Box>
          <Stack>
            <Text
              color={'green.500'}
              textTransform={'uppercase'}
              fontWeight={800}
              fontSize={'sm'}
              letterSpacing={1.1}>
              Contacts: {contacts}
            </Text>
            <Heading
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}>
              Name: {name}
            </Heading>
            <Text color={'gray.500'}>
              {CNPJ}
            </Text>
          </Stack>
        </Box>
      </Center>
    )
}

export default CustomerCard