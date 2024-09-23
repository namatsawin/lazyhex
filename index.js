#!/usr/bin/env node

const run = async () => {
    const plop = await import('plop')
    const path = await import('path')

    const plopFile = path.join(__dirname, 'plopfile.js');

    plop.run({ configPath: plopFile, dest: process.cwd() })
}

run()