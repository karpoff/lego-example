const {camelCase} = require('lodash');

const brickComponent = type => `Brick${capitalizeCamelCase(type)}Component`;
const brickModule = type => `Brick${capitalizeCamelCase(type)}Module`;


const capitalizeCamelCase = str => {
  str = camelCase(str);
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const convertBrickToTs = (type, info) => `  ${type}: {
    title: '${info.title || type}',
    data: ${JSON.stringify(info.data || data)},
    component: ${brickComponent(type)},
  },
`;

const convertBrickImportsToTs = bricks => `import {
${Object.keys(bricks).map(type => ` ${brickComponent(type)},\n`).join('')}} from 'lego-site/bricks';`;

const convertBricksToTs = bricks => `/* tslint:disable */
${convertBrickImportsToTs(bricks)}

export const bricks = {
${Object.entries(bricks).map(([type, info]) => convertBrickToTs(type, info)).join('')}};
`;

/////

const convertBricksToImportModule = types => `/* tslint:disable */
import {NgModule} from '@angular/core';

${types.map(type => `import {${brickModule(type)}} from './${type}/${type}.module';\n`).join('')}
${types.map(type => `import {${brickComponent(type)}} from './${type}/${type}.component';\n`).join('')}
@NgModule({
  imports: [
${types.map(type => `    ${brickModule(type)},\n`).join('')}  ],
  entryComponents: [
${types.map(type => `    ${brickComponent(type)},\n`).join('')}  ]
})
export class BricksModule {
}
`;

const convertBricksToPublicApi = types => `export * from './bricks.module';

${types.map(type => `export * from './${type}/${type}.component';\n`).join('')}`;

module.exports.convertBricksToTs = convertBricksToTs;
module.exports.convertBricksToImportModule = convertBricksToImportModule;
module.exports.convertBricksToPublicApi = convertBricksToPublicApi;
