# PiGuard
A utility app to protect Pi Network users from fraud and phishing, built with Pi SDK integration.
npm install -g @vue/cli
vue create frontend
cd frontend
cd ..
mkdir backend
cd backend
npm init -y
npm install express mongoose pi-sdk
--
## Top Level
PiGuard/
├── frontend/        # Vue 3 App with Pi SDK UI
├── backend/         # Node.js API with Pi authentication, fraud logic
├── wordlists/       # Optional for fraud detection or pattern matching
├── .github/         # GitHub Actions (CI/CD workflows)
├── README.md        # Project overview and instructions
└── LICENSE          # MIT or open-source license
--
## frontend 
frontend/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AuthModal.vue
│   │   ├── FraudAlert.vue
│   │   ├── TransactionCard.vue
│   │   └── Dashboard.vue
│   ├── views/
│   │   ├── Home.vue
│   │   ├── Dashboard.vue
│   │   └── NotFound.vue
│   ├── router/
│   │   └── index.js
│   ├── utils/
│   │   └── pi.js           # Pi SDK integration
│   ├── store/              # Optional (Pinia/Vuex)
│   ├── App.vue
│   ├── main.js
│   └── tailwind.config.js
├── .env
├── package.json
└── vite.config.js          # Or vue.config.js if Vue CLI
--
## backend
backend/
├── controllers/
│   ├── authController.js       # Pi login/token verification
│   ├── transactionController.js
│   └── fraudController.js      # Detection logic
├── models/
│   ├── User.js
│   ├── Transaction.js
│   └── Alert.js
├── routes/
│   ├── authRoutes.js
│   ├── transactionRoutes.js
│   └── fraudRoutes.js
├── services/
│   ├── piAuthService.js        # Auth with Pi SDK
│   └── fraudDetection.js       # Core money-making logic
├── utils/
│   ├── logger.js
│   └── constants.js
├── middleware/
│   └── verifyPiUser.js
├── .env
├── server.js                  # App entry
├── config.js                  # DB + Pi SDK setup
├── package.json
└── README.md
--
## Wordlists
wordlists/                  # Custom scam keywords, fake domains, usernames, etc.
├── phishing_keywords.txt
├── scam_domains.txt
└── flagged_users.txt
--
.github/
└── workflows/
    └── node.yml            # Auto deploy/test
--
## Backend Dependencies ##
mkdir backend && cd backend
npm init -y
npm install express mongoose dotenv
npm install nodemon --save-dev
--


npm init vue@latest

cd piguard-frontend
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
