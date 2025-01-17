import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import HeaderBar from '../../shared/header-bar';
import {wp} from '../../shared/resposive-dimension';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors as color} from '../../colors';
import {getTime} from '../../utils/helpers';

export class UserInfo extends Component {
  render() {
    const {
      colors,
      fullName,
      countries,
      gender,
      avatar,
      createdAt,
    } = this.props?.route?.params?.details;
    return (
      <View style={styles.container}>
        <HeaderBar
          title={fullName || 'Ridwan Ajibola'}
          leftIcon
          rightIcon
          onLeftPress={() => this.props.navigation.goBack()}
          onRightPress={() => this.props.navigation.navigate('Home')}
        />

        <Image
          source={{
            uri: avatar || 'https://randomuser.me/api/portraits/women/12.jpg',
          }}
          style={styles.avatar}
        />
        <Text style={styles.name}>{fullName || 'Ridwan Ajibola'}</Text>
        <Text style={styles.gender}>{gender || 'Male'}</Text>
        <Text style={styles.about}>
          orem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat
          a nibh id convallis. Aliquam condimentum in ante nec sagittis.
          Suspendisse a felis ornare, pellentesque purus a, auctor orci. Mauris
          in congue ante. Integer aliquet imperdiet tortor a tristique. Quisque.
        </Text>

        <Section title="time">
          <Text style={styles.time}>
            {getTime(createdAt || 'Sat, 29 Feb 2020 09:34:31 GMT')}
          </Text>
          <Text style={styles.timeLabel}>current</Text>
        </Section>

        <Section title="Countries">
          {countries?.map((country, i) => (
            <Text style={styles.country} key={i}>
              {country}
            </Text>
          ))}
        </Section>

        <Section title="colors">
          {colors?.map((color, i) => (
            <View
              style={[
                styles.color,
                {left: 20 * i, backgroundColor: `${color.toLowerCase()}`},
              ]}
              key={i}
            />
          ))}
        </Section>
      </View>
    );
  }
}

const Section = ({title, children}) => {
  return (
    <>
      <Text style={styles.myColors}>{title}</Text>
      <View style={styles.childContainer}>
        {children?.length ? (
          children
        ) : (
          <View>
            <Icon
              name="md-information-circle-sharp"
              size={wp(25)}
              color={color.dark}
            />
            <Text style={styles.emptyText}>No {title}</Text>
          </View>
        )}
      </View>
    </>
  );
};

export default UserInfo;

UserInfo.defaultProps = {
  id: '5e5a3027d9d9e4a6369c835b',
  avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
  fullName: 'Addie Sharon',
  createdAt: 'Sat, 29 Feb 2020 09:34:31 GMT',
  gender: 'male',
  colors: [],
  countries: [
    'China',
    'South Africa',
    'france',
    'Mexico',
    'Japan',
    'Estonia',
    'Colombia',
    'China',
  ],
};
