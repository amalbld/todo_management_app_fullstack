export class Todo {
  constructor(
    //pas besoin de l'id parce que lors de la creation dans la base un id s'ajoute et lors du renvoie on l'a
    // public id:number,
    public username: string,
    public description: string,
    public targetDate: Date,
    public done: boolean
  ) {}
}
