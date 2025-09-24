import Dexie from "dexie";

const db = new Dexie("nossodb")
db.version(1).stores({
    usuarios: '++id, nome, idade'
})

export default db;