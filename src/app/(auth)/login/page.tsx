import { Suspense } from 'react';
import { LoginPage } from '@/features/auth/pages/LoginPage';
import { Spinner } from '@/components/shared/Spinner';

export default function Page() {
  return (
<Suspense fallback={<Spinner />}>
      <LoginPage />
    </Suspense>
  );
} 