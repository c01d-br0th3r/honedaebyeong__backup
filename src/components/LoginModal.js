import React, {useState, useEffect} from 'react';
import { Modal, Button, Input, Icon, Divider } from 'semantic-ui-react';
import styled from "styled-components";

const Userpanel = styled.div`
    font-size:0.9em;
    color:#AAAAAA;
`;

const LoginModal = () => {
    return(
        <>
            <Modal.Header>
                홍대병 로그인
            </Modal.Header>
            <Modal.Content>
                <Input fluid></Input>
                <br/>
                <Input fluid></Input>
                <br/>
                <Button color='orange' fluid>홍대병 로그인</Button>
                <br/>
                <Userpanel>ID 찾기 | 비밀번호 찾기 | 회원가입
                    
                </Userpanel>
                <Divider horizontal>또는</Divider>
                
                <Button color='facebook' fluid>
                    <Icon name='facebook' /> 페이스북 로그인
                </Button>
                <br/>
                <Button color='google plus' fluid>
                    <Icon name='google plus' /> 구글 로그인
                </Button>
                <br/>
                <Button color='instagram' fluid>
                    <Icon name='instagram' /> 인스타그램 로그인
                </Button>
            </Modal.Content>
        </>
    );
}

export default LoginModal;