document.getElementById("editProfile").addEventListener("click", function() {
    const newUsername = prompt("Entrez un nouveau nom d'utilisateur :", document.getElementById("username").textContent);
    if (newUsername) {
      document.getElementById("username").textContent = newUsername;
    }
    
    const newEmail = prompt("Entrez un nouvel e-mail :", document.getElementById("email").textContent);
    if (newEmail) {
      document.getElementById("email").textContent = newEmail;
    }
    
    const newBio = prompt("Entrez une nouvelle biographie :", document.getElementById("bio").textContent);
    if (newBio) {
      document.getElementById("bio").textContent = newBio;
    }
  });
document.getElementById("editProfile").addEventListener("click", function() {
  });
    