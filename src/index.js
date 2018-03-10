import { spawn } from 'child_process';
import { Args, Help } from './lib';

if (Args.options.help) {
  Help.print();
  process.exit();
}

const branches = spawn('git', ['branch', '-a']);

branches.stdout.on('data',
  (data) => console.log(data.toString())
);

branches.stderr.on('data',
  () => console.log('Oops, something went wrong!')
);
