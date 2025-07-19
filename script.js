document.addEventListener('DOMContentLoaded', function() {
  const musicBtn = document.getElementById('music-btn');
  const bgMusic = document.getElementById('bg-music');
  
  // Set volume to 50%
  bgMusic.volume = 0.5;
  
  // Button click handler
  musicBtn.addEventListener('click', function() {
    // First check if audio is loaded
    if (bgMusic.readyState < 2) {
      console.error("Audio not loaded yet");
      return;
    }
    
    // Toggle play/pause
    if (bgMusic.paused) {
      bgMusic.play()
        .then(() => {
          musicBtn.textContent = '❚❚'; // Pause icon
          console.log("Music playing");
        })
        .catch(error => {
          console.error("Playback failed:", error);
          musicBtn.style.background = 'red'; // Visual error indicator
        });
    } else {
      bgMusic.pause();
      musicBtn.textContent = '▶'; // Play icon
    }
  });
  
  // Optional: Preload audio
  bgMusic.load();
  
  // Error handling
  bgMusic.addEventListener('error', function() {
    console.error("Audio error:", bgMusic.error);
    musicBtn.style.background = 'red';
    musicBtn.textContent = '!';
  });
});









function showMessage() {
    document.getElementById("popup").classList.remove("hidden");
  }

  function closePopup() {
    document.getElementById("popup").classList.add("hidden");
  }

function openRealMessage() {
  document.querySelector(".container").style.display = "none";
  document.getElementById("popup").style.display = "none";

  const finalBox = document.getElementById("final-message");
  const todayText = document.getElementById("today-text");
  const birthdayText = document.getElementById("birthday-text");
  const cheersText = document.getElementById("cheers-text");
  const celebrateBtn = document.getElementById("celebrate-btn");

  finalBox.classList.remove("hidden");

  const typeEffect = (element, message, delay, callback) => {
    let index = 0;
    function type() {
      if (index <= message.length) {
        element.textContent = message.substring(0, index);
        index++;
        setTimeout(type, delay);
      } else if (callback) {
        callback();
      }
    }
    type();
  }

  typeEffect(todayText, "Today is your special day", 40, () => {
    typeEffect(birthdayText, "HAPPY BIRTHDAY\nPYARO MANXE", 40, () => {
      typeEffect(cheersText, "Cheers to another year🥂", 40, () => {
        document.querySelectorAll('.confetti').forEach(c => c.style.opacity = '1');
        setTimeout(() => {
          celebrateBtn.classList.remove("hidden");
        }, 1500);
      });
    });
  });
}


// Add this to your existing script.js
document.getElementById('celebrate-btn').addEventListener('click', showHeartsPopup);

function showHeartsPopup() {
  document.getElementById('final-message').classList.add('hidden');
  document.getElementById('hearts-popup').classList.remove('hidden');
}

function fillHeart(heart) {
  heart.classList.add('filled');
  
  // Check if all hearts are filled
  const allHearts = document.querySelectorAll('.heart');
  const allFilled = Array.from(allHearts).every(h => h.classList.contains('filled'));
  
  if (allFilled) {
    setTimeout(() => {
      document.getElementById('hearts-popup').classList.add('hidden');
      // You could show another message here if you want
    }, 1000);
  }
}





// Cake Celebration Functions
function showCakeCelebration() {
  const cakeCelebration = document.getElementById('cake-celebration');
  cakeCelebration.classList.remove('hidden');
  
  document.getElementById('cake-click-btn').addEventListener('click', function() {
    startCelebration();
    this.remove(); // Remove the button after click
  });
}

function startCelebration() {
  startInfiniteSprinkles();
  typeBirthdayMessage();
}

let sprinkleInterval;

function startInfiniteSprinkles() {
  const colors = ['#ff85a2', '#ffd700', '#9370db', '#ff9eb5', '#a5ffd6', '#ff9a9e', '#fad0c4'];
  const container = document.querySelector('.falling-sprinkles');
  
  // Clear any existing interval
  if (sprinkleInterval) clearInterval(sprinkleInterval);
  
  // Initial burst
  createSprinkleBurst(colors, container, 50);
  
  // Continuous sprinkles
  sprinkleInterval = setInterval(() => {
    createSprinkleBurst(colors, container, 10);
  }, 800);
}

function createSprinkleBurst(colors, container, count) {
  for (let i = 0; i < count; i++) {
    setTimeout(() => {
      const sprinkle = document.createElement('div');
      sprinkle.className = 'falling-sprinkle';
      sprinkle.style.background = colors[Math.floor(Math.random() * colors.length)];
      sprinkle.style.left = Math.random() * 100 + '%';
      sprinkle.style.width = (Math.random() * 10 + 8) + 'px';
      sprinkle.style.height = sprinkle.style.width;
      sprinkle.style.animationDuration = (Math.random() * 3 + 3) + 's';
      container.appendChild(sprinkle);
      
      // Remove after animation
      setTimeout(() => sprinkle.remove(), 5000);
    }, i * 50);
  }
}
// Add these new functions to your script.js


