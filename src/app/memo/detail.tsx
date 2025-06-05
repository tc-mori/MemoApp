import { View, Text, ScrollView, StyleSheet } from 'react-native'
import Icon from '../../components/Icon'

import Header from '../../components/Header'

import CircleButton from '../../components/CircleButton'

const Detail = () => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.memoHeader}>
                <Text style={styles.memoTitle}>買い物リスト</Text>
                <Text style={styles.memoDate}>2025年6月3日 15:52</Text>
            </View>
            <ScrollView style={styles.memoBody}>
                <Text style={styles.memoBodyText}>
                    買い物リスト
                    書体やレイアウトなどを確認するために用います。
                    本文用なので使い方を間違えると不自然に見えることもありますので要注意。
                </Text>
            </ScrollView>
            <CircleButton style={{ top: 150, bottom: 'auto' }}>
                <Icon name='pencil' size={40} color='rgb( 255, 255, 255 )' />
            </CircleButton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb( 255, 255, 255 )'
    },
    memoHeader: {
        backgroundColor: 'rgba( 0, 163, 129, 0.9 )',
        height: 80,
        justifyContent: 'center',
        paddingVertical: 16
    },
    memoTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgb( 255,  255, 255 )',
        left: 19
    },
    memoDate: {
        fontSize: 12,
        lineHeight: 16,
        color: 'rgb( 255, 255, 255 )',
        left: 19
    },
    memoBody: {
        paddingVertical: 32,
        paddingHorizontal: 27
    },
    memoBodyText: {
        fontSize:16,
        lineHeight: 24,
        color: 'rgb( 0, 0, 0 )'
    }
})

export default Detail
