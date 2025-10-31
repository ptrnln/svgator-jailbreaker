# SVGator Jailbreaker v0.0.1

This extension will allow you to remove the watermark from .svg SVGator download files, as well as expose the JavaScript API.

## Features

| ID & Name of Feature | Implemented | Prerequisite features |
|----------------------|-------------|-----------------------|
| 1 - Watermark removal | ❌ | 3
| 2 - JavaScript API exposure | ❌ | 3
| 3 - Opening download files | ❌ | 
| 4 - Preview GUI | ❌ | 3

## How to install

1. Clone the repo and enter into it:

```bash
git clone svgator-jailbreaker https://github.com/ptrnln/svgator-jailbreaker.git ; cd svgator-jailbreaker
```

2. Install dependencies and build the `dist` directory:

```bash
npm install ; npm run build
```

3. Open Chrome and navigate to `chrome://extensions/`, enable "Developer mode", and load the unpacked extension from the `dist` directory.

Note: If you have trouble installing dependencies, try deleting `package-lock.json` if you can. 
