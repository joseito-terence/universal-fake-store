import { Dripsy } from './dripsy'
import { NavigationProvider } from './navigation'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    }
  }
});

export function Provider({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationProvider>
        <Dripsy>{children}</Dripsy>
      </NavigationProvider>
    </QueryClientProvider>
  )
}
