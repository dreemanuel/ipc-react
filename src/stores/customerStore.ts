import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type CustomerType = 'guest' | 'retail' | 'b2b'
export type RegionType = 'indonesia' | 'uae' | 'us'
export type CurrencyType = 'IDR' | 'AED' | 'USD'

interface CustomerState {
  // Customer type and status
  customerType: CustomerType
  region: RegionType
  currency: CurrencyType
  isAuthenticated: boolean
  
  // User profile data
  profile: {
    email?: string
    name?: string
    company?: string
    phone?: string
  }
  
  // Preferences
  preferences: {
    language: string
    newsletter: boolean
    b2bNotifications: boolean
  }
  
  // Actions
  setCustomerType: (type: CustomerType) => void
  setRegion: (region: RegionType) => void
  setCurrency: (currency: CurrencyType) => void
  setAuthenticated: (authenticated: boolean) => void
  updateProfile: (profile: Partial<CustomerState['profile']>) => void
  updatePreferences: (preferences: Partial<CustomerState['preferences']>) => void
  reset: () => void
}

const initialState = {
  customerType: 'guest' as CustomerType,
  region: 'indonesia' as RegionType,
  currency: 'IDR' as CurrencyType,
  isAuthenticated: false,
  profile: {},
  preferences: {
    language: 'en',
    newsletter: false,
    b2bNotifications: false,
  },
}

export const useCustomerStore = create<CustomerState>()(
  persist(
    (set) => ({
      ...initialState,
      
      setCustomerType: (type) => {
        set({ customerType: type })
      },
      
      setRegion: (region) => {
        // Auto-set currency based on region
        const currencyMap: Record<RegionType, CurrencyType> = {
          indonesia: 'IDR',
          uae: 'AED',
          us: 'USD',
        }
        set({ 
          region, 
          currency: currencyMap[region] 
        })
      },
      
      setCurrency: (currency) => {
        set({ currency })
      },
      
      setAuthenticated: (authenticated) => {
        set({ isAuthenticated: authenticated })
      },
      
      updateProfile: (profile) => {
        set((state) => ({
          profile: { ...state.profile, ...profile }
        }))
      },
      
      updatePreferences: (preferences) => {
        set((state) => ({
          preferences: { ...state.preferences, ...preferences }
        }))
      },
      
      reset: () => {
        set(initialState)
      },
    }),
    {
      name: 'customer-store',
      // Only persist certain fields
      partialize: (state) => ({
        customerType: state.customerType,
        region: state.region,
        currency: state.currency,
        profile: state.profile,
        preferences: state.preferences,
      }),
    }
  )
)

// Derived selectors (custom hooks)
export const useCustomerType = () => {
  const customerType = useCustomerStore((state) => state.customerType)
  return {
    customerType,
    isGuest: customerType === 'guest',
    isRetail: customerType === 'retail',
    isB2B: customerType === 'b2b',
  }
}

export const useRegionalSettings = () => {
  const { region, currency } = useCustomerStore((state) => ({
    region: state.region,
    currency: state.currency,
  }))
  
  return {
    region,
    currency,
    isIndonesia: region === 'indonesia',
    isUAE: region === 'uae',
    isUS: region === 'us',
  }
}