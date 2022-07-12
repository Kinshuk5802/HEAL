import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SearchBox = () => {
  const navigate = useNavigate()
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
    } else {
      navigate('/')
    }
  }

  return (
    <Form className='d-flex px-4' onSubmit={submitHandler} size='sm'>
      <Form.Control
        type='text'
        placeholder='Search Products...'
        className='me-2'
        aria-label='Search'
        onChange={(e) => setKeyword(e.target.value)}
      />
      <Button variant='outline-success' type='submit' size='sm'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBox
