import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleTask, deleteTask } from 'redux/tasks/tasks-slice';
import deleteIcon from '../../images/bin.png';
import checkmarkIcon from '../../images/check.png';

const TaskItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 18px;
  margin-bottom: 25px;
  border-bottom: 1px solid #e0e0e0;
  padding: 15px 10px;
  transition: all 0.3s ease;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
    cursor: pointer;
  }
`;

const Text = styled.span`
  flex-grow: 1;
  margin-left: 15px;
  text-decoration: ${({ completed }) => {
    return completed === 'true' ? 'line-through' : 'none';
  }};
  color: ${({ completed }) => {
    return completed === 'true' ? '#d0d0d0' : '#333';
  }};
  transition: all 0.3s ease;
`;

const CheckMark = styled.span`
  width: 24px;
  height: 24px;
  line-height: 24px;
  box-sizing: border-box;
  text-align: center;
  border-radius: 3px;
  border: 2px solid #ccc;
  color: transparent;
  font-size: 16px;
  transition: all 0.3s ease;

  &:hover {
    border-color: #aaa;
  }
`;

const DeleteButton = styled.button`
  border: none;
  padding: 5px;
  background-color: transparent;
  border-radius: 6px;
  transition: all 0.3s ease;

  img {
    transition: filter 0.3s ease;
  }

  &:hover {
    background-color: #d11a2a;
    cursor: pointer;

    img {
      filter: brightness(0) invert(1);
    }
  }
`;

export const TaskListItem = ({ id, completed, text }) => {
  const dispatch = useDispatch();

  const toggleTaskStatus = () => {
    dispatch(toggleTask(id));
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(id));
  };

  return (
    <TaskItem onClick={() => toggleTaskStatus()}>
      {completed ? (
        <img
          src={checkmarkIcon}
          alt="Completed"
          width='24px'
          height='24px'
        />
      ) : (
        <CheckMark />
      )}
      <Text completed={`${completed}`}>{text}</Text>
      <DeleteButton onClick={() => handleDeleteTask()}>
        <img
          alt="Delete"
          src={deleteIcon}
          width='24px'
          height='24px'
        />
      </DeleteButton>
    </TaskItem>
  );
};

TaskListItem.propTypes = {
  'id': PropTypes.string.isRequired,
  'completed': PropTypes.bool.isRequired,
  'text': PropTypes.string.isRequired,
};
