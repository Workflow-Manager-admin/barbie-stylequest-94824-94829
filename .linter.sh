#!/bin/bash
cd /home/kavia/workspace/code-generation/barbie-stylequest-94824-94829/main_container_for_barbie_stylequest
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

