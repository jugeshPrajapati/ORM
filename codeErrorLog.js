const {createLogger,transports,format} = require("winston");

const myformat = format.printf(({level,meta,timestamp})=>{
    return `${timestamp} ${level}: ${meta.message}`
})

const codeLogTransportsList= [ new transports.Console(),
                        new transports.File({filename:'internalLogsError.log'})
                        ]
const serverLogTransportsList=  [new transports.Console(),
                            new transports.File({
                                level:'warn',
                                filename:'serverErrorWarning.log'
                            }),
                            // new transports.File({
                            //     level:'error',
                            //     filename:'logsError.log'
                            // })
                        ]
const codeErrorLogs = createLogger({
    transports:codeLogTransportsList,
    format: format.combine(
                format.colorize(),
                format.json(),
                format.timestamp(),
                myformat
                )
   
        // statusLevels:true //required for saving log info in file
});
const serverLogs =createLogger({
    transports:serverLogTransportsList,
    format: format.combine(
        format.json(),
        format.timestamp(),
        format.metadata(),
        format.prettyPrint(),
        ) ,
   
    // statusLevels:true //required for saving log info in file, it is a express-winston instance
});
module.exports ={codeErrorLogs,serverLogs};