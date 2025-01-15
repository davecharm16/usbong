import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export interface PumpControl {
  autoOnHour: number;
  autoOnMinute: number;
  moistureThreshold: number;
  pumpOn: boolean;
}

class PumpControlRepository {
  private document = firestore().collection('pumpControl').doc('settings');

  // Listen to real-time changes for the specific document
  listenToPumpControl(
    callback: (pumpControl: PumpControl) => void,
    onError: (error: Error) => void
  ): () => void {
    return this.document.onSnapshot(
      (doc: FirebaseFirestoreTypes.DocumentSnapshot) => {
        if (doc.exists) {
          callback(doc.data() as PumpControl);
        } else {
          onError(new Error('Document does not exist'));
        }
      },
      error => onError(error)
    );
  }

  // Fetch the specific document once (not real-time)
  async getPumpControl(): Promise<PumpControl> {
    try {
      const doc = await this.document.get();
      if (doc.exists) {
        return doc.data() as PumpControl;
      } else {
        throw new Error('Document does not exist');
      }
    } catch (error) {
      throw error;
    }
  }

  // Update the document with new PumpControl values
  async updatePumpControl(newPumpControl: Partial<PumpControl>): Promise<void> {
    try {
      await this.document.update(newPumpControl);
      console.log('Document updated successfully.');
    } catch (error: any) {
      throw new Error(`Failed to update the document: ${error.message}`);
    }
  }
}

export const pumpControlRepository = new PumpControlRepository();
