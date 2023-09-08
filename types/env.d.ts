declare namespace NodeJS {
  export interface ProcessEnv {
    APPLICATION_STATE: "development" | "production";
    PORT: string;
    DATABASE_URL: string;
  }
}
