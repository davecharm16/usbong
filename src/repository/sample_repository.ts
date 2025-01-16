import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export interface User {
  id: string;
  name: string;
  email: string;
}

class UserRepository {
  private collection = firestore().collection('users');

  listenToUsers(
    callback: (users: User[]) => void,
    onError: (error: Error) => void
  ): () => void {
    return this.collection.onSnapshot(
      (snapshot: FirebaseFirestoreTypes.QuerySnapshot) => {
        const users = snapshot.docs.map(doc => ({
          id: doc.id,
          ...(doc.data() as Omit<User, 'id'>),
        }));
        callback(users);
      },
      error => onError(error)
    );
  }
}

export const userRepository = new UserRepository();
