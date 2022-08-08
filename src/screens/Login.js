import { React, useState } from 'react'
import {
  Typography,
  TextField,
  Button,
  Grid,
  Container,
  Link
} from '@mui/material'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState({ input: -1, message: '' });

  // Test regex on fields
  const checkFields = () => {
    if (email.length === 0) {
      setError({
        input: 0,
        message: 'Ce champs doit être rempli'
      });
      return false;
    }
    if (password.length === 0) {
      setError({
        input: 1,
        message: 'Ce champs doit être rempli'
      });
      return false;
    }
    setError({
      input: -1,
      message: ''
    });
    return true;
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
      <Typography component="h1" variant="h4" sx={{ mt: 2, mb: 5 }}>
        Connexion
      </Typography>
      <Grid
        container
        item
        direction="row"
        justifyContent="center"
        alignItems="center"
        xs={12}
        md={6}
        columnSpacing={2}
        rowSpacing={1}
      >
        <Grid item xs={12}>
          <TextField
            label="Adresse email"
            variant="outlined"
            required
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
            error={error.input === 0}
            helperText={error.input === 0 ? error.message : ' '}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Mot de passe"
            variant="outlined"
            type="password"
            required
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
            error={error.input === 1}
            helperText={error.input === 1 ? error.message : ' '}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={() => checkFields()}
            type="submit"
            fullWidth
            variant="contained"
            sx={{ py: 1.4 }}
          >
            Se connecter
          </Button>
        </Grid>
      </Grid>
      <Link href="/register" underline="always" sx={{ mt: 3 }}>
        Pas encore inscrit ? Créez-vous un compte !
      </Link>
    </Container>
  )
}
