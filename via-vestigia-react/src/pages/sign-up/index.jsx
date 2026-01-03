import { useState } from 'react'

export function SignUp() {
  const [email, setEmail] = useState()

  const onSubmit = (event) => {
    event.preventDefault()
    fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
  }
  
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="w-100 form-width">
        <form
          className='card shadow-md '
          onSubmit={onSubmit}
        >
          <div className='card-header text-center light-bg'>
            <h1 className='main-text uppercase font-medium'>Register</h1>
          </div>
          <div className='card-body'>
            <div className='mb-3'>
              <label
                className='form-label'
                htmlFor='email'
              >
                Email
              </label>
              <input
                className='form-control'
                id='email'
                autoComplete='off'
                onChange={(event) =>
                  setEmail(event.target.value)
                }
              />
            </div>
            <button
              className='button main-btn-dark'
              disabled={!email}
            >
              Register
            </button>
          </div>      
        </form>  
      </div>
    </div>
  )
}