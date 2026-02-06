import { Metadata } from 'next';
import LoginForm from './login-form';

export const metadata: Metadata = {
  title: 'Login',
  description: 'This is the login page of no.1 exciting e-commercer website'
};

export default function LoginPage() {
  return (
    <div>
      This is Login Page
      <LoginForm />
    </div>
  );
}
