// Models: Defines the data models used throughout the application.
// Repository: Acts as an abstraction layer over data sources, providing a clean API for accessing and managing data.
// Entities: Represent core business objects with their properties and behaviors.
// Use Cases: Contains application-specific business rules and logic, orchestrating interactions between entities and data sources.
// Repository Interfaces: Defines interfaces for repositories used to access data, decoupling the domain layer from specific data sources.

// quiz-application/
// ├── src/
// │   ├── application/
// │   │   ├── use_cases/
// │   │   │   ├── quiz/
// │   │   │   │   ├── createQuestion.ts
// │   │   │   │   ├── getQuestions.ts
// │   │   │   │   ├── submitAnswers.ts
// │   │   │   │   └── getResults.ts
// │   │   │   └── user/
// │   │   │       ├── registerUser.ts
// │   │   │       └── authenticateUser.ts
// │   │   └── interfaces/
// │   │       ├── repositories/
// │   │       │   ├── IQuestionRepository.ts
// │   │       │   ├── IAnswerRepository.ts
// │   │       │   ├── IUserRepository.ts
// │   │       │   └── IResultRepository.ts
// │   │       └── services/
// │   │           ├── IAuthenticationService.ts
// │   │           └── INotificationService.ts
// │   ├── domain/
// │   │   ├── entities/
// │   │   │   ├── Question.ts
// │   │   │   ├── Answer.ts
// │   │   │   ├── User.ts
// │   │   │   └── Result.ts
// │   │   └── value_objects/
// │   │       ├── QuestionDifficulty.ts
// │   │       └── AnswerStatus.ts
// │   ├── infrastructure/
// │   │   ├── database/
// │   │   │   ├── models/
// │   │   │   │   ├── QuestionModel.ts
// │   │   │   │   ├── AnswerModel.ts
// │   │   │   │   ├── UserModel.ts
// │   │   │   │   └── ResultModel.ts
// │   │   │   ├── repositories/
// │   │   │   │   ├── QuestionRepository.ts
// │   │   │   │   ├── AnswerRepository.ts
// │   │   │   │   ├── UserRepository.ts
// │   │   │   │   └── ResultRepository.ts
// │   │   └── services/
// │   │       ├── AuthenticationService.ts
// │   │       └── NotificationService.ts
// │   ├── presentation/
// │   │   ├── controllers/
// │   │   │   ├── QuizController.ts
// │   │   │   └── UserController.ts
// │   │   ├── middlewares/
// │   │   │   ├── authMiddleware.ts
// │   │   │   └── errorHandlerMiddleware.ts
// │   │   └── routes/
// │   │       ├── quizRoutes.ts
// │   │       └── userRoutes.ts
// │   └── config/
// │       ├── dbConfig.ts
// │       ├── serverConfig.ts
// │       └── authConfig.ts
// ├── tests/
// │   ├── unit/
// │   │   ├── use_cases/
// │   │   ├── repositories/
// │   │   ├── services/
// │   │   └── controllers/
// │   └── integration/
// │       ├── routes/
// │       ├── database/
// │       └── services/
// ├── .env
// ├── .eslintrc.js
// ├── .gitignore
// ├── jest.config.js
// ├── package.json
// ├── README.md
// ├── tsconfig.json
// └── yarn.lock


