'use client'

import { FC, ReactNode } from 'react'
import { DeviceSize, SCALING_BREAKPOINTS } from '@/shared/const'
import { isDeviceAtom } from '@atoms/deviceAtom'
import { useScaling } from '@hooks/index'
import { Provider as JotaiProvider, useAtom } from 'jotai'
import userAtom from '@/shared/atoms/userAtom'
import { useRouter } from 'next/router'

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


const UserProvider: FC<{children: ReactNode}> = ({ children }) => {
  const user = useAtom(userAtom)
  const router = useRouter()

  // if (!user) {
  //   router.push('/')
  // }
  console.log(user)

  return <>{children}</>
}

export const Provider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <JotaiProvider>
      <ScalingLayout>{children}</ScalingLayout>
    </JotaiProvider>
  )
}
