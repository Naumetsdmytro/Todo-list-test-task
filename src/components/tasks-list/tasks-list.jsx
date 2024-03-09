import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { selectVisibleTasks } from 'redux/tasks/selectors';
import { TaskListItem } from '../tasks-list-item';

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const TasksList = () => {
  const visibleTasks = useSelector(selectVisibleTasks);
  return (
    <TaskList>
      {visibleTasks.map((task) => (
        <TaskListItem
          key={task.id}
          completed={task.completed}
          text={task.text}
          id={task.id}
        />
      ))}
    </TaskList>
  );
};
