import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/selectors';

const CounterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #f8f8f8;
  color: #333;
  font-size: 16px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 35px;
`;

const TasksCount = styled.span`
  font-weight: 700;
`;

export const TasksCounter = () => {
  const tasks = useSelector(selectTasks);

  const completedCount = tasks.filter((task) => task.completed).length;
  const uncompletedCount = tasks.length - completedCount;

  return (
    <CounterContainer>
      <div>
        Completed: <TasksCount>{completedCount}</TasksCount>
      </div>
      <div>
        Uncompleted: <TasksCount>{uncompletedCount}</TasksCount>
      </div>
    </CounterContainer>
  );
};
