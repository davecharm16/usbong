import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export interface NPK {
  n: number;
  p: number;
  k: number;
}

class NPKRepository {
  private document = firestore().collection('npk').doc('npkdata');

  // Listen to real-time changes for the specific document
  listenToNPK(
    callback: (npk: NPK) => void,
    onError: (error: Error) => void
  ): () => void {
    return this.document.onSnapshot(
      (doc: FirebaseFirestoreTypes.DocumentSnapshot) => {
        if (doc.exists) {
          callback(doc.data() as NPK);
        } else {
          onError(new Error('Document does not exist'));
        }
      },
      error => onError(error)
    );
  }

  // Fetch the specific document once (not real-time)
  async getNPK(): Promise<NPK> {
    try {
      const doc = await this.document.get();
      if (doc.exists) {
        return doc.data() as NPK;
      } else {
        throw new Error('Document does not exist');
      }
    } catch (error) {
      throw error;
    }
  }
}

export const npkRepository = new NPKRepository();
