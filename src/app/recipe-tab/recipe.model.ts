export class Recipe {
    constructor(
        public recipeID: number,
        public title: string, 
        public publisher: string, 
        public imgPath: string,
        public score: number,
        public srcPath: string
        ) {}
}