const fs = require("fs")
const path = require("path")

// Define build path
const buildPath = path.join(__dirname, "../build")

// Check if the build directory exists
if (fs.existsSync(buildPath)) {
  console.log("✅ Build directory exists, ready for deployment")
} else {
  console.error("⚠️ Build directory not found. Make sure the build process completed successfully.")
}
