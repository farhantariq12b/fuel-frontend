import React from 'react';
import InputField from '../InputField';
import QuestionnaireFooter from '../QuestionnaireFooter/Index';
import Select from '../Select';
import Button from '../Button';
import './Form.scss';
import useQuestionHook from '../../hooks/useQuestionHook';

function Form() {
  const {
    questions,
    submitResult,
    addNewQuestion,
    updateQuestions,
    deleteQuestion,
    changePosition
  } = useQuestionHook();

  return (
    <div className="form">
      {questions.map((_, index) => (
        <div className="card" key={index}>
          <div className="card-body">
            <InputField
              label={'Question'}
              value={_.question}
              placeholder="What do you want to ask?"
              onChange={(event) => updateQuestions('question', event.target.value, index)}
            />

            <hr />

            <Select
              label={'Answer'}
              options={[{ label: 'Short Answer', value: 'short_answer' }]}
              onChange={(event) => updateQuestions('type', event.target.value, index)}
            />

            <InputField disabled placeholder="Short answer text" />
          </div>
          <hr />
          <div className="card-footer">
            <QuestionnaireFooter
              order={index + 1}
              totalCount={questions.length}
              sortChange={changePosition}
              deleteQuestion={() => deleteQuestion(index)}
            />
          </div>
        </div>
      ))}

      <div className="form-btn">
        <Button isPlus classes="add-question" outline onClick={() => addNewQuestion()}>
          Add Question
        </Button>
        <Button type="submit" classes="save-share" onClick={(e) => submitResult(e)}>
          Save & Share
        </Button>
      </div>
    </div>
  );
}

export default Form;
