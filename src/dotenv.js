const findAndReplace = (content, env) => {
  let matches = 0;
  content = content.replace(/env\.(\w+)/g, (match, envVar) => {
    matches++;
    if (env[envVar]) {
      return env[envVar];
    } else {
      throw new Error(`found ${match} but ${envVar} is missing in env.` +
        'Did you forget to set your environment variables?',
      );
    }
  });
  if (matches === 0) {
    console.info('did not find any placeholder env variables');
    return;
  }
  return content;
};

module.exports = findAndReplace;
