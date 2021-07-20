#! bin/bash
export TAILWIND_MODE=build
NODE_ENV_BUILD="${NODE_ENV:=development}"
env-cmd --file ./.env.$NODE_ENV_BUILD vite build