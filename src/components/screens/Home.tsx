import React, {useState} from 'react';
import {
  Image,
  View,
  ScrollView,
  StatusBar,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import {COLORS} from '../../database/items';
import Segment from 'react-native-vector-icons/MaterialIcons';
import Search from 'react-native-vector-icons/Ionicons';

import {FoodCategories} from '../FoodCategories';
import {FoodItems} from '../FoodItems';

const Home: React.FC = ({navigation}: any) => {
  const [currentSelected, setCurrentSelected] = useState(0);

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white,
      }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: COLORS.white,
            position: 'relative',
          }}>
          <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />

          <Image
            source={require('../../database/images/background.png')}
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
                source={require('../../database/images/profile.jpg')}
                style={{
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                  borderRadius: 500,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity>
              <Segment
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
            <Search
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

          <FoodCategories
            currentSelected={currentSelected}
            setCurrentSelected={setCurrentSelected}
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

          <FoodItems
            currentSelected={currentSelected}
            navigation={navigation}
          />

          <TouchableOpacity
            style={{
              margin: 30,
              justifyContent: 'center',
              alignItems: 'center',
              opacity: 0.5,
            }}>
            <Text
              style={{
                fontSize: 16,
                color: COLORS.black,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.black,
              }}>
              Load more
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
