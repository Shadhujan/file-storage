const fs = require('fs');
const stream = require('stream');
const path = require('path');

function chunkFile(filePath, chunkSize) {
  const fileStream = fs.createReadStream(filePath);
  let chunkIndex = 0;

  fileStream.on('readable', () => {
    let chunk;
    while (null !== (chunk = fileStream.read(chunkSize))) {
      const chunkPath = path.join('chunks', `chunk-${chunkIndex}`);
      fs.writeFileSync(chunkPath, chunk);
      chunkIndex++;
    }
  });
}
