import {View, Text, TouchableOpacity} from 'react-native';
import {COLORS} from '../../database/items';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

function FullItem({route, navigation}: any) {
  const {
    name,
    price,
    isTopOfTheWeek,
    image,
    size,
    crust,
    delivery,
    ingredients,
  } = route.params;

  return (
    <View
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: COLORS.white,
        position: 'relative',
      }}>
      <View style={{padding: 20}}>
        <TouchableOpacity
          style={{
            width: 40,
            height: 40,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: COLORS.lightGray,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FontAwesome
            name="angle-left"
            style={{fontSize: 20, color: COLORS.black}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default FullItem;
