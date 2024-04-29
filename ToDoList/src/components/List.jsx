import { useState } from 'react';
import { Container, Box, Title, Search, Input, Line, TitleTwo, Status, Select,
         ToDoList, Send, Order, BoxMessage, ButtonOne, MessageContainer, Mensagem, ButtonTwo} from './List-style';

export function List() {
  const [create, setCreate] = useState('');
  const [displayText, setDisplayText] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOption, setFilterOption] = useState('default');

  const handleClick = () => {
    if (!create.trim()) {
      alert("Digite uma tarefa antes de enviar!");
      return; 
    }
  
    setDisplayText([...displayText, { text: create, completed: false }]);
    setCreate('');
  };
  
  const handleRemoveTask = (indexToRemove) => {
    setDisplayText(displayText.filter((_, index) => index !== indexToRemove));
  };

  const handleCompleteTask = (index) => {
    const updatedDisplayText = displayText.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setDisplayText(updatedDisplayText);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setFilterOption(e.target.value);
  };

  const filteredTasks = displayText.filter(task => {
    if (filterOption === 'completo') {
      return task.completed;
    } else if (filterOption === 'incompleto') {
      return !task.completed;
    }
    return true; 
  }).filter(task =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <Container>
      <Box>
        <Title>Lista de Tarefas</Title>
        <Search>Pesquisar:</Search>
        <Input value={searchTerm} onChange={handleSearch} placeholder='Pesquise uma tarefa' />
        <Line />
        <TitleTwo>Filtrar:</TitleTwo>
        <Status>Status:</Status>
        <Select value={filterOption} onChange={handleFilterChange}>
          <option value="default">Todas</option>
          <option value="completo">Completas</option>
          <option value="incompleto">Incompletas</option>
        </Select>
        <Line />
        <Order>
          <Line />
          <ToDoList>Criar Tarefa:</ToDoList>
          <Input value={create} onChange={(e) => setCreate(e.target.value)} placeholder='Crie uma tarefa' />
          <Send onClick={handleClick}>Criar tarefa</Send>
        </Order>

        {filteredTasks.map((task, index) => (
          <BoxMessage key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <MessageContainer>
              <ButtonOne onClick={() => handleCompleteTask(index)}>
                {task.completed ? 'Desfazer' : 'Completo'}
              </ButtonOne>
              <ButtonTwo onClick={() => handleRemoveTask(index)}>X</ButtonTwo>
              <Mensagem>{task.text}</Mensagem>
            </MessageContainer>
          </BoxMessage>
        ))}
      </Box>
    </Container>
  );
}


