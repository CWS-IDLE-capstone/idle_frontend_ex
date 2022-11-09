import React, {useCallback} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type ScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'SignIn',
  'SignUp'
>;

function StartP({navigation}: ScreenProps) {
  const toSignIn = useCallback(() => {
    navigation.navigate('SignIn');
  }, [navigation]);
  const onClick = useCallback(() => {
    navigation.navigate('SignUp');
  }, [navigation]);
  return (
    <>
      <View>
        <Text style={styles.welcomeText}>반가워요!</Text>
        <Text style={styles.introText}>
          주변의 강아지 친구를 찾고 산책을 시작해요
        </Text>
      </View>
      <View style={styles.loginMenu}>
        <Text style={styles.loginNaver}>네이버로 시작하기</Text>
        <Text style={styles.loginFaceBook}>페이스북으로 시작하기</Text>
        <Text style={styles.loginGoogle}>구글로 시작하기</Text>
        <Text style={styles.loginKaKao}>카카오톡으로 시작하기</Text>
      </View>
      <View style={styles.emailBtn}>
        <Pressable onPress={toSignIn} style={styles.emailSignInButton}>
          <Text>이메일로 로그인</Text>
        </Pressable>
        <Pressable onPress={onClick} style={styles.emailSingUpButton}>
          <Text>이메일로 회원가입</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  welcomeText: {
    fontSize: 35,
    color: 'peru',
    fontWeight: 'bold',
    marginTop: 150,
    marginHorizontal: 130,
    textAlign: 'center',
    // backgroundColor: 'orange',
  },
  introText: {
    fontSize: 16,
    color: 'peru',
    fontWeight: 'bold',
    marginTop: 20,
    marginHorizontal: 110,
    textAlign: 'center',
    // backgroundColor: 'skyblue',
  },
  //시작하기 버튼
  loginMenu: {
    height: 160,
    padding: 5,
    alignItems: 'center',
    marginTop: 80,
    marginHorizontal: 30,
    // backgroundColor: '#e6e6fa',
  },
  loginNaver: {
    margin: 5,
    width: 320,
    height: 35,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'limegreen',
    borderColor: 'limegreen',
    borderRadius: 10,
    borderWidth: 1,
  },
  loginFaceBook: {
    margin: 5,
    width: 320,
    height: 35,
    backgroundColor: 'royalblue',
    color: 'white',
    fontSize: 12,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderColor: 'royalblue',
    borderRadius: 10,
    borderWidth: 1,
  },
  loginGoogle: {
    margin: 5,
    width: 320,
    height: 35,
    backgroundColor: 'ghostwhite',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    borderColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
  },
  loginKaKao: {
    display: 'none',
    margin: 5,
    width: 320,
    height: 35,
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'gold',
    borderColor: 'gold',
    borderRadius: 10,
    borderWidth: 1,
  },
  //이메일로 로그인, 회원가입
  emailBtn: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  emailSignInButton: {
    fontSize: 10,
    borderBottomWidth: 0.5,
    margin: 10,
    alignItems: 'center',
  },
  emailSingUpButton: {
    fontSize: 10,
    borderBottomWidth: 0.5,
    margin: 10,
    alignItems: 'center',
  },
});

export default StartP;
