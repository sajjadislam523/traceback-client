# TraceBack - Lost and Found Website

TraceBack is a web application designed to connect people who have lost items with those who have found them. By enabling users to post details about lost and found items, TraceBack fosters a community-driven approach to recovering lost possessions. The platform emphasizes security, usability, and real-time updates.

## Purpose

TraceBack aims to simplify the process of finding lost items or reuniting found items with their rightful owners. It provides a centralized platform where users can share item details, communicate effectively, and collaborate to resolve lost-and-found cases.

## Live URL

Visit the live website here:  
[**TraceBack - Lost and Found**](https://traceback-d327e.web.app/)

## Key Features

-   **User Authentication**: Secure login and registration with Firebase Authentication (email/password and Google login).
-   **Post Lost & Found Items**: Users can create posts with detailed information, including the title, description, category, location, and date lost.
-   **Update Status**: Real-time updates for marking items as "Recovered" with confirmation modals.
-   **Dynamic Routes**: Smooth navigation powered by React Router.
-   **Responsive Design**: Built with Tailwind CSS and DaisyUI for a modern, mobile-friendly user experience.
-   **Interactive Animations**: Framer Motion provides engaging animations for seamless interactions.
-   **Date Picker Integration**: `react-datepicker` for effortless date selection.
-   **Social Media Integration**: Links to Facebook, Twitter, and Instagram for easy sharing.
-   **User Profile Management**: Users can view and update their profile in the dashboard.
-   **Success Toasts**: Sweetalert2 ensures visually appealing and informative feedback for user actions.

## Technologies Used

-   **React**: A JavaScript library for building user interfaces.
-   **React Router**: Efficient route handling for seamless navigation.
-   **Firebase**: Authentication and backend database for secure user management and data storage.
-   **Tailwind CSS**: Utility-first CSS framework for creating responsive and visually appealing designs.
-   **DaisyUI**: A Tailwind CSS-based component library for fast and consistent UI development.
-   **Framer Motion**: Provides smooth and professional animations.
-   **React Datepicker**: Simplifies date selection for lost items.
-   **Sweetalert2**: Elegant alert dialogs for user feedback.
-   **Swiper**: Interactive sliders for showcasing content dynamically.

## npm Packages

-   **axios**: Simplified HTTP client for API requests.
-   **firebase**: Enables authentication and real-time database features.
-   **react-datepicker**: Date picker for choosing when items were lost.
-   **react-helmet-async**: Manages metadata for better SEO and performance.
-   **react-icons**: Icons for enhanced UI design.
-   **react-modal**: Create modals for various user interactions.
-   **react-router-dom**: Manages client-side routing.
-   **react-simple-typewriter**: Adds typewriter effects to text for dynamic headers.
-   **sweetalert2**: Creates visually appealing alerts and notifications.
-   **swiper**: Adds swipeable sliders for showcasing posts.
-   **framer-motion**: Creates smooth animations for interactive user experiences.

---

## 🛠️ Installation Process

To run the project locally, follow these steps:

1. **Clone the Repository**

    ```bash
    git clone https://github.com/sajjadislam523/traceback-client.git
    ```

2. **Navigate to the Project Directory**

    ```bash
    cd traceback
    ```

3. **Install Dependencies**  
   Install all the required npm packages using:

    ```bash
    npm install
    ```

4. **Set Up Firebase Configuration**

    - Go to your [Firebase Console](https://console.firebase.google.com/).
    - Create a new Firebase project.
    - Add your project's Firebase configuration to a `.env` file in the root directory:

        ```bash
        REACT_APP_FIREBASE_API_KEY=your-api-key
        REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
        REACT_APP_FIREBASE_PROJECT_ID=your-project-id
        REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
        REACT_APP_FIREBASE_APP_ID=your-app-id
        ```

5. **Start the Development Server**  
   Run the following command to start the development server:

    ```bash
    npm run dev
    ```

    The app will be available at `http://localhost:3000`.

6. **Build for Production** (Optional)  
   To create a production-ready build, use:
    ```bash
    npm run build
    ```
    This will generate a `build` folder with optimized files for deployment.
