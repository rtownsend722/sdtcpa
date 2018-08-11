const express = require('express');
const app = express();
const PORT = process.env.PORT || 4568;

express()
	.use(express.static('dist'))
	.listen(PORT, () => console.log(`Listening on ${PORT}`));
