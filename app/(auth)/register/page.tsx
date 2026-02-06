import { Metadata } from 'next';
import RegisterClient from './RegisterClient';

export const metadata: Metadata = {
  title: 'Register',
  description: 'This is the register page of no.1 exciting e-commercer website'
};

export default function RegisterPage() {
  return <RegisterClient />;
}
