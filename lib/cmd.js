import commandLineArgs from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import chalk from 'chalk'

const header = `
██▀███  ▓█████ ▓█████▄  ██▀███   █    ██  ███▄ ▄███▓
▓██ ▒ ██▒▓█   ▀ ▒██▀ ██▌▓██ ▒ ██▒ ██  ▓██▒▓██▒▀█▀ ██▒
▓██ ░▄█ ▒▒███   ░██   █▌▓██ ░▄█ ▒▓██  ▒██░▓██    ▓██░
▒██▀▀█▄  ▒▓█  ▄ ░▓█▄   ▌▒██▀▀█▄  ▓▓█  ░██░▒██    ▒██
░██▓ ▒██▒░▒████▒░▒████▓ ░██▓ ▒██▒▒▒█████▓ ▒██▒   ░██▒
░ ▒▓ ░▒▓░░░ ▒░ ░ ▒▒▓  ▒ ░ ▒▓ ░▒▓░░▒▓▒ ▒ ▒ ░ ▒░   ░  ░
 ░▒ ░ ▒░ ░ ░  ░ ░ ▒  ▒   ░▒ ░ ▒░░░▒░ ░ ░ ░  ░      ░
 ░░   ░    ░    ░ ░  ░   ░░   ░  ░░░ ░ ░ ░      ░
  ░        ░  ░   ░       ░        ░            ░
                ░                                   `

// 定义帮助的内容
const sections = [
    {
        raw: true,
        content: chalk.blue(header)
    },
    {
        header: chalk.red('bulshit article generator'),
        content: 'generator some nonsense articles',
    },
    {
        header: chalk.red('Options'),
        optionList: [
            {
                name: 'title',
                typeLabel: '{underline string}',
                description: chalk.rgb(128, 128, 128)('the title of the article'),
            },
            {
                name: 'min',
                typeLabel: '{underline number}',
                description: chalk.rgb(128, 128, 128)('the min number of word of the article'),
            },
            {
                name: 'max',
                typeLabel: '{underline number}',
                description: chalk.rgb(128, 128, 128)('the max number of word of the article'),
            },
        ],
    },
];
const usage = commandLineUsage(sections); // 生成帮助文本

const optionDefinitions = [
    { name: 'help' },
    { name: 'title', alias: 't', type: String },
    { name: 'min', alias: 'm', type: Number },
    { name: 'max', alias: 'x', type: Number },
]
const options = commandLineArgs(optionDefinitions)

if ('help' in options) {
    console.log(usage)
    process.exit()
}

export { options }