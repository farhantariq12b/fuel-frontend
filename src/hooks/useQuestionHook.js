import { useState } from 'react';

function useQuestionHook() {
  const [questions, setQuestions] = useState([{ type: 'short_answer' }]);

  const updateQuestions = (name, value, index) => {
    questions[index][name] = value;

    setQuestions([...questions]);
  };

  const submitResult = (e) => {
    e.preventDefault();
    console.log('Final Result', questions);
  };

  const addNewQuestion = () => {
    const newQuestions = questions?.length ? questions : [];

    newQuestions.push({ type: 'short_answer' });
    setQuestions([...newQuestions]);
  };

  const deleteQuestion = (index) => {
    setQuestions([...questions.filter((_, questionIndex) => questionIndex !== index)]);
  };

  const changePosition = (firstIndex, secondIndex) => {
    if (!(questions[firstIndex] && questions[secondIndex])) {
      return;
    }

    const updatedQuestions = questions?.length ? questions : [];

    setQuestions([...updatedQuestions.swap(firstIndex, secondIndex)]);
  };

  return {
    questions,
    submitResult,
    addNewQuestion,
    updateQuestions,
    deleteQuestion,
    changePosition
  };
}

export default useQuestionHook;
