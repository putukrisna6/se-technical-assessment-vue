# se-technical-assessment-vue

## Project setup
Create a `.env` file. Please look at the `.env.example` and adjust the API base URL.

### Build and run the app with Docker Compose

```
docker compose build
docker compose up -d
```

### Build a development server
```
yarn serve
```

## Project structure

Here's the structure of the project. All components are inside the `/components/` directory. `/services/` handles the connection to the API. 
```
└── src
    ├── App.vue
    ├── assets
    │   ├── logo.png
    │   └── tailwind.css
    ├── components
    │   ├── FeedbackForm.vue
    │   ├── FeedbackModal.vue
    │   └── StarRating.vue
    ├── main.js
    └── services
        └── apiService.js
```