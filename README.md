# Elishop

Elishop is a frontend shopping website that fetches product and user data from Strapi CMS. This project is developed using Next.js, TypeScript, TailwindCSS, Redux, and various other technologies.

## Demo
You can see a live demo of the project [here](https://crud-user-nextjs-mock-api.vercel.app/).

![Project Screenshot](https://img2.pic.in.th/pic/CRUD-users-next-mockAPI.png)

## Features

- **Navbar:**
  - Menus: Home, Shop, Profile, Cart, Login Button, Toggle Theme Button
  - Switch between light mode and dark mode
  - Login and Register options

- **Home Page:**
  - Swiper banner carousel
  - Product sections: Best Seller, Recommend, Sale (displayed as card carousel)

- **Shop Page:**
  - Display all products
  - Search functionality
  - Filter menu for categories, tags, and prices

- **Product Detail Page:**
  - Product images, categories, tags, and details
  - Add to Cart and Add to Favorite buttons

- **Profile Page:**
  - User information
  - Favorite products displayed in a grid layout
  - Option to remove favorite items

- **Cart Page:**
  - Display cart items
  - Adjust item quantities
  - Remove items from the cart
  - Display total price and checkout simulation

- **Login / Sign Up:**
  - Users can log in or sign up via a modal window
  - Authenticated users can add products to the cart and favorites
  - Guests are prompted to log in before accessing certain features

**Note:** Add to Cart and Favorite buttons are available on product cards in the Home and Shop pages. If the user is not logged in, a prompt will appear.

## Getting Started

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Pharadol/EliShop.git
   cd elishop
