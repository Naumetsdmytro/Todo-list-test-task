import React from 'react';

import { TasksList } from 'components/tasks-list';
import { TasksForm } from 'components/tasks-form';
import { Container } from 'components/container';
import { FilterMenu } from 'components/filter-menu';
import { TasksCounter } from 'components/tasks-counter';

export const ToDoComponent = () => {
  return (
    <Container>
      <TasksForm />
      <FilterMenu />
      <TasksList />
      <TasksCounter />
    </Container>
  );
};
