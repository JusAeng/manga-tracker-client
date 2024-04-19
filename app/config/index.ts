import dotenv from "dotenv";
dotenv.config();

interface ProcessEnv {
  LINE_CHANNEL_ACCESS_TOKEN?: string;
  LIFF_ID?: string;
  BASE_URL?: string;
}

const configEnv: ProcessEnv = {
  LINE_CHANNEL_ACCESS_TOKEN: process.env.LINE_CHANNEL_ACCESS_TOKEN,
  LIFF_ID: process.env.LIFF_ID,
  BASE_URL: process.env.BASE_URL,
};

export default configEnv;
