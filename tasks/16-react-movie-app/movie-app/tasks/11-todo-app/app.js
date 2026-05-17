  let todos = [];
  let currentFilter = 'all';

  function render() {
      const list = document.querySelector('#todo-list');
      list.innerHTML = '';

      const filtered = todos.filter(todo => {
          if (currentFilter === 'active') return !todo.completed;
          if (currentFilter === 'completed') return todo.completed;
          return true;
      });

      filtered.forEach(todo => {
          const li = document.createElement('li');
          li.className = 'todo-item' + (todo.completed ? ' completed' : '');

          li.innerHTML = `
              <input type="checkbox" ${todo.completed ? 'checked' : ''} data-id="${todo.id}">
              <span data-id="${todo.id}">${todo.text}</span>
              <button class="delete-btn" data-id="${todo.id}">✕</button>
          `;

          list.appendChild(li);
      });

      const activeCount = todos.filter(t => !t.completed).length;
      document.querySelector('#counter').textContent = `${activeCount} items left`;
      saveTodos();
  }

  function addTodo() {
      const input = document.querySelector('#todo-input');
      const text = input.value.trim();
      if (text === '') return;

      const todo = {
          id: Date.now(),
          text: text,
          completed: false
      };

      todos.push(todo);
      input.value = '';
      render();
  }

  document.querySelector('#add-btn').addEventListener('click', addTodo);

  document.querySelector('#todo-input').addEventListener('keydown', function(e) {
      if (e.key === 'Enter') addTodo();
  });
  
  document.querySelector('#todo-list').addEventListener('click', function(e) {
      const id = Number(e.target.dataset.id);

      if (e.target.classList.contains('delete-btn')) {
          todos = todos.filter(todo => todo.id !== id);
          render();
      }

      if (e.target.type === 'checkbox') {
          todos = todos.map(todo =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
          );
          render();
      }
  });

  function saveTodos() {
      localStorage.setItem('todos', JSON.stringify(todos));
  }
  
  function loadTodos() {
      const saved = localStorage.getItem('todos');
      todos = saved ? JSON.parse(saved) : [];
  }

  loadTodos();
  render();

 document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', function() {
          document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
          this.classList.add('active');
          currentFilter = this.dataset.filter;
          render();
      });
  });
 document.querySelector('#clear-btn').addEventListener('click', function() {
      todos = todos.filter(todo => !todo.completed);
      render();
  });
document.querySelector('#todo-list').addEventListener('dblclick', function(e) {
      if (e.target.tagName !== 'SPAN') return;

      const id = Number(e.target.dataset.id);
      const todo = todos.find(t => t.id === id);

      const input = document.createElement('input');
      input.type = 'text';
      input.value = todo.text;
      input.style.cssText = 'flex:1; padding:4px 8px; font-size:16px; border:2px solid #667eea; border-radius:4px; outline:none;';

      e.target.replaceWith(input);
      input.focus();

      function saveEdit() {
          const newText = input.value.trim();
          if (newText !== '') {
              todos = todos.map(t => t.id === id ? { ...t, text: newText } : t);
          }
          render();
      }
  
      input.addEventListener('blur', saveEdit);
      input.addEventListener('keydown', function(e) {
          if (e.key === 'Enter') saveEdit();
          if (e.key === 'Escape') render();
      });
  });
