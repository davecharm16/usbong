import { useState } from 'react';
import { pumpControlRepository } from '../repository/control_repository'; // Adjust the path

export const useUpdatePumpSettings = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const updatePumpSettings = async (settings: {
    moistureThreshold: number;
    autoOnHour: number;
    autoOnMinute: number;
  }): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      await pumpControlRepository.updatePumpControl(settings);
      console.log('Pump settings updated successfully.');
    } catch (err: any) {
      setError(err.message || 'Failed to update pump settings.');
    } finally {
      setLoading(false);
    }
  };

  return {
    updatePumpSettings,
    loading,
    error,
  };
};
