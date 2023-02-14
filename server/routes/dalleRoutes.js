import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, Configuration, OpenAIApi } from 'openai';

dotenv.config();

const router = express.Router();

const configuration = new Configuration({
    apikey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration);