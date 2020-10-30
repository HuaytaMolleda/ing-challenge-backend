
export const DEFAULT_ENVIRONMENT = `${process.env.NODE_ENV || 'development'}.env`
export const DEFAULT_ENV_FILE = `${process.cwd()}/environments/${DEFAULT_ENVIRONMENT}`


export const ALL_KEY_CONSTANTS = {
    MONGODB : 'mongodb',
}


export const DEFAULT_HTTP_PORT = 3000
export const SWAGGER_DESCRIPTION = {
    TITLE : 'Ingeniatec OpenApi 3.0',
    DESCRIPTION : 'Demo',
    VERSION :'1.0'
}