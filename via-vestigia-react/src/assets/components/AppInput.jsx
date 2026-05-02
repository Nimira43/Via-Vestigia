export function AppInput(props) {
  const {id, label, onChange, type, help} = props
  
    return (
    <div className='mb-3'>
      <label
        className='form-label'
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className='form-control'
        id={id}
        autoComplete='off'
        onChange={onChange}
        type={type}
      />
      <div className='small text-danger'>
        {help}
      </div>
    </div>
  )
}