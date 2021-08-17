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
        // ['semantic-release-firefox-add-on', {
        //     'extensionId': '{}',
        //     'targetXpi': 'youtube-blacklist--extension-${nextRelease.version}.xpi',
        //     'artifactsDir': 'packages',
        //     'channel': 'listed',
        // }],
        // ['semantic-release-chrome', {
        //     'extensionId': '',
        //     'asset': 'youtube-blacklist--extension-${nextRelease.version}.zip',
        // }],
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
}