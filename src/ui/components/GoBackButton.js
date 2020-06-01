import React from 'react';
import { useHistory } from 'react-router-dom';
import { ArrowBack } from 'ui/components/Icon';
import IconButton from 'ui/components/IconButton';

function GoBackButton(props) {
  const { goBack } = useHistory();

  return (
    <IconButton {...props} onClick={goBack} icon={ArrowBack}>
      Ir atrás
    </IconButton>
  );
}

export default GoBackButton;
