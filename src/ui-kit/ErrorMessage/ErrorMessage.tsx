import React from 'react'
import { Alert } from 'react-bootstrap'

export const ErrorMessage = () => (
  <div className="d-flex justify-content-center mt-5">
    <Alert key="danger" variant="danger">
      Something went wrong!
    </Alert>
  </div>
)
