# 🎯 CandyList - GitHub Candidate Search

![Netlify Deployment](https://img.shields.io/netlify/{your-netlify-deployment-id})  
🚀 **Live Demo:** [CandyList on Netlify](https://your-netlify-url.netlify.app)

## 📌 Description
CandyList is a **GitHub candidate search application** that allows users to browse GitHub profiles and save potential candidates for hiring. It is built with **React, TypeScript, Vite, and Netlify**.

## ✨ Features
✅ **Fetch random GitHub users** using the GitHub API  
✅ **View candidate details** including name, location, and company  
✅ **Save candidates** to a list for later review  
✅ **Local storage support** to persist saved candidates  
✅ **Styled UI with a clean layout**  

---

## 🛠️ Tech Stack
- **Frontend:** React + TypeScript + Vite
- **Deployment:** Netlify
- **API:** GitHub REST API
- **State Management:** React Hooks
- **Styling:** CSS Modules

---

## 🚀 Installation & Setup
To run the project locally, follow these steps:

```sh
# Clone the repository
git clone https://github.com/fagan921/CandyList.git

# Navigate to the project folder
cd CandyList

# Install dependencies
npm install

# Create a .env file with your GitHub token
cp environment/.env.EXAMPLE environment/.env

# Start the development server
npm run dev
npm run build - to deploy manually

# Environmental Variables
Create a .env file in the environment/ folder and add: VITE_GITHUB_TOKEN=your_github_token_here

🏗️ Future Enhancements

🚀 Sorting & Filtering - Improve search functionality
🚀 Pagination - Browse more candidates
🚀 Dark Mode - Enhance UI with dark mode

📄 License

This project is licensed under the MIT License.

📬 Contact

🔗 GitHub: @fagan921
🌍 Live Demo: [CandyList on Netlify](https://lucent-douhua-ef7501.netlify.app/)
