# Codex Barba

This is a static website project built with the **Astro** framework. The site content is managed through **Markdown** files and is designed to have a retro look inspired by 8-bit video games using **NES.css**.

## Project Structure

The project has the following folder structure:

```
codex-barba
├── src
│   ├── components
│   │   └── PostCard.astro
│   ├── content
│   │   └── posts
│   │       └── primer-post.md
│   ├── layouts
│   │   └── BaseLayout.astro
│   └── pages
│       ├── index.astro
│       └── [slug].astro
├── astro.config.mjs
├── package.json
└── README.md
```

## Installation

To install the project dependencies, run the following command at the root of the project:

```
npm install
```

## Running the Project

To start the development server and see the site in action, use the following command:

```
npm run dev
```

This will open the site in your browser at `http://localhost:4321`.

## Contributions

If you want to contribute to this project, feel free to fork it and submit a pull request. Make sure to follow best coding practices and maintain the retro style of NES.css throughout the interface. Please ensure that your pull requests are made pointing to `develop` branch.

## License

This project is licensed under the MIT License.
