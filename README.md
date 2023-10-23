### Installation

    npm install git+https://github.com/freddieptf/cht-dotenv.git

### Usage
    NAME
      cht-dotenv - Helper for injecting environment variables into your config.
      Replaces instances of env.{NAME} with the value of {NAME} in your environment
      
    FLAGS
      -f <path> - Path to file

#### Example Config
in `app_settings/base_settings.json`
```json
"auth": {
    "type": "basic",
    "username": "env.SYSTEM_USER",
    "password_key": "env.PASS_KEY"
}
```
After you run `npx cht-dotenv`, `env.SYSTEM_USER` will get replaced with the value you set for `SYSTEM_USER` in your environment


