 let allUsers = [];

  function showLoading() {
      document.querySelector('#loading').classList.remove('hidden');
      document.querySelector('#error').classList.add('hidden');
      document.querySelector('#user-grid').innerHTML = '';
      document.querySelector('#count').textContent = '';
  }

  function showError(msg) {
      document.querySelector('#loading').classList.add('hidden');
      document.querySelector('#error').classList.remove('hidden');
      document.querySelector('#error-msg').textContent = msg;
  }

  function hideLoading() {
      document.querySelector('#loading').classList.add('hidden');
  }

  async function fetchUsers() {
      showLoading();
      try {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          if (!response.ok) throw new Error('Failed to fetch users');
          allUsers = await response.json();
          hideLoading();
          displayUsers(allUsers);
      } catch (error) {
          showError('Could not load users. Check your connection.');
      }
  }

  function displayUsers(users) {
      const grid = document.querySelector('#user-grid');
      const count = document.querySelector('#count');

      grid.innerHTML = '';

      if (users.length === 0) {
          grid.innerHTML = '<p style="color:#999">No users found.</p>';
          count.textContent = '';
          return;
      }
  
      count.textContent = `Showing ${users.length} of ${allUsers.length} users`;

      users.forEach(user => {
          const card = document.createElement('div');
          card.className = 'user-card';
          card.innerHTML = `
              <h2>${user.name}</h2>
              <p>✉️  ${user.email}</p>
              <p>🏢 ${user.company.name}</p>
              <p>📍 ${user.address.city}</p>
          `;
          card.addEventListener('click', () => {
            console.log('Card clicked:', user.name);
            openModal(user);
        });
          grid.appendChild(card);
      });
  }
  
  document.querySelector('#search').addEventListener('input', function() {
      const query = this.value.toLowerCase();
      const filtered = allUsers.filter(u => u.name.toLowerCase().includes(query));
      displayUsers(filtered);
  });

  async function openModal(user) {
      const modal = document.querySelector('#modal');
      const content = document.querySelector('#modal-content');

      modal.classList.remove('hidden');
      content.innerHTML = `
          <h2>${user.name}</h2>
          <p style="color:#777; margin:8px 0 20px">Loading posts...</p>
      `;

      try {
          const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
          const posts = await response.json();

          content.innerHTML = `
              <h2>${user.name}</h2>
              <p style="color:#777; margin:8px 0 20px">✉️  ${user.email} · 📍 ${user.address.city}</p>
              <h3 style="margin-bottom:12px">Posts (${posts.length})</h3>
              ${posts.map(p => `
                  <div class="post">
                      <h4>${p.title}</h4>
                      <p>${p.body}</p>
                  </div>
              `).join('')}
          `;
      } catch (error) {
          content.innerHTML += '<p style="color:#e74c3c">Failed to load posts.</p>';
      }
  }

  document.querySelector('#close-modal').addEventListener('click', () => {
      document.querySelector('#modal').classList.add('hidden');
  });

  document.querySelector('#modal').addEventListener('click', function(e) {
      if (e.target === this) this.classList.add('hidden');
  });
  
  document.querySelector('#retry-btn').addEventListener('click', fetchUsers);

  fetchUsers();
