import "dotenv/config";

export default {
    schema: "./src/db/schema.js",
    out: "./drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: "postgresql://apiuser:@#Mother27@localhost:5432/uberclone",

    }
};