import { Text, useSx, View, H1, P, Row, A } from 'dripsy'
import { useQuery } from '@tanstack/react-query'
import productService from 'app/services/product.service'
import { createParam } from 'solito'

const { useParam } = createParam()

export function ProductScreen() {
  const [id] = useParam('id')
  const { data: product, isLoading } = useQuery(
    ['products', id],
    () => productService.get(Number(id))
  )

  return (
    <View
      sx={{ flex: 1, alignItems: 'center', p: 16, width: ['100%', 600], marginX: 'auto' }}
    >
      {isLoading && <P>Loading...</P>}

      <H1 sx={{ fontWeight: '800' }}>{product?.title}</H1>
      <P>{product?.description}</P>
    </View>
  )
}
