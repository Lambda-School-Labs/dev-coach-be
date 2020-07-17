const moment = require('moment')
const db = require('../../../data/dbConfig');

async function getResources() {
    const resources = await db('resources as r')
    .join('users as u', 'u.id', '=', 'r.user_id')
    .select('u.first_name', 'u.last_name', 'u.avatar_url', 'r.id', 'r.title', 'r.description', 'r.link', 'r.thumbnail', 'r.runDate')
    return resources
}

async function getById(id) {
    const resource = await db('resources as r')
    .join('users as u', 'u.id', '=', 'r.user_id')
    .where('r.id', id)
    .select('u.first_name', 'u.last_name', 'u.avatar_url', 'r.id', 'r.title', 'r.description', 'r.link', 'r.thumbnail', 'r.runDate')
    return resource
}

async function getByUserId(id) {
    const resources = await db('resources as r')
    .join('users as u', 'u.id', '=', 'r.user_id')
    .where('r.user_id', id)
    .select('u.first_name', 'u.last_name', 'u.avatar_url', 'r.id', 'r.title', 'r.description', 'r.link', 'r.thumbnail', 'r.runDate')
    return resources
}

async function postResources(input) {
    const id = await db('resources').insert({
        title: input.title,
        description: input.description,
        link: input.link,
        thumbnail: input.thumbnail,
        runDate: moment().utc().format(),
        user_id: input.user_id
    })
    return getById(id)
}

async function putResources(changes, id) {
    const newStuff = await db('resources').update(changes).where({ id })
    return newStuff 
}

async function delResources(id) {
    const resource = await db('resources').where({ id })
    if (resource) {
        const deleted = await db('resources')
            .where({ id })
            .del();
        if (deleted) {
            return resource
        }
    }
}

module.exports = {
    getResources,
    getById,
    getByUserId,
    postResources,
    putResources,
    delResources
}