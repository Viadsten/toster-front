'use client'

import { FC, InputHTMLAttributes } from 'react'
import classNames from 'classnames'
import styles from './input.module.scss'
import { useController, UseControllerProps, UseFormRegister } from 'react-hook-form'

interface IInputProps {
  name: string
  register?: UseFormRegister<any>
  required?: boolean
  label?: string
  className?: string
}

const Input = (
  props: UseControllerProps<any> & IInputProps & InputHTMLAttributes<HTMLInputElement>
) => {
  const rootClassName = classNames(styles.root, props.className)
  const { field, fieldState } = useController(props)

  return (
    <>
      <label>
        {props.label}
        <input 
          className={rootClassName}
          placeholder={props.placeholder}
          {...field}
        />
      </label>
      <p>{fieldState.isTouched && "Touched"}</p>
      <p>{fieldState.isDirty && "Dirty"}</p>
      <p>{(fieldState.invalid)? "invalid" : "valid"}</p>
    </>
  ) 
}

export default Input
