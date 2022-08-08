import {React} from 'react'
import {FormProvider, useForm} from "react-hook-form";
import {Box, Button, Container, Link, Stack, Typography} from '@mui/material';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from "yup";
import {DevTool} from "@hookform/devtools";
import FirstnameControl from "../components/Registration/Control/FirstnameControl";
import LastnameControl from "../components/Registration/Control/LastnameControl";
import EmailControl from "../components/Registration/Control/EmailControl";
import PasswordControl from "../components/Registration/Control/PasswordControl";
import ConfirmPasswordControl from "../components/Registration/Control/ConfirmPasswordControl";
import useRegisterForm from "../redux/modules/registerForm/hooks/useRegisterForm";

export default function Registration() {
    const {submit, formState: {isSubmitting, isSubmitSuccessful, isSubmitted}} = useRegisterForm({
        onSuccess() {
            // todo ajouter redirection vers la homepage
        }
    });

  const validationSchema = yup.object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/),
    confirmPassword: yup.string().required(),
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
          Inscription
        </Typography>

        <Box
            sx={{
              width: '50%'
            }}
        >
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
              <Stack direction={'row'} spacing={2} sx={{mb: 2}}>
                <LastnameControl />
                <FirstnameControl />
              </Stack>

              <EmailControl />

              <PasswordControl />

              <ConfirmPasswordControl />

              <Button
                  sx={{
                    width: '100%',
                    marginTop: '10px',
                  }}
                  type={'submit'}
                  variant={'contained'}

              >
                S'inscrire
              </Button>
            </form>
          </FormProvider>
        </Box>

        <Link href="/login" underline="always" sx={{ mt: 3 }}>
          {'Déjà inscrit ? Connectez-vous !'}
        </Link>
        <DevTool control={methods.control} /> {/* set up the dev tool */}
      </Container>
  )
}

