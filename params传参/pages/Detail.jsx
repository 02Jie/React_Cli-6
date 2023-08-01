import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detail() {
    const params = useParams()
    console.log(params,"params");
  return (
      <div>
          <div>{params.id }</div>
          <div>{params.title }</div>
          <div>{params.msg }</div>
    </div>
  )
}
