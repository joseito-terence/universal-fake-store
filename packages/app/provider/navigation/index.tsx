import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { useMemo } from 'react'

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
}

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <NavigationContainer
      theme={navTheme}
      linking={useMemo(
        () => ({
          prefixes: [
            Linking.createURL('/'),
            'https://universal-fake-store.vercel.app/'
          ],
          config: {
            initialRouteName: 'home',
            screens: {
              home: '',
              'user-detail': 'user/:id',
              product: 'product/:id'
            },
          },
        }),
        []
      )}
    >
      {children}
    </NavigationContainer>
  )
}
