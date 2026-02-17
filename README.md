# Castorice Theme Website

This project is a themed website based on the character **Castorice** from *Honkai: Star Rail*. It features a glassmorphism design with a focus on aesthetics and responsiveness.

## Features

- **Glassmorphism UI**: Modern, frosted glass effect for the main content card.
- **Dynamic Date & Time**: Automatically updates to show the current date and time.
- **Responsive Design**: Adapts for mobile and desktop screens.
- **Interactive Background**: Animated blobs and floating elements.
- **Image Fallback**: Includes a placeholder system if the main character image fails to load.

## Customization

### Changing the Hero Image

To replace the main character image:
1.  Find a high-quality image of Castorice (transparent PNG works best).
2.  Save it to the project folder (e.g., `img/castorice.png`).
3.  Update `index.html`:
    ```html
    <img src="img/castorice.png" alt="Castorice" class="hero-image" onerror="...">
    ```

### Colors

You can adjust the theme colors in `style.css`:
```css
:root {
    --primary-color: #6a1b9a; /* Deep Purple */
    --secondary-color: #9c27b0; /* Light Purple */
    --accent-color: #e1bee7; /* Lavender */
}
```

## Running the Project

Simply open `index.html` in your web browser.
