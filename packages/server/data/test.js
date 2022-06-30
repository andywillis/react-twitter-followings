import fs from 'fs';
import { XMLParser } from 'fast-xml-parser';

const xml = await fs.promises.readFile('./rss.xml', 'utf-8');

const parser = new XMLParser();
const json = parser.parse(xml);

fs.promises.writeFile('rss.json', JSON.stringify(json, null, 2));
