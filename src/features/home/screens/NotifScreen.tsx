import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useNotifHook} from '../../../hooks/useNotifHook';
import {Card, Title, Paragraph} from 'react-native-paper';
import {NotificationProps} from '../../../repository/notif_repository';

const NotifScreen = () => {
  const {data, loading, error} = useNotifHook();

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#6200ee" />
        <Text>Loading notifications...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Error: {error}</Text>
      </View>
    );
  }

  if (!data || data.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Text style={styles.emptyText}>No notifications available.</Text>
      </View>
    );
  }

  const renderNotification = ({item}: {item: NotificationProps}) => (
    <Card style={styles.card}>
      <Card.Content>
        <Title>{item.title}</Title>
        <Paragraph>{item.message}</Paragraph>
        <Paragraph>Moisture: {item.details?.moisture || 'N/A'}</Paragraph>
        <Paragraph>Threshold: {item.details?.threshold || 'N/A'}</Paragraph>
        <Paragraph style={styles.timestamp}>
          Date: {item.timestamp.toDate().toLocaleString()}
        </Paragraph>
      </Card.Content>
    </Card>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderNotification}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#555',
  },
  card: {
    marginBottom: 16,
  },
  timestamp: {
    marginTop: 8,
    fontSize: 12,
    color: '#999',
  },
});

export default NotifScreen;
