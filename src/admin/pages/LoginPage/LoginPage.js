import React from 'react';
import { useLogin } from 'auth/index';
import { ThreeRowTemplate } from 'ui/ThreeRowTemplate';

import LoginCard from './LoginCard';

export default function LoginPage() {
  const login = useLogin();
  return (
    <ThreeRowTemplate header={null}>
      <div className="flex justify-center mt-12 lg:mt-20">
        <LoginCard onSubmit={login.attempt} isLoading={login.isLoading} />
      </div>
    </ThreeRowTemplate>
  );
}
