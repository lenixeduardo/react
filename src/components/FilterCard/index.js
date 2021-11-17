import React from 'react';
import * as S from './styles';
import PropTypes from 'prop-types';
import filter from '../../assets/filter.png';

function FilterCard({title, actived}) {
  return (
    <S.Container actived={actived}>
      <img src={filter} alt="Filtro"/>
      <span>{title}</span>
    </S.Container>
  )
}

FilterCard.propTypes = {

  title: PropTypes.string,
  actived: PropTypes.bool
}
export default FilterCard;
