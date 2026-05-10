# IMY210 Assignment - Part 6: Reflection

**Student Name:** Taletso Pabale  
**Student Number:** u25163885  
**GitHub Repository:** https://github.com/pabaletaletso/imy210-nuxt-strapi

## Reflection

This assignment taught me a lot about building a full-stack website using both frontend and backend technologies with Docker. It gave me practical experience working with tools that are used in real-world development.

The biggest challenge I faced was learning how to use Strapi. It was completely new software for me, so I struggled at first with creating content types, creating blog posts, publishing posts, and understanding how the API works. It took time to understand the CMS structure, but after experimenting and reading through the documentation, I was able to create and manage my content successfully.

Docker was also difficult. Writing Dockerfiles for both Nuxt and Strapi was challenging because my frontend was not communicating with my backend correctly at first. Another issue I faced was that the Strapi admin panel would keep loading and reloading without opening properly after every build. This happened because my Docker setup and container configuration were not correct. After debugging and fixing my Docker Compose setup, everything started working properly.

This assignment taught me how important environment setup is in development. I learned how frontend and backend services communicate inside Docker containers and how CMS applications like Strapi make content management easier. Even though this assignment was challenging, it helped me understand backend and frontend integration better and improved my problem-solving skills.

---

## Commands Used

### Clone project
```bash
git clone https://github.com/pabaletaletso/imy210-nuxt-strapi.git
cd imy210-nuxt-strapi

# Navigate to project folder
cd #To file directory

# Stop and remove containers and volumes
docker compose down --volumes

# Rebuild containers without cache
docker compose build --no-cache

# Start containers
docker compose up

# Build and start containers together
docker compose up --build

# View running containers
docker ps

# Stop running containers
docker compose down

# Open Strapi admin panel
http://localhost:1337/admin

# Open Nuxt frontend
http://localhost:3000
