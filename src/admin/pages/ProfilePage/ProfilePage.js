import React from 'react';
import { useAuth } from 'auth/hooks';
import AdminTemplate from 'admin/ui/AdminTemplate';

import { useEditUser } from './useEditUser';
import { UserProfileCard } from './UserProfileCard';

export default function ProfilePage() {
  const { user } = useAuth();
  const { edit, isLoading } = useEditUser(user.id);

  return (
    <AdminTemplate>
      <div className="max-w-sm mx-auto my-8 mx-4">
        <UserProfileCard user={user} onEdit={edit} isLoading={isLoading} />
      </div>
    </AdminTemplate>
  );
}
