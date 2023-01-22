import React from 'react'
import NextImage from 'next/image'

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
  return <NextImage src={source?.uri} width={width} height={height} {...props} unoptimized />
}
