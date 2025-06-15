import React, { createContext, useContext, useEffect, ReactNode } from 'react'
import { useCustomerStore, useCustomerType, CustomerType, RegionType } from '../../stores/customerStore'

interface CustomerTypeContextValue {
  customerType: CustomerType
  isGuest: boolean
  isRetail: boolean
  isB2B: boolean
  switchCustomerType: (type: CustomerType) => void
  detectRegionFromURL: () => void
}

const CustomerTypeContext = createContext<CustomerTypeContextValue | undefined>(undefined)

interface CustomerTypeProviderProps {
  children: ReactNode
}

export const CustomerTypeProvider: React.FC<CustomerTypeProviderProps> = ({ children }) => {
  const { setCustomerType, setRegion } = useCustomerStore()
  const { customerType, isGuest, isRetail, isB2B } = useCustomerType()

  // Detect region and customer type from URL parameters or other indicators
  const detectRegionFromURL = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const regionParam = urlParams.get('region') as RegionType
    const customerTypeParam = urlParams.get('customer') as CustomerType

    if (regionParam && ['indonesia', 'uae', 'us'].includes(regionParam)) {
      setRegion(regionParam)
    }

    if (customerTypeParam && ['guest', 'retail', 'b2b'].includes(customerTypeParam)) {
      setCustomerType(customerTypeParam)
    }
  }

  // Auto-detect region based on browser/IP (simplified version)
  const detectRegionFromBrowser = () => {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone
    
    if (timezone.includes('Jakarta') || timezone.includes('Asia/Jakarta')) {
      setRegion('indonesia')
    } else if (timezone.includes('Dubai') || timezone.includes('Asia/Dubai')) {
      setRegion('uae')
    } else if (timezone.includes('America/')) {
      setRegion('us')
    }
  }

  const switchCustomerType = (type: CustomerType) => {
    setCustomerType(type)
  }

  // Initialize on component mount
  useEffect(() => {
    detectRegionFromURL()
    // Only auto-detect region if not already set
    if (useCustomerStore.getState().region === 'indonesia') {
      detectRegionFromBrowser()
    }
  }, [])

  const contextValue: CustomerTypeContextValue = {
    customerType,
    isGuest,
    isRetail,
    isB2B,
    switchCustomerType,
    detectRegionFromURL,
  }

  return (
    <CustomerTypeContext.Provider value={contextValue}>
      {children}
    </CustomerTypeContext.Provider>
  )
}

// Custom hook to use the CustomerType context
export const useCustomerTypeContext = () => {
  const context = useContext(CustomerTypeContext)
  if (context === undefined) {
    throw new Error('useCustomerTypeContext must be used within a CustomerTypeProvider')
  }
  return context
}

// Component for displaying current customer type (for testing/debugging)
export const CustomerTypeIndicator: React.FC = () => {
  const { customerType, switchCustomerType } = useCustomerTypeContext()
  
  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: '#333', 
      color: 'white', 
      padding: '8px 12px', 
      borderRadius: '4px', 
      fontSize: '12px',
      zIndex: 9999 
    }}>
      <span>Type: {customerType.toUpperCase()}</span>
      <div style={{ marginTop: '4px' }}>
        <button 
          onClick={() => switchCustomerType('guest')}
          style={{ 
            background: customerType === 'guest' ? '#007bff' : '#666', 
            color: 'white', 
            border: 'none', 
            padding: '2px 6px', 
            margin: '0 2px',
            borderRadius: '2px',
            fontSize: '10px',
            cursor: 'pointer'
          }}
        >
          Guest
        </button>
        <button 
          onClick={() => switchCustomerType('retail')}
          style={{ 
            background: customerType === 'retail' ? '#007bff' : '#666', 
            color: 'white', 
            border: 'none', 
            padding: '2px 6px', 
            margin: '0 2px',
            borderRadius: '2px',
            fontSize: '10px',
            cursor: 'pointer'
          }}
        >
          Retail
        </button>
        <button 
          onClick={() => switchCustomerType('b2b')}
          style={{ 
            background: customerType === 'b2b' ? '#007bff' : '#666', 
            color: 'white', 
            border: 'none', 
            padding: '2px 6px', 
            margin: '0 2px',
            borderRadius: '2px',
            fontSize: '10px',
            cursor: 'pointer'
          }}
        >
          B2B
        </button>
      </div>
    </div>
  )
}