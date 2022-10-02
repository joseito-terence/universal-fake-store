/* eslint-disable jsx-a11y/alt-text */
import { Text, useSx, View, H1, P, Image, ScrollView } from 'dripsy'
import { useQuery } from '@tanstack/react-query'
import productService from 'app/services/product.service'
import { createParam } from 'solito'
import { Platform, Dimensions,  } from 'react-native'

const { useParam } = createParam()

export function ProductScreen() {
  const sx = useSx();
  const [id] = useParam('id')
  const { data: product, isLoading } = useQuery(
    ['products', id],
    () => productService.get(Number(id))
  )

  if (isLoading)
    return <P>Loading...</P>

  return (
    <ScrollView
      contentContainerSx={{alignItems: 'center', p: 16, width: ['100%', 600], marginX: 'auto', pt: 0 }}
    >
      <Image
        source={{
          uri: product?.image,
          width: 300,
          height: 300
        }}
        sx={{
          width: (Platform.OS === 'web') ? '100%' : Dimensions.get('window').width / 2,
        }}
        resizeMode={'contain'}
      />

      <H1 sx={{ fontWeight: '800' }}>{product?.title}</H1>
      <P>{product?.description}</P>
      <P sx={{
        fontSize: 20,
        textAlign: 'left',
        width: '100%',
        pt: 0,
        mt: 0
      }}>₹{product?.price}</P>
    </ScrollView>
  )
}
