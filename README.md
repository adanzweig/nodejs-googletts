# Google Cloud Text-to-Speech API Wrapper

A simple Node.js module that converts a given text into speech using the Google Cloud Text-to-Speech API.

## Prerequisites

1. [Node.js](https://nodejs.org/) installed.
2. A Google Cloud account and a service account key with Text-to-Speech permissions.
3. Set up the Google Cloud SDK on your local machine.

## Installation

1. Clone this repository:

```
git clone https://github.com/adanzweig/nodejs-googletts.git
```

2. Navigate to the project directory:

```
cd nodejs-googletts
```

3. Install the dependencies:

```
npm install
```

4. Set up your Google Cloud credentials:

Export your service account key:

```
export GOOGLE_APPLICATION_CREDENTIALS="<path_to_service_account_key.json>"
```

Replace `<path_to_service_account_key.json>` with the path to your Google Cloud service account key.

## Usage

Here's how to use the `transformTextToSpeachWithGoogle` function:

```javascript
const { transformTextToSpeachWithGoogle } = require('./path_to_your_file');

(async () => {
    const outputFile = await transformTextToSpeachWithGoogle('Your text here', 'output.mp3');
    console.log(`Audio saved to: ${outputFile}`);
})();
```

Replace `'Your text here'` with the text you want to convert and `'output.mp3'` with your desired output file name.

## Contributing

Contributions are welcome. Please submit a pull request or open an issue to discuss the changes you'd like to make.
