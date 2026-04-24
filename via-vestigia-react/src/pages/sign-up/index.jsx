import { AppAlert } from '../../assets/components'
import { useSignUp } from './useSignUp'

export function SignUp() {
  const {
    apiProgress,
    disabled,
    onChangeEmail,
    onSubmit,
    successMessage,
    errorMessage,
    errors
  } = useSignUp()

  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <div className='w-100 form-width'>
        <form
          className='card shadow-md '
          onSubmit={onSubmit}
          noValidate
        >
          <div className='card-header text-center light-bg'>
            <h1 className='dark-text uppercase font-medium'>Register</h1>
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
                onChange={onChangeEmail}
                type='email'
              />
              <div className='small text-danger'>
                {errors.email}
              </div>
            </div>
            <AppAlert>
              {successMessage}
            </AppAlert>
            <AppAlert variant='danger'>
              {errorMessage}
            </AppAlert>
            <button
              className='button main-btn-dark'
              disabled={disabled || apiProgress}
            >
              {apiProgress &&
                <span className='spinner-border spinner-border-sm'></span>
              }
              Register
            </button>
          </div>      
        </form>  
      </div>
    </div>
  )
}