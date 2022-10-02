import { Text, useSx, View, H1, P, Row, A, ScrollView, FlatList } from 'dripsy'
import { TextLink, Link } from 'solito/link'
import { MotiLink } from 'solito/moti'
import { useQuery } from '@tanstack/react-query'
import productService, { ProductType } from 'app/services/product.service'
import type { ListRenderItem } from 'react-native'
import { Platform, Dimensions, Image } from 'react-native'

function truncate(str: string, n: number) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

export function HomeScreen() {
  const { data: products, isLoading } = useQuery(
    ['products'],
    productService.getAll
  )

  return (
    <View
      sx={{ alignItems: 'center', width: ['100%', 700], marginX: 'auto' }}
    >
      <H1 sx={{ fontWeight: '800' }}>Fake Store</H1>

      {isLoading && <P>Loading...</P>}

      <FlatList
        data={products}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item: product }: Parameters<ListRenderItem<ProductType>>[0]) => (
          <View sx={{
            width: '50%',
            borderColor: 'silver',
            borderWidth: .5
          }}>
            <Link href={`/product/${product.id}`}>
              <Image
                source={{ uri: product?.image, width: 300, height: 300 }}
                alt={product.title}
                sx={{
                  width: (Platform.OS === 'web') ? '100%' : Dimensions.get('window').width,
                }}
                resizeMode={(Platform.OS === 'web') ? 'contain' : 'cover'}
              />

              <H1
                selectable={false}
                sx={{ fontSize: 16, color: 'black', fontWeight: 'bold', maxWidth: '100%', p: 1 }}
              >
                {product.title}
              </H1>
            </Link>
          </View>
        )}
      />
    </View>
  )
}
