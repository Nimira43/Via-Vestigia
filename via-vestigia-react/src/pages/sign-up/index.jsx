import { AppAlert, AppButton, AppInput } from '../../assets/components'
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
            <AppInput
              id='email'
              label='Email'
              onChange={onChangeEmail}
              type='email'
              help={errors.email}
            />
            <AppAlert>
              {successMessage}
            </AppAlert>
            <AppAlert variant='danger'>
              {errorMessage}
            </AppAlert>
            <AppButton
              disabled={disabled}
              loading={apiProgress}
            >
              Register
            </AppButton>
          </div>      
        </form>  
      </div>
    </div>
  )
}