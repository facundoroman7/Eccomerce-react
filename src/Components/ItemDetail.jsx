import { Card, Image, Stack, Text, Divider, Heading, ButtonGroup, Button, CardBody, CardFooter, } from '@chakra-ui/react'
import ItemsCounter from './ItemsCounter'
import { Link , useParams } from 'react-router-dom'

const ItemDetail = ({ product }) => {

  
  const { id } = useParams()

  
  
  // const filterProduct = product.filter((prod) => prod.id == id)
 
  console.log(filterProduct);
  
  return (
    <div>

       {filterProduct.map((product) => {
        return (
          <>
            <Card maxW='sm'>
              <CardBody>
                <Image
                  src={product.image}
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'> {product.title} </Heading>

                  <Text color='blue.600' fontSize='2xl'>
                    ${product.price}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='blue'>
                    <Link to="/ItemListContainer" >
                      Detalle
                    </Link>
                  </Button>

                </ButtonGroup>
              </CardFooter>
              <ItemsCounter />
            </Card>
          </>
        )
      })} 

    </div>
  )
}

export default ItemDetail