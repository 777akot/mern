const {Router} = require('express')
const Link = require('../models/Link')
const router = Router()

router.get('/:code', async (req, res) => {
    
    try {
        
        const link = await Link.findOne({ code: req.params.code })

        if (link) {
            
            link.clicks++
            await link.save()
            return res.redirect("http://www.google.com")
        }

        res.status(404).json({message: 'Not Found 404'})

    } catch (e) {
        res.status(500).json({message: 'Something wrong'})
    }
})

module.exports = router