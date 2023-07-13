import * as fs from 'fs';
import { parse } from 'dotenv';

export class ConfigService {
  private readonly envConfig: { [key: string]: string };

  constructor() {
    const environment = process.env.NODE_ENV;
    const envFilePath = __dirname + `/../../.env${environment}`;
    const existsPath = fs.existsSync(envFilePath);

    if (!existsPath) {
      console.log('.env file does not exist');
      this.envConfig = {
        PORT: process.env.PORT,
      };
    }

    this.envConfig = parse(fs.readFileSync(envFilePath));
}

  get(key: string): string {
    return this.envConfig[key];
  }
}
