import styled from 'styled-components';

export const Container = styled.div`
    
    display: flex;
    flex-direction: column;
    min-width: 70%;
    min-height: 100%;
    max-width: 70%;
    max-height: 100%;
    border-radius: 5px;
    margin-top: 10px;
    padding: 10px;
    background-color: #cfe1b9;
    cursor: grab;

    title {
        border: 50px solid red;
        height: 10%;
    }

    
    ul {

        display: flex;
        height: 80%;
        flex-direction: column;
        flex-wrap: wrap;

        li {
            font-size: 14px;
            border-radius: 5px;
            min-width: 450px;
            max-width: 450px;
            max-height: 30px;
            margin: 2px;
            padding-left: 2px;
            border: 1px solid green;
        }
    }

    
`;