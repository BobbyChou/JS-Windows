import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'

const Group: React.FC = (props) => {

  const history = useHistory()
  const { id } = useParams()
  console.log(id)

  // useEffect(() => {
  //   setTimeout(() => {
  //     history.push('home')
  //   }, 2000);
  // }, [])

  return (
    <div>group init</div>
  )
}

export default Group