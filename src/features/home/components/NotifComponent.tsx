import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Text,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import {Card} from 'react-native-paper';
import IconComponent from './icons/IconComponent';
import PowerIcon from '../../../core/icons/PowerIcon';
import EditIcon from '../../../core/icons/EditIcon';
import TimeIcon from '../../../core/icons/TimeIcon';
import BellIcon from '../../../core/icons/BellIcon';
import {colors} from '../../../core/utils/constants';
import {useUpdatePumpOn} from '../../../hooks/useUpdatePump';
import {useUpdatePumpSettings} from '../../../hooks/useUpdatePumpSettings';
import {usePumpStore} from '../../../hooks/usePumpStore';

const NotifComponent = () => {
  const iconStyle = [styles.icon, {backgroundColor: colors.primary}];
  const {
    updatePumpOn,
    updateAutoPumpOn,
    error: pumpOnError,
  } = useUpdatePumpOn();
  const {data: pumpControlData} = usePumpStore();
  const {
    updatePumpSettings,
    loading: settingsLoading,
    error: settingsError,
  } = useUpdatePumpSettings();

  const [pumpOn, setPumpOn] = useState(pumpControlData?.pumpOn || false);
  const [autoPumpOn, setAutoPumpOn] = useState(
    pumpControlData?.autoPumpOn || false,
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState({
    moistureThreshold: pumpControlData?.moistureThreshold?.toString() || '',
    autoOnHour: pumpControlData?.autoOnHour?.toString() || '',
    autoOnMinute: pumpControlData?.autoOnMinute?.toString() || '',
  });

  const handleToggle = async () => {
    const newPumpOnState = !pumpOn;
    setPumpOn(newPumpOnState); // Optimistic update
    try {
      await updatePumpOn(newPumpOnState);
    } catch (err) {
      Alert.alert('Error', pumpOnError || 'Failed to toggle pump state.');
    }
  };

  const handleAutoOnToggle = async () => {
    const newAutoOnState = !autoPumpOn;
    setAutoPumpOn(newAutoOnState); // Optimistic update
    try {
      await updateAutoPumpOn(newAutoOnState);
    } catch (err) {
      Alert.alert('Error', pumpOnError || 'Failed to toggle pump state.');
    }
  };

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({...prev, [name]: value}));
  };

  const validateInputs = () => {
    const hour = parseInt(formData.autoOnHour, 10);
    const minute = parseInt(formData.autoOnMinute, 10);
    const threshold = parseInt(formData.moistureThreshold, 10);

    if (isNaN(threshold) || threshold < 0 || threshold > 100) {
      Alert.alert(
        'Invalid Input',
        'Moisture Threshold must be between 0 and 100.',
      );
      return false;
    }

    if (isNaN(hour) || hour < 1 || hour > 24) {
      Alert.alert('Invalid Input', 'Hour must be between 1 and 24.');
      return false;
    }

    if (isNaN(minute) || minute < 0 || minute > 60) {
      Alert.alert('Invalid Input', 'Minute must be between 0 and 60.');
      return false;
    }

    return true;
  };

  const handleSave = async () => {
    if (validateInputs()) {
      try {
        await updatePumpSettings({
          moistureThreshold: parseInt(formData.moistureThreshold, 10),
          autoOnHour: parseInt(formData.autoOnHour, 10),
          autoOnMinute: parseInt(formData.autoOnMinute, 10),
        });
        setModalVisible(false);
        Alert.alert('Success', 'Settings saved successfully.');
      } catch (err) {
        Alert.alert('Error', settingsError || 'Failed to save settings.');
      }
    }
  };

  return (
    <>
      <Card style={styles.container}>
        <View style={styles.row}>
          <IconComponent
            icon={
              <PowerIcon color={pumpControlData?.pumpOn ? 'yellow' : 'white'} />
            }
            onPress={handleToggle}
            style={iconStyle}
          />
          <IconComponent
            icon={<EditIcon />}
            onPress={() => setModalVisible(true)}
            style={iconStyle}
          />
        </View>
        <View style={styles.row}>
          <IconComponent
            icon={
              <TimeIcon
                color={pumpControlData?.autoPumpOn ? 'yellow' : 'white'}
              />
            }
            onPress={handleAutoOnToggle}
            style={iconStyle}
          />
          <IconComponent
            icon={<BellIcon />}
            onPress={() => {}}
            style={iconStyle}
          />
        </View>
      </Card>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Pump Settings</Text>
            <TextInput
              style={styles.input}
              placeholder="Moisture Threshold"
              keyboardType="numeric"
              value={formData.moistureThreshold}
              onChangeText={value =>
                handleInputChange('moistureThreshold', value)
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Hour"
              keyboardType="numeric"
              value={formData.autoOnHour}
              onChangeText={value => handleInputChange('autoOnHour', value)}
            />
            <TextInput
              style={styles.input}
              placeholder="Minute"
              keyboardType="numeric"
              value={formData.autoOnMinute}
              onChangeText={value => handleInputChange('autoOnMinute', value)}
            />
            <View style={styles.modalButtons}>
              <Button title="Cancel" onPress={() => setModalVisible(false)} />
              <Button
                title="Save"
                onPress={handleSave}
                disabled={settingsLoading}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    minHeight: 133,
    backgroundColor: '#EFEFEF',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  icon: {
    padding: 10,
    borderRadius: 999,
  },
  loading: {
    marginTop: 20,
    alignSelf: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
});

export default NotifComponent;
