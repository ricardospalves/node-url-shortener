echo 'Register a short URL for Node.js:\n'
curl --silent -X POST \
  -H 'Content-Type: application/json' \
  --data-binary '{"code":"nodejs","url":"https://nodejs.org"}' \
  localhost:3333/api/urls

echo '\n\n********\n'

echo 'Register a short URL for GitHub:\n'
curl --silent -X POST \
  -H 'Content-Type: application/json' \
  --data-binary '{"code":"github","url":"https://github.com"}' \
  localhost:3333/api/urls

echo '\n\n********\n'

echo 'Register a short URL for GitHub:\n'
curl --silent -X POST \
  -H 'Content-Type: application/json' \
  --data-binary '{"code":"github","url":"https://github.com"}' \
  localhost:3333/api/urls

echo '\n\n********\n'

echo 'Register a short URL for npm:\n'
curl --silent -X POST \
  -H 'Content-Type: application/json' \
  --data-binary '{"code":"npm","url":"https://npmjs.com"}' \
  localhost:3333/api/urls

echo '\n'
