import React from 'react'
import FastImage from 'react-native-fast-image'

interface ImageProps {
  source: {
    uri: string,
    [key: string]: any
  },
  width: number,
  height: number,
  [key: string]: any
}

export default function Image({ source, width, height, ...props }: ImageProps) {
  return (
    <FastImage
      source={source}
      style={{ ...props?.style, width, height }}
      {...props}
    />
  )
}
