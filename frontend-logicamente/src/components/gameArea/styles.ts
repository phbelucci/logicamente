import styled from 'styled-components';
import back from '../../assets/screenMockup.png';

export const Container = styled.div`
    
    max-width: 100%;
    min-width: 400px;
    max-height: 100%;
    min-height: 500px;
    background-color: #cfe1b9;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;

    img {
        background-image: url("${back}");
        max-width: 100%;
        min-width: 100%;
        max-height: 100%;
        min-height: 500px;
    }

`;