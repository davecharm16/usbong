import { useEffect, useState } from 'react';
import { PumpControl, pumpControlRepository } from '../repository/control_repository';

export const usePumpStore = (): { data: PumpControl | null; loading: boolean; error: string | null } => {
  const [data, setData] = useState<PumpControl | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = pumpControlRepository.listenToPumpControl(
      pumpControl => {
        setData(pumpControl);
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
