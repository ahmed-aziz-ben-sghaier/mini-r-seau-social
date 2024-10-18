document.getElementById('search-bar').addEventListener('input', (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const friendItems = document.querySelectorAll('.friend-item');
  
    friendItems.forEach(item => {
      const friendName = item.textContent.toLowerCase();
      if (friendName.includes(searchQuery)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
  
  const friendsList = document.getElementById('friends-list');
  let draggedItem = null;
  
  friendsList.addEventListener('dragstart', (event) => {
    draggedItem = event.target;
  });
  
  friendsList.addEventListener('dragover', (event) => {
    event.preventDefault();
  });
  
  friendsList.addEventListener('drop', (event) => {
    event.preventDefault();
    const targetItem = event.target.closest('.friend-item');
    if (draggedItem !== targetItem && targetItem) {
      const children = Array.from(friendsList.children);
      const indexOfDragged = children.indexOf(draggedItem);
      const indexOfTarget = children.indexOf(targetItem);
  
      if (indexOfDragged < indexOfTarget) {
        friendsList.insertBefore(draggedItem, targetItem.nextSibling);
      } else {
        friendsList.insertBefore(draggedItem, targetItem);
      }
    }
  });
  