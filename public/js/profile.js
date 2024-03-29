function main() {
    const profileId = window.location.search.substring(1);
    get('/api/user', {'_id': profileId}, function(profileUser) {
      renderUserData(profileUser);
    });
    const user = {
      _id: 'anonid',
      name: 'Anonymous',
    };
    renderNavbar(user);
  }
  
  function renderUserData(user) {
      // rendering name
      const nameContainer = document.getElementById('name-container');
      const nameHeader = document.createElement('h1');
      nameHeader.innerHTML = user.name;
      nameContainer.appendChild(nameHeader);
  
      // rendering profile image
      const profileImage = document.getElementById('profile-image');
      profileImage.style = 'background-image:url(https://i.pinimg.com/736x/98/e0/7d/98e07decc7c1ca58236995de3567e46a--cat-shirts-kitties-cutest.jpg)';
  
      // rendering latest post
  
    const creatorSpan = document.createElement('a');
    creatorSpan.className = 'story-creator card-title';
    creatorSpan.innerHTML = user.name;
    creatorSpan.setAttribute('href', '/u/profile?'+user._id);
  
  }
  
  main();
  