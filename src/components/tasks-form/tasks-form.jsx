import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { addTask } from 'redux/tasks/tasks-slice';

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Input = styled.input`
  outline: none;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
  border: 2px solid #ccc;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

const Notification = styled.div`
  color: red;
  font-size: 14px;
  height: 20px;
`;

export const TasksForm = () => {
  const [input, setInput] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const dispatch = useDispatch();
  const limit = 70;

  const handleInputChange = (event) => {
    const value = event.target.value;
    setShowNotification(value.length >= limit);
    if (value.length <= limit) {
      setInput(value);
    }
  };

  const addNewTask = () => {
    if (input.trim().length > 0) {
      dispatch(addTask(input.trim()));
      setInput('');
      setShowNotification(false);
    }
  };

  return (
    <FormContainer>
      <Input
        type="text"
        maxLength={limit}
        value={input}
        onChange={handleInputChange}
        placeholder="Add a new task"
      />
      <Notification>
        {showNotification &&
          `The task description cannot exceed ${limit} characters.`}
      </Notification>
      <Button onClick={addNewTask}>Add Task</Button>
    </FormContainer>
  );
};
