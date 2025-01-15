import { useState } from 'react';
import { pumpControlRepository } from '../repository/control_repository'; // Adjust the path as needed

export const useUpdatePumpOn = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updatePumpOn = async (pumpOn: boolean): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      await pumpControlRepository.updatePumpControl({ pumpOn });
      console.log('PumpOn value updated successfully.');
    } catch (err: any) {
      setError(err.message || 'Failed to update pumpOn value.');
    } finally {
      setLoading(false);
    }
  };

  const updateAutoPumpOn = async (autoPumpOn: boolean): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      await pumpControlRepository.updatePumpControl({ autoPumpOn });
      console.log('autoPumpOn value updated successfully.');
    } catch (err: any) {
      setError(err.message || 'Failed to update autoPumpOn value.');
    } finally {
      setLoading(false);
    }
  };

  return {
    updatePumpOn,
    updateAutoPumpOn,
    loading,
    error,
  };
};
