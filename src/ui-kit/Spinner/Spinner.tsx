import React from 'react'
import { Spinner as Loader } from 'react-bootstrap'

export const Spinner = () => (
  <div className="d-flex justify-content-center mt-5">
    <Loader animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Loader>
  </div>
)