function typeBirthdayMessage() {
  const messageElement = document.getElementById('birthday-message');
  const messages = [
    "🎂 Happy Birthday Pyaro Manxe! 🎂 You are the most wonderful person I know... Your smile brightens every day 💖 May this year bring you endless joy! You deserve all the happiness in the world! Sending you infinite love and hugs today! 🤗💕"
  ];
  
  let messageIndex = 0;
  let currentText = '';
  
  function typeNextMessage() {
    if (messageIndex < messages.length) {
      const currentMessage = messages[messageIndex];
      let charIndex = 0;
      
      function type() {
        if (charIndex < currentMessage.length) {
          currentText += currentMessage.charAt(charIndex);
          messageElement.innerHTML = currentText + '<span class="typing-cursor"></span>';
          charIndex++;
          setTimeout(type, 100); // Typing speed
        } else {
          // Message complete - add line break and prepare for next
          currentText += '<br><br>';
          messageIndex++;
          setTimeout(typeNextMessage, 1000); // Delay between messages
        }
      }
      
      type();
    }
  }
  
  // Start the typing sequence
  typeNextMessage();
}

// Update the fillHeart function to use this
function fillHeart(heart) {
  if (!heart.classList.contains('filled')) {
    heart.classList.add('filled');
    
    const allHearts = document.querySelectorAll('.heart');
    const allFilled = Array.from(allHearts).every(h => h.classList.contains('filled'));
    
    if (allFilled) {
      setTimeout(() => {
        document.getElementById('hearts-popup').classList.add('hidden');
        showCakeCelebration();
      }, 800);
    }
  }
}
let cakeTimer;

// Modify your typeBirthdayMessage function:
function typeBirthdayMessage() {
  const messageElement = document.getElementById('birthday-message');
  const messages = [
        "🎂 Happy Birthday Pyaro Manxe! 🎂 You are the most wonderful person I know... Your smile brightens every day💖 you are beautiful, cute, smart, talented, gorgeous, and so elegent honestly, just WOW🥰. May this year bring you endless joy! You deserve all the happiness in the world! Sending you infinite love and.....(thinking😆)... even more love today! 🤗💕"

  ];
  
  let messageIndex = 0;
  
  function typeNextMessage() {
    if (messageIndex < messages.length) {
      const currentMessage = messages[messageIndex];
      let html = messageElement.innerHTML;
      
      messageElement.innerHTML = html + 
        (html ? '<br><br>' : '') + 
        '<span class="message-' + messageIndex + '"></span>';
      
      const span = messageElement.querySelector('.message-' + messageIndex);
      let charIndex = 0;
      
      function type() {
        if (charIndex < currentMessage.length) {
          span.innerHTML += currentMessage.charAt(charIndex);
          charIndex++;
          setTimeout(type, 50);
        } else {
          messageIndex++;
          setTimeout(typeNextMessage, 100);
        }
      }
      
      type();
    } else {
      // All messages typed - show gift button after 3 seconds
      setTimeout(showGiftButton, 1050);
    }
  }
  
  typeNextMessage();
}

function showGiftButton() {
  const container = document.getElementById('gift-button-container');
  container.classList.remove('hidden');
  
 // Update the gift button click handler
document.getElementById('your-gift-btn').onclick = function() {
  // Hide the cake celebration
  document.getElementById('cake-celebration').classList.add('hidden');
  
  // Show the gift box
  document.getElementById('gift-box-container').classList.remove('hidden');
  
  // Remove the gift button
  this.remove(); // This removes the button itself
  
  // Add click event to gift box
  document.querySelector('.gift-box').addEventListener('click', openGiftBox);
};
  // Add click event to gift box
  document.querySelector('.gift-box').addEventListener('click', openGiftBox);
};

