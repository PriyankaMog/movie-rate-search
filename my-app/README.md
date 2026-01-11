# 🎬 Movie App - React.js

A responsive and user-friendly Movie App built with React.js (Next.js) that allows users to search movies, browse results, and view detailed movie information through real-time API integration.

## ✨ Features

### 🏠 Home / Search Page
- **Movie Search**: Search for movies using TMDB and OMDB APIs
- **Search Results Display**:
  - Movie Poster
  - Title
  - Release Year
  - IMDB Rating
- **Responsive Cards Layout**: Grid layout that adapts to different screen sizes
- **Pagination**: Next/Previous buttons for browsing through results
- **Custom Search Bar**: Styled with CSS for better UX

### 🎭 Movie Details Page
- **Dynamic Routing**: `/movie/:id` for individual movie pages
- **Comprehensive Movie Details**:
  - Title
  - Poster
  - Plot/Description
  - Genre
  - TMDB & IMDB Ratings
  - Runtime
  - Cast/Actors
- **Favorites Management**: Add/Remove from favorites with real-time UI updates

### ❤️ Favorites Page
- **Display Favorite Movies**: Show all user-saved favorite movies
- **LocalStorage Integration**: 
  - Persist favorites across page reloads
  - Remove movies from favorites
- **Responsive Gallery Layout**: Grid layout for favorite movies
- **Bulk Actions**: Clear all favorites option

### 💾 LocalStorage Usage
- **Persistent Storage**:
  - User favorite movies
  - Dark mode preference
- **Automatic Updates**: Real-time updates on add/remove actions

### 🌙 Additional Features
- **Dark Mode Toggle**: Switch between light and dark themes
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Loading States**: Loading spinners and skeleton screens
- **Error Handling**: Graceful error handling for API failures
- **Smooth Animations**: CSS animations for better UX

## 🛠️ Tech Stack

- **Frontend**: React.js (Next.js 16)
- **Styling**: CSS3 with custom responsive design
- **APIs**: 
  - TMDB API (The Movie Database)
  - OMDB API (Open Movie Database)
- **Storage**: LocalStorage for favorites and preferences
- **Routing**: Next.js App Router

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd movie-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🔑 API Configuration

The app uses the following APIs:
- **TMDB API**: For movie search and details
- **OMDB API**: For additional movie information and ratings

API keys are already configured in the code for demo purposes. For production use, please:
1. Get your own API keys from [TMDB](https://www.themoviedb.org/settings/api) and [OMDB](http://www.omdbapi.com/apikey.aspx)
2. Replace the API keys in the code
3. Use environment variables for security

## 📱 Responsive Design

The app is fully responsive and optimized for:
- **Desktop**: Full-featured experience with grid layouts
- **Tablet**: Adapted layouts for medium screens
- **Mobile**: Touch-friendly interface with optimized navigation

## 🎨 Features Showcase

### Search Functionality
- Real-time movie search
- Pagination for large result sets
- Loading states and error handling
- Responsive search bar

### Movie Details
- Comprehensive movie information
- High-quality poster images
- Genre tags and ratings
- Cast information

### Favorites Management
- One-click add/remove favorites
- Persistent storage across sessions
- Bulk management options
- Visual feedback for actions

### Dark Mode
- Toggle between light and dark themes
- Persistent theme preference
- Smooth transitions
- Consistent styling across all pages

## 🏗️ Project Structure

```
movie-app/
├── app/
│   ├── favorites/
│   │   └── page.tsx          # Favorites page
│   ├── movie/
│   │   └── [id]/
│   │       └── page.tsx      # Movie details page
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── public/
│   └── placeholder.jpg       # Placeholder for missing images
├── package.json
└── README.md
```

## 🎯 Usage

1. **Search Movies**: Use the search bar on the home page to find movies
2. **View Details**: Click on any movie card to view detailed information
3. **Manage Favorites**: 
   - Click the heart icon on movie details to add/remove favorites
   - Visit the Favorites page to see all saved movies
4. **Toggle Theme**: Use the theme toggle button to switch between light/dark modes

## 🔧 Customization

### Styling
- Modify `globals.css` for custom styling
- Update color schemes in CSS variables
- Adjust responsive breakpoints

### API Integration
- Replace API keys with your own
- Modify API endpoints if needed
- Add additional movie data sources

### Features
- Add more movie information fields
- Implement user ratings
- Add movie recommendations
- Include movie trailers

## 📊 Performance

- **Lazy Loading**: Images are loaded lazily for better performance
- **Responsive Images**: Optimized image sizes for different devices
- **Efficient State Management**: Minimal re-renders with proper state management
- **LocalStorage Optimization**: Efficient data storage and retrieval

## 🐛 Troubleshooting

### Common Issues
1. **API Rate Limits**: If you encounter rate limiting, wait a few minutes before making more requests
2. **Missing Images**: Some movies may not have poster images available
3. **LocalStorage**: Clear browser data if favorites aren't persisting

### Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is for educational purposes. Please respect the terms of service of the APIs used.

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for movie data
- [OMDB](http://www.omdbapi.com/) for additional movie information
- [Next.js](https://nextjs.org/) for the React framework

---

**Enjoy exploring movies! 🍿**