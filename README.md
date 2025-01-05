### README.md  

# AestheticFlappy

This is a simple browser-based Flappy Bird game built using JavaScript, HTML, and CSS. The objective of the game is to control the bird by making it jump to avoid obstacles and score points.  

---

## Gameplay



https://github.com/user-attachments/assets/32071e0a-0a3b-4537-84c2-3362d64ccfe4

---

## Features  

- **Jump Mechanics**: Control the bird's vertical movement using the keyboard or mouse.  
- **Dynamic Obstacles**: Obstacles move across the screen and respawn after passing.  
- **Level System**: The game increases in level as obstacles are cleared.  
- **Collision Detection**: Precise collision mechanics to determine game-over scenarios.  
- **Restart Option**: Restart the game by clicking or pressing the spacebar after a game over.  

---

## How to Play  

1. **Start the Game**:  
   - Press the `spacebar`, `W`, `ArrowUp`, or click anywhere on the screen to start.  

2. **Control the Bird**:  
   - Press the `spacebar`, `W`, `ArrowUp`, or click to make the bird jump.  
   - Avoid hitting obstacles or the ground.  

3. **Game Over**:  
   - The game ends if the bird collides with an obstacle or hits the ground.  
   - Click or press the `spacebar` to restart.  

---

## Controls  

- **Keyboard**:  
  - `Spacebar`, `W`, `ArrowUp`: Jump  
- **Mouse**:  
  - Click anywhere on the screen to jump.  

---

## Game Logic  

- **Gravity**:  
  - Gravity continuously pulls the bird down.  
  - Jumping gives the bird an upward velocity to counteract gravity.  

- **Obstacles**:  
  - Obstacles move from right to left.  
  - New obstacles appear once the old ones vanish.  

- **Level Progression**:  
  - Clearing all obstacles increases the level.  
  - The current level is displayed at the top of the screen.  

- **Collision Detection**:  
  - If the bird touches an obstacle or the ground, the game ends.  

---

## Files  

- **index.html**: The main HTML file for the game.  
- **style.css**: The primary stylesheet for the game.  
- **gameOver.css**: The stylesheet for the game-over screen.  
- **script.js**: The JavaScript file containing the game logic.  

---

## Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/govindup63/flappy-bird-game.git  
   ```  

2. Open the project directory:  
   ```bash  
   cd flappy-bird-game  
   ```  

3. Open `index.html` in your preferred browser.  

---

## Customization  

You can tweak the game mechanics by editing the following variables in `script.js`:  

- `birdVelocity`: Adjust the bird's jumping velocity.  
- `gravity`: Modify the rate at which the bird falls.  
- `obstacleSpeed`: Change the speed of moving obstacles.  
- `groundLevel`: Set the position of the ground.  

---

## Dependencies  

- jQuery (included via CDN in `index.html`)  

---

## Future Improvements  

- Add background music and sound effects.  
- Implement a scoring system.  
- Enhance the UI with better graphics and animations.  
- Introduce additional levels or challenges.  

---

## License  

This project is licensed under the MIT License.  

---

Enjoy playing the game! 😊  
