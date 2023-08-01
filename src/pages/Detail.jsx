import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail() {
    const params = useLocation()
    console.log(params,"params");
  return (
      <div>
          <div>{params.state.id }</div>
          <div>{params.state.title }</div>
          <div>{params.state.msg }</div>
    </div>
  )
}
