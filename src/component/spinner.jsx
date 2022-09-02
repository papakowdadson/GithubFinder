import React from 'react'
import { FadeLoader } from 'react-spinners'

export const Spinner = () => {
    const spinnerStlye={
        display:"block",
        margin:"auto"
    }
  return (
    <div ><FadeLoader loading={true} cssOverride={spinnerStlye}/></div>
  )
}
