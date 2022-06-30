# react-twitter-followings

## Summary

Small React app to show show a dashboard of Twitter (via Nitter) followings (people I'm following) with links to their Nitter profiles.

Additional tools to:

  - ✔ Download a current RSS feed per following

  - ✔ Conversion tool to create JSON from the RSS XML

  - ✔ Batch upload tool to add the JSON to couchdb

  - Tool to monitor the RSS feeds, check them against the current state of the database, and use SSE to send updates to the React app.

## Tech

- [React - Node/Express - Vite](https://github.com/andywillis/vite-react-express-boilerplate)
- [`fast-xml-parser`](https://github.com/NaturalIntelligence/fast-xml-parser)
- couchdb
- SSE

---

## Licence

[![CC BY-NC-SA 4.0][cc-by-nc-sa-shield]][cc-by-nc-sa]

This work is licensed under a
[Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License][cc-by-nc-sa].

[![CC BY-NC-SA 4.0][cc-by-nc-sa-image]][cc-by-nc-sa]

[cc-by-nc-sa]: http://creativecommons.org/licenses/by-nc-sa/4.0/
[cc-by-nc-sa-image]: https://licensebuttons.net/l/by-nc-sa/4.0/88x31.png
[cc-by-nc-sa-shield]: https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg