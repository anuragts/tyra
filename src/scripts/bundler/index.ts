import { parser } from "./parser";

const code = `
const a = 1;
`;

const result = parser(code);

console.log(JSON.stringify(result, null, 2));
