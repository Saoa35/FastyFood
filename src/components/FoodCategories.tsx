import React from 'react';
import {Image, View, TouchableOpacity, Text, FlatList} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {COLORS, Categories} from '../database/items';
import {Category} from '../@types/inrefaces';

export const FoodCategories = ({currentSelected, setCurrentSelected}: any) => {
  const renderCatigories = ({item, index}: {item: Category; index: number}) => {
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => setCurrentSelected(index)}>
        <View
          style={{
            width: 120,
            height: 180,
            justifyContent: 'space-evenly',
            alignItems: 'center',
            backgroundColor:
              currentSelected === index ? COLORS.accent : COLORS.white,
            borderRadius: 20,
            margin: 10,
            elevation: 5,
          }}>
          <View style={{width: 60, height: 60}}>
            <Image
              source={item.image}
              style={{width: '100%', height: '100%', resizeMode: 'center'}}
            />
          </View>
          <Text style={{fontSize: 18, color: COLORS.black, fontWeight: '600'}}>
            {item.name}
          </Text>
          <View
            style={{
              width: 30,
              height: 30,
              borderRadius: 100,
              backgroundColor:
                currentSelected === index ? COLORS.white : COLORS.accentRed,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome
              name="angle-right"
              style={{
                fontSize: 12,
                color: currentSelected === index ? COLORS.black : COLORS.white,
              }}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      horizontal={true}
      data={Categories}
      renderItem={renderCatigories}
      showsHorizontalScrollIndicator={false}
    />
  );
};
