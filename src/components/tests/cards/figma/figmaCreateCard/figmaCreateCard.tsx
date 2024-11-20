'use client'

import { FC, useEffect, useRef } from 'react'
import classNames from 'classnames'

import styles from './signIn.module.scss'
import { Button, Input, Typography, Wrapper } from '@/ui'
import Link from 'next/link'
import Social from '@/modules/footer/social'
import { SubmitHandler, useForm } from 'react-hook-form'
import axios, { Axios, AxiosResponse } from 'axios'

interface FigmaCreateCardProps {
  className?: string
}

const getFileIdFromFigmaUrl = (url: string): string | null => {
  const regex = /www\.figma\.com\/proto\/([a-zA-Z0-9]+)/;
  const match = url.match(regex);
  
  if (match && match[1]) {
    const fileId = match[1];
    return fileId
  } else {
    return null
  }
}

const getFigmaFile = (id: string): Promise<AxiosResponse<any, any>> => {
  return axios.get(`https://api.figma.com/v1/files/${id}`, {
    method: 'GET',
    headers: {
      'X-Figma-Token': 'FIGMA_TOKEN',
      'Content-Type': 'application/json'
    }
  })
}

const FigmaCreateCard: FC<FigmaCreateCardProps> = ({
  className
}) => {
  
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const { handleSubmit, control } = useForm<any>({
    defaultValues: {
      figmaPrototype: ''
    },
    mode: "onChange",
  })
  const onSubmit: SubmitHandler<any> = ({figmaPrototype}) => {
    console.log(figmaPrototype)
    getFigmaFile(figmaPrototype).then(
      (file) => console.log(file)
    )
  }

  window.addEventListener("message", messageHandler);
  function messageHandler(event: MessageEvent) {
    console.log(event)
  }
  function onMessageCallback(message: any) {
    iframeRef?.current?.contentWindow?.postMessage(message, "*");
  }



  // fetch(`https://api.figma.com/v1/files/${fileId}`, {
  //   method: 'GET',
  //   headers: {
  //     'X-Figma-Token': figmaToken,
  //     'Content-Type': 'application/json'
  //   }
  // })
  //   .then(response => {
  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }
  //     return response.json();
  //   })
  //   .then(data => {
  //     console.log(data);
  //   })
  //   .catch(error => {
  //     console.error('There was a problem with the fetch operation:', error);
  //   });
  window.addEventListener('message', function(e) {
    var message = e.data;
  });

  return (
    <>
      <h1>CreateFigmaCard</h1>
        <form onSubmit={handleSubmit(onSubmit)}
        >
        <Input 
          type='text'
          name='figmaPrototype'
          required={true}
          control={control}
          rules={{ required: true }} 
          placeholder='Прототип'
        />
        <Button type='submit'>Добавить прототип</Button>
      </form>

      <div className="figma-frame"
        >
        <iframe 
          width="100%" height="450" 
          id='myFrame'
          ref={iframeRef}
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FIXVsc0mGkbKRHkHwwZTCgG%2FUntitled%3Fnode-id%3D1-2%26t%3DxspzqRbL0u9TEytY-1%26scaling%3Dmin-zoom%26content-scaling%3Dfixed%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A2?starting-point-node-id=1%3A2&hide-ui=1&hotspot-hints=0&scaling=scale-down-width&version-id=&disable-default-keyboard-nav=1&bg-color=000000"
        ></iframe>
      </div>
    </>
  )
}

export default FigmaCreateCard










