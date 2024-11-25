'use client';

import { AppStore, makeStore } from '@/shared/store'
import { useAppSelector } from '@/shared/store/hooks';
import { Suspense, useRef } from 'react'
import { Provider } from 'react-redux'

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    storeRef.current = makeStore()
  }

  return (
    <Suspense fallback={<span>Loading...</span>}>
      <Provider store={storeRef.current}>{children}</Provider>
    </Suspense> 
  )
}