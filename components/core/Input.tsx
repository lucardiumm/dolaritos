import { colors } from "@/extra/colors"
import { FontAwesome } from "@expo/vector-icons"
import { useState } from "react"
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, TextInput, View } from "react-native"

export default function Input({ Press, Placeholder }: InputType) {
    const [content, setContent] = useState(Placeholder)

    return (
        <KeyboardAvoidingView
            style={{
                width: '80%',
                alignContent: 'center',
                height: '7%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            keyboardVerticalOffset={30}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <View style={[styles.input]}>
                <TextInput
                    placeholderTextColor={colors.black}
                    value={content} 
                    onChangeText={setContent}
                    placeholder={'username#0000'}
                    onBlur={() => {
                        Keyboard.dismiss()
                    }}
                    onSubmitEditing={() => {
                        Keyboard.dismiss()
                        Press(content)
                    }}
                    style={styles.inputField}
                />
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    plus: {
        position: 'absolute',
        left: 25,
    },
    inputField: {
        color: colors.black,
        textAlign: 'center',
        justifyContent: 'center',
        fontFamily: 'mon-sb',
        borderRadius: 99999,
        width: 140,
    },  
    input: {
        flex: 1,
        borderRadius: 999999,
        paddingHorizontal: 90,
        paddingVertical: 20,
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.light,
    },
})