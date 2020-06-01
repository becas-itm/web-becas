import React from 'react';
import { useHistory } from 'react-router-dom';
import { ArrowBack } from 'ui/Icon';
import IconButton from 'ui/IconButton';

function GoBackButton(props) {
  const { goBack } = useHistory();

  return (
    <IconButton {...props} onClick={goBack} icon={ArrowBack}>
      Ir atrás
    </IconButton>
  );
}

export default GoBackButton;
