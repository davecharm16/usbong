import { useEffect, useState } from 'react';
import { NotificationProps, notifRepository } from '../repository/notif_repository';

export const useNotifHook = (): { data: NotificationProps[] | null; loading: boolean; error: string | null } => {
  const [data, setData] = useState<NotificationProps[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = notifRepository.listenToNotifs(
      notif => {
        setData(notif);
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
