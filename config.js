const config = {
    db: {
        host: "localhost",
        user: "tatydog_admin",
        password: "!TatyDog1234",
        database: "tatydog",
        timezone: 'Z',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 20,
        dateStrings: true
    },
    adminUser: "test",
    adminPassword: "test",
    maxLessonsAllowed: 5
};

module.exports = config;
