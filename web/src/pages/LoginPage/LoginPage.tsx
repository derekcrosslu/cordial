

import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { Link, navigate, routes } from '@redwoodjs/router'

import { toast, Toaster } from '@redwoodjs/web/toast'

import { useAuth } from 'src/auth'


const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()


  // useEffect(() => {
  //   if (isAuthenticated) {
  //     navigate(routes.reservas())
  //   }
  // }, [isAuthenticated])

  // const usernameRef = useRef(null)
  // useEffect(() => {
  //   usernameRef.current?.focus()
  // }, [])

  const onSubmit = async (data: { email: string; password: string }) => {
    console.log("data: ", data);
     const response = await logIn({
       email: data.email,
       password: data.password,
       authMethod: 'password', // This line is added to meet the expected type
      })

    if (response?.error?.message) {
      toast(response?.error?.message)
    } else if (response.error) {
      toast.error(response?.error?.message)
    } else {
      // toast.success('Welcome back!')
      navigate(routes.reservas())
    }
  }

  return (
    <>
      {/* <MetaTags title="Login" /> */}

      <main className="rw-main">
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Login</h2>
            </header>

            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <Label
                    name="username"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Usuario
                  </Label>
                  <TextField
                    name="email"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    // ref={usernameRef}
                    placeholder="email"
                    validation={{
                      required: {
                        value: true,
                        message: 'Username is required',
                      },
                    }}
                  />

                  <FieldError name="username" className="rw-field-error" />

                  <Label
                    name="password"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Clave
                  </Label>
                  <PasswordField
                    name="password"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: 'Password is required',
                      },
                    }}
                    placeholder="password"
                  />


                  <div className="rw-forgot-link">
                    <Link
                      to={routes.forgotPassword()}
                      className="rw-forgot-link"
                    >
                      Forgot Password?
                    </Link>
                  </div>

                  <FieldError name="password" className="rw-field-error" />

                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">Login</Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link">
            <span>Don&apos;t have an account?</span>{' '}
            <Link to={routes.signup()} className="rw-link">
              Sign up!
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default LoginPage
