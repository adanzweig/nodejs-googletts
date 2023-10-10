// Import the Google Cloud Text-to-Speech module
const textToSpeach = require('@google-cloud/text-to-speech');

// Import the File System module for file operations
const fs = require('fs');

/**
 * Transforms the provided text into speech using Google Cloud's Text-to-Speech API.
 * @param {string} text - The text you want to transform into speech.
 * @param {string} outputFile - The path where the generated audio file will be saved.
 * @returns {Promise<string>} - The path of the generated audio file.
 */
export async function transformTextToSpeachWithGoogle(text, outputFile){
    try{
        // Create a new instance of Text-to-Speech client
        const client = new textToSpeach.TextToSpeechClient();

        // Construct the request payload for the API
        const request = {
            input: {text},
            voice: { languageCode: 'en-US', ssmlGender: 'NEUTRAL'},
            audioConfig: {audioEncoding: 'MP3'}
        };

        // Make the API call to synthesize the provided text
        const [response] = await client.synthesizeSpeech(request);

        // Write the generated audio content to the specified output file
        fs.writeFileSync(outputFile,response.audioContent,'binary');

        // Return the output file path
        return outputFile;
    } catch(error) {
        // Handle any errors and log them
        console.error('Error:', error);
    }
}

// Uncomment below lines to test the function with a sample text
/*
(async()=>{
    await transformTextToSpeachWithGoogle('Test text i want to hear','output.mp3');
})()
*/
