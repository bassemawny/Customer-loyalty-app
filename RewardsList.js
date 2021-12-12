import React, { useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getRewards } from './redux/Repo';
import { collectReward } from './redux/Actions'



export default function RewardsList() {
    const { rewards, collectedRewards } = useSelector(state => state.rewardsReducer);
    const dispatch = useDispatch();
    const fetchRewards = () => dispatch(getRewards());
    useEffect(() => {
        fetchRewards();
    }, []);
    const collect = reward => dispatch(collectReward(reward));
    const handleCollectReward = reward => {
        collect(reward);
    };

    const collected = reward => {
        if (collectedRewards.filter(item => item.id === reward.id).length > 0) {
            return true;
        }
        return false;
    };


    return (
        <FlatList
            data={rewards}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => {
                const IMAGE_URL = item.image;
                return (
                    <View style={{ marginVertical: 12 }}>
                        <View style={{ flexDirection: 'row', flex: 1 }}>
                            <Image
                                source={
                                    IMAGE_URL
                                        ? {
                                            uri: IMAGE_URL,
                                        }
                                        : require('./placeholder.jpeg')
                                }
                                resizeMode="cover"
                                style={{ width: 100, height: 150, borderRadius: 10, marginStart: 8 }}
                            />
                            <View style={{ flex: 1, marginLeft: 12 }}>
                                <View>
                                    <Text style={{ fontSize: 22, paddingRight: 16 }}>
                                        {item.name}
                                    </Text>
                                </View>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        marginTop: 10,
                                        alignItems: 'center',
                                    }}>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                        }}>
                                        Needed points:
                                    </Text>
                                    <Text
                                        style={{
                                            fontSize: 18,
                                            paddingLeft: 10,
                                            color: '#64676D',
                                        }}>
                                        {item.needed_points}
                                    </Text>
                                    <View
                                        style={{
                                            flex: 2,
                                            padding: 2,
                                            paddingHorizontal: 16,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            height: 40,
                                        }}>
                                        {collected(item)
                                            ? <Text style={{
                                                backgroundColor: "#2dc45d",
                                                padding: 8,
                                            }}>COLLECTED</Text>
                                            : <Button
                                                onPress={() => handleCollectReward(item)}
                                                title='Collect'
                                                disabled={item.needed_points > 0}
                                            />
                                        }


                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                );
            }
            }
            showsVerticalScrollIndicator={false}
        />
    );
};