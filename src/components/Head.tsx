import React from 'react'
import NextHead from 'next/head'

const Head = (): JSX.Element => {
  return (
    <NextHead>
      <title>Scaleway UI</title>
      <meta
        name="description"
        content="Scaleway Open Source Component Library"
      />
    </NextHead>
  )
}

export default Head
