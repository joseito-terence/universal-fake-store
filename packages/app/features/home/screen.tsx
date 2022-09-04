import { Text, useSx, View, H1, P, Row, A, ScrollView } from 'dripsy'
import { TextLink } from 'solito/link'
import { MotiLink } from 'solito/moti'
import { useQuery } from '@tanstack/react-query'
import productService from 'app/services/product.service'

export function HomeScreen() {
  const { data: products, isLoading } = useQuery(
    ['products'],
    productService.getAll
  )

  return (
    <ScrollView
      contentContainerSx={{ alignItems: 'center', p: 16, width: ['100%', 600], marginX: 'auto' }}
    >
      <H1 sx={{ fontWeight: '800' }}>Fake Store</H1>

      {isLoading && <P>Loading...</P>}
      {products?.map(product => (
        <View key={product.id}>
          <MotiLink
            href={`/product/${product.id}`}
            animate={({ hovered, pressed }) => {
              'worklet'

              return {
                scale: pressed ? 0.95 : hovered ? 1.1 : 1,
                rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
              }
            }}
            transition={{
              type: 'timing',
              duration: 150,
            }}
          >
            <H1
              selectable={false}
              sx={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}
            >
              {product.title}
            </H1>
          </MotiLink>
          <P>{product.description}</P>
        </View>
      ))}

    </ScrollView>
  )
}
