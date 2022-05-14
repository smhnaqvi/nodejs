const {db} = require("../util/admin");

exports.projects = async (req, res) => {

    const projectRef = db.collection("projects");
    
    try {


        projectRef.get().then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))
        })


    } catch (error) {
        return res.status(500).json(
            {general: "Somting went wrong. please try again"}
        )
    }

}