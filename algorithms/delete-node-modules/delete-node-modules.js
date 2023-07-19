const fs = require('fs').promises;
const path = require('path');

async function readDirectory(rootDir) {
  rootDir = rootDir || path.resolve(__dirname);

  try {
    const files = await fs.readdir(rootDir);
    await deleteNodeModules(files, rootDir);
  } catch (error) {
    console.error('Error reading directory:', error);
  }
}

async function deleteNodeModules(files, rootDir) {
  for (let file of files) {
    const filePath = path.resolve(rootDir, file);

    try {
      const stats = await fs.stat(filePath);

      if (stats.isDirectory() && file === 'node_modules') {
        console.log('Deleting:', filePath);
        await fs.rm(filePath, { recursive: true, force: true });
      } else if (stats.isDirectory()) {
        const nestedFiles = await fs.readdir(filePath);
        await deleteNodeModules(nestedFiles, filePath);
      }
    } catch (error) {
      console.error('Error traversing directory:', error);
    }
  }
}

readDirectory(__dirname);
