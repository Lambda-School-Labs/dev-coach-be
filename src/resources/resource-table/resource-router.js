const express = require('express');
const Ree = require('./resource-model');
const checkAuth = require('../../utils/check-auth');

const router = express.Router()

router.get('/', checkAuth, async (req, res, next) => {
    try {
        const all = await Ree.getResources()
        res.status(200).json(all)
    } catch(err) {
        next(err)
    }

})

router.get('/:id', checkAuth, async (req, res, next) => {
    try {
        const {id} = req.params
        const resource = await Ree.getById(id)
        res.status(200).json(resource)
    } catch(err) {
        next(err)
    }
})

router.get('/user/:id', checkAuth, async (req, res, next) => {
    try {
        const {id} = req.params
        const resources = await Ree.getByUserId(id)
        res.status(200).json(resources)
    } catch(err) {
        next(err)
    }
})

router.post('/', checkAuth, async (req, res, next) => {
    try {
        const newResource = req.body
        res.status(201).json(newResource)
        await Ree.postResources(newResource)
    } catch(err) {
        next(err)
    }
})

router.put('/:id', checkAuth, async (req, res, next) => {
    try {
        const {id} = req.params
        const newResource = req.body
        res.status(201).json(await Ree.putResources(newResource, id))
    } catch(err) {
        next(err)
    }
})

router.delete('/:id', checkAuth, async (req, res, next) => {
    try {
        const {id} = req.params
        res.status(204).json(await Ree.delResources(id))
    } catch(err) {
        next(err)
    }
})

module.exports = router