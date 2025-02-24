const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const inquirer = require('inquirer');

// Function to compress a single image
const compressImage = async (inputPath, outputPath) => {
  try {
    await sharp(inputPath)
      .jpeg({ quality: 80 })  // Compress the image, set JPEG quality
      .toFile(outputPath);
    console.log(`Compressed: ${outputPath}`);
  } catch (error) {
    console.error(`Error compressing ${inputPath}:`, error);
  }
};

// Function to compress all images in a directory
const compressImagesInDirectory = async (directory) => {
  const files = fs.readdirSync(directory);
  const outputDirectory = path.join(directory, 'compressed');
  if (!fs.existsSync(outputDirectory)) {
    fs.mkdirSync(outputDirectory);
  }

  for (const file of files) {
    const inputPath = path.join(directory, file);
    const outputPath = path.join(outputDirectory, file);
    if (fs.lstatSync(inputPath).isFile() && /\.(jpg|jpeg|png)$/i.test(file)) {
      await compressImage(inputPath, outputPath);
    }
  }

  console.log('Image compression completed.');
};

// Ask user for folder address and compress images
const run = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'folderPath',
      message: 'Enter the path of the folder containing images:',
      validate: (input) => fs.existsSync(input) && fs.lstatSync(input).isDirectory() ? true : 'Please enter a valid folder path'
    }
  ]);

  await compressImagesInDirectory(answers.folderPath);
};

run();
