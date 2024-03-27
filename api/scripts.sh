echo 'Register a short URL for Node.js:\n'
curl --silent -X POST \
  -H 'Content-Type: application/json' \
  --data-binary '{"url":"https://nodejs.org"}' \
  localhost:3333/api/short-urls

echo '\n\n********\n'

echo 'Register a short URL for GitHub:\n'
curl --silent -X POST \
  -H 'Content-Type: application/json' \
  --data-binary '{"url":"https://github.com"}' \
  localhost:3333/api/short-urls

echo '\n\n********\n'

echo 'Register a short URL for GitHub:\n'
curl --silent -X POST \
  -H 'Content-Type: application/json' \
  --data-binary '{"url":"https://github.com"}' \
  localhost:3333/api/short-urls

echo '\n\n********\n'

echo 'Register a short URL for npm:\n'
curl --silent -X POST \
  -H 'Content-Type: application/json' \
  --data-binary '{"url":"https://npmjs.com"}' \
  localhost:3333/api/short-urls

echo '\n'
