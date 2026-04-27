const express = require("express")

const app = express()
app.use(express.json())

notes = []

//GET API
app.get('/notes',(req, res)=>{
    res.status(200).json({
        message:"notes fetched successfully",
        notes: notes
    })
})

//POST API
app.post('/notes', (req, res)=>{
    notes.push(req.body)

    res.status(201).json({
        message:"note created succesfully"
    })
})

//PATCH API
app.patch('/notes/:index', (req, res)=>{
    const index=req.params.index
    const description=req.body.description

    notes[index].description = description

    res.status(200).json({
        message:"description updated succesfully"
    })
})

//DELETE API
app.delete('/notes/:index',(req, res)=>{
    const index = req.params.index

    delete notes[index]

    res.status(200).json({
        message:`note ${index} got deleted successfully`
    })
})



module.exports = app