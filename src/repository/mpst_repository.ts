import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export interface MPST {
  moisture: number;
  pH: number;
  salinity: number;
  temperature: number;
}

class MPSTRepository {
  private document = firestore().collection('mpst').doc('mpstdata');

  // Listen to real-time changes for the specific document
  listenToMPST(
    callback: (npk: MPST) => void,
    onError: (error: Error) => void
  ): () => void {
    return this.document.onSnapshot(
      (doc: FirebaseFirestoreTypes.DocumentSnapshot) => {
        if (doc.exists) {
          callback(doc.data() as MPST);
        } else {
          onError(new Error('Document does not exist'));
        }
      },
      error => onError(error)
    );
  }

  // Fetch the specific document once (not real-time)
  async getMpst(): Promise<MPST> {
    try {
      const doc = await this.document.get();
      if (doc.exists) {
        return doc.data() as MPST;
      } else {
        throw new Error('Document does not exist');
      }
    } catch (error) {
      throw error;
    }
  }
}

export const mpstRepository = new MPSTRepository();
