const fs = require("fs");
const path = require("path");

// Define source and destination paths
const buildPath = path.join(__dirname, "../build");
const publicPath = path.join(buildPath, "public");

// Ensure the public directory exists in build
if (!fs.existsSync(publicPath)) {
  fs.mkdirSync(publicPath);
}

// Move all image files to build/public/

if (fs.existsSync(buildPath)) {
  fs.readdirSync(buildPath).forEach(file => {

    const filePath = path.join(buildPath, file);

    //Make sure the file is not a directory
    if(!fs.lstatSync(filePath).isDirectory())
    {
        const newFilePath = path.join(publicPath, file);
        fs.renameSync(filePath, newFilePath);
    } 
  });

  console.log("✅ Moved files to build/public/");
} else {
  console.log("⚠️ No files found in build/");
}
