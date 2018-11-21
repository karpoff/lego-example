const path = require('path');
const fs = require('fs');

function buildInfo(packageDir) {
  const bricksDir = path.resolve(packageDir, 'bricks');
  const brickList = fs.readdirSync(bricksDir)
    .filter(file => fs.statSync(path.join(bricksDir, file)).isDirectory());

  const bricks = {};

  brickList.forEach((brickType) => {
    const infoPath = path.join(bricksDir, brickType, 'info.json');
    bricks[brickType] = JSON.parse(fs.readFileSync(infoPath).toString('utf-8'));
  });

  return bricks;
}

exports.buildInfo = buildInfo;
