"use client";

import { useRouter } from "next/navigation";

interface LoginButtonProps {
  children: React.ReactNode,
  mode?: 'modal' | 'redirect',
  asChild?: boolean
}

const LoginButton: React.FC<LoginButtonProps> = ({ children, asChild, mode }) => {
  const router = useRouter();
  
  const onClick = () => {
    router.push('/auth/login');
  }

  if (mode === 'modal') {
    return (
      'TODO: Modal'
    );
  }
  
  return (
    <span className="cursor-pointer" onClick={ onClick }>Login</span>
  );
}

export default LoginButton;