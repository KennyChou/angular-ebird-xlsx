#!/bin/sh

ng build --prod
npx ngh --dir=dist/angular-ebird-xlsx
