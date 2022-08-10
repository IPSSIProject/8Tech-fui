import {React} from 'react'
import {Box, Button, Container, Link, Typography} from '@mui/material'
import * as yup from "yup";
import {FormProvider, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {DevTool} from "@hookform/devtools";
import {useNavigate} from "react-router-dom";
import useLoginForm from "../redux/modules/loginForm/hooks/useLoginForm";
import EmailControl from "../components/buisness/Login/Control/EmailControl";
import PasswordControl from "../components/buisness/Login/Control/PasswordControl";

export default function Login() {
  const navigate = useNavigate();
  const {submit, formState: {isSubmitting, isSubmitSuccessful, isSubmitted}} = useLoginForm({
    onSuccess() {
      navigate('/');
    }
  });

  const validationSchema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
  })

  const methods = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data) => {
    submit(data);
  }

  return (
      <Container
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 10
          }}
      >
        <Typography
            component="h1"
            variant="h4"
            sx={{ mt: 2, mb: 5 }}
        >
          Connexion
        </Typography>

        <Box
            sx={{
              width: '50%'
            }}
        >
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>

              <EmailControl />

              <PasswordControl />

              <Button
                  sx={{
                    width: '100%',
                    marginTop: '10px',
                  }}
                  type={'submit'}
                  variant={'contained'}

              >
                Se connecter
              </Button>
            </form>
          </FormProvider>
        </Box>

        <Link href="/registration" underline="always" sx={{ mt: 3 }}>
          {'Pas de compte? Inscrivez-vous ici !'}
        </Link>
        <DevTool control={methods.control} /> {/* set up the dev tool */}
      </Container>
  )
}
