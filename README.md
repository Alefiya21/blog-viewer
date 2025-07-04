# Blog Viewer

This is a simple blog viewer built with [Next.js](https://nextjs.org). It allows users to browse a list of blog posts and view details for each post. The project demonstrates basic usage of Next.js pages, components, and testing with Jest and React Testing Library.

## Features

- View a list of blog posts
- Click a post to see its details
- Simple, clean UI
- Unit tests for components

## Getting Started

### Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

### API Endpoint

You can fetch blog posts from the API endpoint:

```
http://localhost:3000/api/posts
```

### Testing

To run unit tests:

```bash
npx jest
```

> **Note:** If you encounter issues with Babel and Next.js, see the comments in `jest.config.js` and the project documentation for how to run tests and the app without conflicts.

## Project Structure

- `pages/` - Next.js pages (`index.js`, `posts.js`)
- `components/` - React components (`PostList.jsx`, `PostDetail.jsx`)
- `__tests__/` - Unit tests for components
- `jest.config.js` - Jest configuration
- `babel.config.js` - Babel config for Jest (see notes above)

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn-pages-router)
- [Jest Documentation](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)