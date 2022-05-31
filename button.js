import React from 'react';
import {StyleSheet, Button, View, SafeAreaView,Text, Alert} from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Button
				title="+"
				onPress={() => Alert.alert(
					'Add')}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'Black',
		alignItems: 'top',
		justifyContent: 'corner',
	},
});
