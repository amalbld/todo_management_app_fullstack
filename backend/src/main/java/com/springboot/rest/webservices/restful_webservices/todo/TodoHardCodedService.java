package com.springboot.rest.webservices.restful_webservices.todo;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class TodoHardCodedService {

    private static List<Todo> todos = new ArrayList();
    private static long idCounter = 0;

    // bloc d'initialisation statique : executé avant tout constructeur et une seule
    // fois par classe >> pratique pour initialiser les liste/les maps/les cst
    // complexes
    static {
        todos.add(new Todo(++idCounter, "amal", "learn to dance", new Date(), false));
        todos.add(new Todo(++idCounter, "amal", "learn about microservices", new Date(), false));
        todos.add(new Todo(++idCounter, "amal", "learn about azure", new Date(), false));
    }

    public List<Todo> findAll() {
        return todos;
    }

    public Todo deleteById(long id) {
        Todo todo = findById(id);
        if (todo == null) {
            return null;
        }

        if (todos.remove(todo)) {
            return todo;
        }

        return null;
    }

    public Todo findById(long id) {
        for (Todo todo : todos) {
            if (todo.getId() == id) {
                return todo;
            }
        }
        return null;
    }

    public Todo save(Todo todo) {
        // create new todo
        if (todo.getId() == -1 || todo.getId() == 0) {
            todo.setId(++idCounter);
            todos.add(todo);

        } else {
            // update todo
            deleteById(todo.getId());
            todos.add(todo);
        }

        return todo;

    }
}
