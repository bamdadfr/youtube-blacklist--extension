/* eslint-disable no-template-curly-in-string */
module.exports = {
  'plugins': [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    ['@semantic-release/changelog', {
      'changelogFile': 'CHANGELOG.md',
    }],
    ['@semantic-release/exec', {
      'prepareCmd': 'yarn build:prepare ${nextRelease.version} && yarn build',
    }],
    ['semantic-release-firefox-add-on', {
      'extensionId': '{7d4f976c-89d5-4711-9863-2edb7a97a09d}',
      'targetXpi': 'youtube-blacklist--extension-${nextRelease.version}.xpi',
      'artifactsDir': 'packages',
      'channel': 'listed',
    }],
    ['semantic-release-chrome', {
      'extensionId': 'okkcgfnnaecenbnggbmdmfhpkibmpilp',
      'asset': 'youtube-blacklist--extension-${nextRelease.version}.zip',
    }],
    ['@semantic-release/github', {
      'assets': [
        'packages/youtube-blacklist--extension-${nextRelease.version}.xpi',
        'youtube-blacklist--extension-${nextRelease.version}.zip',
      ],
    }],
    ['@semantic-release/git', {
      'assets': [
        'CHANGELOG.md',
        'package.json',
        'src/manifest.json',
      ],
      'message': 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
    }],
  ],
};
