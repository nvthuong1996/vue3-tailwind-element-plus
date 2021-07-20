#! bin/bash
export NODE_ENV_BUILD="${NODE_ENV:=development}"
env-cmd --file ./.env.$NODE_ENV_BUILD vite