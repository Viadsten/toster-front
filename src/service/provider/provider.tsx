'use client'

import { FC, ReactNode } from 'react'
import { DeviceSize, SCALING_BREAKPOINTS } from '@/shared/const'
import { isDeviceAtom } from '@atoms/deviceAtom'
import { useScaling } from '@hooks/index'
import { Provider as JotaiProvider, useAtom } from 'jotai'
import StoreProvider from './storeProvider'
import AuthGuardProvider from './authGuardProvider'

const ScalingLayout: FC<{ children: ReactNode }> = ({ children }) => {
  const [isDeviceDetected] = useAtom(isDeviceAtom)

  useScaling({
    deviceBreakpoints: {
      tablet: DeviceSize.Tablet.PORTRAIT,
      desktop: DeviceSize.Desktop.SMALL
    },
    scalingBreakpoints: SCALING_BREAKPOINTS
  })

  return isDeviceDetected ? children : <></>
}


export const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <StoreProvider>
      <AuthGuardProvider>
        <ScalingLayout>{children}</ScalingLayout>

      </AuthGuardProvider>
    </StoreProvider>
  )
}
