
const service = () => {
  const save = () => {};
  return { save };
};


export interface Recipe {
  title: string;
  id: number;
  description: string;
}

export interface RecipeVars {
  title: string;
  id: number;
}

export default service();
