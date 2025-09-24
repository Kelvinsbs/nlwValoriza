readme nlw

# NLW Valoriza

A platform to promote recognition among team members — recognize people, share positive feedback, and build a more positive work environment.

---

## 🧾 Description

NLW Valoriza is a backend application built with **Node.js**, **TypeScript**, and **Express**. It provides functionality for capturing “praises” (elogios), using JWT-based authentication, a database via TypeORM, and is designed with features like migrations, future expansion, and a clean architecture.  

---

## 🛠️ Technologies

- Node.js  
- TypeScript  
- Express.js  
- TypeORM  
- JSON Web Token (JWT)  

---

## 🚀 Getting Started / How to Run

To run this project locally, follow these steps:

```bash
# Clone the repo
git clone https://github.com/Kelvinsbs/nlwValoriza.git
cd nlwValoriza

# Install dependencies
yarn

# Run database migrations
yarn typeorm migration:run

# Start the development server
yarn dev
```

After that, the application should be available at:
http://localhost:3000

---

## 🔮 Future Improvements (Roadmap)

Here are some planned enhancements:

 Send emails when a “praise” (elogio) is received

 Deploy to production (Heroku / AWS / DigitalOcean etc.)

 Build a front-end client (web or mobile)

 Improve the system architecture (modularization, domain-driven design etc.)

 Add custom error handling & global error middleware

 Support for alternate databases (configure via TypeORM)

 Add more services (e.g. notifications, analytics)

---

## ✍️ Author

Kelvin Santos Barcelos

Contact: nivlek.barcelos@gmail.com

---

## 📌 Notes

Make sure to configure your .env or equivalent for environment variables (database credentials, JWT secrets, etc.).

The project expects a SQL-compatible database to be used via TypeORM.

If you build the frontend, consider REST or GraphQL to integrate with this backend.

---

Thank you for checking out NLW Valoriza!
If you find bugs or have feature ideas, feel free to open an issue or pull request.
