import firestore, { FirebaseFirestoreTypes, Timestamp } from '@react-native-firebase/firestore';

export interface NotificationProps {
  message: number;
  title: number;
  timestamp: Timestamp;
  details: Details;
  id: string;
}

export interface Details {
  moisture: number;
  threshold: number;
}

class NotifRepository {
  private collection = firestore().collection('notification');

  // Listen to real-time changes for the notifications collection
  listenToNotifs(
    callback: (notifications: NotificationProps[]) => void,
    onError: (error: Error) => void
  ): () => void {
    return this.collection.onSnapshot(
      (snapshot: FirebaseFirestoreTypes.QuerySnapshot) => {
        const notifications: NotificationProps[] = snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            id: doc.id // Include document ID if needed
          } as NotificationProps;
        });
        callback(notifications);
      },
      error => onError(error)
    );
  }

  // Fetch all documents from the notifications collection once (not real-time)
  async getAllNotifications(): Promise<NotificationProps[]> {
    try {
      const snapshot = await this.collection.get();
      return snapshot.docs.map(doc => {
        return {
          ...doc.data(),
          id: doc.id // Include document ID if needed
        } as NotificationProps;
      });
    } catch (error) {
      throw error;
    }
  }
}

export const notifRepository = new NotifRepository();
