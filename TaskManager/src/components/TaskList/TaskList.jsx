import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { useTask } from '../../context/TaskContext';
import TaskItem from '../TaskItem/TaskItem';
import './TaskList.css';

const TaskList = ({ screen }) => {
  const { tasks, reorderTasks } = useTask();
  const [filter, setFilter] = useState('all'); 

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reordered = Array.from(filteredTasks);
    const [movedTask] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, movedTask);

    // update the order in the original list (only filtered ones moved)
    const fullList = Array.from(tasks[screen]);
    const updated = fullList.filter(task => !filteredTasks.find(t => t.id === task.id));

    reorderTasks(screen, [...updated.slice(0, result.source.index), ...reordered, ...updated.slice(result.source.index)]);
  };

  const filteredTasks = tasks[screen].filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  return (
    <div className="task-list-container">
      <div className="filter-buttons">
        <button 
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button 
          className={filter === 'completed' ? 'active' : ''}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
        <button 
          className={filter === 'incomplete' ? 'active' : ''}
          onClick={() => setFilter('incomplete')}
        >
          Incomplete
        </button>
      </div>

      {filteredTasks.length === 0 ? (
        <p className="no-tasks">No tasks to show</p>
      ) : (
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId={screen}>
            {(provided) => (
              <div
                className="task-list"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {filteredTasks.map((task, index) => (
                  <Draggable
                    key={task.id}
                    draggableId={task.id.toString()}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={{
                          ...provided.draggableProps.style,
                          opacity: snapshot.isDragging ? 0.8 : 1,
                        }}
                      >
                        <TaskItem task={task} screen={screen} />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      )}
    </div>
  );
};

export default TaskList;
