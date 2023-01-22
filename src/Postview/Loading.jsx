import React from 'react'
import './Loading.css'
function Loading() {
    console.log('loading');
  return (
    <div class="wrapper">
      <h3 style={{textAlign:'center'}}>Loading...pls wait</h3>
      <div class="card-loader card-loader--tabs"></div>
    </div>
  )
}

export default Loading