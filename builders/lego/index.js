const CoreBuilder = require("@angular-devkit/build-ng-packagr/src/build");
const fs = require('fs');
const path = require('path');
const buildInfo = require('./info').buildInfo;
const {
  convertBricksToTs,
  convertBricksToPublicApi,
  convertBricksToImportModule,
} = require('./templates');

class LegoBuilder {
  constructor(context) {
    this.context = context;
  }

  run(builderConfig) {
    const basePath = path.dirname(builderConfig.options.project);
    const bricks = buildInfo(basePath);
    const brickTypes = Object.keys(bricks);

    fs.writeFileSync(path.resolve(basePath, 'src', 'bricksData.ts'), convertBricksToTs(bricks));
    fs.writeFileSync(path.resolve(basePath, 'bricks', 'bricks.module.ts'), convertBricksToImportModule(brickTypes));
    fs.writeFileSync(path.resolve(basePath, 'bricks', 'public_api.ts'), convertBricksToPublicApi(brickTypes));

    return CoreBuilder.NgPackagrBuilder.prototype.run.call(this, builderConfig);
  }
}

exports.LegoBuilder = LegoBuilder;
exports.default = LegoBuilder;
