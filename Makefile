install:
	npm ci

start:
	npm start

build:
	npm run build

lint:
	npx eslint --ext .js,.jsx .

fix-lint:
	npx eslint --ext .js,.jsx . --fix