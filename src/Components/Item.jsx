import { Card, Image, Stack, Text, Divider, Heading, ButtonGroup, Button, CardBody,  CardFooter } from '@chakra-ui/react'

const Item = ({producto}) => {
  return (
    <div>

      
        <Card maxW='sm'>
        <CardBody>
          <Image
            src= {producto.image}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'> {producto.title}   </Heading>
            <Text>
              {producto.description}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              ${producto.description}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing='2'>
            <Button variant='solid' colorScheme='blue'>
                Comprar
            </Button>

          </ButtonGroup>
        </CardFooter>
        
      </Card>
    </div>
  )
}

export default Item