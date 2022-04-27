/*
const Connection = require("tedious").Connection
const Request = require("tedious").Request
const async = require('async');

const connectToServer = () => {
    return new Promise((resolve, reject) => {
        const config = {
            // Host or Machine name in this instance
            // Might try using FQDN or IP of SQL Server on your network
            // Can either be 'LAPTOP01' or 'localhost' if SQLEXPRESS is installed on your own machine
            // If on ABULHASANLAKHANI domain, use SERVER1 or SQLSERVER1 or whatever the network SQL Server name is
            server: 'localhost',

            authentication: {
                // Use Windows Authentication
                // Set to 'default' to use SQL Server Authentication
                type: 'ntlm',

                options: {
                    // Make sure to set this when you set 'type' as 'ntlm' or Windows Authentication
                    domain: 'ABULHASANLAKHANI',

                    // username along with the domain will make up the complete login for SQL Server like
                    // domain\username e.g. ABULHASANLAKHANI\USER1 in our case
                    userName: 'USER1',
                    password: 'robot'
                }
            },

            options: {
                database: 'AdventureWorks',

                // This option is only required if you're using SQL Server Express 
                // with named instance, which is the default setting
                // Together with the 'server' option this will make up to either 'localhost\SQLEXPRESS' or 'LAPTOP01\SQLEXPRESS'
                instanceName: 'SQLEXPRESS',

                // This setting is really important to make successfull connection
                encrypt: false,

                // This is not required but tedious API throws deprecated warning if we don't
                trustServerCertificate: false,

                // This will allow you to access the rows returned. 
                // See 'doneInProc' event below
                rowCollectionOnDone: true
            }
        }
    })
}

const connectToServer = () => {
    return new Promise((resolve, reject) => {

        // Omitting the config details for brevity
        const config = {...
        }

        let connection = new Connection(config)

        connection.connect()

        connection.on('connect', function (err) {
            if (err) {
                console.log('Error: ', err)
                reject(err)
            } else {
                // If no error, then good to go...
                console.log('Connection Successful!')
                resolve(connection)
            }
        })

        connection.on('end', () => { console.log("Connection Closed!") })
    })
}

const readFromDb = (connection, sqlQuery) => {
    return new Promise((resolve, reject) => {
        let products = []

        console.log('Reading rows from the Table...')

        // Read all rows from table
        let request = new Request(sqlQuery, (err, rowCount, rows) => {
            if (err) {
                reject(err)
            } else {
                console.log(rowCount + ' row(s) returned')
                resolve(products)
                connection.close()
            }
        })
    })
}

const readFromDb = (connection, sqlQuery) => {
    return new Promise((resolve, reject) => {
        let products = []
        // code omitted for brevity
        .
        .
        request.on('doneInProc', (rowCount, more, rows) => {
            products = []
            rows.map(row => {
                let result = {}
                row.map(child => {
                    result[child.metadata.colName] = child.value
                })
                products.push(result)
            })
        })

        // Execute SQL statement
        connection.execSql(request)
    })
}

const getProducts = () => {
    return new Promise((resolve, reject) => {
        connectToServer()
            .then(connection => {
                let sqlStr = 'SELECT TOP(2) [Name], [ProductNumber] FROM Production.Product'

                return readFromDb(connection, sqlStr)
            })
            .then(products => resolve(products))
            .catch(err => reject(err))
    })
}

ipcMain.handle('getproducts', getProducts)
*/

const Connection = require("tedious").Connection
const Request = require("tedious").Request
const { ipcMain } = require('electron')

/**
 * Connect to the database
 * @returns 'Promise' A promise object containing an open connection to the database
*/
const connectToServer = () => {
    return new Promise((resolve, reject) => {
        const config = {
            server: process.env.DB_SERVER,
            authentication: {
                type: process.env.DB_AUTHTYPE,
                options: {
                    domain: process.env.DB_DOMAIN,
                    userName: process.env.DB_USERNAME,
                    password: process.env.DB_PASSWORD
                }
            },
            options: {
                database: process.env.DB_DBNAME,
                instanceName: process.env.DB_INSTANCENAME,

                // These two settings are really important to make successfull connection
                encrypt: false,
                trustServerCertificate: false,

                // This will allow you to access the rows returned. 
                // See 'doneInProc' event below
                rowCollectionOnDone: true
            }
        }

        let connection = new Connection(config)

        connection.connect()

        connection.on('connect', function (err) {
            if (err) {
                console.log('Error: ', err)
                reject(err)
            } else {
                // If no error, then good to go...
                console.log('Connection Successful!')
                resolve(connection)
            }
        })

        connection.on('end', () => { console.log("Connection Closed!") })
    })
}

/**
 * Read data from the database
 * @param 'connection' connection object to use to connect to DB
 * @param 'sqlQuery' sqlQuery as a string to be executed against the database
 * @returns 'Promise' A promise object with either collection of data or an error
*/
const readFromDb = (connection, sqlQuery) => {
    return new Promise((resolve, reject) => {
        let products = []

        console.log('Reading rows from the Table...')

        // Read all rows from table
        let request = new Request(sqlQuery, (err, rowCount, rows) => {
            if (err) {
                reject(err)
            } else {
                console.log(rowCount + ' row(s) returned')
                resolve(products)
                connection.close()
            }
        })

        request.on('doneInProc', (rowCount, more, rows) => {
            products = []
            rows.map(row => {
                let result = {}
                row.map(child => {
                    result[child.metadata.colName] = child.value
                })
                products.push(result)
            })
        })

        // Execute SQL statement
        connection.execSql(request)
    })
}

const getProducts = () => {
    return new Promise((resolve, reject) => {
        connectToServer()
            .then(connection => {
                let sqlStr = 'SELECT TOP(2) [Name], [ProductNumber] FROM Production.Product'

                return readFromDb(connection, sqlStr)
            })
            .then(products => resolve(products))
            .catch(err => reject(err))
    })
}

ipcMain.handle('getproducts', getProducts)
