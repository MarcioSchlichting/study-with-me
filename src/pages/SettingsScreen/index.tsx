import React, {useState} from "react";
import {SafeAreaView, View, StyleSheet, TouchableOpacity, Text, Image} from "react-native";
import FeatherIcon from 'react-native-vector-icons/Feather';


const SettingsScreen = () => {
    const [settings, setSettings] = useState({
        darkMode: false,
        emailNotifications: true,
        pushNotifications: true
    })
    
    return(<SafeAreaView style={styles.container}>
        <View style={styles.profile}>
            <TouchableOpacity
                onPress={() => {
                    // handle onPress
                }}>
                <View style={styles.profileAvatarWrapper}>
                    <Image
                        alt=""
                        source={{
                            uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
                        }}
                        style={styles.profileAvatar} />
                    <TouchableOpacity
                        onPress={() => {
                            // handle onPress
                        }}>
                        <View style={styles.profileAction}>
                            <FeatherIcon color="#fff" name="edit-3" size={15} />
                        </View>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
            <View>
                <Text style={styles.profileName}>John Doe</Text>
                <Text style={styles.profileAddress}>
                    123 Maple Street. Anytown, PA 17101
                </Text>
            </View>
        </View>
    </SafeAreaView>)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    profile: {
        padding: 24,
        backgroundColor: '#fff',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    profileAvatarWrapper: {
        position: 'relative',
    },
    profileAvatar: {
        width: 72,
        height: 72,
        borderRadius: 9999,
    },
    profileAction: {
        position: 'absolute',
        right: -4,
        bottom: -10,
        alignItems: 'center',
        justifyContent: 'center',
        width: 28,
        height: 28,
        borderRadius: 9999,
        backgroundColor: '#007bff',
    },
    profileName: {
        marginTop: 20,
        fontSize: 19,
        fontWeight: '600',
        color: '#414d63',
        textAlign: 'center',
    },
    profileAddress: {
        marginTop: 5,
        fontSize: 16,
        color: '#989898',
        textAlign: 'center',
    },
    /** Section */
    section: {
        paddingHorizontal: 24,
    },
    sectionTitle: {
        paddingVertical: 12,
        fontSize: 12,
        fontWeight: '600',
        color: '#9e9e9e',
        textTransform: 'uppercase',
        letterSpacing: 1.1,
    },
    /** Row */
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: 50,
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
        marginBottom: 12,
        paddingHorizontal: 12,
    },
    rowIcon: {
        width: 32,
        height: 32,
        borderRadius: 9999,
        marginRight: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    rowLabel: {
        fontSize: 17,
        fontWeight: '400',
        color: '#0c0c0c',
    },
    rowSpacer: {
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
})

export default SettingsScreen;