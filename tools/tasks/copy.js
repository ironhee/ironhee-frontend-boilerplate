import path from 'path';
import { promisify } from 'bluebird';
import _ncp from 'ncp';
import watch from '../lib/watch';
const ncp = promisify(_ncp);

async function copy() {
  await ncp('src/static/', 'dist/');

  if (global.WATCH) {
    const watcher = await watch('src/static/**/*.*');
    watcher.on('changed', async (file) => {
      const relPath = file.substr(path.join(__dirname, '../src/static/').length);
      await ncp(`src/static/${relPath}`, `dist/${relPath}`);
    });
  }
}

export default copy;
