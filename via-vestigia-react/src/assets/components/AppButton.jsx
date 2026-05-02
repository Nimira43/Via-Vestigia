export function AppButton(props) {
  const { disabled, loading, children } = props

  return (
    <button
      className='button main-btn-dark'
      disabled={disabled || loading}
    >
      {loading && (
        <span className='spinner-border spinner-border-sm'></span>
      )}
      {children}
    </button>
  )
}