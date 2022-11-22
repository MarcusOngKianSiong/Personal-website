const query = (object) => {
    let query = '?'
    for (const key in object){
        const values = key+'='+object[key]+'&'
        query += values
    }
    const completedQuery = query.split('')
    completedQuery.pop()
    const final = completedQuery.join('')
    return final
}

module.exports = {query}