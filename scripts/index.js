const colors = require('colors');
const { exec } = require('child_process');

console.log(colors.cyan('Generating documentation with Compodoc...'));

exec('npm run compodoc:build', (error, stdout, stderr) => {
  if (error) {
    console.error(colors.red(`Error generating documentation: ${error.message}`));
    return;
  }
  if (stderr) {
    console.error(colors.red(`stderr: ${stderr}`));
    return;
  }
  console.log(colors.green('Documentation generated successfully!'));
  console.log(colors.green(stdout));
});