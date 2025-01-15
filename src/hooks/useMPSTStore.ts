import { useEffect, useState } from 'react';
import { MPST, mpstRepository } from '../repository/mpst_repository';

export const useMPSTStore = (): { data: MPST | null; loading: boolean; error: string | null } => {
  const [data, setData] = useState<MPST | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = mpstRepository.listenToMPST(
      mpst => {
        setData(mpst);
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
