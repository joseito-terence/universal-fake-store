/* eslint-disable jsx-a11y/alt-text */
import { View, H1, P, Image } from 'dripsy'
import { Link } from 'solito/link'
import { useQuery } from '@tanstack/react-query'
import productService, { ProductType } from 'app/services/product.service'
import type { ListRenderItem, FlatListProps } from 'react-native'
import { Platform, Dimensions, FlatList } from 'react-native'
import FastImage from 'react-native-fast-image'
import { SolitoImage } from 'solito/image'

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

      <FlatList<ProductType>
        data={products}
        keyExtractor={(item, index) => `${item.id}${index}`}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item: product }) => (
          <View sx={{
            width: '50%',
            borderColor: 'silver',
            borderWidth: .5
          }}>
            <Link href={`/product/${product.id}`}>

              <SolitoImage
                src={product?.image}
                accessibilityLabel={product.title}
                width={300}
                height={300}
                style={{
                  width: (Platform.OS === 'web') ? '100%' : Dimensions.get('window').width / 2,
                }}
                resizeMode={'contain'}
                unoptimized
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
