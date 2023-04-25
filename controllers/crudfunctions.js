// require the data base
const task = require ( '../models/task');
// function for loading the home page
const arrayOfIdsToAdd = [];
const arrayOfIdsToRemove = [];

module.exports.home = async (req,res)=>{
    const newTask= await task.find();
   
    return res.render('./home',{
        task_list:newTask,
        

    });
}
// function for adding a task
module.exports.addTask = async(req,res)=>{  
    const addTask= await task.create({
        
        description:req.body.description,
        category:req.body.category,
        date:req.body.date
        
    });
    try{
        const userData= addTask.save();
        return res.status(200).redirect('back');
    }catch(err){
       return res.status(400).send(err);
    }
};
// function for deleting a task
module.exports.deleteTask = async (req,res)=>{
    const id = await req.query.id;
    
    try{
        const remove = await task.findByIdAndDelete(id);
        return res.redirect('back');
    }catch(err){
        res.status(400).json({"error":err.message});
    }


};
// function for adding a checkbox
module.exports.addCheckbox = async(req, res) => {
   
    
    arrayOfIdsToAdd.push(req.body.id);
    // to get unique values from the array
    const Ids =Array.from(new Set(arrayOfIdsToAdd));
    
    for (let i of Ids){
        const id = await i;
        const update = await task.findById(id);
        update.checkBoxx = true;
        
        await update.save();
    }

    res.redirect('back');
  }
// function for removing a checkbox
module.exports.removeCheckbox = async(req, res) => {
   
   
    
    arrayOfIdsToRemove.push(req.body.id);
    // to get unique values from the array
    const Ids =Array.from(new Set(arrayOfIdsToRemove));
    
    for (let i =0;i<Ids.length;i++){
        const id = await Ids[i];
        const update = await task.findById(id);
        update.checkBoxx = false;
        
        await update.save();
    }

    res.redirect('back');
  }

  module.exports.completedTask = async(req,res)=>{
    const completedTask = await task.find({'checkBoxx':'true'});
    return res.render('./home',{
        task_list:completedTask,
        

    });
  }
  module.exports.unCompletedTask = async(req,res)=>{
    const unCompletedTask = await task.find({'checkBoxx':'false'});
    return res.render('./home',{
        task_list:unCompletedTask,
        

    });
  }
  module.exports.clearCompletedTask = async(req,res)=>{
    const clearCompletedTask = await task.deleteMany({'checkBoxx':'true'});
    return res.redirect('back')
  }
