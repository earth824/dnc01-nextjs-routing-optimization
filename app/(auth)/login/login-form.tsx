'use client';

import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();

  return (
    <div>
      {/* <form action=""> */}
      <button
        className="px-4 py-2 bg-violet-400"
        onClick={() => router.push('/')}
      >
        Submit Login
      </button>
      {/* </form> */}
    </div>
  );
}
