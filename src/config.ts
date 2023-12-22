import dotenv from "dotenv"

const env = process.env.NODE_ENV || "development"
console.log("the current environment:" + env);

const result = dotenv.config({ path: `.env.${env}` });
if (result.error) {
    console.error(result.error);
    process.exit(1);
}
