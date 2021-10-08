export { };

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';

      /** app id */
      REACT_APP_APP_ID: string;
    }
  }
}
