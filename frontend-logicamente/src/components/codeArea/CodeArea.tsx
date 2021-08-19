import React from 'react';
import SortedCodeArea from '../sortCodeArea/SortedCodeArea';
import ActionsGameArea from '../actionsGameArea/ActionsGameArea';
import InputCodeArea from "../inputCodeArea/InputCodeArea";

import { Container } from './styles';


const CodeArea: React.FC = () => {


  return (
    <Container>
      <SortedCodeArea>SortedCodeArea</SortedCodeArea>
      <ActionsGameArea>ActionsGameArea</ActionsGameArea>
      <InputCodeArea>InputCodeArea</InputCodeArea>
    </Container>
  );
}

export default CodeArea;