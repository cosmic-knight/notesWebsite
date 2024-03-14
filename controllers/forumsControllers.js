const getForums = (req, res)=>{
    res.json({message: "get Forums"})
}

const getSingleForum = (req, res)=>{
    const id = req.params.id
    res.json({message: "get Single Forum", id: id})
}

module.exports = {getForums, getSingleForum}