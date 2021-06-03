import React from 'react'
import { Text } from 'react-native';
import Container from '../../components/common/Container/Index';
import Input from '../../components/common/Input';

const Login = () => {
    const [value, onChangeText] = React.useState('');

    return(
        <Container>
            <Input
                label='Username'
                onChangeText={(text) => onChangeText(text)}
                value={value}
                iconPosition="right"
                //error={"This field is required"}
            />

            <Input
                label='Password'
                onChangeText={(text) => onChangeText(text)}
                value={value}
                icon={<Text>HIDE</Text>}
                iconPosition="right"
            />
        </Container>
    )
}

export default Login