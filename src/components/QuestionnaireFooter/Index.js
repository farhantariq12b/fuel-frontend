import React from 'react';
import './style.scss';
import UpKey from '../../assets/svg/up-key.svg';
import DeleteBtn from '../../assets/svg/delete-btn.svg';
import DownKey from '../../assets/svg/down-key.svg';
import PropTypes from 'prop-types';

function QuestionnaireFooter({ totalCount, order, deleteQuestion, sortChange }) {
  return (
    <div className="ques-footer">
      <div className="ques-footer-left">
        {order} of {totalCount}
      </div>
      <div className="ques-footer-right">
        <img src={UpKey} alt="Sorting Up" onClick={() => sortChange(order - 1, order - 2)} />
        <img src={DownKey} alt="Sorting Down" onClick={() => sortChange(order - 1, order)} />
        <img src={DeleteBtn} alt="Delete Button" onClick={deleteQuestion} />
      </div>
    </div>
  );
}

QuestionnaireFooter.propTypes = {
  totalCount: PropTypes.number,
  order: PropTypes.number,
  deleteQuestion: PropTypes.func,
  sortChange: PropTypes.func
};

export default QuestionnaireFooter;
