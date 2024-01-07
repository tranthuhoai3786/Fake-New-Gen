import React from 'react';
const { spawn } = require('child_process');

const Voice = () => {
    runPythonScript = () => {
        const pythonScriptPath = 'D:\\garanmem\\Kì2-22-23\\DL\\Fake-News-Gen-master\\Fake-News-Gen\\Fake-News-Gen (2)\\src\\components\\voice.py';

        // Chạy tệp Python bằng child process
        const pythonProcess = spawn('python', [pythonScriptPath]);

        pythonProcess.stdout.on('data', (data) => {
            console.log(`stdout: ${data}`);
        });

        pythonProcess.stderr.on('data', (data) => {
            console.error(`stderr: ${data}`);
        });

        pythonProcess.on('close', (code) => {
            console.log(`child process exited with code ${code}`);
        });
    };


    return (
        <div>
            <button onClick={this.runPythonScript}>Run Python Script</button>
        </div>
    );

};

export default Voice;