import * as babelParser from '@babel/parser';

// Parses through the code and covert it to an abstract syntax tree (AST)
export const parser = (code: string) => {
  return babelParser.parse(code, {
    sourceType: 'module',
    plugins: ['jsx'],
  });
};
