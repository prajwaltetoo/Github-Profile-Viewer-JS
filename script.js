function getGitHubProfile() {
  const username = document.getElementById('username').value;
  const profileContainer = document.getElementById('profile');
  
  if (username === '') {
      alert('Please enter a GitHub username');
      return;
  }

  fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
          if (data.message === 'Not Found') {
              profileContainer.innerHTML = `<p>User not found</p>`;
          } else {
              profileContainer.innerHTML = `
                  <img src="${data.avatar_url}" alt="Avatar" width="150">
                  <h2>${data.name}</h2>
                  <p><strong>Username:</strong> ${data.login}</p>
                  <p><strong>Bio:</strong> ${data.bio}</p>
                  <p><strong>Location:</strong> ${data.location}</p>
                  <p><strong>Public Repositories:</strong> ${data.public_repos}</p>
                  <p><strong>Followers:</strong> ${data.followers}</p>
                  <p><strong>Following:</strong> ${data.following}</p>
              `;
          }
      })
      .catch(error => {
          console.error('Error fetching profile:', error);
          profileContainer.innerHTML = `<p>Error fetching profile</p>`;
      });
}