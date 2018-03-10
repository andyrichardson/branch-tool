import usage from 'command-line-usage';


const sections = [
  {
    header: 'Branch tool',
    content: 'Provides information on local and remote branches.',
  },
  {
    header: 'Options',
    optionList: [
      {
        name: 'help, -h',
        description: 'Print this usage guide.',
      },
    ],
  },
];

export const Help = {
  print: () => console.log(usage(sections)),
};
