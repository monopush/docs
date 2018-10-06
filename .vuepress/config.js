module.exports = {
    title: '{mono}push - Documentation',
    description: 'Easyly send push notifications through Telegram.',
    themeConfig: {
        // Assumes GitHub. Can also be a full GitLab url.
        repo: 'monopush/docs',
        // Customising the header label
        // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
        repoLabel: 'GitHub',

        // Optional options for generating "Edit this page" link

        // if your docs are in a different repo from your main project:
        docsRepo: 'monopush/docs',
        // if your docs are not at the root of the repo:
        docsDir: '',
        // if your docs are in a specific branch (defaults to 'master'):
        docsBranch: 'master',
        // defaults to false, set to true to enable
        editLinks: true,
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Help us improve this page!'
    }
}