function openGiftBox() {
  const giftBox = document.querySelector('.gift-box');
  // Only run if not already opened
  if (giftBox.classList.contains('opened')) return;
  
  giftBox.classList.add('opened');
  
  // Create poppers
  createPoppers();
  
  // Show card after a short delay
  setTimeout(() => {
    const giftCard = document.getElementById('gift-card');
    giftCard.classList.remove('hidden');
    
    // Small delay before animation starts
    setTimeout(() => {
      giftCard.classList.add('show');
    }, 100);
  }, 300); // Shorter delay before card appears
}
function createPoppers() {
  const popperContainer = document.querySelector('.poppers-container');
  const emojis = ['❤️', '🎁', '🥰', '😘', '🎈', '💝', '💖', '💕', '✨', '🎉', '🎊', '💘'];
  
  // Create 100 poppers
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const popper = document.createElement('div');
      popper.className = 'popper';
      popper.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      
      // Random start position near the gift box
      const startX = 50 + (Math.random() * 20 - 10);
      const startY = 50 + (Math.random() * 20 - 10);
      
      // Random end position (further away)
      const angle = Math.random() * Math.PI * 2;
      const distance = 100 + Math.random() * 150;
      const endX = Math.cos(angle) * distance;
      const endY = Math.sin(angle) * distance;
      
      // Random size - larger sizes now
      const size = 30 + Math.random() * 30; // Now between 30px and 60px
      popper.style.fontSize = `${size}px`;
      
      // Random rotation
      const rotation = Math.random() * 360;
      popper.style.transform = `rotate(${rotation}deg)`;
      
      popper.style.setProperty('--tx', `${endX}px`);
      popper.style.setProperty('--ty', `${endY}px`);
      popper.style.left = `${startX}%`;
      popper.style.top = `${startY}%`;
      
      // Random animation duration
      const duration = 1 + Math.random() * 2;
      popper.style.animationDuration = `${duration}s`;
      
      popperContainer.appendChild(popper);
      
      // Remove popper after animation
      setTimeout(() => {
        popper.remove();
      }, duration * 1000);
    }, i * 50);
  }
}

















// Show photos function
function showPhotos() {
  // Hide gift box
  document.getElementById('gift-box-container').style.display = 'none';
  
  // Create container if empty
  const container = document.getElementById('photos-container');
  if (container.innerHTML === '') {
    container.innerHTML = '<button onclick="hidePhotos()" style="position:fixed;top:20px;right:20px;background:none;border:none;font-size:2rem;">✕</button>';
    
    // Add photos (change numbers if needed)
    for (let i = 1; i <= 9; i++) {
      container.innerHTML += `
        <img src="images/prinsa${i}.png.jpg" style="
          width: 100%;
          margin-bottom: 20px;
          border-radius: 10px;
          border: 3px solid white;
        ">
      `;
    }
  }
  
  // Show container
  container.style.display = 'block';
  document.getElementById('show-pics-btn').style.display = 'none';
}

// Hide photos function
function hidePhotos() {
  document.getElementById('photos-container').style.display = 'none';
  document.getElementById('gift-box-container').style.display = 'block';
  document.getElementById('show-pics-btn').style.display = 'block';
}

// Update your gift box function to show the button:
function openGiftBox() {
  console.log("Attempting to open gift...");
  
  const giftBox = document.querySelector('.gift-box');
  if (!giftBox) {
    console.error("Gift box element not found!");
    return;
  }
  
  if (giftBox.classList.contains('opened')) {
    console.log("Already opened");
    return;
  }
  
  giftBox.classList.add('opened');
  console.log("Added 'opened' class");
  
  // Animate box opening
  const boxTop = document.querySelector('.gift-box-top');
  boxTop.style.transform = 'rotateX(180deg)';
  console.log("Applied transform to box top");
  
  // Hide bow
  document.querySelector('.gift-bow').style.opacity = '0';
  
  // Create poppers
  createPoppers();
  
  // Show card
  setTimeout(() => {
    const card = document.getElementById('gift-card');
    if (!card) {
      console.error("Gift card element not found!");
      return;
    }
    
    card.classList.remove('hidden');
    setTimeout(() => card.classList.add('show'), 50);
    console.log("Showing gift card");
    
    // Show gallery button after delay
    setTimeout(() => {
      const btn = document.getElementById('gallery-btn');
      if (btn) {
        btn.classList.remove('hidden');
        console.log("Showing gallery button");
      }
    }, 4000);
  }, 500);




  setTimeout(() => {
    document.getElementById('show-pics-btn').style.display = 'block';
    document.getElementById('show-pics-btn').onclick = showPhotos;
  }, 4000);
}










function showPhotos() {
  // Hide other elements
  document.getElementById('gift-box-container').style.display = 'none';
  document.getElementById('show-pics-btn').style.display = 'none';
  
  // Get container
  const container = document.getElementById('photos-container');
  
  // Only load photos once
  if (container.children.length <= 1) { // 1 because of the close button
    // Add close button
    container.innerHTML = '<button onclick="hidePhotos()">✕</button>';
    
    // Add photos with loading animation
    for (let i = 1; i <= 9; i++) {
      const img = document.createElement('img');
      img.src = `images/prinsa${i}.png.jpg`;
      img.alt = `Memory ${i}`;
      img.style.opacity = '0';
      img.style.transform = 'translateY(20px)';
      container.appendChild(img);
      
      // Animate in
      setTimeout(() => {
        img.style.transition = 'all 0.5s ease';
        img.style.opacity = '1';
        img.style.transform = 'translateY(0)';
      }, 100 * i);
    }
  }
  
  // Show container
  container.style.display = 'block';
}

function hidePhotos() {
  const container = document.getElementById('photos-container');
  container.style.display = 'none';
  
  // Show other elements
  document.getElementById('gift-box-container').style.display = 'block';
  setTimeout(() => {
    document.getElementById('show-pics-btn').style.display = 'block';
  }, 500);
}

















