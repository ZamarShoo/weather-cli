#!/usr/bin/env node

import { getArgs } from "./helpers/args.js"
import { printHelp } from "./services/log.services.js"
import { saveKeyValue } from "./services/storage.service.js"

const initCLI = () => {
    const args = getArgs(process.argv)
    console.log(args)
    if (args.h) {
        printHelp()
    }
    if (args.s) {
        
    }
    if (args.t) {
        saveKeyValue('token', args.t)
    }
}

initCLI()