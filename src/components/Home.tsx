import React, {useState} from 'react';
import {
  Image,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Text,
  TextInput,
  FlatList,
} from 'react-native';
import {COLORS, Categories} from '../database/items';
import Material from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import {Category} from '../@types/inrefaces';

const Home: React.FC = () => {
  const [currentSelected, setCurrentSelected] = useState(0);

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
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white,
      }}>
      <ScrollView>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: COLORS.white,
            position: 'relative',
          }}>
          <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />

          <Image
            source={require('../database/images/background.png')}
            style={{position: 'absolute', top: 0, left: -100}}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 20,
            }}>
            <TouchableOpacity style={{width: 40, height: 40}}>
              <Image
                source={require('../database/images/profile.jpg')}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                  borderRadius: 500,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Material
                name="segment"
                style={{fontSize: 28, color: COLORS.black}}
              />
            </TouchableOpacity>
          </View>

          <View style={{padding: 20}}>
            <Text
              style={{
                fontSize: 20,
                color: COLORS.black,
                opacity: 0.5,
                fontWeight: '600',
              }}>
              Fasty
            </Text>

            <Text
              style={{
                fontSize: 40,
                color: COLORS.black,
                opacity: 0.5,
                fontWeight: '600',
                letterSpacing: 2,
              }}>
              Food
            </Text>
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              paddingVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Ionicons
              name="search"
              style={{fontSize: 20, color: COLORS.black, opacity: 0.8}}
            />
            <TextInput
              placeholder="Search..."
              style={{
                color: COLORS.black,
                fontSize: 16,
                paddingVertical: 5,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.black + 30,
                width: '90%',
                marginLeft: 10,
                letterSpacing: 1,
              }}
            />
          </View>
          <Text
            style={{
              paddingTop: 20,
              paddingHorizontal: 20,
              fontSize: 18,
              fontWeight: '700',
              color: COLORS.black,
              letterSpacing: 1,
            }}>
            Categories
          </Text>
          <FlatList
            horizontal={true}
            data={Categories}
            renderItem={renderCatigories}
            showsHorizontalScrollIndicator={false}
          />
          <Text
            style={{
              paddingTop: 20,
              paddingHorizontal: 20,
              fontSize: 18,
              fontWeight: '700',
              color: COLORS.black,
            }}>
            Popular
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
