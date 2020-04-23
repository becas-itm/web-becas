import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowBack } from 'ui/components/Icon';
import IconButton from 'ui/components/IconButton';

function GoBackButton(props) {
  const navigate = useNavigate();

  return (
    <IconButton {...props} onClick={() => navigate(-1)} icon={ArrowBack}>
      Ir atrás
    </IconButton>
  );
}

export default GoBackButton;
