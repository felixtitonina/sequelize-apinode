module.exports = {
    dialect: 'postgres',
    host: '172.17.0.3',     //docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' < nome do container >
    username: 'postgres',
    password: 'postgres',
    database: 'sqlnode',
    define: { 
        timestamps: true,
        underscored: true
    }
}