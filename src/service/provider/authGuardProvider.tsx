'use client';

import { useAppDispatch, useAppSelector } from '@/shared/store/hooks';
import { userActions } from '@/shared/store/user/user.slice';
import { AuthorizationStatus } from '@/shared/types/enums';

export default function AuthGuardProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const user = useAppSelector(state => state.user)
  const dispatch = useAppDispatch()

  // if (AuthorizationStatus.Unknown) {    
  //   dispatch(userActions.currentUser())
  //   return <h2>Loading...</h2>
  // }

  return (
    <div>{children}</div>
  )
}