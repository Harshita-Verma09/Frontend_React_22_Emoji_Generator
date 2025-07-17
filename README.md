# Emoji Search App

This is a React application that allows users to search and select emojis. It fetches emoji data from an external API, filters emojis based on user input, and displays selected emojis.

## Features

-   **Emoji Search:** Users can search for emojis by name or slug.
-   **Emoji Selection:** Users can click on an emoji to add it to their selection.
-   **Display Selected Emojis:** The app displays all selected emojis.

## Technologies Used


-   React
-   Axios (for fetching data)
-   Unicode Emoji JSON API

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd <project_directory>
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm start
    ```

5.  **Open your browser and navigate to `http://localhost:3000`**

## Usage

1.  Enter a search term in the input field.
2.  The app will display matching emojis.
3.  Click on an emoji to select it.
4.  Selected emojis will be displayed below the search results.

## API

The app uses the following API:

-   `https://unpkg.com/unicode-emoji-json@0.8.0/data-by-emoji.json`

## File Structure
Markdown

# Emoji Search App

This is a React application that allows users to search and select emojis. It fetches emoji data from an external API, filters emojis based on user input, and displays selected emojis.

## Features

-   **Emoji Search:** Users can search for emojis by name or slug.
-   **Emoji Selection:** Users can click on an emoji to add it to their selection.
-   **Display Selected Emojis:** The app displays all selected emojis.

## Technologies Used

-   React
-   Axios (for fetching data)
-   Unicode Emoji JSON API

## Getting Started

1.  **Clone the repository:**

    ```bash
    git clone <repository_url>
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd <project_directory>
    ```

3.  **Install dependencies:**

    ```bash
    npm install
    ```

4.  **Start the development server:**

    ```bash
    npm start
    ```

5.  **Open your browser and navigate to `http://localhost:3000`**

## Usage

1.  Enter a search term in the input field.
2.  The app will display matching emojis.
3.  Click on an emoji to select it.
4.  Selected emojis will be displayed below the search results.

## API

The app uses the following API:

-   `https://unpkg.com/unicode-emoji-json@0.8.0/data-by-emoji.json`

## File Structure

emoji-search-app/
├── public/
│   └── index.html
│   └── ...
├── src/
│   ├── components/
│   │   └── EmojiSearch.js
│   ├── App.js
│   ├── index.js
│   └── ...
├── package.json
├── package-lock.json
└── README.md


-   `EmojiSearch.js`: Contains the main component logic for the emoji search.
-   `App.js`: Main application component.
-   `index.js`: Entry point of the React application.
-   `public/index.html`: Main HTML file.

## Styling

Inline styling has been used for simplicity. For a larger application, consider using CSS modules or a styling library.

## Future Improvements

-   Add pagination for large search results.
-   Improve styling and responsiveness.
-   Add functionality to remove selected emojis.
-   Implement copy to clipboard functionality for selected emojis.
-   Add error handling for API requests.
-   Implement better UI/UX.
