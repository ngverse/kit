module.exports = {
  branches: ['main'],
  repositoryUrl: 'https://github.com/ngverse/kit',
  preset: 'conventionalcommits',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/npm',
      {
        pkgRoot: 'dist/kit',
      },
    ],
    [
      '@semantic-release/git',
      {
        assets: ['projects/kit/package.json'],
        message: 'chore(release): update package.json [skip ci]',
      },
    ],
    ['@semantic-release/github'],
  ],
};
