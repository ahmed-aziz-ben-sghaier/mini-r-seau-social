fetch('data/posts.json')
  .then(response => response.json())
  .then(posts => displayPosts(posts))
  .catch(error => console.error('Error fetching posts:', error));


function displayPosts(posts) {
  const feedContainer = document.getElementById('feed-container');
  posts.forEach(post => {
    const postElement = document.createElement('div');
    postElement.classList.add('post');
    
    postElement.innerHTML = `
      <h2>${post.author}</h2>
      <p>${post.content}</p>
      ${post.image ? `<img src="image/no-pic.jpeg" alt="Post Image">` : ''}
      <div class="reactions">
        <button class="like-btn">👍 ${post.reactions.likes}</button>
        <button class="dislike-btn">👎 ${post.reactions.dislikes}</button>
        <button class="love-btn">❤️ ${post.reactions.loves}</button>
      </div>
      <div class="comments">
        <h3>Commentaires:</h3>
        <div class="comment-list">
          ${post.comments.map(comment => `<p><strong>${comment.author}:</strong> ${comment.content}</p>`).join('')}
        </div>
        <input type="text" class="comment-input" placeholder="Ajouter un commentaire">
        <button class="comment-btn">Commenter</button>
      </div>
    `;
    feedContainer.appendChild(postElement);
  });
}
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('like-btn')) {
      console.log('Post liked');
    } else if (event.target.classList.contains('dislike-btn')) {
      console.log('Post disliked');
    } else if (event.target.classList.contains('love-btn')) {
      console.log('Post loved');
    }
  });
  document.addEventListener('click', (event) => {
    if (event.target.tagName === 'IMG') {
      const img = event.target.cloneNode();
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      overlay.appendChild(img);
      document.body.appendChild(overlay);
      
      overlay.addEventListener('click', () => {
        document.body.removeChild(overlay);
      });
    }
  });

    const commentBtn = postElement.querySelector('.comment-btn');
    const commentInput = postElement.querySelector('.comment-input');
    commentBtn.addEventListener('click', () => {
      const commentContent = commentInput.value;
      if (commentContent) {
        addComment(post, commentContent);
        commentInput.value = ''; 
      }
    });
  function addComment(post, content) {
  post.comments.push({
    author: 'User', 
    content: content
  });
  
  displayPosts(posts); 
}