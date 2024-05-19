# Interactive Score Summary

This project is an interactive score summary card designed to display scores in various categories with a dynamic counting effect. The card is responsive and visually appealing, adjusting its layout based on the screen size.

## Features

- **Responsive Design**: Adjusts layout based on screen size, switching from a column layout on smaller screens to a row layout on larger screens.
- **Dynamic Counting Effect**: Scores count up from 0 to their final value, creating an engaging visual effect.
- **Category Breakdown**: Detailed scores for different categories: Reaction, Memory, Verbal, and Visual.
- **Social Media Links**: Buttons with icons linking to GitHub and LinkedIn profiles.

## Project Structure

- **HTML**: The HTML structure is divided into two main sections: the overall score summary and the detailed breakdown of individual scores.
- **CSS**: The CSS styling ensures a responsive and visually appealing design using flexbox layout and media queries.
- **JavaScript**: JavaScript adds a dynamic counting effect to the scores using the `setInterval` function.

## Files

- `index.html`: Contains the HTML structure of the project.
- `style.css`: Contains the CSS styles for the project.
- `app.js`: Contains the JavaScript functionality for the dynamic counting effect.

## Usage

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/interactive-score-summary.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd interactive-score-summary
    ```

3. **Open `index.html` in your browser** to view the interactive score summary card.

## Detailed Breakdown

### HTML

- The `parent` container holds two main sections: `first-column` and `second-column`.
- The `first-column` displays the total score and a footer with a summary.
- The `second-column` contains individual score cards for Reaction, Memory, Verbal, and Visual categories.
- Social media links are included at the bottom of the `second-column`.

### CSS

- **Flexbox Layout**: Ensures the content is centered both vertically and horizontally.
- **Background Colors**: Different background colors and transparency levels are used for each score category.
- **Media Queries**: Adjust the layout for larger screens, switching to a row layout.
- **Button Styling**: Social media links are styled as buttons with icons.

### JavaScript

- **Dynamic Counting Effect**: Targets elements with classes `numb` and `num`, incrementing their values from 0 to the specified data values.
- **`setInterval` Function**: Updates the text content of the elements at regular intervals to create the counting effect.

## External Links

- **GitHub**: [Profile](https://github.com/AdeobaAdedayo18)
- **LinkedIn**: [Profile](https://www.linkedin.com/in/adeoba-adedayo-7b078b29b/)

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.

## Acknowledgments

- Inspired by various interactive score summary designs.
- Icons provided by [Font Awesome](https://fontawesome.com/).

---


