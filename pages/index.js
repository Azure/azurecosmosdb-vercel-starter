// pages/index.js
import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  VStack,
  Input,
  Button,
  IconButton,
  useToast,
  Checkbox,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

const fetchTodos = async () => {
  const res = await fetch("/api/todos/list");
  return await res.json();
};

const createTodo = async (title) => {
  const res = await fetch("/api/todos/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  return await res.json();
};

const updateTodo = async (id, updatedTodo) => {
  await fetch(`/api/todos/update/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedTodo),
  });
};

const deleteTodo = async (id) => {
  await fetch(`/api/todos/delete/${id}`, { method: "DELETE" });
};

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const toast = useToast();

  useEffect(() => {
    (async () => {
      const todos = await fetchTodos();
      setTodos(todos);
    })();
  }, []);

  const handleCreate = async () => {
    if (inputValue.trim()) {
      const newTodo = await createTodo(inputValue);
      setTodos([...todos, newTodo]);
      setInputValue("");
      toast({
        title: "Todo created.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleUpdate = async (id, completed) => {
    const updatedTodo = todos.find((todo) => todo.id === id);
    updatedTodo.completed = completed;
    await updateTodo(id, updatedTodo);
    setTodos([...todos]);
  };

  const handleDelete = async (id) => {
    await deleteTodo(id);
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Box>
      <Heading mt={8} textAlign="center">
        Azure Cosmos DB Starter – Todo App
      </Heading>
      <VStack mt={4} spacing={4} mx="auto" maxW="md">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task"
          onKeyDown={(e) => e.key === "Enter" && handleCreate()}
        />
        <Button onClick={handleCreate} colorScheme="blue">
          Add Todo
        </Button>
        {todos.map((todo) => (
          <HStack key={todo.id} w="100%">
            <Checkbox
              isChecked={todo.completed}
              onChange={(e) => handleUpdate(todo.id, e.target.checked)}
            >
              {todo.title}
            </Checkbox>
            <Spacer />
            <IconButton
              aria-label="Delete todo"
              icon={<DeleteIcon />}
              onClick={() => handleDelete(todo.id)}
              colorScheme="red"
            />
          </HStack>
        ))}
      </VStack>
    </Box>
  );
}
