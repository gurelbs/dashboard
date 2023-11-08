export interface FibiEnv {
  url: string;
  username: string;
  password: string;
}

export interface GlobalEnv {
  args: {
    NODE_ENV: string;
    PORT: number;
    isDev: boolean;
  },
  user: {
    email: string;
  };
  assets: {
    fibi: FibiEnv;
  },
}


