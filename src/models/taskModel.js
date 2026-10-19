class Task{
    constructor(
        id,
        title, 
        description, 
        priority, 
        status, 
        author, 
        creationDate, 
        dueDate
    ) 
    {   

        this.id = id
        this.title = title
        this.description = description
        this.priority = priority
        this.status = status
        this.author = author
        this.creationDate = creationDate
        this.dueDate = dueDate
    }
}

export default Task