import React, {useCallback, useRef, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Alert,
  StyleSheet,
} from 'react-native';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const emailRef = useRef<TextInput | null>(null); //generic

  const passwordRef = useRef<TextInput | null>(null);

  const onChangeEmail = useCallback(text => {
    setEmail(text);
  }, []);
  const onChangePassword = useCallback(text => {
    setPassword(text);
  }, []);
  const onSubmit = useCallback(() => {
    if (!email || !email.trim()) {
      //trim =Removes the leading and trailing white space
      //and line terminator characters from a string.
      return Alert.alert('알림', '이메일을 다시 입력해주세요');
    }
    if (!password || !password.trim()) {
      return Alert.alert('알림', '비밀번호를 다시 입력해주세요');
    }
    Alert.alert('알림', '로그인 되었습니다.');
  }, [email, password]);

  const onClick = useCallback(() => {
    console.log('정보찾기', '검색중');
  }, []);
  const canGoNext = email && password;
  return (
    <View style={styles.Wrapper}>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>이메일을 입력해주세요</Text>
        <TextInput
          style={styles.textInput}
          value={email}
          onChangeText={onChangeEmail}
          placeholder="abc123@example.com"
          blurOnSubmit={false} //키보드 내려가기 방지
          returnKeyType="next" //이메일 입력 후 다음으로 버튼
          onSubmitEditing={() => {
            passwordRef.current?.focus(); //이메일로 focus 이동
          }}
          ref={emailRef}
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>비밀번호를 입력해주세요</Text>
        <TextInput
          style={styles.textInput}
          value={password}
          onChangeText={onChangePassword}
          placeholder="비밀번호 입력"
          secureTextEntry //비밀번호 *로 표시
          textContentType="password"
          ref={passwordRef}
          onSubmitEditing={onSubmit} //엔터치면 로그인될수있도록
        />
      </View>
      <View style={styles.Btn}>
        <View style={styles.BtnZone}>
          <View style={styles.findBtn}>
            <Pressable onPress={onClick} style={styles.findIdBtn}>
              <Text style={styles.findIdText}>아이디 찾기</Text>
            </Pressable>
            <Pressable onPress={onClick} style={styles.findPwBtn}>
              <Text style={styles.findPwText}>비밀번호 찾기</Text>
            </Pressable>
          </View>
          <Pressable
            onPress={onSubmit}
            style={
              !canGoNext
                ? styles.loginBtn
                : StyleSheet.compose(styles.loginBtn, styles.loginBtnActive)
            }
            disabled={!canGoNext}>
            <Text style={styles.loginBtnText}>로그인</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    flex: 1,
  },
  inputWrapper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  textInput: {
    padding: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },

  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  Btn: {
    flex: 1,
    flexDirection: 'column-reverse',
    justifyContent: 'space-between',

    // flexWrap: 'wrap',
    // justifyContent: 'center',
    backgroundColor: '#00cebes',
    marginTop: 20,
    // flexWrap: 'wrap-reverse',
    // top: 50,
  },

  findBtn: {
    flexDirection: 'row',
    paddingVertical: 2,
    borderTopWidth: 1,
    borderTopColor: 'darkgray',
    // marginTop: 50,
    // marginBottom: 10,
    // flexWrap: 'wrap-reverse',
  },
  findIdBtn: {
    width: '47.5%',
    height: 50,
    marginRight: 1,
    // alignSelf: 'flex-end',
  },
  findPwBtn: {
    width: '53.5%',
    height: 50,
  },
  findIdText: {
    marginVertical: 15,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  findPwText: {
    marginVertical: 15,
    marginHorizontal: 10,
    textAlign: 'center',
    borderLeftWidth: 1,
    borderLeftColor: 'darkgray',
  },

  loginBtn: {
    // width: '100%',
    // width: 300,
    backgroundColor: 'darkgray',
    // justifyContent: 'space-around',
  },
  loginBtnText: {
    paddingBottom: 60,
    marginTop: 10,
    color: 'white',
    alignSelf: 'center',
    fontSize: 16,
  },

  loginBtnActive: {
    backgroundColor: 'skyblue',
  },

  BtnZone: {
    // flexDirection: 'row',
    // alignSelf: '',
    // alignItems: 'center',
  },
});
export default SignIn;
