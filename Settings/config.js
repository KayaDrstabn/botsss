module.exports = {

    token: process.env['token'],

    authDevelopers: ["1214250364597960775", "758295957271347201", "929725274147405841"], // developers
    authOwners: ["1214250364597960775", "758295957271347201", "929725274147405841"], // whitelist

    webhook: {
        name: 'AuthCord',
        avatar: 'https://cdn.discordapp.com/avatars/1208117209046450227/b8d93c3f53a47237b232253164bfa5c5.webp?size=128',
        url: process.env.url,
    },

    client: {
        id: "1216103189116616834",
        secret: "N75HaXhtmlWnOpn5oyblxgDD-WTf9kU4",
        redirect_uri: "https://bbee925e-cf14-430d-8a3f-832fa1b6ab2d-00-2ug2x4r0j4j0g.sisko.replit.dev/auth",
        scope: ['identify', 'guilds.join'],
        footer: "AuthCord v1.0", // footer
        serverLink: "https://discord.gg/VRr8vAyhW7", // server
    },

    web: {
        port: 319,
        apiKey: "6wohla1fpz766aew"
    },

    database: {

        URI: process.env['s'],

    }

}
