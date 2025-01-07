import { useEffect, useState } from 'react';
import { userRepository, User } from '../repository/sample_repository';

export const useFirestoreData = (): { data: User[] | null; loading: boolean; error: string | null } => {
  const [data, setData] = useState<User[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = userRepository.listenToUsers(
      users => {
        setData(users);
        setLoading(false);
      },
      err => {
        setError(err.message);
        setLoading(false);
      }
    );

    // Cleanup listener on unmount
    return () => unsubscribe();
  }, []);

  return { data, loading, error };
};
