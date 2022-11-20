import Geolocation from '@react-native-community/geolocation';
import React, {useEffect, useState} from 'react';
import {View, Dimensions, Text} from 'react-native';
import NaverMapView, {Marker, Path} from 'react-native-nmap';

function Ing() {
  // const [myPosition, setMyPosition] = useState<{
  //   latitude: number;
  //   longitude: number;
  // } | null>(null);

  // useEffect(() => {
  //   Geolocation.watchPosition(
  //     //getCurrentPosition(
  //     info => {
  //       setMyPosition({
  //         latitude: info.coords.latitude,
  //         longitude: info.coords.longitude,
  //       });
  //     },
  //     console.error,
  //     {
  //       enableHighAccuracy: true,
  //       timeout: 20000, //20초
  //       distanceFilter: 100, //100m이상 움직였을때 위의 콜백을 실행시키겠다
  //     },
  //   );
  // }, []);
  // const {start, end} = deliveries?.[0];

  return (
    <View>
      <View
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}>
        <NaverMapView
          style={{width: '100%', height: '100%'}}
          zoomControl={true}
          center={{
            zoom: 10,
            // tilt: 50,
            latitude: 37.45639, //중간지점
            longitude: 126.70528, //중간지점
          }}>
          <Marker
            coordinate={{
              latitude: 37.40644, //myPosition.latitude,
              longitude: 126.6688, //myPosition.longitude,
            }}
            width={15}
            height={15}
            anchor={{x: 0.5, y: 0.5}}
            caption={{text: '현위치'}}
            image={require('../assets/red-dot.png')}
          />
          {/* 
          {myPosition?.latitude && (
            <Path
              coordinates={[
                {
                  latitude: myPosition.latitude,
                  longitude: myPosition.longitude,
                },
                {latitude: start.latitude, longitude: start.longitude},
              ]}
              color="orange"
            />
          )}
          <Marker
            coordinate={{
              latitude: start.latitude,
              longitude: start.longitude,
            }}
            width={15}
            height={15}
            anchor={{x: 0.5, y: 0.5}}
            caption={{text: '출발'}}
            image={require('../assets/blue-dot.png')}
          />
          <Path
            coordinates={[
              {
                latitude: start.latitude,
                longitude: start.longitude,
              },
              {latitude: end.latitude, longitude: end.longitude},
            ]}
            color="orange"
          />
          <Marker
            coordinate={{latitude: end.latitude, longitude: end.longitude}}
            width={15}
            height={15}
            anchor={{x: 0.5, y: 0.5}}
            caption={{text: '도착'}}
            image={require('../assets/green-dot.png')}
            onClick={() => {
              console.log(navigation);
              navigation.push('Complete', {orderId: deliveries[0].orderId});
            }}
          /> */}
        </NaverMapView>
      </View>
      <Text>ㅡ</Text>
    </View>
  );
}

export default Ing;
