# Image Compression Tool

This is a simple Node.js script that compresses images in a given directory using the `sharp` library. It supports JPEG and PNG formats and reduces image sizes while maintaining reasonable quality.

## Features
- Compresses all `.jpg`, `.jpeg`, and `.png` images in a specified folder.
- Saves compressed images in a `compressed` subfolder.
- Uses `sharp` to optimize images with JPEG quality set to 80%.
- Uses `inquirer` to prompt the user for a folder path.

## Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your system.

## Installation
1. Clone or download the script.
2. Install dependencies using npm:
   ```sh
   npm install fs path sharp inquirer
   ```

## Usage
Run the script with the following command:
```sh
node script.js
```
Then enter the path of the folder containing the images when prompted.

## How It Works
1. The script prompts the user to enter a folder path.
2. It scans the directory and creates a `compressed` folder if it doesn't exist.
3. It compresses all images with `.jpg`, `.jpeg`, and `.png` extensions.
4. Compressed images are saved in the `compressed` subfolder.
5. A success message is displayed upon completion.

## Dependencies
- [`fs`](https://nodejs.org/api/fs.html) - File system operations.
- [`path`](https://nodejs.org/api/path.html) - Handling file paths.
- [`sharp`](https://sharp.pixelplumbing.com/) - Image processing.
- [`inquirer`](https://www.npmjs.com/package/inquirer) - CLI input handling.

## License
This project is for practice purposes only and is open-source. Feel free to modify and improve it!

## Author
Farham Aghdasi

