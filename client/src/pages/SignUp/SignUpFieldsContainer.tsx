import styled from 'styled-components';

import SignUpFieldsInputContainer from './SignUpFieldsInputContainer';

import { useInputType } from '../../types/costomHooksTypes';

const SignUpFieldsContainer = ({
  inputUserName,
  inputEmail,
  inputPassWord
}: useInputType) => {
  return (
    <StyledSignUpFieldsContainer>
      <SignUpFieldsInputContainer
        placeholder='ex)인디벗'
        title='닉네임'
        useInput={inputUserName}
        validmessage='한글/영문 2-10자로 작성해주세요.'
      ></SignUpFieldsInputContainer>
      <SignUpFieldsInputContainer
        placeholder='ex)inddy@gmail.com'
        title='아이디'
        useInput={inputEmail}
        validmessage='유효한 이메일 형식이 아닙니다.'
      ></SignUpFieldsInputContainer>
      <SignUpFieldsInputContainer
        placeholder='8자리 이상'
        title='비밀번호'
        useInput={inputPassWord}
        validmessage='비밀번호는 영문 대/소문자,숫자,특수문자의 조합으로 8-16자이어야 합니다.'
      ></SignUpFieldsInputContainer>
    </StyledSignUpFieldsContainer>
  );
};

export default SignUpFieldsContainer;

const StyledSignUpFieldsContainer = styled.div`
  margin-bottom: 24px;
`;
