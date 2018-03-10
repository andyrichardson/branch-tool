import args from 'command-line-args';

const options = [
  { name: 'help', alias: 'h', type: Boolean },
  // { name: 'src', type: String, multiple: true, defaultOption: true },
];

export const Args = {
  options: args(options),
};
