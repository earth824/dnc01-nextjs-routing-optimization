import { PropsWithChildren } from 'react';

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div>
      <h1 className="bg-pink-400">AuthLayout</h1>
      {children}
    </div>
  );
}
