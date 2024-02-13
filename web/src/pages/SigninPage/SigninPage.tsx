import { Link, routes, navigate } from '@redwoodjs/router'
import { Form, TextField, PasswordField, Submit } from '@redwoodjs/forms'
import { useAuth } from 'src/auth'

const SigninPage = () => {
  const { logIn, isAuthenticated } = useAuth()
  console.log('isAuthenticated: ', isAuthenticated)

  const [error, setError] = React.useState(null)

  const onSubmit = async (data: { email: string; password: string }) => {
    console.log('data: ', data)
    setError(null)
    try {
      const response = await logIn({
        email: data.email,
        password: data.password,
        authMethod: 'password', // This line is added to meet the expected type
      })
      console.log('response: ', response)
      response?.error?.message
        ? setError(response.error.message)
        : navigate(routes.home())
      // do something with the response
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <h1>Sign In</h1>
      <Form onSubmit={onSubmit}>
        {error && <p>{error}</p>}
        <TextField name="email" placeholder="email" />
        <PasswordField name="password" placeholder="password" />
        <Submit>Sign In</Submit>
      </Form>
    </>
  )
}

export default SigninPage
